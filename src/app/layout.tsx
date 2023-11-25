'use client';

import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from '@mui/system';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import uk from 'dayjs/locale/uk';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import Head from 'next/head';
import Script from 'next/script';

import AuthenticationProvider from '@/hooks/use-authentication/authentication-context';
import ToastContextProvider from '@/hooks/use-toast/toast-context';
import theme from '@/styles/theme';

import '@/styles/reset.scss';
import '@/styles/typography.scss';
import '@/styles/global-styles.scss';

dayjs.extend(timezone);
dayjs.extend(utc);
dayjs.tz.setDefault('Europe/Kiev');
dayjs.locale({ ...uk, weekStart: 1 });
const queryClient = new QueryClient();

if (!process.browser) React.useLayoutEffect = React.useEffect;
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-XEDY9ZSF2S"
        ></Script>
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag("js", new Date());

            gtag("config", "G-XEDY9ZSF2S");`}
        </Script>
        <script async src="https://telegram.org/js/telegram-widget.js" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <meta
          name="google-site-verification"
          content="M93dY9EuPcQ5AzSYwxc6_el0GwZp_XlDHBhphP6z-7g"
        />
      </Head>
      <body>
        <ThemeProvider theme={theme}>
          <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={'uk'}>
            <QueryClientProvider client={queryClient}>
              <AuthenticationProvider>
                <ToastContextProvider>{children}</ToastContextProvider>
              </AuthenticationProvider>
            </QueryClientProvider>
          </LocalizationProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
