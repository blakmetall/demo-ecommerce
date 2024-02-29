import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';
import Layout from './components/layout';
import { store } from './store/store.ts';
import { Provider } from 'react-redux';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Layout>
            <AppRoutes />
        </Layout>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
