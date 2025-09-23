import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Bell, BookOpen, Users, Folder } from "lucide-react";
import heroImage from "@/assets/hero-study-group.jpg";

const Home = () => {
  const quickLinks = [
    {
      icon: Bell,
      title: "Latest Announcements",
      description: "Stay updated with group news",
      path: "/announcements",
      color: "text-blue-600"
    },
    {
      icon: BookOpen,
      title: "Current Assignments",
      description: "View upcoming deadlines",
      path: "/assignments",
      color: "text-green-600"
    },
    {
      icon: Users,
      title: "Group Members",
      description: "Connect with your peers",
      path: "/members",
      color: "text-purple-600"
    },
    {
      icon: Folder,
      title: "Study Resources",
      description: "Access shared materials",
      path: "/resources",
      color: "text-orange-600"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-hero-gradient py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
                Software Engineering Study Group
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
                Collaborate, learn, and succeed together in your software engineering journey. 
                Access resources, track assignments, and stay connected with your study group.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/announcements">
                  <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                    View Announcements
                  </Button>
                </Link>
                <Link to="/assignments">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto bg-white/10 border-white/20 text-white hover:bg-white/20">
                    Check Assignments
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Students collaborating on software projects"
                className="rounded-lg shadow-card-hover w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Quick Access
            </h2>
            <p className="text-muted-foreground text-lg">
              Jump to what you need most
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link key={link.path} to={link.path}>
                  <Card className="h-full shadow-card hover:shadow-card-hover transition-smooth cursor-pointer group">
                    <CardHeader className="text-center">
                      <Icon className={`h-12 w-12 mx-auto mb-4 ${link.color} group-hover:scale-110 transition-smooth`} />
                      <CardTitle className="text-lg">{link.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-center">
                        {link.description}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Recent Activity Preview */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Recent Activity
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-5 w-5 text-primary" />
                  Latest Announcement
                </CardTitle>
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold mb-2">Midterm Study Session</h3>
                <p className="text-muted-foreground mb-3">
                  Join us this Friday at 7 PM for our midterm preparation session covering algorithms and data structures.
                </p>
                <p className="text-sm text-muted-foreground">Posted 2 days ago</p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  Upcoming Assignment
                </CardTitle>
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold mb-2">Project 3: Web Development</h3>
                <p className="text-muted-foreground mb-3">
                  Create a full-stack web application using React and Node.js. Due next week.
                </p>
                <p className="text-sm text-muted-foreground">Due in 5 days</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;