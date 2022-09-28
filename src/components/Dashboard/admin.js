import { React, useEffect, useState } from 'react'
import Styles from './style.module.css'
import axios from 'axios'

function Admin() {
  const [email, setEmail] = useState()
  const [addHostelDetails, setAddHostelDetails] = useState({
    name: '',
    address: '',
    details: '',
  })
  const [hostelPicture, setHostelPicture] = useState('')
  const token = localStorage.getItem('accessToken')
  const refreshToken = localStorage.getItem('refreshToken')
  const [color, setColor] = useState('red')
  const [error, setError] = useState('')
  const [uploads, setUploads] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()
    //console.log(hostelPicture)
    const addForm = new FormData()
    addForm.append('data', JSON.stringify(addHostelDetails))
    addForm.append('file', hostelPicture)

    const checkingFormUpdates = await axios.post(
      '/api/newUpload/upload',
      addForm,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      },
    )
    if (checkingFormUpdates.data.message === 'success') setColor('green')
    setError('Uploaded Details')
  }

  const handleChange = (e) => {
    const addNewData = { ...addHostelDetails }
    addNewData[e.target.id] = e.target.value
    setAddHostelDetails(addNewData)
    //  console.log(addHostelDetails)
  }
  const addHostelPicture = (e) => {
    let name = e.target.files[0]
    setHostelPicture(name)
    //    console.log(hostelPicture)
  }

  useEffect(async () => {
    await axios
      .get('/api/read/profile', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      .then(async (result) => {
        setEmail(result.data)
        await axios
          .get('/api/read/personal', {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
          })
          .then((innerResult) => {
            setUploads(innerResult.data)
          })
          .catch((InnerError) => {
            console.log('An error has occured', InnerError)
          })
      })
      .catch(async (error) => {
        await axios
          .get('/api/token/refresh', {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${refreshToken}`,
            },
          })
          .then((result) => {
            localStorage.setItem('accessToken', result.data.message)
          })
          .catch((error) => {
            console.log('A fatal error has occured', error)
          })
      })
  }, [uploads])
  //console.log(uploads)
  return (
    <>
      <section
        className="appie-hero-area"
        style={{ marginTop: '-100px', marginBottom: '-80px' }}
      >
        <div className="row">
          <div className="col-sm-12 col-md-4 col-lg-4 p-4">
            <div style={{ width: '100%' }}>
              <div
                className="min-vh-100 d-flex flex-column opacity-mask"
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}
              >
                <i className="m-3">{email}</i>
                <div
                  className=" bg-white px-5 py-3"
                  style={{
                    width: '90%',
                    alignSelf: 'center',
                    boxShadow: '5px 5px 45px 5px lightgrey',
                    alignItems: 'right',
                  }}
                >
                  <form
                    onSubmit={(e) => {
                      handleSubmit(e)
                    }}
                  >
                    <div className="form-group">
                      <input
                        required
                        onChange={(e) => {
                          handleChange(e)
                        }}
                        className="form-control"
                        type="text"
                        placeholder="Gadget Name"
                        id="name"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        required
                        onChange={(e) => {
                          handleChange(e)
                        }}
                        className="form-control"
                        type="text"
                        placeholder="Address"
                        id="address"
                      />
                    </div>
                    <div className="form-group">
                      <textarea
                        onChange={(e) => {
                          handleChange(e)
                        }}
                        className="form-control"
                        required
                        placeholder="Gadget Issues"
                        style={{
                          height: '150px',
                          borderRadius: '10px',
                        }}
                        id="details"
                      />
                    </div>

                    <div className="form-group">
                      <p>Upload Image</p>
                    </div>
                    <div className="form-group">
                      <input
                        required
                        onChange={(e) => {
                          addHostelPicture(e)
                        }}
                        type="file"
                        id="file"
                        className="form-control"
                        name="file"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="submit"
                        value="submit"
                        className="form-control bg-primary"
                        style={{ color: 'white' }}
                      />
                    </div>
                  </form>
                  <div style={{ fontSize: '15px', marginBottom: '0px' }}>
                    <>
                      <i style={{ marginBottom: '-1px', color: color }}>
                        {error}
                      </i>
                    </>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-sm-12 col-md-8 col-lg-8 my-4"
            id={Styles.titleContent}
          >
            <div className="row" id={Styles.readScroll}>
              {uploads.length ? (
                uploads.map((key) => {
                  const blob = new Blob([Int8Array.from(key.image.data.data)], {
                    type: key.image.contentType,
                  })
                  const image = window.URL.createObjectURL(blob)

                  return (
                    <>
                      <div
                        className="m-3 col-sm-12 col-md-3 col-lg-3 my-5
                        service-category-widget "
                        key={key.id}
                        style={{
                          alignContent: 'center',
                          height: '250px',
                        }}
                      >
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
                            <p style={{ marginTop: '-10px', fontSize: '10px' }}>
                              {key.address}
                            </p>
                            <p style={{ marginTop: '-10px', fontSize: '12px' }}>
                              {key.details.slice(0, 30)}...
                            </p>
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
        </div>
      </section>
    </>
  )
}

export default Admin
