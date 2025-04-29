import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What is Dayush Clinics?",
    answer:
      "Dayush Clinics is a telemedicine platform that connects you with experienced doctors of alternative medicine for virtual consultations. You can consult from the comfort of your home using your smartphone, tablet, or computer.",
  },
  {
    question: "How do I book an appointment/ Consult a Doctor?",
    answer:
      "Simply download the Dayush Clinics app, register using your phone number or email, choose your preferred doctor or specialty, and select an available time slot to book your appointment. OR - If your required Doctor is free, you can directly connect through our VC facility with him/her after payment.",
  },
  {
    question: "Can I get a prescription through Dayush Clinics?",
    answer:
      "Yes! After your consultation, if required, our doctors will issue a valid digital prescription which you can use to purchase medicines or for further medical care. You can also download the previous prescriptions from the 'Your Treatment History' tab anytime.",
  },
  {
    question: "What types of doctors are available on Dayush Clinics?",
    answer:
      "We have experienced Doctors/ Practitioners in various alternative medicine fields like Ayurveda, Sidha, Naturopathy, Unani, Homeo, and many more specialists available for online consultations.",
  },
  {
    question: "Is my information safe and private?",
    answer:
      "Absolutely. Dayush Clinics adheres to strict confidentiality protocols and data security standards to protect your health information. Further, we don't keep any data related to Video Calling.",
  },
  {
    question: "Can I consult for emergencies through Dayush Clinics?",
    answer:
      "Dayush Clinics is designed for non-emergency consultations. For medical emergencies, we advise you to visit the nearest hospital or call emergency services immediately.",
  },
  {
    question: "How much does a consultation cost?",
    answer:
      "Consultation fees vary depending on the doctor and specialty. Fee details are clearly mentioned next to each doctor's profile before booking.",
  },
  {
    question: "What if I miss my appointment?",
    answer:
      "If you miss your appointment, you can reschedule it through the app. Please note that rescheduling policies and charges, if any, are mentioned in the booking terms.",
  },
  {
    question: "Can I consult the same doctor again?",
    answer:
      "Yes, you can choose to consult the same doctor for follow-ups or future appointments via the app.",
  },
  {
    question: "How do I make payments?",
    answer:
      "Payments can be made securely through multiple options including credit/debit cards, UPI, net banking, and mobile wallets.",
  },
  {
    question: "Is Dayush Clinics available 24/7?",
    answer:
      "You can book appointments 24/7, but doctor availability depends on their individual schedules. Some doctors also offer evening and weekend slots for your convenience.",
  },
  {
    question: "Can I get lab tests done through Dayush Clinics?",
    answer:
      "No, we don't offer lab test booking services through our partnered diagnostic labs.",
  },
  {
    question: "What to do if my Internet connection got lost during the consultation or I couldn't finish the appointment due to technical issues?",
    answer:
      "Don't worry. If the connection terminates during the consultation and the doctor agrees, we will provide a full refund. You can reconnect with the same or another doctor later, as per availability.",
  },
  {
    question: "How do I contact customer support?",
    answer:
      "You can reach out to our support team via the ‘Help’ section in the app or email us at support@dayushclinics.com or dayushclinics@gmail.com for quick assistance.",
  },
];

export default function FAQComponent() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">FAQs for Dayush Clinics</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-green-300 rounded-2xl p-4 shadow-md bg-green-50"
          >
            <button
              className="flex justify-between items-center w-full text-left text-green-800 font-medium text-lg"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              {openIndex === index ? <ChevronUp /> : <ChevronDown />}
            </button>
            {openIndex === index && (
              <p className="mt-2 text-green-900 text-base leading-relaxed">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
