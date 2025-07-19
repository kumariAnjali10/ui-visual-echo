import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { AnalyticsDashboard } from "@/components/AnalyticsDashboard";
import { KanbanBoard } from "@/components/KanbanBoard";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="flex-1 overflow-auto">
          <AnalyticsDashboard />
          <KanbanBoard />
        </div>
      </div>
    </div>
  );
};

export default Index;
