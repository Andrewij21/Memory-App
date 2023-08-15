import { Container } from "@mui/material";
import FooterNavigation from "./FooterNavigation";
import MainNavigation from "./MainNavigation";
import PropTypes from "prop-types";

const Layout = (props) => {
  return (
    <>
      <MainNavigation />
      <Container component="main" sx={{ minHeight: "100vh" }}>
        {props.children}
      </Container>
      <FooterNavigation />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};
export default Layout;
