"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useCart } from "@/components/cart-context"
import { formatPrice } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Minus, Plus, X, ShoppingBag, ArrowRight, Check } from "lucide-react"

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart()
  const [isCheckingOut, setIsCheckingOut] = useState(false)
  const [isOrderComplete, setIsOrderComplete] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault()
    setIsOrderComplete(true)
    clearCart()
    setFormData({ fullName: "", phone: "", email: "", address: "" })
  }

  if (isOrderComplete) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-lg mx-auto text-center">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-3xl font-light mb-4">Дякуємо за замовлення!</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Ваше замовлення успішно оформлено. Наш менеджер зв'яжеться з вами найближчим часом для підтвердження.
            </p>
            <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90" asChild>
              <Link href="/catalog">
                Продовжити покупки
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    )
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-lg mx-auto text-center">
            <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingBag className="w-10 h-10 text-muted-foreground" />
            </div>
            <h1 className="text-3xl font-light mb-4">Кошик порожній</h1>
            <p className="text-lg text-muted-foreground mb-8">Додайте прикраси до кошика, щоб оформити замовлення</p>
            <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90" asChild>
              <Link href="/catalog">
                Перейти до каталогу
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-secondary py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-light text-center">Кошик</h1>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="flex flex-col gap-6">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 md:gap-6 p-4 bg-card border border-border rounded-sm">
                  {/* Product Image */}
                  <Link href={`/product/${item.id}`} className="shrink-0">
                    <div className="relative w-24 h-24 md:w-32 md:h-32 bg-secondary rounded-sm overflow-hidden">
                      <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                    </div>
                  </Link>

                  {/* Product Details */}
                  <div className="flex-1 flex flex-col">
                    <div className="flex justify-between items-start">
                      <div>
                        <Link href={`/product/${item.id}`}>
                          <h3 className="text-lg font-medium hover:text-primary transition-colors">{item.name}</h3>
                        </Link>
                        <p className="text-primary font-semibold mt-1">{formatPrice(item.price)}</p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="p-1 text-muted-foreground hover:text-foreground transition-colors"
                        aria-label="Видалити"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>

                    {/* Quantity Controls */}
                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 flex items-center justify-center border border-border rounded-sm hover:bg-secondary transition-colors"
                          aria-label="Зменшити кількість"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-10 text-center font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center border border-border rounded-sm hover:bg-secondary transition-colors"
                          aria-label="Збільшити кількість"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-lg font-semibold">{formatPrice(item.price * item.quantity)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary & Checkout */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-secondary p-6 rounded-sm">
              {!isCheckingOut ? (
                <>
                  <h2 className="text-2xl font-semibold mb-6">Підсумок</h2>

                  <div className="flex flex-col gap-4 mb-6">
                    <div className="flex justify-between text-lg">
                      <span className="text-muted-foreground">Товари ({items.length})</span>
                      <span>{formatPrice(totalPrice)}</span>
                    </div>
                    <div className="flex justify-between text-lg">
                      <span className="text-muted-foreground">Доставка</span>
                      <span>Безкоштовно</span>
                    </div>
                    <div className="border-t border-border pt-4 flex justify-between text-xl font-semibold">
                      <span>Разом</span>
                      <span className="text-primary">{formatPrice(totalPrice)}</span>
                    </div>
                  </div>

                  <Button
                    size="lg"
                    className="w-full text-lg py-6 bg-primary hover:bg-primary/90"
                    onClick={() => setIsCheckingOut(true)}
                  >
                    Оформити замовлення
                  </Button>
                </>
              ) : (
                <>
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-semibold">Оформлення</h2>
                    <button
                      onClick={() => setIsCheckingOut(false)}
                      className="text-sm text-muted-foreground hover:text-foreground"
                    >
                      Назад
                    </button>
                  </div>

                  <form onSubmit={handleCheckout} className="flex flex-col gap-4">
                    <div>
                      <Label htmlFor="fullName" className="text-base mb-2 block">
                        ПІБ
                      </Label>
                      <Input
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="Іванов Іван Іванович"
                        required
                        className="h-12"
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone" className="text-base mb-2 block">
                        Телефон
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+380"
                        required
                        className="h-12"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-base mb-2 block">
                        Email
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        required
                        className="h-12"
                      />
                    </div>

                    <div>
                      <Label htmlFor="address" className="text-base mb-2 block">
                        Адреса доставки
                      </Label>
                      <Input
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        placeholder="Місто, вулиця, будинок"
                        required
                        className="h-12"
                      />
                    </div>

                    <div className="border-t border-border pt-4 mt-2 flex justify-between text-xl font-semibold">
                      <span>До сплати</span>
                      <span className="text-primary">{formatPrice(totalPrice)}</span>
                    </div>

                    <Button type="submit" size="lg" className="w-full text-lg py-6 mt-2 bg-primary hover:bg-primary/90">
                      Підтвердити замовлення
                    </Button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
