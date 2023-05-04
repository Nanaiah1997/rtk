import React from 'react'
import DeleteAllUser   from './DeleteAllUser'
import { fakeUserData } from '../Api'
import { useDispatch } from 'react-redux'
import { addUser } from '../store/slices/UserSlice'
import DisplayUser from './DisplayUser'

const UserDetails = () => {

    const dispatch = useDispatch()

    const addNewUser = (payload)=>{
        console.log(payload)
        dispatch(addUser(payload))
    }
  return (
    <div>
        <div>
            <h4>List of user</h4>
            <button onClick={()=>addNewUser(fakeUserData())}>Add New Users</button>
        </div>
        <ul>
            <DisplayUser/>
        </ul>
        <hr/>
        <DeleteAllUser/> 
    </div>
  )
}

export default UserDetails