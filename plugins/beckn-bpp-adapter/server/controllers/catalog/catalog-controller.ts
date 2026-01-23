import { Strapi } from '@strapi/strapi';
import { generateCatalogs } from '../../util/strapi-catalog-utility/src/index';
import * as fs from 'fs';
import * as path from 'path';
import * as os from 'os';

export default ({ strapi }: { strapi: Strapi }) => ({
  async uploadCatalog(ctx) {
    let tempDir: string | null = null;
    let itemsPath: string | null = null;
    let providersPath: string | null = null;

    try {
      const files = (ctx.request as any).files || {};
      
      if (!files.items || !files.providers) {
        ctx.status = 400;
        ctx.body = {
          error: 'Both items.csv and providers.csv files are required. Please upload files with field names "items" and "providers"',
        };
        return;
      }

      const itemsFile = Array.isArray(files.items) ? files.items[0] : files.items;
      const providersFile = Array.isArray(files.providers) ? files.providers[0] : files.providers;

      // Validate file types
      const itemsFileName = itemsFile.name || itemsFile.originalFilename || itemsFile.originalname || '';
      const providersFileName = providersFile.name || providersFile.originalFilename || providersFile.originalname || '';

      if (!itemsFileName.endsWith('.csv')) {
        ctx.status = 400;
        ctx.body = {
          error: 'Items file must be a CSV file',
        };
        return;
      }

      if (!providersFileName.endsWith('.csv')) {
        ctx.status = 400;
        ctx.body = {
          error: 'Providers file must be a CSV file',
        };
        return;
      }

      // Create temporary directory for uploaded files
      tempDir = path.join(os.tmpdir(), `catalog-upload-${Date.now()}`);
      fs.mkdirSync(tempDir, { recursive: true });

      itemsPath = path.join(tempDir, 'items.csv');
      providersPath = path.join(tempDir, 'providers.csv');

      const itemsFilePath = itemsFile.path || itemsFile.filepath;
      const providersFilePath = providersFile.path || providersFile.filepath;

      if (itemsFilePath) {
        fs.copyFileSync(itemsFilePath, itemsPath);
      } else {
        throw new Error('Unable to process items file - file path not found');
      }

      if (providersFilePath) {
        fs.copyFileSync(providersFilePath, providersPath);
      } else {
        throw new Error('Unable to process providers file - file path not found');
      }

      // Call generateCatalogs function
      await generateCatalogs(providersPath, itemsPath);

      // Clean up temporary files
      if (itemsPath && fs.existsSync(itemsPath)) fs.unlinkSync(itemsPath);
      if (providersPath && fs.existsSync(providersPath)) fs.unlinkSync(providersPath);
      if (tempDir && fs.existsSync(tempDir)) fs.rmdirSync(tempDir);

      // Clean up original uploaded files if they exist
      if (itemsFilePath && fs.existsSync(itemsFilePath)) {
        try {
          fs.unlinkSync(itemsFilePath);
        } catch (e) {
          // Ignore cleanup errors
        }
      }
      if (providersFilePath && fs.existsSync(providersFilePath)) {
        try {
          fs.unlinkSync(providersFilePath);
        } catch (e) {
          // Ignore cleanup errors
        }
      }

      ctx.status = 200;
      ctx.body = {
        message: 'Catalog uploaded and processed successfully',
      };
    } catch (error: any) {
      // Clean up temporary files in case of error
      if (itemsPath && fs.existsSync(itemsPath)) {
        try {
          fs.unlinkSync(itemsPath);
        } catch (e) {
          // Ignore
        }
      }
      if (providersPath && fs.existsSync(providersPath)) {
        try {
          fs.unlinkSync(providersPath);
        } catch (e) {
          // Ignore
        }
      }
      if (tempDir && fs.existsSync(tempDir)) {
        try {
          fs.rmdirSync(tempDir);
        } catch (e) {
          // Ignore
        }
      }

      ctx.status = 500;
      ctx.body = {
        error: 'Failed to process catalog upload',
        message: error.message || 'Unknown error',
      };
    }
  },
});