import Link from 'next/link'
import React from 'react'

const About = () => {
  return (
    <section className='pt-8 flex flex-col gap-8 px-5 md:px-10 py-80'>
      <h1 className='tex-3xl sm:text-4xl md:text-5xl font-bold text-center'>
        About Us
      </h1>
      <p className='border-2 border-black px-4 py-2 rounded-md w-[80%] sm:w-[70%] md:w-[50%] mx-auto'>
        Hey 🙋‍♂️!
        <br />
        <br />
        This is a demo website built using Next.js and Strapi. {`Liked it?`}

        <br />
        <br />

        Checkout other projects I&apos;ve built <Link className='font-bold underline hover:opacity-50 cursor-pointer' href="https://portfolio-website-orpin-zeta.vercel.app/" target='_blank'> Here</Link>

        <br />
      <br />
      You can hit me up @moyezrabbani.work@gmail.com if you wanna build your own website.
      </p>

    </section>
  )
}

export default About