import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import {Provider} from "react-redux";
import {rootStore} from "./App/rootStore";

createRoot(document.getElementById('root')!).render(
    <Provider store={rootStore}>
        <App />
    </Provider>
)
