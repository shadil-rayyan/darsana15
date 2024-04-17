import { memo } from "react";

const Content1 = memo(({ iconEmail, heading, link }) => {
  return (
    <div className="flex-1 flex flex-col items-start justify-start gap-[24px] min-w-[225px] text-left text-13xl text-black font-h3">
      <img
        className="w-12 h-12 relative overflow-hidden shrink-0"
        loading="lazy"
        alt=""
        src={iconEmail}
      />
      <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
          <h1 className="m-0 self-stretch relative text-inherit leading-[42px] font-bold font-inherit mq1050:text-7xl mq1050:leading-[33px] mq450:text-lgi mq450:leading-[25px]">
            {heading}
          </h1>
          <div className="self-stretch h-12 relative text-base leading-[150%] hidden">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in ero.
          </div>
        </div>
        <div className="self-stretch relative text-base [text-decoration:underline] leading-[150%] whitespace-nowrap">
          {link}
        </div>
      </div>
    </div>
  );
});

export default Content1;
