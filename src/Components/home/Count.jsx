import React from 'react';
import { useDispatch } from 'react-redux';
import { updateTodo } from '../../Redux/Laxmi/action';


function Count() {
    const dispatch = useDispatch()
  return (
    <div onClick={()=>dispatch(updateTodo(1))}>Count</div>
  )
}

export default Count