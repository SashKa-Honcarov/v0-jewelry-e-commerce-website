import { Suspense } from "react"
import { CatalogContent } from "@/components/catalog-content"

export default function CatalogPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Page Header */}
      <div className="bg-secondary py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-light text-center">Каталог</h1>
          <p className="text-center text-muted-foreground text-lg mt-4">Оберіть прикрасу, що підкреслить вашу красу</p>
        </div>
      </div>

      <Suspense
        fallback={
          <div className="container mx-auto px-6 py-12">
            <p className="text-lg text-muted-foreground text-center">Завантаження...</p>
          </div>
        }
      >
        <CatalogContent />
      </Suspense>
    </div>
  )
}
