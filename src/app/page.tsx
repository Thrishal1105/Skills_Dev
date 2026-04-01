import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col text-white">
      <Hero />
      <Footer />
    </main>
  );
}
