import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import axios from 'axios'

function Forms() {
  const [data, setData] = useState({
    fname: '',
    email: '',
    subject: '',
    message: '',
  })

  const handle = (e) => {
    const newData = { ...data }
    newData[e.target.id] = e.target.value
    setData(newData)
    //  console.log(data)
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    await axios
      .post('https://fund-my-laptop-2001.herokuapp.com/api/contact', { data })
      .then((result) => {
        console.log(result.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }
  return (
    <>
      <section className="contact-section">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="contact--info-area">
                <h3>Get in touch</h3>
                <p>
                  Looking for help? Fill the form and start a new adventure.
                </p>
                <div className="single-info">
                  <h5>Headquaters</h5>
                  <p>
                    <i className="fal fa-home"></i>
                    Lagos State, Nigeria
                  </p>
                </div>
                <div className="single-info">
                  <h5>Phone</h5>
                  <p>
                    <i className="fal fa-phone"></i>
                    <a href="tel:+2349164787591">(+234) 916 478 7591</a>
                    <br />
                  </p>
                  <p>
                    <i className="fal fa-phone"></i>
                    <a href="tel:+2349153464158">(+234) 915 346 4158</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="contact-form">
                <h4>Let’s Connect</h4>
                <p>Send us a message to connect with you.</p>
                <form className="row" onSubmit={(e) => onSubmit(e)}>
                  <div className="col-md-6">
                    <input
                      required
                      type="text"
                      onChange={(e) => handle(e)}
                      id="fname"
                      placeholder="Name"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      required
                      onChange={(e) => handle(e)}
                      type="email"
                      id="email"
                      placeholder="Email Address"
                    />
                  </div>
                  <div className="col-md-12">
                    <input
                      required
                      onChange={(e) => handle(e)}
                      type="text"
                      id="subject"
                      placeholder="Subject"
                    />
                  </div>
                  <div className="col-md-12">
                    <textarea
                      required
                      onChange={(e) => handle(e)}
                      id="message"
                      placeholder="How can we help?"
                    ></textarea>
                  </div>
                  <div className="col-md-6">
                    <div className="condition-check"></div>
                  </div>
                  <div className="col-md-6 text-right">
                    <input
                      type="submit"
                      value="SendMessage"
                      onClick={(e) => {
                        onSubmit(e)
                      }}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="bisylms-map">
        <iframe
          title="map"
          src="https://maps.google.com/maps?width=720&amp;height=600&amp;hl=en&amp;coord=39.966528,-75.158284&amp;q=1%20Grafton%20Street%2C%20Dublin%2C%20Ireland+(My%20Business%20Name)&amp;ie=UTF8&amp;t=p&amp;z=16&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
    </>
  )
}

export default Forms
