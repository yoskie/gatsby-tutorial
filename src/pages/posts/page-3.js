import React from 'react'
import { Link } from 'gatsby'

import Layout from '../../components/layout'

export default () => (
  <Layout>
    <div>
      <h1>Hello from Page 3</h1>
      <Link to="/page-2">GO to page 2</Link>
    </div>
  </Layout>
)
