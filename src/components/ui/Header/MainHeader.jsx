import { Link } from "react-router";

const MainHeader = () => {
    return (
      <header>
        {/* ========== HEADER ========== */}
        <header className="flex flex-wrap lg:justify-start lg:flex-nowrap z-50 w-full py-7">
          <nav className="relative max-w-7xl w-full flex flex-wrap lg:grid lg:grid-cols-12 basis-full items-center px-4 md:px-6 lg:px-8 mx-auto">
            <div className="lg:col-span-3 flex items-center">
              {/* Logo */}
              <a
                className="flex-none rounded-xl text-xl inline-block font-semibold focus:outline-hidden focus:opacity-80"
                href="index.html"
                aria-label="Preline"
              >
               <h1>BlueHeven</h1>
              </a>
              {/* End Logo */}
  
              <div className="ms-1 sm:ms-2"></div>
            </div>
  
            {/* Button Group */}
            <div className="flex items-center gap-x-1 lg:gap-x-2 ms-auto py-1 lg:ps-6 lg:order-3 lg:col-span-3">
              <button
                type="button"
                className="size-9.5 relative flex justify-center items-center rounded-xl bg-white border border-gray-200 text-black hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
              >
                <span className="sr-only">Search</span>
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
                  <path d="m21 21-4.34-4.34" />
                  <circle cx="11" cy="11" r="8" />
                </svg>
              </button>
              <button
                type="button"
                className="size-9.5 relative flex justify-center items-center rounded-xl bg-white border border-gray-200 text-black hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
              >
                <span className="sr-only">Cart</span>
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
                  <circle cx="8" cy="21" r="1" />
                  <circle cx="19" cy="21" r="1" />
                  <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                </svg>
              </button>

              <Link
                to={"/sign-in"}
                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium text-nowrap rounded-xl border border-transparent bg-yellow-400 text-black hover:bg-yellow-500 focus:outline-hidden focus:bg-yellow-500 transition disabled:opacity-50 disabled:pointer-events-none"
              >
                Sign in
              </Link>
  
              <div className="lg:hidden">
                <button
                  type="button"
                  className="hs-collapse-toggle size-9.5 flex justify-center items-center text-sm font-semibold rounded-xl border border-gray-200 text-black hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                  id="hs-pro-hcail-collapse"
                  aria-expanded="false"
                  aria-controls="hs-pro-hcail"
                  aria-label="Toggle navigation"
                  data-hs-collapse="#hs-pro-hcail"
                >
                  <svg
                    className="hs-collapse-open:hidden shrink-0 size-4"
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
                    <line x1="3" x2="21" y1="6" y2="6" />
                    <line x1="3" x2="21" y1="12" y2="12" />
                    <line x1="3" x2="21" y1="18" y2="18" />
                  </svg>
                  <svg
                    className="hs-collapse-open:block hidden shrink-0 size-4"
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
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </button>
              </div>
            </div>
            {/* End Button Group */}
  
            {/* Collapse */}
            <div
              id="hs-pro-hcail"
              className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow lg:block lg:w-auto lg:basis-auto lg:order-2 lg:col-span-6"
              aria-labelledby="hs-pro-hcail-collapse"
            >
              <div className="flex flex-col gap-y-4 gap-x-0 mt-5 lg:flex-row lg:justify-center lg:items-center lg:gap-y-0 lg:gap-x-7 lg:mt-0">
                <div>
                  <a
                    className="relative inline-block text-black focus:outline-hidden before:absolute before:bottom-0.5 before:start-0 before:-z-1 before:w-full before:h-1 before:bg-yellow-400"
                    href="#"
                    aria-current="page"
                  >
                    Home
                  </a>
                </div>
                <div>
                  <a
                    className="inline-block text-black hover:text-gray-600 focus:outline-hidden focus:text-gray-600"
                    href="#"
                  >
                    Listings
                  </a>
                </div>
                <div>
                  <a
                    className="inline-block text-black hover:text-gray-600 focus:outline-hidden focus:text-gray-600"
                    href="#"
                  >
                    Product
                  </a>
                </div>
                <div>
                  <a
                    className="inline-block text-black hover:text-gray-600 focus:outline-hidden focus:text-gray-600"
                    href="#"
                  >
                    Checkout
                  </a>
                </div>
              </div>
            </div>
            {/* End Collapse */}
          </nav>
        </header>
        {/* ========== END HEADER ========== */}
      </header>
    );
  };
  
  export default MainHeader;
  