import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import './App.css';
import List from './components/inputs/List';
import Select from './components/inputs/Select';

function App() {
  const data = [1,2,3,4];
  return (
    <div>
      <h1 className="text-center">CodeGen</h1>
      <div className="container">
        <div className="row">
          <div className="col border p-3">
            <Select items={data}></Select>
          </div>
          <div className="col border p-3">
           <Select items={data}></Select>
           </div>
           <DndProvider backend={HTML5Backend}>
          <div className="col border p-3">
            <List items={data}/>
          </div>
          <div className="col border p-3">

          </div>
          </DndProvider>
        </div>
      </div>
    </div>
  );
}

export default App;
