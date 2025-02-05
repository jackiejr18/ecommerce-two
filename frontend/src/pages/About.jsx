import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>This is a paragrah about the company and when it started, why ot astarted and how i enjoy creating the thing s ithahv dikdo.</p>
          <p>We have been uniqque and innovative since that start and will continue to grow and change.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>We love to serve our customers and make sure the art they get comes to life and takes you to another world for a few moments.</p>
        </div>
      </div>

    </div>
  )
}

export default About
