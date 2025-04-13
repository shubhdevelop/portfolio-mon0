import "./globals.css";
import { ThemeProvider, } from "./context/ThemeContext";
import Root from "./Root";
import { LanguageProvider } from "./context/LanguageContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Root>
          {children}
        </Root>
      </LanguageProvider>
    </ThemeProvider>
  );
}
