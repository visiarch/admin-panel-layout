import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center h-16 px-4 bg-white shadow-sm gap-x-4 ring-1 ring-gray-950/5 dark:bg-gray-900 dark:ring-white/10 md:px-6 lg:px-8">
      <button
        className="fi-icon-btn relative flex items-center justify-center rounded-lg outline-none transition duration-75 focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-70 -m-1.5 h-9 w-9 text-gray-400 hover:text-gray-500 focus-visible:ring-primary-600 dark:text-gray-500 dark:hover:text-gray-400 dark:focus-visible:ring-primary-500 fi-color-gray fi-topbar-open-sidebar-btn lg:hidden"
        title="Expand sidebar"
        type="button"
        onClick={() => {
          // Add your sidebar open logic here
        }}
      >
        <span className="sr-only">Expand sidebar</span>
        <svg
          className="w-6 h-6 fi-icon-btn-icon"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          aria-hidden="true"
          data-slot="icon"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          ></path>
        </svg>
      </button>

      <button
        style={{
          display: "none",
        }}
        className="fi-icon-btn relative flex items-center justify-center rounded-lg outline-none transition duration-75 focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-70 -m-1.5 h-9 w-9 text-gray-400 hover:text-gray-500 focus-visible:ring-primary-600 dark:text-gray-500 dark:hover:text-gray-400 dark:focus-visible:ring-primary-500 fi-color-gray fi-topbar-close-sidebar-btn lg:hidden"
        title="Collapse sidebar"
        type="button"
        onClick={() => {
          // Add your sidebar close logic here
        }}
      >
        <span className="sr-only">Collapse sidebar</span>
        <svg
          className="w-6 h-6 fi-icon-btn-icon"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          aria-hidden="true"
          data-slot="icon"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          ></path>
        </svg>
      </button>

      <div className="flex items-center ms-auto gap-x-4">
        <div className="flex items-center fi-global-search">
          <div className="sm:relative">
            <div className="fi-global-search-field">
              <label className="sr-only" htmlFor="input-1">
                Global search
              </label>
              <div className="flex transition duration-75 bg-white rounded-lg shadow-sm fi-input-wrp ring-1 dark:bg-white/5 focus-within:ring-2 ring-gray-950/10 dark:ring-white/20 focus-within:ring-primary-600 dark:focus-within:ring-primary-500">
                <div className="flex items-center gap-x-3 ps-3 pe-2">
                  <svg
                    className="w-5 h-5 text-gray-400 fi-input-wrp-icon dark:text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-gray-400 animate-spin fi-input-wrp-icon dark:text-gray-500"
                  >
                    <path
                      clipRule="evenodd"
                      d="M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                      fillRule="evenodd"
                      fill="currentColor"
                      opacity="0.2"
                    ></path>
                    <path
                      d="M2 12C2 6.47715 6.47715 2 12 2V5C8.13401 5 5 8.13401 5 12H2Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <input
                    className="fi-input block w-full border-none py-1.5 text-base text-gray-950 transition duration-75 placeholder:text-gray-400 focus:ring-0 disabled:text-gray-500 dark:text-white dark:placeholder:text-gray-500 sm:text-sm sm:leading-6 bg-white/0 ps-0 pe-3"
                    autoComplete="off"
                    placeholder="Search"
                    type="search"
                    id="input-1"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex">
          <div
            onClick={() => {
              // Add your notification modal open logic here
            }}
            className="inline-block"
          >
            <button
              style={{}}
              className="fi-icon-btn relative flex items-center justify-center rounded-lg outline-none transition duration-75 focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-70 -m-1.5 h-9 w-9 text-gray-400 hover:text-gray-500 focus-visible:ring-primary-600 dark:text-gray-500 dark:hover:text-gray-400 dark:focus-visible:ring-primary-500 fi-color-gray fi-topbar-database-notifications-btn"
              title="Open notifications"
              type="button"
            >
              <span className="sr-only">Open notifications</span>
              <svg
                className="w-6 h-6 fi-icon-btn-icon"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 0 1-5.714 0"
                ></path>
              </svg>
            </button>
          </div>
          <div
            onClick={() => {
              // Add your profile dropdown open logic here
            }}
            className="inline-block"
          >
            <button
              className="relative flex items-center text-left transition duration-75 rounded-lg outline-none gap-x-2 focus-visible:ring-2"
              aria-expanded="false"
              aria-haspopup="menu"
              id="headlessui-popover-button-2"
              type="button"
              data-headlessui-state=""
            >
              <span className="sr-only">Open user menu</span>
              <span
                className="relative inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-gray-300 rounded-full shrink-0 dark:bg-gray-700"
                aria-hidden="true"
              >
                <svg
                  className="text-gray-400 h-7 w-7 dark:text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </span>
              <span className="hidden lg:flex lg:items-center">
                <span className="flex flex-col min-w-0">
                  <span className="text-sm font-semibold leading-6 truncate text-gray-950 dark:text-white">
                    Placeholder Name
                  </span>
                  <span className="text-xs leading-5 text-gray-600 truncate dark:text-gray-400">
                    placeholder@example.com
                  </span>
                </span>
                <svg
                  className="w-5 h-5 text-gray-400 fi-icon dark:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 9l6 6 6-6"
                  ></path>
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
