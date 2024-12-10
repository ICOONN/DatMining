'use client'

import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"
import { Package, Save, Plus } from 'lucide-react'

const initialInventoryItems = [
  { id: 1, name: "Pangsit Lava", estimatedStock: 100, unitsSold: 0, remainingStock: 100, unit: "porsi" },
  { id: 2, name: "Mie Lava", estimatedStock: 80, unitsSold: 0, remainingStock: 80, unit: "porsi" },
  { id: 3, name: "Nuget Pisang", estimatedStock: 50, unitsSold: 0, remainingStock: 50, unit: "porsi" },
  { id: 4, name: "Pisang Lumpia", estimatedStock: 50, unitsSold: 0, remainingStock: 50, unit: "porsi" },
  { id: 5, name: "Melon squash", estimatedStock: 30, unitsSold: 0, remainingStock: 30, unit: "gelas" },
  { id: 6, name: "Strawberry squash", estimatedStock: 30, unitsSold: 0, remainingStock: 30, unit: "gelas" },
  { id: 7, name: "Leci squash", estimatedStock: 30, unitsSold: 0, remainingStock: 30, unit: "gelas" },
  { id: 8, name: "Gula aren kopi", estimatedStock: 40, unitsSold: 0, remainingStock: 40, unit: "gelas" },
  { id: 9, name: "Kopi susu", estimatedStock: 40, unitsSold: 0, remainingStock: 40, unit: "gelas" },
  { id: 10, name: "Teh manis", estimatedStock: 50, unitsSold: 0, remainingStock: 50, unit: "gelas" },
]

export function InventoryManagement() {
  const [inventoryItems, setInventoryItems] = useState(initialInventoryItems)
  const [newItem, setNewItem] = useState({ name: '', estimatedStock: 0, unitsSold: 0, remainingStock: 0, unit: '' })

  const handleItemUpdate = (id: number, field: keyof typeof newItem, value: string | number) => {
    setInventoryItems(items =>
      items.map(item => {
        if (item.id === id) {
          const updatedItem = { ...item, [field]: value }
          if (field === 'estimatedStock' || field === 'unitsSold') {
            updatedItem.remainingStock = updatedItem.estimatedStock - updatedItem.unitsSold
          }
          return updatedItem
        }
        return item
      })
    )
  }

  const handleAddItem = () => {
    if (newItem.name && newItem.estimatedStock && newItem.unit) {
      const addedItem = {
        ...newItem,
        id: inventoryItems.length + 1,
        remainingStock: newItem.estimatedStock - newItem.unitsSold
      }
      setInventoryItems(items => [...items, addedItem])
      setNewItem({ name: '', estimatedStock: 0, unitsSold: 0, remainingStock: 0, unit: '' })
      toast({
        title: "Item Ditambahkan",
        description: `${newItem.name} telah ditambahkan ke inventaris.`,
      })
    } else {
      toast({
        title: "Error",
        description: "Mohon isi nama item, estimasi stok, dan unit untuk item baru.",
        variant: "destructive",
      })
    }
  }

  const handleSaveAll = () => {
    console.log('Menyimpan inventaris yang diperbarui:', inventoryItems)
    toast({
      title: "Inventaris Diperbarui",
      description: "Semua perubahan inventaris telah berhasil disimpan.",
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-bold flex items-center gap-2">
          <Package className="h-6 w-6" />
          Manajemen Inventaris
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Item</TableHead>
              <TableHead>Estimasi Stok</TableHead>
              <TableHead>Terjual Hari Ini</TableHead>
              <TableHead>Sisa Stok</TableHead>
              <TableHead>Unit</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {inventoryItems.map((item) => (
              <TableRow key={item.id}>
                <TableCell>
                  <Input
                    value={item.name}
                    onChange={(e) => handleItemUpdate(item.id, 'name', e.target.value)}
                    className="w-full"
                  />
                </TableCell>
                <TableCell>
                  <Input
                    type="number"
                    value={item.estimatedStock}
                    onChange={(e) => handleItemUpdate(item.id, 'estimatedStock', parseInt(e.target.value, 10))}
                    className="w-20"
                  />
                </TableCell>
                <TableCell>
                  <Input
                    type="number"
                    value={item.unitsSold}
                    onChange={(e) => handleItemUpdate(item.id, 'unitsSold', parseInt(e.target.value, 10))}
                    className="w-20"
                  />
                </TableCell>
                <TableCell>{item.remainingStock}</TableCell>
                <TableCell>
                  <Input
                    value={item.unit}
                    onChange={(e) => handleItemUpdate(item.id, 'unit', e.target.value)}
                    className="w-20"
                  />
                </TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell>
                <Input
                  placeholder="Nama Item Baru"
                  value={newItem.name}
                  onChange={(e) => setNewItem({...newItem, name: e.target.value})}
                  className="w-full"
                />
              </TableCell>
              <TableCell>
                <Input
                  type="number"
                  placeholder="Estimasi Stok"
                  value={newItem.estimatedStock || ''}
                  onChange={(e) => setNewItem({...newItem, estimatedStock: parseInt(e.target.value, 10)})}
                  className="w-20"
                />
              </TableCell>
              <TableCell>
                <Input
                  type="number"
                  placeholder="Terjual"
                  value={newItem.unitsSold || ''}
                  onChange={(e) => setNewItem({...newItem, unitsSold: parseInt(e.target.value, 10)})}
                  className="w-20"
                />
              </TableCell>
              <TableCell>{newItem.estimatedStock - newItem.unitsSold}</TableCell>
              <TableCell>
                <Input
                  placeholder="Unit"
                  value={newItem.unit}
                  onChange={(e) => setNewItem({...newItem, unit: e.target.value})}
                  className="w-20"
                />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <div className="mt-4 flex justify-between">
          <Button 
            onClick={handleAddItem}
            className="flex items-center gap-2"
          >
            <Plus className="h-4 w-4" />
            Tambah Item Baru
          </Button>
          <Button onClick={handleSaveAll} className="flex items-center gap-2">
            <Save className="h-4 w-4" />
            Simpan Semua Perubahan
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

