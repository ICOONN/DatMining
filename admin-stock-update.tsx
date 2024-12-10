'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"
import { Package, Save } from 'lucide-react'

const initialInventoryItems = [
  { id: 1, name: "Beras", currentStock: 100, unit: "kg" },
  { id: 2, name: "Ayam", currentStock: 50, unit: "kg" },
  { id: 3, name: "Minyak Goreng", currentStock: 30, unit: "liter" },
  { id: 4, name: "Gula", currentStock: 25, unit: "kg" },
  { id: 5, name: "Teh", currentStock: 40, unit: "kotak" },
]

export function AdminStockUpdate() {
  const [inventoryItems, setInventoryItems] = useState(initialInventoryItems)

  const handleStockUpdate = (id: number, newStock: number) => {
    setInventoryItems(items =>
      items.map(item =>
        item.id === id ? { ...item, currentStock: newStock } : item
      )
    )
  }

  const handleSaveAll = () => {
    console.log('Saving updated inventory:', inventoryItems)
    toast({
      title: "Stock Updated",
      description: "All stock levels have been successfully updated.",
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-bold flex items-center gap-2">
          <Package className="h-6 w-6" />
          Admin Stock Update
        </CardTitle>
        <CardDescription>Update current stock levels for inventory items</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Item</TableHead>
              <TableHead>Current Stock</TableHead>
              <TableHead>Unit</TableHead>
              <TableHead>New Stock</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {inventoryItems.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.currentStock}</TableCell>
                <TableCell>{item.unit}</TableCell>
                <TableCell>
                  <Input
                    type="number"
                    defaultValue={item.currentStock}
                    onChange={(e) => handleStockUpdate(item.id, parseInt(e.target.value, 10))}
                    className="w-24"
                  />
                </TableCell>
                <TableCell>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => {
                      console.log(`Updating ${item.name} stock`)
                      toast({
                        title: "Stock Updated",
                        description: `${item.name} stock has been updated.`,
                      })
                    }}
                  >
                    Update
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="mt-4 flex justify-end">
          <Button onClick={handleSaveAll} className="flex items-center gap-2">
            <Save className="h-4 w-4" />
            Save All Changes
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

