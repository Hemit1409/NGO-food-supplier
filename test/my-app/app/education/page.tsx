import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, BookOpen, Video, FileText, Download } from "lucide-react"

export default function Education() {
  const articles = [
    {
      id: 1,
      title: "Understanding Food Waste Impact",
      description: "Learn about the environmental impact of food waste...",
      type: "Article",
      readTime: "5 min read",
      category: "Environmental",
    },
    {
      id: 2,
      title: "Best Practices for Food Storage",
      description: "Tips and techniques for proper food storage...",
      type: "Guide",
      readTime: "10 min read",
      category: "Food Safety",
    },
    {
      id: 3,
      title: "Food Preservation Methods",
      description: "Different methods to preserve food and extend shelf life...",
      type: "Video",
      readTime: "15 min watch",
      category: "Practical",
    },
  ]

  const resources = [
    {
      id: 1,
      title: "Food Waste Reduction Toolkit",
      type: "PDF",
      size: "2.4 MB",
    },
    {
      id: 2,
      title: "Food Safety Guidelines",
      type: "PDF",
      size: "1.8 MB",
    },
    {
      id: 3,
      title: "Volunteer Training Manual",
      type: "PDF",
      size: "3.2 MB",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">Educational Resources</h1>
          <p className="text-gray-600">Learn about food waste reduction and management</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <Card className="mb-6">
            <CardContent className="pt-6">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                <Input className="pl-9" placeholder="Search resources..." />
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="all" className="mb-6">
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="articles">Articles</TabsTrigger>
              <TabsTrigger value="videos">Videos</TabsTrigger>
              <TabsTrigger value="guides">Guides</TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="space-y-4">
            {articles.map((article) => (
              <Card key={article.id}>
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <Badge variant="secondary">{article.category}</Badge>
                        <span className="text-sm text-gray-500">{article.readTime}</span>
                      </div>
                      <h3 className="font-semibold text-lg">{article.title}</h3>
                      <p className="text-sm text-gray-600 mt-1">{article.description}</p>
                    </div>
                    {article.type === "Video" ? (
                      <Video className="h-5 w-5 text-blue-600" />
                    ) : (
                      <FileText className="h-5 w-5 text-blue-600" />
                    )}
                  </div>
                  <Button className="mt-4">Read More</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Learning Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <p className="font-medium">Completed Courses</p>
                  <p className="text-3xl font-bold text-blue-600">3/12</p>
                </div>
                <div>
                  <p className="font-medium">Hours Spent Learning</p>
                  <p className="text-3xl font-bold text-blue-600">8.5</p>
                </div>
                <Button className="w-full">Continue Learning</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Downloadable Resources</CardTitle>
              <CardDescription>Access offline learning materials</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {resources.map((resource) => (
                  <div key={resource.id} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <BookOpen className="h-4 w-4 text-blue-600 mr-2" />
                      <div>
                        <p className="font-medium">{resource.title}</p>
                        <p className="text-sm text-gray-500">{resource.size}</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

