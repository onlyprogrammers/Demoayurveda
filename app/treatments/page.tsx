import TreatmentCard from "@/components/treatment-card"

export default function TreatmentsPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-16">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-green-800 sm:text-4xl md:text-5xl">Our Treatments</h1>
        <p className="mt-4 text-lg text-gray-600">
          Discover our range of authentic Ayurvedic treatments for holistic wellness
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <TreatmentCard
          title="Pain Relief"
          icon="/icons/pain-relief.svg"
          href="/treatments/pain-relief"
          className="h-full"
        />
        <TreatmentCard
          title="Relaxation & Stress Relief"
          icon="/icons/stress-relief.svg"
          href="/treatments/stress-relief"
          className="h-full"
        />
        <TreatmentCard
          title="Panchakarma Detox"
          icon="/icons/panchakarma.svg"
          href="/treatments/panchakarma"
          className="h-full"
        />
        <TreatmentCard
          title="Fat and Weight Loss"
          icon="/icons/weight-loss.svg"
          href="/treatments/weight-loss"
          className="h-full"
        />
        <TreatmentCard
          title="Women's Care"
          icon="/icons/womens-care.svg"
          href="/treatments/womens-care"
          className="h-full"
        />
        <TreatmentCard
          title="Other Illnesses"
          icon="/icons/other-illnesses.svg"
          href="/treatments/other-illnesses"
          className="h-full"
        />
        <TreatmentCard
          title="Digestive Disorders"
          icon="/icons/digestive.svg"
          href="/treatments/digestive-disorders"
          className="h-full"
        />
        <TreatmentCard
          title="Skin Disorders"
          icon="/icons/skin.svg"
          href="/treatments/skin-disorders"
          className="h-full"
        />
        <TreatmentCard
          title="Joint Pain"
          icon="/icons/joint-pain.svg"
          href="/treatments/joint-pain"
          className="h-full"
        />
      </div>
    </div>
  )
}

