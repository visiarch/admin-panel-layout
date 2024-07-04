/**
 * This file exports the `BaseLayout` component and the `useBaseLayout` hook
 * from the `base-layout` directory.
 *
 * @module components/index
 * @exports {React.ComponentType} BaseLayout - The `BaseLayout` component is the main layout component for the application.
 *                                             It renders a layout with a sidebar and a main content area.
 * @exports {Function} useBaseLayout - The `useBaseLayout` hook is a custom hook that provides access to the `isCollapsed` state
 *                                    and the `setIsCollapsed` function from the `BaseLayoutProvider` context.
 */

/**
 * The `BaseLayout` component is the main layout component for the application.
 * It renders a layout with a sidebar and a main content area.
 *
 * @component
 * @return {React.ReactElement} The rendered `BaseLayout` component.
 */
export { default as BaseLayout } from "./base-layout";

/**
 * The `useBaseLayout` hook is a custom hook that provides access to the `isCollapsed` state
 * and the `setIsCollapsed` function from the `BaseLayoutProvider` context.
 *
 * @function
 * @return {{ isCollapsed: boolean, setIsCollapsed: (isCollapsed: boolean) => void }} An object containing the `isCollapsed` state and the `setIsCollapsed` function.
 */
export { useBaseLayout } from "./base-layout/base-layout-context";
