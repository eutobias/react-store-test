import * as contentful from 'contentful'
import { SPACE_ID, ACCESS_TOKEN } from '../contexts/config'

const client = contentful.createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN
})

const getProducts = () => {
  return new Promise((resolve, reject) => {
    client.getEntries({
      'content_type': 'product'
    })
    .then((result) => {
      resolve(result)
    }).catch((e) => {
      reject(e)
    })

  })
}

const getProduct = (entry) => {
  return new Promise((resolve, reject) => {
    client.getEntry(entry)
    .then((result) => {
      resolve(result)
    }).catch((e) => {
      reject(e)
    })
  })
}

export {getProducts, getProduct}