import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import PhotoList from './components/PhotoList';
import UserForm from "./components/UserForm";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
       <PhotoList />
       <UserForm />
      </div>
    </Provider>
  );
}

export default App;
