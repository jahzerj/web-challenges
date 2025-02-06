import { SWRConfig } from "swr";
import GlobalStyle from "../styles";

const fetcher = async (url) => {
  const res = await fetch(url);

  //If the status code is not in the range 200-299
  //we still try to parse the data
  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");
    //attach extra info into error object
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  return res.json();
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <SWRConfig value={{ fetcher }}>
        <GlobalStyle />
        <Component {...pageProps} />
      </SWRConfig>
    </>
  );
}
