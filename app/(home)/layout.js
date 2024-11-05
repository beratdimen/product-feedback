import { Toaster } from "sonner";
import { ThemeProvider } from "next-themes";

export default function HomeLayout({ children }) {
  return (
    <ThemeProvider attribute="data-theme">
      {children}
      <Toaster richColors position="top-right" />
    </ThemeProvider>
  );
}
