"use client";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">
              Aavkar Home Made Hygienic Mukhwas
            </h3>
            <p className="text-white/80 mb-4">
              Premium quality homemade and hygienic mukhwas from Surat&apos;s
              finest collection. Discover our extensive range of traditional
              mouth fresheners, sweet supari, and natural ingredients with
              detailed health benefits.
            </p>
            <div className="space-y-2 text-sm text-white/80">
              <p>
                📍 Plot No 26, Swastik Raw House, Near Shivdhara Circle, D Mart
                Road, Mota Varachha, Surat 394101 Gujarat
              </p>
              <p> +91 81288 26764 (Primary Whatsapp)</p>
              <p> +91 96873 73515 (Secondary)</p>
              <p> +91 70161 00540 (Secondary)</p>
              <p>👥 Sangeeta D. Vaghani, Pinal C Miyani, Hina A. Kakadiya</p>
              <p>✉️ aavkarmukhwas@gmail.com</p>
            </div>
          </div>

          {/* Product Highlights */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold text-white mb-4">
              Featured Products
            </h4>
            <div className="space-y-2 text-sm text-white/80">
              <p>🌿 Beet Root Amla Mukhwas</p>
              <p>🌰 Multi Seeds Mukhwas</p>
              <p>💚 Seed Tal Alsi Mukhwas</p>
              <p>🌸 Special Jaipuri Mukhwas</p>
              <p>🔥 Roasted Alsi Mukhwas</p>
              <p>🥜 Makhana Nuts Oats Mix</p>
              <p>🌾 Roasted Green Wheat Mukhwas</p>
            </div>
          </div>

          {/* Health Benefits */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold text-white mb-4">
              Health Benefits
            </h4>
            <div className="space-y-2 text-sm text-white/80">
              <p>💪 Rich in Omega 3 Fatty Acids</p>
              <p>🍊 High Vitamin-C Content</p>
              <p>❤️ Improves Heart Health</p>
              <p>🛡️ Boosts Immunity</p>
              <p>🌿 Natural Dietary Fibers</p>
              <p>⚡ Improves Metabolism</p>
              <p>😴 Better Sleep Quality</p>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-sm text-white/80">
              © {currentYear} Aavkar Home Made Hygienic Mukhwas. All rights
              reserved.
            </div>

            {/* Developer Credit */}
            <div className="flex items-center space-x-2 text-sm text-white/80">
              <span>Developed by</span>
              <a
                href="https://ripplestacks.com"
                className="font-semibold text-white hover:text-white/80 transition-colors"
              >
                RIPPLESTACKS TEAM 💚
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
