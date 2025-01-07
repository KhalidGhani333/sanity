
import { client } from '@/sanity/lib/client'
import React from 'react'
import Image from 'next/image'

const CardDetail = async ({params}:{params:{text:string}}) => {
   const data = await client.fetch(`*[_type == "blogweb"]{
  heading,
  paragraph,
  "imageUrl": blogimage.asset->url,
  _id
}`)
   
const blogData = data.filter((post:any)=>post.id == params.text)
    
    
  return (
    <div>
        <div className="flex flex-col-reverse lg:flex-row md:justify-between items-start w-full min-h-screen px-5 sm:px-10 py-10 gap-5">
        {/* Blog Content */}
        <div className="w-full md:w-[60%] text-left flex flex-col gap-5">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-800">
            -{blogData[0]?.heading}
          </h1>
          <p className="text-[14px] sm:text-[16px] md:text-[17px] text-slate-700">
            {blogData[0]?.paragraph}
          </p>
        </div>

        {/* Image */}
        <Image
          src={blogData[0]?.imageUrl}
          alt="image"
          width={500}
          height={500}
          className="w-full md:w-[45%] lg:w-[500px] h-auto md:h-[500px] rounded-lg"/>
      </div>
    </div>
  )
}

export default CardDetail