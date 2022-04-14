import Navbar from "./navbar";
import Top from "./top";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <Top />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

