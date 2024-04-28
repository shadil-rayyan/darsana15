import Navbar from "../components/Navbar";
import { useRouter } from "next/router";

const AboutUsStory1 = () => {
  const router = useRouter();

  const onDivelementorWidgetWrap1Click = () => {
    router.push("/AboutUsWhatWeDo");
  };

  const onDivelementorWidgetWrap2Click = () => {
    router.push("/AboutUsObjective");
  };

  const onDivelementorWidgetWrap3Click = () => {
    router.push("/AboutUsGeneralInformation");
  };

  const onDivelementorWidgetWrap4Click = () => {
    router.push("/AboutUsChapters");
  };

  const onDivelementorWidgetWrapContainerClick = () => {
    router.push("/AboutUsPresentLeadership");
  };

  const onDivelementorWidgetWrap5Click = () => {
    router.push("/AboutUsTimeline");
  };

  const onAboutTextClick = () => {
    router.push("/ContactUsFinal");
  };

  const onFeaturesTextClick = () => {
    const anchor = document.querySelector("[data-scroll-to='rectangle']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  };

  const onPricingTextClick = () => {
    router.push("/Initiatives");
  };

  const onGalleryTextClick = () => {
    router.push("/Chapters");
  };

  return (
    <div className="w-full relative flex flex-col items-end justify-start pt-0 px-0 pb-4 box-border gap-[22px] leading-[normal] tracking-[normal]">
      <img
        className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/rectangle-223.svg"
        data-scroll-to="rectangle"
      />
      <Navbar />
      <main className="w-[1361px] flex flex-row items-start justify-end pt-0 px-12 pb-[187px] box-border max-w-full lg:pl-6 lg:pr-6 lg:pb-[122px] lg:box-border mq1050:pb-[79px] mq1050:box-border mq750:pb-[51px] mq750:box-border">
        <section className="flex-1 flex flex-col items-start justify-start gap-[46px] max-w-full text-left text-xs text-black font-raleway mq750:gap-[23px]">
          <div className="self-stretch flex flex-row items-start justify-center pt-0 pb-[101px] pr-5 pl-[283px] box-border max-w-full text-45xl font-h3 mq1050:pl-[141px] mq1050:box-border mq450:pl-5 mq450:box-border">
            <h1 className="m-0 w-[534px] relative text-inherit tracking-[0.16px] leading-[29px] font-extrabold font-inherit flex items-center shrink-0 max-w-full z-[1] mq1050:text-32xl mq1050:leading-[23px] mq450:text-19xl mq450:leading-[17px]">
              ABOUT US
            </h1>
          </div>
          <div className="w-[1265px] h-[194px] flex flex-row items-start justify-start pt-0 pb-[49px] pr-0 pl-[183px] box-border text-13xl font-arial">
            <div className="w-[1082px] flex flex-col items-start justify-start gap-[1px] max-w-full">
              <h1 className="m-0 self-stretch relative text-inherit tracking-[0.16px] leading-[28.8px] font-normal font-inherit z-[1] mq1050:text-7xl mq1050:leading-[23px] mq450:text-lgi mq450:leading-[17px]">
                <p className="m-0">{`We are a global diaspora of more than thousand highly experienced `}</p>
                <p className="m-0 whitespace-pre-wrap">{`                   `}</p>
              </h1>
              <div className="w-[982px] flex flex-row items-start justify-start py-0 px-[41px] box-border max-w-full">
                <div className="flex-1 flex flex-col items-start justify-start gap-[28px] max-w-full">
                  <h1 className="m-0 relative text-inherit tracking-[0.16px] leading-[29px] font-normal font-inherit z-[1] mq1050:text-7xl mq1050:leading-[23px] mq450:text-lgi mq450:leading-[17px]">
                    and socially committed engineers . We work towards making a
                  </h1>
                  <div className="self-stretch flex flex-row items-start justify-end py-0 px-[53px] box-border max-w-full mq1050:pl-[26px] mq1050:pr-[26px] mq1050:box-border">
                    <h1 className="m-0 w-[763px] relative text-inherit tracking-[0.16px] leading-[29px] font-normal font-inherit flex items-center shrink-0 max-w-full z-[1] mq1050:text-7xl mq1050:leading-[23px] mq450:text-lgi mq450:leading-[17px]">
                      {" "}
                      difference in the life of needy and down trodden
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[1106px] h-[752px] flex flex-row items-start justify-start pt-0 pb-12 pr-0 pl-[204px] box-border">
            <div className="h-[704px] w-[902px] relative overflow-x-auto shrink-0 max-w-full z-[1]">
              <img
                className="absolute top-[0px] left-[0px] w-[902px] h-[674px] object-cover"
                alt=""
                src="/about-us-hero-image1@2x.png"
              />
            </div>
          </div>
          <div className="w-[1140px] bg-steelblue-500 flex flex-row items-start justify-center py-0 pr-[3px] pl-0 box-border gap-[0.1px] max-w-full z-[1] text-center mq1050:flex-wrap mq1050:pl-[3px] mq1050:pt-[3px] mq1050:pb-[3px] mq1050:box-border">
            <button className="cursor-pointer [border:none] pt-[27.5px] pb-[17.5px] pr-[41.9px] pl-[42.9px] bg-steelblue-600 flex flex-row items-start justify-start whitespace-nowrap hover:bg-steelblue-200">
              <b className="relative text-xs tracking-[1px] leading-[25px] inline-block font-raleway text-www-equalopp-org-1349x593-default-nero text-center min-w-[78px]">
                OUR STORY
              </b>
            </button>
            <button
              className="cursor-pointer [border:none] pt-[17.2px] px-[37.7px] pb-[17.8px] bg-steelblue-500 w-[162.8px] flex flex-row items-start justify-start box-border whitespace-nowrap hover:bg-deepskyblue-300"
              onClick={onDivelementorWidgetWrap1Click}
            >
              <div className="relative text-xs tracking-[0.16px] leading-[35px] font-medium font-raleway text-black text-center inline-block min-w-[81px]">
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
            <button
              className="cursor-pointer [border:none] pt-[15px] pb-[5px] pr-[27.5px] pl-[27.8px] bg-steelblue-500 w-[162.8px] flex flex-row items-start justify-start box-border whitespace-nowrap hover:bg-deepskyblue-300"
              onClick={onDivelementorWidgetWrap3Click}
            >
              <div className="flex-1 relative text-xs tracking-[1px] leading-[25px] font-medium font-raleway text-black text-center">
                GENERAL INFORMATION
              </div>
            </button>
            <div className="flex-1 flex flex-row items-start justify-center min-w-[315px] max-w-full [row-gap:20px] mq450:flex-wrap">
              <button
                className="cursor-pointer [border:none] pt-7 pb-[17px] pr-[26.5px] pl-[27.6px] bg-steelblue-400 flex-1 flex flex-row items-start justify-start box-border min-w-[109px] shrink-0 [debug_commit:1de1738] hover:bg-deepskyblue-300"
                onClick={onDivelementorWidgetWrap4Click}
              >
                <div className="flex-1 relative text-xs tracking-[1px] leading-[25px] font-medium font-raleway text-black text-center">
                  CHAPTERS
                </div>
              </button>
              <div
                className="flex-[0.9476] bg-steelblue-500 flex flex-row items-start justify-start pt-[13px] pb-[7px] pr-[21.8px] pl-[38px] box-border min-w-[109px] shrink-0 [debug_commit:1de1738] cursor-pointer z-[1] ml-[-1.5px] mq450:flex-1"
                onClick={onDivelementorWidgetWrapContainerClick}
              >
                <div className="flex-1 relative tracking-[1px] leading-[25px] font-medium">
                  <p className="m-0">PRESENT</p>
                  <p className="m-0">LEADERSHIP</p>
                </div>
              </div>
              <button
                className="cursor-pointer [border:none] pt-[15px] px-[29.9px] pb-[30px] bg-steelblue-400 flex-[0.9476] flex flex-row items-start justify-start box-border min-w-[109px] shrink-0 [debug_commit:1de1738] z-[2] ml-[-1.5px] hover:bg-deepskyblue-300 mq450:flex-1"
                onClick={onDivelementorWidgetWrap5Click}
              >
                <div className="flex-1 relative text-xs tracking-[1px] leading-[25px] font-medium font-raleway text-black text-center">
                  TIMELINE
                </div>
              </button>
            </div>
          </div>
          <div className="w-[1238px] flex flex-row items-start justify-start py-0 px-1.5 box-border max-w-full">
            <div className="flex-1 flex flex-row flex-wrap items-start justify-center py-0 pr-[29px] pl-0 box-border gap-[77px] max-w-full z-[1] mq450:gap-[19px] mq750:gap-[38px]">
              <div className="h-[361.5px] flex-1 flex flex-col items-start justify-start pt-[80.5px] px-0 pb-0 box-border min-w-[335px] max-w-full mq450:pt-[52px] mq450:box-border">
                <img
                  className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                  loading="lazy"
                  alt=""
                  src="/image-21@2x.png"
                />
              </div>
              <div className="h-[442px] flex-1 relative tracking-[1px] leading-[27px] flex items-center min-w-[335px] max-w-full">
                <span>
                  <p className="m-0">
                    Darsana was established in 2007 as a charitable society with
                    a registered office in Palakkad, Kerala. The idea for such
                    an organization arose during a meeting of a few
                    progressive-thinking students from the 1991 graduating class
                    of NSS College of Engineering, Palakkad (NSSCE). The meeting
                    was called to consider establishing an endowment for NSS
                    College of Engineering Palakkad students in honor of their
                    batchmate, the late Comrade Biju Cheriyan. This sparked the
                    idea of bringing together all like-minded students from the
                    1960s to the millennium batches. Darsana was inaugurated on
                    August 5, 2007, by the then honorable Education Minister of
                    Kerala M. A. Baby in a function organized at the NSSCE
                    campus. It was presided over by the college principal. The
                    then member of parliament for Palakkad constituency, N. N.
                    Krishnadas also attended.
                  </p>
                  <p className="m-0">&nbsp;</p>
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-[1387px] bg-www-equalopp-org-1349x593-default-nero flex flex-row items-end justify-between pt-5 pb-6 pr-[29px] pl-0 box-border max-w-full gap-[20px] z-[1] text-left text-base text-black font-h3 mq1050:flex-wrap mq1050:pl-5 mq1050:pr-5 mq1050:box-border">
        <div className="h-[88px] w-[1387px] relative bg-www-equalopp-org-1349x593-default-nero hidden max-w-full" />
        <div className="h-11 w-[203px] flex flex-col items-start justify-start">
          <div className="w-[138.5px] h-11 relative z-[1] flex items-center justify-center">
            <img
              className="w-full h-full z-[1] object-contain absolute left-[4px] top-[0px] [transform:scale(1.364)]"
              loading="lazy"
              alt=""
              src="/divlogo@2x.png"
            />
          </div>
        </div>
        <div className="w-[582.5px] flex flex-col items-start justify-end pt-0 px-0 pb-2.5 box-border max-w-full">
          <div className="self-stretch flex flex-row items-start justify-between gap-[20px] z-[1] mq450:flex-wrap">
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
            <div className="relative inline-block min-w-[99px]">
              Eye magazine
            </div>
          </div>
        </div>
        <div className="w-[174px] flex flex-col items-start justify-end pt-0 px-0 pb-2.5 box-border">
          <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
            <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
              <img
                className="w-[13.1px] h-[22px] relative z-[1]"
                loading="lazy"
                alt=""
                src="/social.svg"
              />
            </div>
            <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
              <img
                className="w-6 h-[22px] relative object-cover z-[1]"
                alt=""
                src="/social-1@2x.png"
              />
            </div>
            <img
              className="self-stretch w-[33.8px] relative max-h-full overflow-hidden shrink-0 min-h-[24px] z-[1]"
              alt=""
              src="/social-2.svg"
            />
            <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
              <img
                className="w-[25.1px] h-[22px] relative object-cover z-[1]"
                alt=""
                src="/social-31@2x.png"
              />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutUsStory1;
