import "../global.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";

export const metadata: Metadata = {
  title: {
    default: "Nana Yaa's Portfolio",
    template: "%s | nana-yaa-osei-amoako.vercel.app",
  },
  description: "A creative and thoughtful information technology student @ Inholland",
  openGraph: {
    title: "Nana Yaa's Portfolio",
    description:
      "A creative and thoughtful information technology student @ Inholland",
    url: "nana-yaa-osei-amoako.vercel.app",
    siteName: "nana-yaa-osei-amoako.vercel.app",
    images: [
      {
        url: "n.png",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Nana Yaa's Portfolio",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/n.png",
  },
};
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <head>
        <Analytics />
      </head>
      <body
        className={`bg-black ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined
          }`}
      >
        {children}
      </body>
    </html>
  );
}
