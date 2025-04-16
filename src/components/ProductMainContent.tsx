import { ChildrenPropsModel } from '@/models/childrenPropsModel'
import React from 'react'

function ProductMainContent({ children }: ChildrenPropsModel) {
  return (
    <div className='col-span-5'>{children}</div>
  )
}

export default ProductMainContent