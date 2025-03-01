"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { ImagePlus, MapPin, Upload } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";

interface DonationData {
  title: string;
  category: string;
  description: string;
  quantity: string;
  bestBeforeDate: string;
  bestBeforeTime: string;
  suitableFor: string[];
  allergens: string;
  pickupLocation: string;
  pickupAvailability: string;
  availableUntilDate: string;
  availableUntilTime: string;
  additionalNotes: string;
  whoCanRequest: string;
  shareSocial: boolean;
}

export default function AddDonationPage() {
  const [donationData, setDonationData] = useState<DonationData>({
    title: "",
    category: "",
    description: "",
    quantity: "",
    bestBeforeDate: "",
    bestBeforeTime: "",
    suitableFor: [],
    allergens: "",
    pickupLocation: "",
    pickupAvailability: "flexible",
    availableUntilDate: "",
    availableUntilTime: "",
    additionalNotes: "",
    whoCanRequest: "anyone",
    shareSocial: false,
  });

  useEffect(() => {
    // Fetch data from the backend
    axios.get("/api/donations/1") // Replace with the actual donation ID or endpoint
      .then(response => {
        setDonationData(response.data);
      })
      .catch(error => {
        console.error("Error fetching donation data:", error);
      });
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setDonationData({ ...donationData, [id]: value });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = e.target;
    setDonationData({ ...donationData, [id]: checked });
  };

  const handleCheckboxButtonChange = (event: React.FormEvent<HTMLButtonElement>) => {
    const target = event.target as HTMLInputElement;
    const { id, checked } = target;
    setDonationData({ ...donationData, [id]: checked });
  };

  const handleSelectChange = (id: string, value: string) => {
    setDonationData({ ...donationData, [id]: value });
  };

  const handleSubmit = () => {
    // Implement form submission logic here
    console.log("Form submitted with data:", donationData);
  };

  return (
    <div className="flex-1 space-y-6 p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Add Donation</h1>
      </div>

      <div className="mb-6">
        <div className="mb-2 flex gap-2">
          <Avatar className="h-8 w-8">
            <AvatarImage src="/placeholder.svg?height=40&width=40" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium">Jane Doe</p>
            <p className="text-xs text-muted-foreground">Donating as Individual</p>
          </div>
        </div>
      </div>

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
                <Input id="title" value={donationData.title} onChange={handleInputChange} placeholder="e.g., Fresh Vegetables Assortment" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select value={donationData.category} onValueChange={(value) => handleSelectChange("category", value)}>
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
                  value={donationData.description}
                  onChange={handleInputChange}
                  placeholder="Describe the food items, quantity, and any other relevant details"
                  className="min-h-[120px]"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="quantity">Quantity</Label>
                <Input id="quantity" value={donationData.quantity} onChange={handleInputChange} placeholder="e.g., 5-6 servings, 2kg, etc." />
              </div>
              <div className="space-y-2">
                <Label htmlFor="best-before">Best Before</Label>
                <div className="grid grid-cols-2 gap-2">
                  <Input id="bestBeforeDate" type="date" value={donationData.bestBeforeDate} onChange={handleInputChange} />
                  <Input id="bestBeforeTime" type="time" value={donationData.bestBeforeTime} onChange={handleInputChange} />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* <Card>
            <CardHeader>
              <CardTitle>Dietary Information</CardTitle>
              <CardDescription>Help recipients with dietary restrictions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Suitable for</Label>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="vegetarian" checked={donationData.suitableFor.includes("vegetarian")} onChange={handleCheckboxButtonChange} />
                    <label htmlFor="vegetarian" className="text-sm">
                      Vegetarian
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="vegan" checked={donationData.suitableFor.includes("vegan")} onChange={handleCheckboxButtonChange} />
                    <label htmlFor="vegan" className="text-sm">
                      Vegan
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="gluten-free" checked={donationData.suitableFor.includes("gluten-free")} onChange={handleCheckboxButtonChange} />
                    <label htmlFor="gluten-free" className="text-sm">
                      Gluten-Free
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="dairy-free" checked={donationData.suitableFor.includes("dairy-free")} onChange={handleCheckboxButtonChange} />
                    <label htmlFor="dairy-free" className="text-sm">
                      Dairy-Free
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="nut-free" checked={donationData.suitableFor.includes("nut-free")} onChange={handleCheckboxButtonChange} />
                    <label htmlFor="nut-free" className="text-sm">
                      Nut-Free
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="halal" checked={donationData.suitableFor.includes("halal")} onChange={handleCheckboxButtonChange} />
                    <label htmlFor="halal" className="text-sm">
                      Halal
                    </label>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="allergens">Allergens</Label>
                <Input id="allergens" value={donationData.allergens} onChange={handleInputChange} placeholder="e.g., contains nuts, dairy, etc." />
              </div>
            </CardContent>
          </Card> */}
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Photos</CardTitle>
              <CardDescription>Add photos of the food you're donating</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="flex h-40 cursor-pointer flex-col items-center justify-center rounded-lg border border-dashed border-primary/50 bg-muted/50 p-4 text-center">
                  <ImagePlus className="mb-2 h-8 w-8 text-muted-foreground" />
                  <p className="text-sm font-medium">Drag & drop or click to upload</p>
                  <p className="text-xs text-muted-foreground">JPG, PNG or GIF, up to 5MB</p>
                  <Input type="file" className="hidden" />
                </div>
                {/* <div className="grid grid-cols-3 gap-2">
                  <div className="relative aspect-square rounded-lg bg-muted">
                    <img
                      src="/placeholder.svg?height=100&width=100"
                      alt="Preview"
                      className="h-full w-full rounded-lg object-cover"
                    />
                    <Button variant="destructive" size="icon" className="absolute -right-2 -top-2 h-6 w-6 rounded-full">
                      <span className="sr-only">Remove</span>
                      <span aria-hidden="true">×</span>
                    </Button>
                  </div>
                </div> */}
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
                  <span className="text-sm">{donationData.pickupLocation}</span>
                </div>
                <Button variant="outline" size="sm" className="mt-1">
                  Change Location
                </Button>
              </div>
              <Separator />
              {/* <div className="space-y-2">
                <Label>Pickup Availability</Label>
                <RadioGroup value={donationData.pickupAvailability} onValueChange={(value) => handleSelectChange("pickupAvailability", value)}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="flexible" id="flexible" />
                    <Label htmlFor="flexible" className="font-normal">
                      Flexible (Anytime)
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="specific" id="specific" />
                    <Label htmlFor="specific" className="font-normal">
                      Specific Time Slots
                    </Label>
                  </div>
                </RadioGroup>
              </div> */}
              <div className="space-y-2">
                <Label>Available Until</Label>
                <div className="grid grid-cols-2 gap-2">
                  <Input id="availableUntilDate" type="date" value={donationData.availableUntilDate} onChange={handleInputChange} />
                  <Input id="availableUntilTime" type="time" value={donationData.availableUntilTime} onChange={handleInputChange} />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="notes">Additional Notes</Label>
                <Textarea id="notes" value={donationData.additionalNotes} onChange={handleInputChange} placeholder="Any special instructions for pickup" className="min-h-[80px]" />
              </div>
            </CardContent>
          </Card>

          
        </div>
      </div>
    </div>
  );
}