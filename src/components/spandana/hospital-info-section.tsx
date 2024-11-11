import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "../ui/separator";

export default function HospitalInfoSection() {
  return (
    <div className="w-full">
      {/* Contact Information Bar */}
      <div className="container mx-auto py-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center justify-items-center text-center md:text-left">
          <div className="flex items-center gap-2">
            <Phone className="h-5 w-5 text-sky-400" />
            <div>
              <p className="text-sm text-muted-foreground">Give us a Call</p>
              <p className="font-medium">+91 8559225919</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-5 w-5 text-sky-400" />
            <div>
              <p className="text-sm text-muted-foreground">Send us a Message</p>
              <p className="font-medium">care@spandanahospital.com</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-sky-400" />
            <div>
              <p className="text-sm text-muted-foreground">
                Visit our Location
              </p>
              <p className="font-medium">Parthasaradhi Nagar, Dharmavaram</p>
            </div>
          </div>
        </div>
      </div>
      <Separator className='my-4'/>

      {/* Services Information */}
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="bg-[#45c7d1] p-8 text-white flex flex-col min-h-[300px]">
          <h2 className="text-2xl font-bold mb-4">Top Doctors</h2>
          <Separator className="bg-white mb-4" />
          <div className="flex-grow">
            <p className="mb-6 pb-3">
              Top doctors provide exceptional care, ensuring excellent hospital
              services. Our team of experienced physicians delivers cutting-edge
              treatments and compassionate care to every patient.
            </p>
          </div>
          <Button
            variant="outline"
            className="text-black border-white hover:bg-white/20 mt-auto"
          >
            Read More
          </Button>
        </div>
        <div className="bg-[#0088cc] p-8 text-white flex flex-col min-h-[300px]">
          <h2 className="text-2xl font-bold mb-4">24 Hours Service</h2>
          <Separator className="bg-white mb-4" />
          <div className="flex-grow">
            <p className="mb-6 pb-3">
              Round-the-clock support, ensuring immediate care and assistance
              anytime needed
            </p>
          </div>
          <Button
            variant="outline"
            className="text-black border-white hover:bg-white/20 mt-auto"
          >
            Read More
          </Button>
        </div>
        <div className="bg-[#0055a5] p-8 text-white flex flex-col min-h-[300px]">
          <h2 className="text-2xl font-bold mb-4">Opening Hours</h2>
          <Separator className="bg-white mb-4" />
          <div className="flex-grow">
            <div className="space-y-2 mb-6 pb-3">
              <div className="flex justify-between">
                <span>Monday-Saturday</span>
                <div className="flex flex-col items-end">
                  <span>10 Am - 02 Pm</span>
                  <span>06 Pm - 08 Pm</span>
                </div>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span>9 Am - 2 Pm</span>
              </div>
            </div>
          </div>
          <Button
            variant="outline"
            className="text-black border-white hover:bg-white/20 mt-auto"
          >
            Read More
          </Button>
        </div>
      </div>
      <Separator className='my-4'/>

      {/* Dedicated Care Section */}
      <div className="container mx-auto py-16 px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-600 mb-4">
          Dedicated to delivering exceptional, patient-centred care and
          treatments.
        </h1>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          We are committed to delivering exceptional, patient-focused treatments
          with compassionate care, ensuring optimal health outcomes.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Patient-Centered Care
            </h3>
            <p className="text-gray-600">
              Focused on personalized treatments and individual patient needs.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">
              State-of-the-Art Technology
            </h3>
            <p className="text-gray-600">
              Equipped with advanced medical equipment for precise diagnosis and
              treatments.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Experienced Medical Team
            </h3>
            <p className="text-gray-600">
              Renowned doctors and specialists, providing expert care across
              various fields.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">
              24/7 Emergency Services
            </h3>
            <p className="text-gray-600">
              Immediate, round-the-clock care to handle medical emergencies
              swiftly and efficiently.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
