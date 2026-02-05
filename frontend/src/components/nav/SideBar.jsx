import React, { useState } from 'react'
import { Link } from 'react-router'
import { FaLink } from "react-icons/fa6";
import { LuLayoutGrid } from "react-icons/lu";
import { IoAnalyticsOutline } from "react-icons/io5";

const links = [
  {
    link: "/dashboard",
    name: "dashboard",
    icon: <LuLayoutGrid />
  },
  {
    link: "/referral",
    name: "referral",
    icon: <FaLink />
  },
  {
    link: "/level",
    name: "level",
    icon: <IoAnalyticsOutline />
  },
]

const SideBar = () => {
  const [activeTab, setActiveTab] = useState("none")

  return (
    <>
  {/* ========== MAIN CONTENT ========== */}
<div className="-mt-px">
  {/* Breadcrumb */}
  <div className="sticky top-0 inset-x-0 z-20 bg-white border-y border-gray-200 px-4 sm:px-6 lg:px-8 lg:hidden">
    <div className="flex items-center py-2">
      {/* Navigation Toggle */}
      <button type="button" className="size-8 flex justify-center items-center gap-x-2 border border-gray-200 text-gray-800 hover:text-gray-500 rounded-lg focus:outline-hidden focus:text-gray-500 disabled:opacity-50 disabled:pointer-events-none" aria-haspopup="dialog" aria-expanded="false" aria-controls="hs-application-sidebar" aria-label="Toggle navigation" data-hs-overlay="#hs-application-sidebar">
        <span className="sr-only">Toggle Navigation</span>
        <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M15 3v18"/><path d="m8 9 3 3-3 3"/></svg>
      </button>
      {/* End Navigation Toggle */}
    </div>
  </div>
  {/* End Breadcrumb */}
</div>

{/* Sidebar */}
<div id="hs-application-sidebar" className="hs-overlay  [--auto-close:lg]
  hs-overlay-open:translate-x-0
  -translate-x-full transition-all duration-300 transform
  w-65 h-full
  hidden
  fixed inset-y-0 start-0 z-60
  bg-white border-e border-gray-200
  lg:block lg:translate-x-0 lg:end-auto lg:bottom-0
 " role="dialog"  aria-label="Sidebar">
  <div className="relative flex flex-col h-full max-h-full">
    <div className="px-6 pt-4 flex items-center">
      {/* Logo */}
      <h1 className='text-2xl font-bold'>BlueHaven</h1>
      {/* End Logo */}

      <div className="hidden lg:block ms-2">

      </div>
    </div>

    {/* Content */}
    <div className="h-full overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300">
      <nav className="hs-accordion-group p-3 w-full flex flex-col flex-wrap" data-hs-accordion-always-open>
        <ul className="flex flex-col space-y-1">
          {links.map((link, index) => (
          <li key={index}>
            <Link to={link.link} className={`flex items-center gap-x-3.5 py-2 hover:bg-gray-50 px-2.5 text-sm text-gray-800 rounded-lg ${activeTab === link.name ? "bg-gray-100" : "bg-white"} focus:outline-hidden focus:bg-gray-100`}>
            {link.icon}
            {link.name}
            </Link>
          </li>
          ))}
        </ul>
      </nav>
    </div>
    {/* End Content */}
  </div>
</div>
{/* End Sidebar */}

{/* Content */}
<div className="w-full lg:ps-64">
  <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
    {/* your content goes here ... */}
  </div>
</div>
{/* End Content */}
{/* ========== END MAIN CONTENT ========== */}
    </>
  )
}

export default SideBar