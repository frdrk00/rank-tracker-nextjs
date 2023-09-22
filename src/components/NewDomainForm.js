'use client'

import axios from 'axios'
import { useState } from 'react'

const NewDomainForm = ({ onNew }) => {
  const [domain, setDomain] = useState('')

  const handleSubmit = async (e) => {
    try {
      e.preventDefault()
      setDomain('')
      await axios.post('/api/domains', { domain })
      onNew()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form className="flex gap-2 my-8" onSubmit={handleSubmit}>
      <input
        value={domain}
        onChange={(e) => setDomain(e.target.value)}
        className="bg-white border border-b-4 border-blue-200 px-4 py-2 text-xl rounded-lg grow"
        type="text"
        placeholder="NewDomain.com"
      />
      <button
        type="submit"
        className="bg-indigo-500 text-white px-8 rounded-lg border border-b-4 border-indigo-700 shadow-lg"
      >
        Add
      </button>
    </form>
  )
}

export default NewDomainForm
