const { default: Footer } = require("./Footer");
const { default: Navigation } = require("./Navigation");

const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
