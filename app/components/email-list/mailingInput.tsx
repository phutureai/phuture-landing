"use client";

import { useState, FormEvent } from "react";
import AlertFlash from "./alert";
import { AnimatePresence } from "motion/react";

interface MailingInputProps {
  onSubscribe: (formData: {
    EMAIL: string;
  }) => Promise<{ status: string; message: string }>;
}

const MailingInput: React.FC<MailingInputProps> = ({ onSubscribe }) => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<string | null>(null);
  const [message, setMessage] = useState<string>("");
  const [showAlert, setShowAlert] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      setStatus("error");
      setMessage("please enter a valid email address");
      setShowAlert(true);
      return;
    }

    setStatus("sending");
    setMessage("sending...");
    setShowAlert(true);

    try {
      const result = await onSubscribe({ EMAIL: email });
      setStatus(result.status);
      setMessage(result.message);

      if (result.status === "success") {
        setEmail("");
        setShowAlert(true);
      }
    } catch (error) {
      console.log(error);
      setStatus("error");
      setMessage("something went wrong. try again.");
    }
  };

  return (
    <>
      <form className="font-semibold text-turquoise2" onSubmit={handleSubmit}>
        <div className="flex md:flex-row flex-col md:gap-0 gap-2 text-center justify-center">
          <input
            type="email"
            name="EMAIL"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="waitinglist@phutureai.com"
            required
            disabled={status === "sending"}
            className="px-4 p-3 w-[100%] placeholder:text-turquoise2/75 rounded-l-lg rounded-r-lg md:rounded-r-none border-2 border-turquoise2 focus:outline-none focus:ring-1 focus:ring-turquoise1 disabled:opacity-50"
          />
          <input
            type="submit"
            value="join."
            disabled={showAlert}
            className="px-4 p-3 cursor-pointer rounded-r-lg rounded-l-lg md:rounded-l-none border-r-2 border-t-2 border-b-2 md:border-l-0 border-l-2 border-turquoise2 disabled:opacity-50 disabled:cursor-not-allowed"
          />
        </div>
      </form>

      <AnimatePresence
        initial={false}
        onExitComplete={() => {
          setShowAlert(false);
        }}
      >
        {showAlert && (
          <>
            <AlertFlash
              status={
                status == "sending"
                  ? "SENDING"
                  : status == "success"
                  ? "SUCCESS"
                  : "ERROR"
              }
              message={message}
              onClose={() => setShowAlert(false)}
            />
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default MailingInput;
