import type { AppProps } from "next/app";
import { FluentProvider, webLightTheme, SSRProvider,IdPrefixProvider  } from '@fluentui/react-components';
import Layout from '../../src/pages/RootLayout'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SSRProvider>
      <IdPrefixProvider value="APPID-">
        <FluentProvider theme={webLightTheme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </FluentProvider>
      </IdPrefixProvider>
    </SSRProvider>
    
  );
}
