import Container from "../container";
import { IoMdSettings } from "react-icons/io";
import Button from "../button";
import { textColorForDark } from "../_const/_const";
import styles from "./index.module.scss";

const Header = () => {
    const menuList = [
        { id: 0, title: "Настройки", icon: <IoMdSettings /> },
        { id: 1, title: "Пункт 1", icon: null },
        { id: 2, title: "Пункт 2", icon: null },
        { id: 3, title: "Пункт 3", icon: null },
    ];

    return (
        <header className={styles.header}>
            <Container>
                <div className={styles.logo}>
                    <h2>
                        <span>Мое</span> приложение
                    </h2>
                </div>
            </Container>
            <nav>
                <Container display="flex" flexDirection="column" padding="7px">
                    <ul className={styles.menu}>
                        {menuList.map((item) => (
                            <li key={item.id}>
                                <Button
                                    width="100%"
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="flex-start"
                                    gap="7px"
                                    fontSize="14px"
                                    fontWeight="400"
                                    color={textColorForDark}
                                    background="#283147"
                                    backgroundHover="#1f273d"
                                    marginTop="7px"
                                    padding="21px"
                                    borderRadius="18px"
                                    transition="0.5s ease 0s"
                                >
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Button>
                            </li>
                        ))}
                    </ul>
                </Container>
            </nav>
        </header>
    );
};

export default Header;
