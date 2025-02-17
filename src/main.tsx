import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { rootStore, Routing } from '@/app';


createRoot(document.getElementById('root')!).render(
  <Provider store={rootStore}>
    <Routing/>
  </Provider>
);
