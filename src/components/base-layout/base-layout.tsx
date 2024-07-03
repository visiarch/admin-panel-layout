import React, { PropsWithChildren, useEffect, useState } from "react";
import Navbar from "../navbar";

type Props = {
  topbarEnd?: React.ReactNode;
  sideMenu?: React.ReactNode;
  brand?: React.ReactNode;
};
const BaseLayout = ({
  topbarEnd,
  sideMenu,
  brand,
  children,
}: PropsWithChildren<Props>) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      className="min-h-screen antialiased font-normal fi-body fi-panel-admin bg-gray-50 text-gray-950 dark:bg-gray-950 dark:text-white"
      style={{ overflow: "visible" }}
    >
      <div className="flex flex-row-reverse w-full min-h-screen fi-layout overflow-x-clip">
        <div
          style={{ display: "flex", opacity: 1 }}
          className="flex-col flex-1 w-screen opacity-0 fi-main-ctn"
        >
          <div className="sticky top-0 z-20 fi-topbar overflow-x-clip">
            <Navbar />
          </div>

          <main className="w-full h-full px-4 mx-auto md:px-6 lg:px-8 max-w-7xl">
            {children}
          </main>
        </div>
        <div
          className={`fi-sidebar-close-overlay fixed inset-0 z-30 bg-gray-950/50 transition duration-500 dark:bg-gray-950/75 lg:hidden ${
            isOpen ? "" : "hidden"
          }`}
          style={{
            transition: "opacity 300ms",
            display: isOpen ? "block" : "none",
          }}
        ></div>
        <aside
          className={`
        fi-sidebar fixed inset-y-0 start-0 z-30 flex flex-col h-screen content-start bg-white transition-all dark:bg-gray-900 lg:z-0 lg:bg-transparent lg:shadow-none lg:ring-0 lg:transition-none dark:lg:bg-transparent lg:translate-x-0 rtl:lg:-translate-x-0 fi-main-sidebar
   w-80
        ${
          isOpen
            ? "fi-sidebar-open translate-x-0 shadow-xl ring-1 ring-gray-950/5 dark:ring-white/10 rtl:-translate-x-0 lg:sticky"
            : "-translate-x-full rtl:translate-x-full lg:sticky"
        }
      `}
        >
          <div className="overflow-x-clip">
            <header className="flex items-center h-16 px-6 bg-white fi-sidebar-header ring-1 ring-gray-950/5 dark:bg-gray-900 dark:ring-white/10 lg:shadow-sm">
              <div>{brand}</div>
            </header>
          </div>
          <nav className="flex flex-col flex-grow px-6 py-8 overflow-x-hidden overflow-y-auto gap-y-7">
            {sideMenu}
          </nav>
        </aside>
      </div>
    </section>
  );
};

export default BaseLayout;
