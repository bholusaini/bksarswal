import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import Layout from "@/components/Layout";

const sora = Sora({
  subsets:["latin"],
  weight:["500","600","700","800"]
})

export const metadata: Metadata = {
  title: "bksarswal",
  description: "bksarswal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sora.className}  antialiased`}
      >
        <Layout>

        {children}
        </Layout>
      </body>
    </html>
  );
}
