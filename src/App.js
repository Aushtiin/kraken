import Header from "./components/Header/Header";
import InfoComponent from "./components/InfoComponent/InfoComponent";
import SideBar from "./components/SideBar/SideBar";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="sidebar">
          <SideBar />
        </div>
        <div className="main">
          <Header />
          <InfoComponent />
        </div>
      </div>
    </div>
  );
}

export default App;
