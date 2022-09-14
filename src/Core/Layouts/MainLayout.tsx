import React from 'react'
import Navbar from '../Menus/Navbar'
import SideMenu from '../Menus/SideMenu'
import { MainLayoutProps } from '../Types/Layouts/MainLayout/mainLayoutProps'


function MainLayout(props: MainLayoutProps) {
  return (
    <div className='w-screen h-screen bg-slate-100'>
      <div className='flex'>
        <div>
          <SideMenu />
        </div>

        <div className='w-full'>
          <div>
            <Navbar/>
          </div>
          <div>
          {props.children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainLayout