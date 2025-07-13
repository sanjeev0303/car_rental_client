"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface Vehicle {
  id: string
  make: string
  model: string
  year: number
  price: number
  image: string
  mileage: number
}

interface CarouselProps {
  vehicles: Vehicle[]
  favourites: string[]
}

export function LatestArrivalsCarousel({ vehicles, favourites }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [localFavourites, setLocalFavourites] = useState<string[]>(favourites)

  const itemsPerView = {
    mobile: 1,
    tablet: 2,
    desktop: 3,
    large: 4,
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + itemsPerView.large >= vehicles.length ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? Math.max(0, vehicles.length - itemsPerView.large) : prev - 1))
  }

  const toggleFavourite = (vehicleId: string) => {
    setLocalFavourites((prev) =>
      prev.includes(vehicleId) ? prev.filter((id) => id !== vehicleId) : [...prev, vehicleId],
    )
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(price)
  }

  const formatMileage = (mileage: number) => {
    return new Intl.NumberFormat("en-US").format(mileage)
  }

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsPerView.large)}%)`,
          }}
        >
          {vehicles.map((vehicle) => (
            <div key={vehicle.id} className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 flex-shrink-0 px-3">
              <Card className="group hover:shadow-lg transition-all duration-300">
                <div className="relative">
                  <div className="aspect-[4/3] relative overflow-hidden rounded-t-lg">
                    <Image
                      src={vehicle.image || "/placeholder.svg"}
                      alt={`${vehicle.make} ${vehicle.model}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2 right-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 bg-white/80 hover:bg-white"
                        onClick={() => toggleFavourite(vehicle.id)}
                      >
                        <Heart
                          className={cn(
                            "h-4 w-4",
                            localFavourites.includes(vehicle.id) ? "fill-red-500 text-red-500" : "text-gray-600",
                          )}
                        />
                      </Button>
                    </div>
                    <div className="absolute top-2 left-2">
                      <Badge variant="secondary" className="bg-white/90">
                        {vehicle.year}
                      </Badge>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg">
                      {vehicle.make} {vehicle.model}
                    </h3>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-primary">{formatPrice(vehicle.price)}</span>
                      <span className="text-sm text-gray-600">{formatMileage(vehicle.mileage)} miles</span>
                    </div>
                    <Button asChild className="w-full">
                      <Link href={`/vehicles/${vehicle.id}`}>View Details</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 hidden lg:flex bg-transparent"
        onClick={prevSlide}
        disabled={currentIndex === 0}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 hidden lg:flex bg-transparent"
        onClick={nextSlide}
        disabled={currentIndex + itemsPerView.large >= vehicles.length}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({
          length: Math.ceil(vehicles.length / itemsPerView.large),
        }).map((_, index) => (
          <button
            key={index}
            className={cn(
              "w-2 h-2 rounded-full transition-colors",
              index === Math.floor(currentIndex / itemsPerView.large) ? "bg-primary" : "bg-gray-300",
            )}
            onClick={() => setCurrentIndex(index * itemsPerView.large)}
          />
        ))}
      </div>
    </div>
  )
}
