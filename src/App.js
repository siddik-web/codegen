import './App.css';
import Select from './components/inputs/Select';

function App() {
  const data = [1,2,3,4];
  return (
    <div>
      <h1 className="text-center">CodeGen</h1>
      <div className="container">
        <div className="row">
          <div className="col border p-4">
            <Select items={data}></Select>
          </div>
          <div className="col border p-4">
           <Select items={data}></Select>
           </div>
          <div className="col border p-4">
            <pre>
              Open this select menu
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
