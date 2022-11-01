import React from "react";
import "../styles/globals.css";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { AppProps } from "next/app";
import Navbar from "../app/Navbar";
import Footer from "../app/Footer";

export default function MyApp({ Component, pageProps }:AppProps) {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Navbar/>
        <Component {...pageProps} />
        <Footer />
      </Hydrate>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
