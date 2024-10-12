import { ThemeProvider } from "next-themes";
import localFont from "next/font/local";
import "./globals.css";
import Nav from "@/components/nav";
import Footer from "@/components/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Jaryd Knight Dev",
  description: "Jaryd Knight Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="min-h-screen flex flex-col">
      <head>
        <script src="https://kit.fontawesome.com/9c453524b4.js" async crossorigin="anonymous"></script>
      </head>
      <body
        id="body" className={`${geistSans.variable} ${geistMono.variable} antialiase flex flex-col min-h-screen text-black dark:text-white`}
      >
        <ThemeProvider attribute="class">
          <Nav />
          <div className="flex-grow">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
