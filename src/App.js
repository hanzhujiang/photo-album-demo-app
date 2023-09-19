import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import PhotoList from './components/PhotoList';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <PhotoList />
    </div>
    </Provider>

  );
}

export default App;
