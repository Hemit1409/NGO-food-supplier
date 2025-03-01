import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MessageSquare, Heart, Share2, Filter } from "lucide-react"

export default function Community() {
  const posts = [
    {
      id: 1,
      author: "Sarah Johnson",
      role: "NGO Volunteer",
      title: "Tips for reducing food waste in restaurants",
      content: "Here are some effective strategies I've learned...",
      likes: 24,
      comments: 8,
      time: "2 hours ago",
      category: "Tips & Tricks",
    },
    {
      id: 2,
      author: "Mike Chen",
      role: "Restaurant Owner",
      title: "Success story: How we saved 500kg of food this month",
      content: "By implementing these measures in our kitchen...",
      likes: 45,
      comments: 12,
      time: "5 hours ago",
      category: "Success Stories",
    },
    {
      id: 3,
      author: "Emma Wilson",
      role: "Food Bank Manager",
      title: "Seeking volunteers for weekend food distribution",
      content: "We need help distributing food packages...",
      likes: 15,
      comments: 6,
      time: "1 day ago",
      category: "Volunteer Opportunities",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Community Forum</h1>
        <Button>Create Post</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <Card className="mb-6">
            <CardContent className="pt-6">
              <div className="flex gap-4">
                <Input placeholder="Search discussions..." />
                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="all" className="mb-6">
            <TabsList>
              <TabsTrigger value="all">All Posts</TabsTrigger>
              <TabsTrigger value="tips">Tips & Tricks</TabsTrigger>
              <TabsTrigger value="stories">Success Stories</TabsTrigger>
              <TabsTrigger value="opportunities">Opportunities</TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="space-y-4">
            {posts.map((post) => (
              <Card key={post.id}>
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <Avatar>
                      <AvatarImage src={`https://api.dicebear.com/6.x/initials/svg?seed=${post.author}`} />
                      <AvatarFallback>{post.author[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <h3 className="font-semibold">{post.author}</h3>
                        <span className="text-sm text-gray-500">• {post.role}</span>
                      </div>
                      <h4 className="font-semibold mt-2">{post.title}</h4>
                      <p className="text-sm text-gray-600 mt-1">{post.content}</p>
                      <div className="flex items-center space-x-4 mt-4">
                        <Button variant="ghost" size="sm">
                          <Heart className="h-4 w-4 mr-2" />
                          {post.likes}
                        </Button>
                        <Button variant="ghost" size="sm">
                          <MessageSquare className="h-4 w-4 mr-2" />
                          {post.comments}
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Share2 className="h-4 w-4 mr-2" />
                          Share
                        </Button>
                        <span className="text-sm text-gray-500 ml-auto">{post.time}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Popular Categories</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Button variant="outline" className="w-full justify-start">
                  Tips & Tricks
                  <span className="ml-auto text-gray-500">45</span>
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  Success Stories
                  <span className="ml-auto text-gray-500">32</span>
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  Volunteer Opportunities
                  <span className="ml-auto text-gray-500">28</span>
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  Food Safety
                  <span className="ml-auto text-gray-500">24</span>
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  Recipes
                  <span className="ml-auto text-gray-500">19</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

