import { Toaster } from "sonner";
import SideBar from "@/components/side-bar";
import Header from "@/components/header";
import { ThemeProvider } from "next-themes";

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className={`bodycontent`}>
        <ThemeProvider attribute="data-theme">
          <SideBar />
          <div>
            <Header />
            {children}
          </div>
          <Toaster richColors position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
