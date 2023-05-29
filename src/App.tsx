import AppRouterComponent from "./AppRouterComponent";
import Alert from "./components/Alert";
import Message from "./components/Message";
import FavColour from "./components/fav-colour";
import Footer from "./components/footer";
import Header from "./components/header";
import MainContent from "./components/main-content";
import NavigationMenu from "./components/navigation-menu";

function App() {
  const cityList = ["Bangalore", "Chennai", "Hyderabaad", "Mangalore"];
  // return <Message text="Chandan" />;
  return (
    <div>
      <AppRouterComponent />
      {/* <Alert>
        <h1>Hello World</h1>
      </Alert> */}
      {/* <Alert alertMessage="A simple primary alert—check it out!" /> */}
      {/* <FavColour /> */}
      {/* <Header />
      <span>
        <NavigationMenu
          listHeading="Our offices are in following location."
          listItem={cityList}
        />
        <MainContent />
      </span>
      <Footer /> */}
    </div>
  );
}

export default App;
