"use client"
import { Displaytype, contactType, onChangeEventTYpe } from "../Types/type";
import DisplayContact from "../displaycontact";
import * as yup from "yup"
import { useState } from "react";
export default function ContactForm(){
    const [contacInfo,setContactInfo]=useState<contactType>({name:"",email:"",message:""})
    const [contactList,setContactList]=useState<contactType[]>([])
    const onChangeHnadler=(e:onChangeEventTYpe)=>{
        let userDetails={
            ...contacInfo,
            [e.target.name]:e.target.value,}
            setContactInfo(userDetails)
        }
        const onClickHandler= ()=>{
          
            let newContactLit:contactType[]=[...contactList,contacInfo]
            setContactList(newContactLit)
            setContactInfo({
                name:"",
                email:"",
                message:""
            })
        }
        // const contactInfoSchema=yup.object().shape({
        //   name:yup.string().required().min(5).max(8)
        // })
        
   
    return(
     <> 
    <div className="max-w-md mx-auto my-8 p-6 bg-white rounded shadow-md">
      <div>
      <h2 className="text-2xl font-semibold mb-6">Contact Us</h2>

      {/* Add your form fields here */}
      <div className="mb-4">
    
        <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-2">
          Name
        </label>
        <input
        value={contacInfo.name}
        onChange={onChangeHnadler}
          type="text"
          id="name"
          name="name"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Your Name"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">
          Email
        </label>
        <input
        value={contacInfo.email}
        onChange={onChangeHnadler}
          type="email"
          id="email"
          name="email"
          className="text-black w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Your Email"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="message" className="block text-gray-700 text-sm font-medium mb-2">
          Message
        </label>
        <textarea
        value={contacInfo.message}
        onChange={onChangeHnadler}
          id="message"
          name="message"
    
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Your Message"
        ></textarea>
      </div>

      <button
         onClick={onClickHandler}
        type="button"
        className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 focus:outline-none"
      >
        Send Message
      </button>
      </div>
    </div>
    <DisplayContact contactInfo={contactList}/>
    </>
      
    )
    }