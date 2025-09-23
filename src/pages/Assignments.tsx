import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Calendar, Clock, ExternalLink } from "lucide-react";

const Assignments = () => {
  const assignments = [
    {
      id: 1,
      title: "Project 3: Web Development",
      description: "Create a full-stack web application using React and Node.js. The application should include user authentication, a database, and a REST API.",
      subject: "Full Stack Development",
      dueDate: "2024-01-22",
      status: "active",
      difficulty: "Hard",
      estimatedHours: "15-20 hours",
      resources: ["React Documentation", "Node.js Tutorial", "MongoDB Guide"]
    },
    {
      id: 2,
      title: "Algorithm Analysis Report",
      description: "Write a comprehensive report analyzing the time and space complexity of sorting algorithms. Include implementations and performance benchmarks.",
      subject: "Algorithms",
      dueDate: "2024-01-25",
      status: "active",
      difficulty: "Medium",
      estimatedHours: "8-10 hours",
      resources: ["CLRS Chapter 2", "Algorithm Visualizations", "Complexity Analysis Guide"]
    },
    {
      id: 3,
      title: "Database Design Project",
      description: "Design and implement a normalized database schema for a library management system. Include ER diagrams and SQL queries.",
      subject: "Database Systems",
      dueDate: "2024-01-30",
      status: "upcoming",
      difficulty: "Medium",
      estimatedHours: "12-15 hours",
      resources: ["Database Design Principles", "SQL Reference", "ER Diagram Tutorial"]
    },
    {
      id: 4,
      title: "Software Testing Assignment",
      description: "Develop a comprehensive test suite for a given Java application using JUnit. Include unit tests, integration tests, and test documentation.",
      subject: "Software Engineering",
      dueDate: "2024-02-05",
      status: "upcoming",
      difficulty: "Easy",
      estimatedHours: "6-8 hours",
      resources: ["JUnit Documentation", "Testing Best Practices", "Mock Objects Guide"]
    },
    {
      id: 5,
      title: "Data Structures Implementation",
      description: "Implement and compare performance of different tree data structures (BST, AVL, Red-Black) with detailed analysis.",
      subject: "Data Structures",
      dueDate: "2024-01-18",
      status: "completed",
      difficulty: "Hard",
      estimatedHours: "20-25 hours",
      resources: ["Tree Algorithms", "Balanced Trees Guide", "Performance Analysis"]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "bg-blue-100 text-blue-800 border-blue-200";
      case "upcoming": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "completed": return "bg-green-100 text-green-800 border-green-200";
      default: return "bg-secondary text-secondary-foreground";
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy": return "bg-green-100 text-green-800";
      case "Medium": return "bg-yellow-100 text-yellow-800";
      case "Hard": return "bg-red-100 text-red-800";
      default: return "bg-secondary text-secondary-foreground";
    }
  };

  const getDaysUntilDue = (dueDate: string) => {
    const today = new Date();
    const due = new Date(dueDate);
    const diffTime = due.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-4 flex items-center gap-3">
            <BookOpen className="h-8 w-8 text-primary" />
            Assignments
          </h1>
          <p className="text-muted-foreground text-lg">
            Track your assignments, due dates, and resources to stay on top of your coursework.
          </p>
        </div>

        <div className="space-y-6 max-w-5xl mx-auto">
          {assignments.map((assignment) => {
            const daysUntilDue = getDaysUntilDue(assignment.dueDate);
            return (
              <Card key={assignment.id} className="shadow-card hover:shadow-card-hover transition-smooth">
                <CardHeader>
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{assignment.title}</CardTitle>
                      <p className="text-muted-foreground font-medium">{assignment.subject}</p>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge className={getStatusColor(assignment.status)}>
                        {assignment.status.toUpperCase()}
                      </Badge>
                      <Badge className={getDifficultyColor(assignment.difficulty)}>
                        {assignment.difficulty}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground leading-relaxed mb-6">
                    {assignment.description}
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="font-medium">Due Date</p>
                        <p className="text-muted-foreground">
                          {new Date(assignment.dueDate).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="font-medium">Time Estimate</p>
                        <p className="text-muted-foreground">{assignment.estimatedHours}</p>
                      </div>
                    </div>

                    {assignment.status !== "completed" && (
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <div>
                          <p className="font-medium">Days Remaining</p>
                          <p className={`font-semibold ${
                            daysUntilDue <= 3 ? "text-red-600" : 
                            daysUntilDue <= 7 ? "text-yellow-600" : "text-green-600"
                          }`}>
                            {daysUntilDue > 0 ? `${daysUntilDue} days` : "Overdue"}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {assignment.resources.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                        <ExternalLink className="h-4 w-4" />
                        Helpful Resources
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {assignment.resources.map((resource, index) => (
                          <Button key={index} variant="outline" size="sm">
                            {resource}
                          </Button>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Assignments;