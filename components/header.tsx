import Link from "next/link"
import { Search, User, ShoppingCart, Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-primary hover:text-primary/70"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-primary hover:underline underline-offset-4">
              Home
            </Link>
            <Link href="/catalog" className="text-primary hover:underline underline-offset-4">
              Catalog
            </Link>
            <Link href="/contact" className="text-primary hover:underline underline-offset-4">
              Contact
            </Link>
          </nav>

          {/* Logo */}
          <Link href="/" className="absolute left-1/2 transform -translate-x-1/2">
            <div className="w-16 h-16 bg-pink-200 rounded-full flex items-center justify-center">
              <span className="text-xs font-serif text-primary text-center leading-tight px-2">Blossoms</span>
            </div>
          </Link>

          {/* Right Icons */}
          <div className="flex items-center gap-4">
            <button className="text-primary hover:text-primary/70">
              <Search className="w-5 h-5" />
            </button>
            <button className="text-primary hover:text-primary/70">
              <User className="w-5 h-5" />
            </button>
            <button className="text-primary hover:text-primary/70">
              <ShoppingCart className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <Link 
                href="/" 
                className="text-primary hover:underline underline-offset-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/catalog" 
                className="text-primary hover:underline underline-offset-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Catalog
              </Link>
              <Link 
                href="/contact" 
                className="text-primary hover:underline underline-offset-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
