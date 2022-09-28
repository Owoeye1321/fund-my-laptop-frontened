import React, { useEffect } from 'react'
import logo from '../../assets/images/how-it-work-thumb.png'
import StickyMenu from '../../lib/StickyMenu'
import Navigation from '../Navigation'
import { Link } from 'react-router-dom'
import axios from 'axios'

function DashboardHeader({ action }) {
  const refreshToken = localStorage.getItem('refreshToken')
  useEffect(() => {
    StickyMenu()
  })
  const logOut = async () => {
    await axios
      .get('https://fund-my-laptop-2001.herokuapp.com/api/logout/', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${refreshToken}`,
        },
      })
      .then((result) => {
        if (result.data === 'success') localStorage.clear()
        window.location.assign(
          'https://fund-my-laptop-2001.netlify.app/dashboard',
        )
      })
      .catch((error) => {
        console.log(error)
      })
  }
  return (
    <>
      <header className="appie-header-area appie-header-8-area appie-sticky">
        <div className="container">
          <div className="header-nav-box header-nav-box-6">
            <div className="row align-items-center">
              <div className="col-lg-2 col-md-4 col-sm-5 col-6 order-1 order-sm-1">
                <div className="">
                  <a href="/">
                    <img width={'80px'} height={'60px'} src={logo} alt="" />
                  </a>
                </div>
              </div>
              <div
                className="col-lg-6 col-md-1 col-sm-1 order-3 order-sm-2"
                style={{ marginLeft: '-50px' }}
              >
                <div className="appie-header-main-menu">
                  <Navigation />
                </div>
              </div>
              <div className="col-lg-4 col-md-7 col-sm-6 col-6 order-2 order-sm-3">
                <div className="appie-btn-box text-right">
                  <a className="login-btn" href="/login">
                    <i className="fal fa-user" /> Login
                  </a>
                  <Link onClick={() => logOut()} className="main-btn ml-30">
                    LogOut
                  </Link>
                  <div
                    onClick={(e) => action(e)}
                    className="toggle-btn ml-30 canvas_open d-lg-none d-block"
                  >
                    <i className="fa fa-bars" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default DashboardHeader
