import Content from "./componets/content/Content";
import Footer from "./componets/footer/Footer";
import Header from "./componets/header/Header";
import Parallax from "./componets/parallax/Parallax";
import Tutor from "./componets/tutorsearch/Tutor";

const App = () => {
  return ( 
    <>
      <Header />
      <Parallax />
      <Tutor />
      <Content />
      <Footer />

    </>
   );
}
 
export default App;