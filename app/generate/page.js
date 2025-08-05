
"use client";

import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Generate() {

    const [link, setLink] = useState([{ link: "", linktext: "" }]);
    const [linktext, setLinkText] = useState("");
    const [handle, setHandle] = useState("");
    const [pic, setPic] = useState("");

    const addLink = async (linktext, link, handle) => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "link": link,
            "linktext": linktext,
            "action": "add",
            "handle": handle
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        const r = await fetch("http://localhost:3000/api/add", requestOptions)
        const result = await r.json();

        toast(result.message)
    }


    return (
        <div className='bg-[#235ABF] min-h-screen grid grid-cols-2'>

            <div className="col1 flex justify-center items-center flex-col gap-10 ml-[10vw]">
                <h1 className='font-bold  text-4xl'>Create your BitTree</h1>
                <div className='flex flex-col gap-5 justify-center my-4 '>
                    <h2 className='font-semibold  text-2xl'>Step 1: Claim your Handle</h2>
                    <div className="mx-4">
                        <input value={handle || ""} onChange={e => { setHandle(e.target.value) }} type="text" placeholder='Choose a Handle' className='bg-white px-4 py-2 focus:outline-blue-500 rounded-3xl' />
                    </div>
                    <h2 className='font-semibold  text-2xl'>Step 2: Add Links</h2>
                    {links && links.map((item, index) => {
                        return <div key={index} className="mx-4 flex gap-2">
                            <input value={item.link || ""} onChange={e => { setLink(e.target.value) }} type="text" placeholder='Enter link text' className='bg-white px-4 py-2 focus:outline-blue-500 rounded-3xl' />
                            <input value={item.linktext || ""} onChange={e => { setLinkText(e.target.value) }} type="text" placeholder='Enter link' className='bg-white px-4 py-2 focus:outline-blue-500 rounded-3xl' />


                        </div>
                    })}
                    <button onClick={() => { addLink(linktext, link, handle) }} className='bg-pink-700 text-white font-bold rounded-3xl mx-2 p-5 py-2'>AddLink</button>


                    <h2 className='font-semibold  text-2xl'>Step 3:Add Picture and Finalize </h2>
                    <div className="mx-4 ">
                        <input value={pic || ""} onChange={e => { setPic(e.target.value) }} type="text" placeholder='Enter link' className='bg-white mr-2 p-5 py-2 w-[99%] focus:outline-blue-500 rounded-3xl' />
                        <button className='bg-pink-700 text-white font-bold flex rounded-3xl mt-5 p-5 py-2'>Create your BitLink</button>
                    </div>
                </div>
            </div>



            <div className="col2 w-full h-screen">
                <img className='h-full object-contain' src="/generate.webp" alt="Generate your links" />
            </div>
            <ToastContainer />
        </div>
    )
}

export default Generate
