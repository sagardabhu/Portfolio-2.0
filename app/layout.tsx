import SmoothScroll from "@/components/SmoothScroll/SmoothScroll";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://Sagar-portfolio.com"),
  title: "Sagar | Full Stack Developer",
  description:
    "Experienced Full Stack Developer specializing in modern web technologies. Connect with me on LinkedIn and Instagram for professional updates.",
  keywords: [
    "Full Stack Developer",
    "Web Development",
    "React",
    "Node.js",
    "TypeScript",
    "Next.js",
  ],
  authors: [
    {
      name: "Sagar",
      url: "https://www.linkedin.com/in/e-Sagar-1720721a8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
  ],
  creator: "Sagar",
  publisher: "Sagar",
  alternates: {
    canonical: "https://Sagar-portfolio.com",
  },
  openGraph: {
    title: "Sagar | Full Stack Developer",
    description:
      "Experienced Full Stack Developer specializing in modern web technologies. Follow me on Instagram and connect on LinkedIn.",
    url: "https://Sagar-portfolio.com",
    siteName: "Sagar Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sagar - Full Stack Developer",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body suppressHydrationWarning className="select-none">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
