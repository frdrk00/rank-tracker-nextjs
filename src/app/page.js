import DomainRow from '@/components/DomainRow'
import DoubleHeader from '@/components/DoubleHeader'
import NewDomainForm from '@/components/newDomainForm'

export default function Home() {
  const keywords = [
    'github',
    'git',
    'copilot',
    'git share code',
    'free git repos',
  ]

  return (
    <div>
      <NewDomainForm />
      <DoubleHeader preTitle="Your domains" mainTitle="4 Domains" />
      <DomainRow keywords={keywords} />
      <DomainRow keywords={keywords} />
      <DomainRow keywords={keywords} />
      <DomainRow keywords={keywords} />
    </div>
  )
}
