import NextDocument, { Head, Html, Main, NextScript } from 'next/document';
import { getCssText } from 'stitches.config';

export default class Document extends NextDocument {
  static async getInitialProps(ctx: any) {
    try {
      const initialProps = await NextDocument.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {/* Stitches CSS for SSR */}
            {/* eslint-disable-next-line react/no-danger */}
            <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
          </>
        ),
      };
      // eslint-disable-next-line no-empty
    } finally {
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
