import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import App from './App';
import './index.scss';
import store from "./modules/store";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>
)
