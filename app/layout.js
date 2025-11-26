import localFont from "next/font/local";
import "./globals.css";
import CustomLink from "./components/CustomLink";

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


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="border-b">
          <ul className="flex p-4 gap-5 ">
            <li>
              <CustomLink path="/">Home</CustomLink>
            </li>
            <li>
              <CustomLink path="/dashboard/analytics">Analytics</CustomLink>
            </li>
            <li>
              <CustomLink path="/dashboard/setting">Settings</CustomLink>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
