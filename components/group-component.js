import { memo } from "react";
import Property1Default from "./property1-default";

const GroupComponent = memo(() => {
  return (
    <footer className="self-stretch bg-www-equalopp-org-1349x593-default-nero flex flex-row items-end justify-between pt-[27px] pb-11 pr-[52.2px] pl-24 box-border top-[0] z-[99] sticky gap-[20px] max-w-full mq450:pl-5 mq450:box-border mq725:pl-12 mq725:pr-[26px] mq725:box-border">
      <div className="h-[116px] w-[1429px] relative bg-www-equalopp-org-1349x593-default-nero hidden max-w-full" />
      <div className="h-[116px] w-[1429px] relative bg-www-equalopp-org-1349x593-default-nero hidden max-w-full" />
      <div className="h-[45px] w-[296.5px] flex flex-col items-start justify-end pt-0 px-0 pb-3 box-border">
        <div className="w-[137px] h-[33px] relative z-[2] flex items-center justify-center">
          <img
            className="w-full h-full z-[2] object-contain absolute left-[5px] top-[1px] [transform:scale(1.818)]"
            loading="lazy"
            alt=""
            src="/divlogo2@2x.png"
          />
        </div>
      </div>
      <div className="w-[575px] flex flex-col items-start justify-end pt-0 px-0 pb-[9px] box-border max-w-full mq1050:w-0">
        <Property1Default
          about="Contact us"
          features="About us"
          pricing="Initiatives"
          gallery="Chapters"
          team="Eye magazine"
          property1DefaultAlignSelf="stretch"
          property1DefaultGap="40px"
          property1DefaultWidth="unset"
          aboutMinWidth="77px"
          featuresMinWidth="64px"
          pricingMinWidth="69px"
          galleryMinWidth="65px"
          teamMinWidth="99px"
        />
      </div>
      <div className="flex flex-row items-start justify-start gap-[25.8px]">
        <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
          <img
            className="w-[12.9px] h-[22px] relative z-[2]"
            loading="lazy"
            alt=""
            src="/social12.svg"
          />
        </div>
        <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
          <img
            className="w-[23.7px] h-[22px] relative object-cover z-[2]"
            loading="lazy"
            alt=""
            src="/social-1@2x.png"
          />
        </div>
        <img
          className="self-stretch w-[33.4px] relative max-h-full overflow-hidden shrink-0 min-h-[24px] z-[2]"
          loading="lazy"
          alt=""
          src="/social-2.svg"
        />
        <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
          <img
            className="w-[24.8px] h-[22px] relative object-cover z-[2]"
            loading="lazy"
            alt=""
            src="/social-3@2x.png"
          />
        </div>
      </div>
    </footer>
  );
});

export default GroupComponent;
