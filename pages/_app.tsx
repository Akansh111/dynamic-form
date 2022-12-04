import type { AppProps } from 'next/app';
import useStore, { StoreContext } from '../components/store/useStore';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  const store = useStore();

  return (
    <StoreContext.Provider value={store}>
      <Component {...pageProps} />
    </StoreContext.Provider>
  );
}
