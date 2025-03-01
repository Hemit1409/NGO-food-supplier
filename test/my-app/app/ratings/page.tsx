import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

export default function Ratings() {
  const reviews = [
    { id: 1, name: "John Doe", rating: 5, comment: "Great service and quality food!", date: "2023-05-01" },
    { id: 2, name: "Jane Smith", rating: 4, comment: "Good experience overall.", date: "2023-04-28" },
    { id: 3, name: "Bob Johnson", rating: 5, comment: "Excellent initiative, highly recommended!", date: "2023-04-25" },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Ratings and Feedback</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Recent Reviews</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {reviews.map((review) => (
                <li key={review.id} className="border-b pb-4 last:border-b-0">
                  <div className="flex items-center mb-2">
                    <Avatar className="h-10 w-10 mr-2">
                      <AvatarImage src={`https://api.dicebear.com/6.x/initials/svg?seed=${review.name}`} />
                      <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold">{review.name}</h3>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${i < review.rating ? "text-yellow-400" : "text-gray-300"}`}
                            fill="currentColor"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">{review.comment}</p>
                  <p className="text-xs text-gray-400 mt-1">{review.date}</p>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Your Rating</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 text-yellow-400" fill="currentColor" />
              ))}
            </div>
            <p className="text-center">4.8 out of 5</p>
            <p className="text-center text-sm text-gray-600">Based on 50 reviews</p>
            <Button className="w-full">Leave a Review</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

