import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default () => (
  <StaticQuery
    query={graphql`
      query Johnwayne {
          johnwayneCsv {
            nconst
            primaryName
            primaryProfession
          }
        }
    `}
    render={data => <IndexPage data={data} />}
  />
)

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>Using a CSV as a data source in Gatsby</h1>
    <p>These people were found in the CSV file.</p>
    <ul>
          <li>
            {data.johnwayneCsv.nconst} - {data.johnwayneCsv.primaryName} - {data.johnwayneCsv.primaryProfession}
          </li>
        
    </ul>
  </Layout>
)
