import React from "react";

type Props = {
    children: React.ReactNode;
    display?: string | undefined;
    alignItems?: string | undefined;
    justifyContent?: string | undefined;
    flexDirection?: "row" | "row-reverse" | "column" | "column-reverse";
    padding?: string | undefined;
    gap?: string | number | undefined;
    margin?: string | undefined;
    marginTop?: string | undefined;
    marginBottom?: string | undefined;
    marginRight?: string | undefined;
    marginLeft?: string | undefined;
};

const Container: React.FC<Props> = ({
    children,
    display,
    alignItems,
    justifyContent,
    flexDirection,
    gap,
    padding = "21px",
    margin,
    marginTop,
    marginBottom,
    marginRight,
    marginLeft,
}) => {
    return (
        <div
            style={{
                padding,
                display,
                alignItems,
                justifyContent,
                flexDirection,
                gap,
                margin,
                marginTop,
                marginBottom,
                marginRight,
                marginLeft,
            }}
        >
            {children}
        </div>
    );
};

export default Container;
