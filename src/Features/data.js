import React from "react";
//import { useSelector } from "react-redux";
import { useGetAllCourseQuery, useGetSingleCourseQuery,useAddALLCourseMutation } from "./ApiSlice";
import { useState } from "react";

export const Data =()=>{

     let[name, setName] = useState("");
     let[email, setEmail]= useState("");
     const {data:person,isLoading} = useGetAllCourseQuery();
    //  if(!isLoading){
    //  const {data:singleCourse}= useGetSingleCourseQuery("code");
    //  }
     const[adduser, {data}]=useAddALLCourseMutation();


    //  if(!isLoading){
    //     console.log(person.data);
    //  }

    
    // console.log(singleCourse)

    const save = () =>{
        adduser({name:name, email:email})
        console.log(data)
    }
   
  return(

   <>
   <div>
                <input type='text' placeholder='Enter Name' className='m-2' onChange={(obj)=>setName(obj.target.value)}/>
                <input type='text' placeholder='Enter Mobile NO' className='m-2' onChange={(obj)=>setEmail(obj.target.value)}/>
               
                <button onClick={save}>save</button>
   </div>
    {
        !isLoading?
    person.data.map((d,i)=>{
       return(
            <div key={i}>
            <h4> {d.first_name} </h4> 
            <h5> {d.email}</h5>
            </div>
        )
    }):''
}
</>
  )
     
};



