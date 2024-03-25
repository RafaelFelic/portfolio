import Background from "./components/Background";
import Header from "./components/Header";
import Showcase from "./components/Showcase";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <>
      <Analytics />
      <Background />
      <Header />
      <main className="m-2.5 custom-box-shadow">
        <Showcase />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
