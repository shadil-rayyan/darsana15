import { useRouter } from "next/router";

const ScholarshipFaqPage = () => {
  const router = useRouter();

  const onEligibilitySnavbarClick = () => {
    router.push("/ScholarshipEligibility");
  };

  const onFaqSnavbarClick = () => {
    router.push("/ScholarshipFaqPage");
  };

  const onConactUsSnavbarClick = () => {
    router.push("/ScholarshipContactUsPage");
  };

  const onAboutTextClick = () => {
    router.push("/ContactUsFinal");
  };

  const onPricingTextClick = () => {
    router.push("/Initiatives");
  };

  return (
    <div className="w-full relative flex flex-col items-start justify-start py-0 px-0 box-border min-h-[1952px] leading-[normal] tracking-[normal]">
      <main className="self-stretch bg-www-equalopp-org-1349x593-default-nero overflow-hidden flex flex-col items-end justify-start pt-[135px] pb-0 pr-[37px] pl-4 box-border gap-[83px] max-w-full lg:pt-[88px] lg:box-border mq1050:pt-[57px] mq1050:box-border mq450:gap-[21px] mq450:pt-[37px] mq450:box-border mq750:gap-[41px]">
        <div className="w-[560px] hidden max-w-full" />
        <section className="self-stretch flex flex-row items-start justify-start py-0 px-[54px] box-border max-w-full text-center text-13xl font-roboto-condensed lg:pl-[27px] lg:pr-[27px] lg:box-border">
          <div className="w-[1245.5px] flex flex-col items-start justify-start gap-[41px] max-w-full mq750:gap-[20px]">
            <div className="w-[1110px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
              <div className="w-[720px] flex flex-row items-start justify-end pt-[15px] px-[37px] pb-[450px] box-border bg-[url('/scholarship-hero-image@2x.png')] bg-cover bg-no-repeat bg-[top] max-w-full mq750:pt-5 mq750:pb-[292px] mq750:box-border">
                <img
                  className="h-[500px] w-[720px] relative object-cover hidden max-w-full"
                  alt=""
                  src="/scholarship-hero-image@2x.png"
                />
                <h1 className="m-0 relative text-inherit tracking-[0.16px] leading-[35px] uppercase font-bold font-inherit text-transparent !bg-clip-text [background:linear-gradient(89.86deg,_rgba(26,_27,_65,_0),_rgba(253,_241,_241,_0.9)),_linear-gradient(90.14deg,_#a2bccb,_rgba(24,_77,_183,_0.82)_26%,_#305db5_51.5%,_rgba(29,_55,_107,_0.9)_73.5%,_#223e75)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [text-shadow:1px_0_0_#491fa0,_0_1px_0_#491fa0,_-1px_0_0_#491fa0,_0_-1px_0_#491fa0] z-[1] mq1050:text-7xl mq1050:leading-[28px] mq450:text-lgi mq450:leading-[21px]">
                  Educate With Biju Cherian Scholarship
                </h1>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start max-w-full lg:hidden">
              <button className="cursor-pointer [border:none] pt-[17px] pb-[18px] pr-5 pl-[22px] bg-steelblue-600 w-[311.3px] flex flex-row items-start justify-center box-border whitespace-nowrap hover:bg-steelblue-200">
                <div className="relative text-base tracking-[0.16px] leading-[35px] font-medium font-h3 text-www-equalopp-org-1349x593-default-nero text-center inline-block min-w-[111px] whitespace-nowrap">
                  About Program
                </div>
              </button>
              <div className="h-[70px] flex-1 relative max-w-full">
                <button
                  className="cursor-pointer [border:none] pt-7 px-[82px] pb-[21px] bg-steelblue-500 absolute top-[0px] left-[0px] w-[311.3px] flex flex-row items-start justify-start box-border z-[1] hover:bg-deepskyblue-300"
                  onClick={onEligibilitySnavbarClick}
                >
                  <div className="w-[117px] relative text-mini tracking-[0.6px] leading-[21px] font-medium font-h3 text-black text-center flex items-center justify-center shrink-0">
                    Eligibilty
                  </div>
                </button>
                <button
                  className="cursor-pointer [border:none] pt-[15px] pb-5 pr-5 pl-[22px] bg-steelblue-500 absolute top-[0px] left-[311.2px] w-[311.5px] flex flex-row items-start justify-center box-border z-[2] hover:bg-deepskyblue-300"
                  onClick={onFaqSnavbarClick}
                >
                  <div className="w-[107.5px] relative text-mini tracking-[0.16px] leading-[35px] font-medium font-raleway text-black text-center flex items-center justify-center shrink-0">
                    FAQ
                  </div>
                </button>
              </div>
              <button
                className="cursor-pointer [border:none] pt-7 pb-[7px] pr-5 pl-[51px] bg-steelblue-400 w-[311.5px] flex flex-row items-start justify-center box-border whitespace-nowrap z-[3] hover:bg-deepskyblue-300"
                onClick={onConactUsSnavbarClick}
              >
                <div className="w-[137px] relative text-mini tracking-[0.16px] leading-[35px] font-medium font-raleway text-black text-center flex items-center justify-center shrink-0">
                  Contact us
                </div>
              </button>
            </div>
          </div>
        </section>
        <section className="w-[1233px] flex flex-row items-start justify-center pt-0 px-5 pb-[50px] box-border max-w-full text-left text-mini text-gray1-500 font-h3 mq1050:pb-8 mq1050:box-border mq750:pb-[21px] mq750:box-border">
          <div className="w-[909px] flex flex-col items-start justify-start gap-[311px] max-w-full mq1050:gap-[155px] mq450:gap-[78px]">
            <div className="w-[775px] flex flex-col items-start justify-start gap-[13px] max-w-full">
              <div className="self-stretch box-border flex flex-row items-start justify-between py-[19px] pr-[41px] pl-[39px] max-w-full gap-[20px] border-[1px] border-solid border-darkslategray-100">
                <div className="h-[65px] w-[775px] relative box-border hidden max-w-full border-[1px] border-solid border-darkslategray-100" />
                <div className="w-[347.5px] relative leading-[23px] font-medium inline-block shrink-0 max-w-[calc(100%_-_45px)] z-[1]">
                  Question text goes here
                </div>
                <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                  <img
                    className="w-[25px] h-[14.3px] relative z-[1]"
                    alt=""
                    src="/answer-icons.svg"
                  />
                </div>
              </div>
              <div className="self-stretch rounded-3xs box-border flex flex-row items-start justify-start pt-4 px-[30px] pb-[17px] max-w-full z-[1] border-[1px] border-solid border-lightslategray">
                <input
                  className="w-[347.5px] [border:none] [outline:none] font-medium font-h3 text-mini bg-[transparent] h-[23px] relative leading-[150%] text-gray1-500 text-left inline-block max-w-full p-0"
                  placeholder="Answer text goes here"
                  type="text"
                />
                <div className="h-[60px] w-[775px] relative rounded-3xs box-border hidden max-w-full border-[1px] border-solid border-lightslategray" />
              </div>
              <div className="self-stretch box-border flex flex-row items-start justify-between py-[19px] pr-[41px] pl-[39px] max-w-full gap-[20px] border-[1px] border-solid border-darkslategray-100">
                <div className="h-[65px] w-[775px] relative box-border hidden max-w-full border-[1px] border-solid border-darkslategray-100" />
                <div className="w-[347.5px] relative leading-[23px] font-medium inline-block shrink-0 max-w-[calc(100%_-_45px)] z-[1]">
                  Question text goes here
                </div>
                <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                  <img
                    className="w-[25px] h-[14.3px] relative z-[1]"
                    alt=""
                    src="/answer-icons.svg"
                  />
                </div>
              </div>
              <div className="self-stretch box-border flex flex-row items-start justify-between py-[19px] pr-[41px] pl-[39px] max-w-full gap-[20px] border-[1px] border-solid border-darkslategray-100">
                <div className="h-[65px] w-[775px] relative box-border hidden max-w-full border-[1px] border-solid border-darkslategray-100" />
                <div className="w-[347.5px] relative leading-[23px] font-medium inline-block shrink-0 max-w-[calc(100%_-_45px)] z-[1]">
                  Question text goes here
                </div>
                <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                  <img
                    className="w-[25px] h-[14.3px] relative z-[1]"
                    alt=""
                    src="/answer-icons.svg"
                  />
                </div>
              </div>
              <div className="self-stretch box-border flex flex-row items-start justify-between py-[19px] pr-[41px] pl-[39px] max-w-full gap-[20px] border-[1px] border-solid border-darkslategray-100">
                <div className="h-[65px] w-[775px] relative box-border hidden max-w-full border-[1px] border-solid border-darkslategray-100" />
                <div className="w-[347.5px] relative leading-[23px] font-medium inline-block shrink-0 max-w-[calc(100%_-_45px)] z-[1]">
                  Question text goes here
                </div>
                <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                  <img
                    className="w-[25px] h-[14.3px] relative z-[1]"
                    alt=""
                    src="/answer-icons.svg"
                  />
                </div>
              </div>
              <div className="self-stretch box-border flex flex-row items-start justify-between py-[19px] pr-[41px] pl-[39px] max-w-full gap-[20px] border-[1px] border-solid border-darkslategray-100">
                <div className="h-[65px] w-[775px] relative box-border hidden max-w-full border-[1px] border-solid border-darkslategray-100" />
                <div className="w-[347.5px] relative leading-[23px] font-medium inline-block shrink-0 max-w-[calc(100%_-_45px)] z-[1]">
                  Question text goes here
                </div>
                <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                  <img
                    className="w-[25px] h-[14.3px] relative z-[1]"
                    alt=""
                    src="/answer-icons.svg"
                  />
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-end max-w-full">
              <div className="w-[814px] flex flex-col items-start justify-start min-h-[141px] max-w-full">
                <div className="self-stretch flex flex-col items-start justify-start gap-[18px] max-w-full z-[1]">
                  <div className="self-stretch flex flex-row items-start justify-end max-w-full">
                    <div className="w-[616px] relative leading-[23px] font-medium inline-block shrink-0 max-w-full">
                      Click here to applly for the scholarship
                    </div>
                  </div>
                  <button className="cursor-pointer [border:none] pt-[29.2px] px-[27px] pb-[13px] bg-[transparent] w-[676px] flex flex-row items-start justify-start box-border relative max-w-full">
                    <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-xl bg-royalblue" />
                    <div className="h-[57.8px] flex-1 relative text-13xl font-semibold font-h3 text-www-equalopp-org-1349x593-default-nero text-center inline-block max-w-full z-[1] mq1050:text-7xl mq450:text-lgi">
                      APPLY NOW
                    </div>
                  </button>
                </div>
                <div className="w-[653.9px] flex flex-row items-start justify-start py-0 px-4 box-border max-w-full mt-[-78.8px] text-center text-13xl text-www-equalopp-org-1349x593-default-nero">
                  <h1 className="m-0 h-[57.8px] flex-1 relative text-inherit font-bold font-inherit inline-block max-w-full mq1050:text-7xl mq450:text-lgi">
                    APPLY NOW
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer className="self-stretch bg-www-equalopp-org-1349x593-default-nero flex flex-row items-end justify-between pt-5 pb-6 pr-[29px] pl-0 box-border max-w-full gap-[20px] text-left text-base text-black font-h3 lg:flex-wrap lg:justify-center lg:pl-5 lg:pr-5 lg:box-border">
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
              <div className="relative inline-block min-w-[64px]">About us</div>
              <div
                className="self-stretch w-0 relative hidden cursor-pointer"
                onClick={onPricingTextClick}
              />
              <div className="relative inline-block min-w-[65px]">Chapters</div>
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
                  src="/social-32@2x.png"
                />
              </div>
            </div>
          </div>
        </footer>
      </main>
      <header className="self-stretch bg-www-equalopp-org-1349x593-default-nero flex flex-row items-start justify-between py-0.5 pr-[133px] pl-[47px] box-border max-w-full gap-[20px] z-[4] mt-[-1952px] text-center text-sm text-gray1-100 font-h3 lg:flex-wrap mq450:pr-5 mq450:box-border mq750:pl-[23px] mq750:pr-[66px] mq750:box-border">
        <div className="h-20 w-[220px] relative overflow-hidden shrink-0">
          <img
            className="absolute h-[calc(100%_-_16px)] top-[8px] bottom-[8px] left-[18px] max-h-full w-[164.4px] object-contain"
            loading="lazy"
            alt=""
            src="/image-32@2x.png"
          />
        </div>
        <div className="flex flex-col items-start justify-start pt-5 px-0 pb-0 box-border max-w-full">
          <div className="flex flex-row items-start justify-start [row-gap:20px] mq750:flex-wrap">
            <button className="cursor-pointer [border:none] pt-2.5 px-4 pb-2 bg-[transparent] rounded-sm flex flex-row items-start justify-start border-b-[1px] border-solid border-skyblue hover:bg-deepskyblue-400">
              <div className="relative text-sm font-medium font-h3 text-black text-center inline-block min-w-[38px]">
                Home
              </div>
            </button>
            <div className="rounded-sm flex flex-row items-start justify-start py-2.5 px-4">
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
        <div className="flex flex-col items-start justify-start pt-[17.5px] px-0 pb-0">
          <button className="cursor-pointer [border:none] py-3 px-6 bg-[transparent] rounded-lg [background:linear-gradient(83.21deg,_#3b0066,_#175fc4_38.7%,_#00e1e7_83.79%,_#00f7e0_93.69%,_#00ffdd)] flex flex-row items-start justify-start whitespace-nowrap">
            <div className="relative text-lg font-medium font-h3 text-www-equalopp-org-1349x593-default-nero text-center inline-block min-w-[56px]">
              Sign In
            </div>
          </button>
        </div>
      </header>
    </div>
  );
};

export default ScholarshipFaqPage;
