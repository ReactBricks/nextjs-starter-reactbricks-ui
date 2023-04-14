import Head from 'next/head'
import React from 'react'
import { Admin, Playground } from 'react-bricks'

const AdminPlayground: React.FC = () => {
  return (
    <Admin>
      <Head>
        <title>Playground</title>
      </Head>
      <Playground />
    </Admin>
  )
}

export default AdminPlayground
