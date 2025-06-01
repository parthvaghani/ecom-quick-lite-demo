"use client";

export function Footer() {
  const currentYear = new Date().getFullYear();


  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-amber-400 mb-4">
              K.K. Dupatta House
            </h3>
            <p className="text-gray-300 mb-4">
              Premium quality dupattas from Surat&apos;s finest collection. Discover our extensive range of Chanderi, Digital, Jacquard, and specialty dupattas.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <p>📍 Bombay Market, Surat, Gujarat, India</p>
              <p>📞 +91 95866 21717 (Vicky Kotak)</p>
              <p>✉️ kkdupattathouse9508@gmail.com</p>
            </div>
          </div>


        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-sm text-gray-400">
              © {currentYear} K.K. Dupatta House. All rights reserved.
            </div>

            {/* Developer Credit */}
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>Developed by</span>
              <a
                href="https://ripplestacks.com"
                className="font-semibold text-amber-400 hover:text-amber-300 transition-colors"
              >
                RIPPLESTACKS TEAM
              </a>
            </div>


          </div>
        </div>
      </div>
    </footer>
  );
}
