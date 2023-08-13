import FooterNavigation from "./FooterNavigation";
import MainNavigation from "./MainNavigation";
import PropTypes from "prop-types";

const Layout = (props) => {
  return (
    <>
      <MainNavigation />
      <main>{props.children}</main>
      <FooterNavigation />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};
export default Layout;
