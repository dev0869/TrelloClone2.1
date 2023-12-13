import React from 'react'

const Button = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='bg-[#0D1117] w-fit text-white rounded-md p-4 '>{children}</div>
  )
}

export default Button