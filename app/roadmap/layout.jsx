import { Toaster } from "sonner";
import RoadmapHeader from "@/components/roadmap-header";

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className="bodycontent">
        <RoadmapHeader />
        {children}
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
