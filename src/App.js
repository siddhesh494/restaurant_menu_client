import { Toaster } from 'react-hot-toast';
import './App.css';
import PageLayout from './Components/PageLayout';
import { Provider } from 'react-redux';
import { store } from './store/store';

function App() {
  return (
    <>
      <Provider store={store}>
        <Toaster position="top-right"/>
        <PageLayout />
      </Provider>
    </>
  );
}

export default App;
