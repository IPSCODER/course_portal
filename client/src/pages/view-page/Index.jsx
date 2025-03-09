import React, { useState } from 'react'
import classes from "./veiw.module.css"
import { useSelector } from 'react-redux'
import Button from '../../ui/button/Button'

const CourseView = () => {
  const [amount, setamount] = useState(350);
  const course =  useSelector((state) => state.user.course)
  const discountPercentage = Math.round(((course.price - course.discounted_price) / course.price) * 100);

  // handlePayment Function
  const handlePayment = async () => {
      try {
          const res = await fetch(`${process.env.REACT_APP_BACKEND_HOST_URL}/api/payment/order`, {
              method: "POST",
              headers: {
                  "content-type": "application/json"
              },
              body: JSON.stringify({
                  amount: course?.discounted_price
              })
          });

          const data = await res.json();
          console.log(data);
          handlePaymentVerify(data.data)
      } catch (error) {
          console.log(error);
      }
  }

  // handlePaymentVerify Function
  const handlePaymentVerify = async (data) => {
      const options = {
          key: process.env.REACT_APP_RAZORPAY_KEY_ID,
          amount: data.amount,
          currency: data.currency,
          name: "Pravin Sawant",
          description: "Test Mode",
          order_id: data.id,
          handler: async (response) => {
              console.log("response", response)
              try {
                  const res = await fetch(`${process.env.REACT_APP_BACKEND_HOST_URL}/api/payment/verify`, {
                      method: 'POST',
                      headers: {
                          'content-type': 'application/json'
                      },
                      body: JSON.stringify({
                          razorpay_order_id: response.razorpay_order_id,
                          razorpay_payment_id: response.razorpay_payment_id,
                          razorpay_signature: response.razorpay_signature,
                      })
                  })

                  const verifyData = await res.json();

                  if (verifyData.message) {
                    console.log(verifyData.message);
                    
                  }
              } catch (error) {
                  console.log(error);
              }
          },
          theme: {
              color: "#5f63b8"
          }
      };
      const rzp1 = new window.Razorpay(options);
      rzp1.open();
  }

  return (
    <div className={classes.main} >
      {/* header */}
    <div className={classes.header} >
    <h2>{course.title}</h2>
    </div>
    {/* header */}
    {/* card */}
    <div className={classes.card} >
      <img src={course?.img} alt={course.title} />
      <h2>{course.title}</h2>
      <h4>{course.description}</h4>
      <span>
          <p>
            Rs.{course.discounted_price}
            <br/>
            Rs.<del>{course.price}</del>
          </p>
          <p>{discountPercentage}% Off</p>
        </span>
        <Button className='btn' onClick={handlePayment} >Buy Now</Button>
    </div>
    {/* card */}
    {/* body */}
    <div className={classes.body} >

    </div>
    {/* body */}
    </div>
  )
}

export default CourseView