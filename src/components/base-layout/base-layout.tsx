import React, { PropsWithChildren, useState } from "react";
import Navbar from "../navbar";

/**
 * The Props type for the BaseLayout component.
 *
 * @typedef {Object} Props
 * @property {React.ReactNode} [topbarEnd] - The content that appears at the end of the top bar.
 * @property {React.ReactNode} [sideMenu] - The content that appears in the sidebar.
 * @property {React.ReactNode} [brand] - The brand content that appears in the top bar.
 * @property {React.ReactNode} [closeIcon] - The icon that appears when the sidebar is open and is used to close it.
 * @property {React.ReactNode} [openIcon] - The icon that appears when the sidebar is closed and is used to open it.
 */

type Props = {
    /**
     * The content that appears at the end of the top bar.
     */
    topbarEnd?: React.ReactNode;
    /**
     * The content that appears in the sidebar.
     */
    sideMenu?: React.ReactNode;
    /**
     * The brand content that appears in the top bar.
     */
    brand?: React.ReactNode;
    /**
     * The icon that appears when the sidebar is open and is used to close it.
     */
    closeIcon?: React.ReactNode;
    /**
     * The icon that appears when the sidebar is closed and is used to open it.
     */
    openIcon?: React.ReactNode;
};
/**
 * The BaseLayout component renders a layout with a sidebar and a main content area.
 * It takes in various props to customize the appearance of the layout.
 *
 * @param {Props} props - The props object containing the customization options.
 * @param {React.ReactNode} [props.sideMenu] - The content to be displayed in the sidebar.
 * @param {React.ReactNode} [props.brand] - The content to be displayed in the top bar.
 * @param {React.ReactNode} [props.children] - The main content to be displayed in the main content area.
 * @param {React.ReactNode} [props.closeIcon] - The icon to be displayed when the sidebar is open and used to close it.
 * @param {React.ReactNode} [props.openIcon] - The icon to be displayed when the sidebar is closed and used to open it.
 * @param {React.ReactNode} [props.topbarEnd] - The content to be displayed at the end of the top bar.
 * @returns {JSX.Element} - The rendered layout component.
 */
const BaseLayout = ({
    sideMenu,
    brand,
    children,
    closeIcon,
    openIcon,
    topbarEnd,
}: PropsWithChildren<Props>) => {
    // State to track the open/close state of the sidebar
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section
            className="min-h-screen antialiased font-normal fi-body fi-panel-admin bg-gray-50 text-gray-950 dark:bg-gray-950 dark:text-white"
            style={{ overflow: "visible" }}
        >
            <div className="flex flex-row-reverse w-full min-h-screen fi-layout overflow-x-clip">
                {/* Main content area */}
                <div
                    style={{ display: "flex", opacity: 1 }}
                    className="flex-col flex-1 w-screen opacity-0 fi-main-ctn"
                >
                    {/* Top bar */}
                    <div className="sticky top-0 z-20 fi-topbar overflow-x-clip">
                        {/* Navbar component */}
                        <Navbar
                            closeIcon={closeIcon}
                            openIcon={openIcon}
                            isOpen={isOpen}
                            setIsOpen={setIsOpen}
                            topbarEnd={topbarEnd}
                        />
                    </div>

                    {/* Main content area */}
                    <main className="w-full h-full px-4 mx-auto md:px-6 lg:px-8 max-w-7xl">
                        {children}
                    </main>
                </div>

                {/* Sidebar overlay to close the sidebar on click */}
                <div
                    onClick={() => setIsOpen(false)}
                    className={`fi-sidebar-close-overlay fixed inset-0 z-30 bg-gray-950/50 transition duration-500 dark:bg-gray-950/75 lg:hidden ${
                        isOpen ? "" : "hidden"
                    }`}
                    style={{
                        transition: "opacity 300ms",
                        display: isOpen ? "block" : "none",
                    }}
                ></div>

                {/* Sidebar */}
                <aside
                    className={`fi-sidebar fixed inset-y-0 start-0 z-30 flex flex-col h-screen content-start bg-white transition-all dark:bg-gray-900 lg:z-0 lg:bg-transparent lg:shadow-none lg:ring-0 lg:transition-none dark:lg:bg-transparent lg:translate-x-0 rtl:lg:-translate-x-0 fi-main-sidebar w-80 ${
                        isOpen
                            ? "fi-sidebar-open translate-x-0 shadow-xl ring-1 ring-gray-950/5 dark:ring-white/10 rtl:-translate-x-0 lg:sticky"
                            : "-translate-x-full rtl:translate-x-full lg:sticky"
                    }`}
                >
                    <div className="overflow-x-clip">
                        {/* Sidebar header */}
                        <header className="flex items-center h-16 px-6 bg-white fi-sidebar-header ring-1 ring-gray-950/5 dark:bg-gray-900 dark:ring-white/10 lg:shadow-sm">
                            <div>{brand}</div>
                        </header>
                    </div>

                    {/* Sidebar navigation */}
                    <nav className="flex flex-col flex-grow px-6 py-8 overflow-x-hidden overflow-y-auto gap-y-7">
                        {sideMenu}
                    </nav>
                </aside>
            </div>
        </section>
    );
};

export default BaseLayout;
