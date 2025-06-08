import TestimonialCard from "@/components/testimonial-card"

export default function TestimonialsPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-16">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-green-800 sm:text-4xl md:text-5xl">Testimonials</h1>
        <p className="mt-4 text-lg text-gray-600">
          Read what our patients have to say about their experience with Dayush clinics
        </p>
        <div className="mx-auto mt-4 flex items-center justify-center">
          <p className="mr-2 text-3xl font-bold text-green-800">4.9</p>
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6 text-amber-400"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <TestimonialCard
          name="Priya Sharma"
          rating={5}
          text="I had been suffering from chronic back pain for years. After just a few sessions at Dayush clinics, I experienced significant relief. The doctors are knowledgeable and the staff is very caring."
        />
        <TestimonialCard
          name="Rahul Mehta"
          rating={5}
          text="The Panchakarma detox treatment completely transformed my health. I feel more energetic and my digestive issues have resolved. Highly recommend their authentic Ayurvedic approach."
        />
        <TestimonialCard
          name="Anjali Patel"
          rating={4}
          text="I visited for stress management and sleep issues. The combination of treatments and herbal medicines has made a huge difference. I'm sleeping better and feeling much more relaxed."
        />
        <TestimonialCard
          name="Vikram Singh"
          rating={5}
          text="After trying various treatments for my arthritis, I finally found relief at Thapovan. The specialized oil massages and herbal medicines have significantly reduced my joint pain."
        />
        <TestimonialCard
          name="Meera Joshi"
          rating={5}
          text="I came to Thapovan for weight management. The personalized diet plan and treatments helped me lose weight in a healthy way. The doctors explained everything clearly and supported me throughout."
        />
        <TestimonialCard
          name="Rajesh Kumar"
          rating={4}
          text="The Shirodhara treatment for stress relief was amazing. I felt completely relaxed and rejuvenated. The peaceful environment and professional staff made the experience even better."
        />
        <TestimonialCard
          name="Sunita Gupta"
          rating={5}
          text="I had skin issues for years and tried many treatments without success. The Ayurvedic approach at Thapovan addressed the root cause, and my skin has improved dramatically."
        />
        <TestimonialCard
          name="Anil Sharma"
          rating={5}
          text="The doctors at Thapovan are truly experts in Ayurveda. They took time to understand my health concerns and created a treatment plan that worked wonders for my digestive problems."
        />
        <TestimonialCard
          name="Neha Patel"
          rating={4}
          text="I've been coming to Thapovan for regular wellness treatments for over a year now. The consistent care and authentic treatments have improved my overall health and immunity."
        />
      </div>
    </div>
  )
}

