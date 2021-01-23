import { useContext, useEffect } from 'react'
import { DataContext } from 'contexts/context'

import {getProduct, getProducts} from 'services/contentfulService'

import Header from 'components/Header/Header'
import ProductInfo from 'components/ProductInfo/ProductInfo'
import ProductRecomendations from 'components/ProductRecomendations/ProductRecomendations'
import Footer from 'components/Footer/Footer'
import ModalAddedToCart from 'components/ModalAddedToCart/ModalAddedToCart'
import Shopcart from 'components/Shopcart/Shopcart'

const Index = (props) => {
  const {state, dispatch} = useContext(DataContext)

  useEffect(() => {
    if (props.products && props.product) {
      dispatch({ type: 'SET_DATA', payload: { ...props } })
    }
  }, [props])

  useEffect(() => {

  },[state])

  return (
    <>
      <Header />
      <ProductInfo />
      <ProductRecomendations />
      <Footer />
      <ModalAddedToCart />
      <Shopcart />
    </>
  );
}

export default Index;

export async function getServerSideProps(context) {

  const products = await getProducts()
  const product = await getProduct(context.params.pid)

  return {
    props: {products, product}, // will be passed to the page component as props
  }
}