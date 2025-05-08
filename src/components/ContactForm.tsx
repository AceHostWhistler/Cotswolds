import React, { useState } from "react";
import { Check } from "lucide-react";
import Input from "@/components/Input";
import Label from "@/components/Label";

interface ContactFormProps {
  property?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({
  property = "General Inquiry",
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    checkin: "",
    checkout: "",
    guests: "1",
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    console.log("Submitting form data:", formData);

    try {
      // Submit to internal API endpoint
      const apiResponse = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          inquiryType: property,
          propertyInterest: property,
          dates: `${formData.checkin} to ${formData.checkout}`,
        }),
      });

      console.log("Response status:", apiResponse.status);
      
      // Get the response data
      let data;
      try {
        data = await apiResponse.json();
        console.log("Response data:", data);
      } catch (e) {
        console.error("Failed to parse response:", e);
        throw new Error("Failed to parse server response");
      }

      if (!apiResponse.ok) {
        const errorMessage = data?.error || "Network response was not ok";
        console.error("Form submission error:", errorMessage, data?.details);
        throw new Error(errorMessage);
      }

      // Also submit to Zapier as a backup
      try {
        const zapierWebhook = "https://hooks.zapier.com/hooks/catch/20756347/2r9c4e2/";
        await fetch(zapierWebhook, {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formData,
            property,
          }),
        });
        console.log("Backup submission to Zapier completed");
      } catch (zapierError) {
        console.warn("Zapier backup submission failed:", zapierError);
        // Don't throw error for Zapier - it's just a backup
      }

      setShowSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        checkin: "",
        checkout: "",
        guests: "1",
      });
    } catch (error: any) {
      console.error("Error submitting form:", error);
      setErrorMessage(error.message || "There was an error sending your message. Please try again or contact us directly at ben@acehost.ca");
    } finally {
      setIsSubmitting(false);
    }
  };

  const SuccessMessage = () => (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-3xl p-8 max-w-md mx-4 shadow-2xl">
        <div className="text-center">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-yellow-500/10 mb-4">
            <Check className="h-6 w-6 text-yellow-500" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            Inquiry Sent Successfully!
          </h3>
          <div className="mt-2 px-7 py-3">
            <p className="text-sm text-gray-500">
              Thank you for your interest in {property}. Our team will reach out
              to you shortly to assist with your booking.
            </p>
          </div>
          <div className="mt-5">
            <button
              onClick={() => setShowSuccess(false)}
              className="bg-yellow-500 text-black px-4 py-2 rounded-xl hover:bg-yellow-400 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {showSuccess && <SuccessMessage />}

      <form onSubmit={handleSubmit} className="space-y-6">
        {errorMessage && (
          <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
            <p className="text-red-700">{errorMessage}</p>
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label className="text-gray-700 text-sm font-medium">
              Full Name
            </Label>
            <Input
              id="name"
              name="name"
              placeholder="Your Name"
              required
              className="rounded-xl h-12 border-gray-200 focus:border-yellow-500 focus:ring-yellow-500"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-2">
            <Label className="text-gray-700 text-sm font-medium">
              Email Address
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="email@example.com"
              required
              className="rounded-xl h-12 border-gray-200 focus:border-yellow-500 focus:ring-yellow-500"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label className="text-gray-700 text-sm font-medium">
            Phone Number
          </Label>
          <Input
            id="phone"
            name="phone"
            placeholder="+1 (xxx) xxx-xxxx"
            className="rounded-xl h-12 border-gray-200 focus:border-yellow-500 focus:ring-yellow-500"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label className="text-gray-700 text-sm font-medium">
              Check-in Date
            </Label>
            <Input
              id="checkin"
              name="checkin"
              type="date"
              className="rounded-xl h-12 border-gray-200 focus:border-yellow-500 focus:ring-yellow-500"
              value={formData.checkin}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-2">
            <Label className="text-gray-700 text-sm font-medium">
              Check-out Date
            </Label>
            <Input
              id="checkout"
              name="checkout"
              type="date"
              className="rounded-xl h-12 border-gray-200 focus:border-yellow-500 focus:ring-yellow-500"
              value={formData.checkout}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-2">
            <Label className="text-gray-700 text-sm font-medium">
              Number of Guests
            </Label>
            <select
              id="guests"
              name="guests"
              className="w-full rounded-xl h-12 border-gray-200 focus:border-yellow-500 focus:ring-yellow-500"
              value={formData.guests}
              onChange={handleChange}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
              <option value="11+">11+</option>
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <Label className="text-gray-700 text-sm font-medium">Message</Label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Tell us about your stay requirements or any questions you have..."
            className="w-full rounded-xl border-gray-200 focus:border-yellow-500 focus:ring-yellow-500"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-yellow-500 text-black font-medium py-3 px-4 rounded-xl hover:bg-yellow-400 transition-colors disabled:opacity-70"
        >
          {isSubmitting ? "Sending..." : "Send Inquiry"}
        </button>

        <p className="text-xs text-gray-500 text-center mt-4">
          By submitting this form, you agree to our privacy policy and terms of
          service.
        </p>
      </form>
    </>
  );
};

export default ContactForm;
