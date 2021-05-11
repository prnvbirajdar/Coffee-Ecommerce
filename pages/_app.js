import Footer from "../src/Components/Footer";
import Nav from "../src/Components/Nav";
import "../src/css/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-[#9dbfc8] bg-opacity-50 text-gray-800 ">
      {/* <Nav /> */}
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;

// #5c9db1
