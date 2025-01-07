import React from 'react'
import Link from 'next/link'

 const Home = () => {
  return (
    <>
    <h1 className='text-2xl text-center'>Home Page</h1>
    <div className='flex justify-between w-full h-12 items-center px-10'>
      <Link href="/">Home</Link>
      <Link href="/product">Product</Link>
      <Link href="/blog">Blog</Link>
    </div>
    </>
  )
}
export default Home