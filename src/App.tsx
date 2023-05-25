import Footer from "./components/footer";
import Header from "./components/header";
import MainContent from "./components/main-content";
import NavigationMenu from "./components/navigation-menu";

function App() {
  // return <Message />;
  return (
    <div>
      <Header />
      <span>
        <NavigationMenu />
        <MainContent />
      </span>
      <Footer />
    </div>
  );
}

export default App;
