import { Smartphone, Download, Stethoscope, HeartPulse, Globe, Apple } from "lucide-react";
import type React from "react";

function Feature({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-700">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-green-800">{title}</h3>
      <p className="text-sm text-green-600 mt-1">{description}</p>
    </div>
  );
}

export default function WhyChooseUsSection() {
  return (
    <section className="bg-green-50 py-12 sm:py-16">
      <div className="container px-4 md:px-6 text-center">
        {/* Main Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-green-800 mb-10">
          Why Choose Us
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <Feature
            icon={<Smartphone className="h-6 w-6" />}
            title="Easy Appointments"
            description="Book or reschedule consultations at your convenience."
          />
          <Feature
            icon={<Download className="h-6 w-6" />}
            title="Instant Reports"
            description="Get digital prescriptions and health records instantly."
          />
          <Feature
            icon={<Stethoscope className="h-6 w-6" />}
            title="Expert Doctors"
            description="Consult with experienced and certified professionals."
          />
          <Feature
            icon={<HeartPulse className="h-6 w-6" />}
            title="Personalized Care"
            description="Health plans tailored to your body, lifestyle, and goals."
          />
          <Feature
            icon={<Globe className="h-6 w-6" />}
            title="Your Wellness, Anytime & Anywhere"
            description="Access care from the comfort of your home, 24/7."
          />
          <Feature
            icon={<Apple className="h-6 w-6" />}
            title="iOS & Android Support"
            description="Use our app on both Apple and Android devices."
          />
        </div>
      </div>
    </section>
  );
}
