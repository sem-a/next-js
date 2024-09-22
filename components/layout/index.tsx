import { useRouter } from "next/router";
import Container from "../container";
import Footer from "../footer";
import Header from "../header";
import Profile from "../profile";
import { H2 } from "../title";
import { useEffect, useState } from "react";

type Props = {
    children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
    const { pathname } = useRouter();
    const [title, setTitle] = useState<string | undefined>();

    const menuPaths = [
        { id: 0, title: "Настройки", href: "/settings" },
        { id: 1, title: "Выбрать слот", href: "/choose" },
        { id: 2, title: "Мое расписание", href: "/" },
    ];

    useEffect(() => {
        let titleTemp;
        for (let i = 0; i < menuPaths.length; i++) {
            if (menuPaths[i].href === pathname) {
                titleTemp = menuPaths[i].title;
            } else {
                continue;
            }
        }
        setTitle(titleTemp);
    }, [pathname]);

    return (
        <>
            <Container
                display="flex"
                alignItems="flex-start"
                justifyContent="space-beetwen"
                gap="21px"
            >
                <div
                    style={{
                        width: "25%",
                        minWidth: "225px",
                    }}
                >
                    <Header />
                    <Footer />
                </div>
                <div
                    style={{
                        width: "75%",
                    }}
                >
                    <Profile />
                    <Container padding="0" margin="42px 0 21px 2px">
                        <H2>{title}</H2>
                    </Container>
                    {children}
                </div>
            </Container>
        </>
    );
};

export default Layout;
