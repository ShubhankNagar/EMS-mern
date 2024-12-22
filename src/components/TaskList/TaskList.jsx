import React from 'react'

const TaskList = () => {
  return (
    <div id='tasklist' className='h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-5  mt-8'>
        <div className='h-full p-5 flex-shrink-0 w-[300px] bg-red-400 rounded-xl'>
            <div className='flex justify-between items-center text-sm'>
                <h3 className='bg-red-600 px-2 py-1 rounded-lg'>High</h3>
                <h4>20 Dec 2024</h4>
            </div>
            <h2 className='text-2xl mt-5 font-semibold'>Edit a photo</h2>
            <p className='text-sm mt-2'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi cumque, vel sit dolor praesentium sunt.
            </p>
        </div>
        <div className='h-full p-5 flex-shrink-0 w-[300px] bg-yellow-400 rounded-xl'>
            <div className='flex justify-between items-center text-sm'>
                <h3 className='bg-red-600 px-2 py-1 rounded-lg'>High</h3>
                <h4>20 Dec 2024</h4>
            </div>
            <h2 className='text-2xl mt-5 font-semibold'>Edit a photo</h2>
            <p className='text-sm mt-2'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi cumque, vel sit dolor praesentium sunt.
            </p>
        </div>
        
        
    </div>
  )
}

export default TaskList