import { Provider } from 'react-redux';
import store from '../stores';
import '../styles/globals.css';

function TestingApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default TestingApp;
