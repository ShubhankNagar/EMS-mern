import React from 'react'

const TaskListNumbers = () => {
  return (
    <div className='flex mt-10 screen justify-between gap-4'>
        <div className='h- w-[40%] bg-red-400 p-3 rounded-xl'>
               <h2 className='text-3xl font-semibold'>0</h2> 
               <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className='h- w-[40%] bg-blue-600 p-3 rounded-xl'>
               <h2 className='text-3xl font-semibold'>0</h2> 
               <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className='h- w-[40%] bg-green-400 p-3 rounded-xl'>
               <h2 className='text-3xl font-semibold'>0</h2> 
               <h3 className='text-xl font-medium'>New Task</h3>
        </div>
    </div>
  )
}

export default TaskListNumbers