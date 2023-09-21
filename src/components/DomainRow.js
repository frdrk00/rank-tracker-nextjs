const DomainRow = ({keywords}) => {
    
  return (
    <div className="flex gap-2 bg-white border border-blue-200 border-b-4 p-4 my-3 rounded-lg items-center">
      <img
        src="https://www.svgrepo.com/show/521688/github.svg"
        alt=""
        className="h-12"
      />
      <div>
        <h2 className="font-bold text-xl leading-4 mb-1">Github.com</h2>

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
