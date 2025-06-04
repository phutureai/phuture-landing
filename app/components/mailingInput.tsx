"use client";

import { useState, FormEvent, useEffect } from "react";

interface MailingInputProps {
  status: string | null;
  message: string | Error | null;
  onValidated: (formData: { EMAIL: string }) => void;
}

export const MailingInput = ({
  status,
  message,
  onValidated,
}: MailingInputProps) => {
  const [userInput, setUserInput] = useState<string>("");

  useEffect(() => {
    if (status === "success") {
      setUserInput("");
    }
  }, [status]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (userInput && userInput.includes("@")) {
      onValidated({ EMAIL: userInput });
    }
  };

  return (
    <>
      <form className="font-semibold text-turquoise2" onSubmit={handleSubmit}>
        <div className="flex md:flex-row flex-col">
          <input
            type="email"
            name="EMAIL"
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="hello@phutureai.com"
            required
            className="px-4 p-3 w-[75%] placholder:text-turquoise1 rounded-l-lg border border-turquoise2"
          />
          <input
            type="submit"
            value="Subscribe"
            className="px-4 p-3 cursor-pointer rounded-r-lg border border-turquoise2"
          />
        </div>

        {/* status */}
        <div className="w-full flex items-center justify-center">
          {status === "sending" && (
            <div className="text-blue-500 mt-2">Sending...</div>
          )}
          {status === "error" && (
            <div
              className="text-red-500 mt-2"
              dangerouslySetInnerHTML={{
                __html: message?.toString() || "An error occurred",
              }}
            />
          )}
          {status === "success" && (
            <div
              className="text-green-500 mt-2"
              dangerouslySetInnerHTML={{
                __html: message?.toString() || "Success!",
              }}
            />
          )}
        </div>
      </form>
    </>
  );
};
