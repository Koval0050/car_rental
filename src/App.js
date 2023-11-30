import "./App.css";

import { Container } from "./component/common/Container/Container.styled";
import FilterBar from "./component/FilterBar/FilterBar";

import CarsCardList from "./component/CarsCard/CarsCardList";

function App() {
  return (
    <div className="App">
      <Container>
        <FilterBar />

        <CarsCardList/>
      </Container>
    </div>
  );
}

export default App;
