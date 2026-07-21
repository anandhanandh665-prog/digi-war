import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="pt-16">
        <section className="flex min-h-screen items-center justify-center bg-[#0B1120]">
          <h1 className="text-5xl font-bold text-white">
            Digi War
          </h1>
        </section>
      </main>
    </>
  );
}