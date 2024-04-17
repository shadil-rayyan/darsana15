import { useCallback } from "react";
import FrameComponent4 from "../components/frame-component4";
import { useRouter } from "next/router";

const AboutUsObjective = () => {
  const router = useRouter();

  const onDivelementorWidgetWrap3Click = useCallback(() => {
    router.push("/about-us-general-information");
  }, [router]);

  return (
    <div className="w-full relative bg-www-equalopp-org-1349x593-default-nero flex flex-col items-center justify-start pt-[141px] pb-[517px] pr-5 pl-[29px] box-border leading-[normal] tracking-[normal]">
      <img
        className="w-[1412px] h-[2117px] relative hidden max-w-full"
        alt=""
        src="/rectangle-221.svg"
      />
      <section className="w-[1217.1px] flex flex-row items-start justify-center py-0 pr-0 pl-[159px] box-border max-w-full text-left text-45xl text-black font-h3 mq450:pl-5 mq450:box-border mq750:pl-[79px] mq750:box-border">
        <h1 className="m-0 h-[175px] w-[534px] relative text-inherit tracking-[0.16px] leading-[28.8px] font-extrabold font-inherit flex items-center shrink-0 max-w-full z-[1] mq450:text-19xl mq450:leading-[17px] mq1050:text-32xl mq1050:leading-[23px]">
          ABOUT US
        </h1>
      </section>
      <section className="w-[1217.1px] flex flex-col items-end justify-start gap-[105.5px] max-w-full text-center text-xs text-black font-raleway mq450:gap-[26px] mq750:gap-[53px]">
        <FrameComponent4
          image6IconWidth="unset"
          arrow1IconFlex="unset"
          arrow1IconWidth="1082px"
          propBackgroundImage="url('/image-16@2x.png')"
        />
        <div className="self-stretch flex flex-row flex-wrap items-end justify-start max-w-full [row-gap:20px]">
          <div className="flex-1 flex flex-col items-start justify-start py-0 px-0 box-border min-w-[741px] max-w-full mq1050:min-w-full">
            <div className="ml-[-0.3000000000029104px] self-stretch bg-steelblue-500 flex flex-row items-start justify-center py-0 pr-[3px] pl-0 gap-[0.1px] shrink-0 [debug_commit:f6aba90] z-[1] mq1050:flex-wrap mq1050:pl-[3px] mq1050:pt-[3px] mq1050:pb-[3px] mq1050:box-border">
              <button className="cursor-pointer [border:none] pt-[27.5px] pb-[28.5px] pr-[42.5px] pl-[42.9px] bg-steelblue-500 w-[162.8px] flex flex-row items-start justify-start box-border whitespace-nowrap hover:bg-deepskyblue-300">
                <div className="flex-1 relative text-xs tracking-[1px] leading-[14px] font-medium font-raleway text-black text-center inline-block min-w-[77.4px]">
                  OUR STORY
                </div>
              </button>
              <button className="cursor-pointer [border:none] pt-[17.2px] px-[37.7px] pb-[17.8px] bg-steelblue-500 w-[162.8px] flex flex-row items-start justify-start box-border whitespace-nowrap hover:bg-deepskyblue-300">
                <div className="w-[81px] relative text-xs tracking-[0.16px] leading-[35px] font-medium font-raleway text-black text-center flex items-center justify-center min-w-[81px]">
                  WHAT WE DO
                </div>
              </button>
              <button className="cursor-pointer [border:none] py-7 px-[36.3px] bg-steelblue-600 w-[162.8px] flex flex-row items-start justify-start box-border hover:bg-steelblue-200">
                <b className="flex-1 relative text-xs tracking-[1px] leading-[16px] inline-block font-raleway text-www-equalopp-org-1349x593-default-nero text-center min-w-[89px]">
                  OBJECTIVES
                </b>
              </button>
              <button
                className="cursor-pointer [border:none] pt-[15px] pb-4 pr-[27.5px] pl-[27.8px] bg-steelblue-500 w-[162.8px] flex flex-row items-start justify-start box-border whitespace-nowrap hover:bg-deepskyblue-300"
                onClick={onDivelementorWidgetWrap3Click}
              >
                <div className="h-[39px] flex-1 relative text-xs tracking-[1px] leading-[25px] font-medium font-raleway text-black text-center flex items-center justify-center">
                  GENERAL INFORMATION
                </div>
              </button>
              <div className="flex-1 flex flex-row items-start justify-center min-w-[315px] max-w-full [row-gap:20px] mq450:flex-wrap">
                <button className="cursor-pointer [border:none] py-7 pr-[26.5px] pl-[27.6px] bg-steelblue-400 flex-1 flex flex-row items-start justify-start box-border min-w-[109px] shrink-0 [debug_commit:f6aba90] hover:bg-deepskyblue-300">
                  <div className="flex-1 relative text-xs tracking-[1px] leading-[14px] font-medium font-raleway text-black text-center">
                    CHAPTERS
                  </div>
                </button>
                <div className="flex-1 bg-steelblue-500 flex flex-row items-start justify-start py-[13px] pr-[21.8px] pl-[38px] box-border min-w-[109px] shrink-0 [debug_commit:f6aba90] z-[1] ml-[-1.5px] mq450:flex-1">
                  <div className="h-11 flex-1 relative tracking-[1px] leading-[25px] font-medium flex items-center">
                    <span className="[line-break:anywhere]">
                      <p className="m-0">PRESENT</p>
                      <p className="m-0">LEADERSHIP</p>
                    </span>
                  </div>
                </div>
                <button className="cursor-pointer [border:none] pt-[15px] px-[29.9px] pb-4 bg-steelblue-400 flex-1 flex flex-row items-start justify-start box-border min-w-[109px] shrink-0 [debug_commit:f6aba90] z-[2] ml-[-1.5px] hover:bg-deepskyblue-300 mq450:flex-1">
                  <div className="h-[39px] flex-1 relative text-xs tracking-[1px] leading-[25px] font-medium font-raleway text-black text-center flex items-center justify-center">
                    TIMELINE
                  </div>
                </button>
              </div>
            </div>
          </div>
          <b className="h-3.5 w-[77.4px] relative tracking-[1px] leading-[25px] flex text-www-equalopp-org-1349x593-default-nero items-center justify-center shrink-0 min-w-[77.4px] [debug_commit:f6aba90] z-[1]">
            OUR STORY
          </b>
        </div>
        <div className="flex flex-row items-start justify-end py-0 px-[39px] box-border max-w-full">
          <div className="w-[986px] relative tracking-[1px] leading-[27px] inline-block z-[1]">
            Under the banner of Darsana we have undertaken many socially
            relevant initiatives in education, waste management, sustainable
            construction methods,
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsObjective;
