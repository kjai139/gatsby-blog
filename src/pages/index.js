import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'
import Layout from '../components/layout'


const IndexPage = () => {
  return (
    <Layout pageTitle="HomePage">
      <p className='testFont'>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage alt="a random red image" src="../images/icon.png" className='logo'></StaticImage>
    </Layout>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage