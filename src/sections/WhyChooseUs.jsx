import React from 'react';
import { Award, Users, Layers, Lightbulb, Network, CheckCircle } from 'lucide-react';

const WhyChooseUs = () => {
    const features = [
        {
            icon: Award,
            title: "25+ Years of Proven Experience",
            description: "Decades of excellence in delivering exceptional events and media solutions"
        },
        {
            icon: Users,
            title: "Professional & Experienced Team",
            description: "Skilled professionals dedicated to bringing your vision to life"
        },
        {
            icon: Layers,
            title: "End-to-End Event & Media Solutions",
            description: "Complete service from concept to execution for all your needs"
        },
        {
            icon: Lightbulb,
            title: "Creative and Strategic Approach",
            description: "Innovative thinking combined with strategic planning for success"
        },
        {
            icon: Network,
            title: "Reliable Vendor Network",
            description: "Trusted partnerships ensuring quality resources and services"
        },
        {
            icon: CheckCircle,
            title: "Commitment to Quality & Timely Delivery",
            description: "Excellence and punctuality in every project we undertake"
        }
    ];

    return (
        <section className="py-12 bg-white sm:py-16 lg:py-20">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-center text-3xl sm:text-4xl font-bold mb-10 sm:mb-12 text-[#1D3271]">
                        Why Choose Us?
                    </h2>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature, index) => {
                        const IconComponent = feature.icon;
                        return (
                            <div 
                                key={index}
                                className="relative p-6 bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                            >
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-lg">
                                            <IconComponent className="w-6 h-6 text-white" />
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                                            {feature.title}
                                        </h3>
                                        <p className="text-sm text-gray-600 leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;