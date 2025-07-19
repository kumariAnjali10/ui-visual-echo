import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MoreHorizontal, Calendar, MessageCircle, Eye, MapPin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const columns = [
  {
    title: "Contacted",
    count: 12,
    deals: [
      {
        company: "ByteBridge",
        description: "Corporate and personal data protection on a turnkey basis",
        date: "18 Apr",
        comments: 2,
        files: 1,
      },
      {
        company: "AI Synergy",
        description: "Innovative solutions based on artificial intelligence",
        date: "21 Mar",
        comments: 1,
        files: 3,
      },
      {
        company: "LeadBoost Agency",
        description: "Lead attraction and automation for small business...",
        date: "No due date",
        comments: 4,
        files: 7,
      },
    ],
  },
  {
    title: "Negotiation",
    count: 17,
    deals: [
      {
        company: "SkillUp Hub",
        description: "Platform for professional development of specialists",
        date: "09 Mar",
        comments: 4,
        files: 1,
      },
      {
        company: "Thera Well",
        description: "Platform for psychological support and consultations",
        date: "No due date",
        comments: 7,
        files: 2,
      },
      {
        company: "SwiftCargo",
        description: "International transportation of chemical goods",
        date: "23 Apr",
        comments: 2,
        files: 5,
      },
    ],
  },
  {
    title: "Offer Sent",
    count: 13,
    deals: [
      {
        company: "FitLife Nutrition",
        description: "Nutritious food and nutraceuticals for individuals",
        date: "10 Mar",
        comments: 1,
        files: 3,
      },
      {
        company: "Prime Estate",
        description: "Agency-developer of low-rise elite and commercial real estate",
        date: "16 Apr",
        comments: 1,
        files: 1,
        featured: true,
        address: "540 Reality Blvd, Miami, FL 33132",
        email: "contact@primeestate.com",
        assignee: "Antony Cardenas",
      },
      {
        company: "NextGen University",
        description: "",
        date: "",
        comments: 0,
        files: 0,
      },
    ],
  },
  {
    title: "Deal Closed",
    count: 12,
    deals: [
      {
        company: "CloudSphere",
        description: "Cloud services for data storage and processing for la...",
        date: "24 Mar",
        comments: 2,
        files: 1,
      },
      {
        company: "Advantage Medi",
        description: "Full cycle of digital advertising and social media promotion",
        date: "05 Apr",
        comments: 1,
        files: 3,
      },
      {
        company: "Safebank Solutions",
        description: "Innovative financial technologies and digital pay...",
        date: "30 Mar",
        comments: 4,
        files: 7,
      },
    ],
  },
];

function DealCard({ deal }: { deal: any }) {
  return (
    <Card className={`mb-3 ${deal.featured ? 'bg-primary text-primary-foreground' : ''}`}>
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-3">
          <h4 className="font-medium text-sm">{deal.company}</h4>
          <Button
            variant="ghost"
            size="sm"
            className={`h-6 w-6 p-0 ${deal.featured ? 'text-primary-foreground hover:bg-primary-foreground/10' : ''}`}
          >
            <MoreHorizontal className="h-3 w-3" />
          </Button>
        </div>
        
        {deal.description && (
          <p className={`text-xs mb-3 ${deal.featured ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
            {deal.description}
          </p>
        )}

        {deal.featured && (
          <div className="space-y-2 mb-3">
            <div className="flex items-center gap-2 text-xs text-primary-foreground/80">
              <MapPin className="h-3 w-3" />
              {deal.address}
            </div>
            <div className="flex items-center gap-2 text-xs text-primary-foreground/80">
              <Mail className="h-3 w-3" />
              {deal.email}
            </div>
            <div className="text-xs text-primary-foreground/60">
              Assigned: {deal.assignee}
            </div>
          </div>
        )}

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {deal.date && (
              <div className={`flex items-center gap-1 text-xs ${deal.featured ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                <Calendar className="h-3 w-3" />
                {deal.date}
              </div>
            )}
          </div>
          
          <div className="flex items-center gap-2">
            {deal.comments > 0 && (
              <div className={`flex items-center gap-1 text-xs ${deal.featured ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                <MessageCircle className="h-3 w-3" />
                {deal.comments}
              </div>
            )}
            {deal.files > 0 && (
              <div className={`flex items-center gap-1 text-xs ${deal.featured ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                <Eye className="h-3 w-3" />
                {deal.files}
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function KanbanBoard() {
  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {columns.map((column) => (
          <div key={column.title} className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-medium text-sm">{column.title}</h3>
              <Badge variant="secondary" className="text-xs">
                {column.count}
              </Badge>
            </div>
            
            <div className="space-y-3">
              {column.deals.map((deal) => (
                <DealCard key={deal.company} deal={deal} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}