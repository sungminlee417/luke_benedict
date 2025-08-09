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
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

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
    setSubmitStatus('idle');

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
      )
      .then(() => {
        setLoading(false);
        setSubmitStatus('success');
        reset();
        // Auto-hide success message after 5 seconds
        setTimeout(() => setSubmitStatus('idle'), 5000);
      })
      .catch((err) => {
        console.error('Email submission failed:', err);
        setLoading(false);
        setSubmitStatus('error');
        // Auto-hide error message after 5 seconds
        setTimeout(() => setSubmitStatus('idle'), 5000);
      });
  };

  return (
    <section className="bg-white dark:bg-gray-900 transition-colors">
      <div
        id="contact"
        className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="text-center lg:text-left mb-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-4">
                {header}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto lg:mx-0 rounded-full mb-4"></div>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                {description}
              </p>
            </div>
          </div>

          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label className="sr-only" htmlFor="name">
                  Name
                </label>
                <input
                  {...register("name")}
                  className="w-full input input-bordered p-3 text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600 focus:border-primary dark:focus:border-primary"
                  placeholder="Name"
                  type="text"
                  id="name"
                />
                {errors.name && (
                  <small className="text-red-600 dark:text-red-400">{errors.name.message}</small>
                )}
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="sr-only" htmlFor="email">
                    Email
                  </label>
                  <input
                    {...register("email")}
                    className="w-full input input-bordered p-3 text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600 focus:border-primary dark:focus:border-primary"
                    placeholder="Email address"
                    type="email"
                    id="email"
                  />
                  {errors.email && (
                    <small className="text-red-600 dark:text-red-400">
                      {errors.email.message}
                    </small>
                  )}
                </div>

                <div>
                  <label className="sr-only" htmlFor="phone">
                    Phone
                  </label>
                  <input
                    {...register("phone")}
                    className="w-full input input-bordered p-3 text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600 focus:border-primary dark:focus:border-primary"
                    placeholder="Phone Number"
                    type="tel"
                    id="phone"
                  />
                  {errors.phone && (
                    <small className="text-red-600 dark:text-red-400">
                      {errors.phone.message}
                    </small>
                  )}
                </div>
              </div>

              <div>
                <label className="sr-only" htmlFor="message">
                  Message
                </label>
                <textarea
                  {...register("message")}
                  className="w-full textarea textarea-bordered p-3 text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600 focus:border-primary dark:focus:border-primary"
                  placeholder="Message"
                  rows={8}
                  id="message"
                ></textarea>
                {errors.message && (
                  <small className="text-red-600 dark:text-red-400">
                    {errors.message.message}
                  </small>
                )}
              </div>

              <div className="mt-4 space-y-4">
                <button
                  type="submit"
                  disabled={loading}
                  className={`btn btn-primary w-full ${loading ? "opacity-75 cursor-not-allowed" : ""}`}
                >
                  {loading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    "Send Enquiry"
                  )}
                </button>
                
                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="bg-green-50 dark:bg-green-900/50 border border-green-200 dark:border-green-800 text-green-800 dark:text-green-200 px-4 py-3 rounded-lg">
                    <p className="flex items-center gap-2">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Thank you! Your message has been sent successfully.
                    </p>
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="bg-red-50 dark:bg-red-900/50 border border-red-200 dark:border-red-800 text-red-800 dark:text-red-200 px-4 py-3 rounded-lg">
                    <p className="flex items-center gap-2">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      Sorry, there was an error sending your message. Please try again.
                    </p>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
