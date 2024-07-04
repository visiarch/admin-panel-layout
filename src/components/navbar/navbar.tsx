import React from "react";

/**
 * Props for the Navbar component.
 */
type Props = {
    /**
     * The icon to be displayed when the sidebar is closed and used to open it.
     */
    openIcon: React.ReactNode;

    /**
     * The icon to be displayed when the sidebar is open and used to close it.
     */
    closeIcon: React.ReactNode;

    /**
     * The open/close state of the sidebar.
     */
    isOpen: boolean;

    /**
     * A function to update the open/close state of the sidebar.
     *
     * @param isOpen - The new open/close state of the sidebar.
     */
    setIsOpen: (isOpen: boolean) => void;

    /**
     * The content to be displayed at the end of the top bar.
     */
    topbarEnd?: React.ReactNode;
};
/**
 * The Navbar component represents the top bar of the application.
 * It contains buttons to open and close the sidebar, as well as
 * a slot for additional content at the end of the top bar.
 *
 * @param openIcon - The icon to be displayed when the sidebar is closed and used to open it.
 * @param closeIcon - The icon to be displayed when the sidebar is open and used to close it.
 * @param isOpen - The open/close state of the sidebar.
 * @param setIsOpen - A function to update the open/close state of the sidebar.
 * @param topbarEnd - The content to be displayed at the end of the top bar.
 */
const Navbar = ({
    openIcon,
    closeIcon,
    isOpen,
    setIsOpen,
    topbarEnd,
}: Props) => {
    // Render the top bar with buttons to open and close the sidebar and the content at the end of the top bar.
    return (
        <nav className="flex items-center h-16 px-4 bg-white shadow-sm gap-x-4 ring-1 ring-gray-950/5 dark:bg-gray-900 dark:ring-white/10 md:px-6 lg:px-8">
            <div className="sm:flex">
                {/* Render the button to open the sidebar if it is closed */}
                {!isOpen && (
                    <button
                        className="fi-icon-btn relative flex items-center justify-center rounded-lg outline-none transition duration-75 focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-70 -m-1.5 h-9 w-9 text-gray-400 hover:text-gray-500 focus-visible:ring-primary-600 dark:text-gray-500 dark:hover:text-gray-400 dark:focus-visible:ring-primary-500 fi-color-gray fi-topbar-open-sidebar-btn"
                        title="Expand sidebar"
                        type="button"
                        onClick={() => {
                            setIsOpen(!isOpen);
                        }}
                    >
                        <span className="sr-only">Expand sidebar</span>
                        {/* Add your sidebar icon here */}
                        {openIcon}
                    </button>
                )}

                {/* Render the button to close the sidebar if it is open */}
                {isOpen && (
                    <button
                        className="fi-icon-btn relative flex items-center justify-center rounded-lg outline-none transition duration-75 focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-70 -m-1.5 h-9 w-9 text-gray-400 hover:text-gray-500 focus-visible:ring-primary-600 dark:text-gray-500 dark:hover:text-gray-400 dark:focus-visible:ring-primary-500 fi-color-gray fi-topbar-close-sidebar-btn"
                        title="Collapse sidebar"
                        type="button"
                        onClick={() => {
                            setIsOpen(!isOpen);
                        }}
                    >
                        <span className="sr-only">Collapse sidebar</span>
                        {/* Add your sidebar icon here */}
                        {closeIcon}
                    </button>
                )}
            </div>

            {/* Render the content at the end of the top bar */}
            <div className="flex items-center ms-auto gap-x-4">{topbarEnd}</div>
        </nav>
    );
};

export default Navbar;
