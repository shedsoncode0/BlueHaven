import React, { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { getReferralUsers } from "../../firebase/user";
import { toast } from "react-toastify";

const Dashboard = () => {
  const { user } = useAuth();
  const userId = user.uid;
  const [referrals, setReferrals] = useState([]);
  const [loading, setLoading] = useState(true);

  // Get all referral users
  useEffect(() => {
    // ✅ define async function inside useEffect
    async function fetchReferrals() {
      try {
        setLoading(true);
        const users = await getReferralUsers(userId); // call your function
        setReferrals(users); // store result in state
      } catch (error) {
        toast.error("Error fetching referrals:", error);
      } finally {
        setLoading(false);
      }
    }

    if (userId) fetchReferrals(); // only call if userId exists
  }, [userId]); // runs when userId changes

  return (
    <section>
      {/* Warning */}
      <div
        className="bg-yellow-50 mb-5 border border-yellow-200 text-sm text-yellow-800 rounded-lg p-4"
        role="alert"
        tabindex="-1"
        aria-labelledby="hs-with-description-label"
      >
        <div className="flex">
          <div className="shrink-0">
            <svg
              className="shrink-0 size-4 mt-0.5"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-w
              idth="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
              <path d="M12 9v4" />
              <path d="M12 17h.01" />
            </svg>
          </div>
          <div className="ms-4">
            <h3
              id="hs-with-description-label"
              className="text-sm font-semibold"
            >
              Activate your account today
            </h3>
            <div className="mt-1 text-sm text-yellow-800">
              To activate call the customer service +234 703 683 7716
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="py-3">
        <h1 className="font-semibold text-xl">Hello, {user?.fullName}👋</h1>
      </div>
      {/*  */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
        {/* <!-- Card --> */}
        <div className="flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl ">
          <div className="p-4 md:p-5">
            <div className="flex items-center gap-x-2">
              <p className="text-xs uppercase text-gray-500 ">Total Referred</p>
            </div>

            <div className="mt-1 flex items-center gap-x-2">
              <h3 className="text-xl sm:text-2xl font-medium text-gray-800 ">
                {user?.referrals.length}
              </h3>
            </div>
          </div>
        </div>
        {/* <!-- End Card --> */}

        {/* <!-- Card --> */}
        <div className="flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl ">
          <div className="p-4 md:p-5">
            <div className="flex items-center gap-x-2">
              <p className="text-xs uppercase text-gray-500 ">Compelete rate</p>
            </div>

            <div className="mt-1 flex items-center gap-x-2">
              <h3 className="text-xl sm:text-2xl font-medium text-gray-800 ">
                0%
              </h3>
            </div>
          </div>
        </div>
        {/* <!-- End Card --> */}

        {/* <!-- Card --> */}
        <div className="flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl ">
          <div className="p-4 md:p-5">
            <div className="flex items-center gap-x-2">
              <p className="text-xs uppercase text-gray-500 ">
                Avg. Click Rate
              </p>
            </div>

            <div className="mt-1 flex items-center gap-x-2">
              <h3 className="text-xl sm:text-2xl font-medium text-gray-800 ">
                0.5%
              </h3>
              <span className="flex items-center gap-x-1 text-red-600">
                <svg
                  className="inline-block size-4 self-center"
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
                  <polyline points="22 17 13.5 8.5 8.5 13.5 2 7" />
                  <polyline points="16 17 22 17 22 11" />
                </svg>
                <span className="inline-block text-sm">1.7%</span>
              </span>
            </div>
          </div>
        </div>
        {/* <!-- End Card --> */}
      </div>
      {/* <!-- End Grid --> */}
      {/* lkwem;olm */}
      {/* <!-- Card --> */}
      <div className="flex flex-col mt-10">
        <div className="overflow-x-auto [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
          <div className="min-w-full inline-block align-middle">
            <div className="bg-white border border-gray-200 rounded-xl shadow-2xs overflow-hidden ">
              {/* <!-- Header --> */}
              <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 ">
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 ">
                    Users
                  </h2>
                  <p className="text-sm text-gray-600 ">View, edit and more.</p>
                </div>

                <div>
                  <div className="inline-flex gap-x-2">
                    <a
                      className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-50 "
                      href="#"
                    >
                      View all
                    </a>
                  </div>
                </div>
              </div>
              {/* <!-- End Header --> */}

              {/* <!-- Table --> */}
              <table className="min-w-full divide-y divide-gray-200 ">
                <thead className="bg-gray-50 ">
                  <tr>
                    <th scope="col" className="ps-6 py-3 text-start">
                      <label
                        htmlFor="hs-at-with-checkboxes-main"
                        className="flex"
                      >
                        <input
                          type="checkbox"
                          className="shrink-0 border-gray-300 rounded-sm text-blue-600 focus:ring-blue-500 checked:border-blue-500 disabled:opacity-50 disabled:pointer-events-none "
                          id="hs-at-with-checkboxes-main"
                        />
                        <span className="sr-only">Checkbox</span>
                      </label>
                    </th>

                    <th
                      scope="col"
                      className="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3 text-start"
                    >
                      <div className="flex items-center gap-x-2">
                        <span className="text-xs font-semibold uppercase text-gray-800 ">
                          Name
                        </span>
                      </div>
                    </th>

                    <th scope="col" className="px-6 py-3 text-start">
                      <div className="flex items-center gap-x-2">
                        <span className="text-xs font-semibold uppercase text-gray-800 ">
                          Position
                        </span>
                      </div>
                    </th>

                    <th scope="col" className="px-6 py-3 text-start">
                      <div className="flex items-center gap-x-2">
                        <span className="text-xs font-semibold uppercase text-gray-800 ">
                          Status
                        </span>
                      </div>
                    </th>

                    <th scope="col" className="px-6 py-3 text-start">
                      <div className="flex items-center gap-x-2">
                        <span className="text-xs font-semibold uppercase text-gray-800 ">
                          Portfolio
                        </span>
                      </div>
                    </th>

                    <th scope="col" className="px-6 py-3 text-start">
                      <div className="flex items-center gap-x-2">
                        <span className="text-xs font-semibold uppercase text-gray-800 ">
                          Joined
                        </span>
                      </div>
                    </th>

                    <th scope="col" className="px-6 py-3 text-end"></th>
                  </tr>
                </thead>
                {referrals.map((user, index) => (
                  <UserCard user={user} key={index} />
                ))}
              </table>
              {/* <!-- End Table --> */}

              {/* <!-- Footer --> */}
              <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-t border-gray-200 ">
                <div>
                  <p className="text-sm text-gray-600 ">
                    <span className="font-semibold text-gray-800 ">
                      {user.referrals.length}
                    </span>{" "}
                    results
                  </p>
                </div>

                <div>
                  <div className="inline-flex gap-x-2">
                    <button
                      type="button"
                      className="py-1.5 px-2 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-50 "
                    >
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
                        <path d="m15 18-6-6 6-6" />
                      </svg>
                      Prev
                    </button>

                    <button
                      type="button"
                      className="py-1.5 px-2 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-50 "
                    >
                      Next
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
                    </button>
                  </div>
                </div>
              </div>
              {/* <!-- End Footer --> */}
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Card --> */}
    </section>
  );
};

export default Dashboard;

const UserCard = ({ user }) => {
  console.log(user);
  return (
    <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
      <tr>
        <td className="size-px whitespace-nowrap">
          <div className="ps-6 py-3">
            <label htmlFor="hs-at-with-checkboxes-1" className="flex">
              <input
                type="checkbox"
                className="shrink-0 border-gray-300 rounded-sm text-blue-600 focus:ring-blue-500 checked:border-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 "
                id="hs-at-with-checkboxes-1"
              />
              <span className="sr-only">Checkbox</span>
            </label>
          </div>
        </td>
        <td className="size-px whitespace-nowrap">
          <div className="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3">
            <div className="flex items-center gap-x-3">
              <div className=" size-9.5 rounded-full bg-gray-100 flex ">
                <h1 className="m-auto font-bold text-gray-500">{user.fullName[0]}</h1>
              </div>

              <div className="grow">
                <span className="block text-sm font-semibold text-gray-800 ">
                  {user.fullName}
                </span>
                <span className="block text-sm text-gray-500 dark:text-neutral-500">
                  {user.email}
                </span>
              </div>
            </div>
          </div>
        </td>
        <td className="h-px w-72 whitespace-nowrap">
          <div className="px-6 py-3">
            <span className="block text-sm font-semibold text-gray-800 ">
              User
            </span>
            <span className="block text-sm text-gray-500 dark:text-neutral-500">
              Blue Haven
            </span>
          </div>
        </td>
        <td className="size-px whitespace-nowrap">
          <div className="px-6 py-3">
            <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full dark:bg-teal-500/10 dark:text-teal-500">
              <svg
                className="size-2.5"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
              </svg>
              Active
            </span>
          </div>
        </td>
        <td className="size-px whitespace-nowrap">
          <div className="px-6 py-3">
            <div className="flex items-center gap-x-3">
              <span className="text-xs text-gray-500 dark:text-neutral-500">
                1/5
              </span>
              <div className="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700">
                <div
                  className="flex flex-col justify-center overflow-hidden bg-gray-800 dark:bg-neutral-200"
                  role="progressbar"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
        </td>
        <td className="size-px whitespace-nowrap">
          <div className="px-6 py-3">
            <span className="text-sm text-gray-500 dark:text-neutral-500">
              28 Dec, 12:12
            </span>
          </div>
        </td>
        <td className="size-px whitespace-nowrap">
          <div className="px-6 py-1.5">
            <a
              className="inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline focus:outline-hidden focus:underline font-medium dark:text-blue-500"
              href="#"
            >
              Edit
            </a>
          </div>
        </td>
      </tr>
    </tbody>
  );
};
