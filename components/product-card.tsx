"use client"

import Image from "next/image"
import Link from "next/link"
import { type Product, formatPrice } from "@/lib/data"
import { useCart } from "./cart-context"
import { Button } from "@/components/ui/button"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart()

  return (
    <div className="group bg-card rounded-sm overflow-hidden border border-border hover:shadow-lg transition-shadow duration-300">
      <Link href={`/product/${product.id}`}>
        <div className="relative aspect-square overflow-hidden bg-secondary">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      </Link>

      <div className="p-5">
        <Link href={`/product/${product.id}`}>
          <h3 className="text-xl font-medium mb-2 hover:text-primary transition-colors">{product.name}</h3>
        </Link>
        <p className="text-2xl font-semibold text-primary mb-4">{formatPrice(product.price)}</p>

        <div className="flex gap-3">
          <Button variant="outline" className="flex-1 text-base bg-transparent" asChild>
            <Link href={`/product/${product.id}`}>Детальніше</Link>
          </Button>
          <Button className="flex-1 text-base bg-primary hover:bg-primary/90" onClick={() => addToCart(product)}>
            Купити
          </Button>
        </div>
      </div>
    </div>
  )
}
