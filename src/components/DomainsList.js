'use client'

import DomainRow from './DomainRow'
import DoubleHeader from './DoubleHeader'

const DomainsList = ({domains, keywords}) => {
  return (
    <div>
      <DoubleHeader
        preTitle="Your domains"
        mainTitle={(domains.length, ' Domains')}
      />
      {domains.map((domain) => (
        <DomainRow {...domain} keywords={keywords} />
      ))}
    </div>
  )
}

export default DomainsList
