import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const menuItems = [
  {
    category: "Minuman",
    items: [
      { name: "Melon squash", price: 10000, isNew: true },
      { name: "Strawberry squash", price: 10000, isNew: true },
      { name: "Leci squash", price: 10000, isNew: true },
      { name: "Gula aren kopi", price: 10000, isNew: true },
      { name: "Kopi susu", price: 10000, isNew: true },
      { name: "Teh manis", price: 5000, isNew: true },
    ]
  },
  {
    category: "Makanan",
    items: [
      { name: "Mie lava", price: 10000, isNew: true },
      { name: "Pangsit lava", price: 12000, isNew: true },
      { name: "Pisang nugget", price: 11000, isNew: true },
      { name: "Pisang lumpia", price: 12000, isNew: true },
    ]
  }
]

export function NewMenu() {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6 text-center">Menu Baru Kami</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {menuItems.map((category) => (
          <Card key={category.category}>
            <CardHeader>
              <CardTitle>{category.category}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {category.items.map((item) => (
                  <li key={item.name} className="flex justify-between items-center">
                    <span className="font-medium">{item.name}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm">Rp {item.price.toLocaleString('id-ID')}</span>
                      {item.isNew && <Badge variant="secondary">Baru</Badge>}
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

