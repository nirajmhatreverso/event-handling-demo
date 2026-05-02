import logo from './logo.svg';
import './App.css';
import BasicEvents from './components/BasicEvents';
import Counter from './components/counter';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BasicEvents />
        <Counter />
      </header>
    </div>
  );
}

export default App;
