import localFont from "next/font/local";
import "../globals.css";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  SignIn,
} from '@clerk/nextjs';
import { Navbar } from '../../components/Navbar.jsx';

// ../ means move outside the current folder  product  -> app
const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Navbar />
          <header className="flex justify-between items-center px-4 py-2">
            <div className="flex items-center space-x-4 ml-8">
              {/* Add any additional header elements here */}
               {/*  i added the color in the row below */}
              <UserButton showName className="bg-orange-200 text-white rounded-lg p-2 hover:bg-orange-300 transition-colors" /> 
            </div>
          </header>
          <SignedOut>
            <SignIn routing="hash"></SignIn>
          </SignedOut>

          <SignedIn>
            {children}
          </SignedIn>
        </body>
      </html>
    </ClerkProvider>
  );
}
