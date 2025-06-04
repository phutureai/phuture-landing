import MailchimpSubscribe from "react-mailchimp-subscribe";
import { MailingInput } from "./mailingInput";

const MailchimpFormContainer = ({ className }: { className?: string }) => {
  const postUrl = `https://gmail.us11.list-manage.com/subscribe/post?u=${process.env.NEXT_PUBLIC_MAILCHIMPU}&id=${process.env.NEXT_PUBLIC_MAILCHIMPID}`;

  return (
    <div className={className}>
      <MailchimpSubscribe
        url={postUrl}
        render={({ subscribe, status, message }) => (
          <MailingInput
            status={status}
            message={message}
            onValidated={(formData) => subscribe(formData)}
          />
        )}
      />
    </div>
  );
};

export default MailchimpFormContainer;
