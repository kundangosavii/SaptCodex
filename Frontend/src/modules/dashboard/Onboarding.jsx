import React, { useState } from 'react'

function Onboarding() {
  const [formData, setFormData] = useState({
    goal: '',
    level: '',
    placementDate: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form Data:', formData)
  }

  return (
    <>
      <div className='min-h-screen bg-gray-900 text-white p-8'>
        <div className='max-w-2xl mx-auto'>
          <h1 className='text-4xl font-bold mb-2 text-white'>Onboarding</h1>
          <p className='text-gray-400 mb-8'>Complete your profile to get started</p>

          <form onSubmit={handleSubmit} className='space-y-6'>
            <div className='flex flex-col'>
              <label htmlFor="goal" className='text-sm font-semibold text-gray-200 mb-2'>
                Goal
              </label>
              <input 
                type="text"
                id='goal'
                name='goal'
                value={formData.goal}
                onChange={handleChange}
                placeholder='What is your goal?'
                className='px-4 py-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200'
              />
            </div>

            <div className='flex flex-col'>
              <label htmlFor="level" className='text-sm font-semibold text-gray-200 mb-2'>
                Level
              </label>
              <select 
                id='level'
                name='level'
                value={formData.level}
                onChange={handleChange}
                className='px-4 py-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 cursor-pointer'
              >
                <option value=''>Select your level</option>
                <option value='beginner'>Beginner</option>
                <option value='intermediate'>Intermediate</option>
                <option value='advanced'>Advanced</option>
              </select>
            </div>

            <div className='flex flex-col'>
              <label htmlFor="placementDate" className='text-sm font-semibold text-gray-200 mb-2'>
                Placement Date
              </label>
              <input 
                type="date"
                id='placementDate'
                name='placementDate'
                value={formData.placementDate}
                onChange={handleChange}
                className='px-4 py-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200'
              />
            </div>

            {/* Submit Button */}
            <button 
              type='submit'
              className='w-full mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500'
            >
              Complete Onboarding
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Onboarding
