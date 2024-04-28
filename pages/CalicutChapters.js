import { Autocomplete, TextField } from "@mui/material";
import { useRouter } from "next/router";

const CalicutChapters = () => {
  const router = useRouter();

  const onNavigationItemsClick = () => {
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
    <div className="w-full relative bg-www-equalopp-org-1349x593-default-nero overflow-hidden flex flex-col items-end justify-start pt-0.5 pb-[5px] pr-11 pl-1.5 box-border gap-[78px] leading-[normal] tracking-[normal] text-center text-base text-black font-h3 mq450:gap-[19px] mq750:gap-[39px] mq750:pr-[22px] mq750:box-border">
      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-[41px] pb-[19px] box-border max-w-full">
        <header className="w-[1263px] flex flex-row items-start justify-between gap-[20px] max-w-full text-center text-sm text-gray1-100 font-h3">
          <div className="h-20 w-[220px] relative overflow-hidden shrink-0">
            <img
              className="absolute h-[calc(100%_-_16px)] top-[8px] bottom-[8px] left-[18px] max-h-full w-[164.4px] object-cover"
              loading="lazy"
              alt=""
              src="/image-32@2x.png"
            />
          </div>
          <div className="flex flex-col items-start justify-start pt-5 px-0 pb-0 box-border max-w-full">
            <div className="flex flex-row items-start justify-start">
              <button
                className="cursor-pointer [border:none] pt-2.5 px-4 pb-2 bg-[transparent] rounded-sm flex flex-row items-start justify-start border-b-[1px] border-solid border-skyblue hover:bg-deepskyblue-400"
                onClick={onNavigationItemsClick}
              >
                <div className="relative text-sm font-medium font-h3 text-black text-center inline-block min-w-[38px]">
                  Home
                </div>
              </button>
              <div className="rounded-sm flex flex-row items-start justify-start py-2.5 px-4 z-[1]">
                <div className="relative font-medium inline-block min-w-[58px] whitespace-nowrap">
                  About Us
                </div>
              </div>
              <div className="rounded-sm flex flex-row items-start justify-start py-2.5 px-4 gap-[8px] z-[2]">
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
              <div className="rounded-sm flex flex-row items-start justify-start py-2.5 px-4 gap-[8px] z-[3]">
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
              <div className="relative text-lg font-medium font-h3 text-www-equalopp-org-1349x593-default-nero text-center inline-block min-w-[56px] whitespace-nowrap">
                Sign In
              </div>
            </button>
          </div>
        </header>
      </div>
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
          onClick={onChapterNorthAmericaClick}
        >
          <div className="absolute top-[0px] left-[0px] rounded-mini bg-www-equalopp-org-1349x593-default-nero w-full h-full" />
          <div className="absolute top-[0px] left-[0px] rounded-mini bg-www-equalopp-org-1349x593-default-nero w-full h-full" />
          <div className="absolute top-[0px] left-[46px] tracking-[1.5px] leading-[18px] capitalize font-medium flex items-center justify-center w-[155px] h-11">
            North America
          </div>
        </div>
      </div>
      <main className="w-[1366px] flex flex-col items-start justify-start pt-0 pb-[57.6px] pr-0 pl-5 box-border gap-[84px] max-w-full text-left text-29xl text-black font-h3 lg:pb-[37px] lg:box-border mq1050:pb-6 mq1050:box-border mq450:gap-[21px] mq750:gap-[42px] mq750:pb-5 mq750:box-border">
        <div className="self-stretch flex flex-row items-start justify-end py-0 px-px box-border max-w-full">
          <div className="w-[1305px] flex flex-col items-end justify-start gap-[56px] max-w-full mq750:gap-[28px]">
            <div className="w-[896px] flex flex-row items-start justify-between gap-[20px] max-w-full mq450:flex-wrap">
              <div className="flex flex-col items-start justify-start pt-[38px] px-0 pb-0">
                <h1 className="m-0 relative text-inherit leading-[120%] font-extrabold font-inherit mq1050:text-19xl mq1050:leading-[46px] mq450:text-10xl mq450:leading-[35px]">
                  <p className="m-0">Calicut</p>
                </h1>
              </div>
              <Autocomplete
                className="w-[219px]"
                sx={{ width: 219 }}
                disablePortal
                options={[
                  "North america",
                  "Oman",
                  "Saudi",
                  "uae",
                  "bangalore",
                  "palkkad",
                  "",
                ]}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    color="primary"
                    label=""
                    variant="standard"
                    placeholder=""
                    helperText=""
                  />
                )}
              />
            </div>
            <div className="self-stretch flex flex-row items-start justify-start max-w-full">
              <img
                className="w-[1050px] relative max-h-full object-cover max-w-full"
                loading="lazy"
                alt=""
                src="/palkkad-chapter-hero-image@2x.png"
              />
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[9px] box-border max-w-full text-5xl">
          <h3 className="m-0 flex-1 relative text-inherit font-normal font-inherit inline-block max-w-full mq450:text-lgi">
            <p className="m-0">
              The Darsana Calicut chapter has more than 100 members. Calicut
              chapter has taken up a few key initiatives and driven them to
              success.
            </p>
            <p className="m-0">A few of them are:</p>
            <p className="m-0">
              Electronic Hardware Literacy Program at Gov.High School
              Nadakkaav: It is a program conceptualized by Darsana as a part of
              the PRISM program in the school and driving in collaboration with
              the students of IEEE chapter GEC Calicut to encourage electronic
              hardware literacy knowledge in high school students of Nadakkaav
              school.
            </p>
            <p className="m-0">
              Atal tinkering lab training: ATAL tinkering lab is a
              government-funded program that nurtures innovation skills in
              school kids. Calicut chapter trained students of Gov. Ganapt High
              School, Feroke. Collaborated with Farooq College faculty for this.
              Planning to extend to other schools.
            </p>
            <p className="m-0">
              Adivaram House completion and handing over: As part of the Darsana
              My Home project, the ninth house was constructed for Kizhakkeyil
              Aminathatha at Adivaram, Kozhikode. The house was constructed by
              the Darsana team with the financial support of KCSMW (Kerala
              Cultural Society of Metropolitan Washington DC). Com Rahul GK, a
              Darsana Kozhikode chapter Member, did the construction. Babeesh,
              Aneesh and Gireesh monitored the project. With the involvement of
              CC, the construction was completed in October 2021, and the
              handing-over program was conducted on 24.10.21. Sri Linto Joseph,
              Hon’ble MLA, Thiruvambadi LAC, handed the key to Aminathatha.  Adv
              Aishakkutty Sulthan, President, President, Puthuppadi Grama
              Panchayath, presided over the program.  Sri Anilkumar, KCS
              President and SmtBeenaTomy, President of KCS Women’s wing, joined
              the program online and conveyed their message. Many people's
              representatives, political representatives, Darsana members, KCS
              representatives and the public participated in the program.
            </p>
            <p className="m-0">
              Student support program GEC Westhill: The Kozhikode chapter
              decided to extend support to weaker sections of Engineering
              students in GEC, Westhill, to help them complete and pass the
              course. As a part of this program, a full-day workshop was
              conducted on 28.11.21 in an online platform for mentors. Dr
              BaijuSasidharan, Professor, CET, Sri Sasi, Professor, CET, Sri
              Manoj, Professor, RIT, led the classes and shared their
              experiences conducting similar programs at their institutions.
              About 60 people participated in the two sessions.
            </p>
            <p className="m-0">
              Student support program at Mooppans tribal colony Kalpetta: To
              ensure the participation of children of tribal sections in
              Wayanad, a pilot program was planned along with the local SFI
              team. A study centre was set up at the colony by modifying a
              temporary shed, and new benches, desks, tables, etc, have been
              provided. Additional coaching classes were conducted at this
              centre for 10th-grade students in the colony.  The program was
              started on 3.1.2022 and had enthusiastic participation from the
              children from the colony. 16 students from the colony attended the
              SSLC exams and successfully cleared it.
            </p>
            <p className="m-0"> </p>
          </h3>
        </div>
        <div className="w-[1335px] flex flex-row items-start justify-start py-0 px-[68px] box-border max-w-full text-xl lg:pl-[34px] lg:pr-[34px] lg:box-border">
          <div className="flex-1 shadow-[0px_94px_200px_rgba(21,_21,_21,_0.15)] flex flex-row flex-wrap items-start justify-start relative gap-[38px] max-w-full mq750:gap-[19px]">
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
            <img
              className="h-[75.8px] w-[75.8px] absolute !m-[0] top-[-38px] left-[25px] object-cover z-[1]"
              loading="lazy"
              alt=""
              src="/profile@2x.png"
            />
            <img
              className="h-[75.8px] w-[75.8px] absolute !m-[0] top-[-36px] left-[437px] object-cover z-[1]"
              alt=""
              src="/profile@2x.png"
            />
            <img
              className="h-[75.8px] w-[75.8px] absolute !m-[0] top-[-36px] right-[251.2px] object-cover z-[1]"
              alt=""
              src="/profile@2x.png"
            />
          </div>
        </div>
      </main>
      <div className="w-[1312px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-13xl">
        <div className="w-[996px] flex flex-row flex-wrap items-center justify-start gap-[48px] max-w-full mq750:gap-[24px]">
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
      </div>
      <footer className="self-stretch flex flex-row items-start justify-end py-0 pr-[3px] pl-0 box-border max-w-full">
        <div className="flex-1 bg-www-equalopp-org-1349x593-default-nero flex flex-row items-end justify-between pt-5 pb-6 pr-[29px] pl-0 box-border max-w-full gap-[20px] lg:flex-wrap lg:justify-center lg:pl-5 lg:pr-5 lg:box-border">
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
          <section className="w-[582.5px] flex flex-col items-start justify-end pt-0 px-0 pb-2.5 box-border max-w-full text-left text-base text-black font-h3">
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
          </section>
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
              <section className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                <img
                  className="w-[25.1px] h-[22px] relative object-cover z-[1]"
                  alt=""
                  src="/social-32@2x.png"
                />
              </section>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CalicutChapters;
