import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { Section, Header, H1, SubTitle } from "@/components/typography";
import { FadeImage } from "@/components/fade-image";

const images = [
  "https://res.cloudinary.com/dhlyei79o/image/upload/v1750661866/caption_zr7zhs.jpg",
  "https://res.cloudinary.com/dhlyei79o/image/upload/v1750922991/72127922_1367651270059274_4638507822902935552_o_lthdk4.jpg",
  "https://res.cloudinary.com/dhlyei79o/image/upload/v1750925488/Crystal-water-kayaks-seychelles-1_dpeghk.jpg",
];

export default function HeroSection() {
  return (
    <Section aria-labelledby="events-header" className="h-screen relative">
      {/* Background Image */}
      <FadeImage
        images={images}
        className={"absolute inset-0 h-full overflow-hidden"}
      />
      <div className="absolute inset-0 bg-black/50 h-full"></div>
      {/* Content */}
      <div className="relative z-10 text-center text-white container-custom">
        <Header>
          <H1 id="events-header">
            Ocean Adventures
            <span className="block font-script text-seafoam">Await You</span>
          </H1>
          <SubTitle className="text-white">
            Dive into excitement with our premium water sports experiences. From
            peaceful kayaking to thrilling jet skiing, create memories that will
            last a lifetime.
          </SubTitle>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button size="lg">
              <Calendar className="w-5 h-5 mr-2" />
              Book Activities
            </Button>
            <Button variant="outline" size="lg">
              View Packages
            </Button>
          </div>
        </Header>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </Section>
  );
}
