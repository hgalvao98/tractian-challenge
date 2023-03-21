import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import Home from './constants/pages/Home';
import './index.scss';
import store from "./modules/store";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <Home />
  </Provider>
)
