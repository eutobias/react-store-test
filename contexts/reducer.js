import { addItens, increaseProductQuantity, decreaseProductQuantity, remove } from 'helpers/cartHelper'
import { lockScroll, unLockScroll } from 'helpers/scrollHandler'

const initialState = {
  products: null,
  product: null,
  cart: null,
  addToCartModal: {
    visible: false,
    product: null
  },
  cartModal: {
    visible: false,
    products: null
  }
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_DATA':
      return {
        ...state,
        product: action.payload.product,
        products: action.payload.products
      }
    case 'ADD_TO_CART':
      /* 
        economizei um pouco de tempo aqui e não tratei as cores e tamanhos
        pra levar em consideração quando adicionava ao carrinho;
        esse comentário é pra dizer que isso foi proposital, 
        pra ter mais tempo pra fazer as outras partes
      */
      return {
        ...state,
        cart: addItens(state.cart, state.product)
      }
    case 'INCREASE_PRODUCT_QUANTITY':
      return {
        ...state,
        cart: increaseProductQuantity(state.cart, action.payload)
      }
    case 'DECREASE_PRODUCT_QUANTITY':
      return {
        ...state,
        cart: decreaseProductQuantity(state.cart, action.payload)
      }
    case 'REMOVE_PRODUCT':
      return {
        ...state,
        cart: remove(state.cart, action.payload)
      }
    case 'SHOW_ADD_TO_CART_MODAL':
      lockScroll()
      return {
        ...state,
        addToCartModal: {
          visible: true,
          product: state.product
        }
      }
    case 'HIDE_ADD_TO_CART_MODAL':
      unLockScroll()
      return {
        ...state,
        addToCartModal: {
          visible: false,
          product: null
        }
      }
    case 'SHOW_CART_MODAL':
      lockScroll()
      return {
        ...state,
        cartModal: {
          visible: true
        }
      }
    case 'HIDE_CART_MODAL':
      unLockScroll()
      return {
        ...state,
        cartModal: {
          visible: false
        }
      }
    default:
      return state
  }
}

export { initialState, reducer }