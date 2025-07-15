import MailingInput from "./mailingInput";

const MailchimpFormContainer = ({ className }: { className?: string }) => {
  const postUrl = `https://gmail.us5.list-manage.com/subscribe/post`;

  const handleSubscribe = async (formData: { EMAIL: string }) => {
    try {
      const response = await fetch(postUrl, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          u: "9c38b440e60d2c551f41ddc0c",
          id: "1a39913c33",
          EMAIL: formData.EMAIL,
        }).toString(),
      });

      console.log(response); // log, otherwise unused.

      // With no-cors, we can't read the response, so assume success
      return { status: "success", message: "successfully subscribed!" };
    } catch (error) {
      console.log(error);
      return { status: "error", message: "something went wrong. try again." };
    }
  };

  return (
    <div className={className}>
      <MailingInput onSubscribe={handleSubscribe} />
    </div>
  );
};

export default MailchimpFormContainer;
