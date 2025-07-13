"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

interface Brand {
  id: string
  name: string
  image: string
  vehicleCount: number
}

export function OurBrandsSection() {
  const [brands, setBrands] = useState<Brand[]>([])
  const [totalVehicles, setTotalVehicles] = useState(0)

  // Mock data - replace with actual API call
  useEffect(() => {
    const mockBrands: Brand[] = [
      { id: "1", name: "Audi", image: "/brands/audi.svg", vehicleCount: 45 },
      { id: "2", name: "BMW", image: "/brands/bmw.svg", vehicleCount: 38 },
      { id: "3", name: "Mercedes-Benz", image: "/brands/mercedes.svg", vehicleCount: 52 },
      { id: "4", name: "Volkswagen", image: "/brands/vw.svg", vehicleCount: 29 },
      { id: "5", name: "Toyota", image: "/brands/toyota.svg", vehicleCount: 67 },
      { id: "6", name: "Honda", image: "/brands/honda.svg", vehicleCount: 41 },
      { id: "7", name: "Ford", image: "/brands/ford.svg", vehicleCount: 33 },
      { id: "8", name: "Chevrolet", image: "/brands/chevrolet.svg", vehicleCount: 28 },
      { id: "9", name: "Nissan", image: "/brands/nissan.svg", vehicleCount: 35 },
      { id: "10", name: "Hyundai", image: "/brands/hyundai.svg", vehicleCount: 24 },
    ]

    setBrands(mockBrands)
    setTotalVehicles(mockBrands.reduce((sum, brand) => sum + brand.vehicleCount, 0))
  }, [])

  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl uppercase">Our Brands</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We have {totalVehicles} vehicles in stock, ready for same-day drive away.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {brands.map((brand) => (
            <Link key={brand.id} href={`/inventory?make=${brand.id}`} className="group">
              <Card className="hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                <CardContent className="p-6 flex flex-col items-center justify-center h-24">
                  <div className="relative w-full h-12">
                    <Image
                      src={brand.image || "/placeholder.svg"}
                      alt={brand.name}
                      fill
                      className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                  <p className="mt-2 text-sm font-medium text-gray-600 group-hover:text-primary">
                    {brand.vehicleCount} vehicles
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
