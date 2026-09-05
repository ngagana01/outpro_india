"use client";

import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Save the form reference before the async operation
    const form = e.currentTarget;

    setBusy(true);

    const formData = new FormData(form);

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(Object.fromEntries(formData.entries())),
      });

      if (response.ok) {
        setSent(true);

        // Reset using the saved form reference
        form.reset();
      } else {
        alert("Please check the form and try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <>
      {/* Page Header */}
      <section className="page">
        <div className="container">
          <div className="eyebrow">Start a Conversation</div>

          <h1>Tell us what you want to build.</h1>

          <p>
            Share your challenge, timeline and goals. Your enquiry will be
            stored securely for the team.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section">
        <div className="container contact">
          {/* Contact Information */}
          <div>
            <h2>Let’s talk.</h2>

            <p>hello@outpro.india</p>

            <div className="card">
              <div className="eyebrow">Response time</div>

              <p>Usually within 1–2 business days.</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card">
            <form className="form" onSubmit={submit}>
              {sent && (
                <p className="green">
                  Thanks! Your enquiry was submitted successfully.
                </p>
              )}

              {/* Name */}
              <div className="field">
                <label htmlFor="name">Name *</label>

                <input
                  id="name"
                  name="name"
                  required
                  placeholder="Your name"
                />
              </div>

              {/* Company */}
              <div className="field">
                <label htmlFor="company">Company</label>

                <input
                  id="company"
                  name="company"
                  placeholder="Company name"
                />
              </div>

              {/* Email */}
              <div className="field">
                <label htmlFor="email">Email *</label>

                <input
                  id="email"
                  name="email"
                  required
                  type="email"
                  placeholder="you@company.com"
                />
              </div>

              {/* Service */}
              <div className="field">
                <label htmlFor="service">Service</label>

                <select id="service" name="service">
                  <option value="Web Development">
                    Web Development
                  </option>

                  <option value="Digital Transformation">
                    Digital Transformation
                  </option>

                  <option value="UI/UX Design">
                    UI/UX Design
                  </option>

                  <option value="AI & Automation">
                    AI & Automation
                  </option>

                  <option value="Mobile Applications">
                    Mobile Applications
                  </option>

                  <option value="Digital Marketing">
                    Digital Marketing
                  </option>
                </select>
              </div>

              {/* Message */}
              <div className="field">
                <label htmlFor="message">Message *</label>

                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Tell us about your project..."
                  rows={6}
                />
              </div>

              {/* Submit Button */}
              <button
                disabled={busy}
                className="btn primary"
                type="submit"
              >
                {busy ? "Sending..." : "Send Enquiry"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}