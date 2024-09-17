import "./App.css";
import Clients from "./components/Clients";
import DatingStars from "./components/DatingStars";
import Meet from "./components/Meet";
import Together from "./components/Together";

function App() {
  return (
    <div className="bg-black overflow-hidden">
      <DatingStars />
      <Meet />
      <Together />
      <Clients />
    </div>
  );
}

export default App;
