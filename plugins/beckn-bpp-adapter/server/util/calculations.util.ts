export class CalculationsUtil {
    static calculateOrderAmount(items: any, itemSelected: any) {
        let totalAmount = 0;
      
        items?.forEach((item: any) => {
          const scProduct = item?.sc_retail_product;
      
          // Find the selected quantity for the item from itemSelected
          const matchingTag = itemSelected.find((tag: any) => String(tag.id) === String(item.id));
          const selectedQuantity = matchingTag?.quantity?.selected?.count ?? 1; 
      
          if (scProduct?.base_fee) {
            totalAmount += Number(scProduct.base_fee) * selectedQuantity;
          }
      
          scProduct?.price_bareakup_ids?.forEach((price_bareakup_id: any) => {
            const baseValue = Number(price_bareakup_id.value ?? 0); 
            const adjustedValue = price_bareakup_id.is_item_qty_dependent
              ? baseValue * selectedQuantity
              : baseValue;
          
            totalAmount += adjustedValue;
          });
        });
        return totalAmount;
      }
      
}
