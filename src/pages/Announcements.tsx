import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bell, Calendar, User } from "lucide-react";

const Announcements = () => {
  const announcements = [
    {
      id: 1,
      title: "Midterm Study Session",
      content: "Join us this Friday at 7 PM in the library (Room 204) for our midterm preparation session. We'll cover algorithms, data structures, and software design patterns. Bring your notes and questions!",
      author: "Sarah Chen",
      date: "2024-01-15",
      priority: "high",
      category: "Study Session"
    },
    {
      id: 2,
      title: "Group Project Guidelines Updated",
      content: "The final project guidelines have been updated to include more specific requirements for documentation and testing. Please review the new requirements in the resources section.",
      author: "Mike Johnson",
      date: "2024-01-12",
      priority: "medium",
      category: "Academic"
    },
    {
      id: 3,
      title: "Next Meeting: Code Review Session",
      content: "Our next group meeting will focus on peer code reviews. Please bring your current project code on a laptop. We'll practice giving constructive feedback and identifying best practices.",
      author: "Alex Rivera",
      date: "2024-01-10",
      priority: "medium",
      category: "Meeting"
    },
    {
      id: 4,
      title: "New Study Resources Added",
      content: "Added new resources for system design and database optimization to our shared folder. These materials will be helpful for the upcoming assignments and final project.",
      author: "Emma Davis",
      date: "2024-01-08",
      priority: "low",
      category: "Resources"
    },
    {
      id: 5,
      title: "Office Hours with TA",
      content: "Remember that our TA holds office hours every Tuesday and Thursday from 2-4 PM in CS building room 301. Great opportunity to get help with assignments and projects.",
      author: "David Kim",
      date: "2024-01-05",
      priority: "low",
      category: "Information"
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "bg-red-100 text-red-800 border-red-200";
      case "medium": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "low": return "bg-green-100 text-green-800 border-green-200";
      default: return "bg-secondary text-secondary-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-4 flex items-center gap-3">
            <Bell className="h-8 w-8 text-primary" />
            Announcements
          </h1>
          <p className="text-muted-foreground text-lg">
            Stay updated with the latest news and important information from your study group.
          </p>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {announcements.map((announcement) => (
            <Card key={announcement.id} className="shadow-card hover:shadow-card-hover transition-smooth">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <CardTitle className="text-xl">{announcement.title}</CardTitle>
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge className={getPriorityColor(announcement.priority)}>
                      {announcement.priority.toUpperCase()}
                    </Badge>
                    <Badge variant="outline">{announcement.category}</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-foreground leading-relaxed mb-4">
                  {announcement.content}
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {announcement.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(announcement.date).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Announcements;