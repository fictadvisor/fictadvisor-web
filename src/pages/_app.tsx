import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/system';
import { AppProps } from 'next/app';

import AuthenticationProvider from '@/hooks/use-authentication/authentication-context';
import ToastContextProvider from '@/hooks/use-toast/toast-context';
import { store } from '@/redux';
import theme from '@/styles/theme';

import '@/styles/reset.scss';
import '@/styles/typography.scss';
import '@/styles/global-styles.scss';

const queryClient = new QueryClient();

if (!process.browser) React.useLayoutEffect = React.useEffect;

const Application = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <AuthenticationProvider>
            <ToastContextProvider>
              <Component {...pageProps} />
            </ToastContextProvider>
          </AuthenticationProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </Provider>
  );
};

export default Application;
