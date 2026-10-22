import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "Beyond Self | Empowering Communities. Transforming Lives.",
  description:
    "Beyond Self is a registered non-profit organisation (Reg. K2025443565) based in Vosloorus, Gauteng — building a grassroots network of active citizens who contribute time, ideas and resources to create a more just, equal and empowered South Africa.",
  keywords: [
    "Beyond Self",
    "NPO",
    "Vosloorus",
    "Gauteng",
    "non-profit",
    "community",
    "donate",
    "volunteer",
    "South Africa",
  ],
  authors: [{ name: "Beyond Self NPO" }],
  icons: {
    icon: "/media/logo-icon.jpg",
    apple: "/media/logo-icon.jpg",
  },
  openGraph: {
    title: "Beyond Self | Empowering Communities. Transforming Lives.",
    description:
      "A registered non-profit in Vosloorus, Gauteng — building homes, supporting learners and transforming communities through active citizenship.",
    siteName: "Beyond Self NPO",
    type: "website",
    images: [{ url: "/media/logo.jpg", width: 828, height: 925 }],
  },
};

export const viewport: Viewport = {
  themeColor: "#4a2e1f",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased bg-background text-foreground font-sans">
        {children}
        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
}
