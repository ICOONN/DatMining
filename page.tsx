'use client'

import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"
import { Package, Save, Plus } from 'lucide-react'

// This would typically come from an API
const initialInventoryItems = [
  { id: 1, name: "Beras", currentStock: 100, unit: "kg" },
  { id: 2, name: "Ayam", currentStock: 50, unit: "kg" },
  { id: 3, name: "Minyak Goreng", currentStock: 30, unit: "liter" },
  { id: 4, name: "Gula", currentStock: 25, unit: "kg" },
  { id: 5, name: "Teh", currentStock: 40, unit: "kotak" },
]

export default function AdminStockUpdate() {
  const [inventoryItems, setInventoryItems] = useState(initialInventoryItems)
  const [newItem, setNewItem] = useState({ name: '', currentStock: 0, unit: '' })

  const handleStockUpdate = (id: number, newStock: number) => {
    setInventoryItems(items =>
      items.map(item =>
        item.id === id ? { ...item, currentStock: newStock } : item
      )
    )
  }

  const handleNameUpdate = (id: number, newName: string) => {
    setInventoryItems(items =>
      items.map(item =>
        item.id === id ? { ...item, name: newName } : item
      )
    )
  }

  const handleUnitUpdate = (id: number, newUnit: string) => {
    setInventoryItems(items =>
      items.map(item =>
        item.id === id ? { ...item, unit: newUnit } : item
      )
    )
  }

  const handleAddItem = () => {
    if (newItem.name && newItem.currentStock && newItem.unit) {
      setInventoryItems(items => [...items, { ...newItem, id: items.length + 1 }])
      setNewItem({ name: '', currentStock: 0, unit: '' })
      toast({
        title: "Item Ditambahkan",
        description: `${newItem.name} telah ditambahkan ke inventaris.`,
      })
    } else {
      toast({
        title: "Error",
        description: "Mohon isi semua field untuk item baru.",
        variant: "destructive",
      })
    }
  }

  const handleSaveAll = () => {
    // In a real application, this would be an API call to update the backend
    console.log('Saving updated inventory:', inventoryItems)
    toast({
      title: "Stok Diperbarui",
      description: "Semua level stok telah berhasil diperbarui.",
    })
  }

  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold flex items-center gap-2">
            <Package className="h-6 w-6" />
            Update Stok Admin
          </CardTitle>
          <CardDescription>Perbarui level stok saat ini untuk item inventaris</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Item</TableHead>
                <TableHead>Stok Saat Ini</TableHead>
                <TableHead>Unit</TableHead>
                <TableHead>Aksi</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {inventoryItems.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>
                    <Input
                      value={item.name}
                      onChange={(e) => handleNameUpdate(item.id, e.target.value)}
                      className="w-full"
                    />
                  </TableCell>
                  <TableCell>
                    <Input
                      type="number"
                      value={item.currentStock}
                      onChange={(e) => handleStockUpdate(item.id, parseInt(e.target.value, 10))}
                      className="w-24"
                    />
                  </TableCell>
                  <TableCell>
                    <Input
                      value={item.unit}
                      onChange={(e) => handleUnitUpdate(item.id, e.target.value)}
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
                          title: "Stok Diperbarui",
                          description: `Stok ${item.name} telah diperbarui.`,
                        })
                      }}
                    >
                      Perbarui
                    </Button>
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
                    placeholder="Stok"
                    value={newItem.currentStock || ''}
                    onChange={(e) => setNewItem({...newItem, currentStock: parseInt(e.target.value, 10)})}
                    className="w-24"
                  />
                </TableCell>
                <TableCell>
                  <Input
                    placeholder="Unit"
                    value={newItem.unit}
                    onChange={(e) => setNewItem({...newItem, unit: e.target.value})}
                    className="w-24"
                  />
                </TableCell>
                <TableCell>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={handleAddItem}
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Tambah Item
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <div className="mt-4 flex justify-end">
            <Button onClick={handleSaveAll} className="flex items-center gap-2">
              <Save className="h-4 w-4" />
              Simpan Semua Perubahan
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

