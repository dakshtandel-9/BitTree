import React from 'react'

function Navbar() {
    return (

        <nav className="bg-white w-[80vw] flex justify-between fixed top-10 right-[10vw] rounded-full p-5 px-7">
            <div className='logo flex gap-20 items-center'>
                <img className='h-8' src="https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/66634daccb34e6d65a41c76d_download.svg" alt="" />

                <ul className='flex gap-10'>
                    <li> Templates</li>
                    <li> Products</li>
                    <li> Learn</li>
                    <li> Marketplace</li>
                    <li> Pricing</li>
                </ul>
            </div>

<div className='flex gap-5'>
    <button className="login bg-[#EFF0EB] p-4 rounded-lg font-bold">Log in</button>
    <button className="signup bg-gray-900 p-4 rounded-full text-white">SignUp Free</button>
</div>

        </nav>

    )
}

export default Navbar
