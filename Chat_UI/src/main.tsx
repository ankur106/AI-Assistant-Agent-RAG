import React from 'react'
import ReactDOM from 'react-dom/client'
import Container from './Container.tsx'
import './index.scss';
import { Provider } from 'react-redux';
import { store } from './store/store.ts';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
    <Container />
    </Provider>
  </React.StrictMode>,
)
