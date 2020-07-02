import { encodeDiscountOpaqueId } from '../xforms/id.js'

export default {
  billing: (cart) => {
    return !cart.billing ? null : cart.billing.map((bill) => {
      const { data: { discountId } } = bill
      return {
        ...bill,
        data: {
          ...bill.data,
          discountId: encodeDiscountOpaqueId(discountId)
        }
      }
    })
  }
};