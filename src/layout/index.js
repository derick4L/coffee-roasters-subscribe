import Navbar from "../components/Global/Navigation";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}

export default Layout;
