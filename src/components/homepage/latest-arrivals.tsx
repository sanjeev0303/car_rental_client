"use client"

import { useState, useEffect } from "react"
import { LatestArrivalsCarousel } from "./latest-arrivals-carousel"

interface Vehicle {
  id: string
  make: string
  model: string
  year: number
  price: number
  image: string
  mileage: number
}

export function LatestArrivals() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([])
  const [favourites, setFavourites] = useState<string[]>([])

  // Mock data - replace with actual API call
  useEffect(() => {
    const mockVehicles: Vehicle[] = [
      {
        id: "1",
        make: "BMW",
        model: "X5",
        year: 2023,
        price: 65000,
        image: "/vehicles/bmw-x5.jpg",
        mileage: 15000,
      },
      {
        id: "2",
        make: "Audi",
        model: "A4",
        year: 2022,
        price: 45000,
        image: "/vehicles/audi-a4.jpg",
        mileage: 22000,
      },
      {
        id: "3",
        make: "Mercedes-Benz",
        model: "C-Class",
        year: 2023,
        price: 55000,
        image: "/vehicles/mercedes-c-class.jpg",
        mileage: 8000,
      },
      {
        id: "4",
        make: "Toyota",
        model: "Camry",
        year: 2022,
        price: 32000,
        image: "/vehicles/toyota-camry.jpg",
        mileage: 18000,
      },
      {
        id: "5",
        make: "Honda",
        model: "Accord",
        year: 2023,
        price: 35000,
        image: "/vehicles/honda-accord.jpg",
        mileage: 12000,
      },
      {
        id: "6",
        make: "Ford",
        model: "Mustang",
        year: 2023,
        price: 48000,
        image: "/vehicles/ford-mustang.jpg",
        mileage: 5000,
      },
    ]

    setVehicles(mockVehicles)
  }, [])

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto max-w-7xl px-6">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl uppercase mb-8">Latest Arrivals</h2>
        <LatestArrivalsCarousel vehicles={vehicles} favourites={favourites} />
      </div>
    </section>
  )
}
