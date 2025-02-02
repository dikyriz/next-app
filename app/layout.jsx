import "./globals.css";
import {ToastContainer} from "react-toastify";
import {ClerkProvider} from "@clerk/nextjs";

export const metadata = {
  title: "Jobs App",
  description: "Search Jobs App",
};

export default function RootLayout({ children }) {
  return (
      <ClerkProvider>
        <html lang="en" data-theme="corporate">
          <body>
              {children}
          <ToastContainer/>
          </body>
        </html>
      </ClerkProvider>
  );
}


