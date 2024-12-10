'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle } from 'lucide-react'

const alerts = [
  { item: "Beras", currentStock: 10, requiredStock: 50 },
  { item: "Ayam", currentStock: 5, requiredStock: 30 },
  { item: "Minyak Goreng", currentStock: 2, requiredStock: 20 },
]

export function StockAlerts() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Stock Alerts</CardTitle>
      </CardHeader>
      <CardContent>
        {alerts.map((alert) => (
          <Alert variant="destructive" key={alert.item}>
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Low Stock: {alert.item}</AlertTitle>
            <AlertDescription>
              Current stock: {alert.currentStock}, Required: {alert.requiredStock}
            </AlertDescription>
          </Alert>
        ))}
      </CardContent>
    </Card>
  )
}

