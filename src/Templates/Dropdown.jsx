import React from 'react'

const Dropdown = ({title,options,func}) => {
  return (
    <div className="select">
          <select defaultValue="0" onChange={func} name="format" id="format">
            <option className='text-md' value="0" disabled>
              {title}
            </option>
            {options.map((opt,i)=>(
                <option key={i} className='text-md' value={opt}>
              {opt.toUpperCase()}
            </option>
            ))}
          </select>
        </div>
  )
}

export default Dropdown
