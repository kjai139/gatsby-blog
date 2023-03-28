import { graphql } from 'gatsby'
import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'


const BlogPage = ({data}) => {

    const renderFileTitles = () => {
        return data.allFile.nodes.map(node => 
            <li key={node.name}>
                {node.name}
            </li>
        )
    }



    return (
        <Layout pageTitle="Blog Posts">
            <ul>
                {renderFileTitles()}
            </ul>
        </Layout>
    )
}

export const query = graphql`
    query {
        allFile {
            nodes {
                name
            }
        }
    }
`


export const Head = () => <Seo title="Blog posts" description="blogposts" />

export default BlogPage