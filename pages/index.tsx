import type { NextPage } from 'next'
import Head from 'next/head'
import NavBar from '../components/NavBar'
import RefinePrice from '../components/RefinePrice'
import StoreCatalog from '../components/StoreCatalog'
import { Content } from '../styles/Index'


const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>
      <NavBar />
      <Content>
        <RefinePrice />
        <StoreCatalog />
      </Content>
    </div>
  )
}

export default Home
