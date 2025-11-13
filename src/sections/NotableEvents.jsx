import React from "react";

const NotableEvents = () => {
  const images = [
    { id: 1, src: "assets/gal1.webp", alt: "Gallery Image 1" },
    { id: 2, src: "assets/gal2.webp", alt: "Gallery Image 2" },
    { id: 3, src: "assets/gal3.webp", alt: "Gallery Image 3" },
    { id: 4, src: "assets/gal4.webp", alt: "Gallery Image 4" },
    { id: 5, src: "assets/gal5.webp", alt: "Gallery Image 5" },
    { id: 6, src: "assets/gal6.webp", alt: "Gallery Image 6" },
  ];

  return (
    <div className="min-h-screen w-full bg-white py-12 md:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading Section */}
        <div className="text-center mb-10 md:mb-14 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1D3271] mb-3 md:mb-4">
            Gallery
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            A glimpse into our most memorable moments
          </p>
        </div>

        {/* Grid Layout - 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {images.map((image) => (
            <div key={image.id} className="group">
              <div className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <img
                  className="w-full h-full md:h-full lg:h-full object-contain group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  src={image.src}
                  alt={image.alt}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotableEvents;