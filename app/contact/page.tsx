import { Header } from "@/components/header"
import { AnnouncementBar } from "@/components/announcement-bar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <AnnouncementBar />
      <Header />

      {/* Page Header */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="font-serif text-5xl md:text-6xl text-center text-balance">Contact</h1>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-pink-50 py-16">
        <div className="container mx-auto px-4">
          <form className="max-w-2xl mx-auto space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Input placeholder="Name" className="bg-pink-100/50 border-primary/20" />
              <Input type="email" placeholder="Email *" required className="bg-pink-100/50 border-primary/20" />
            </div>
            <Input type="tel" placeholder="Phone number" className="bg-pink-100/50 border-primary/20" />
            <Textarea placeholder="Comment" rows={6} className="bg-pink-100/50 border-primary/20 resize-none" />
            <Button type="submit" size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Send
            </Button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  )
}
