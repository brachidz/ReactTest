import logo from './logo.svg';
import './App.css';
import Table  from './Components/Table';
import store from './store';
import { Provider } from 'react-redux';
function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <Table></Table>
                        </Provider>
     
    </div>
  );
}

export default App;
