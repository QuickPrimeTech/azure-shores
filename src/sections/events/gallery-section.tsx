"use client";

import { useState } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { ZoomIn, Play } from "lucide-react";
import { Section, Header, H2, SubTitle } from "@/components/typography";
import { galleryItems } from "@/data/events";

export default function GallerySection() {
  const [selectedItem, setSelectedItem] = useState<
    (typeof galleryItems)[0] | null
  >(null);
  const [filter, setFilter] = useState("all");

  const activities = [
    "all",
    "Kayaking",
    "Jet Ski",
    "Snorkeling",
    "Paddleboarding",
    "Fishing",
    "Windsurfing",
  ];

  const filteredItems = galleryItems.filter(
    (item) => filter === "all" || item.activity === filter
  );

  return (
    <Section>
      <Header>
        <H2>Experience Gallery</H2>
        <SubTitle>
          See the joy and excitement of our guests as they create unforgettable
          water sport memories
        </SubTitle>
      </Header>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {activities.map((activity) => (
          <Button
            key={activity}
            variant={filter === activity ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter(activity)}
            className={filter === activity ? "btn-primary" : "btn-outline"}
          >
            {activity === "all" ? "All Activities" : activity}
          </Button>
        ))}
      </div>

      {/* Masonry Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
        {filteredItems.map((item) => (
          <Card
            key={item.id}
            className="py-0 pb-3 overflow-hidden break-inside-avoid cursor-pointer group hover:shadow-xl transition-all duration-300"
            onClick={() => setSelectedItem(item)}
          >
            <div className="relative overflow-hidden">
              <Image
                src={item.src || "/placeholder.svg"}
                alt={item.alt}
                width={600}
                height={400}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center">
                  {item.type === "video" ? (
                    <Play className="w-12 h-12 mx-auto mb-2" />
                  ) : (
                    <ZoomIn className="w-8 h-8 mx-auto mb-2" />
                  )}
                  <div className="text-sm font-medium">
                    View {item.type === "video" ? "Video" : "Photo"}
                  </div>
                </div>
              </div>

              {/* Badges */}
              <div className="absolute top-3 left-3 flex gap-2">
                {item.featured && (
                  <Badge className="bg-coral text-white text-xs">
                    Featured
                  </Badge>
                )}
                {item.type === "video" && (
                  <Badge
                    variant="secondary"
                    className="bg-black/70 text-white text-xs"
                  >
                    Video
                  </Badge>
                )}
              </div>
            </div>

            <div className="p-4">
              <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.activity}</p>
            </div>
          </Card>
        ))}
      </div>

      {/* Lightbox Modal */}
      <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
          {selectedItem && (
            <div className="relative">
              <Image
                src={selectedItem.src || "/placeholder.svg"}
                alt={selectedItem.alt}
                width={800}
                height={600}
                className="w-full h-auto rounded-lg"
              />
              <div className="absolute bottom-4 left-4 text-white bg-black bg-opacity-70 px-4 py-2 rounded-lg">
                <DialogTitle className="font-medium">
                  {selectedItem.title}
                </DialogTitle>
                <div className="text-sm opacity-75">
                  {selectedItem.activity}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </Section>
  );
}
