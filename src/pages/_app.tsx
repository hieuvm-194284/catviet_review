import "@/styles/globals.css";
import CustomThemeProvider from "@/styles/theme/Provider";
import createEmotionCache from "@/styles/createEmotionCache";
import type { AppProps } from "next/app";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { ReactElement, ReactNode, useState } from "react";
export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const queryClientOption = {
  defaultOptions: {
    queries: { refetchOnWindowFocus: false, retry: false, staleTime: 1000 * 5 },
  },
};

const clientSideEmotionCache = createEmotionCache();

export default function App(props: AppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const [queryClient] = useState(() => new QueryClient(queryClientOption));
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <CacheProvider value={emotionCache}>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <CustomThemeProvider>
            {getLayout(<Component {...pageProps} />)}
          </CustomThemeProvider>
        </Hydrate>
      </QueryClientProvider>
    </CacheProvider>
  );
}
