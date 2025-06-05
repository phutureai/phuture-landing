"use client";

import { useState, FormEvent } from "react";

interface MailingInputProps {
  onSubscribe: (formData: { EMAIL: string }) => Promise<{ status: string; message: string }>;
}

const MailingInput: React.FC<MailingInputProps> = ({ onSubscribe }) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<string | null>(null);
  const [message, setMessage] = useState<string>('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      setStatus('error');
      setMessage('please enter a valid email address');
      return;
    }

    setStatus('sending');
    setMessage('');

    try {
      const result = await onSubscribe({ EMAIL: email });
      setStatus(result.status);
      setMessage(result.message);
      
      if (result.status === 'success') {
        setEmail('');
      }
    } catch (error) {
      console.log(error);
      setStatus('error');
      setMessage('something went wrong. try again.');
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
            placeholder="hello@phutureai.com"
            required
            disabled={status === "sending"}
            className="px-4 p-3 md:w-[75%] w-[100%] placholder:text-turquoise1 rounded-l-lg rounded-r-lg md:rounded-r-none border-2 border-turquoise2 focus:outline-none focus:ring-1 focus:ring-turquoise1 disabled:opacity-50"
          />
          <input
            type="submit"
            value={status === "sending" ? "..." : "join."}
            disabled={status === "sending"}
            className="px-4 p-3 cursor-pointer rounded-r-lg rounded-l-lg md:rounded-l-none border-r-2 border-t-2 border-b-2 md:border-l-0 border-l-2 border-turquoise2 disabled:opacity-50 disabled:cursor-not-allowed"
          />
        </div>

        {/* Status messages */}
        <div className="w-full flex items-center justify-center">
          {status === "sending" && (
            <div className="text-blue2 mt-2">sending...</div>
          )}
          {status === "error" && (
            <div className="text-red-500 mt-2 text-center">
              {message}
            </div>
          )}
          {status === "success" && (
            <div className="text-green1 mt-2 text-center">
              {message}
            </div>
          )}
        </div>
      </form>
    </>
  );
};

export default MailingInput;