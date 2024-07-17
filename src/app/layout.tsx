import Script from 'next/script';
import { Lato, Roboto, Inter, Source_Serif_4, Antic_Slab } from 'next/font/google';
import { Metadata } from 'next';

import './globals.css';
import Header from '@/components/layout/header';
import { Providers } from '@/lib/providers';
import Footer from '@/components/layout/footer';

// const inter = Inter({ subsets: ['latin'] });
// const inter = Roboto({ subsets: ['latin'], weight: ['400', '500', '700'] }); // Adjust weights as needed
//const inter = Lato({ subsets: ['latin'], weight: ['400', '700'] });
//const inter = Questrial({ subsets: ['latin'], weight: ['400']});
const inter = Source_Serif_4({ subsets: ['latin'], weight: ['300', '700'] });

const title = 'Selassie Berhane';
const description =
  '';
const url = '';

// export const metadata: Metadata = {
//   metadataBase: new URL(url),
//   title,
//   description,
//   keywords: [
//     'Frontend Developer',
//     'Full Stack Developer',
//     'React Developer',
//     'Next.js Developer',
//     'Software Engineer',
//     'Software Developer',
//   ],
//   creator: 'Selassie Berhane',
//   themeColor: [
//     { media: '(prefers-color-scheme: light)', color: 'white' },
//     { media: '(prefers-color-scheme: dark)', color: 'black' },
//   ],
//   openGraph: {
//     type: 'website',
//     url,
//     title,
//     description,
//     siteName: title,
//     images: [
//       {
//         url: '',
//       },
//     ],
//   },
//   twitter: {
//     card: 'summary_large_image',
//     title,
//     description,
//     creator: '',
//     images: '',
//   },
//   icons: {
//     icon: '',
//     shortcut: '',
//     apple: '/apple-touch-icon.png',
//   },
// };

const googleAnalyticsId = process.env.GOOGLE_ANALYTICS_ID;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      {googleAnalyticsId ? (
        <head>
          <Script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
          ></Script>
          <Script id="google-anayltics-script">
            {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', '${googleAnalyticsId}');
          `}
          </Script>
        </head>
      ) : null}
      <body className={`${inter.className} bg-gray text-gray-600 antialiased`}>
        <Providers>
          <Header />
          <main className="flex min-h-screen w-full flex-col">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
