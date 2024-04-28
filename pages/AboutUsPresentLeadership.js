import { useRouter } from "next/router";

const AboutUsPresentLeadership = () => {
  const router = useRouter();

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

  const onNavigationItemDetails1Click = () => {
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

  return (
    <div className="w-full relative flex flex-col items-end justify-start pt-0 px-px pb-[272px] box-border gap-[28px] leading-[normal] tracking-[normal]">
      <footer className="w-full !m-[0] sticky bottom-[0px] left-[calc(50%_-_693.5px)] bg-www-equalopp-org-1349x593-default-nero flex flex-row items-end justify-between pt-5 pb-6 pr-[29px] pl-0 box-border top-[0] z-[99] gap-[20px] text-left text-base text-black font-h3">
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
        <div className="w-[582.5px] flex flex-col items-start justify-end pt-0 px-0 pb-2.5 box-border max-w-full mq1050:w-0">
          <div className="self-stretch flex flex-row items-start justify-between gap-[20px] z-[1] mq1050:hidden">
            <div
              className="relative inline-block min-w-[77px] whitespace-nowrap cursor-pointer"
              onClick={onAboutTextClick}
            >
              Contact us
            </div>
            <div
              className="relative inline-block min-w-[64px] whitespace-nowrap cursor-pointer"
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
            <div className="relative inline-block min-w-[99px] whitespace-nowrap">
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
      </footer>
      <header className="w-[1412px] bg-www-equalopp-org-1349x593-default-nero flex flex-row items-start justify-between py-0.5 pr-[102px] pl-[47px] box-border max-w-[103%] shrink-0 gap-[20px] z-[1] text-center text-sm text-gray1-100 font-h3 lg:pl-[23px] lg:pr-[51px] lg:box-border mq1050:flex-wrap mq750:pr-[25px] mq750:box-border">
        <div className="h-20 w-[220px] relative overflow-hidden shrink-0">
          <img
            className="absolute h-[calc(100%_-_16px)] top-[8px] bottom-[8px] left-[18px] max-h-full w-[164.4px] object-contain"
            alt=""
            src="/image-32@2x.png"
          />
        </div>
        <div className="flex flex-col items-start justify-start pt-5 px-0 pb-0 box-border max-w-full">
          <div className="flex flex-row items-start justify-start [row-gap:20px] mq750:flex-wrap">
            <div className="rounded-sm flex flex-row items-start justify-start pt-2.5 px-4 pb-2 text-black border-b-[1px] border-solid border-skyblue">
              <div className="relative font-medium inline-block min-w-[38px]">
                Home
              </div>
            </div>
            <div
              className="rounded-sm flex flex-row items-start justify-start py-2.5 px-4 cursor-pointer"
              onClick={onNavigationItemDetails1Click}
            >
              <div className="relative font-medium inline-block min-w-[58px]">
                About Us
              </div>
            </div>
            <div className="rounded-sm flex flex-row items-start justify-start py-2.5 px-4 gap-[8px]">
              <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                <div className="relative font-medium inline-block min-w-[84px]">
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
                <div className="relative font-medium inline-block min-w-[95px]">
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
            <div className="relative font-medium inline-block min-w-[56px]">
              Sign In
            </div>
          </div>
        </div>
      </header>
      <main className="self-stretch flex flex-row items-start justify-center py-0 pr-7 pl-5 box-border max-w-full text-left text-45xl text-black font-h3">
        <div className="w-[1165px] flex flex-col items-start justify-start gap-[100px] max-w-full lg:gap-[50px] mq750:gap-[25px]">
          <div className="self-stretch flex flex-row items-start justify-center pt-0 pb-[47px] pr-5 pl-[109px] box-border max-w-full mq450:pl-5 mq450:box-border mq750:pl-[54px] mq750:box-border">
            <div className="w-[534px] relative tracking-[0.16px] leading-[29px] font-extrabold flex items-center shrink-0 max-w-full z-[1] mq1050:text-32xl mq1050:leading-[23px] mq450:text-19xl mq450:leading-[17px]">
              ABOUT US
            </div>
          </div>
          <div className="flex flex-row items-start justify-end py-0 px-[37px] box-border max-w-full text-13xl font-arial">
            <div className="w-[1082px] flex flex-col items-start justify-start gap-[1px] max-w-full">
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
          </div>
          <div className="w-[1149px] flex flex-row items-start justify-center pt-0 px-5 pb-[17px] box-border max-w-full">
            <div className="w-[902px] flex flex-row items-start justify-start relative max-w-full">
              <img
                className="h-[2207px] w-[1412px] absolute !m-[0] bottom-[-997px] left-[-255.5px]"
                alt=""
                src="/rectangle-22.svg"
              />
              <img
                className="h-[674px] flex-1 relative max-w-full overflow-hidden object-cover z-[1]"
                alt=""
                src="/about-us-hero-image@2x.png"
              />
            </div>
          </div>
          <div className="w-[1140px] flex flex-row items-start justify-start pt-0 px-0 pb-5 box-border max-w-full text-center text-xs font-raleway">
            <div className="flex-1 bg-steelblue-500 flex flex-row items-start justify-center py-0 pr-[3px] pl-0 box-border gap-[0.1px] max-w-full z-[1] mq1050:flex-wrap mq1050:pl-[3px] mq1050:pt-[3px] mq1050:pb-[3px] mq1050:box-border">
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
                  className="flex-[0.9476] bg-steelblue-600 flex flex-row items-start justify-start pt-[13px] pb-[7px] pr-[21.8px] pl-[38px] box-border min-w-[109px] shrink-0 [debug_commit:1de1738] cursor-pointer z-[1] ml-[-1.5px] mq450:flex-1"
                  onClick={onDivelementorWidgetWrapContainer12Click}
                >
                  <div className="flex-1 relative tracking-[1px] leading-[25px] font-medium">
                    <p className="m-0">PRESENT</p>
                    <p className="m-0">LEADERSHIP</p>
                  </div>
                </div>
                <div
                  className="flex-[0.9476] bg-steelblue-400 flex flex-row items-start justify-start pt-[15px] px-[29.9px] pb-[30px] box-border min-w-[109px] shrink-0 [debug_commit:1de1738] cursor-pointer z-[2] ml-[-1.5px] mq450:flex-1"
                  onClick={onDivelementorWidgetWrapContainer22Click}
                >
                  <div className="flex-1 relative tracking-[1px] leading-[25px] font-medium">
                    TIMELINE
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-end max-w-full text-xl font-red-rose">
            <div className="grid flex-row items-start justify-start gap-[35px] max-w-full grid-cols-[repeat(3,_minmax(249px,_1fr))] mq1050:my-0 mq1050:mx-auto mq1050:grid-cols-[repeat(2,_minmax(249px,_432px))] mq750:gap-[17px] mq750:grid-cols-[minmax(249px,_1fr)]">
              <div className="flex flex-col items-start justify-start gap-[23px] max-w-full">
                <div className="self-stretch h-[342px] relative rounded-3xs bg-steelblue-600 box-border overflow-hidden shrink-0 z-[1] border-[5px] border-solid border-gray1-800">
                  <img
                    className="absolute top-[38px] left-[16px] w-[299px] h-[299px] object-contain"
                    loading="lazy"
                    alt=""
                    src="/image-23@2x.png"
                  />
                </div>
                <div className="w-[319px] flex flex-row items-start justify-center py-0 px-5 box-border">
                  <div className="w-[135px] flex flex-col items-start justify-start gap-[1px]">
                    <h2 className="m-0 relative text-inherit tracking-[1px] leading-[27px] font-bold font-inherit inline-block min-w-[107px] z-[1] mq450:text-base mq450:leading-[22px]">
                      Manoj K C
                    </h2>
                    <h2 className="m-0 self-stretch relative text-inherit tracking-[1px] leading-[27px] font-normal font-raleway z-[1] mq450:text-base mq450:leading-[22px]">
                      President
                    </h2>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[23px] max-w-full">
                <div className="self-stretch h-[342px] relative rounded-3xs bg-steelblue-600 box-border z-[1] border-[5px] border-solid border-gray1-800">
                  <img
                    className="absolute bottom-[-11.2px] left-[calc(50%_-_150px)] w-[300px] h-[274.2px] object-contain z-[2]"
                    loading="lazy"
                    alt=""
                    src="/image-24@2x.png"
                  />
                </div>
                <div className="flex flex-row items-start justify-start py-0 pr-[77px] pl-[72px] mq450:pl-5 mq450:pr-5 mq450:box-border">
                  <div className="flex flex-col items-start justify-start gap-[4px]">
                    <div className="flex flex-row items-start justify-start py-0 pr-[13px] pl-[18px]">
                      <h2 className="m-0 relative text-inherit tracking-[1px] leading-[27px] font-bold font-inherit z-[1] mq450:text-base mq450:leading-[22px]">
                        Sunil N Menon
                      </h2>
                    </div>
                    <h2 className="m-0 relative text-inherit tracking-[1px] leading-[27px] font-normal font-raleway z-[1] mq450:text-base mq450:leading-[22px]">
                      General Secretary
                    </h2>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[23px] max-w-full">
                <div className="self-stretch h-[342px] relative rounded-3xs bg-steelblue-600 box-border overflow-hidden shrink-0 z-[1] border-[5px] border-solid border-gray1-800">
                  <img
                    className="absolute top-[39px] left-[17px] w-[298px] h-[298px] object-contain"
                    loading="lazy"
                    alt=""
                    src="/image-25@2x.png"
                  />
                </div>
                <div className="w-[316px] flex flex-row items-start justify-center py-0 px-5 box-border">
                  <div className="flex flex-col items-start justify-start gap-[2px]">
                    <div className="flex flex-row items-start justify-start py-0 pr-1.5 pl-2">
                      <h2 className="m-0 relative text-inherit tracking-[1px] leading-[27px] font-bold font-inherit inline-block min-w-[82px] z-[1] mq450:text-base mq450:leading-[22px]">
                        Vinod P
                      </h2>
                    </div>
                    <h2 className="m-0 relative text-inherit tracking-[1px] leading-[27px] font-normal font-raleway inline-block min-w-[96px] z-[1] mq450:text-base mq450:leading-[22px]">
                      Treasurer
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutUsPresentLeadership;
