import MainNavigation from "./MainNavigation";
import PropTypes from "prop-types";

const Layout = (props) => {
  return (
    <>
      <MainNavigation />
      <main>{props.children}</main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};
export default Layout;
