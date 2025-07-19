import { 
  LayoutDashboard, 
  CheckSquare, 
  Activity, 
  Users, 
  Settings,
  Zap,
  TrendingUp,
  Route,
  Megaphone,
  Plus
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const navigationItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: CheckSquare, label: "Tasks", count: 2 },
  { icon: Activity, label: "Activity" },
  { icon: Users, label: "Customers" },
  { icon: Settings, label: "Settings" },
];

const projectItems = [
  { icon: Zap, label: "BizConnect", count: 7 },
  { icon: TrendingUp, label: "Growth Hub" },
  { icon: Route, label: "Conversion Path" },
  { icon: Megaphone, label: "Marketing" },
];

const teamMembers = [
  { name: "Sandra Perry", role: "Product Manager", avatar: "SP" },
  { name: "Antony Cardenas", role: "Sales Manager", avatar: "AC" },
  { name: "Jamal Connolly", role: "Growth Marketer", avatar: "JC" },
  { name: "Cara Carr", role: "SEO Specialist", avatar: "CC" },
  { name: "Iona Rollins", role: "Designer", avatar: "IR" },
];

export function Sidebar() {
  return (
    <div className="w-64 bg-card border-r border-border h-screen flex flex-col">
      {/* Logo */}
      <div className="p-6">
        <h1 className="text-xl font-bold text-foreground">BizLink</h1>
      </div>

      {/* Navigation */}
      <div className="px-3 mb-8">
        {navigationItems.map((item) => (
          <div key={item.label} className="mb-1">
            <Button
              variant={item.active ? "secondary" : "ghost"}
              className="w-full justify-start gap-3 h-10"
            >
              <item.icon className="h-4 w-4" />
              <span className="flex-1 text-left">{item.label}</span>
              {item.count && (
                <span className="text-xs bg-muted-foreground/20 px-2 py-0.5 rounded-full">
                  {item.count}
                </span>
              )}
            </Button>
          </div>
        ))}
      </div>

      {/* Projects */}
      <div className="px-3 mb-8">
        <div className="text-xs font-medium text-muted-foreground mb-3 px-3">
          Projects
        </div>
        {projectItems.map((item) => (
          <div key={item.label} className="mb-1">
            <Button variant="ghost" className="w-full justify-start gap-3 h-10">
              <item.icon className="h-4 w-4" />
              <span className="flex-1 text-left">{item.label}</span>
              {item.count && (
                <span className="text-xs bg-muted-foreground/20 px-2 py-0.5 rounded-full">
                  {item.count}
                </span>
              )}
            </Button>
          </div>
        ))}
      </div>

      {/* Team Members */}
      <div className="px-3 flex-1">
        <div className="flex items-center justify-between mb-3">
          <div className="text-xs font-medium text-muted-foreground px-3">
            Members
          </div>
          <Button size="sm" variant="ghost" className="h-6 w-6 p-0">
            <Plus className="h-3 w-3" />
          </Button>
        </div>
        <div className="space-y-2">
          {teamMembers.map((member) => (
            <div key={member.name} className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-accent/50 cursor-pointer">
              <Avatar className="h-8 w-8">
                <AvatarFallback className="text-xs bg-muted">
                  {member.avatar}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-foreground truncate">
                  {member.name}
                </div>
                <div className="text-xs text-muted-foreground truncate">
                  {member.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}