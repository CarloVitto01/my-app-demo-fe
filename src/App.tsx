import './App.css';
import Header from './component/header/Header';
import HomePage from './component/view/HomePage';

function App() {
  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <div>
        <HomePage />
      </div>
    </div>
  );
}

export default App;
