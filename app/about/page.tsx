import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-secondary py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6">Про нас</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Ми створюємо вишукані ювелірні прикраси, що стають символами найважливіших моментів вашого життя
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div className="relative aspect-[4/5]">
              <Image
                src="/jewelry-workshop-interior-with-tools-and-gems-on-w.jpg"
                alt="Ювелірна майстерня"
                fill
                className="object-cover rounded-sm"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-light mb-6">Наша історія</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Aurum було засновано у 2010 році з простою ідеєю — створювати прикраси, які несуть в собі історію та
                емоції. Наша майстерня почалась з невеликої кімнати, де працював лише один майстер.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Сьогодні ми — команда досвідчених ювелірів, які поділяють спільну пристрасть до досконалості. Кожен
                виріб створюється вручну з використанням традиційних технік та сучасних інновацій.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                За ці роки ми створили тисячі унікальних прикрас, кожна з яких стала частиною чиєїсь особливої історії.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-light text-center mb-12">Наші цінності</h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-light text-primary">01</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Якість</h3>
              <p className="text-muted-foreground leading-relaxed">
                Ми використовуємо лише найякісніші матеріали та дорогоцінні метали найвищої проби
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-light text-primary">02</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Майстерність</h3>
              <p className="text-muted-foreground leading-relaxed">
                Кожен виріб створюється вручну досвідченими майстрами з багаторічним стажем
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-light text-primary">03</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Унікальність</h3>
              <p className="text-muted-foreground leading-relaxed">
                Ми віримо, що кожна прикраса повинна бути такою ж особливою, як і її власник
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-light mb-6">Наша команда</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                За кожним виробом Aurum стоїть команда талановитих майстрів, дизайнерів та консультантів. Ми об'єднані
                спільною метою — дарувати радість та створювати прикраси, які будуть передаватись з покоління в
                покоління.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Наші майстри постійно вдосконалюють свої навички та слідкують за останніми тенденціями у світі
                ювелірного мистецтва.
              </p>
              <Button variant="outline" className="text-lg bg-transparent" asChild>
                <Link href="/contacts">
                  Зв'язатись з нами
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
            <div className="relative aspect-square order-1 lg:order-2">
              <Image
                src="/jewelry-team-craftsmen-working-together-in-modern-.jpg"
                alt="Команда Aurum"
                fill
                className="object-cover rounded-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6">Готові знайти свою ідеальну прикрасу?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Перегляньте нашу колекцію та оберіть прикрасу, яка підкреслить вашу індивідуальність
          </p>
          <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90" asChild>
            <Link href="/catalog">
              Переглянути каталог
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
