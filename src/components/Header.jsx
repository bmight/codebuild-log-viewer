import React from 'react'
import {
  Navbar,
  NavbarBrand
} from 'reactstrap'

export default (props) => (
  <div>
    <Navbar color='dark' dark fixed='top' className='bg-gray' expand='md'>
      <NavbarBrand tag='a' href='#'>
        CodeBuild Log Viewer
      </NavbarBrand>
    </Navbar>
  </div>
)
