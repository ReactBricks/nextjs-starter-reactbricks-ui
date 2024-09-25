import React, { useEffect } from 'react'
import { Admin, SsoLoginSuccess } from 'react-bricks'

const AdminSsoSuccess: React.FC = () => {
  useEffect(() => {
    document.title = 'SSO Login Success'
  }, [])

  return (
    <Admin isLogin>
      <SsoLoginSuccess />
    </Admin>
  )
}

export default AdminSsoSuccess
