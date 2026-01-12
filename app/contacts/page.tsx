"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Mail, Clock, Send, Check } from "lucide-react"

export default function ContactsPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-secondary py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6">Контакти</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Маєте запитання? Ми завжди раді допомогти вам знайти ідеальну прикрасу
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-light mb-8">Наші контакти</h2>

              <div className="flex flex-col gap-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Адреса</h3>
                    <p className="text-muted-foreground">м. Київ, вул. Хрещатик, 1</p>
                    <p className="text-muted-foreground">ТЦ «Глобус», 2 поверх</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Телефон</h3>
                    <p className="text-muted-foreground">+380 44 123 45 67</p>
                    <p className="text-muted-foreground">+380 67 123 45 67</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Email</h3>
                    <p className="text-muted-foreground">info@aurum.ua</p>
                    <p className="text-muted-foreground">sales@aurum.ua</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Години роботи</h3>
                    <p className="text-muted-foreground">Пн-Пт: 10:00 - 20:00</p>
                    <p className="text-muted-foreground">Сб-Нд: 11:00 - 18:00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-light mb-8">Напишіть нам</h2>

              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div>
                  <Label htmlFor="name" className="text-base mb-2 block">
                    Ваше ім'я
                  </Label>
                  <Input id="name" placeholder="Введіть ваше ім'я" required className="h-12 text-base" />
                </div>

                <div>
                  <Label htmlFor="email" className="text-base mb-2 block">
                    Email
                  </Label>
                  <Input id="email" type="email" placeholder="your@email.com" required className="h-12 text-base" />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-base mb-2 block">
                    Телефон
                  </Label>
                  <Input id="phone" type="tel" placeholder="+380" className="h-12 text-base" />
                </div>

                <div>
                  <Label htmlFor="message" className="text-base mb-2 block">
                    Повідомлення
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Напишіть ваше повідомлення..."
                    required
                    className="min-h-32 text-base resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="text-lg py-6 bg-primary hover:bg-primary/90"
                  disabled={isSubmitted}
                >
                  {isSubmitted ? (
                    <>
                      <Check className="w-5 h-5 mr-2" />
                      Повідомлення надіслано
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Надіслати
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-96 bg-secondary flex items-center justify-center">
        <div className="text-center">
          <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
          <p className="text-lg text-muted-foreground">м. Київ, вул. Хрещатик, 1</p>
        </div>
      </section>
    </div>
  )
}
