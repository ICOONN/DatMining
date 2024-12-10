'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const topItems = [
  { name: "Pangsit Lava", category: "Makanan", sales: 73 },
  { name: "Mie Lava", category: "Makanan", sales: 58 },
  { name: "Soda", category: "Minuman", sales: 40 },
  { name: "Nuget Pisang", category: "Makanan", sales: 32 },
  { name: "Pisang Lumpia", category: "Makanan", sales: 32 },
]

export function TopSellingItems() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Top Selling Items</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nama</TableHead>
              <TableHead>Kategori</TableHead>
              <TableHead>Penjualan</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {topItems.map((item) => (
              <TableRow key={item.name}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.category}</TableCell>
                <TableCell>{item.sales}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

