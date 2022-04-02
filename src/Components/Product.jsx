import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../Redux/kanhaiya/action';



const Product = () => {
  const dispatch = useDispatch();
  return (
    <div onClick={()=>dispatch(addTodo(1))}>Product</div>
  )
}

export default Product