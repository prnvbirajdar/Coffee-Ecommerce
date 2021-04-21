import "../src/css/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="">
      <header>NAVBAR</header>
      <Component {...pageProps} />
      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Footer
        </a>
      </footer>
    </div>
  );
}

export default MyApp;
