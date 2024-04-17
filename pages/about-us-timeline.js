import { useCallback } from "react";
import FrameComponent17 from "../components/frame-component17";
import { useRouter } from "next/router";

const AboutUsTimeline = () => {
  const router = useRouter();

  const onDivelementorWidgetWrapClick = useCallback(() => {
    router.push("/about-us-story");
  }, [router]);

  const onDivelementorWidgetWrap1Click = useCallback(() => {
    router.push("/about-us-what-we-do");
  }, [router]);

  const onDivelementorWidgetWrap2Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='wHATWEDO']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onDivelementorWidgetWrap4Click = useCallback(() => {
    router.push("/about-us-chapters");
  }, [router]);

  const onDivelementorWidgetWrapContainerClick = useCallback(() => {
    router.push("/about-us-present-leadership");
  }, [router]);

  return (
    <div className="w-full relative flex flex-col items-start justify-start pt-[132px] pb-[509px] pr-[75px] pl-[78px] box-border leading-[normal] tracking-[normal] text-left text-45xl text-black font-h3 mq750:pl-[39px] mq750:pr-[37px] mq750:box-border">
      <img
        className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/group-1261153386.svg"
      />
      <div className="self-stretch flex flex-row items-start justify-center py-0 pr-0 pl-[101px] box-border max-w-full mq450:pl-5 mq450:box-border mq750:pl-[50px] mq750:box-border">
        <h1 className="m-0 h-[175px] w-[534px] relative text-inherit tracking-[0.16px] leading-[28.8px] font-extrabold font-inherit flex items-center shrink-0 max-w-full z-[1] mq450:text-19xl mq450:leading-[17px] mq1050:text-32xl mq1050:leading-[23px]">
          ABOUT US
        </h1>
      </div>
      <FrameComponent17 />
      <div className="w-[1164px] flex flex-row items-start justify-start pt-0 px-3 pb-[163px] box-border max-w-full text-center text-xs font-raleway mq750:pb-[69px] mq750:box-border mq1050:pb-[106px] mq1050:box-border">
        <div className="flex-1 flex flex-col items-start justify-start gap-[144px] max-w-full lg:gap-[72px] mq450:gap-[18px] mq750:gap-[36px]">
          <div className="w-[1105.5px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
            <div className="h-[674px] w-[913.5px] relative max-w-full">
              <div className="absolute h-full top-[0px] bottom-[0px] left-[11.5px] w-[902px] bg-[url('/image-16@2x.png')] bg-cover bg-no-repeat bg-[top] z-[1]">
                <img
                  className="absolute top-[0px] left-[0px] w-full h-full object-cover hidden"
                  alt=""
                  src="/image-16@2x.png"
                />
                <img
                  className="absolute top-[620px] left-[399.5px] w-[54px] h-[54px] object-cover z-[2]"
                  loading="lazy"
                  alt=""
                  src="/image-6@2x.png"
                />
                <img
                  className="absolute top-[310px] left-[848.5px] w-[54px] h-[54px] object-contain z-[2]"
                  loading="lazy"
                  alt=""
                  src="/arrow-1@2x.png"
                />
              </div>
              <img
                className="absolute top-[310px] left-[0px] w-[54px] h-[54px] object-contain z-[2]"
                loading="lazy"
                alt=""
                src="/arrow-2@2x.png"
              />
            </div>
          </div>
          <div className="self-stretch bg-steelblue-500 flex flex-row flex-wrap items-start justify-center gap-[0.1px] max-w-full z-[1]">
            <button
              className="cursor-pointer [border:none] pt-[27.5px] pb-[28.5px] pr-[42px] pl-[42.9px] bg-steelblue-500 w-[162.8px] flex flex-row items-start justify-start box-border whitespace-nowrap hover:bg-deepskyblue-300"
              onClick={onDivelementorWidgetWrapClick}
            >
              <div className="flex-1 relative text-xs tracking-[1px] leading-[14px] font-medium font-raleway text-black text-center inline-block min-w-[77.4px]">
                OUR STORY
              </div>
            </button>
            <button
              className="cursor-pointer [border:none] pt-[17.2px] px-[37.7px] pb-[17.8px] bg-steelblue-500 w-[162.8px] flex flex-row items-start justify-start box-border whitespace-nowrap hover:bg-deepskyblue-300"
              onClick={onDivelementorWidgetWrap1Click}
            >
              <div
                className="w-[81px] relative text-xs tracking-[0.16px] leading-[35px] font-medium font-raleway text-black text-center flex items-center justify-center min-w-[81px]"
                data-scroll-to="wHATWEDO"
              >
                WHAT WE DO
              </div>
            </button>
            <button
              className="cursor-pointer [border:none] py-7 px-[36.3px] bg-steelblue-400 w-[162.8px] flex flex-row items-start justify-start box-border hover:bg-deepskyblue-300"
              onClick={onDivelementorWidgetWrap2Click}
            >
              <div className="flex-1 relative text-xs tracking-[1px] leading-[16px] font-medium font-raleway text-black text-center inline-block min-w-[89px]">
                OBJECTIVES
              </div>
            </button>
            <button className="cursor-pointer [border:none] pt-[15px] pb-4 pr-[27.5px] pl-[27.8px] bg-steelblue-500 w-[162.8px] flex flex-row items-start justify-start box-border whitespace-nowrap hover:bg-deepskyblue-300">
              <div className="h-[39px] flex-1 relative text-xs tracking-[1px] leading-[25px] font-medium font-raleway text-black text-center flex items-center justify-center">
                GENERAL INFORMATION
              </div>
            </button>
            <div className="flex-1 flex flex-row items-start justify-center min-w-[318px] max-w-full [row-gap:20px] mq750:flex-wrap">
              <button
                className="cursor-pointer [border:none] py-7 pr-[26.5px] pl-[27.6px] bg-steelblue-400 flex-1 flex flex-row items-start justify-start box-border min-w-[109px] shrink-0 [debug_commit:f6aba90] hover:bg-deepskyblue-300"
                onClick={onDivelementorWidgetWrap4Click}
              >
                <div className="flex-1 relative text-xs tracking-[1px] leading-[14px] font-medium font-raleway text-black text-center">
                  CHAPTERS
                </div>
              </button>
              <div
                className="flex-1 bg-steelblue-500 flex flex-row items-start justify-start py-[13px] pr-[21.8px] pl-[38px] box-border min-w-[109px] shrink-0 [debug_commit:f6aba90] cursor-pointer z-[1] ml-[-1.5px] mq450:flex-1"
                onClick={onDivelementorWidgetWrapContainerClick}
              >
                <div className="h-11 flex-1 relative tracking-[1px] leading-[25px] font-medium flex items-center">
                  <span className="[line-break:anywhere]">
                    <p className="m-0">PRESENT</p>
                    <p className="m-0">LEADERSHIP</p>
                  </span>
                </div>
              </div>
              <button className="cursor-pointer [border:none] pt-[15px] px-[31.9px] pb-4 bg-steelblue-600 flex-1 flex flex-row items-start justify-start box-border min-w-[102px] shrink-0 [debug_commit:f6aba90] z-[2] ml-[-1.5px] hover:bg-steelblue-200 mq450:flex-1">
                <b className="h-[39px] flex-1 relative text-xs tracking-[1px] leading-[25px] flex font-raleway text-www-equalopp-org-1349x593-default-nero text-center items-center justify-center">
                  TIMELINE
                </b>
              </button>
            </div>
          </div>
        </div>
      </div>
      <img
        className="self-stretch relative max-w-full overflow-hidden max-h-full object-contain z-[1]"
        loading="lazy"
        alt=""
        src="/timeline@2x.png"
      />
    </div>
  );
};

export default AboutUsTimeline;
