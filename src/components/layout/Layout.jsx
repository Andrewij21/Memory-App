import { Container } from "@mui/material";
import FooterNavigation from "./FooterNavigation";
import MainNavigation from "./MainNavigation";
import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <MainNavigation />
      <Container component="main" sx={{ minHeight: "100vh" }}>
        {/* {props.children} */}
        <Outlet />
      </Container>
      <FooterNavigation />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};
export default Layout;
