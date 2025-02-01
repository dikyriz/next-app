import "./globals.css";
import {ToastContainer} from "react-toastify";

export const metadata = {
  title: "Jobs App",
  description: "Search Jobs App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="corporate">
      <body>
          {children}
      <ToastContainer/>
      </body>
    </html>
  );
}


