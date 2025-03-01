"use client"

import { ImagePlus, MapPin, Upload } from "lucide-react"
import { useState } from "react"
import { useRouter } from "next/navigation"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"

export default function AddDonationPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
    quantity: "",
    expiryDate: "",
    photo: null,
    pickupLocation: "123 Main Street, City Center",
    availableUntilDate: "",
    availableUntilTime: "",
    pickupNotes: ""
  })

  const handleChange = (e) => {
    const { id, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [id]: value
    }))
  }

  const handleSelectChange = (id, value) => {
    setFormData((prev) => ({
      ...prev,
      [id]: value
    }))
  }

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({
        ...prev,
        photo: e.target.files[0]
      }))
    }
  }

  const handleSubmit = async () => {
    setLoading(true)
    setError("")
    
    try {
      // Create form data for file upload
      const submitData = new FormData()
      
      // Add all form fields
      Object.keys(formData).forEach(key => {
        if (key === 'photo' && formData.photo) {
          submitData.append('photo', formData.photo)
        } else if (formData[key]) {
          submitData.append(key, formData[key])
        }
      })

      // Format data as JSON instead of FormData for API compatibility
      const jsonData = {
        title: formData.title,
        category: formData.category,
        description: formData.description,
        quantity: formData.quantity,
        expiryDate: formData.expiryDate,
        pickupLocation: formData.pickupLocation,
        availableUntil: `${formData.availableUntilDate}T${formData.availableUntilTime}`,
        pickupNotes: formData.pickupNotes
      }

      // Use the correct API endpoint path
      const response = await fetch('/api/donations/add-donation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(jsonData)
      })

      if (!response.ok) {
        const errorText = await response.text()
        throw new Error(`API error: ${response.status} - ${errorText}`)
      }

      const data = await response.json()
      console.log("Success:", data)
      
      // Navigate to the details page or list page
      router.push('/donations')
    } catch (error) {
      console.error('Error creating donation:', error)
      setError(error.message || "Failed to create donation")
    } finally {
      setLoading(false)
    }
  }

  const handleSaveDraft = () => {
    // Implement draft saving logic
    console.log('Saving draft')
  }

  return (
    <div className="flex-1 space-y-6 p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Add Donation</h1>
      </div>

      <div className="mb-6">
        <div className="mb-2 flex gap-2">
          <Avatar className="h-8 w-8">
            {/* Use a default avatar instead of placeholder */}
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium">Jane Doe</p>
            <p className="text-xs text-muted-foreground">Donating as Individual</p>
          </div>
        </div>
      </div>

      {error && (
        <div className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg">
          {error}
        </div>
      )}

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Donation Details</CardTitle>
              <CardDescription>Provide information about the food you're donating</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input 
                  id="title" 
                  placeholder="e.g., Fresh Vegetables Assortment"
                  value={formData.title}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select
                  onValueChange={(value) => handleSelectChange("category", value)}
                  value={formData.category}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="perishable">Perishable</SelectItem>
                    <SelectItem value="non-perishable">Non-Perishable</SelectItem>
                    <SelectItem value="cooked">Cooked</SelectItem>
                    <SelectItem value="raw">Raw Ingredients</SelectItem>
                    <SelectItem value="bakery">Bakery</SelectItem>
                    <SelectItem value="dairy">Dairy</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Describe the food items, quantity, and any other relevant details"
                  className="min-h-[120px]"
                  value={formData.description}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="quantity">Quantity</Label>
                <Input 
                  id="quantity" 
                  placeholder="e.g., 5, 6" 
                  value={formData.quantity}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="expiryDate">Expiry Date : </Label>
                <div className="grid grid-cols-1 gap-2">
                  <Input 
                    id="expiryDate" 
                    type="date" 
                    value={formData.expiryDate}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Photos</CardTitle>
              <CardDescription>Add photos of the food you're donating</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <label className="flex h-40 cursor-pointer flex-col items-center justify-center rounded-lg border border-dashed border-primary/50 bg-muted/50 p-4 text-center">
                  <ImagePlus className="mb-2 h-8 w-8 text-muted-foreground" />
                  <p className="text-sm font-medium">Drag & drop or click to upload</p>
                  <p className="text-xs text-muted-foreground">JPG, PNG or GIF, up to 5MB</p>
                  <Input 
                    type="file" 
                    className="hidden" 
                    onChange={handleFileChange}
                    accept="image/jpeg,image/png,image/gif"
                  />
                </label>
                {formData.photo && (
                  <p className="text-sm text-muted-foreground">
                    Selected: {formData.photo.name}
                  </p>
                )}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Pickup Information</CardTitle>
              <CardDescription>Provide details about when and where the food can be picked up</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Pickup Location</Label>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{formData.pickupLocation}</span>
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="mt-1"
                  onClick={() => {
                    // This would typically open a map/location selector
                    console.log("Change location clicked")
                  }}
                >
                  Change Location
                </Button>
              </div>
              <Separator />
              <div className="space-y-2">
                <Label>Available Until</Label>
                <div className="grid grid-cols-2 gap-2">
                  <Input 
                    type="date" 
                    id="availableUntilDate"
                    value={formData.availableUntilDate}
                    onChange={handleChange}
                  />
                  <Input 
                    type="time" 
                    id="availableUntilTime"
                    value={formData.availableUntilTime}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="pickupNotes">Additional Notes</Label>
                <Textarea 
                  id="pickupNotes" 
                  placeholder="Any special instructions for pickup" 
                  className="min-h-[80px]" 
                  value={formData.pickupNotes}
                  onChange={handleChange}
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardFooter className="flex justify-between border-t px-6 py-4">
              <Button 
                variant="outline" 
                onClick={handleSaveDraft}
                disabled={loading}
              >
                Save as Draft
              </Button>
              <Button 
                onClick={handleSubmit}
                disabled={loading}
              >
                {loading ? (
                  "Publishing..."
                ) : (
                  <>
                    <Upload className="mr-2 h-4 w-4" />
                    Publish Donation
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}