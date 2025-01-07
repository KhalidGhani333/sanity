import React from 'react'
import { client } from '@/sanity/lib/client'
import Image from 'next/image';



const Product = async () => {
  const data = await client.fetch(`*[_type == "product"]{
  productName,
  productPrice,
  "imageUrl": productImage.asset->url,
  _id
}`);
  console.log(data)
  return (
    <div>
        <h1 className='text-2xl text-center'>Product Page</h1>
        <div className='flex justify-evenly mt-20 '>
        {data.map((item:any)=>(
          <div key={item._id} className='w-40 h-52'>
            <Image src={item.imageUrl} alt={item.productName} width={100} height={200} className=' w-40 h-60' />
            <h1 className='mt-4'>{item.productName}</h1>
            <div className='flex justify-between items-center'>
            <h1>${item.productPrice}</h1>
            <button className='px-1 bg-blue-400 rounded-md text-white font-semibold'>Buy Now</button>
            </div>


          </div>
        ))}
        </div>
        
    </div>
  )
}

export default Product