import { useMemo } from "react";

const PageFooter = ({
  social1,
  propWidth,
  propAlignSelf,
  onAboutTextClick,
  onFeaturesTextClick,
  onPricingTextClick,
  onGalleryTextClick,
  showPricing,
}) => {
  const footerStyle = useMemo(() => {
    return {
      width: propWidth,
      alignSelf: propAlignSelf,
    };
  }, [propWidth, propAlignSelf]);

  return (
    <footer
      className="w-[1387px] bg-www-equalopp-org-1349x593-default-nero flex flex-row items-end justify-between pt-5 pb-6 pr-[29px] pl-0 box-border max-w-full gap-[20px] z-[1] text-left text-base text-black font-h3 mq1050:flex-wrap mq1050:pl-5 mq1050:pr-5 mq1050:box-border"
      style={footerStyle}
    >
      <div className="h-[88px] w-[1387px] relative bg-www-equalopp-org-1349x593-default-nero hidden max-w-full" />
      <div className="h-11 w-[203px] flex flex-col items-start justify-start">
        <div className="w-[138.5px] h-11 relative z-[2] flex items-center justify-center">
          <img
            className="w-full h-full z-[2] object-contain absolute left-[4px] top-[0px] [transform:scale(1.364)]"
            loading="lazy"
            alt=""
            src="/divlogo@2x.png"
          />
        </div>
      </div>
      <div className="w-[582.5px] flex flex-col items-start justify-end pt-0 px-0 pb-2.5 box-border max-w-full">
        <div className="self-stretch flex flex-row items-start justify-between gap-[20px] z-[2] mq450:flex-wrap">
          <div
            className="relative inline-block min-w-[77px] cursor-pointer"
            onClick={onAboutTextClick}
          >
            Contact us
          </div>
          <div
            className="relative inline-block min-w-[64px] cursor-pointer"
            onClick={onFeaturesTextClick}
          >
            About us
          </div>
          <div
            className="self-stretch w-0 relative hidden cursor-pointer"
            onClick={onPricingTextClick}
          />
          <div
            className="relative inline-block min-w-[65px] cursor-pointer"
            onClick={onGalleryTextClick}
          >
            Chapters
          </div>
          <div className="relative inline-block min-w-[99px]">Eye magazine</div>
        </div>
      </div>
      <div className="w-[174px] flex flex-col items-start justify-end pt-0 px-0 pb-2.5 box-border">
        <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
          <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
            <img
              className="w-[13.1px] h-[22px] relative z-[2]"
              loading="lazy"
              alt=""
              src="/social.svg"
            />
          </div>
          <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
            <img
              className="w-6 h-[22px] relative object-cover z-[2]"
              alt=""
              src={social1}
            />
          </div>
          <img
            className="self-stretch w-[33.8px] relative max-h-full overflow-hidden shrink-0 min-h-[24px] z-[2]"
            alt=""
            src="/social-2.svg"
          />
          <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
            <img
              className="w-[25.1px] h-[22px] relative object-cover z-[2]"
              alt=""
              src="/social-3@2x.png"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PageFooter;
