import React, { useState } from 'react'
import { onboardUser } from '../../api/user'

function Onboarding({ onComplete, theme = 'dark' }) {
  const [formData, setFormData] = useState({
    goal: '',
    level: '',
    placementDate: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')

  const isDark = theme === 'dark'

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setIsSubmitting(true)

    try {
      await onboardUser(formData)
      if (onComplete) {
        onComplete()
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to complete onboarding')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <div className={`min-h-screen ${isDark ? 'bg-gray-900 text-white' : 'bg-white text-slate-900'} p-8`}>
        <div className='max-w-2xl mx-auto'>
          <h1 className={`text-4xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>Onboarding</h1>
          <p className={`mb-8 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>Complete your profile to get started</p>

          <form onSubmit={handleSubmit} className='space-y-6'>
            {error && (
              <div className={`rounded-lg border px-4 py-3 text-sm ${isDark ? 'border-red-500/30 bg-red-500/10 text-red-200' : 'border-red-200 bg-red-50 text-red-700'}`}>
                {error}
              </div>
            )}

            <div className='flex flex-col'>
              <label htmlFor="goal" className={`text-sm font-semibold mb-2 ${isDark ? 'text-gray-200' : 'text-slate-700'}`}>
                Goal
              </label>
              <select
                id='goal'
                name='goal'
                value={formData.goal}
                onChange={handleChange}
                className={`px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 cursor-pointer ${isDark ? 'bg-gray-800 text-white border-gray-700' : 'bg-slate-50 text-slate-900 border-slate-300'}`}
              >
                <option value=''>Select your goal</option>
                <option value='Placement'>Placement</option>
                <option value='Gate(DA)'>Gate(DA)</option>
              </select>
            </div>

            <div className='flex flex-col'>
              <label htmlFor="level" className={`text-sm font-semibold mb-2 ${isDark ? 'text-gray-200' : 'text-slate-700'}`}>
                Level
              </label>
              <select 
                id='level'
                name='level'
                value={formData.level}
                onChange={handleChange}
                className={`px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 cursor-pointer ${isDark ? 'bg-gray-800 text-white border-gray-700' : 'bg-slate-50 text-slate-900 border-slate-300'}`}
              >
                <option value=''>Select your level</option>
                <option value='Beginner'>Beginner</option>
                <option value='Intermediate'>Intermediate</option>
                <option value='Advanced'>Advanced</option>
              </select>
            </div>

            <div className='flex flex-col'>
              <label htmlFor="placementDate" className={`text-sm font-semibold mb-2 ${isDark ? 'text-gray-200' : 'text-slate-700'}`}>
                Placement Date
              </label>
              <input 
                type="date"
                id='placementDate'
                name='placementDate'
                value={formData.placementDate}
                onChange={handleChange}
                className={`px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 ${isDark ? 'bg-gray-800 text-white border-gray-700' : 'bg-slate-50 text-slate-900 border-slate-300'}`}
              />
            </div>

            {/* Submit Button */}
            <button 
              type='submit'
              disabled={isSubmitting}
              className='w-full mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70 text-white font-semibold rounded-lg transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500'
            >
              {isSubmitting ? 'Saving...' : 'Complete Onboarding'}
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Onboarding
