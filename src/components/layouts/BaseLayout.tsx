import Head from 'next/head';
import tw, { styled } from 'twin.macro';
import { FC } from 'react';
import Header from '@/core/Header';
import Footer from '@/core/Footer';

interface BaseLayoutProps {
  pageTitle: string;
}

const StitchedMain = styled('main', {
  ...tw`flex flex-col items-center justify-center h-screen`,
});

const BaseLayout: FC<BaseLayoutProps> = ({ pageTitle, children }) => (
  <>
    <Head>
      <title>Cryptenet | {pageTitle}</title>
    </Head>
    <StitchedMain>
      <Header />
      {children}
      <Footer />
    </StitchedMain>
  </>
);

export default BaseLayout;
