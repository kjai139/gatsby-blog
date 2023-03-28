import { graphql, useStaticQuery } from 'gatsby'
import * as React from 'react'


const Seo = ({ title, description }) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    description
                    siteUrl
                }
            }
        }
    `)

    return (
        <>
        <title>{title ? title : data.site.siteMetadata.title}</title>
        <meta name='description' content={description? description : data.site.siteMetadata.description} />
        </>
    )
}

export default Seo