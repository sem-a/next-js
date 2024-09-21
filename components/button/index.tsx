import { MouseEventHandler, useState } from "react";

type Props = {
    children: React.ReactNode;
    width?: string | undefined;
    display?: string | undefined;
    alignItems?: string | undefined;
    justifyContent?: string | undefined;
    gap?: string | undefined;
    paddingBlock?: string | undefined;
    paddingInline?: string | undefined;
    padding?: string | undefined;
    margin?: string | undefined;
    marginTop?: string | undefined;
    marginBottom?: string | undefined;
    marginRight?: string | undefined;
    marginLeft?: string | undefined;
    fontWeight?: string | undefined;
    fontSize?: string | undefined;
    color?: string | undefined;
    background?: string | undefined;
    backgroundHover?: string | undefined;
    border?: string | undefined;
    borderHover?: string | undefined;
    borderRadius?: string | undefined;
    transition?: string | undefined;
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
};

const Button: React.FC<Props> = ({
    children,
    width,
    display,
    alignItems,
    justifyContent,
    gap,
    paddingBlock,
    paddingInline,
    padding,
    margin,
    marginTop,
    marginBottom,
    marginRight,
    marginLeft,
    fontWeight,
    fontSize,
    color,
    background,
    backgroundHover,
    border,
    borderHover,
    borderRadius,
    transition,
    onClick,
}) => {
    const [hovered, setHovered] = useState(false);
    return (
        <button
            style={{
                width,
                display,
                alignItems,
                justifyContent,
                gap,
                paddingBlock,
                paddingInline,
                padding,
                margin,
                marginTop,
                marginBottom,
                marginRight,
                marginLeft,
                fontWeight,
                fontSize,
                color,
                background: hovered ? backgroundHover : background,
                border: hovered ? borderHover : border,
                borderRadius,
                transition,
            }}
            onMouseEnter={() => {
                setHovered(true);
            }}
            onMouseLeave={() => {
                setHovered(false);
            }}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
