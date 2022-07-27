import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import Layout from './views/Layout';
import './App.css'
import { Provider } from 'react-redux'
import store from './redux/store';

// Create a client
const queryClient = new QueryClient()
function App() {
  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Layout />
      </Provider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
