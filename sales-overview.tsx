'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

const data = [
  { name: "Pangsit Lava", total: 73 },
  { name: "Mie Lava", total: 58 },
  { name: "Nuget Pisang", total: 32 },
  { name: "Pisang Lumpia", total: 32 },
  { name: "Soda", total: 40 },
  { name: "Green Tea", total: 30 },
  { name: "Lemon Tea", total: 22 },
  { name: "Kopi", total: 17 },
]

export function SalesOverview() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Ringkasan Penjualan</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={data}>
            <XAxis
              dataKey="name"
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value}`}
            />
            <Tooltip
              formatter={(value: number) => [`${value}`, "Total Terjual"]}
              labelFormatter={(label) => `Menu: ${label}`}
            />
            <Bar dataKey="total" fill="#adfa1d" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

