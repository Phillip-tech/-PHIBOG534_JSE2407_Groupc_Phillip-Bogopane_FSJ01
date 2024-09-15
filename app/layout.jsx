
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

export const metadata = {
  title: 'NextEcommerce',
  description: 'Your one-stop shop for everything',
};

/**
 * The RootLayout component is the main layout for the Next.js application.
 * It wraps the children components with the Header, main content area, and Footer.
 *
 * @param {Object} children - The child components to be rendered within the layout.
 * @returns {JSX.Element} - The RootLayout component with the Header, main content area, and Footer.
 */

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
