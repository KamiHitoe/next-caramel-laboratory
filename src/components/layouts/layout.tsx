import Navbar from "./Navbar";
import Top from "./Top";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <Top />
      
      <main>
        {children}
      </main>
      
      <Footer />
    </div>
  );
};

