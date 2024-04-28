import ContentWrapper from "../components/ContentWrapper";
import { useRouter } from "next/router";

const NorthAmericaChapters = () => {
  const router = useRouter();

  const onNavigationAndFeatureLinksClick = () => {
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

  const onChapterOmanButtonClick = () => {
    router.push("/OmanChapters");
  };

  const onChapterOmanButton1Click = () => {
    router.push("/CalicutChapters");
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
    <div className="w-full h-[2490px] relative bg-www-equalopp-org-1349x593-default-nero overflow-hidden flex flex-col items-start justify-start pt-0.5 px-0 pb-[45px] box-border gap-[63px] leading-[normal] tracking-[normal] text-center text-base text-black font-h3 mq450:gap-[16px] mq800:gap-[31px] mq1125:h-auto">
      <section className="mt-[-293px] self-stretch flex flex-row items-start justify-end pt-0 px-0 pb-[170px] box-border max-w-full">
        <ContentWrapper />
      </section>
      <section className="self-stretch flex flex-row items-start justify-start pt-0 pb-[57px] pr-11 pl-[47px] box-border max-w-full text-left text-29xl text-black font-h3 mq800:pl-[23px] mq800:pr-[22px] mq800:pb-6 mq800:box-border mq1125:pb-[37px] mq1125:box-border">
        <div className="flex-1 flex flex-col items-start justify-start gap-[98.1px] max-w-full mq450:gap-[25px] mq800:gap-[49px]">
          <header className="w-[1263px] flex flex-row items-start justify-between max-w-full gap-[20px] text-center text-sm text-gray1-100 font-h3 mq1125:flex-wrap">
            <div className="h-20 w-[220px] relative overflow-hidden shrink-0">
              <img
                className="absolute h-[calc(100%_-_16px)] top-[8px] bottom-[8px] left-[18px] max-h-full w-[164.4px] object-contain"
                loading="lazy"
                alt=""
                src="/image-32@2x.png"
              />
            </div>
            <div className="flex flex-col items-start justify-start pt-5 px-0 pb-0 box-border max-w-full">
              <div className="flex flex-row items-start justify-start [row-gap:20px] mq800:flex-wrap">
                <button
                  className="cursor-pointer [border:none] pt-2.5 px-4 pb-2 bg-[transparent] rounded-sm flex flex-row items-start justify-start border-b-[1px] border-solid border-skyblue hover:bg-deepskyblue-400"
                  onClick={onNavigationAndFeatureLinksClick}
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
            <div className="w-[1306px] flex flex-col items-end justify-start gap-[56px] max-w-full mq800:gap-[28px]">
              <div className="w-[897px] flex flex-row items-start justify-between gap-[20px] max-w-full mq800:flex-wrap">
                <div className="flex flex-col items-start justify-start pt-[36.9px] px-0 pb-0">
                  <h1 className="m-0 relative text-inherit leading-[58px] font-extrabold font-inherit mq450:text-10xl mq450:leading-[35px] mq800:text-19xl mq800:leading-[46px]">
                    North America
                  </h1>
                </div>
                <div className="w-[219px] flex flex-row items-start justify-start relative text-base">
                  <div className="absolute !m-[0] top-[-7.3px] left-[13px] tracking-[1.5px] leading-[18px] capitalize font-medium inline-block min-w-[127px] z-[2]">
                    Select Chapter
                  </div>
                  <div className="flex-1 rounded-8xs flex flex-row items-start justify-start py-[23px] px-[11px] gap-[22px] border-[1px] border-solid border-black">
                    <div className="h-[65.9px] w-[219px] relative rounded-8xs box-border hidden border-[1px] border-solid border-black" />
                    <div className="w-[145px] relative tracking-[1.5px] leading-[18px] capitalize font-medium flex items-center shrink-0 z-[1]">
                      North America
                    </div>
                    <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                      <img
                        className="w-[9.8px] h-[4.3px] relative z-[1]"
                        alt=""
                        src="/dropdown-icon1.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start max-w-full">
                <img
                  className="w-[1050px] relative max-h-full object-cover max-w-full"
                  alt=""
                  src="/north-america-chapter-hero-image@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="w-[129px] h-[16.5px] relative bg-www-equalopp-org-1349x593-default-nero hidden" />
      <div className="w-[209px] h-[264px] relative hidden">
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
          className="absolute top-[176px] left-[0px] w-[209px] h-11 cursor-pointer"
          onClick={onChapterOmanButtonClick}
        >
          <div className="absolute top-[0px] left-[0px] rounded-mini bg-www-equalopp-org-1349x593-default-nero w-full h-full" />
          <div className="absolute top-[0px] left-[48px] tracking-[1.5px] leading-[18px] capitalize font-medium flex items-center justify-center w-[113px] h-11">
            Oman
          </div>
        </div>
        <div
          className="absolute top-[220px] left-[0px] w-full h-11 cursor-pointer"
          onClick={onChapterOmanButton1Click}
        >
          <div className="absolute top-[0px] left-[0px] rounded-mini bg-www-equalopp-org-1349x593-default-nero w-full h-full" />
          <div className="absolute top-[0px] left-[0px] rounded-mini bg-www-equalopp-org-1349x593-default-nero w-full h-full" />
          <div className="absolute top-[0px] left-[27px] tracking-[1.5px] leading-[18px] capitalize font-medium flex items-center justify-center w-[155px] h-11">
            Calicut
          </div>
        </div>
      </div>
      <section className="w-[1236px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full shrink-0">
        <section className="w-[1038px] relative text-xl font-h3 text-black text-left inline-block shrink-0 max-w-full mq450:text-base">
          <p className="m-0">
            Darsana North America is one of our youngest chapters, with 29
            members from the USA and three from Canada. According to Darsana's
            executive committee guidance, various efforts have been undertaken
            to identify more members from the North American region and bring
            them to leadership.
          </p>
          <p className="m-0">
            One of the flagship Programs of the Darsana US chapter is to
            collaborate with the Indian community in the US/Canada to fund house
            construction projects for the marginalized community. Last year, we
            successfully collaborated with the Kerala Cultural Society of
            Metropolitan Washington to support the cost of constructing a house
            for a differently-abled person in Mannar, Alappuzha. The entire
            project was designed, coordinated, and executed with the help of the
            Darsana Calicut Chapter. We have handed over the key to the
            beneficiary in a small function organized by the Kochin chapter
            presided over by Honorable Minister Com: Saji Cherian. 
          </p>
          <p className="m-0">
            US chapter members have volunteered on our digital platform. Unlike
            other countries, only a few Indian-affiliated left progressive
            organizations in the North American region, making it difficult for
            Darsana to have a deeper ideological collaboration and cooperation.
            However, we have identified a few organizations with which we can
            have better affiliations and organize collaborative programs, like
            Art Lovers of America. Darsana US chapter is actively working to
            collaborate better with ALA and similar organizations.
          </p>
          <p className="m-0">
            However, the Darsana NA chapter also finds it relevant to work with
            a non-political cultural organization like the Kerala Association in
            North America, like FOKANA and FOMAA, to partner for their charity,
            Educational, and volunteer programs. Additionally, two Darsana
            members from the US attended the Loka Kerala Sabha regional
            conference in New York last year, where they actively participated
            in discussions and networking opportunities to further Darsana's
            goals and initiatives in the North American region. 
          </p>
          <p className="m-0">
            In addition to the ongoing collaborations with Indian community
            organizations, the Darsana US chapter collaborates with the
            Bangalore chapter to provide nutritious food for children in Kolar
            Gold Field School. This initiative addresses nutrition deficiency
            among children in the KGF schools and promotes their overall
            well-being.
          </p>
          <p className="m-0"> </p>
        </section>
      </section>
      <section className="w-[1337px] flex flex-row items-start justify-start pt-0 px-[69px] pb-[57px] box-border max-w-full shrink-0 text-left text-xl text-black font-h3 mq800:pb-[37px] mq800:box-border mq1350:pl-[34px] mq1350:pr-[34px] mq1350:box-border">
        <div className="flex-1 flex flex-col items-start justify-start gap-[92.6px] max-w-full mq800:gap-[23px] mq1350:gap-[46px]">
          <div className="self-stretch shadow-[0px_94px_200px_rgba(21,_21,_21,_0.15)] flex flex-row flex-wrap items-start justify-start relative gap-[38px] max-w-full mq800:gap-[19px]">
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
          <div className="w-[1092px] flex flex-row items-start justify-start py-0 px-12 box-border max-w-full mq1125:pl-6 mq1125:pr-6 mq1125:box-border">
            <section className="flex-1 flex flex-row flex-wrap items-center justify-start gap-[48px] max-w-full text-left text-13xl text-black font-h3 mq800:gap-[24px]">
              <div className="flex-1 flex flex-col items-start justify-start gap-[24px] min-w-[225px]">
                <img
                  className="w-12 h-12 relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/icon--email.svg"
                />
                <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
                    <h1 className="m-0 self-stretch relative text-inherit leading-[42px] font-bold font-inherit mq450:text-lgi mq450:leading-[25px] mq800:text-7xl mq800:leading-[33px]">
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
                    <h1 className="m-0 self-stretch relative text-inherit leading-[42px] font-bold font-inherit mq450:text-lgi mq450:leading-[25px] mq800:text-7xl mq800:leading-[33px]">
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
                    <h1 className="m-0 self-stretch relative text-inherit leading-[42px] font-bold font-inherit mq450:text-lgi mq450:leading-[25px] mq800:text-7xl mq800:leading-[33px]">
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
            </section>
          </div>
        </div>
      </section>
      <section className="w-[1379px] bg-www-equalopp-org-1349x593-default-nero flex flex-row items-end justify-start pt-5 pb-6 pr-[29.5px] pl-[394px] box-border gap-[199px] max-w-full text-left text-base text-black font-h3 mq450:gap-[25px] mq450:pl-5 mq450:box-border mq800:gap-[50px] mq800:pl-[98px] mq800:box-border mq1350:flex-wrap mq1350:gap-[99px] mq1350:pl-[197px] mq1350:box-border">
        <footer className="h-[88px] w-[1387px] relative bg-www-equalopp-org-1349x593-default-nero hidden max-w-full" />
        <div className="ml-[-402px] h-11 w-[203px] flex flex-col items-start justify-start shrink-0">
          <div className="w-[138.5px] h-11 relative z-[1] flex items-center justify-center">
            <img
              className="w-full h-full z-[1] object-contain absolute left-[4px] top-[0px] [transform:scale(1.364)]"
              alt=""
              src="/divlogo@2x.png"
            />
          </div>
        </div>
        <div className="w-[582.5px] flex flex-col items-start justify-end pt-0 px-0 pb-2.5 box-border max-w-full shrink-0">
          <div className="self-stretch flex flex-row items-start justify-between gap-[20px] z-[1] mq800:flex-wrap">
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
        <div className="w-[174px] flex flex-col items-start justify-end pt-0 px-0 pb-2.5 box-border shrink-0">
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

export default NorthAmericaChapters;
