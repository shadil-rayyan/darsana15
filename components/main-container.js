import { memo } from "react";

const MainContainer = memo(() => {
  return (
    <section className="mt-[-610px] self-stretch h-[515px] flex flex-row items-start justify-center pt-0 pb-[442px] pr-[21px] pl-5 box-border max-w-full shrink-0 text-left text-base text-gray1-300 font-nunito mq800:pb-[287px] mq800:box-border">
      <div className="self-stretch w-[1254px] flex flex-row items-end justify-start gap-[26.9px] top-[0] z-[99] sticky max-w-full">
        <div className="self-stretch w-[194.1px] flex flex-col items-start justify-end pt-0 px-0 pb-[13px] box-border">
          <img
            className="w-[147.4px] flex-1 relative max-h-full object-contain"
            alt=""
            src="/divlogo@2x.png"
          />
        </div>
        <div className="h-[61px] flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[2.6px] box-border max-w-full">
          <div className="self-stretch flex-1 rounded-11xl bg-whitesmoke flex flex-row items-end justify-between pt-[18px] pb-[18.2px] pr-12 pl-[45px] gap-[20px] mq1125:hidden mq1125:pl-[22px] mq1125:pr-6 mq1125:box-border">
            <div className="self-stretch w-[44.3px] relative tracking-[0.16px] leading-[22.4px] text-steelblue-400 flex items-center shrink-0">
              Home
            </div>
            <div className="self-stretch w-[69.5px] relative tracking-[0.16px] leading-[22.4px] flex items-center shrink-0 whitespace-nowrap">
              About Us
            </div>
            <div className="self-stretch w-[118.1px] flex flex-row items-start justify-start gap-[4px]">
              <div className="self-stretch flex-1 relative tracking-[0.16px] leading-[22.4px] flex items-center whitespace-nowrap shrink-0">
                Key Initiatives
              </div>
              <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                <img
                  className="w-[12.2px] h-3 relative overflow-hidden shrink-0"
                  alt=""
                  src="/link.svg"
                />
              </div>
            </div>
            <div className="self-stretch w-[133.2px] flex flex-row items-start justify-start gap-[3.9px]">
              <div className="self-stretch flex-1 relative tracking-[0.16px] leading-[22.4px] flex items-center whitespace-nowrap">
                Other Initiatives
              </div>
              <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                <img
                  className="w-[12.2px] h-3 relative overflow-hidden shrink-0"
                  alt=""
                  src="/link-1.svg"
                />
              </div>
            </div>
            <div className="w-[83.1px] flex flex-col items-start justify-start py-0 pr-[16.5px] pl-0 box-border">
              <div className="self-stretch h-[22px] relative tracking-[0.16px] leading-[22.4px] flex items-center shrink-0 whitespace-nowrap">{`Product `}</div>
            </div>
            <div className="h-3 w-[12.2px] relative overflow-hidden shrink-0 hidden" />
            <div className="self-stretch w-[100.9px] relative tracking-[0.16px] leading-[22.4px] flex items-center shrink-0">
              Actvities
            </div>
            <div className="self-stretch w-[80.7px] relative tracking-[0.16px] leading-[22.4px] flex items-center shrink-0 whitespace-nowrap">
              Contact Us
            </div>
          </div>
        </div>
        <div className="w-[106px] rounded-21xl bg-steelblue-400 box-border flex flex-row items-start justify-start pt-4 pb-[17px] pr-[23px] pl-[26.8px] whitespace-nowrap text-www-equalopp-org-1349x593-default-nero font-h3 border-[2px] border-solid border-steelblue-400">
          <b className="h-[19px] w-[52.4px] relative tracking-[0.32px] leading-[24px] flex items-center shrink-0">
            Sign In
          </b>
        </div>
      </div>
    </section>
  );
});

export default MainContainer;
