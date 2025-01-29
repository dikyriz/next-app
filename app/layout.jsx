import "./globals.css";


export const metadata = {
  title: "Jobs App",
  description: "Search Jobs App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="corporate">
      <body>
          {children}
      </body>
    </html>
  );
}


