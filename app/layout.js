import { Jost } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { getMe } from "@/utils/fetchBase";
const jost = Jost({ subsets: ["latin"] });

export const metadata = {
  title: {
    template: "%s  | Feedback Product",
    default: "Feedback Product",
  },
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
  await getMe();

  return (
    <html lang="tr">
      <body className={`${jost.className}`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
