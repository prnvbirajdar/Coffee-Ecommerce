import Footer from "../src/Components/Footer";
import Nav from "../src/Components/Nav";
import "../src/css/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-[#fefcf7]">
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
