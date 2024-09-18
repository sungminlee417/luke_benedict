"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

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

const ContactForm = () => {
  const [loading, setLoading] = useState<boolean>(false);

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

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
      )
      .then(() => {
        setLoading(false);
        reset();
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div className="lg:col-span-2 lg:py-12">
            <h2 className="text-center lg:text-left text-2xl font-bold sm:text-3xl mb-2">
              Contact Me
            </h2>
            <p className="w-full text-center lg:text-left text-lg">
              If you would like to get in touch, please fill out the following
              contact form.
            </p>
          </div>

          <div className="card p-8 lg:col-span-3 lg:p-12">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label className="sr-only" htmlFor="name">
                  Name
                </label>
                <input
                  {...register("name")}
                  className="w-full input input-bordered p-3 text-sm"
                  placeholder="Name"
                  type="text"
                  id="name"
                />
                {errors.name && (
                  <small className="text-red-600">{errors.name.message}</small>
                )}
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="sr-only" htmlFor="email">
                    Email
                  </label>
                  <input
                    {...register("email")}
                    className="w-full input input-bordered p-3 text-sm"
                    placeholder="Email address"
                    type="email"
                    id="email"
                  />
                  {errors.email && (
                    <small className="text-red-600">
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
                    className="w-full input input-bordered p-3 text-sm"
                    placeholder="Phone Number"
                    type="tel"
                    id="phone"
                  />
                  {errors.phone && (
                    <small className="text-red-600">
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
                  className="w-full textarea textarea-bordered p-3 text-sm"
                  placeholder="Message"
                  rows={8}
                  id="message"
                ></textarea>
                {errors.message && (
                  <small className="text-red-600">
                    {errors.message.message}
                  </small>
                )}
              </div>

              <div className="mt-4">
                <button
                  type="submit"
                  className={`btn btn-primary ${loading ? "loading" : ""}`}
                >
                  {loading ? "Sending..." : "Send Enquiry"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
