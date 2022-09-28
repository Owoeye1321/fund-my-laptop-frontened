import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function DetailsService() {
  const [details, setDetails] = useState([])
  const token = localStorage.getItem('accessToken')
  useEffect(async () => {
    await axios
      .get('/api/read/all')
      .then((result) => {
        setDetails(result.data.message)
        console.log(details)
      })
      .catch((error) => {
        console.log('An error has occured ', error)
      })
  }, [details])
  return (
    <>
      <section className="appie-service-details-area pt-100 pb-100">
        <div className="container">
          <div className="row">
            {details.length ? (
              details.map((key) => {
                const blob = new Blob([Int8Array.from(key.image.data.data)], {
                  type: key.image.contentType,
                })
                const image = window.URL.createObjectURL(blob)

                return (
                  <>
                    <div id={key._id} className="col-sm-12 col-md-4 col-lg-4">
                      <div className="service-details-sidebar">
                        <div className="service-category-widget">
                          <center>
                            <img
                              src={image}
                              alt="profile Image"
                              style={{ height: '180px', width: '250px' }}
                            />
                          </center>
                          <p style={{ fontSize: '14px' }}>{key.name}</p>
                          <p style={{ marginTop: '-10px', fontSize: '12px' }}>
                            {key.email}
                          </p>
                          <p style={{ marginTop: '-10px', fontSize: '10px' }}>
                            {key.address}
                          </p>

                          <p style={{ marginTop: '-10px', fontSize: '12px' }}>
                            {key.details.slice(0, 33)}...
                          </p>
                          <Link className="main-btn" to="#">
                            Pay 5,000
                          </Link>
                        </div>
                      </div>
                    </div>
                  </>
                )
              })
            ) : (
              <>
                <h1>Details are posted here</h1>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

export default DetailsService
