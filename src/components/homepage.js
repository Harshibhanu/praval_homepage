import React from 'react'
import logo from './../components/Assets/praval_title.png'
import play from './../components/Assets/play.png'
import search from './../components/Assets/search.png'
import editor from './../components/Assets/editor.png'
import { Link } from 'react-router-dom'
import '/Users/harsh/praval_homepage/src/index.css'
export default function Homepage() {
  let arrow='>'
  return (
    <>
 <div className='flex flex-row gap-[100px] items-center mt-[-100px] p-[40px]'>
  <div><img src={logo} className='w-[200px] h-[200px] object-contain' /></div>
  <div className='flex flex-row gap-[780px]'>
    <div className='flex flex-row gap-[50px]'>
      <Link to='/whypraval'>Why Praval</Link>
    <Link to='/lifeatpraval' className='whitespace-no-wrap'>Life at Praval</Link></div>
    <div className='flex flex-row gap-[30px]'>
      <button><img src={search}/></button>
      <Link to='/signin'>Sign In</Link></div>
  </div>
 </div>

 <div className='flex flex-col gap-[80px] px-[200px] mt-[-70px]'>
  <div className='flex flex-row gap-[15px]'>
  <button className='text-blue-500'>Home</button>
<p>{arrow}</p>
<p>Training</p>
  </div>
  <div className='flex justify-center'>
  <div className=' flex flex-col gap-[40px] w-[1300px] color items-center px-[600px] py-[50px]  '>
    <div className='flex flex-col items-center gap-[20px]  '>
    <img src={editor} className='w-[90px] h-[90px] object-contain ' />
    <p className='font-semibold text-[46px] whitespace-nowrap'>Getting started with Praval Training</p>
<p className='text-[18px] text-gray-500 w-[900px] px-[70px] text-justify '>Learn How to Code. Start here and learn programming fundamentals that can be helpful for any language 
  you learn. Get started today with resources, tips, and tricks from the praval trainers.</p>
 </div> 
  <div className='flex flex-row gap-[20px] items-center mt-[-15px]'>
  <img src={play} className='h-[40px] w-[40px] object-contain '/>
    <p className='text-[20px] text-blue-500 font-semibold whitespace-nowrap inline-block'>Start Now</p>
  </div>
  </div>
  </div>


 </div>
    </>
  )
}
