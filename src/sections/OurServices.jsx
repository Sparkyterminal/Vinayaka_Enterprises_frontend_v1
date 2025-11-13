import React from "react";
import {
  Calendar,
  TrendingUp,
  Printer,
  Megaphone,
  Palette,
} from "lucide-react";

const OurServices = () => {
  const services = [
    {
      icon: Calendar,
      title: "Event Management",
      description:
        "We design, plan, and execute events that make an impression. From concept to completion, we ensure seamless logistics and engaging experiences.",
      features: [
        "Corporate Events & Conferences",
        "Product Launches & Brand Promotions",
        "Cultural Programs & Award Ceremonies",
        "Institutional & Government Events",
        "Seminars, Workshops & Roadshows",
      ],
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: TrendingUp,
      title: "Trade Expos & Exhibitions",
      description:
        "We bring industries together by organizing professional trade expos and exhibitions that promote business networking and visibility.",
      features: [
        "Complete Expo Planning & Coordination",
        "Stall Design, Fabrication & Branding",
        "Exhibitor Management & Registration",
        "Logistics & On-Site Operations",
        "Event Promotion & Media Coverage",
      ],
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Printer,
      title: "Printing & Media Services",
      description:
        "Our in-house printing and media services ensure that your brand's communication is powerful and consistent.",
      features: [
        "Offset & Digital Printing",
        "Brochures, Catalogues, Flyers & Posters",
        "Outdoor Branding (Banners, Hoardings, Signages)",
        "Media Planning & Public Relations",
        "Audio-Visual Production & Event Coverage",
      ],
      color: "from-green-500 to-green-600",
    },
    {
      icon: Megaphone,
      title: "IEC (Information, Education & Communication) Services",
      description:
        "We design and execute IEC campaigns that effectively convey key messages to target audiences, helping organizations spread awareness and education.",
      features: [
        "Campaign Concept & Strategy",
        "Content Development (Print, Digital & Audio-Visual)",
        "Awareness Materials & Distribution",
        "Government & NGO Project Support",
        "Community Engagement Activities",
      ],
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: Palette,
      title: "Creative Design & Branding",
      description:
        "Our creative design team ensures your brand stands out with visually compelling and meaningful designs.",
      features: [
        "Logo & Identity Design",
        "Corporate Branding Materials",
        "Event Collateral & Promotional Design",
        "Social Media Graphics & Digital Campaigns",
      ],
      color: "from-pink-500 to-pink-600",
    },
  ];

  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-center text-3xl sm:text-4xl font-bold mb-10 sm:mb-12 text-[#1D3271]">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions tailored to bring your vision to life
          </p>
        </div>

        {/* First Row - 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {services.slice(0, 3).map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:-translate-y-2"
              >
                <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                <div className="p-8">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 mb-6 rounded-xl bg-gradient-to-br ${service.color} shadow-lg`}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg
                          className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Second Row - 2 Cards Centered */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
            {services.slice(3, 5).map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:-translate-y-2"
                >
                  <div
                    className={`h-2 bg-gradient-to-r ${service.color}`}
                  ></div>
                  <div className="p-8">
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 mb-6 rounded-xl bg-gradient-to-br ${service.color} shadow-lg`}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h3>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <svg
                            className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-sm text-gray-700">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
