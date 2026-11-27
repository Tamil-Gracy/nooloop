
import { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

function Navbar() {
   const [menuOpen, setMenuOpen] = useState(false);

   function closeMenu() {
      setMenuOpen(false);
   }

   return (
      <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur-xl">

         {/* Header */}
         <div className="container-wide flex h-24 items-center justify-between">

            {/* Logo */}
            <a href="#home" onClick={closeMenu}>
               <img
                  src="/nooloop-logo.png"
                  alt="Nooloop"
                  className="h-20 w-auto max-w-[280px] object-contain"
               />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-8 lg:flex">

               <a
                  href="#approach"
                  className="text-sm font-semibold text-slate-600 transition hover:text-pink"
               >
                  Our approach
               </a>

               <a
                  href="#materials"
                  className="text-sm font-semibold text-slate-600 transition hover:text-pink"
               >
                  Materials
               </a>

               <a
                  href="#businesses"
                  className="text-sm font-semibold text-slate-600 transition hover:text-pink"
               >
                  For businesses
               </a>

               <a
                  href="#about"
                  className="text-sm font-semibold text-slate-600 transition hover:text-pink"
               >
                  About us
               </a>

            </nav>

            {/* Desktop Contact Button */}
            <a
               href="#contact"
               className="hidden items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-bold text-white transition hover:bg-pink lg:flex"
            >
               Partner with us
               <ArrowUpRight size={16} />
            </a>

            {/* Mobile Menu Button */}
            <button
               onClick={() => setMenuOpen(true)}
               className="rounded-xl border border-slate-200 p-2 text-ink transition hover:border-pink hover:text-pink lg:hidden"
               aria-label="Open menu"
               aria-expanded={menuOpen}
            >
               <Menu size={26} />
            </button>

         </div>

         {/* Background Overlay */}
         <div
            onClick={closeMenu}
            className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-500 lg:hidden ${menuOpen
                  ? 'visible opacity-100'
                  : 'invisible opacity-0'
               }`}
         />

         {/* Mobile Sidebar */}
         <aside
            className={`fixed right-0 top-0 z-50 flex h-screen w-[85%] max-w-[360px] flex-col bg-white shadow-2xl transition-transform duration-500 ease-in-out lg:hidden ${menuOpen
                  ? 'translate-x-0'
                  : 'translate-x-full'
               }`}
         >

            {/* Sidebar Header */}
            <div className="flex items-center justify-between border-b border-slate-100 px-6 py-5">

               <img
                  src="/nooloop-logo-transparent.png"
                  alt="Nooloop"
                  className="h-14 w-auto max-w-[190px] object-contain"
               />

               <button
                  onClick={closeMenu}
                  className="rounded-full bg-slate-100 p-2 text-ink transition hover:bg-pink hover:text-white"
                  aria-label="Close menu"
               >
                  <X size={22} />
               </button>

            </div>

            {/* Sidebar Navigation */}
            <nav className="flex-1 px-6 py-8">

               <p className="mb-6 text-xs font-extrabold uppercase tracking-[3px] text-pink">
                  Explore Nooloop
               </p>

               {/* Our Approach */}
               <a
                  href="#approach"
                  onClick={closeMenu}
                  className="group flex items-center justify-between border-b border-slate-200 py-5 text-base font-bold text-ink transition-all duration-300 hover:pl-3 hover:text-pink"
               >
                  <span>Our approach</span>
                  <ArrowUpRight
                     size={19}
                     className="text-slate-400 transition duration-300 group-hover:translate-x-1 group-hover:text-pink"
                  />
               </a>

               {/* Materials */}
               <a
                  href="#materials"
                  onClick={closeMenu}
                  className="group flex items-center justify-between border-b border-slate-200 py-5 text-base font-bold text-ink transition-all duration-300 hover:pl-3 hover:text-pink"
               >
                  <span>Materials</span>
                  <ArrowUpRight
                     size={19}
                     className="text-slate-400 transition duration-300 group-hover:translate-x-1 group-hover:text-pink"
                  />
               </a>

               {/* Businesses */}
               <a
                  href="#businesses"
                  onClick={closeMenu}
                  className="group flex items-center justify-between border-b border-slate-200 py-5 text-base font-bold text-ink transition-all duration-300 hover:pl-3 hover:text-pink"
               >
                  <span>For businesses</span>
                  <ArrowUpRight
                     size={19}
                     className="text-slate-400 transition duration-300 group-hover:translate-x-1 group-hover:text-pink"
                  />
               </a>

               {/* About */}
               <a
                  href="#about"
                  onClick={closeMenu}
                  className="group flex items-center justify-between border-b border-slate-200 py-5 text-base font-bold text-ink transition-all duration-300 hover:pl-3 hover:text-pink"
               >
                  <span>About us</span>
                  <ArrowUpRight
                     size={19}
                     className="text-slate-400 transition duration-300 group-hover:translate-x-1 group-hover:text-pink"
                  />
               </a>

               {/* Contact Button */}
               <a
                  href="#contact"
                  onClick={closeMenu}
                  className="mt-8 flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-pink to-orange px-6 py-4 text-sm font-bold text-white shadow-lg transition hover:-translate-y-1"
               >
                  Partner with us
                  <ArrowUpRight size={18} />
               </a>

            </nav>

            {/* Sidebar Footer */}
            <div className="border-t border-slate-100 bg-slate-50 px-6 py-6">

               <p className="font-display text-lg font-extrabold text-ink">
                  Give Clothes a Second Life.
               </p>

               <p className="mt-2 text-xs font-medium text-slate-500">
                  Collect. Sort. Resell. Reuse.
               </p>

            </div>

         </aside>

      </header>
   );
}

export default Navbar;
