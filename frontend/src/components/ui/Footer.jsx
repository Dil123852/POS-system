import { Link } from "react-router-dom"
import { Youtube, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full bg-[#e5ffe7] py-12 px-6 md:px-10">
      <div className="container mx-auto">
        {/* Main footer links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
          {/* Services Column */}
          <div className="space-y-4">
            <h3 className="text-[#0f172a] font-medium text-lg">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/counseling" className="text-[#0f172a] hover:text-[#54ff5f] transition-colors">
                  Counseling Sessions
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-[#0f172a] hover:text-[#54ff5f] transition-colors">
                  Self-Help Resources
                </Link>
              </li>
              <li>
                <Link to="/forum" className="text-[#0f172a] hover:text-[#54ff5f] transition-colors">
                  Community Forum
                </Link>
              </li>
            </ul>
          </div>

          {/* Join ArogyaMind Column */}
          <div className="space-y-4">
            <h3 className="text-[#0f172a] font-medium text-lg">Join ArogyaMind</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/become-counselor" className="text-[#0f172a] hover:text-[#54ff5f] transition-colors">
                  Become a Counselor
                </Link>
              </li>
              <li>
                <Link to="/content-creator" className="text-[#0f172a] hover:text-[#54ff5f] transition-colors">
                  Become a Content Creator
                </Link>
              </li>
              <li>
                <Link to="/membership" className="text-[#0f172a] hover:text-[#54ff5f] transition-colors">
                  Membership Plans
                </Link>
              </li>
            </ul>
          </div>

          {/* About Us Column */}
          <div className="space-y-4">
            <h3 className="text-[#0f172a] font-medium text-lg">About Us</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/mission" className="text-[#0f172a] hover:text-[#54ff5f] transition-colors">
                  Our Mission & Vision
                </Link>
              </li>
              <li>
                <Link to="/FAQ" className="text-[#0f172a] hover:text-[#54ff5f] transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-[#0f172a] hover:text-[#54ff5f] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Terms Column */}
          <div className="space-y-4">
            <h3 className="text-[#0f172a] font-medium text-lg">Terms</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/privacy" className="text-[#0f172a] hover:text-[#54ff5f] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-[#0f172a] hover:text-[#54ff5f] transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/refund" className="text-[#0f172a] hover:text-[#54ff5f] transition-colors">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Organizations Column */}
          <div className="space-y-4">
            <h3 className="text-[#0f172a] font-medium text-lg">Organizations</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/corporate" className="text-[#0f172a] hover:text-[#54ff5f] transition-colors">
                  Request a Corporate Session
                </Link>
              </li>
              <li>
                <Link to="/partner" className="text-[#0f172a] hover:text-[#54ff5f] transition-colors">
                  Partner with ArogyaMind
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section with copyright and social icons */}
        <div className="pt-8 border-t border-[#54ff5f]/30 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#0f172a] mb-4 md:mb-0">@ 2025 - All rights reserved</p>

          <div className="flex space-x-6">
            <a href="#" className="text-[#0f172a] hover:text-[#54ff5f] transition-colors">
              <Youtube size={20} />
              <span className="sr-only">YouTube</span>
            </a>
            <a href="#" className="text-[#0f172a] hover:text-[#54ff5f] transition-colors">
              <Facebook size={20} />
              <span className="sr-only">Facebook</span>
            </a>
            <a href="#" className="text-[#0f172a] hover:text-[#54ff5f] transition-colors">
              <Twitter size={20} />
              <span className="sr-only">Twitter</span>
            </a>
            <a href="#" className="text-[#0f172a] hover:text-[#54ff5f] transition-colors">
              <Instagram size={20} />
              <span className="sr-only">Instagram</span>
            </a>
            <a href="#" className="text-[#0f172a] hover:text-[#54ff5f] transition-colors">
              <Linkedin size={20} />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

