import React from 'react'
import { newService, NewServiceType } from '../constants/service'

const ServiceItem : React.FC<NewServiceType> = ({image, title}) => (
    <div className='w-[47%] m-2 h-fit border'>
        <img src={image} alt={title} className='w-full   ' />
    </div>
)

const NewOurService = () => {
  return (
    <div className='bg-secondary h-screen w-full relative overflow-hidden'>
      <div className='flex w-[85%] h-full justify-end overflow-auto'>
        <div className='w-[50%] p-4 flex flex-wrap justify-evenly'>
            {newService.map(service => (
                <ServiceItem image={service.image} title={service.title} />
            ))}
        </div>
      </div>
    </div>
  )
}

export default NewOurService
