import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { products } from "@/lib/data"
import { ProductCard } from "@/components/product-card"
import { ArrowRight } from "lucide-react"

export default function HomePage() {
  const featuredProducts = products.slice(0, 4)

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-secondary">
        <div className="container mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight text-balance mb-6">
                Вишуканість у кожній деталі
              </h1>
              <p className="text-xl text-muted-foreground mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                Відкрийте для себе колекцію ювелірних прикрас ручної роботи, де кожен виріб розповідає власну історію
                краси та елегантності.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90" asChild>
                  <Link href="/catalog">
                    Переглянути каталог
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent" asChild>
                  <Link href="/about">Дізнатись більше</Link>
                </Button>
              </div>
            </div>
            <div className="relative aspect-square max-w-lg mx-auto">
              <Image
                src="/elegant-jewelry-collection-rings-and-pendants-on-b.jpg"
                alt="Колекція ювелірних прикрас"
                fill
                className="object-cover rounded-sm"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-light text-center mb-4">Наші категорії</h2>
          <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            Оберіть категорію та знайдіть прикрасу своєї мрії
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Link href="/catalog?category=ring" className="group">
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-secondary">
                <Image
                  src="/luxury-gold-and-silver-rings-collection-on-white-b.jpg"
                  alt="Каблучки"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-foreground/20 group-hover:bg-foreground/30 transition-colors" />
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-3xl font-medium text-white">Каблучки</h3>
                </div>
              </div>
            </Link>

            <Link href="/catalog?category=pendant" className="group">
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-secondary">
                <Image
                  src="/elegant-pendant-necklaces-collection-on-white-back.jpg"
                  alt="Підвіски"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-foreground/20 group-hover:bg-foreground/30 transition-colors" />
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-3xl font-medium text-white">Підвіски</h3>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-light mb-2">Обрані вироби</h2>
              <p className="text-muted-foreground text-lg">Найпопулярніші прикраси нашої колекції</p>
            </div>
            <Button variant="outline" className="mt-4 md:mt-0 text-lg bg-transparent" asChild>
              <Link href="/catalog">
                Дивитись усі
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div className="relative aspect-square">
              <Image
                src="/jewelry-craftsman-hands-working-on-gold-ring-close.jpg"
                alt="Ювелірна майстерня"
                fill
                className="object-cover rounded-sm"
              />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-light mb-6">Ручна робота з любов'ю</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Кожен наш виріб створюється вручну досвідченими майстрами, які вкладають душу в кожну деталь. Ми
                використовуємо лише найякісніші матеріали та дорогоцінні метали.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Понад 15 років ми створюємо прикраси, які стають символами найважливіших моментів життя наших клієнтів.
              </p>
              <Button variant="outline" className="text-lg bg-transparent" asChild>
                <Link href="/about">
                  Дізнатись більше про нас
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
