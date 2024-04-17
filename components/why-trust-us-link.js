import { memo, useCallback } from "react";
import { useRouter } from "next/router";

const WhyTrustUsLink = memo(() => {
  const router = useRouter();

  const onDivelementorWidgetWrapContainerClick = useCallback(() => {
    router.push("/about-us-present-leadership");
  }, [router]);

  return (
    <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[31px] pl-0 box-border max-w-full text-center text-xs text-black font-raleway">
      <div className="flex-1 flex flex-col items-start justify-start gap-[23.5px] max-w-full">
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[3.1px] box-border max-w-full">
          <div className="flex-1 bg-steelblue-500 flex flex-row items-start justify-center py-0 pr-[3px] pl-0 box-border gap-[0.1px] max-w-full z-[1] mq1275:flex-wrap mq1275:pl-[3px] mq1275:pt-[3px] mq1275:pb-[3px] mq1275:box-border">
            <button className="cursor-pointer [border:none] pt-[27.5px] pb-[23.5px] pr-[42px] pl-[42.9px] bg-steelblue-500 w-[162.8px] flex flex-row items-start justify-start box-border whitespace-nowrap hover:bg-deepskyblue-300">
              <div className="flex-1 relative text-xs tracking-[1px] leading-[14px] font-medium font-raleway text-black text-center inline-block min-w-[77.4px]">
                OUR STORY
              </div>
            </button>
            <button className="cursor-pointer [border:none] pt-[17.2px] px-[37.7px] pb-[12.8px] bg-steelblue-500 w-[162.8px] flex flex-row items-start justify-start box-border whitespace-nowrap hover:bg-deepskyblue-300">
              <div className="w-[81px] relative text-xs tracking-[0.16px] leading-[35px] font-medium font-raleway text-black text-center flex items-center justify-center min-w-[81px]">
                WHAT WE DO
              </div>
            </button>
            <button className="cursor-pointer [border:none] pt-7 px-[36.3px] pb-[23px] bg-steelblue-400 w-[162.8px] flex flex-row items-start justify-start box-border hover:bg-deepskyblue-300">
              <div className="flex-1 relative text-xs tracking-[1px] leading-[16px] font-medium font-raleway text-black text-center inline-block min-w-[89px]">
                OBJECTIVES
              </div>
            </button>
            <button className="cursor-pointer [border:none] pt-[15px] pb-[11px] pr-[27.5px] pl-[27.8px] bg-steelblue-500 w-[162.8px] flex flex-row items-start justify-start box-border whitespace-nowrap hover:bg-deepskyblue-300">
              <div className="h-[39px] flex-1 relative text-xs tracking-[1px] leading-[25px] font-medium font-raleway text-black text-center flex items-center justify-center">
                GENERAL INFORMATION
              </div>
            </button>
            <div className="flex-1 flex flex-row items-start justify-center min-w-[315px] max-w-full [row-gap:20px] mq750:flex-wrap">
              <button className="cursor-pointer [border:none] pt-7 pb-[23px] pr-[26.5px] pl-[27.6px] bg-steelblue-600 flex-1 flex flex-row items-start justify-start box-border min-w-[109px] shrink-0 [debug_commit:f6aba90] hover:bg-steelblue-200">
                <b className="flex-1 relative text-xs tracking-[1px] leading-[14px] font-raleway text-www-equalopp-org-1349x593-default-nero text-center">
                  CHAPTERS
                </b>
              </button>
              <div
                className="flex-1 bg-steelblue-500 flex flex-row items-start justify-start pt-[13px] pb-2 pr-[21.8px] pl-[38px] box-border min-w-[109px] shrink-0 [debug_commit:f6aba90] cursor-pointer z-[1] ml-[-1.5px] mq450:flex-1"
                onClick={onDivelementorWidgetWrapContainerClick}
              >
                <div className="h-11 flex-1 relative tracking-[1px] leading-[25px] font-medium flex items-center">
                  <span className="[line-break:anywhere]">
                    <p className="m-0">PRESENT</p>
                    <p className="m-0">LEADERSHIP</p>
                  </span>
                </div>
              </div>
              <button className="cursor-pointer [border:none] pt-[15px] px-[29.9px] pb-[11px] bg-steelblue-400 flex-1 flex flex-row items-start justify-start box-border min-w-[109px] shrink-0 [debug_commit:f6aba90] z-[2] ml-[-1.5px] hover:bg-deepskyblue-300 mq450:flex-1">
                <div className="h-[39px] flex-1 relative text-xs tracking-[1px] leading-[25px] font-medium font-raleway text-black text-center flex items-center justify-center">
                  TIMELINE
                </div>
              </button>
            </div>
          </div>
        </div>
        <b className="w-[77.4px] h-3.5 relative tracking-[1px] leading-[25px] flex text-www-equalopp-org-1349x593-default-nero items-center justify-center shrink-0 min-w-[77.4px] z-[1]">
          OUR STORY
        </b>
      </div>
    </div>
  );
});

export default WhyTrustUsLink;
