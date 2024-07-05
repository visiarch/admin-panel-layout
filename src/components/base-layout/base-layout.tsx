import React, { PropsWithChildren, useState } from "react";
import { MenuIcon, PanelLeftClose, PanelLeftOpen, XIcon } from "lucide-react";
import { useBaseLayout } from "./base-layout-context";

export declare type Props = {
    topbarEnd?: React.ReactNode;
    sideMenu?: React.ReactNode;
    brand?: React.ReactNode;
    iconBrand?: React.ReactNode;
    closeIcon?: React.ReactNode;
    openIcon?: React.ReactNode;
    iconCollapse?: React.ReactNode;
    iconExpand?: React.ReactNode;
};

const BaseLayout = ({
    sideMenu,
    brand,
    iconBrand,
    children,
    closeIcon,
    openIcon,
    topbarEnd,
    iconCollapse,
    iconExpand,
}: PropsWithChildren<Props>) => {
    const [isOpen, setIsOpen] = useState(false);
    const { isCollapsed, setIsCollapsed } = useBaseLayout();

    return (
        <section
            className="min-h-screen antialiased font-normal bg-gray-50 text-gray-950 dark:bg-gray-950 dark:text-white"
            style={{ overflow: "visible" }}
        >
            <div className="flex flex-row-reverse w-full min-h-screen overflow-x-clip">
                <div
                    style={{ display: "flex", opacity: 1 }}
                    className="flex-col flex-1 w-screen opacity-0 "
                >
                    <div className="sticky top-0 z-20 overflow-x-clip">
                        <nav className="flex items-center h-16 px-4 bg-white shadow-sm gap-x-4 ring-1 ring-gray-950/5 dark:bg-gray-900 dark:ring-white/10 md:px-6 lg:px-8">
                            <div className="lg:hidden">
                                <button
                                    className="flex items-center justify-center rounded-lg transition duration-75 focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-70 -m-1.5 h-9 w-9 text-gray-400 hover:text-gray-500 focus-visible:ring-primary-600 dark:text-gray-500 dark:hover:text-gray-400 dark:focus-visible:ring-primary-500 fi-color-gray fi-topbar-close-sidebar-btn"
                                    title="Collapse sidebar"
                                    type="button"
                                    onClick={() => {
                                        setIsOpen(!isOpen);
                                    }}
                                >
                                    <span className="sr-only">
                                        Collapse sidebar
                                    </span>
                                    {isOpen
                                        ? closeIcon ?? <XIcon />
                                        : openIcon ?? <MenuIcon />}
                                </button>
                            </div>
                            <div className="flex items-center ms-auto gap-x-4">
                                {topbarEnd}
                            </div>
                        </nav>
                    </div>
                    <main className="w-full h-full px-4 mx-auto md:px-6 lg:px-8 max-w-7xl">
                        {children}
                    </main>
                </div>
                <div
                    onClick={() => setIsOpen(false)}
                    className={`fixed inset-0 z-30 bg-gray-950/50 transition duration-500 dark:bg-gray-950/75 lg:hidden ${
                        isOpen ? "" : "hidden"
                    }`}
                    style={{
                        transition: "opacity 300ms",
                        display: isOpen ? "block" : "none",
                    }}
                ></div>
                <aside
                    className={`fixed inset-y-0 start-0 z-30 flex flex-col h-screen content-start bg-white transition-all dark:bg-gray-900 lg:z-0 lg:bg-transparent lg:shadow-none lg:ring-0 lg:transition-none dark:lg:bg-transparent lg:translate-x-0 rtl:lg:-translate-x-0  
                        ${isCollapsed ? "w-24" : "w-80"} ${
                        isOpen
                            ? " translate-x-0 shadow-xl ring-1 ring-gray-950/5 dark:ring-white/10 rtl:-translate-x-0 lg:sticky"
                            : "-translate-x-full rtl:translate-x-full lg:sticky"
                    }`}
                >
                    <div className="overflow-x-clip">
                        <header className="flex items-center h-16 px-6 bg-white justify-between ring-1 ring-gray-950/5 dark:bg-gray-900 dark:ring-white/10 lg:shadow-sm group">
                            <div>{isCollapsed ? iconBrand : brand}</div>
                            <div className="flex justify-end text-gray-500 opacity-0 group-hover:opacity-100">
                                {isCollapsed ? (
                                    <button
                                        className="hover:bg-gray-100 rounded bg-transparent p-1"
                                        onClick={() => setIsCollapsed(false)}
                                    >
                                        {iconCollapse ?? (
                                            <PanelLeftOpen className="w-5 h-5" />
                                        )}
                                    </button>
                                ) : (
                                    <button
                                        className="hover:bg-gray-100 rounded bg-transparent p-1"
                                        onClick={() => setIsCollapsed(true)}
                                    >
                                        {iconExpand ?? (
                                            <PanelLeftClose className="w-5 h-5" />
                                        )}
                                    </button>
                                )}
                            </div>
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
