import type { Metadata } from "next";
import "@/styles/root-layout.css";
import { fonts } from "@/lib/fonts";
import { ThemeProvider } from "@/lib/providers/theme-provider";

export const metadata: Metadata = {
  title: "Next Essential",
  description:
    "Next.js Essential - An Essential Template to build an modern next.js application with all the essentials included.",
  icons: {
    icon: "favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fonts.GeistSans.variable} ${fonts.GeistMono.variable} font-geistSans`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
