import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./Components/Navigation/Navigation";
import Home from "./Components/Home/Home";
import Today from "./Components/Today/Today";
import Forecast from "./Components/Forecast/Forecast";
import Moon from "./Components/Moon/Moon";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/today" element={<Today />} />
          <Route path="/forecast" element={<Forecast />} />
          <Route path="/moon" element={<Moon />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
