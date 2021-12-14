import React from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import SubForm from "./SubForm";

const MailChimpForm = () => {
  return (
    <MailchimpSubscribe
      url={process.env.GATSBY_MAILCHIMP_URL}
      render={({ subscribe, status, message }) => (
        <SubForm
          status={status}
          message={message}
          onSubmitted={(formData) => subscribe(formData)}
        />
      )}
    />
  );
};

export default MailChimpForm;
