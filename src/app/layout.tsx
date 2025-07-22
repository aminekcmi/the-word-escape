import type { Metadata } from "next";
import "./globals.css";
import ConvexClientProvider from "@/providers/ConvexClientProvider";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "The Word Escape",
  description: "The Word Escape game",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ClerkProvider>
          <ConvexClientProvider>{children}</ConvexClientProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
