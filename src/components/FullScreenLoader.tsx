import Image from "next/image";

export default function FullScreenLoader() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white dark:bg-black transition-opacity">
      <Image
        src="/images/logo.png"
        alt="Aavkar Mukhwas Logo"
        width={80}
        height={80}
        className="mb-4 animate-bounce-slow"
        priority
      />
      <span className="mb-4 text-xl font-bold text-primary tracking-wide">
        Aavkar Mukhwas
      </span>
      {/* <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div> */}
    </div>
  );
}

// Add the following to your global CSS (e.g., globals.css or tailwind.config.js):
// .animate-bounce-slow { animation: bounce 2s infinite; }
// @keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-12px); } }
