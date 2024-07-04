/**
 * Exports the `Navbar` component from the `navbar.tsx` file as the default export.
 *
 * @module components/navbar/index
 * @exports {React.ComponentType} default - The `Navbar` component.
 */

/**
 * The `Navbar` component is the main navigation component for the application.
 * It renders a navigation bar with optional sidebar toggle buttons and a customizable
 * topbar end section.
 *
 * @component
 * @param {Props} props - The component props.
 * @param {React.ReactNode} props.topbarEnd - The content that appears at the end of the top bar.
 * @param {React.ReactNode} props.sideMenu - The content that appears in the sidebar.
 * @param {React.ReactNode} props.brand - The brand content that appears in the top bar.
 * @param {React.ReactNode} props.closeIcon - The icon that appears when the sidebar is open and is used to close it.
 * @param {React.ReactNode} props.openIcon - The icon that appears when the sidebar is closed and is used to open it.
 * @return {React.ReactElement} The rendered `Navbar` component.
 */
export { default } from "./navbar";
