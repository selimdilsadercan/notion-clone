import { Metadata } from "next";
import { Inter } from "next/font/google";
const font = Inter({ subsets: ["latin"] });
import "./globals.css";

import ThemeProvider from "@/providers/theme-provider";
import ConvexProvider from "@/providers/convex-provider";
import ToastProvider from "@/providers/toast-provider";
import ModalProvider from "@/providers/modal-provider";
import EdgeProvider from "@/providers/edge-provider";

export const metadata: Metadata = {
  title: "Jotion - Notion Clone",
  icons: {
    icon: [
      { media: "(prefers-color-scheme: light)", url: "/logo.svg", href: "/logo.svg" },
      { media: "(prefers-color-scheme: dark)", url: "/logo-dark.svg", href: "/logo-dark.svg" }
    ]
  }
};

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={font.className}>
        <EdgeProvider>
          <ThemeProvider>
            <ConvexProvider>
              {children}
              <ModalProvider />
              <ToastProvider />
            </ConvexProvider>
          </ThemeProvider>
        </EdgeProvider>
      </body>
    </html>
  );
}

export default Layout;
