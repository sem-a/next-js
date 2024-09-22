import { FaCircleUser } from "react-icons/fa6";
import Button from "../button";
import Container from "../container";
import styles from "./index.module.scss";
import { IoMdExit } from "react-icons/io";

const Profile = () => {
    const buttonStyles = {
        padding: "21px",
        borderRadius: "18px",
        backgroundHover: "#F7F8F8",
        transition: "0.5s ease 0s",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "7px",
    };
    return (
        <div className={styles.profile}>
            <Container
                padding="7px"
                display="flex"
                alignItems="center"
                justifyContent="space-between"
            >
                <Button
                    padding={buttonStyles.padding}
                    borderRadius={buttonStyles.borderRadius}
                    backgroundHover={buttonStyles.backgroundHover}
                    transition={buttonStyles.transition}
                    display={buttonStyles.display}
                    alignItems={buttonStyles.alignItems}
                    justifyContent={buttonStyles.justifyContent}
                    gap={buttonStyles.gap}
                >
                    <FaCircleUser />
                    <span style={{ marginTop: "2px" }}>Имя профиля</span>
                </Button>
                <Button
                    padding={buttonStyles.padding}
                    borderRadius={buttonStyles.borderRadius}
                    backgroundHover={buttonStyles.backgroundHover}
                    transition={buttonStyles.transition}
                    display={buttonStyles.display}
                    alignItems={buttonStyles.alignItems}
                    justifyContent={buttonStyles.justifyContent}
                    gap={buttonStyles.gap}
                    border="1px solid black"
                    borderHover="1px solid black"
                >
                    <IoMdExit style={{fontSize: "16px"}} />
                    <span style={{marginTop: '1px'}}>Выйти</span>
                </Button>
            </Container>
        </div>
    );
};

export default Profile;
