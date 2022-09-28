import React, { useEffect } from 'react'
import useToggle from '../../Hooks/useToggle'
import StickyMenu from '../../lib/StickyMenu'
import BackToTop from '../BackToTop'
import FooterHomeEight from '../HomeEight/FooterHomeEight'
import Drawer from '../Mobile/Drawer'
import DashboardHeader from '../Dashboard/DashboardHeader'
import Admin from './admin'

function Dashboard() {
  useEffect(() => {
    StickyMenu()
  })
  const [drawer, drawerAction] = useToggle(false)
  return (
    <>
      <Drawer drawer={drawer} action={drawerAction.toggle} />
      <DashboardHeader action={drawerAction.toggle} />
      <Admin />
      <FooterHomeEight />
      <BackToTop />
    </>
  )
}

export default Dashboard
