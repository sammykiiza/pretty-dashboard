import React from 'react'
import SideMenu from '../Menus/SideMenu'
import { MainLayoutProps } from '../Types/Layouts/MainLayout/mainLayoutProps'


function MainLayout(props: MainLayoutProps) {
  return (
    <>
      <SideMenu />
      <div>
        {props.children}
      </div>
    </>
  )
}

export default MainLayout