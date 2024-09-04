import React, { Children } from 'react'

const Layout = ({children}) => {
  return (
   <div>
     <header>
        Header
    </header>
    {children}
   </div>
  )
}

export default Layout