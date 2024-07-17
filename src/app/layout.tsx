import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.scss';
import { PropsWithChildren } from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import { Header } from '@/features/header/header';
import { Body } from '@/features/body/body';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Oskar app',
};

const RootLayout = async ({ children }: PropsWithChildren) => {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <Header />
          <Body>{children}</Body>
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
