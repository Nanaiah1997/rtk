import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { clearAllUsers } from '../store/slices/UserSlice';

const DeleteAllUser = () => {

    const dispatch = useDispatch();

   
    const deleteUser=(id)=>{
        dispatch(clearAllUsers(id))

    }


  return (
    <div>
        <button onClick={()=>deleteUser(clearAllUsers())}>delete all</button>
    </div>
  )
}

export default DeleteAllUser;