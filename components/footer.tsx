import { Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "254714666190"
  const whatsappHref = `https://wa.me/${whatsappNumber}`

  return (
    <footer className="bg-pink-50 border-t border-pink-200">
      <div className="container mx-auto px-4 py-12">
        {/* Email Subscription */}
        <div className="max-w-md mb-12">
          <h3 className="font-serif text-xl mb-4">Email Us for Any Assistance or Concerns.</h3>
          <div className="flex gap-2">
            <Input type="email" placeholder="Email" className="bg-pink-100/50 border-primary/20" />
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">→</Button>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-end gap-6 mb-8">
          <a
            href="https://www.instagram.com/blossoms___nairobi"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-primary hover:text-primary/70"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="text-primary hover:text-primary/70"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.47 14.37c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.17-1.34-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.41.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.02-.22-.53-.45-.46-.61-.47h-.52c-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.29 0 1.35.99 2.66 1.12 2.84.14.18 1.95 2.98 4.73 4.18.66.28 1.17.45 1.57.58.66.21 1.26.18 1.73.11.53-.08 1.6-.65 1.82-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.47 1.33 4.98L2 22l5.2-1.36c1.45.79 3.08 1.2 4.8 1.2 5.5 0 9.96-4.46 9.96-9.96S17.5 2.04 12 2.04m0 18.2c-1.56 0-3.09-.42-4.43-1.21l-.32-.19-3.09.81.82-3.02-.21-.33a8.22 8.22 0 0 1-1.26-4.42c0-4.54 3.69-8.23 8.23-8.23 4.54 0 8.23 3.69 8.23 8.23 0 4.54-3.69 8.23-8.23 8.23" />
            </svg>
          </a>
        </div>

        {/* Copyright */}
        <div className="text-sm text-muted-foreground">
          <p>© 2025, Blossoms created by Fenadis. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
