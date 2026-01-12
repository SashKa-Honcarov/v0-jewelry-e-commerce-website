"use client"

import { useState, useMemo, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { products } from "@/lib/data"
import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { SlidersHorizontal, X } from "lucide-react"

export function CatalogContent() {
  const searchParams = useSearchParams()
  const initialCategory = searchParams.get("category")

  const [selectedCategories, setSelectedCategories] = useState<string[]>(initialCategory ? [initialCategory] : [])
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([])
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  useEffect(() => {
    if (initialCategory) {
      setSelectedCategories([initialCategory])
    }
  }, [initialCategory])

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(product.category)
      const materialMatch = selectedMaterials.length === 0 || selectedMaterials.includes(product.material)
      return categoryMatch && materialMatch
    })
  }, [selectedCategories, selectedMaterials])

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category],
    )
  }

  const toggleMaterial = (material: string) => {
    setSelectedMaterials((prev) => (prev.includes(material) ? prev.filter((m) => m !== material) : [...prev, material]))
  }

  const clearFilters = () => {
    setSelectedCategories([])
    setSelectedMaterials([])
  }

  const categories = [
    { value: "ring", label: "Каблучки" },
    { value: "pendant", label: "Підвіски" },
  ]

  const materials = [
    { value: "gold", label: "Золото" },
    { value: "silver", label: "Срібло" },
    { value: "platinum", label: "Платина" },
  ]

  const hasActiveFilters = selectedCategories.length > 0 || selectedMaterials.length > 0

  const FilterSection = () => (
    <>
      <div>
        <h3 className="text-lg font-semibold mb-4">Тип прикраси</h3>
        <div className="flex flex-col gap-3">
          {categories.map((category) => (
            <div key={category.value} className="flex items-center gap-3">
              <Checkbox
                id={`category-${category.value}`}
                checked={selectedCategories.includes(category.value)}
                onCheckedChange={() => toggleCategory(category.value)}
              />
              <Label htmlFor={`category-${category.value}`} className="cursor-pointer text-base">
                {category.label}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-4">Матеріал</h3>
        <div className="flex flex-col gap-3">
          {materials.map((material) => (
            <div key={material.value} className="flex items-center gap-3">
              <Checkbox
                id={`material-${material.value}`}
                checked={selectedMaterials.includes(material.value)}
                onCheckedChange={() => toggleMaterial(material.value)}
              />
              <Label htmlFor={`material-${material.value}`} className="cursor-pointer text-base">
                {material.label}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {hasActiveFilters && (
        <Button variant="outline" className="mt-8 w-full bg-transparent" onClick={clearFilters}>
          Скинути фільтри
        </Button>
      )}
    </>
  )

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="flex lg:gap-12">
        {/* Desktop Filters */}
        <aside className="hidden lg:block w-64 shrink-0">
          <div className="sticky top-24">
            <h2 className="text-2xl font-semibold mb-6">Фільтри</h2>
            <FilterSection />
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1">
          {/* Mobile Filter Button */}
          <div className="lg:hidden mb-6 flex items-center justify-between">
            <Button variant="outline" className="gap-2 bg-transparent" onClick={() => setIsFilterOpen(true)}>
              <SlidersHorizontal className="w-4 h-4" />
              Фільтри
              {hasActiveFilters && (
                <span className="ml-1 w-5 h-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center">
                  {selectedCategories.length + selectedMaterials.length}
                </span>
              )}
            </Button>
            <span className="text-muted-foreground">Знайдено: {filteredProducts.length}</span>
          </div>

          {/* Mobile Filter Drawer */}
          {isFilterOpen && (
            <div className="fixed inset-0 z-50 lg:hidden">
              <div className="absolute inset-0 bg-foreground/50" onClick={() => setIsFilterOpen(false)} />
              <div className="absolute right-0 top-0 h-full w-80 bg-background p-6 overflow-y-auto">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-semibold">Фільтри</h2>
                  <button onClick={() => setIsFilterOpen(false)}>
                    <X className="w-6 h-6" />
                  </button>
                </div>
                <FilterSection />
              </div>
            </div>
          )}

          {/* Results count for desktop */}
          <div className="hidden lg:block mb-6">
            <span className="text-muted-foreground">Знайдено товарів: {filteredProducts.length}</span>
          </div>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground">На жаль, за вашим запитом нічого не знайдено</p>
              <Button variant="outline" className="mt-4 bg-transparent" onClick={clearFilters}>
                Скинути фільтри
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
