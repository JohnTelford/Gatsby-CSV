import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default () => (
  <StaticQuery
    query={graphql`
      query Csv {
          johnwayneCsv {
            nconst
            primaryName
            birthYear
            deathYear
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
    <h2>Using a CSV as a data source in Gatsby</h2>
    <p>These fields were found in johnwayne.csv test file.</p>
    <ul>
          <li> nconst: {data.johnwayneCsv.nconst}</li>
          <li>primaryName: {data.johnwayneCsv.primaryName}</li>
          <li>birthYear: {data.johnwayneCsv.birthYear}</li>
          <li>deathYear: {data.johnwayneCsv.deathYear}</li>
          <li>primaryProfession: {data.johnwayneCsv.primaryProfession}</li>        
    </ul>
  </Layout>
)
