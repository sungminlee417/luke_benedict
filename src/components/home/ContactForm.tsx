"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";

interface FormData {
  name: string;
  email_id: string;
  phone_number: string;
  message: string;
}

const ContactForm = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email_id: "",
    phone_number: "",
    message: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    event.preventDefault();
    const formDataRecord: Record<string, unknown> = {
      from_name: formData.name,
      email_id: formData.email_id,
      phone_number: formData.phone_number,
      message: formData.message,
    };
    emailjs
      .send(
        "service_6u3gsw9",
        "template_sp4f5up",
        formDataRecord,
        "eawBAYORqZ3KiK0H3"
      )
      .then((response) => {
        console.log(response);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      })
      .finally(() => {
        setFormData({
          name: "",
          email_id: "",
          phone_number: "",
          message: "",
        });
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
              If you would like to get in touch with Luke Benedict to inquire
              about performances, commission a composition, schedule a private
              lesson (for piano, composition, or music theory!), or ask about
              anything else music related, please fill out the following contact
              form.
            </p>
          </div>

          <div className="card p-8 lg:col-span-3 lg:p-12">
            <form action="#" className="space-y-4">
              <div>
                <label className="sr-only" htmlFor="name">
                  Name
                </label>
                <input
                  className="w-full input input-bordered p-3 text-sm"
                  placeholder="Name"
                  type="text"
                  id="name"
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="sr-only" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="w-full input input-bordered p-3 text-sm"
                    placeholder="Email address"
                    type="email"
                    id="email"
                  />
                </div>

                <div>
                  <label className="sr-only" htmlFor="phone">
                    Phone
                  </label>
                  <input
                    className="w-full input input-bordered p-3 text-sm"
                    placeholder="Phone Number"
                    type="tel"
                    id="phone"
                  />
                </div>
              </div>

              <div>
                <label className="sr-only" htmlFor="message">
                  Message
                </label>

                <textarea
                  className="w-full textarea textarea-bordered p-3 text-sm"
                  placeholder="Message"
                  rows={8}
                  id="message"
                ></textarea>
              </div>

              <div className="mt-4">
                <button type="submit" className="btn btn-primary">
                  Send Enquiry
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
