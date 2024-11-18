import React from 'react'
import Image from 'next/image'

const ImageComp = ({img,isActive} : any) => {
  return (
   <div>
    {
     isActive?  

     <Image src={img} width={0} height={0} sizes="100vw" alt="question" />:<></>
    }
   </div>
  )
}

export default ImageComp