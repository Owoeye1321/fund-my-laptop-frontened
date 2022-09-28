import React, { useState } from 'react'
import axios from 'axios'
function SponserHomeEight() {
  const [data, setData] = useState({
    username: '',
    email: '',
    password: '',
  })
  const [error, setError] = useState('')

  const onHandle = (e) => {
    const details = { ...data }
    details[e.target.id] = e.target.value
    setData(details)
  }
  const submitHandle = async (e) => {
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
  return (
    <>
      <section className="appie-about-8-area pt-100 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="appie-signup-box">
                <h3 className="title">Get Started.</h3>
                <form
                  onSubmit={(e) => {
                    submitHandle(e)
                  }}
                >
                  <div className="input-box">
                    <input
                      onChange={(e) => onHandle(e)}
                      id="username"
                      type="text"
                      placeholder="Username"
                    />
                  </div>
                  <div className="input-box">
                    <input
                      onChange={(e) => onHandle(e)}
                      id="email"
                      type="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="input-box">
                    <input
                      onChange={(e) => onHandle(e)}
                      id="password"
                      type="password"
                      placeholder="Password"
                    />
                  </div>
                  <div className="input-box">
                    <button type="submit">Sign Up</button>
                  </div>
                  <div className="appie_checkbox_common checkbox_style2">
                    <div>
                      <input type="checkbox" name="checkbox2" id="checkbox4" />
                      <label htmlFor="checkbox4">
                        <span></span>By signing up you agree to our
                        <a href="#">Terms & Conditions.</a>
                      </label>
                    </div>
                    <div style={{ fontSize: '15px', marginBottom: '0px' }}>
                      <>
                        <i style={{ marginBottom: '-1px', color: 'red' }}>
                          {error}
                        </i>
                      </>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SponserHomeEight
