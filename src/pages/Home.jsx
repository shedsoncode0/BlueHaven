// import MainFooter from "../components/footers/MainFooter";
// import MainHeader from "../components/layouts/headers/MainHeader";

import { Link } from "react-router";
import MainFooter from "../components/ui/footer/MainFooter";
import MainHeader from "../components/ui/Header/MainHeader";

const Home = () => {
  return (
    <>
      <MainHeader />
      <section>
        {/* Hero */}
        <div className="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element.svg')] before:bg-no-repeat before:bg-top before:bg-cover before:size-full before:-z-1 before:transform before:-translate-x-1/2">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
            {/* Announcement Banner */}
            <div className="flex justify-center">
              <a
                className="inline-flex items-center gap-x-2 bg-white border border-gray-200 text-sm text-gray-800 p-1 ps-3 rounded-full transition hover:border-gray-300 focus:outline-hidden focus:border-gray-300"
                href="#"
              >
                PRO release - BlueHavenDigitalSystem
                <span className="py-1.5 px-2.5 inline-flex justify-center items-center gap-x-2 rounded-full bg-gray-200 font-semibold text-sm text-gray-600">
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
                </span>
              </a>
            </div>
            {/* End Announcement Banner */}

            {/* Title */}
            <div className="mt-5 max-w-2xl text-center mx-auto">
              <h1 className="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl">
                Let's grow
                <span className="bg-clip-text bg-linear-to-tl from-blue-600 to-violet-600 text-transparent">
                  {" "}
                  Together
                </span>
              </h1>
            </div>
            {/* End Title */}

            <div className="mt-5 max-w-3xl text-center mx-auto">
              <p className="text-lg text-gray-600">
                BHDS is an online market place that connects sellers to
                consumers through an online system. The system sells a wide
                range of goods across categories like phones, electronics, home
                appliances and more.
              </p>
            </div>

            {/* Buttons */}
            <div className="mt-8 gap-3 flex justify-center">
              <Link
                to="/sign-up"
                className="inline-flex justify-center items-center gap-x-3 text-center bg-linear-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 border border-transparent text-white text-sm font-medium rounded-md focus:outline-hidden focus:from-violet-600 focus:to-blue-600 py-3 px-4"
                href="#"
              >
                Get started
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
              </Link>
            </div>
            {/* End Buttons */}
          </div>
        </div>
        {/* End Hero */}
        {/* Features */}
        {/* Icon Blocks */}
        <div className="max-w-[85rem] bg-gray-50 px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          {/* Grid */}
          <div className="grid md:grid-cols-2 gap-12">
            <div className="lg:w-3/4">
              <h2 className="text-3xl text-gray-800 font-bold lg:text-4xl">
                Market place that connects sellers to consumers through an
                online system.
              </h2>
              <p className="mt-3 text-gray-800">
                BHDS acts as a marketplace where sellers list their products at
                a 50% discount for every product listed, why BHDS handles
                payment processing and delivery coordination.
              </p>
              <p className="mt-5">
                <a
                  className="inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline focus:outline-hidden focus:underline font-medium"
                  href="#"
                >
                  Contact sales to learn more
                  <svg
                    className="shrink-0 size-4 transition ease-in-out group-hover:translate-x-1 group-focus:translate-x-1"
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
              </p>
            </div>
            {/* End Col */}

            <div className="space-y-6 lg:space-y-10">
              {/* Icon Block */}
              <div className="flex gap-x-5 sm:gap-x-8">
                {/* Icon */}
                <span className="shrink-0 inline-flex justify-center items-center size-11 rounded-full border border-gray-200 bg-white text-gray-800 shadow-2xs mx-auto">
                  <svg
                    className="shrink-0 size-5"
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
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                  </svg>
                </span>
                <div className="grow">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                    Low-Price
                  </h3>
                  <p className="mt-1 text-gray-600">
                    Our documentation and extensive Client libraries contain
                    everything a business needs to build a custom integration in
                    a fraction of the time.
                  </p>
                </div>
              </div>
              {/* End Icon Block */}

              {/* Icon Block */}
              <div className="flex gap-x-5 sm:gap-x-8">
                {/* Icon */}
                <span className="shrink-0 inline-flex justify-center items-center size-11 rounded-full border border-gray-200 bg-white text-gray-800 shadow-2xs mx-auto">
                  <svg
                    className="shrink-0 size-5"
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
                    <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
                    <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
                  </svg>
                </span>
                <div className="grow">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                    Earn as you go
                  </h3>
                  <p className="mt-1 text-gray-600">
                    BHDS system helps you gain and upgrade as you go and bring
                    more people under you refferal link
                  </p>
                </div>
              </div>
              {/* End Icon Block */}
            </div>
            {/* End Col */}
          </div>
          {/* End Grid */}
        </div>
        {/* Feature End Icon Blocks */}
        {/* Stat section */}
        {/* Features */}
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          {/* Grid */}
          <div className="grid items-center lg:grid-cols-12 gap-6 lg:gap-12">
            <div className="lg:col-span-4">
              {/* Stats */}
              <div className="lg:pe-6 xl:pe-12">
                <p className="text-6xl font-bold leading-10 text-blue-600">
                  92%
                  <span className="ms-1 inline-flex items-center gap-x-1 bg-gray-200 font-medium text-gray-800 text-xs leading-4 rounded-full py-0.5 px-2">
                    <svg
                      className="shrink-0 size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                    </svg>
                    +7% this month
                  </span>
                </p>
                <p className="mt-2 sm:mt-3 text-gray-500">
                  of N.G. users on this platform currently
                </p>
              </div>
              {/* End Stats */}
            </div>
            {/* End Col */}

            <div className="lg:col-span-8 relative lg:before:absolute lg:before:top-0 lg:before:-start-12 lg:before:w-px lg:before:h-full lg:before:bg-gray-200 lg:">
              <div className="grid gap-6 grid-cols-2 md:grid-cols-4 lg:grid-cols-3 sm:gap-8">
                {/* Stats */}
                <div>
                  <p className="text-3xl font-semibold text-blue-600">99.95%</p>
                  <p className="mt-1 text-gray-500">in fulfilling orders</p>
                </div>
                {/* End Stats */}

                {/* Stats */}
                <div>
                  <p className="text-3xl font-semibold text-blue-600">2,000+</p>
                  <p className="mt-1 text-gray-500">partner with Preline</p>
                </div>
                {/* End Stats */}

                {/* Stats */}
                <div>
                  <p className="text-3xl font-semibold text-blue-600">85%</p>
                  <p className="mt-1 text-gray-500">this year alone</p>
                </div>
                {/* End Stats */}
              </div>
            </div>
            {/* End Col */}
          </div>
          {/* End Grid */}
        </div>
        {/* End Features */}
        {/* End of stats section */}
      </section>
      <MainFooter />
    </>
  );
};

export default Home;
