import { textColorDarkForDark, textColorForDark } from "../_const/_const";
import Container from "../container";
import { H3, H4, Text } from "../title";
import styles from "./index.module.scss";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Container>
                <H3 color={textColorForDark}>Техническая поддержка</H3>
                <Container
                    display="flex"
                    flexDirection="column"
                    alignItems="flex-start"
                    justifyContent="flex-start"
                    gap="13px"
                    padding="0"
                    marginTop="21px"
                >
                    <Container
                        padding="0"
                        display="flex"
                        flexDirection="column"
                        alignItems="flex-start"
                        justifyContent="flex-start"
                        gap="7px"
                    >
                        <H4 color={textColorDarkForDark}>Почта поддержки</H4>
                        <Text fontSize="16px" color={textColorForDark}>aleksey.i99@mail.ru</Text>
                    </Container>
                    <Container
                        padding="0"
                        display="flex"
                        flexDirection="column"
                        alignItems="flex-start"
                        justifyContent="flex-start"
                        gap="7px"
                    >
                        <H4 color={textColorDarkForDark}>Часы работы</H4>
                        <Text fontSize="16px" color={textColorForDark}>Пн - Пт с 9:00 до 19:00 мск</Text>
                    </Container>
                </Container>
            </Container>
        </footer>
    );
};

export default Footer;
