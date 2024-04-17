import { useCallback } from "react";
import FrameComponent4 from "../components/frame-component4";
import { useRouter } from "next/router";

const AboutUsStory = () => {
  const router = useRouter();

  const onDivelementorWidgetWrap1Click = useCallback(() => {
    router.push("/about-us-what-we-do");
  }, [router]);

  const onDivelementorWidgetWrap3Click = useCallback(() => {
    router.push("/about-us-general-information");
  }, [router]);

  const onDivelementorWidgetWrap4Click = useCallback(() => {
    router.push("/about-us-chapters");
  }, [router]);

  const onDivelementorWidgetWrapContainerClick = useCallback(() => {
    router.push("/about-us-present-leadership");
  }, [router]);

  const onDivelementorWidgetWrap5Click = useCallback(() => {
    router.push("/about-us-timeline");
  }, [router]);

  return (
    <div className="w-full relative bg-www-equalopp-org-1349x593-default-nero flex flex-col items-start justify-start pt-[140px] px-16 pb-[447px] box-border leading-[normal] tracking-[normal] text-center text-xs text-black font-raleway mq750:pl-8 mq750:pr-8 mq750:box-border">
      <img
        className="w-[1412px] h-[2417px] relative hidden max-w-full"
        alt=""
        src="/rectangle-22.svg"
      />
      <b className="w-[77.4px] h-3.5 relative tracking-[1px] leading-[25px] hidden text-www-equalopp-org-1349x593-default-nero items-center justify-center shrink-0 min-w-[77.4px]">
        OUR STORY
      </b>
      <div className="w-[81px] relative tracking-[0.16px] leading-[35px] font-medium hidden min-w-[81px]">
        WHAT WE DO
      </div>
      <div className="w-[89px] relative tracking-[1px] leading-[16px] font-medium hidden items-center justify-center min-w-[89px]">
        OBJECTIVES
      </div>
      <div className="w-[107.5px] h-[39px] relative tracking-[1px] leading-[25px] font-medium hidden items-center justify-center shrink-0">
        GENERAL INFORMATION
      </div>
      <div className="w-[108.7px] h-3.5 relative tracking-[1px] leading-[25px] font-medium hidden items-center justify-center shrink-0">
        CHAPTERS
      </div>
      <div className="w-[103px] h-11 relative tracking-[1px] leading-[25px] font-medium hidden items-center shrink-0">
        <span className="[line-break:anywhere] w-full">
          <p className="m-0">PRESENT</p>
          <p className="m-0">LEADERSHIP</p>
        </span>
      </div>
      <div className="w-[101.7px] h-[39px] relative tracking-[1px] leading-[25px] font-medium hidden items-center justify-center shrink-0">
        TIMELINE
      </div>
      <section className="self-stretch flex flex-row items-start justify-center py-0 pr-0 pl-[168px] box-border max-w-full text-left text-45xl text-black font-h3 mq450:pl-5 mq450:box-border mq750:pl-[84px] mq750:box-border">
        <h1 className="m-0 h-[175px] w-[534px] relative text-inherit tracking-[0.16px] leading-[28.8px] font-extrabold font-inherit flex items-center shrink-0 max-w-full z-[1] mq450:text-19xl mq450:leading-[17px] mq1050:text-32xl mq1050:leading-[23px]">
          ABOUT US
        </h1>
      </section>
      <section className="w-[1197px] flex flex-col items-end justify-start gap-[30px] max-w-full text-center text-xs text-black font-raleway">
        <FrameComponent4 />
        <div className="w-[1178px] flex flex-row items-start justify-end py-0 px-[19px] box-border max-w-full">
          <div className="flex-1 bg-steelblue-500 flex flex-row items-start justify-center py-0 pr-[3px] pl-0 box-border gap-[0.1px] max-w-full z-[2] lg:flex-wrap lg:pl-[3px] lg:pt-[3px] lg:pb-[3px] lg:box-border">
            <button className="cursor-pointer [border:none] pt-[27.5px] pb-[28.5px] pr-[42.5px] pl-[42.9px] bg-steelblue-600 w-[162.8px] flex flex-row items-start justify-start box-border whitespace-nowrap hover:bg-steelblue-200">
              <b className="flex-1 relative text-xs tracking-[1px] leading-[14px] inline-block font-raleway text-www-equalopp-org-1349x593-default-nero text-center min-w-[77.4px]">
                OUR STORY
              </b>
            </button>
            <button
              className="cursor-pointer [border:none] pt-[17.2px] px-[37.7px] pb-[17.8px] bg-steelblue-500 w-[162.8px] flex flex-row items-start justify-start box-border whitespace-nowrap hover:bg-deepskyblue-300"
              onClick={onDivelementorWidgetWrap1Click}
            >
              <div className="w-[81px] relative text-xs tracking-[0.16px] leading-[35px] font-medium font-raleway text-black text-center flex items-center justify-center min-w-[81px]">
                WHAT WE DO
              </div>
            </button>
            <button className="cursor-pointer [border:none] py-7 px-[36.3px] bg-steelblue-400 w-[162.8px] flex flex-row items-start justify-start box-border hover:bg-deepskyblue-300">
              <div className="flex-1 relative text-xs tracking-[1px] leading-[16px] font-medium font-raleway text-black text-center inline-block min-w-[89px]">
                OBJECTIVES
              </div>
            </button>
            <button
              className="cursor-pointer [border:none] pt-[15px] pb-4 pr-[27.5px] pl-[27.8px] bg-steelblue-500 w-[162.8px] flex flex-row items-start justify-start box-border whitespace-nowrap hover:bg-deepskyblue-300"
              onClick={onDivelementorWidgetWrap3Click}
            >
              <div className="h-[39px] flex-1 relative text-xs tracking-[1px] leading-[25px] font-medium font-raleway text-black text-center flex items-center justify-center">
                GENERAL INFORMATION
              </div>
            </button>
            <div className="flex-1 flex flex-row items-start justify-center min-w-[315px] max-w-full [row-gap:20px] mq750:flex-wrap">
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
              <button
                className="cursor-pointer [border:none] pt-[15px] px-[29.9px] pb-4 bg-steelblue-400 flex-1 flex flex-row items-start justify-start box-border min-w-[109px] shrink-0 [debug_commit:f6aba90] z-[2] ml-[-1.5px] hover:bg-deepskyblue-300 mq450:flex-1"
                onClick={onDivelementorWidgetWrap5Click}
              >
                <div className="h-[39px] flex-1 relative text-xs tracking-[1px] leading-[25px] font-medium font-raleway text-black text-center flex items-center justify-center">
                  TIMELINE
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-end justify-start gap-[77px] max-w-full text-left lg:gap-[38px] mq750:gap-[19px]">
          <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[54px] box-border min-w-[367px] min-h-[335px] max-w-full mq750:min-w-full">
            <img
              className="self-stretch h-[281px] relative max-w-full overflow-hidden shrink-0 object-cover z-[1]"
              loading="lazy"
              alt=""
              src="/image-21@2x.png"
            />
          </div>
          <div className="h-[442px] flex-1 relative tracking-[1px] leading-[27px] flex items-center min-w-[361px] max-w-full z-[1] mq750:min-w-full">
            <span>
              <p className="m-0">
                Darsana was established in 2007 as a charitable society with a
                registered office in Palakkad, Kerala. The idea for such an
                organization arose during a meeting of a few
                progressive-thinking students from the 1991 graduating class of
                NSS College of Engineering, Palakkad (NSSCE). The meeting was
                called to consider establishing an endowment for NSS College of
                Engineering Palakkad students in honor of their batchmate, the
                late Comrade Biju Cheriyan. This sparked the idea of bringing
                together all like-minded students from the 1960s to the
                millennium batches. Darsana was inaugurated on August 5, 2007,
                by the then honorable Education Minister of Kerala M. A. Baby in
                a function organized at the NSSCE campus. It was presided over
                by the college principal. The then member of parliament for
                Palakkad constituency, N. N. Krishnadas also attended.
              </p>
              <p className="m-0">&nbsp;</p>
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsStory;
