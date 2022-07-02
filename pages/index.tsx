import type { NextPage } from 'next'
import Head from 'next/head'
import { type } from 'os'
import NavBar from '../components/NavBar'
import { PropsProductCards } from '../components/ProductCards'
import RefinePrice from '../components/RefinePrice'
import StoreCatalog from '../components/StoreCatalog'
import { Content } from '../styles/Index'

const BASE_URL = 'https://wine-back-test.herokuapp.com/products?page=1&limit=10'

export async function getStaticProps() {
  const res = await fetch(BASE_URL)
  const data = await res.json()
  return {
    props: {
      productsList: data.items,
    },
  }
}

type PropsHome = {
  productsList: PropsProductCards[]
}

const Home: NextPage<PropsHome> = ({ productsList }) => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>
      <NavBar />
      <Content>
        <RefinePrice />
        <StoreCatalog data={ productsList } />
      </Content>
    </div>
  )
}

export default Home
