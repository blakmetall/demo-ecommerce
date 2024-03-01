import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';
import Layout from './components/layout/layout.component.js';
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
