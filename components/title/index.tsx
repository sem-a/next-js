import styles from "./index.module.scss";

type Props = {
    children: React.ReactNode;
    color?: string | undefined;
    textAlign?: any | undefined;
    fontSize?: string | undefined;
};

export const H3: React.FC<Props> = ({
    children,
    color,
    textAlign,
    fontSize,
}) => {
    return (
        <h3
            className={styles.title}
            style={{
                color,
                textAlign,
                fontSize,
            }}
        >
            {children}
        </h3>
    );
};

export const H4: React.FC<Props> = ({
    children,
    color,
    textAlign,
    fontSize,
}) => {
    return (
        <h4 className={styles.title} style={{ color, textAlign, fontSize }}>
            {children}
        </h4>
    );
};

export const Text: React.FC<Props> = ({
    children,
    color,
    textAlign,
    fontSize,
}) => {
    return (
        <p className={styles.text} style={{ color, textAlign, fontSize }}>
            {children}
        </p>
    );
};
