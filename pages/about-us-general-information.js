import { useCallback } from "react";
import FrameComponent4 from "../components/frame-component4";
import { useRouter } from "next/router";

const AboutUsGeneralInformation = () => {
  const router = useRouter();

  const onDivelementorWidgetWrap4Click = useCallback(() => {
    router.push("/about-us-chapters");
  }, [router]);

  return (
    <div className="w-full relative bg-www-equalopp-org-1349x593-default-nero flex flex-col items-center justify-start pt-[140px] pb-[565px] pr-5 pl-[86px] box-border leading-[normal] tracking-[normal] lg:pl-[43px] lg:box-border mq750:pl-[21px] mq750:box-border">
      <img
        className="w-[1412px] h-[2417px] relative hidden max-w-full"
        alt=""
        src="/rectangle-22.svg"
      />
      <section className="w-[1150px] flex flex-row items-start justify-center py-0 pr-0 pl-[148px] box-border max-w-full text-left text-45xl text-black font-h3 mq450:pl-5 mq450:box-border mq750:pl-[74px] mq750:box-border">
        <h1 className="m-0 h-[175px] w-[534px] relative text-inherit tracking-[0.16px] leading-[28.8px] font-extrabold font-inherit flex items-center shrink-0 max-w-full z-[1] mq450:text-19xl mq450:leading-[17px] mq1050:text-32xl mq1050:leading-[23px]">
          ABOUT US
        </h1>
      </section>
      <section className="w-[1150px] flex flex-col items-start justify-start gap-[9px] max-w-full text-center text-xs text-www-equalopp-org-1349x593-default-nero font-raleway">
        <FrameComponent4
          image6IconWidth="1130px"
          arrow1IconFlex="1"
          arrow1IconWidth="unset"
          propBackgroundImage="url('/image-16@2x.png')"
        />
        <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
          <b className="h-3.5 w-[77.4px] absolute !m-[0] bottom-[-2.5px] left-[-39.1px] tracking-[1px] leading-[25px] flex items-center justify-center min-w-[77.4px] z-[1]">
            OUR STORY
          </b>
          <div className="flex-1 [background:linear-gradient(rgba(0,_0,_0,_0.2),_rgba(0,_0,_0,_0.2)),_#1186c9] flex flex-row items-start justify-center py-0 pr-[3px] pl-0 box-border gap-[0.1px] max-w-full z-[2] text-black mq1050:flex-wrap mq1050:pl-[3px] mq1050:pt-[3px] mq1050:pb-[3px] mq1050:box-border">
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
            <button className="cursor-pointer [border:none] py-7 px-[36.3px] bg-steelblue-400 w-[162.8px] flex flex-row items-start justify-start box-border hover:bg-deepskyblue-300">
              <div className="flex-1 relative text-xs tracking-[1px] leading-[16px] font-medium font-raleway text-black text-center inline-block min-w-[89px]">
                OBJECTIVES
              </div>
            </button>
            <button className="cursor-pointer [border:none] pt-[15px] pb-4 pr-[27.5px] pl-[27.8px] bg-steelblue-600 w-[162.8px] flex flex-row items-start justify-start box-border whitespace-nowrap hover:bg-steelblue-200">
              <b className="h-[39px] flex-1 relative text-xs tracking-[1px] leading-[25px] flex font-raleway text-www-equalopp-org-1349x593-default-nero text-center items-center justify-center">
                GENERAL INFORMATION
              </b>
            </button>
            <div className="flex-1 flex flex-row items-start justify-center min-w-[315px] max-w-full [row-gap:20px] mq450:flex-wrap">
              <button
                className="cursor-pointer [border:none] py-7 pr-[26.5px] pl-[27.6px] bg-steelblue-400 flex-1 flex flex-row items-start justify-start box-border min-w-[109px] shrink-0 [debug_commit:f6aba90] hover:bg-deepskyblue-300"
                onClick={onDivelementorWidgetWrap4Click}
              >
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
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[26px] box-border max-w-full text-left text-black">
          <div className="flex-1 flex flex-row items-end justify-start gap-[57px] max-w-full mq750:gap-[28px] mq1050:flex-wrap">
            <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[35px] box-border min-w-[367px] max-w-full mq750:min-w-full">
              <img
                className="self-stretch h-[281px] relative max-w-full overflow-hidden shrink-0 object-cover z-[1]"
                loading="lazy"
                alt=""
                src="/image-21@2x.png"
              />
            </div>
            <div className="h-[379px] w-[502px] relative tracking-[1px] leading-[27px] flex items-center shrink-0 min-w-[502px] max-w-full z-[1] mq750:min-w-full mq1050:flex-1">
              Darsana is a professionally managed organization led by a
              21-member Executive Committee. The committee members are from all
              over the globe. The Committee meets every two weeks via digital
              platforms to plan upcoming activities. We take pride in being
              among the first organizations to use digital platforms to run an
              organization effectively and efficiently.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsGeneralInformation;
