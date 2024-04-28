import { useRouter } from "next/router";

const SaudiChapters = () => {
  const router = useRouter();

  const onNavigationLinksDetailsClick = () => {
    router.push("/");
  };

  const onWhyADSTextClick = () => {
    router.push("/Product");
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

  return (
    <div className="w-full relative bg-www-equalopp-org-1349x593-default-nero overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[43px] box-border gap-[85px] leading-[normal] tracking-[normal] text-center text-base text-black font-h3 mq450:gap-[21px] mq750:gap-[42px]">
      <section className="self-stretch flex flex-row items-start justify-end pt-0 px-0 pb-[102px] box-border max-w-full text-left text-base text-black font-h3 lg:pb-[66px] lg:box-border mq750:pb-[43px] mq750:box-border">
        <div className="h-[1235px] w-[1413px] flex flex-col items-start justify-start pt-0.5 pb-0 pr-0 pl-5 box-border gap-[85px] max-w-full mq1050:h-auto mq450:gap-[21px] mq750:gap-[42px]">
          <div className="mt-[-427px] self-stretch flex flex-row items-start justify-start pt-0 pb-[282px] pr-0 pl-[13px] box-border max-w-full text-gray1-300 font-nunito">
            <div className="flex-1 flex flex-row items-end justify-between shrink-0 [debug_commit:1de1738] top-[0] z-[99] sticky max-w-full gap-[20px]">
              <img
                className="self-stretch w-[139px] relative max-h-full object-cover min-h-[60px]"
                alt=""
                src="/divlogo1@2x.png"
              />
              <div className="w-[1078px] rounded-21xl bg-www-equalopp-org-1349x593-default-nero flex flex-row items-start justify-start pt-[5px] pb-1 pr-11 pl-[45px] box-border gap-[29.2px] max-w-full lg:pl-[22px] lg:pr-[22px] lg:box-border">
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
                    <div className="flex-1 relative tracking-[0.16px] leading-[23px] shrink-0 [debug_commit:1de1738] whitespace-nowrap">
                      Key Initiatives
                    </div>
                    <div className="flex flex-col items-start justify-start pt-[5.2px] px-0 pb-0">
                      <img
                        className="w-[12.2px] h-3 relative overflow-hidden shrink-0 [debug_commit:1de1738]"
                        alt=""
                        src="/link1.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="h-[35px] flex-1 flex flex-col items-start justify-start pt-[13px] px-0 pb-0 box-border">
                  <div className="self-stretch flex-1 flex flex-row items-end justify-start gap-[4.6px]">
                    <div className="self-stretch flex-1 relative tracking-[0.16px] leading-[22.4px] flex items-center shrink-0 [debug_commit:1de1738] whitespace-nowrap">
                      Other Initiatives
                    </div>
                    <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[4.8px]">
                      <img
                        className="w-[12.2px] h-3 relative overflow-hidden shrink-0 [debug_commit:1de1738]"
                        alt=""
                        src="/link-11.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="h-[35px] w-[83.5px] flex flex-col items-start justify-start pt-[13px] px-0 pb-0 box-border">
                  <div className="self-stretch flex-1 flex flex-row items-end justify-start gap-[4.7px]">
                    <div className="self-stretch flex-1 relative tracking-[0.16px] leading-[22.4px] flex items-center shrink-0 [debug_commit:1de1738] whitespace-nowrap">{`Product `}</div>
                    <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[4.8px]">
                      <img
                        className="w-[12.2px] h-3 relative overflow-hidden shrink-0 [debug_commit:1de1738]"
                        alt=""
                        src="/link-21.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="h-[35px] w-[100.9px] flex flex-col items-start justify-start pt-[13px] px-0 pb-0 box-border lg:w-0">
                  <div className="self-stretch flex-1 flex flex-row items-start justify-start lg:hidden">
                    <div className="self-stretch flex-1 relative tracking-[0.16px] leading-[22.4px] flex items-center">
                      Actvities
                    </div>
                    <div className="self-stretch flex-1 relative tracking-[0.16px] leading-[22.4px] flex items-center z-[1] ml-[-100.9px]">
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
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start py-0 pr-[19px] pl-0 box-border gap-[87.1px] shrink-0 [debug_commit:1de1738] max-w-full text-29xl mq450:gap-[22px] mq750:gap-[44px]">
            <header className="w-[1283px] flex flex-row items-start justify-between py-0 pr-5 pl-0 box-border max-w-full gap-[20px] text-center text-sm text-gray1-100 font-h3 mq1050:flex-wrap">
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
                    onClick={onNavigationLinksDetailsClick}
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
            </header>
            <div className="self-stretch flex flex-row items-start justify-end max-w-full">
              <div className="w-[1331px] flex flex-col items-end justify-start gap-[56px] max-w-full mq750:gap-[28px]">
                <div className="w-[922px] flex flex-row items-start justify-between gap-[20px] max-w-full mq450:flex-wrap">
                  <div className="flex flex-col items-start justify-start pt-[47.9px] px-0 pb-0">
                    <h1 className="m-0 relative text-inherit leading-[58px] font-extrabold font-inherit inline-block min-w-[123px] mq1050:text-19xl mq1050:leading-[46px] mq450:text-10xl mq450:leading-[35px]">
                      Saudi
                    </h1>
                  </div>
                  <div className="w-[219px] flex flex-row items-start justify-start relative text-base">
                    <div className="absolute !m-[0] top-[-7.3px] left-[13px] tracking-[1.5px] leading-[18px] capitalize font-medium inline-block min-w-[127px] z-[2]">
                      Select Chapter
                    </div>
                    <div className="flex-1 rounded-8xs flex flex-row items-start justify-start py-[23px] px-[25px] gap-[31px] text-5xl border-[1px] border-solid border-black">
                      <div className="h-[65.9px] w-[219px] relative rounded-8xs box-border hidden border-[1px] border-solid border-black" />
                      <div className="w-[121px] relative tracking-[1.5px] leading-[18px] capitalize font-medium flex items-center shrink-0 z-[1] mq450:text-lgi mq450:leading-[14px]">
                        Saudi
                      </div>
                      <div className="flex flex-col items-start justify-start pt-[4.2px] px-0 pb-0">
                        <img
                          className="w-[9.8px] h-[3.9px] relative z-[1]"
                          alt=""
                          src="/dropdown-icon.svg"
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
                    src="/saudi-chapter-hero-image6@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start py-0 px-[29px] box-border max-w-full shrink-0 text-xl">
            <div className="w-[1038px] relative inline-block shrink-0 [debug_commit:1de1738] max-w-full max-h-[168px] [word-break:break-word] mq450:text-base">
              <p className="m-0">
                Chapter currently has 19 members and 10 prospective members in
                the Saudi chapter. 2021 AGB elected a coordination committee
                (CC) for conducting/ coordinating activities for the chapter. 
              </p>
              <p className="m-0">
                - The Saudi chapter conducted “Chithrarachanamatsaram2021”for
                children below 15 year of Darsana members.  Nine entries
                received in two sections below and above 10 years. Judging panel
                selected first, second and third prizes for each age group and
                prices were distributed in an online function. 
              </p>
              <p className="m-0">
                - Saudi chapter Member Shiju Paul worked in EYE magazine
                subcommittees. Require more members to volunteer for such
                activities
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-[1375px] flex flex-row items-start justify-center pt-0 px-5 pb-[70.6px] box-border max-w-full text-left text-xl text-black font-h3">
        <div className="w-[1199px] shadow-[0px_94px_200px_rgba(21,_21,_21,_0.15)] flex flex-row flex-wrap items-start justify-start relative gap-[38px] max-w-full shrink-0 mq750:gap-[19px]">
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
                <h1 className="m-0 self-stretch relative text-inherit leading-[42px] font-bold font-inherit mq1050:text-7xl mq1050:leading-[33px] mq450:text-lgi mq450:leading-[25px]">
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
                <h1 className="m-0 self-stretch relative text-inherit leading-[42px] font-bold font-inherit mq1050:text-7xl mq1050:leading-[33px] mq450:text-lgi mq450:leading-[25px]">
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
                <h1 className="m-0 self-stretch relative text-inherit leading-[42px] font-bold font-inherit mq1050:text-7xl mq1050:leading-[33px] mq450:text-lgi mq450:leading-[25px]">
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
      <div className="w-[129px] h-[16.5px] relative bg-www-equalopp-org-1349x593-default-nero hidden" />
      <section className="w-[1387px] bg-www-equalopp-org-1349x593-default-nero flex flex-row items-end justify-between pt-5 pb-6 pr-[29px] pl-0 box-border max-w-full gap-[20px] text-left text-base text-black font-h3 mq1050:flex-wrap mq1050:justify-center mq1050:pl-5 mq1050:pr-5 mq1050:box-border">
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
            Oman
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
    </div>
  );
};

export default SaudiChapters;
