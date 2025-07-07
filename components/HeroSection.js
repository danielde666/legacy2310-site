export default function HeroSection() {
    return (
      <section className="min-h-screen flex flex-col items-center justify-center text-white text-center px-6 bg-gradient-to-br from-black via-gray-900 to-neutral-800">
       
        <img
              src='/aiwrap-white.svg'
              alt='Ai Wrap'
              className="w-48 h-48 mx-auto object-contain mb-4"
            />
        <h2 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
          We Wrap Your Company
        </h2>
        <p className="text-lg md:text-2xl max-w-2xl mb-8">
          AI-powered rebranding, internal tools, and design systems to keep your business on the edge of innovation.
        </p>
        <a href="#contact" className="bg-white text-black px-6 py-3 rounded-lg font-bold hover:bg-gray-200 transition">
          Start the Wrap
        </a>
      </section>
    );
  }
  