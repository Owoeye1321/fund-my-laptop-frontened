import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
//import axios from "axios";
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
    // e.preventDefault();
    // const result = await axios.post("https://futa-hostels-10467.herokuapp.com/signUp", {data});
    // if (result.data === "exist") {
    //   setColor("blue");
    //   setError("User already exist");
    //   console.log(result.data);
    // }else if(result.data === "success") {
    //     sessionStorage.setItem('username',data.username)
    //   window.location.assign("https://futa-hostel-rentals-c3bf0b.netlify.app/dashboard");
    // } else {
    //   setColor("red");
    //   setError("Invalid details");
    // }
  }

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
