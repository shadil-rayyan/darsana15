import { useRouter } from "next/router";

const OmanChapters = () => {
  const router = useRouter();

  const onNavigationOptionsClick = () => {
    router.push("/");
  };

  const onWhyADSTextClick = () => {
    router.push("/Product");
  };

  const onChapterBangaloreButtonClick = () => {
    router.push("/BangaloreChapters");
  };

  const onChapterPalkkadButtonClick = () => {
    router.push("/PalkkadChapters");
  };

  const onChapterUaeButtonClick = () => {
    router.push("/UAEChapters");
  };

  const onChapterSaudiButtonClick = () => {
    router.push("/SaudiChapters");
  };

  const onCalicutOmanButtonClick = () => {
    router.push("/CalicutChapters");
  };

  const onChapterNorthAmericaClick = () => {
    router.push("/NorthAmericaChapters");
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
    <div className="w-full h-[2342px] relative bg-www-equalopp-org-1349x593-default-nero overflow-hidden flex flex-col items-start justify-start pt-0.5 px-0 pb-[59px] box-border gap-[110px] leading-[normal] tracking-[normal] text-center text-base text-black font-h3 mq450:gap-[27px] mq750:gap-[55px] mq1025:h-auto">
      <section className="mt-[-367px] self-stretch flex flex-row items-start justify-end pt-0 px-0 pb-[197px] box-border max-w-full">
        <header className="w-[1400px] flex flex-row items-end justify-between py-0 pr-0 pl-5 box-border gap-[20px] max-w-full text-left text-base text-gray1-300 font-nunito">
          <img
            className="self-stretch w-[139px] relative max-h-full object-cover min-h-[60px]"
            alt=""
            src="/divlogo1@2x.png"
          />
          <div className="w-[1078px] rounded-21xl bg-www-equalopp-org-1349x593-default-nero flex flex-row items-start justify-start pt-[5px] pb-1 pr-11 pl-[45px] box-border gap-[29.2px] max-w-full mq1125:pl-[22px] mq1125:pr-[22px] mq1125:box-border">
            <div className="w-[44.3px] flex flex-col items-start justify-start pt-[13px] px-0 pb-0 box-border text-steelblue-400">
              <div className="self-stretch h-[22px] relative tracking-[0.16px] leading-[22.4px] flex items-center shrink-0">
                Home
              </div>
            </div>
            <div className="w-[70px] flex flex-col items-start justify-start pt-[13px] px-0 pb-0 box-border">
              <div className="self-stretch relative tracking-[0.16px] leading-[23px] whitespace-nowrap">
                About Us
              </div>
            </div>
            <div className="w-[118.8px] flex flex-col items-start justify-start pt-[13px] px-0 pb-0 box-border">
              <div className="self-stretch flex flex-row items-start justify-start gap-[4.6px]">
                <div className="flex-1 relative tracking-[0.16px] leading-[23px] whitespace-nowrap">
                  Key Initiatives
                </div>
                <div className="flex flex-col items-start justify-start pt-[5.2px] px-0 pb-0">
                  <img
                    className="w-[12.2px] h-3 relative overflow-hidden shrink-0"
                    alt=""
                    src="/link1.svg"
                  />
                </div>
              </div>
            </div>
            <div className="h-[35px] flex-1 flex flex-col items-start justify-start pt-[13px] px-0 pb-0 box-border">
              <div className="self-stretch flex-1 flex flex-row items-end justify-start gap-[4.6px]">
                <div className="self-stretch flex-1 relative tracking-[0.16px] leading-[22.4px] flex items-center whitespace-nowrap">
                  Other Initiatives
                </div>
                <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[4.8px]">
                  <img
                    className="w-[12.2px] h-3 relative overflow-hidden shrink-0"
                    alt=""
                    src="/link-11.svg"
                  />
                </div>
              </div>
            </div>
            <div className="h-[35px] w-[83.5px] flex flex-col items-start justify-start pt-[13px] px-0 pb-0 box-border">
              <div className="self-stretch flex-1 flex flex-row items-end justify-start gap-[4.7px]">
                <div className="self-stretch flex-1 relative tracking-[0.16px] leading-[22.4px] flex items-center whitespace-nowrap">{`Product `}</div>
                <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[4.8px]">
                  <img
                    className="w-[12.2px] h-3 relative overflow-hidden shrink-0"
                    alt=""
                    src="/link-21.svg"
                  />
                </div>
              </div>
            </div>
            <div className="h-[35px] w-[100.9px] flex flex-col items-start justify-start pt-[13px] px-0 pb-0 box-border mq1125:w-0">
              <div className="self-stretch flex-1 flex flex-row items-start justify-start mq1125:hidden">
                <div className="self-stretch flex-1 relative tracking-[0.16px] leading-[22.4px] flex items-center shrink-0 [debug_commit:1de1738]">
                  Actvities
                </div>
                <div className="self-stretch flex-1 relative tracking-[0.16px] leading-[22.4px] flex items-center shrink-0 [debug_commit:1de1738] z-[1] ml-[-100.9px]">
                  Actvities
                </div>
              </div>
            </div>
            <div className="w-[116.1px] flex flex-col items-start justify-start pt-[13px] pb-0 pr-5 pl-0 box-border">
              <div className="w-[81px] relative tracking-[0.16px] leading-[23px] flex items-center whitespace-nowrap">
                Contact Us
              </div>
            </div>
            <div className="h-[49px] w-[114px] rounded-11xl bg-steelblue-300 flex flex-row items-start justify-start py-2.5 px-[25px] box-border whitespace-nowrap text-xl text-www-equalopp-org-1349x593-default-nero font-h3">
              <div className="self-stretch flex-1 relative tracking-[0.16px] leading-[28.8px] font-extrabold flex items-center whitespace-nowrap">
                Sign In
              </div>
            </div>
          </div>
        </header>
      </section>
      <section className="self-stretch flex flex-row items-start justify-start pt-0 pb-9 pr-11 pl-[47px] box-border max-w-full shrink-0 text-left text-sm text-black font-h3 mq750:pl-[23px] mq750:pr-[22px] mq750:box-border">
        <div className="flex-1 flex flex-col items-start justify-start gap-[85px] max-w-full mq450:gap-[21px] mq750:gap-[42px]">
          <div className="w-[1263px] flex flex-row items-start justify-between pt-0 px-0 pb-[31.1px] box-border max-w-full gap-[20px] text-center text-gray1-100 mq1025:flex-wrap">
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
                <button
                  className="cursor-pointer [border:none] pt-2.5 px-4 pb-2 bg-[transparent] rounded-sm flex flex-row items-start justify-start border-b-[1px] border-solid border-skyblue hover:bg-deepskyblue-400"
                  onClick={onNavigationOptionsClick}
                >
                  <div className="relative text-sm font-medium font-h3 text-black text-center inline-block min-w-[38px]">
                    Home
                  </div>
                </button>
                <div className="rounded-sm flex flex-row items-start justify-start py-2.5 px-4 z-[1]">
                  <div className="relative font-medium inline-block min-w-[58px]">
                    About Us
                  </div>
                </div>
                <div className="rounded-sm flex flex-row items-start justify-start py-2.5 px-4 gap-[8px] z-[2]">
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
                <div className="rounded-sm flex flex-row items-start justify-start py-2.5 px-4 gap-[8px] z-[3]">
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
                <div className="rounded-sm flex flex-row items-start justify-start py-2.5 px-4 z-[4]">
                  <div
                    className="relative font-medium inline-block min-w-[50px] cursor-pointer"
                    onClick={onWhyADSTextClick}
                  >
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
          </div>
          <div className="self-stretch flex flex-row items-start justify-end max-w-full text-29xl">
            <div className="w-[1306px] flex flex-col items-end justify-start gap-[56px] max-w-full mq750:gap-[28px]">
              <div className="w-[897px] flex flex-row items-start justify-between gap-[20px] max-w-full mq450:flex-wrap">
                <div className="flex flex-col items-start justify-start pt-[18.9px] px-0 pb-0">
                  <h1 className="m-0 relative text-inherit leading-[58px] font-extrabold font-inherit inline-block min-w-[128px] mq450:text-10xl mq450:leading-[35px] mq1025:text-19xl mq1025:leading-[46px]">
                    Oman
                  </h1>
                </div>
                <div className="w-[219px] flex flex-row items-start justify-start relative text-base">
                  <div className="absolute !m-[0] top-[-7.3px] left-[13px] tracking-[1.5px] leading-[18px] capitalize font-medium inline-block min-w-[127px] z-[2]">
                    Select Chapter
                  </div>
                  <div className="flex-1 rounded-8xs flex flex-row items-end justify-start py-[23px] px-[25px] gap-[23px] text-5xl border-[1px] border-solid border-black">
                    <div className="h-[65.9px] w-[219px] relative rounded-8xs box-border hidden border-[1px] border-solid border-black" />
                    <div className="w-[121px] relative tracking-[1.5px] leading-[18px] capitalize font-medium flex items-center shrink-0 z-[1] mq450:text-lgi mq450:leading-[14px]">
                      Oman
                    </div>
                    <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[4.2px]">
                      <img
                        className="w-[9.8px] h-[4.1px] relative z-[1]"
                        alt=""
                        src="/vector.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start max-w-full">
                <img
                  className="w-[1050px] relative max-h-full object-cover max-w-full"
                  loading="lazy"
                  alt=""
                  src="/oman-chapter-hero-image@2x.png"
                />
              </div>
            </div>
          </div>
          <div className="w-[1096px] flex flex-row items-start justify-start py-0 px-[29px] box-border max-w-full text-xl">
            <div className="flex-1 relative inline-block max-w-full mq450:text-base">
              <p className="m-0">
                Darsana Oman Chapter has 22 active members.  
              </p>
              <p className="m-0">
                - The first of the D4 Talk Series was conducted on 22nd October,
                2022. Wilson George spoke on ‘Janathipathyathinte
                Avasthantharangal’, which was attended by many Darsana Members.
              </p>
              <p className="m-0">{`- Oman Members & family actively participated in other chapter driven events like Webinar, photography contest by Cochin chapter, & Raga Malhar by UAE Chapter etc. Members actively contributed by producing promo videos to support the event organized by Darsanawomens’ team.`}</p>
              <p className="m-0">
                - Lakshmi was part of subcommittees for EYE magazine, Munderi
                Seva Society (Honey) initiative by Calicut Chapter. Rajesh
                Thampi was part of Ignite team and Sunil Menon was part of House
                Construction, Mentorship, Member support, BCS and On-boarding
                subcommittees.
              </p>
              <p className="m-0">
                - Members of the Oman chapter provided continued support to 3
                financially poor students from Indian Schools in Oman.
              </p>
              <p className="m-0">
                - Darsana Oman Chapter coordinating and is currently providing
                financial support to one of the NSS Engineering College
                Semester-4 students
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="w-[129px] h-[16.5px] relative bg-www-equalopp-org-1349x593-default-nero hidden" />
      <div className="w-[209px] h-[247px] relative hidden">
        <div
          className="absolute top-[0px] left-[0px] w-[209px] h-11 cursor-pointer"
          onClick={onChapterBangaloreButtonClick}
        >
          <div className="absolute top-[0px] left-[0px] rounded-mini bg-www-equalopp-org-1349x593-default-nero w-full h-full" />
          <div className="absolute top-[0px] left-[58px] tracking-[1.5px] leading-[18px] capitalize font-medium flex items-center justify-center w-[113px] h-11">
            Bangalore
          </div>
        </div>
        <div
          className="absolute top-[44px] left-[0px] w-[209px] h-11 cursor-pointer"
          onClick={onChapterPalkkadButtonClick}
        >
          <div className="absolute top-[0px] left-[0px] rounded-mini bg-www-equalopp-org-1349x593-default-nero w-full h-full" />
          <div className="absolute top-[0px] left-[44px] tracking-[1.5px] leading-[18px] capitalize font-medium flex items-center justify-center w-[113px] h-11">
            Palkkad
          </div>
        </div>
        <div
          className="absolute top-[88px] left-[0px] w-[209px] h-11 cursor-pointer"
          onClick={onChapterUaeButtonClick}
        >
          <div className="absolute top-[0px] left-[0px] rounded-mini bg-www-equalopp-org-1349x593-default-nero w-full h-full" />
          <div className="absolute top-[0px] left-[44px] tracking-[1.5px] leading-[18px] capitalize font-medium flex items-center justify-center w-[113px] h-11">
            UAE
          </div>
        </div>
        <div
          className="absolute top-[132px] left-[0px] w-[209px] h-11 cursor-pointer"
          onClick={onChapterSaudiButtonClick}
        >
          <div className="absolute top-[0px] left-[0px] rounded-mini bg-www-equalopp-org-1349x593-default-nero w-full h-full" />
          <div className="absolute top-[0px] left-[44px] tracking-[1.5px] leading-[18px] capitalize font-medium flex items-center justify-center w-[113px] h-11">
            Saudi
          </div>
        </div>
        <div
          className="absolute top-[176px] left-[0px] w-full h-11 cursor-pointer"
          onClick={onCalicutOmanButtonClick}
        >
          <div className="absolute top-[0px] left-[0px] rounded-mini bg-www-equalopp-org-1349x593-default-nero w-full h-full" />
          <div className="absolute top-[0px] left-[0px] rounded-mini bg-www-equalopp-org-1349x593-default-nero w-full h-full" />
          <div className="absolute top-[0px] left-[27px] tracking-[1.5px] leading-[18px] capitalize font-medium flex items-center justify-center w-[155px] h-11">
            Calicut
          </div>
        </div>
        <div
          className="absolute top-[220px] left-[0px] w-full h-11 cursor-pointer"
          onClick={onChapterNorthAmericaClick}
        >
          <div className="absolute top-[0px] left-[0px] rounded-mini bg-www-equalopp-org-1349x593-default-nero w-full h-full" />
          <div className="absolute top-[0px] left-[0px] rounded-mini bg-www-equalopp-org-1349x593-default-nero w-full h-full" />
          <div className="absolute top-[0px] left-[46px] tracking-[1.5px] leading-[18px] capitalize font-medium flex items-center justify-center w-[155px] h-11">
            North America
          </div>
        </div>
      </div>
      <section className="w-[1365px] flex flex-row items-start justify-center pt-0 px-5 pb-[22.6px] box-border max-w-full shrink-0 text-left text-xl text-black font-h3">
        <div className="w-[1199px] shadow-[0px_94px_200px_rgba(21,_21,_21,_0.15)] flex flex-row flex-wrap items-start justify-start relative gap-[38px] max-w-full mq750:gap-[19px]">
          <img
            className="h-[75.8px] w-[75.8px] absolute !m-[0] top-[-38px] left-[25px] object-contain z-[1]"
            loading="lazy"
            alt=""
            src="/profile@2x.png"
          />
          <img
            className="h-[75.8px] w-[75.8px] absolute !m-[0] top-[-36px] left-[437px] object-contain z-[1]"
            alt=""
            src="/profile@2x.png"
          />
          <img
            className="h-[75.8px] w-[75.8px] absolute !m-[0] top-[-36px] right-[251.2px] object-contain z-[1]"
            alt=""
            src="/profile@2x.png"
          />
          <div className="flex-1 shadow-[0px_28.9px_61.56px_rgba(21,_21,_21,_0.15)] rounded-2xl bg-www-equalopp-org-1349x593-default-nero flex flex-col items-start justify-center pt-[41.8px] px-[25px] pb-[56.8px] box-border gap-[32px] min-w-[280px] max-w-full mq450:gap-[16px]">
            <div className="self-stretch h-[20.4px]" />
            <div className="self-stretch relative mq450:text-base">
              "Incredible initiative! Well done, Bangalore chapter!"
            </div>
            <div className="self-stretch flex flex-row items-center justify-center text-sm font-manrope">
              <div className="flex flex-col items-start justify-start gap-[1px]">
                <div className="relative font-extrabold inline-block min-w-[121px]">
                  Kyle Roberts DVM
                </div>
                <div className="relative text-3xs text-gray-600 inline-block min-w-[123px]">
                  Customer Web Consultant
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 shadow-[0px_28.9px_61.56px_rgba(21,_21,_21,_0.15)] rounded-2xl bg-www-equalopp-org-1349x593-default-nero flex flex-col items-start justify-center pt-5 px-[25px] pb-[35px] box-border gap-[32px] min-w-[280px] max-w-full text-center mq450:gap-[16px]">
            <div className="self-stretch h-[20.4px]" />
            <div className="h-[90px] relative leading-[30px] inline-block mq450:text-base mq450:leading-[24px]">
              <p className="m-0">
                Heartwarming event. Inspiring work by Darsana.
              </p>
            </div>
            <div className="self-stretch flex flex-row items-center justify-center text-left text-sm font-manrope">
              <div className="flex flex-col items-start justify-start gap-[1px]">
                <div className="relative font-extrabold inline-block min-w-[118px]">
                  Sophia Anderson
                </div>
                <div className="relative text-3xs text-gray-600">
                  Internal Implementation Officer
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 shadow-[0px_28.9px_61.56px_rgba(21,_21,_21,_0.15)] rounded-2xl bg-www-equalopp-org-1349x593-default-nero flex flex-col items-start justify-center pt-5 px-[25px] pb-[35px] box-border gap-[32px] min-w-[280px] max-w-full mq450:gap-[16px]">
            <div className="self-stretch h-[20.4px]" />
            <div className="self-stretch h-[92px] relative inline-block mq450:text-base">
              <p className="m-0">
                "Impressive progress. Keep it up, Darsana team!"
              </p>
              <p className="m-0">&nbsp;</p>
            </div>
            <div className="self-stretch flex flex-row items-center justify-center text-sm font-manrope">
              <div className="flex flex-col items-start justify-start gap-[1px]">
                <div className="relative font-extrabold inline-block min-w-[109px]">
                  Stephen Brekke
                </div>
                <div className="relative text-3xs text-gray-600">
                  Legacy Integration Producer
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-[1374px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-13xl text-black font-h3">
        <div className="w-[996px] flex flex-row flex-wrap items-center justify-center gap-[48px] max-w-full mq750:gap-[24px]">
          <div className="flex-1 flex flex-col items-start justify-start gap-[24px] min-w-[225px]">
            <img
              className="w-12 h-12 relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/icon--email.svg"
            />
            <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
                <h1 className="m-0 self-stretch relative text-inherit leading-[42px] font-bold font-inherit mq450:text-lgi mq450:leading-[25px] mq1025:text-7xl mq1025:leading-[33px]">
                  Email
                </h1>
                <div className="self-stretch h-12 relative text-base leading-[150%] hidden">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in ero.
                </div>
              </div>
              <div className="self-stretch relative text-base [text-decoration:underline] leading-[150%] whitespace-nowrap">
                hello@relume.io
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[24px] min-w-[225px]">
            <img
              className="w-12 h-12 relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/icon--phone.svg"
            />
            <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
                <h1 className="m-0 self-stretch relative text-inherit leading-[42px] font-bold font-inherit mq450:text-lgi mq450:leading-[25px] mq1025:text-7xl mq1025:leading-[33px]">
                  Phone
                </h1>
                <div className="self-stretch h-12 relative text-base leading-[150%] hidden">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in ero.
                </div>
              </div>
              <div className="self-stretch relative text-base [text-decoration:underline] leading-[150%]">
                +1 (555) 000-0000
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[24px] min-w-[225px]">
            <img
              className="w-12 h-12 relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/icon--pin.svg"
            />
            <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
                <h1 className="m-0 self-stretch relative text-inherit leading-[42px] font-bold font-inherit mq450:text-lgi mq450:leading-[25px] mq1025:text-7xl mq1025:leading-[33px]">
                  Bangalore
                </h1>
                <div className="self-stretch h-12 relative text-base leading-[150%] hidden">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in ero.
                </div>
              </div>
              <div className="self-stretch relative text-base [text-decoration:underline] leading-[150%]">
                123 Sample St, Sydney NSW 2000 AU
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-[1387px] bg-www-equalopp-org-1349x593-default-nero flex flex-row items-end justify-between pt-5 pb-6 pr-[29px] pl-0 box-border max-w-full gap-[20px] text-left text-base text-black font-h3 mq1125:flex-wrap mq1125:justify-center mq1125:pl-5 mq1125:pr-5 mq1125:box-border">
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
      </section>
    </div>
  );
};

export default OmanChapters;
