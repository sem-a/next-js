import Container from "../container";
import Footer from "../footer";
import Header from "../header";

type Props = {
    children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
    return (
        <>
            <Container
                display="flex"
                alignItems="flex-start"
                justifyContent="space-beetwen"
            >
                <div style={{
                    width: "25%",
                    minWidth: "225px"
                }}>
                    <Header />
                    <Footer />
                </div>
                <div style={{
                    width: "75%"
                }}>
                    
                </div>
            </Container>
        </>
    );
};

export default Layout;
