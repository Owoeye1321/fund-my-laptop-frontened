import React from 'react'
import { usePaystackPayment } from 'react-paystack'
import { useEffect, useState } from 'react'
import axios from 'axios'

function PaystackPayment() {
  const [details, setDetails] = useState('')

  useEffect(() => {
    const response = async () => {
      const request = await axios.get(
        'https://fund-my-laptop-2001.herokuapp.com/api/paystack',
      )
      if (request.data) {
        setDetails(request.data)
      }
    }
    response()
  }, [details])
  const amount = 5000 * 100
  const config = {
    reference: new Date().getTime().toString(),
    email: 'Owoeye1321@gmail.com',
    amount: amount,
    publicKey: details,
  }
  // console.log(config)

  // you can call this function anything
  const onSuccess = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    alert(
      'This payment integration is a testing function. However, the end user paystack acount is not verified and you might not be debited from your real acount',
    )
    window.location.assign('https://fund-my-laptop-2001.netlify.app/')
  }

  // you can call this function anything
  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.

    console.log('closed')
  }

  const PaystackHookExample = () => {
    const initializePayment = usePaystackPayment(config)
    return (
      <div>
        <center>
          <button
            className="btn btn-primary"
            onClick={() => {
              initializePayment(onSuccess, onClose)
            }}
          >
            Proceed to payment
          </button>
        </center>
      </div>
    )
  }

  return (
    <div className="App">
      <header className="App-header"></header>
      <div
        style={{
          height: '700px',
          paddingTop: '350px',
        }}
      >
        <center>
          <PaystackHookExample />
        </center>
      </div>
    </div>
  )
}

export default PaystackPayment
