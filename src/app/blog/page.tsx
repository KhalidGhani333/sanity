import { client } from '@/sanity/lib/client';
import Image from 'next/image';
import Link from 'next/link';

interface Tblog{
  heading:"srting";
  paragraph:"string";
  imageUrl:"string"
  id:"string"
}

const About = async () => {
    const data = await client.fetch(`*[_type == "blogweb"]{
  heading,
  paragraph,
  "imageUrl": blogimage.asset->url,
  _id
}`)


   
  return (
    <div className='px-10'>
        <h1 className=' text-2xl font-bold pl-5 mt-10 '>Blogs :-</h1>
        <div className='flex flex-col gap-5 mt-10 w-[70%]'>
          {data.map((elem:Tblog)=>(
            <div key={elem.id} className='flex gap-2 items-start'>
              <Image src={elem.imageUrl} alt={elem.id} width={100} height={100} className='w-[150px] h-[150px] rounded-md ' />
            <div>
             <Link href={`blog/${elem.id}`}> <h1 className='text-2xl font-semibold'>{elem.heading}</h1></Link>
             <p>{elem.paragraph.slice(0,300)}......</p>
             </div>
            </div>
          ))}

        </div>
    </div>
  )
}

export default About