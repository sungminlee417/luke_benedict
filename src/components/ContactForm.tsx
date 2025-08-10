"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { attributes } from "../../content/contact-form.md";

const CONTACT_FORM_SCHEMA = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: yup
    .string()
    .matches(/^[0-9]+$/, "Phone number must be numeric")
    .required("Phone number is required"),
  message: yup.string().required("Message is required"),
});

interface ContactFormAttributes {
  header: string;
  description: string;
}

const ContactForm = () => {
  const { header, description } = attributes as ContactFormAttributes;
  const [loading, setLoading] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(CONTACT_FORM_SCHEMA),
  });

  const onSubmit = (formData: any) => {
    setLoading(true);
    setSubmitStatus("idle");

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
      )
      .then(() => {
        setLoading(false);
        setSubmitStatus("success");
        reset();
        // Auto-hide success message after 5 seconds
        setTimeout(() => setSubmitStatus("idle"), 5000);
      })
      .catch((err) => {
        console.error("Email submission failed:", err);
        setLoading(false);
        setSubmitStatus("error");
        // Auto-hide error message after 5 seconds
        setTimeout(() => setSubmitStatus("idle"), 5000);
      });
  };

  return (
    <section className="section-padding bg-white dark:bg-gray-900 transition-colors relative overflow-hidden">
      <div
        id="contact"
        className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="grid grid-cols-1 gap-x-16 gap-y-12 lg:grid-cols-5">
          <div className="lg:col-span-2 animate-slide-in-left">
            <div className="text-center lg:text-left mb-8">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
                {header}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mb-6 animate-scale-in"></div>
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed font-light">
                {description}
              </p>
            </div>
          </div>

          <div className="lg:col-span-3 animate-slide-in-right">
            <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50 dark:border-gray-700/50">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="group">
                  <label
                    className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                    htmlFor="name"
                  >
                    Full Name
                  </label>
                  <input
                    {...register("name")}
                    className="w-full p-4 text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:border-primary dark:focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 group-hover:border-gray-300 dark:group-hover:border-gray-500"
                    placeholder="Enter your full name"
                    type="text"
                    id="name"
                  />
                  {errors.name && (
                    <small className="text-red-500 dark:text-red-400 mt-1 block animate-slide-up">
                      {errors.name.message}
                    </small>
                  )}
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="group">
                    <label
                      className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                      htmlFor="email"
                    >
                      Email Address
                    </label>
                    <input
                      {...register("email")}
                      className="w-full p-4 text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:border-primary dark:focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 group-hover:border-gray-300 dark:group-hover:border-gray-500"
                      placeholder="your@email.com"
                      type="email"
                      id="email"
                    />
                    {errors.email && (
                      <small className="text-red-500 dark:text-red-400 mt-1 block animate-slide-up">
                        {errors.email.message}
                      </small>
                    )}
                  </div>

                  <div className="group">
                    <label
                      className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                      htmlFor="phone"
                    >
                      Phone Number
                    </label>
                    <input
                      {...register("phone")}
                      className="w-full p-4 text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:border-primary dark:focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 group-hover:border-gray-300 dark:group-hover:border-gray-500"
                      placeholder="(555) 123-4567"
                      type="tel"
                      id="phone"
                    />
                    {errors.phone && (
                      <small className="text-red-500 dark:text-red-400 mt-1 block animate-slide-up">
                        {errors.phone.message}
                      </small>
                    )}
                  </div>
                </div>

                <div className="group">
                  <label
                    className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    {...register("message")}
                    className="w-full p-4 text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:border-primary dark:focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 group-hover:border-gray-300 dark:group-hover:border-gray-500 resize-none"
                    placeholder="Tell us about your project, event, or inquiry..."
                    rows={6}
                    id="message"
                  ></textarea>
                  {errors.message && (
                    <small className="text-red-500 dark:text-red-400 mt-1 block animate-slide-up">
                      {errors.message.message}
                    </small>
                  )}
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className={`group relative w-full bg-primary hover:bg-secondary text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-[1.02] ${
                      loading ? "opacity-75 cursor-not-allowed" : ""
                    }`}
                  >
                    <div className="relative flex items-center justify-center">
                      {loading ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                          <span>Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <span className="mr-2">Send Message</span>
                          <svg
                            className="w-5 h-5 transform transition-transform group-hover:translate-x-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                            />
                          </svg>
                        </>
                      )}
                    </div>
                  </button>
                </div>

                {/* Status Messages */}
                {submitStatus === "success" && (
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/50 dark:to-emerald-900/50 border-2 border-green-200 dark:border-green-700 text-green-800 dark:text-green-200 px-6 py-4 rounded-xl shadow-lg animate-slide-up">
                    <p className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-green-100 dark:bg-green-800 rounded-full flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-green-600 dark:text-green-300"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="font-semibold">
                        Thank you! Your message has been sent successfully.
                      </span>
                    </p>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="bg-gradient-to-r from-red-50 to-rose-50 dark:from-red-900/50 dark:to-rose-900/50 border-2 border-red-200 dark:border-red-700 text-red-800 dark:text-red-200 px-6 py-4 rounded-xl shadow-lg animate-slide-up">
                    <p className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-100 dark:bg-red-800 rounded-full flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-red-600 dark:text-red-300"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="font-semibold">
                        Sorry, there was an error sending your message. Please
                        try again.
                      </span>
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
