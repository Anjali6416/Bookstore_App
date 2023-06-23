import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar2 from "./Components/Navbar/Navbar";
import AllRoutes from "./Pages/AllRoutes";

function App() {
  return (
    <div className="App">
      <Navbar2 />
      <AllRoutes />
    </div>
  );
}

export default App;
