import { Search, SlidersHorizontal, User, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Header() {
  return (
    <div className="h-16 border-b border-border bg-card px-6 flex items-center justify-between">
      <div className="flex items-center gap-4 flex-1">
        {/* Search */}
        <div className="relative max-w-md flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search customer..."
            className="pl-9 bg-background"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        {/* Sort by */}
        <Button variant="ghost" size="sm" className="gap-2">
          <SlidersHorizontal className="h-4 w-4" />
          Sort by
        </Button>

        {/* Filters */}
        <Button variant="ghost" size="sm" className="gap-2">
          <SlidersHorizontal className="h-4 w-4" />
          Filters
        </Button>

        {/* Profile */}
        <Button variant="ghost" size="sm" className="gap-2">
          <User className="h-4 w-4" />
          Me
        </Button>

        {/* Add Customer */}
        <Button size="sm" className="gap-2">
          <Plus className="h-4 w-4" />
          Add customer
        </Button>
      </div>
    </div>
  );
}