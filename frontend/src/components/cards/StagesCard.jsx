import React, { useState } from "react";

const StagesCard = ({ details, currentLevel }) => {
  

  return (
    <div>
      {/* Card */}
      <div className="flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl">
        <div className="py-3 px-4 border-b border-gray-200 rounded-t-xl">
          <p className="mt-1 text-sm text-gray-500">
            {details.stage} - Level {details.level}
          </p>
        </div>
        <div className="py-3 px-4 bg-gray-100 border-b border-gray-200 text-sm text-gray-800">
          <span className="font-semibold">Next level</span> Refer 6 persons to
          move level 2
        </div>
        <div className="p-4">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-gray-800">
              Level {details.level}
            </h3>
            <h3 className=" text-gray-800">
              Referred: <span className="font-bold"> 4</span>
            </h3>
          </div>
          <div>
            {/* <!-- Progress --> */}
            <div>
              <div className="inline-block mb-2 ms-[calc(25%-20px)] py-0.5 px-1.5 bg-blue-50 border border-blue-200 text-xs font-medium text-blue-600 rounded-lg dark:bg-blue-500/20 dark:border-blue-900 dark:text-blue-400">
                25%
              </div>
              <div
                className="flex w-full h-2 bg-surface-1 rounded-full overflow-hidden"
                role="progressbar"
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div
                  className="flex flex-col justify-center rounded-full overflow-hidden bg-blue-700 text-xs text-blue-100 text-center whitespace-nowrap transition duration-500"
                  style={{ width: "25%" }}
                ></div>
              </div>
            </div>
            {/* <!-- End Progress --> */}
          </div>
          <p className="mt-2 text-gray-500">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a
            className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-blue-600 decoration-2 hover:text-blue-700 hover:underline focus:underline focus:outline-hidden focus:text-blue-700 disabled:opacity-50 disabled:pointer-events-none"
            href="#"
          >
            Level 1
            <svg
              className="shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </a>
        </div>
      </div>
      {/* End Card */}
    </div>
  );
};

export default StagesCard;
