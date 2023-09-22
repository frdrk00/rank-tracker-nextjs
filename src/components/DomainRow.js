const DomainRow = ({ owner, domain, icon, keywords}) => {
    
  return (
    <div className="flex gap-2 bg-white border border-blue-200 border-b-4 p-4 my-3 rounded-lg items-center">
      {JSON.stringify()}
      <img
        src={icon}
        alt=""
        className="h-12"
      />
      <div>
        <h2 className="font-bold text-xl leading-4 mb-1">{domain}</h2>

        {keywords.map((keyword) => (
          <span className="bg-slate-100 text-gray-400 inline-block mr-1 p-1 rounded-md text-xs">
            {keyword}
          </span>
        ))}
      </div>
      <div>
        <div className="bg-green-100 w-36 h-[64px]"></div>
      </div>
    </div>
  )
}

export default DomainRow
