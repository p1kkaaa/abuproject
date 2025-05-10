import About from "./componets/about/About";
import Content from "./componets/content/Content";
import Course from "./componets/course/Course";
import Footer from "./componets/footer/Footer";
import Header from "./componets/header/Header";
import Item from "./componets/item/Item";
import Lang from "./componets/lang/Lang";
import Parallax from "./componets/parallax/Parallax";
import Requisite from "./componets/requisite/Requisite";
import Tutor from "./componets/tutorsearch/Tutor";

const App = () => {
  return ( 
    <>
      <Header />
      <Parallax />
      <Tutor />
      <Content />
      <Lang />
      <Course />
      <Item />
      <About />
      <Requisite />
      <Footer />

    </>
   );
}
 
export default App;