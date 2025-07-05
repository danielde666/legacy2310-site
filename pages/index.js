
import ContactModal from '../components/ContactModal'
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="min-h-screen p-6 md:p-12 space-y-24 bg-gradient-to-br from-zinc-900 to-black">
      <section className="text-center max-w-4xl mx-auto space-y-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-bold"
        >
          We Wrap Companies
        </motion.h1>
        <p className="text-xl md:text-2xl text-gray-300">
          Your core. Wrapped in future.
        </p>
        <div className="flex justify-center gap-4 pt-6">
          <ContactModal />
        </div>
      </section>
    </main>
  );
}
