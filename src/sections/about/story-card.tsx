import Image from "next/image"

export default function StoryCard() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative h-96 lg:h-auto">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Azure Shores founding story"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8 lg:p-12 flex items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  A Dream Born by the
                  <span className="block font-script text-ocean-blue">Endless Blue</span>
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    In 2010, Chef Marina Rodriguez stood on this very shoreline with a vision: to create a dining
                    experience that celebrates both the bounty of the ocean and the spirit of coastal adventure.
                  </p>
                  <p>
                    What began as a small beachside café has evolved into Azure Shores, a destination where culinary
                    artistry meets the raw beauty of the sea. Every dish tells a story of our commitment to
                    sustainability, local sourcing, and the timeless connection between land and sea.
                  </p>
                  <p>
                    Today, we continue to honor that original vision while pushing the boundaries of coastal cuisine,
                    creating memories that last as long as the tides that shape our shores.
                  </p>
                </div>
                <div className="pt-4">
                  <div className="text-sm text-gray-500 mb-2">Founded by</div>
                  <div className="font-semibold text-gray-900">Chef Marina Rodriguez</div>
                  <div className="text-sm text-gray-600">Executive Chef & Owner</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
