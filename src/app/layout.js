import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBars from "./components/NavBars";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Komon Thungmanee",
  description: "Hello I'm Nueng",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBars/>
        {children}
      </body>
    </html>
  );
}
