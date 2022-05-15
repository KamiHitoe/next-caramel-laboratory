// import Navbar from "./Navbar";
import Top from "./Top";
import Footer from "./Footer";
// import Login from "@/components/users/Login";
import Appbar from "./Appbar";

export default function Layout({ children }) {
  return (
    <div>
      <Appbar />
      <Top />
      
      <main>
        {children}
      </main>
      
      <Footer />
    </div>
  );
};

