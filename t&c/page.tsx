import React, { useState } from 'react';

// Main App component
export default function App() {
  const policies = [
    {
      title: "Terms & Conditions",
      content: `
        <p class="mb-2"><strong>Overview:</strong> DAYUSH CLINICS is a mobile app connecting patients with certified doctors for video consultations, acting as a facilitator, not a direct medical treatment provider.</p>
        <p class="mb-2"><strong>IT & Technology:</strong> Complies with IT Act, 2000; uses encrypted channels; users must use secure networks.</p>
        <p class="mb-2"><strong>Legal & Healthcare Compliance:</strong> Doctors follow Telemedicine Practice Guidelines, 2020. Platform disclaims liability for health outcomes.</p>
        <p class="mb-2"><strong>Payments & Refund:</strong> Consultation fees are charged by the doctor, with a nominal platform fee by DAYUSH CLINICS. Refunds are granted for transaction failures, doctor unavailability, or technical issues attributable to the platform (processed within 5 working days).</p>
        <p class="mb-2"><strong>User Obligations:</strong> Users must provide true medical history and personal details, and behave respectfully. Misuse or harassment can lead to suspension.</p>
        <p class="mb-2"><strong>Privacy & Data:</strong> Dayush Clinics does not directly collect health-related patient data; video calls are not recorded. User authentication data is stored securely in accordance with Indian privacy regulations.</p>
        <p class="mb-2"><strong>Disclaimer:</strong> The app does not substitute emergency care or in-person examination. Users are advised to seek physical consultation for medical emergencies. The app does not guarantee diagnosis accuracy, treatment efficacy, or service continuity.</p>
        <p><strong>Governing Law:</strong> All legal disputes are subject to the jurisdiction of courts in Malappuram, Kerala, governed by the laws of India.</p>
      `,
    },
    {
      title: "Privacy Policy",
      content: `
        <p class="mb-2"><strong>Introduction:</strong> DAYUSH CLINICS collects and processes personal information in line with the Information Technology (Reasonable security practices and procedures and sensitive personal data or information) Rules, 2011.</p>
        <p class="mb-2"><strong>Information Collection:</strong> We collect information such as your name, age, gender, basic health details, and payment data only when you register or consult a doctor on the platform.</p>
        <p class="mb-2"><strong>Use of Information:</strong> Your data is used strictly for facilitating consultations, generating reports, processing payments, and for analytics to improve services. It will not be used for advertising or sold to third parties.</p>
        <p class="mb-2"><strong>Sharing of Information:</strong> Information is shared with doctors only when you initiate a consultation. We may disclose data if legally compelled by government authorities or courts.</p>
        <p class="mb-2"><strong>Data Security:</strong> We use encryption, access controls, and audit trails to ensure your data is secure. However, no system is entirely immune to cyber threats, and users are encouraged to keep their devices protected.</p>
        <p><strong>User Rights:</strong> You can request to review or delete your data by emailing our help/support section mail ID. Deletion requests will be processed within 15 working days.</p>
      `,
    },
    {
      title: "Doctor Onboarding Agreement",
      content: `
        <p class="mb-2"><strong>Purpose:</strong> This agreement sets out the terms between DAYUSH CLINICS and the onboarded Doctor/Practitioner for delivering tele-consultation services to patients.</p>
        <p class="mb-2"><strong>Registration and Credentials:</strong> Doctors must submit valid medical registration details and qualification proof. Any fraudulent documents discovered later may result in delisting and legal action.</p>
        <p class="mb-2"><strong>Services Provided:</strong> Doctors must provide ethical, guideline-based consultations under applicable Indian medical regulations and maintain records of patient interactions if required.</p>
        <p class="mb-2"><strong>Independent Relationship:</strong> Doctors are not employees of DAYUSH CLINICS. They are independent professionals responsible for the quality and content of their medical advice.</p>
        <p class="mb-2"><strong>Fees and Payments:</strong> Consultation fees will be settled after deducting platform charges and applicable taxes. Payment will be transferred to the doctor's bank account within the billing cycle.</p>
        <p class="mb-2"><strong>Confidentiality and Data Protection:</strong> Doctors must not share patient details with any third party and must store consultation records securely. Violations will lead to suspension and possible legal action.</p>
        <p><strong>Termination:</strong> The agreement can be terminated by either party with written notice. Immediate termination applies in case of ethical misconduct or legal violations.</p>
      `,
    },
    {
      title: "Consent to Telemedicine Policy",
      content: `
        <p class="mb-2"><strong>Consent Statement:</strong> By using the app, users explicitly agree to receive digital medical consultations. They understand the limitations of online diagnosis and accept that it does not substitute a physical examination.</p>
        <p class="mb-2"><strong>Types of Consent:</strong>
            <ul>
                <li><strong>Implied Consent:</strong> Assumed when a patient initiates a consultation (e.g., by booking an appointment). Valid for most general teleconsultations.</li>
                <li><strong>Explicit Consent:</strong> Required for sensitive health issues, consultations involving minors, or if requested by the practitioner. Format includes clicking "I Consent/agree," written statement, or audio/video confirmation.</li>
            </ul>
        </p>
        <p class="mb-2"><strong>Information Provided Before Consent:</strong> Users are made aware of remote consultation limitations, prescription scope, data protection, referral possibility, and potential risks through Terms & Conditions and Policies.</p>
        <p class="mb-2"><strong>Consent for Minors or Incapacitated Patients:</strong> For patients under 18 or mentally/legally incapacitated, consent must be provided by a parent or legally authorized guardian, who must be present during the entire consultation. Practitioners are required to verify the relationship.</p>
        <p><strong>Right to Refuse or Withdraw Consent:</strong> Patients have the right to refuse or withdraw consent at any stage before or during the consultation. In such cases, the consultation will be immediately terminated.</p>
      `,
    },
    {
      title: "Refund and Cancellation Policy",
      content: `
        <p class="mb-2"><strong>Full Refund Scenarios:</strong> Users are eligible for a full refund if the selected doctor is unavailable, the consultation did not take place due to technical failure or network issues attributable to the doctor or the app, payment was deducted but booking not confirmed, or the doctor fails to join the session without prior communication. (Refund initiated after doctor confirmation).</p>
        <p class="mb-2"><strong>Refund Process and Timeline:</strong> Upon confirmation of a valid refund scenario, the refund will be processed within 5 working days and credited to the original mode of payment.</p>
        <p class="mb-2"><strong>Non-Refundable Scenarios:</strong> Refunds are not provided if the user misses the consultation, has network/connectivity issues at their end, is dissatisfied with the consultation outcome, or cancels less than 3 hours before the scheduled time.</p>
        <p class="mb-2"><strong>Cancellation by User:</strong> If canceled more than 3 hours before, a refund minus platform convenience fee may be considered.</p>
        <p class="mb-2"><strong>Cancellation by Doctor:</strong> If a doctor cancels due to emergency, the user is entitled to a full refund or free rescheduling.</p>
        <p><strong>Contact for Refunds:</strong> For refund requests, users must contact support within 24 hours of the missed or failed consultation at grievance@dayushclinics.com.</p>
      `,
    },
    {
      title: "Grievance Redressal Policy",
      content: `
        <p class="mb-2"><strong>Objective:</strong> To ensure timely and efficient resolution of user complaints and grievances in accordance with the IT Act, 2000, and Consumer Protection (E-Commerce) Rules, 2020.</p>
        <p class="mb-2"><strong>Scope:</strong> Applies to all users of the DAYUSH CLINICS mobile application and website, including patients, doctors, and general users.</p>
        <p class="mb-2"><strong>Grievance Categories:</strong> Technical/operational issues, payment/refund issues, misconduct by staff/doctors, consultation delays/failures, breach of privacy, or misuse of personal data.</p>
        <p class="mb-2"><strong>Grievance Redressal Officer (GRO):</strong> Mr A Mohan, Email: grievance@dayushclinics.com, Address: Dayush Clinics, Athavand (PO), Malappuram, Kerala 676301. The GRO shall acknowledge receipt within 48 hours and resolve within one month.</p>
        <p class="mb-2"><strong>Complaint Filing Process:</strong> Users can lodge a complaint via email, the in-app "Help & Support" section, or customer support hotline, ensuring all relevant details are included.</p>
        <p><strong>Resolution Mechanism:</strong> An acknowledgment is sent within 48 working hours, followed by an internal investigation and a resolution offered via email or call within 30 days. Unresolved issues may be escalated.</p>
      `,
    },
    {
      title: "Data Retention & Deletion Policy",
      content: `
        <p class="mb-2"><strong>Objective:</strong> Outlines how DAYUSH CLINICS collects, retains, stores, and deletes user data, including personal and health-related information, in compliance with Indian IT laws.</p>
        <p class="mb-2"><strong>Categories of Data Collected:</strong> Personal Data (name, contact), Health Data (medical history, consultation records), System Data (IP address, device type), Financial Data (transaction IDs).</p>
        <p class="mb-2"><strong>Data Retention Duration:</strong> Data is retained only as long as necessary for its purpose (legal, regulatory, tax, accounting). Typical periods: User/health records (up to 3 years after last activity), Financial (7 years), Consultation recordings (not stored unless consented, max 90 days).</p>
        <p class="mb-2"><strong>Data Deletion Requests:</strong> Users may request deletion of personal data by sending a written request to support@dayushclinics.com. Verification is conducted, and the process is completed within 15 working days, retaining only minimal necessary data for legal compliance.</p>
        <p class="mb-2"><strong>Automatic Deletion:</strong> Inactive accounts may be flagged for deletion after 3 years of inactivity, with users notified 30 days in advance.</p>
        <p><strong>Exceptions to Deletion:</strong> Data required for legal/regulatory obligations, dispute resolution, or anonymized statistical research will not be deleted.</p>
      `,
    },
    {
      title: "Practitioner Code of Conduct",
      content: `
        <p class="mb-2"><strong>Introduction:</strong> Outlines the standards of behavior and ethical guidelines expected from all medical professionals offering services via the DAYUSH CLINICS platform.</p>
        <p class="mb-2"><strong>Registration and Licensure Requirements:</strong> All practitioners must be duly qualified and licensed as per Indian medical authorities. Fraudulent documents lead to immediate termination and legal consequences.</p>
        <p class="mb-2"><strong>Professional Ethics and Responsibilities:</strong> Practitioners must maintain patient confidentiality, provide evidence-based and ethical medical advice, avoid misleading claims, and declare conflicts of interest.</p>
        <p class="mb-2"><strong>Consultation Conduct:</strong> Practitioners are expected to join consultations punctually, maintain a respectful tone, avoid harassment, clearly explain treatment plans, and use simple language.</p>
        <p class="mb-2"><strong>Digital Communication Protocols:</strong> Consultations must be in a secure/private environment. Recording is not permitted without explicit consent. Practitioners should not share personal contact numbers or ask patients to switch platforms.</p>
        <p class="mb-2"><strong>Prescription Guidelines:</strong> Prescriptions must be issued according to Telemedicine Practice Guidelines, use digital formats, and be based on sufficient case history.</p>
        <p class="mb-2"><strong>Zero Tolerance for Malpractice:</strong> DAYUSH CLINICS has zero tolerance for medical negligence, misuse of the platform to solicit clients, harassment, or fraud.</p>
        <p><strong>Compliance and Disciplinary Actions:</strong> Violations may result in warnings, suspension, deactivation, or reporting to medical regulatory authorities. DAYUSH CLINICS reserves the right to monitor consultations and investigate complaints.</p>
      `,
    },
    {
      title: "Minor/Child Consultation Policy",
      content: `
        <p class="mb-2"><strong>Objective:</strong> Governs the process and responsibilities for providing tele-consultation services to minors (individuals under 18 years of age), ensuring compliance with Indian legal, ethical, and medical standards.</p>
        <p class="mb-2"><strong>Legal Framework:</strong> Aligns with the Indian Majority Act, IT Act, Telemedicine Practice Guidelines, and the Protection of Children from Sexual Offences (POCSO) Act, 2012.</p>
        <p class="mb-2"><strong>Definition of a Minor:</strong> Any individual below the age of 18 years. All medical consultations for minors must involve a parent or legal guardian, unless legally emancipated or explicitly permitted by law.</p>
        <p class="mb-2"><strong>Consent Requirement:</strong> No consultation shall be conducted with a minor without the express consent and supervision of a parent or legal guardian. Guardians must initiate the consultation and be present during its entire duration. Identity verification of the guardian may be requested.</p>
        <p class="mb-2"><strong>Registration and Appointment Booking:</strong> Users must declare if the patient is a minor and input their own details as the guardian. Falsifying age or misleading information may lead to account suspension.</p>
        <p class="mb-2"><strong>Consultation Protocols for Minors:</strong> Practitioners must conduct consultations in the guardian's presence, use child-appropriate language, avoid one-on-one interactions without guardian involvement, and be alert to signs of abuse or neglect, reporting if required by the POCSO Act.</p>
        <p class="mb-2"><strong>Privacy and Confidentiality:</strong> All data related to minor patients is treated as sensitive personal data. DAYUSH CLINICS does not store video recordings of consultations unless legally required (with consent). Access is strictly limited.</p>
        <p><strong>Safeguarding Children’s Rights:</strong> Any complaint or indication of abuse, coercion, or inappropriate practitioner behavior will be taken seriously and reported to authorities if needed.</p>
      `,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 p-4 sm:p-6 lg:p-8 font-sans text-gray-800">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Header Section */}
        <div className="bg-emerald-700 text-white p-6 sm:p-8 text-center rounded-t-3xl">
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-2 tracking-tight">
            DAYUSH CLINICS
          </h1>
          <p className="text-emerald-100 text-lg sm:text-xl font-light">
            Legal & Policy Document Summary
          </p>
        </div>

        {/* Policy Sections */}
        <div className="p-4 sm:p-6 md:p-8 space-y-4">
          {policies.map((policy, index) => (
            <Accordion key={index} title={policy.title} content={policy.content} />
          ))}

          {/* Contact and Jurisdiction Footer */}
          <div className="mt-8 pt-6 border-t border-gray-200 text-center text-sm text-gray-500">
            <p className="mb-2">For any concerns, please contact the Grievance Officer:</p>
            <p className="mb-1">📧 Email: <a href="mailto:grievance@dayushclinics.com" className="text-emerald-600 hover:underline">grievance@dayushclinics.com</a></p>
            <p className="mb-4">📍 Address: Dayush Clinics, Athavand (PO), Malappuram, Kerala 676301</p>
            <p>This policy is governed by the laws of India. Any disputes arising shall fall under the jurisdiction of the courts in Malappuram, Kerala.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

interface AccordionProps {
  title: string;
  content: string;
}

const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-green-200 rounded-xl overflow-hidden shadow-sm">
      <button
        className="flex justify-between items-center w-full p-4 sm:p-5 bg-green-50 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-300 transition duration-300 ease-in-out"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg sm:text-xl font-semibold text-green-800">{title}</span>
        <svg
          className={`w-6 h-6 text-green-600 transform transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
      {isOpen && (
        <div className="p-4 sm:p-5 bg-white text-gray-700 leading-relaxed text-base border-t border-green-200"
             dangerouslySetInnerHTML={{ __html: content }} // Use dangerouslySetInnerHTML to render HTML string
        />
      )}
    </div>
  );
};