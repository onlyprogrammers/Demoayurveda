// app/moreabout/[query]/page.tsx

import Link from "next/link";
import { notFound } from "next/navigation";
// lib/treatmentData.ts
export const treatmentData = [
    {
      id: "pain-relief",
      title: "Pain Relief",
      description: "Our pain relief therapies use a blend of natural herbs and massage techniques to alleviate chronic pain, improve mobility, and enhance overall comfort."
    },
    {
      id: "stress-relief",
      title: "Stress Relief",
      description: "Relax and rejuvenate with our stress relief therapies, combining Shirodhara, meditation, and herbal treatments to calm the mind and body."
    },
    {
      id: "panchakarma",
      title: "Panchakarma",
      description: "Panchakarma is a detoxifying Ayurvedic therapy that helps cleanse the body of toxins, restoring balance and promoting holistic well-being."
    },
    {
      id: "weight-loss",
      title: "Weight Loss",
      description: "Our weight loss program combines Ayurveda, personalized diet plans, and therapeutic massages to help you achieve a healthy body naturally."
    },
    {
      id: "womens-care",
      title: "Women's Care",
      description: "Tailored specifically for women's health, these treatments support hormonal balance, menstrual health, and postpartum recovery."
    },
    {
      id: "other-illnesses-which-cured-by-different-therapies",
      title: "Other Illnesses",
      description: "We also offer therapies for various other conditions like arthritis, migraines, skin disorders, and more using traditional Ayurvedic methods."
    },
    {
        id: "asthma",
        title: "Asthma",
        description:
          "Our Asthma treatment focuses on Ayurvedic herbs and breathing techniques to reduce inflammation, clear airways, and strengthen the lungs naturally."
      },
      {
        id: "diabetes",
        title: "Diabetes",
        description:
          "Ayurvedic diabetes care includes lifestyle adjustments, herbal supplements, and detox therapies to manage blood sugar levels effectively."
      },
      {
        id: "digestivedisorder",
        title: "Digestive Disorders",
        description:
          "From acidity to constipation, our digestive treatments restore gut health using Panchakarma, diet plans, and herbal medicines."
      },
      {
        id: "headache",
        title: "Headache",
        description:
          "Get relief from frequent headaches and migraines through Shirodhara, Nasya, and calming therapies targeting the nervous system."
      },
      {
        id: "ibs",
        title: "IBS (Irritable Bowel Syndrome)",
        description:
          "Our IBS care combines gut-balancing herbs, detox treatments, and lifestyle coaching to manage symptoms and promote long-term relief."
      },
      {
        id: "other-illnesses-which-cured-by-different-therapies",
        title: "Other Illnesses",
        description:
          "We also treat arthritis, skin diseases, fatigue, and more with personalized Ayurvedic therapies for holistic healing."
      }
  ];
  
type Props = {
  params: { query: string };
};

export default function MoreAboutPage({ params }: Props) {
  const treatment = treatmentData.find((t) => t.id === params.query);

  if (!treatment) return notFound();

  return (
    <section className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-green-800 mb-6">{treatment.title}</h1>
      <p className="text-lg text-gray-700">{treatment.description}</p>
        <div className="mt-6">
            <h2 className="text-2xl font-semibold text-green-800 mb-4">Treatment Details</h2>
            <p className="text-gray-600">
            Our {treatment.title} therapies are designed to provide relief and promote overall wellness. We use a combination of herbal remedies, dietary adjustments, and lifestyle changes to help you achieve your health goals.
            </p>
            <p className="text-gray-600 mt-4">
            Our experienced practitioners will work with you to create a personalized treatment plan that addresses your specific needs and concerns. Whether you're dealing with chronic pain, stress, or other health issues, we are here to support you on your healing journey.
            </p>
        </div>
        <div className="mt-8">
            <h2 className="text-2xl font-semibold text-green-800 mb-4">Benefits</h2>
            <ul className="list-disc list-inside text-gray-600">
                <li>Natural pain relief</li>
                <li>Improved mobility and flexibility</li>
                <li>Enhanced relaxation and stress reduction</li>
                <li>Detoxification and rejuvenation</li>
                <li>Personalized care and support</li>
            </ul>
        </div>
        <Link href="/book/all" className="mt-6 inline-block px-4 py-2 bg-green-800 text-white rounded hover:bg-green-700 transition duration-200">
            Book Treatments
        </Link>
    </section>
  );
}
