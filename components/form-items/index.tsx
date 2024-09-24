import React from "react";
import styles from "./index.module.scss";

type PropsSelect = {
    options: {
        title: string | number;
        value: number | string;
    }[];
    id: string | undefined;
    onChange: React.ChangeEventHandler<HTMLSelectElement> | undefined;
};

export const Select: React.FC<PropsSelect> = ({ id, options, onChange }) => {
    return (
        <select onChange={onChange} className={styles.select} id={id}>
            {options.map((option, optionIndex) => (
                <option key={optionIndex} value={option.value}>
                    {option.title}
                </option>
            ))}
        </select>
    );
};

type PropsInput = {
    placeholder?: string | undefined;
    name: string | undefined;
    id: string | undefined;
};

export const Input: React.FC<PropsInput> = ({ id, name, placeholder }) => {
    return <input id={id} name={name} placeholder={placeholder} />;
};

type PropsLabel = {
    htmlFor: string;
    children: React.ReactNode;
};

export const Label: React.FC<PropsLabel> = ({ htmlFor, children }) => {
    return (
        <label className={styles.label} htmlFor={htmlFor}>
            {children}
        </label>
    );
};

type PropsItem = {
    children: React.ReactNode;
};

export const FormItem: React.FC<PropsItem> = ({ children }) => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                gap: "7px",
            }}
        >
            {children}
        </div>
    );
};

type PropsFlex = {
    children: React.ReactNode;
    alignItems?: string | undefined;
    justifyContent?: string | undefined;
    gap?: string | undefined;
};

export const FormFlex: React.FC<PropsFlex> = ({
    children,
    alignItems = "flex-start",
    justifyContent = "flex-start",
    gap = "7px",
}) => {
    return (
        <div
            style={{
                display: "flex",
                alignItems,
                justifyContent,
                gap,
            }}
        >
            {children}
        </div>
    );
};
