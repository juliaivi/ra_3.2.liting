import Listing from './components/Listing';
import './App.css';
import etsy from "./data/etsy.json";

function App() {
  return (
    <div className="App">
     <Listing items={etsy} />
    </div>
  );
}

export default App;
