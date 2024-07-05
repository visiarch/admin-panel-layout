import React, {
    createContext,
    useContext,
    useState,
    PropsWithChildren,
} from "react";

/**
 * The BaseLayoutType interface defines the shape of the context object
 * that is provided to components using the BaseLayoutProvider.
 */
export declare type BaseLayoutType = {
    /**
     * Indicates whether the sidebar is collapsed or not.
     */
    isCollapsed: boolean;

    /**
     * A function to update the value of isCollapsed.
     * @param isCollapsed - The new value of isCollapsed.
     */
    setIsCollapsed: (isCollapsed: boolean) => void;
};

/**
 * The BaseLayout context is used to provide state and functionality related to the layout.
 * Components that need access to this state can use the BaseLayoutProvider component.
 */
const BaseLayoutContext = createContext<BaseLayoutType | undefined>(undefined);

/**
 * The BaseLayoutProvider component is used to provide the BaseLayout context to its children.
 * It takes a single child component and provides the BaseLayout context to it.
 * @param children - The child component that will be wrapped by the BaseLayoutProvider.
 * @returns The BaseLayoutProvider component.
 */
export const BaseLayoutProvider = ({ children }: PropsWithChildren) => {
    // State to track whether the sidebar is collapsed or not.
    const [isCollapsed, setIsCollapsed] = useState(false);

    // Provide the BaseLayout context to the children with the current state.
    return (
        <BaseLayoutContext.Provider value={{ isCollapsed, setIsCollapsed }}>
            {children}
        </BaseLayoutContext.Provider>
    );
};

/**
 * The useBaseLayout hook is used to access the BaseLayout context in components.
 * It throws an error if used outside of the BaseLayoutProvider component.
 * @returns The BaseLayout context object.
 */
export const useBaseLayout = () => {
    // Get the BaseLayout context from the useContext hook.
    const context = useContext(BaseLayoutContext);

    // Throw an error if the context is undefined, meaning that the component is not wrapped in a BaseLayoutProvider.
    if (!context) {
        throw new Error(
            "useBaseLayout must be used within a BaseLayoutProvider"
        );
    }

    // Return the BaseLayout context object.
    return context;
};
