import { price } from '../../tl/tl.helper';
import { it, expect } from "@jest/globals";

it('should return an object with \'value\' and \'currency\' keys', () => {
    const sc_retail_product = {
        min_price: 10,
        currency: 'USD'
    };
    const result = price(sc_retail_product);
    expect(result).toHaveProperty('value');
    expect(result).toHaveProperty('currency');
});