import RoadmapHeader from "@/components/roadmap-header";

export const metadata = {
  title: "Roadmap | Feedback Product",
};

export default function RoadMapLayout({ children }) {
  return (
    <div className="bodycontent">
      <RoadmapHeader />
      {children}
    </div>
  );
}
