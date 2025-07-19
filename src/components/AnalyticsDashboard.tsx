import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const chartData = [
  { day: "Mon", value: 6 },
  { day: "Tue", value: 8 },
  { day: "Wed", value: 10 },
  { day: "Thu", value: 7 },
  { day: "Fri", value: 9 },
];

export function AnalyticsDashboard() {
  return (
    <div className="p-6 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* New Customers Chart */}
        <Card>
          <CardContent className="p-6">
            <div className="space-y-4">
              <h3 className="text-sm font-medium text-muted-foreground">
                New customers
              </h3>
              <div className="flex items-end gap-1 h-20">
                {chartData.map((item, index) => (
                  <div key={item.day} className="flex flex-col items-center gap-1 flex-1">
                    <div 
                      className="w-full bg-foreground rounded-sm"
                      style={{ height: `${item.value * 6}px` }}
                    />
                    <span className="text-xs text-muted-foreground">
                      {item.day}
                    </span>
                  </div>
                ))}
              </div>
              <div className="text-xs text-muted-foreground">10</div>
            </div>
          </CardContent>
        </Card>

        {/* Success Rate */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-center h-full">
              <div className="relative w-24 h-24">
                <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 36 36">
                  <path
                    className="text-muted stroke-current"
                    strokeWidth="2"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    className="text-foreground stroke-current"
                    strokeWidth="2"
                    strokeDasharray="68, 100"
                    strokeLinecap="round"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-2xl font-bold">68%</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-4">
              <div className="text-sm text-muted-foreground">Successful deals</div>
            </div>
          </CardContent>
        </Card>

        {/* Stats */}
        <Card>
          <CardContent className="p-6 space-y-4">
            <div>
              <div className="text-2xl font-bold">53</div>
              <div className="text-sm text-muted-foreground flex items-center gap-1">
                Tasks in progress
                <ArrowRight className="h-3 w-3" />
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold">$ 15,890</div>
              <div className="text-sm text-muted-foreground flex items-center gap-1">
                Prepayments from customers
                <ArrowRight className="h-3 w-3" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}