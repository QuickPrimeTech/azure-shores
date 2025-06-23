export default function HeroSection() {
  return (
    <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/placeholder.svg?height=800&width=1200')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      <div className="relative z-10 text-center text-white container-custom">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Our Story Begins
            <span className="block font-script text-seafoam">With the Ocean</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            From humble beginnings to coastal luxury, discover the passion and dedication that makes Azure Shores a
            premier dining destination
          </p>
        </div>
      </div>
    </section>
  )
}
