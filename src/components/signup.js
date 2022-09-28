import 'bootstrap/dist/css/bootstrap.min.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { motion } from 'framer-motion/dist/framer-motion'
function Signup() {
  const [color, setColor] = useState('green')
  const [data, setData] = useState({
    username: '',
    password: '',
    email: '',
  })

  const [error, setError] = useState('Password must be at least 8 parameters')

  const handle = (e) => {
    const newData = { ...data }
    newData[e.target.id] = e.target.value
    setData(newData)
    // console.log(data);
  }

  const submit = async (e) => {
    e.preventDefault()
    const result = await axios.post(
      'https://fund-my-laptop-2001.herokuapp.com/api/auth/signup',
      { data },
    )
    console.log(result)
    if (!result.data) setError('Unable to process data')
    if (result.data.message === 'success') {
      localStorage.setItem('accessToken', result.data.accessToken)
      localStorage.setItem('refreshToken', result.data.refreshToken)
      window.location.assign(
        'https://fund-my-laptop-2001.netlify.app/dashboard',
      )
    } else {
      setError(result.data.message)
    }
  }
  useEffect(async () => {
    const token = localStorage.getItem('accessToken')
    if (!token) console.log('Unable to get token')
    await axios
      .get('/api/read/profile', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      .then((result) => {
        window.location.assign('http://localhost:3000/dashboard')
      })
      .catch((error) => {
        window.location.assign('http://localhost:3000/login')
      })
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
          <h4 className="mb-3">Sign Up</h4>
          <form
            onSubmit={(e) => {
              submit(e)
            }}
          >
            <div className="form-group mb-4">
              <input
                type="text"
                onChange={(e) => handle(e)}
                id="username"
                placeholder="Full name"
                className="form-control"
              />
            </div>
            <div className="form-group mb-4">
              <input
                onChange={(e) => handle(e)}
                type="email"
                placeholder="Email address"
                id="email"
                className="form-control"
              />
            </div>

            <div className="form-group mb-2">
              <input
                onChange={(e) => handle(e)}
                type="password"
                placeholder="password"
                id="password"
                className="form-control"
              />
            </div>
            <div style={{ fontSize: '10px', marginBottom: '0px' }}>
              <center>
                <i style={{ marginBottom: '-1px', color: 'red' }}>{error}</i>
              </center>
            </div>
            <input
              type="submit"
              className="form-control success mb-3"
              value="Sign Up"
            />
          </form>
          <p className="text-center mt-3 mb-0">
            Already have an account? <a href="/login">Sign In</a>
          </p>
          <center>© 2021 FUND MY LAPTOP - All Rights Reserved.</center>
        </div>

        <div className="col-sm-12 col-md-6 col-lg-4"></div>
      </div>
    </motion.div>
  )
}

export default Signup
