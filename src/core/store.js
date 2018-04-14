import { applyMiddleware, compose, createStore } from 'redux';
import reducers from './reducers';


export default function configureStore() {
  let store;
  let middleware;

  // Add redux dev tools support to middleware for development environment
  if (process.env.NODE_ENV !== 'production') {
    const devToolsExtension = window.devToolsExtension;
    if (typeof devToolsExtension === 'function') {
      middleware = compose(devToolsExtension());
    }
  }

  // Create store with reducers and middleware
  if (middleware) {
    store = createStore(reducers, middleware);
  } else {
    store = createStore(reducers);
  }
  
  return store;
}
