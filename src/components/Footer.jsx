
import {
   Instagram,
   Linkedin,
   Mail,
   MapPin
} from 'lucide-react';

function Footer() {
   return (
      <footer className="bg-[#0b1e50] text-white">

         {/* Footer main section */}
         <div className="container-wide grid gap-12 py-14 md:grid-cols-[1.4fr_1fr_1fr] md:py-20">

            {/* Column 1 - Logo and description */}
            <div>
               <img
                  src="/nooloop-logo-white.png"
                  alt="Nooloop Logo"
                  className="mb-5 w-64 max-w-full object-contain"
               />

               <p className="max-w-sm text-sm leading-7 text-blue-100/75">
                  We bring value back to textile leftovers by collecting,
                  sorting and connecting materials with their next purpose.
               </p>

               <p className="mt-5 text-sm font-semibold text-white">
                  Give Clothes a Second Life.
               </p>
            </div>

            {/* Column 2 - Explore links */}
            <div>
               <h3 className="mb-5 text-lg font-extrabold">
                  Explore
               </h3>

               <div className="grid gap-3 text-sm text-blue-100/75">

                  <a href="#approach" className="hover:text-white">
                     Our approach
                  </a>

                  <a href="#materials" className="hover:text-white">
                     Materials
                  </a>

                  <a href="#businesses" className="hover:text-white">
                     For businesses
                  </a>

                  <a href="#about" className="hover:text-white">
                     About Nooloop
                  </a>

               </div>
            </div>

            {/* Column 3 - Contact details */}
            <div>
               <h3 className="mb-5 text-lg font-extrabold">
                  Get in touch
               </h3>

               <div className="grid gap-4 text-sm text-blue-100/75">

                  <a
                     href="mailto:hello@nooloop.in"
                     className="flex items-center gap-3 hover:text-white"
                  >
                     <Mail size={17} />
                     hello@nooloop.in
                  </a>

                  <p className="flex items-center gap-3">
                     <MapPin size={17} />
                     Tiruppur, Tamil Nadu, India
                  </p>

                  {/* Social media links
                  <div className="flex gap-3 pt-1">

                     <a
                        href="#contact"
                        aria-label="Instagram"
                        className="rounded-full border border-white/20 p-2 hover:bg-white/10"
                     >
                        <Instagram size={17} />
                     </a>

                     <a
                        href="#contact"
                        aria-label="LinkedIn"
                        className="rounded-full border border-white/20 p-2 hover:bg-white/10"
                     >
                        <Linkedin size={17} />
                     </a>

                  </div> */}
               </div>
            </div>

         </div>

         {/* Footer bottom section */}
         <div className="border-t border-white/10">
            <div className="container-wide flex flex-col justify-between gap-2 py-5 text-xs text-blue-100/50 sm:flex-row">

               <span>
                  © {new Date().getFullYear()} Nooloop. All rights reserved.
               </span>

               <span>
                  Less waste. More possibility.
               </span>

            </div>
         </div>

      </footer>
   );
}

export default Footer;
