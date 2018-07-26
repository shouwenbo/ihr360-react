export const Action = {
  'ADD_TO_CART': 'ADD_TO_CART',
  'DEL_TO_CART': 'DEL_TO_CART'
}

export function addToCart(product, quantity, unitCost) {
  return {
    type: Action.ADD_TO_CART,
    payload: {
      product,
      quantity,
      unitCost
    }
  }
}