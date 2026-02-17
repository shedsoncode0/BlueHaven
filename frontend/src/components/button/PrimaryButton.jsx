import React from "react";

const PrimaryButton = ({ text, type, onClick, isLoading }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
    >
      {!isLoading && text}
      {isLoading && (
        <div class="animate-spin inline-block size-5 border-3 border-current border-t-transparent rounded-[999px] text-primary" role="status" aria-label="loading">
  <span class="sr-only">Loading...</span>
</div>
      )}
    </button>
  );
};

export default PrimaryButton;
