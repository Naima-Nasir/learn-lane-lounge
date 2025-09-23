import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Mail, Github, Linkedin, MapPin } from "lucide-react";

const Members = () => {
  const members = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Study Group Leader",
      major: "Computer Science",
      year: "Senior",
      email: "sarah.chen@email.com",
      github: "sarahc-dev",
      linkedin: "sarah-chen-cs",
      location: "Bay Area, CA",
      strengths: ["React", "Node.js", "Database Design"],
      bio: "Passionate about full-stack development and helping others learn. Currently working on a capstone project involving machine learning.",
      avatar: "SC"
    },
    {
      id: 2,
      name: "Mike Johnson",
      role: "Vice Leader",
      major: "Software Engineering",
      year: "Senior",
      email: "mike.johnson@email.com",
      github: "mikej-codes",
      linkedin: "mike-johnson-se",
      location: "Austin, TX",
      strengths: ["Algorithms", "Data Structures", "System Design"],
      bio: "Love solving complex problems and optimizing code. Planning to pursue a career in backend development at a tech company.",
      avatar: "MJ"
    },
    {
      id: 3,
      name: "Alex Rivera",
      role: "Resource Coordinator",
      major: "Computer Science",
      year: "Junior",
      email: "alex.rivera@email.com",
      github: "alex-codes",
      linkedin: "alex-rivera-cs",
      location: "Seattle, WA",
      strengths: ["Python", "Testing", "DevOps"],
      bio: "Enthusiastic about software testing and DevOps practices. Currently interning at a startup focusing on cloud infrastructure.",
      avatar: "AR"
    },
    {
      id: 4,
      name: "Emma Davis",
      role: "Meeting Coordinator",
      major: "Software Engineering",
      year: "Junior",
      email: "emma.davis@email.com",
      github: "emma-dev",
      linkedin: "emma-davis-se",
      location: "Denver, CO",
      strengths: ["Java", "Spring Boot", "Mobile Development"],
      bio: "Interested in mobile app development and user experience design. Working on an Android app for my senior project.",
      avatar: "ED"
    },
    {
      id: 5,
      name: "David Kim",
      role: "Study Materials Organizer",
      major: "Computer Science",
      year: "Junior",
      email: "david.kim@email.com",
      github: "david-codes",
      linkedin: "david-kim-cs",
      location: "Los Angeles, CA",
      strengths: ["C++", "Machine Learning", "Data Analysis"],
      bio: "Fascinated by artificial intelligence and data science. Planning to pursue graduate studies in machine learning.",
      avatar: "DK"
    },
    {
      id: 6,
      name: "Jessica Wu",
      role: "Member",
      major: "Software Engineering",
      year: "Sophomore",
      email: "jessica.wu@email.com",
      github: "jessica-codes",
      linkedin: "jessica-wu-se",
      location: "Portland, OR",
      strengths: ["JavaScript", "UI/UX", "Web Design"],
      bio: "Creative problem solver with a passion for front-end development and user interface design. Always eager to learn new technologies.",
      avatar: "JW"
    }
  ];

  const getRoleColor = (role: string) => {
    if (role.includes("Leader")) return "bg-blue-100 text-blue-800";
    if (role.includes("Coordinator")) return "bg-green-100 text-green-800";
    if (role.includes("Organizer")) return "bg-purple-100 text-purple-800";
    return "bg-secondary text-secondary-foreground";
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-4 flex items-center gap-3">
            <Users className="h-8 w-8 text-primary" />
            Group Members
          </h1>
          <p className="text-muted-foreground text-lg">
            Meet your study group members and connect with your peers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {members.map((member) => (
            <Card key={member.id} className="shadow-card hover:shadow-card-hover transition-smooth">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">
                    {member.avatar}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{member.name}</h3>
                  <p className="text-muted-foreground">{member.major} • {member.year}</p>
                </div>

                <div className="space-y-3 mb-4">
                  <Badge className={getRoleColor(member.role)} variant="secondary">
                    {member.role}
                  </Badge>
                  
                  <p className="text-sm text-foreground leading-relaxed">
                    {member.bio}
                  </p>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    {member.location}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-foreground mb-2">Strengths:</h4>
                  <div className="flex flex-wrap gap-1">
                    {member.strengths.map((strength, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {strength}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <Button variant="outline" size="sm" className="justify-start">
                    <Mail className="h-4 w-4 mr-2" />
                    {member.email}
                  </Button>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Github className="h-4 w-4 mr-1" />
                      GitHub
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <Linkedin className="h-4 w-4 mr-1" />
                      LinkedIn
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="max-w-md mx-auto shadow-card">
            <CardContent className="p-6">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Want to Join Our Study Group?
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                We're always welcoming new members who are passionate about learning and collaboration.
              </p>
              <Button className="w-full">
                <Mail className="h-4 w-4 mr-2" />
                Contact Us
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Members;