import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div className="flex justify-center w-full">
          <div className="flex flex-col justify-between items-center max-w-4xl w-full gap-8 text-center md:gap-28 p-8 md:flex-row">
            <Header />
            <Nav />
          </div>
        </div>
        <Main />
        <Footer />
      </div>
    </>
  );
}

export default App;
