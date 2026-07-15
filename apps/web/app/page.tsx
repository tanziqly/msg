import { Nav } from "@/components/nav"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Team } from "@/components/team"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main className="bg-white">
      <Nav />
      <Hero />
      <About />
      <Services />

      <Team />
      <Contact />
      <Footer />
    </main>
  )
}
