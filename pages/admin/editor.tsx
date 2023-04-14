import Head from 'next/head'
import React from 'react'
import { Admin, Editor } from 'react-bricks'

const AdminEditor: React.FC = () => {
  return (
    <Admin>
      <Head>
        <title>Editor</title>
      </Head>
      <Editor />
    </Admin>
  )
}

export default AdminEditor
