"use client"

import Link from "next/link"
import { ShoppingBag, Menu, X } from "lucide-react"
import { useCart } from "./cart-context"
import { useState } from "react"

export function Header() {
  const { totalItems } = useCart()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-3xl font-semibold tracking-wider text-foreground">
            Aurum
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            <Link href="/" className="text-lg text-foreground/80 hover:text-foreground transition-colors">
              Головна
            </Link>
            <Link href="/catalog" className="text-lg text-foreground/80 hover:text-foreground transition-colors">
              Каталог
            </Link>
            <Link href="/about" className="text-lg text-foreground/80 hover:text-foreground transition-colors">
              Про нас
            </Link>
            <Link href="/contacts" className="text-lg text-foreground/80 hover:text-foreground transition-colors">
              Контакти
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/cart" className="relative p-2">
              <ShoppingBag className="w-6 h-6 text-foreground" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>

            {/* Mobile Menu Toggle */}
            <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-2 border-t border-border mt-4">
            <div className="flex flex-col gap-4">
              <Link
                href="/"
                className="text-lg text-foreground/80 hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Головна
              </Link>
              <Link
                href="/catalog"
                className="text-lg text-foreground/80 hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Каталог
              </Link>
              <Link
                href="/about"
                className="text-lg text-foreground/80 hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Про нас
              </Link>
              <Link
                href="/contacts"
                className="text-lg text-foreground/80 hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Контакти
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
