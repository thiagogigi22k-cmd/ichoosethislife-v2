import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative">
      {/* Hero Image with Divine Figure */}
      <div className="relative w-full">
        <Image
          src="/divine-figure-in-golden-light-with-rays-of-sunshin.jpg"
          alt="Divine figure in golden light"
          width={500}
          height={400}
          className="w-full object-cover"
        />
        {/* Logo Text Overlay */}
        <div className="absolute bottom-4 left-0 right-0 text-center">
          <h1 className="text-[#1a5c5c] text-2xl font-bold tracking-wide">THE AGE OF</h1>
          <h1 className="text-[#1a5c5c] text-2xl font-bold tracking-wide">ABUNDANCE</h1>
        </div>
      </div>
    </section>
  )
}
