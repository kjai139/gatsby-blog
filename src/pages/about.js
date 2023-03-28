import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <div>
        <p className='testfont-blue'>hello tehre</p>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="About Page" description="An about page about things"/>

export default AboutPage