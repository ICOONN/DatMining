'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const recommendations = [
  { name: "Pangsit Lava", reason: "Penjualan Tertinggi" },
  { name: "Mie Lava", reason: "Favorit Pelanggan" },
  { name: "Soda", reason: "Minuman Terlaris" },
  { name: "Nuget Pisang", reason: "Camilan Populer" },
  { name: "Pisang Lumpia", reason: "Pilihan Favorit" },
]

export function MenuRecommendations() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Rekomendasi Menu</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {recommendations.map((item) => (
            <li key={item.name} className="flex items-center justify-between">
              <span className="font-medium">{item.name}</span>
              <Badge>{item.reason}</Badge>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

