
import { Link, useStaticQuery, graphql } from 'gatsby'
import * as React from 'react'
import { 
    container,
    heading,
    navLinks
} from "./layout.module.css"
import "./styles/styles.css"

const Layout = ({ pageTitle, children }) => {

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  console.log(data)
  console.log(data.site.siteMetadata)

  return (
    <div className={ container }>
      
      <nav>
        <ul className={navLinks}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/blog">Blog Posts</Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1>{pageTitle}</h1>
        <h2>{data.site.siteMetadata.title}</h2>
        {children}
      </main>
    </div>
  )
}

export default Layout