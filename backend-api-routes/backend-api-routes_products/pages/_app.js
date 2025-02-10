import GlobalStyle from '../styles';
import { SWRConfig } from 'swr';

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function App({ Component, pageProps }) {
  return (
    <>
      <SWRConfig
        value={{
          refreshInterval: 3000,
          fetcher,
        }}
      >
        <GlobalStyle />
        <Component {...pageProps} />
      </SWRConfig>
    </>
  );
}
