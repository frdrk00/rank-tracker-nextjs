'use client'

import NewDomainForm from '@/components/NewDomainForm'
import DomainsList from '@/components/DomainsList'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

export default function Home() {
  const [domains, setDomains] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchDomains()
  }, [])

  const fetchDomains = async () => {
    try {
      setLoading(true)
      const response = await axios.get('/api/domains')
      setDomains(response.data.domains)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  const keywords = [
    'github',
    'git',
    'copilot',
    'git share code',
    'free git repos',
  ]

  return (
    <div>
      <NewDomainForm onNew={fetchDomains} />
      {loading ? (
        <div>Loading...</div>
      ) : (
        <DomainsList domains={domains} keywords={keywords} />
      )}
    </div>
  )
}
