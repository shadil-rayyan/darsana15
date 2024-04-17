import { memo } from "react";
import Content1 from "./content1";

const ContactInfo = memo(() => {
  return (
    <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[21px] box-border max-w-full text-left text-13xl text-black font-h3">
      <div className="w-[996px] flex flex-row flex-wrap items-center justify-start gap-[48px] shrink-0 [debug_commit:f6aba90] mq750:gap-[24px]">
        <Content1
          iconEmail="/icon--email.svg"
          heading="Email"
          link="hello@relume.io"
        />
        <Content1
          iconEmail="/icon--phone.svg"
          heading="Phone"
          link="+1 (555) 000-0000"
        />
        <Content1
          iconEmail="/icon--pin.svg"
          heading="Bangalore"
          link="123 Sample St, Sydney NSW 2000 AU"
        />
      </div>
    </div>
  );
});

export default ContactInfo;
