import encodeOpaqueId from "@reactioncommerce/api-utils/encodeOpaqueId.js";

const namespaces = {
  Discount: "reaction/discount"
};

export const encodeDiscountOpaqueId = encodeOpaqueId(namespaces.Discount);