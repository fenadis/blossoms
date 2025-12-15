import { Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
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
            href="https://www.instagram.com/blossoms___nairobi"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="text-primary hover:text-primary/70"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
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
