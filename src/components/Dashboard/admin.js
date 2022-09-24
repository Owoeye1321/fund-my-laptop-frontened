import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/images/how-it-work-thumb.png';
//import axios from "axios";


function Admin() {

  const [userDetails, setUserDetails] = useState([]);
  const [addHostelDetails, setAddHostelDetails] = useState({
    hostel_name:'',
    address:'',
    socialAmenities:'',
    username:sessionStorage.getItem('username')
  });
  const [hostelPicture, setHostelPicture] = useState('')

    //// performing some dangerous operation round around the spagetti environment
    const [pickFirst , setPickFirst] = useState('block')
    const [pickSecond , setPickSecond] = useState('none')
    const [pickThird, setPickThird] = useState('block')
    const [pickFourth, setPickFourth] = useState('none')

  const LogOut = async()=>{
    const logUserOut = await axios.get('https://futa-hostels-10467.herokuapp.com/logOut')
    if(logUserOut.data === "success"){
      sessionStorage.clear()
      window.location.assign('https://futa-hostel-rentals-c3bf0b.netlify.app/login')
    }
  }
  const handleSubmit = async (e)=>{
    e.preventDefault()
//     console.log(hostelPicture)
//     const addForm = new FormData()
//     addForm.append('data', JSON.stringify(addHostelDetails))
//     addForm.append('file',hostelPicture)
//    // console.log(addForm)
//     const checkingFormUpdates = await axios.post('https://futa-hostels-10467.herokuapp.com/addHostelDetails',addForm)
//     if(checkingFormUpdates.data === 'success'){ 
//       console.log('Hostel information saved successfully')
//       alert('Hostel information saved successfully')
//     }
  } 

    const handleChange = (e)=>{
      const addNewData = { ...addHostelDetails }
      addNewData[e.target.id]= e.target.value
      setAddHostelDetails(addNewData)
      //console.log(addHostelDetails)
    }
    const addHostelPicture = (e)=>{
      let name = e.target.files[0]
      setHostelPicture(name)
  //    console.log(hostelPicture)

    }

  useEffect(()=>{
    // alert('hello there i am trying to control the width of the screen')
    // alert(window.width)
    // const response = async ()=>{
    //     let check = await axios.post('https://futa-hostels-10467.herokuapp.com/check',{username:sessionStorage.getItem('username')});
    //     if(check.data ==='failed') window.location.assign('https://futa-hostel-rentals-c3bf0b.netlify.app/login')
    //   //  / console.log(check.data)
    // }
    // response()

    //  const fetchAll = async () =>{
    //   await axios.post('https://futa-hostels-10467.herokuapp.com/read',{username:sessionStorage.getItem('username')}).then((res)=>{
    //     setUserDetails(res.data)
    //    // console.log(res.data)
    //   }).catch((err)=>{
    //     console.log('An error has occured' , err)
    //   })

    //  }
    //  fetchAll()
    
},[])
  return (
    <>
      <section
        className="appie-hero-area"
        style={{ marginTop: "-100px", marginBottom: "-80px" }}
      >
        <div className="row">
          <div className="col-sm-12 col-md-5 col-lg-4 p-4">
            <div style={{ width: "100%" }}>
              <div
                className="min-vh-100 d-flex flex-column opacity-mask"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
              >
                <div
                  className="m-5 bg-white px-5 py-3"
                  style={{
                    width: "400px",
                    alignSelf: "center",
                    boxShadow: "5px 5px 45px 5px lightgrey",
                    alignItems: "right",
                  }}
                >
                    <h4 className="m-2"></h4>
                  <form 
                  onSubmit={(e)=>{handleSubmit(e)}}
                  >
                    <div className="form-group">
                      <input 
                      required
                        onChange={(e)=>{ handleChange(e)}}
                        className="form-control"
                        type="text"
                        placeholder="Hostel Name"

                        id="hostel_name"
                      />
                    </div>
                    <div className="form-group">
                      <input
                      required
                       onChange={(e)=>{ handleChange(e)}}
                        className="form-control"
                        type="text"
                        placeholder=" Address"
                        id="address"
                      />
                    </div>
                    <div className="form-group">
                      <textarea
                       onChange={(e)=>{ handleChange(e)}}
                        className="form-control"
                        required
                        placeholder="Social Amenities"
                        style={{
                          height: "150px",
                          borderRadius: "10px",
                        }}
                        id="socialAmenities"
                      />
                    </div>

                    <div className="form-group">
                      <p>Upload Image</p>
                    </div>
                    <div className="form-group">
                      <input
                      required
                      onChange={(e)=>{
                        addHostelPicture(e)
                      }}
                        type="file"
                        id="file"
                        className="form-control"
                        name = "file"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="submit"
                        value="submit"
                        className="form-control bg-primary"
                        style={{ color: "white" }}
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-8 col-lg-8">
                      <h1>Details are posted here</h1>
          </div>
        </div>
      </section>
    </>
  );
}

export default Admin;
