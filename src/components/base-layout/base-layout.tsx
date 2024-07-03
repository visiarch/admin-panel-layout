import React, { PropsWithChildren } from "react";

type Props = {
    nav: React.ReactNode;
};
const BaseLayout = ({ nav, children }: PropsWithChildren<Props>) => {
    return (
        <div className="w-full h-full">
            <div className="w-full bg-red-500">{nav}</div>
            {children}
        </div>
    );
};

export default BaseLayout;
