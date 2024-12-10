'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  { date: "9 Agu", total: 118000 },
  { date: "10 Agu", total: 120000 },
  { date: "11 Agu", total: 257000 },
  { date: "12 Agu", total: 223000 },
  { date: "13 Agu", total: 232000 },
  { date: "14 Agu", total: 235000 },
  { date: "15 Agu", total: 80000 },
  { date: "16 Agu", total: 201000 },
  { date: "17 Agu", total: 332000 },
  { date: "18 Agu", total: 381000 },
  { date: "19 Agu", total: 178000 },
  { date: "20 Agu", total: 80000 },
  { date: "21 Agu", total: 128000 },
  { date: "22 Agu", total: 99000 },
  { date: "23 Agu", total: 241000 },
  { date: "25 Agu", total: 55000 },
  { date: "26 Agu", total: 188000 },
  { date: "27 Agu", total: 161000 },
  { date: "28 Agu", total: 163000 },
  { date: "29 Agu", total: 150000 },
  { date: "30 Agu", total: 84000 },
  { date: "31 Agu", total: 66000 },
]

export function SalesTrends() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Tren Penjualan</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={data}>
            <XAxis 
              dataKey="date" 
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
              tickFormatter={(value) => `Rp${value.toLocaleString('id-ID')}`}
            />
            <Tooltip 
              formatter={(value: number) => [`Rp${value.toLocaleString('id-ID')}`, "Total"]}
              labelFormatter={(label) => `Tanggal: ${label}`}
            />
            <Line type="monotone" dataKey="total" stroke="#8884d8" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

