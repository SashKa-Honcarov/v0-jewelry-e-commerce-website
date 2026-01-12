import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-semibold mb-4">Aurum</h3>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
              Вишукані ювелірні прикраси ручної роботи. Кожен виріб — це унікальне поєднання традицій та сучасного
              дизайну.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Навігація</h4>
            <div className="flex flex-col gap-2">
              <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                Головна
              </Link>
              <Link href="/catalog" className="text-muted-foreground hover:text-foreground transition-colors">
                Каталог
              </Link>
              <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                Про нас
              </Link>
              <Link href="/contacts" className="text-muted-foreground hover:text-foreground transition-colors">
                Контакти
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Контакти</h4>
            <div className="flex flex-col gap-2 text-muted-foreground">
              <p>+380 44 123 45 67</p>
              <p>info@aurum.ua</p>
              <p>м. Київ, вул. Хрещатик, 1</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>© 2026 Aurum. Усі права захищено.</p>
        </div>
      </div>
    </footer>
  )
}
