import "./App.css";
import Card from "./components/Card";
import { CARD, CARD_TWO } from "./data";

function App() {
  return (
    <div className="App">
      <Card
        {...CARD}
      >
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </Card>

      <Card
        {...CARD_TWO}
      >
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </Card>
    </div>
  );
}

export default App;
