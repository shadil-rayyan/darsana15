import { useRouter } from "next/router";

const AboutUsTimeline = () => {
  const router = useRouter();

  const onNavigationLabelsContainer1Click = () => {
    router.push("/AboutUsStory1");
  };

  const onDivelementorWidgetWrapContainer1Click = () => {
    router.push("/AboutUsWhatWeDo");
  };

  const onDivelementorWidgetWrapContainer2Click = () => {
    router.push("/AboutUsObjective");
  };

  const onDivelementorWidgetWrapContainer3Click = () => {
    router.push("/AboutUsGeneralInformation");
  };

  const onDivelementorWidgetWrapContainerClick = () => {
    router.push("/AboutUsChapters");
  };

  const onDivelementorWidgetWrapContainer12Click = () => {
    router.push("/AboutUsPresentLeadership");
  };

  const onDivelementorWidgetWrapContainer22Click = () => {
    router.push("/AboutUsTimeline");
  };

  const onAboutTextClick = () => {
    router.push("/ContactUsFinal");
  };

  const onFeaturesTextClick = () => {
    router.push("/AboutUsStory1");
  };

  const onPricingTextClick = () => {
    router.push("/Initiatives");
  };

  const onGalleryTextClick = () => {
    router.push("/Chapters");
  };

  return (
    <div className="w-full relative flex flex-col items-start justify-start pt-0 px-0 pb-[27px] box-border gap-[24px] leading-[normal] tracking-[normal] text-left text-45xl text-black font-h3">
      <img
        className="w-full h-[2553px] absolute !m-[0] top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden shrink-0"
        alt=""
        src="/group-1261153386.svg"
      />
      <header className="self-stretch bg-www-equalopp-org-1349x593-default-nero flex flex-row items-start justify-between py-0.5 pr-[102px] pl-[47px] box-border top-[0] z-[99] sticky max-w-full gap-[20px] text-center text-sm text-gray1-100 font-h3 mq450:pr-5 mq450:box-border mq750:pl-[23px] mq750:pr-[51px] mq750:box-border">
        <div className="h-20 w-[220px] relative overflow-hidden shrink-0">
          <img
            className="absolute h-[calc(100%_-_16px)] top-[8px] bottom-[8px] left-[18px] max-h-full w-[164.4px] object-cover"
            alt=""
            src="/image-32@2x.png"
          />
        </div>
        <div className="flex flex-col items-start justify-start pt-5 px-0 pb-0 box-border max-w-full">
          <div className="flex flex-row items-start justify-start">
            <div className="rounded-sm flex flex-row items-start justify-start pt-2.5 px-4 pb-2 text-black border-b-[1px] border-solid border-skyblue">
              <div className="relative font-medium inline-block min-w-[38px]">
                Home
              </div>
            </div>
            <div
              className="rounded-sm flex flex-row items-start justify-start py-2.5 px-4 cursor-pointer"
              onClick={onNavigationLabelsContainer1Click}
            >
              <div className="relative font-medium inline-block min-w-[58px] whitespace-nowrap">
                About Us
              </div>
            </div>
            <div className="rounded-sm flex flex-row items-start justify-start py-2.5 px-4 gap-[8px]">
              <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                <div className="relative font-medium inline-block min-w-[84px] whitespace-nowrap">
                  Key intiatives
                </div>
              </div>
              <img
                className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
                alt=""
                src="/iconamoonarrowup2bold.svg"
              />
            </div>
            <div className="rounded-sm flex flex-row items-start justify-start py-2.5 px-4 gap-[8px]">
              <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                <div className="relative font-medium inline-block min-w-[95px] whitespace-nowrap">
                  Other intiatives
                </div>
              </div>
              <img
                className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
                alt=""
                src="/iconamoonarrowup2bold.svg"
              />
            </div>
            <div className="rounded-sm flex flex-row items-start justify-start py-2.5 px-4">
              <div className="relative font-medium inline-block min-w-[50px]">
                Product
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start pt-[17.5px] px-0 pb-0 text-lg text-www-equalopp-org-1349x593-default-nero">
          <div className="rounded-lg [background:linear-gradient(83.21deg,_#3b0066,_#175fc4_38.7%,_#00e1e7_83.79%,_#00f7e0_93.69%,_#00ffdd)] flex flex-row items-start justify-start py-3 px-6 whitespace-nowrap">
            <div className="relative font-medium inline-block min-w-[56px] whitespace-nowrap">
              Sign In
            </div>
          </div>
        </div>
      </header>
      <div className="self-stretch flex flex-row items-start justify-center pt-0 pb-[123px] pr-5 pl-[142px] box-border max-w-full mq450:pl-5 mq450:box-border mq750:pl-[71px] mq750:box-border">
        <div className="w-[534px] relative tracking-[0.16px] leading-[29px] font-extrabold flex items-center shrink-0 max-w-full z-[1] mq1050:text-32xl mq1050:leading-[23px] mq450:text-19xl mq450:leading-[17px]">
          ABOUT US
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-center pt-0 pb-[130px] pr-5 pl-[62px] box-border max-w-full text-13xl font-arial lg:pl-[31px] lg:box-border mq1050:pb-[84px] mq1050:box-border mq750:pb-[55px] mq750:box-border">
        <div className="w-[1082px] flex flex-col items-start justify-start gap-[96px] max-w-full lg:gap-[48px] mq750:gap-[24px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[1px] max-w-full">
            <div className="self-stretch relative tracking-[0.16px] leading-[28.8px] z-[1] mq1050:text-7xl mq1050:leading-[23px] mq450:text-lgi mq450:leading-[17px]">
              <p className="m-0">{`We are a global diaspora of more than thousand highly experienced `}</p>
              <p className="m-0 whitespace-pre-wrap">{`                   `}</p>
            </div>
            <div className="w-[982px] flex flex-row items-start justify-start py-0 px-[41px] box-border max-w-full">
              <div className="flex-1 flex flex-col items-start justify-start gap-[28px] max-w-full">
                <div className="relative tracking-[0.16px] leading-[29px] z-[1] mq1050:text-7xl mq1050:leading-[23px] mq450:text-lgi mq450:leading-[17px]">
                  and socially committed engineers . We work towards making a
                </div>
                <div className="self-stretch flex flex-row items-start justify-end py-0 px-[53px] box-border max-w-full mq1050:pl-[26px] mq1050:pr-[26px] mq1050:box-border">
                  <div className="w-[763px] relative tracking-[0.16px] leading-[29px] flex items-center shrink-0 max-w-full z-[1] mq1050:text-7xl mq1050:leading-[23px] mq450:text-lgi mq450:leading-[17px]">
                    {" "}
                    difference in the life of needy and down trodden
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[925px] flex flex-row items-start justify-start py-0 pr-[11px] pl-[11.5px] box-border max-w-full">
            <img
              className="h-[674px] flex-1 relative max-w-full overflow-hidden object-cover z-[1]"
              alt=""
              src="/about-us-hero-image@2x.png"
            />
          </div>
        </div>
      </div>
      <div className="w-[1396px] flex flex-row items-start justify-center pt-0 px-5 pb-[129px] box-border max-w-full text-center text-xs font-raleway">
        <div className="w-[1140px] bg-steelblue-500 flex flex-row items-start justify-center py-0 pr-[3px] pl-0 box-border gap-[0.1px] max-w-full z-[1] mq1050:flex-wrap mq1050:pl-[3px] mq1050:pt-[3px] mq1050:pb-[3px] mq1050:box-border">
          <div className="bg-steelblue-400 flex flex-row items-start justify-start pt-[27.5px] pb-[17.5px] pr-[41.9px] pl-[42.9px] whitespace-nowrap text-www-equalopp-org-1349x593-default-nero">
            <b className="relative tracking-[1px] leading-[25px] inline-block min-w-[78px]">
              OUR STORY
            </b>
          </div>
          <div
            className="w-[162.8px] bg-steelblue-500 flex flex-row items-start justify-start pt-[17.2px] px-[37.7px] pb-[17.8px] box-border whitespace-nowrap cursor-pointer"
            onClick={onDivelementorWidgetWrapContainer1Click}
          >
            <div className="relative tracking-[0.16px] leading-[35px] font-medium inline-block min-w-[81px]">
              WHAT WE DO
            </div>
          </div>
          <div
            className="w-[162.8px] bg-steelblue-400 flex flex-row items-start justify-start py-7 px-[36.3px] box-border cursor-pointer"
            onClick={onDivelementorWidgetWrapContainer2Click}
          >
            <div className="flex-1 relative tracking-[1px] leading-[16px] font-medium inline-block min-w-[89px]">
              OBJECTIVES
            </div>
          </div>
          <div
            className="w-[162.8px] bg-steelblue-500 flex flex-row items-start justify-start pt-[15px] pb-[5px] pr-[27.5px] pl-[27.8px] box-border cursor-pointer"
            onClick={onDivelementorWidgetWrapContainer3Click}
          >
            <div className="flex-1 relative tracking-[1px] leading-[25px] font-medium">
              GENERAL INFORMATION
            </div>
          </div>
          <div className="flex-1 flex flex-row items-start justify-center min-w-[315px] max-w-full [row-gap:20px] mq450:flex-wrap">
            <div
              className="flex-1 bg-steelblue-400 flex flex-row items-start justify-start pt-7 pb-[17px] pr-[26.5px] pl-[27.6px] box-border min-w-[109px] shrink-0 [debug_commit:1de1738] cursor-pointer"
              onClick={onDivelementorWidgetWrapContainerClick}
            >
              <div className="flex-1 relative tracking-[1px] leading-[25px] font-medium">
                CHAPTERS
              </div>
            </div>
            <div
              className="flex-[0.9476] bg-steelblue-500 flex flex-row items-start justify-start pt-[13px] pb-[7px] pr-[21.8px] pl-[38px] box-border min-w-[109px] shrink-0 [debug_commit:1de1738] cursor-pointer z-[1] ml-[-1.5px] mq450:flex-1"
              onClick={onDivelementorWidgetWrapContainer12Click}
            >
              <div className="flex-1 relative tracking-[1px] leading-[25px] font-medium">
                <p className="m-0">PRESENT</p>
                <p className="m-0">LEADERSHIP</p>
              </div>
            </div>
            <div
              className="flex-[0.9476] bg-steelblue-600 flex flex-row items-start justify-start pt-[15px] px-[29.9px] pb-[30px] box-border min-w-[109px] shrink-0 [debug_commit:1de1738] cursor-pointer z-[2] ml-[-1.5px] mq450:flex-1"
              onClick={onDivelementorWidgetWrapContainer22Click}
            >
              <div className="flex-1 relative tracking-[1px] leading-[25px] font-medium">
                TIMELINE
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-24 pr-[75px] pl-[78px] box-border max-w-full mq1050:pb-[62px] mq1050:box-border mq450:pb-10 mq450:box-border mq750:pl-[39px] mq750:pr-[37px] mq750:box-border">
        <img
          className="h-[769px] flex-1 relative max-w-full overflow-hidden object-contain z-[1]"
          loading="lazy"
          alt=""
          src="/timeline@2x.png"
        />
      </div>
      <footer className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[25px] box-border max-w-full text-left text-base text-black font-h3">
        <div className="flex-1 bg-www-equalopp-org-1349x593-default-nero flex flex-row items-end justify-between pt-5 pb-6 pr-[29px] pl-0 box-border max-w-full gap-[20px] z-[1] lg:flex-wrap lg:pl-5 lg:pr-5 lg:box-border">
          <div className="h-[88px] w-[1387px] relative bg-www-equalopp-org-1349x593-default-nero hidden max-w-full" />
          <div className="h-11 w-[203px] flex flex-col items-start justify-start">
            <div className="w-[138.5px] h-11 relative z-[1] flex items-center justify-center">
              <img
                className="w-full h-full z-[1] object-contain absolute left-[4px] top-[0px] [transform:scale(1.364)]"
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
                  alt=""
                  src="/social.svg"
                />
              </div>
              <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                <img
                  className="w-6 h-[22px] relative object-cover z-[1]"
                  alt=""
                  src="/social-11@2x.png"
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
        </div>
      </footer>
    </div>
  );
};

export default AboutUsTimeline;
