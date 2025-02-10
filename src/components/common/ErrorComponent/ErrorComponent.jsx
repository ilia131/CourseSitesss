import React from 'react'

const ErrorComponent = ({error}) => {
  return (
    <div className="flex justify-center items-center h-screen text-red-500">
       <p>Error loading courses: {error.message}</p>
    </div>
  )
}

export default ErrorComponent