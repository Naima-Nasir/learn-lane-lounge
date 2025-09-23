import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Folder, ExternalLink, Download, Book, Video, FileText, Globe, Code } from "lucide-react";

const Resources = () => {
  const resourceCategories = [
    {
      title: "Textbooks & Reading Materials",
      icon: Book,
      color: "text-blue-600",
      resources: [
        {
          name: "Introduction to Algorithms (CLRS)",
          type: "PDF",
          description: "Comprehensive algorithms textbook with detailed explanations",
          tags: ["Algorithms", "Data Structures", "Theory"]
        },
        {
          name: "Clean Code by Robert Martin",
          type: "Book",
          description: "Best practices for writing maintainable and readable code",
          tags: ["Best Practices", "Software Engineering", "Clean Code"]
        },
        {
          name: "System Design Interview Guide",
          type: "PDF",
          description: "Preparation material for system design interviews",
          tags: ["System Design", "Interviews", "Scalability"]
        }
      ]
    },
    {
      title: "Video Tutorials & Lectures",
      icon: Video,
      color: "text-purple-600",
      resources: [
        {
          name: "MIT OpenCourseWare - Algorithms",
          type: "Video Series",
          description: "Complete algorithm course from MIT",
          tags: ["Algorithms", "MIT", "Free Course"]
        },
        {
          name: "React Crash Course 2024",
          type: "YouTube",
          description: "Modern React development fundamentals",
          tags: ["React", "Web Development", "Frontend"]
        },
        {
          name: "Database Design Fundamentals",
          type: "Video Course",
          description: "Learn database design principles and normalization",
          tags: ["Database", "SQL", "Design"]
        }
      ]
    },
    {
      title: "Online Tools & Platforms",
      icon: Globe,
      color: "text-green-600",
      resources: [
        {
          name: "LeetCode",
          type: "Website",
          description: "Practice coding problems and prepare for interviews",
          tags: ["Practice", "Algorithms", "Interviews"]
        },
        {
          name: "GitHub",
          type: "Platform",
          description: "Version control and collaborative development",
          tags: ["Git", "Collaboration", "Version Control"]
        },
        {
          name: "Stack Overflow",
          type: "Community",
          description: "Get answers to programming questions",
          tags: ["Q&A", "Community", "Problem Solving"]
        }
      ]
    },
    {
      title: "Code Examples & Projects",
      icon: Code,
      color: "text-orange-600",
      resources: [
        {
          name: "Data Structures Implementation",
          type: "GitHub Repo",
          description: "Complete implementations of common data structures",
          tags: ["Data Structures", "Code Examples", "Learning"]
        },
        {
          name: "Full-Stack Project Template",
          type: "Template",
          description: "Boilerplate for React + Node.js projects",
          tags: ["Full-Stack", "Template", "MERN"]
        },
        {
          name: "Algorithm Visualizations",
          type: "Interactive",
          description: "Visual representations of sorting and search algorithms",
          tags: ["Algorithms", "Visualization", "Interactive"]
        }
      ]
    },
    {
      title: "Study Guides & Notes",
      icon: FileText,
      color: "text-red-600",
      resources: [
        {
          name: "Software Engineering Midterm Guide",
          type: "Study Guide",
          description: "Comprehensive review for midterm exam",
          tags: ["Study Guide", "Midterm", "Review"]
        },
        {
          name: "Database Cheat Sheet",
          type: "Reference",
          description: "Quick reference for SQL commands and concepts",
          tags: ["SQL", "Database", "Cheat Sheet"]
        },
        {
          name: "Time Complexity Quick Reference",
          type: "Cheat Sheet",
          description: "Big O notation and complexity analysis guide",
          tags: ["Big O", "Complexity", "Algorithms"]
        }
      ]
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case "pdf": case "book": return "bg-red-100 text-red-800";
      case "video series": case "youtube": case "video course": return "bg-purple-100 text-purple-800";
      case "website": case "platform": case "community": return "bg-blue-100 text-blue-800";
      case "github repo": case "template": case "interactive": return "bg-green-100 text-green-800";
      case "study guide": case "reference": case "cheat sheet": return "bg-yellow-100 text-yellow-800";
      default: return "bg-secondary text-secondary-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-4 flex items-center gap-3">
            <Folder className="h-8 w-8 text-primary" />
            Study Resources
          </h1>
          <p className="text-muted-foreground text-lg">
            Access curated learning materials, tools, and resources to excel in your studies.
          </p>
        </div>

        <div className="space-y-8 max-w-6xl mx-auto">
          {resourceCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <Card key={categoryIndex} className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <Icon className={`h-6 w-6 ${category.color}`} />
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {category.resources.map((resource, resourceIndex) => (
                      <Card key={resourceIndex} className="border shadow-sm hover:shadow-md transition-smooth">
                        <CardContent className="p-4">
                          <div className="flex items-start justify-between mb-3">
                            <h4 className="font-semibold text-foreground text-sm leading-tight">
                              {resource.name}
                            </h4>
                            <Badge className={getTypeColor(resource.type)} variant="secondary">
                              {resource.type}
                            </Badge>
                          </div>
                          
                          <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                            {resource.description}
                          </p>

                          <div className="flex flex-wrap gap-1 mb-4">
                            {resource.tags.map((tag, tagIndex) => (
                              <Badge key={tagIndex} variant="outline" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>

                          <div className="flex gap-2">
                            <Button size="sm" className="flex-1">
                              <ExternalLink className="h-3 w-3 mr-1" />
                              Access
                            </Button>
                            {resource.type.toLowerCase().includes('pdf') || resource.type.toLowerCase().includes('guide') ? (
                              <Button size="sm" variant="outline">
                                <Download className="h-3 w-3" />
                              </Button>
                            ) : null}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-12">
          <Card className="max-w-2xl mx-auto shadow-card bg-accent/30">
            <CardContent className="p-6 text-center">
              <Folder className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Have a Great Resource to Share?
              </h3>
              <p className="text-muted-foreground mb-4">
                Help your study group by contributing useful materials and resources you've found.
              </p>
              <Button>
                Submit a Resource
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Resources;