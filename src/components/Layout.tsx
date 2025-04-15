import { ChildrenPropsModel } from '@/models/childrenPropsModel'
import React from 'react'
import Navbar from './Navbar'
import Container from './Container'

function Layout({children} : ChildrenPropsModel) {
  return (
    <>  
        <Navbar/>
        <Container>{children}</Container>
    </>
  )
}

export default Layout