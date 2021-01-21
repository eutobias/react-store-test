const initialState = {
  products: null,
  product: null
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_DATA':
      const { product, products } = action.payload

      console.log(action)

      return {
        ...state,
        product,
        products
      }
    default:
      return state
  }
}

export { initialState, reducer }