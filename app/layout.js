import './globals.css';
import ReduxProvider from './lib/redux/Provider';

export const metadata = {
  title: 'Todo App',
  description: 'Using Redux Toolkit in Next.js 13+',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
