'use client'

import * as React from "react"
import { Toaster as SonnerToaster } from "sonner"

const ToastContext = React.createContext<{
  toast: (props: { title: string; description?: string }) => void
}>({
  toast: () => {},
})

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = React.useState<Array<{ id: string; title: string; description?: string }>>([])

  const addToast = React.useCallback(({ title, description }: { title: string; description?: string }) => {
    const id = Math.random().toString(36).substr(2, 9)
    setToasts((prevToasts) => [...prevToasts, { id, title, description }])
    setTimeout(() => {
      setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id))
    }, 3000)
  }, [])

  return (
    <ToastContext.Provider value={{ toast: addToast }}>
      {children}
      <SonnerToaster>
        {toasts.map((toast) => (
          <SonnerToaster.Toast key={toast.id} title={toast.title} description={toast.description} />
        ))}
      </SonnerToaster>
    </ToastContext.Provider>
  )
}

export function useToast() {
  const context = React.useContext(ToastContext)
  if (context === undefined) {
    throw new Error("useToast must be used within a ToastProvider")
  }
  return context
}

export const toast = (props: { title: string; description?: string }) => {
  const { toast } = useToast()
  toast(props)
}

