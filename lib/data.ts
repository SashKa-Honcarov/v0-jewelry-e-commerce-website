export interface Product {
  id: string
  name: string
  price: number
  image: string
  category: "ring" | "pendant"
  material: "gold" | "silver" | "platinum"
  description: string
}

export const products: Product[] = [
  {
    id: "1",
    name: "Каблучка «Вічність»",
    price: 12500,
    image: "/elegant-gold-ring-with-diamond-on-white-background.jpg",
    category: "ring",
    material: "gold",
    description:
      "Вишукана золота каблучка з діамантом. Ідеальний вибір для особливих моментів. Ручна робота майстрів з багаторічним досвідом.",
  },
  {
    id: "2",
    name: "Підвіска «Крапля»",
    price: 8900,
    image: "/elegant-silver-teardrop-pendant-necklace-on-white-.jpg",
    category: "pendant",
    material: "silver",
    description: "Елегантна срібна підвіска у формі краплі. Мінімалістичний дизайн підкреслить вашу природну красу.",
  },
  {
    id: "3",
    name: "Каблучка «Сяйво»",
    price: 18500,
    image: "/platinum-engagement-ring-with-gemstone-on-white-ba.jpg",
    category: "ring",
    material: "platinum",
    description: "Розкішна платинова каблучка з дорогоцінним камінням. Символ справжньої розкоші та вишуканості.",
  },
  {
    id: "4",
    name: "Підвіска «Серце»",
    price: 15200,
    image: "/gold-heart-pendant-necklace-on-white-background.jpg",
    category: "pendant",
    material: "gold",
    description: "Золота підвіска у формі серця. Ідеальний подарунок для коханої людини.",
  },
  {
    id: "5",
    name: "Каблучка «Мінімал»",
    price: 6800,
    image: "/minimalist-silver-band-ring-on-white-background.jpg",
    category: "ring",
    material: "silver",
    description: "Стильна срібна каблучка мінімалістичного дизайну. Підходить для щоденного носіння.",
  },
  {
    id: "6",
    name: "Підвіска «Зірка»",
    price: 22000,
    image: "/platinum-star-pendant-with-diamonds-on-white-backg.jpg",
    category: "pendant",
    material: "platinum",
    description: "Платинова підвіска з діамантами у формі зірки. Сяйво, яке підкорює серця.",
  },
  {
    id: "7",
    name: "Каблучка «Класика»",
    price: 14800,
    image: "/classic-gold-wedding-band-ring-on-white-background.jpg",
    category: "ring",
    material: "gold",
    description: "Класична золота обручка. Традиційний дизайн, що ніколи не виходить з моди.",
  },
  {
    id: "8",
    name: "Підвіска «Листок»",
    price: 7500,
    image: "/delicate-silver-leaf-pendant-necklace-on-white-bac.jpg",
    category: "pendant",
    material: "silver",
    description: "Витончена срібна підвіска у формі листка. Натхненна красою природи.",
  },
]

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat("uk-UA", {
    style: "currency",
    currency: "UAH",
    minimumFractionDigits: 0,
  }).format(price)
}
