import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { Container } from "./LayoutStyles";

const Layout = ({ children }) => {
  return (
    <Container>
      <Header />
      <main style = {{margin: "0 24px"}}>{children}</main>
      <Footer />
    </Container>
  );
};

export default Layout;
