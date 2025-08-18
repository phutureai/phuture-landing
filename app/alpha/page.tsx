"use client";

import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

interface FormData {
  name: string;
  email: string;
  discord: string;
  interests: string;
  agree_to_terms: boolean;
}

interface SubmitStatus {
  type: "success" | "error" | null;
  message?: string;
}

export default function AlphaForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    discord: "",
    interests: "",
    agree_to_terms: false,
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>({
    type: null,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const submitToSupabase = async (
    data: FormData
  ): Promise<{ success: boolean; error?: string }> => {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    try {
      const payload = {
        ...data,
      };

      const { error } = await supabase
        .from("alpha_test_users")
        .insert([payload])

      if (error) {
        console.error("supabase-js insert error:", error);
        return { success: false, error: error.message };
      }
      return { success: true };
    } catch (error) {
      console.error("Supabase submission error:", error);
      return {
        success: false,
        error:
          error instanceof Error ? error.message : "Unknown error occurred",
      };
    }
  };

  const handleSubmit = async () => {
    if (
      !formData.name ||
      !formData.email ||
      !formData.discord ||
      !formData.interests ||
      !formData.agree_to_terms
    ) {
      setSubmitStatus({
        type: "error",
        message: "please fill in all required fields and agree to the terms.",
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null });

    try {
      const result = await submitToSupabase(formData);

      if (result.success) {
        setSubmitStatus({
          type: "success",
          message: "thank you! your interest has been submitted successfully.",
        });
        // Reset form
        setFormData({
          name: "",
          email: "",
          discord: "",
          interests: "",
          agree_to_terms: false,
        });
      } else {
        setSubmitStatus({
          type: "error",
          message:
            result.error ||
            "there was an error submitting the form. please try again.",
        });
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus({
        type: "error",
        message: "there was an unexpected error. please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid =
    formData.name &&
    formData.email &&
    formData.discord &&
    formData.interests &&
    formData.agree_to_terms;

  const cssVars = {
    ["--color-green1"]: "#1ed760",
    ["--color-green2"]: "#95ffe1",
    ["--color-green3"]: "#0c9b7d",
    ["--color-green3-light"]: "#90ee90",
    ["--color-green4"]: "#b3e1ca",
    ["--color-turquoise1"]: "#daf4f0",
    ["--color-turquoise2"]: "#70e2ff",
    ["--color-turquoise3"]: "#0e70ad",
  } as React.CSSProperties;

  return (
    <div
      className="min-h-screen py-12 px-4 lowercase phuture-form"
      style={{
        ...cssVars,
        background:
          "linear-gradient(50deg, var(--color-turquoise1), var(--color-green2))",
      }}
    >
      <div className="max-w-2xl mx-auto">
        <div className="bg-white/80 rounded-2xl shadow-xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-green3/90 mb-2">
              welcome to the phuture
            </h1>
            <p className="text-green3/80 font-semibold">
              alpha test onboarding information form
            </p>
          </div>

          {submitStatus.type === "success" && (
            <div className="mb-6 p-4 success-banner rounded-lg" role="status">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    style={{ color: "var(--color-green3)" }}
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <p
                    className="text-sm font-medium"
                    style={{ color: "var(--color-green3)" }}
                  >
                    {submitStatus.message}
                  </p>
                </div>
              </div>
            </div>
          )}

          {submitStatus.type === "error" && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <svg
                    className="h-5 w-5 text-red-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-red-800">
                    {submitStatus.message}
                  </p>
                </div>
              </div>
            </div>
          )}

          <div className="space-y-6">
            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="input w-full px-4 py-3 border border-gray-300 rounded-lg transition duration-200"
                placeholder="enter your full name"
                required
              />
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                email address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="input w-full px-4 py-3 border border-gray-300 rounded-lg transition duration-200"
                placeholder="enter your email address"
                required
              />
            </div>

            {/* Discord Field */}
            <div>
              <label
                htmlFor="discord"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                discord username <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="discord"
                name="discord"
                value={formData.discord}
                onChange={handleInputChange}
                className="input w-full px-4 py-3 border border-gray-300 rounded-lg transition duration-200"
                placeholder="enter your discord tag"
                required
              />
            </div>

            {/* Interests Text Area */}
            <div>
              <label
                htmlFor="interests"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                why test our alpha build?{" "}
                <span className="text-red-500">*</span>
              </label>
              <textarea
                id="interests"
                name="interests"
                value={formData.interests}
                onChange={handleInputChange}
                rows={4}
                className="input w-full px-4 py-3 border border-gray-300 rounded-lg transition duration-200"
                placeholder="can be as simple as one sentence: what interests you about testing our game (e.g for the experience, an interest in our mission, etc)?"
                required
              />
            </div>

            {/* Terms Checkbox */}
            <div className="bg-gray-50 rounded-lg p-4">
              <label className="flex items-start space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="agree_to_terms"
                  checked={formData.agree_to_terms}
                  onChange={handleInputChange}
                  className="w-4 h-4 border-gray-300 rounded mt-1 flex-shrink-0"
                  required
                />
                <span className="text-sm leading-relaxed">
                  i agree to participate in testing activities and understand
                  that:
                  <br />
                  • i may be contacted via email or discord regarding testing
                  opportunities
                  <br />• my personal information will be kept confidential and
                  secure
                  <span className="text-red-500 ml-1">*</span>
                </span>
              </label>
              <br />
              <span className="text-sm">
                thank you for your interest in testing our first alpha build. in
                return, you will be rewarded with paradimes — our game currency,
                on release! (you also have a high chance of being contacted for
                potential opportunities in the phuture 👀 such as internships)
              </span>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting || !isFormValid}
                className="w-full px-8 py-3 text-white font-medium rounded-lg submit-button focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition duration-200"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    submitting...
                  </span>
                ) : (
                  "submit interest"
                )}
              </button>
            </div>

            <p className="text-xs text-center">
              fields marked with <span className="text-red-500">*</span> are
              required
            </p>
          </div>
        </div>
      </div>

      {/* local styles to wire CSS variables into component visuals (focus rings, button hover, banners, placeholder casing) */}
      <style jsx>{`
        .phuture-form {
          font-family: inherit;
        }

        /* ensure placeholders are lowercase too */
        .phuture-form ::placeholder {
          text-transform: lowercase;
        }

        /* input/textarea focus styles using your color scheme */
        .phuture-form input:focus,
        .phuture-form textarea:focus {
          outline: none;
          border-color: var(--color-turquoise3);
          box-shadow: 0 0 0 6px var(--color-turquoise1);
        }

        /* submit button styles using your color scheme */
        .phuture-form .submit-button {
          background-color: var(--color-green1);
        }
        .phuture-form .submit-button:hover:not(:disabled) {
          background-color: var(--color-green3);
        }
        .phuture-form .submit-button:focus {
          box-shadow: 0 0 0 6px var(--color-turquoise1);
        }

        /* success banner */
        .phuture-form .success-banner {
          background-color: var(--color-green2);
          border: 1px solid var(--color-green4);
          color: var(--color-green3);
        }

        /* keep everything visually lowercase (covers labels, paragraphs, headings) */
        .phuture-form {
          text-transform: lowercase;
        }

        /* accessibility: ensure disabled styles are obvious */
        .phuture-form button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
      `}</style>
    </div>
  );
}
