
import './App.css';
import ButtonCreateSegnalazione from './component/create/ButtonCreateSegnalazione';
import ViewComponent from './component/view/ViewComponent';

function App() {
  return (
    <div className="App">
      <div>
        <h1>Centro Segnalazioni</h1>
      </div>
      <div>
        <ButtonCreateSegnalazione />
      </div>
      <div>
        <ViewComponent />
      </div>
    </div>
  );
}

export default App;
