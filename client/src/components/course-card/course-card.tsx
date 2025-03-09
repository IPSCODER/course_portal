import React from 'react'
import classes from "./card.module.css"
import Button from '../../ui/button/Button';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCourse } from '../../store/reducers/userSlice';

const CourseCard = ({items}:any) => {
  const discountPercentage = Math.round(((items.price - items.discounted_price) / items.price) * 100);
  const dispatch = useDispatch() 
  const navigate = useNavigate()
  const formattedTitle = items.title
  .replace(/[+/\-]/g, '')  // Remove +, -, /
  .split(" ")
  .join("-");
  const onRoute = () =>{
    navigate(`/new-course/${formattedTitle}`)
    dispatch(setCourse(items))
  }


  return (
    <div className={classes.card} >
        <img src={items.img} alt="" />
        <h2>{items.title}</h2>
        <h4>{items.description}</h4>
        <span>
          <p>
            Rs.{items.discounted_price}
            <br/>
            Rs.<del>{items.price}</del>
          </p>
          <p>{discountPercentage}% Off</p>
        </span>
        <Button className={classes.btn} onClick={onRoute}  >View Content</Button>
    </div>
  )
}

export default CourseCard