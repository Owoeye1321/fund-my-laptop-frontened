import 'bootstrap/dist/css/bootstrap.min.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { motion } from 'framer-motion/dist/framer-motion'

function Login() {
  const [error, setError] = useState('')
  const [data, setData] = useState({
    username: '',
    password: '',
  })
  const handle = (e) => {
    const newData = { ...data }
    newData[e.target.id] = e.target.value
    setData(newData)
  }

  const submit = async (e) => {
    e.preventDefault()
    const response = await axios.post('/api/auth/login', { data })
    if (!response.data) setError('Unable to process data')
    if (response.data.message === 'success') {
      localStorage.setItem('accessToken', response.data.accessToken)
      localStorage.setItem('refreshToken', response.data.refreshToken)
      window.location.assign('http://localhost:3000/dashboard')
    } else {
      setError(response.data.message)
    }
  }
  useEffect(async () => {
    const token = localStorage.getItem('accessToken')
    if (!token) console.log('Unable to get token')
    const check = await axios.get('/api/read/profile', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
    if (check.data.message !== 'unauthorized')
      window.location.assign('http://localhost:3000/dashboard')
  }, [])
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="row">
        <div className="col-sm-12 col-md-3 col-lg-4"></div>
        <div
          className="col-sm-12 col-md-6 col-lg-4"
          style={{ padding: '150px 50px 50px 50px' }}
        >
          <h4 className="mb-3">Login</h4>
          <form onSubmit={(e) => submit(e)}>
            <div className="form-group">
              <label>Username</label>
              <input
                onChange={(e) => handle(e)}
                type="text"
                id="username"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                onChange={(e) => handle(e)}
                type="password"
                id="password"
                className="form-control"
              />
            </div>
            <div style={{ fontSize: '10px', marginBottom: '0px' }}>
              <center>
                <i style={{ marginBottom: '-1px', color: 'red' }}>{error}</i>
              </center>
            </div>
            <div className="clearfix mb-3">
              <div className="float-left">
                <i style={{ fontSize: '13px' }}>
                  No account? <a href="/signup">Sign Up</a>
                </i>
              </div>
              <div className="float-right">
                <a
                  style={{ fontSize: '13px' }}
                  id="forgot"
                  href="/forgetpassword"
                >
                  Forgot Password?
                </a>
              </div>
            </div>
            <input type="submit" className="form-control success mb-3" />
          </form>

          <center>© 2021 FUND MY LAPTOP - All Rights Reserved.</center>
        </div>

        <div className="col-sm-12 col-md-3 col-lg-4"></div>
      </div>
    </motion.div>
  )
}

export default Login
