const addItens = (cart, item) => {
  const _cart = cart || []
  const _item = {
    id: item.sys.id,
    quantity: 1,
    data: item
  }

  let found = false
  _cart.map((v) => {
    if (v.id === _item.id) {
      v.quantity += 1
      found = true
    }
  })

  if (!found) {
    _cart.push(_item)
  }

  return _cart
}

const increaseProductQuantity = (cart, item) => {
  const _cart = cart || []

  const _item = {
    id: item.data.sys.id,
    quantity: item.quantity,
    data: item.data
  }

  _cart.map((v) => {
    if (v.id === _item.id) {
      v.quantity += 1
    }
  })

  return _cart
}

const decreaseProductQuantity = (cart, item) => {
  const _cart = cart || []
  const _item = {
    id: item.data.sys.id,
    quantity: item.quantity,
    data: item.data
  }

  _cart.map((v) => {
    if (v.id === _item.id) {
      v.quantity -= 1

      if (v.quantity === 0)
        v.quantity = 1
    }
  })

  return _cart
}

const remove = (cart, item) => {
  let _cart = []
  const _item = {
    id: item.data.sys.id,
    quantity: item.quantity,
    data: item.data
  }

  _cart = cart.filter((v) => {
    if (v.id === _item.id) {
      return false
    }

    return true
  })

  return _cart
}

const countItens = (cart) => {
  let quantity = 0

  cart.map((v) => {
    quantity += v.quantity
  })

  return quantity
}

const getTotal = (cart) => {

  let value = 0

  cart.map((v) => {
    if (v.data.fields.priceWithDiscount) {
      value += v.data.fields.priceWithDiscount * v.quantity
    } else {
      value += v.data.fields.price * v.quantity
    }
  })

  return value
}

export { addItens, increaseProductQuantity, decreaseProductQuantity, remove, countItens, getTotal }