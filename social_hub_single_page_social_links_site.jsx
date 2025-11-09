import React, { useState } from "react";
import { Instagram, Facebook, Mail, MessageCircle, MapPin, Globe } from "lucide-react";

/*
  Ensure images are in public/images/ folder to prevent build errors.
  Example:
    public/images/IMG_6652.PNG
    public/images/IMG_6654.JPG
*/

export default function SocialHub() {
  const phone = "+919002254540";
  const whatsappLink = `https://wa.me/${phone.replace(/[^0-9]/g, "")}`;
  const instagram = "https://www.instagram.com/_ig_diptiman_singha/";
  const facebook = "https://www.facebook.com/bappahardwarestore/";
  const email = "bappahardwaresanitarystore@gmail.com";
  const location = "https://maps.app.goo.gl/7MMSa1y9F8wzEfcm6";
  const website = "/coming-soon";

  const bgImage = "/images/IMG_6652.PNG";
  const footerImg = "/images/IMG_6654.JPG";

  return (
    <main
      className="min-h-screen bg-cover bg-center flex items-center justify-center p-6 bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="w-full max-w-2xl bg-white/90 backdrop-blur-md shadow-2xl rounded-3xl p-10 border border-white/40">
        <header className="flex items-center gap-4 mb-8">
          <div className="h-16 w-16 rounded-full bg-gradient-to-tr from-indigo-400 to-pink-400 flex items-center justify-center text-2xl font-bold text-white shadow-md">
            BH
          </div>
          <div>
            <h1 className="text-3xl font-bold text-slate-800 tracking-tight">Bappa Hardware & Sanitary</h1>
            <p className="text-sm text-slate-500">All your social links in one beautiful page</p>
          </div>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <a
            href={instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 p-5 rounded-2xl border border-transparent hover:border-pink-300 hover:bg-pink-50/50 transition transform hover:scale-[1.02]"
            aria-label="Instagram link"
          >
            <div className="p-3 rounded-lg bg-gradient-to-br from-pink-300 to-yellow-200">
              <Instagram size={28} />
            </div>
            <div>
              <div className="font-semibold text-slate-700">Instagram</div>
            </div>
          </a>

          <a
            href={facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 p-5 rounded-2xl border border-transparent hover:border-blue-300 hover:bg-blue-50/50 transition transform hover:scale-[1.02]"
            aria-label="Facebook link"
          >
            <div className="p-3 rounded-lg bg-blue-200">
              <Facebook size={28} />
            </div>
            <div>
              <div className="font-semibold text-slate-700">Facebook</div>
            </div>
          </a>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 p-5 rounded-2xl border border-transparent hover:border-green-300 hover:bg-green-50/50 transition transform hover:scale-[1.02]"
            aria-label="WhatsApp Business link"
          >
            <div className="p-3 rounded-lg bg-green-200">
              <MessageCircle size={28} />
            </div>
            <div>
              <div className="font-semibold text-slate-700">WhatsApp Business</div>
            </div>
          </a>

          <button
            onClick={() => (window.location = `mailto:${email}?subject=Hello&body=Hi%20there`)}
            className="group flex items-center gap-4 p-5 rounded-2xl border border-transparent hover:border-slate-300 hover:bg-slate-50/50 transition transform hover:scale-[1.02] text-left"
            aria-label="Send email"
          >
            <div className="p-3 rounded-lg bg-slate-200">
              <Mail size={28} />
            </div>
            <div>
              <div className="font-semibold text-slate-700">Email</div>
            </div>
          </button>

          <div className="flex flex-col md:flex-row gap-5 md:col-span-2">
            <a
              href={location}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-5 rounded-2xl border border-transparent hover:border-orange-300 hover:bg-orange-50/50 transition transform hover:scale-[1.02] flex-1"
              aria-label="Location link"
            >
              <div className="p-3 rounded-lg bg-orange-200">
                <MapPin size={28} />
              </div>
              <div>
                <div className="font-semibold text-slate-700">Location</div>
                <div className="text-sm text-slate-500">Find us on Google Maps</div>
              </div>
            </a>

            <a
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-5 rounded-2xl border border-transparent hover:border-indigo-300 hover:bg-indigo-50/50 transition transform hover:scale-[1.02] flex-1"
              aria-label="Website link"
            >
              <div className="p-3 rounded-lg bg-indigo-200">
                <Globe size={28} />
              </div>
              <div>
                <div className="font-semibold text-slate-700">Our Website</div>
                <div className="text-sm text-indigo-600 font-medium animate-pulse">Coming Soon!</div>
              </div>
            </a>
          </div>
        </section>

        <footer className="mt-10 text-center">
          <img src={footerImg} alt="Bappa Hardware" className="w-full h-48 object-cover rounded-xl mb-4 shadow-lg" />
          <h2 className="text-lg font-semibold text-slate-800 tracking-wide mt-4 animate-pulse">
            🚀 WE ARE COMING IN THE ONLINE MODE
          </h2>
        </footer>
      </div>
    </main>
  );
}
