import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export const query =graphql`
      query Johnwayne {
          johnwayneCsv {
            nconst
            primaryName
            birthYear
            deathYear
            primaryProfession
          }
        }
 `   


const IndexPage = ({ data }) => {
    return(
      <div>
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
    </div>
  )
}

export default IndexPage
