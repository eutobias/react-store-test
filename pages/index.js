import { useContext, useEffect } from 'react'
import { DataContext } from 'contexts/context'

import {getProduct, getProducts} from 'services/contentfulService'

import Header from 'components/Header/Header'
import ProductInfo from 'components/ProductInfo/ProductInfo'
import ProductRecomendations from 'components/ProductRecomendations/ProductRecomendations'
import Footer from 'components/Footer/Footer'

const Index = (props) => {
  const {_state, dispatch} = useContext(DataContext)

  useEffect(() => {
    if (props.products && props.product) {
      dispatch({ type: 'SET_DATA', payload: { ...props } })
    }
  }, [props])

  return (
    <>
      <Header />
      <ProductInfo />
      <ProductRecomendations />
      <Footer />
    </>
  );
}

export default Index;


export async function getStaticProps(context) {

  const products = await getProducts()
  const product = await getProduct('sI8OUlaogoQpYQa96PHsE')

  return {
    props: {products, product}, // will be passed to the page component as props
  }
}