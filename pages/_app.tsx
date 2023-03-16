import { store } from '@/store/store';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from "react-redux";

export default function App({ Component, pageProps }: AppProps) {
  console.log(store, 'the store')
  return  <Provider store={store}><Component {...pageProps} /></Provider>
}
