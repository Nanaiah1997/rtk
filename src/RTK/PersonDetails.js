import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';


const PersonDetails = () => {
    const dispatch=useDispatch();
    const person = useSelector((state)=>state.user.addPerson)

    // let[fullname,pickName]=useState("");
    // let[mobileno,pickMbl]=useState("");
    // let[age,pickAge]=useState("");


   
  return (
    <div className='container mt-5'>
    <div className='row'>
        <div className='col-lg-12 '>
            <h3> </h3>
            {/* <p className='text-center'>
                <input type='text' placeholder='Enter Name' className='m-2' onChange={(obj)=>pickName(obj.target.value)}/>
                <input type='number' placeholder='Enter Mobile NO' className='m-2' onChange={(obj)=>pickMbl(obj.target.value)}/>
                <input type='number' placeholder='Enter Age' className='m-2' onChange={(obj)=>pickAge(obj.target.value)}/>
                <button onClick={save}>
                    Save
                </button>
            </p> */}
            <table className='table table-bordered mt-3 shodow'>
                <thead >
                    <tr className='bg-light text-primary'>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Mobile</th>
                        <th>Age</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {
                        user.map{

                        }
                    } */}
                </tbody>
            </table>
        </div>
    </div>
    </div>
  )
}

export default PersonDetails