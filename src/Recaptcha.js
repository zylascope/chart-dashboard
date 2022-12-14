import React from "react";
import ReCAPTCHA from "react-google-recaptcha";

export const Recaptcha = ({ onCaptchaChange, onCaptchaExpire }) => {
  const myCaptcha = "6LeSrHUeAAAAAPhhv5g1QImYpdkqmm54yidKVbQ-";
  const testCaptcha = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";
  const thriveCaptcha = "6LdSq3UeAAAAAJJOlorbggChfBIufDNPqg-KzT5E";
  let recaptchaRef = React.createRef();
  return (
    <>
      <ReCAPTCHA
        // data-sitekey: 6Lev6G0eAAAAAJBIO4JURRuj-YpulVkhPwoaxuwA
        //test-sitekey:6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI
        //sitekey={process.env.REACT_APP_TEST_KEY}
        ref={(el) => {
          recaptchaRef = el;
        }}
        sitekey={thriveCaptcha}
        onChange={(token) => {
          onCaptchaChange(token, recaptchaRef);
        }}
        onExpire={onCaptchaExpire}
        fullWidth
        align="center"

        // style={{width:"200px"}}
      />
    </>
  );
};
