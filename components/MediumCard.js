import Image from 'next/image'

const MediumCard = ({img, title}) => {
  return (
    <a href='#' className='hover:scale-105 transition transform duration-300 ease-out'>
        <div className='relative h-80 w-80'>
            <Image src={img} height={80} width={80} layout='fill' className='rounded-xl' alt={`${title} thumbnail`} />
        </div>
        <h3 className='text-2xl mt-3'>{title}</h3>
    </a>
  )
}

export default MediumCard