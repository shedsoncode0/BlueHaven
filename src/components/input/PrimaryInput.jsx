import React from 'react'

const PrimaryInput = ({label, placeholder, onChange, value, name, type }) => {
  return (
     <div>
     <label htmlFor="email" className="block text-sm mb-2">{label}</label>
     <div className="relative">
       <input type={type} name={name} onChange={onChange} value={value} placeholder={placeholder} className="py-2.5 sm:py-3 px-4 block w-full border-gray-200 border rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" required aria-describedby="email-error" />
       <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
         <svg className="size-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
           <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
         </svg>
       </div>
     </div>
   </div>
  
  )
}

export default PrimaryInput