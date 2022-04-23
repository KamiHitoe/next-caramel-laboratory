import Navbar from "./Navbar";
import Top from "./Top";
import Footer from "./Footer";
import Login from "../users/Login";

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <Login />
      <Top />
      
      <main>
        {children}
      </main>
      
      <Footer />
    </div>
  );
};

