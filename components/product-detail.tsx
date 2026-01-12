"use client"

import Image from "next/image"
import Link from "next/link"
import { type Product, formatPrice, products } from "@/lib/data"
import { useCart } from "@/components/cart-context"
import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components/product-card"
import { ArrowLeft, ShoppingBag, Check } from "lucide-react"
import { useState } from "react"

const materialLabels: Record<string, string> = {
  gold: "Золото",
  silver: "Срібло",
  platinum: "Платина",
}

const categoryLabels: Record<string, string> = {
  ring: "Каблучка",
  pendant: "Підвіска",
}

export function ProductDetail({ product }: { product: Product }) {
  const { addToCart } = useCart()
  const [isAdded, setIsAdded] = useState(false)

  const handleAddToCart = () => {
    addToCart(product)
    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 2000)
  }

  const relatedProducts = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4)

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="bg-secondary py-4">
        <div className="container mx-auto px-6">
          <Link
            href="/catalog"
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Повернутись до каталогу
          </Link>
        </div>
      </div>

      {/* Product Details */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="relative aspect-square bg-secondary rounded-sm overflow-hidden">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Product Info */}
            <div className="flex flex-col justify-center">
              <div className="mb-2">
                <span className="text-sm text-muted-foreground uppercase tracking-wider">
                  {categoryLabels[product.category]}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-light mb-4">{product.name}</h1>

              <p className="text-3xl font-semibold text-primary mb-6">{formatPrice(product.price)}</p>

              <p className="text-lg text-muted-foreground leading-relaxed mb-8">{product.description}</p>

              {/* Product Specs */}
              <div className="border-t border-b border-border py-6 mb-8">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-sm text-muted-foreground">Матеріал</span>
                    <p className="text-lg font-medium">{materialLabels[product.material]}</p>
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">Категорія</span>
                    <p className="text-lg font-medium">{categoryLabels[product.category]}</p>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-4">
                <Button
                  size="lg"
                  className="flex-1 text-lg py-6 bg-primary hover:bg-primary/90"
                  onClick={handleAddToCart}
                  disabled={isAdded}
                >
                  {isAdded ? (
                    <>
                      <Check className="w-5 h-5 mr-2" />
                      Додано до кошика
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-5 h-5 mr-2" />
                      Купити
                    </>
                  )}
                </Button>
              </div>

              {isAdded && (
                <div className="mt-4">
                  <Link href="/cart" className="text-primary hover:underline">
                    Перейти до кошика →
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-light mb-8">Схожі товари</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
