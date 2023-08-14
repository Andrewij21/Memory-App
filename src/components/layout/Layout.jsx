import FooterNavigation from "./FooterNavigation";
import MainNavigation from "./MainNavigation";
import PropTypes from "prop-types";

const Layout = (props) => {
  return (
    <>
      <MainNavigation />
      <main style={{ minHeight: "100vh" }}>{props.children}</main>
      <FooterNavigation />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};
export default Layout;
