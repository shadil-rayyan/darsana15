import { useRouter } from "next/router";
import SocialMediaIcons from "../components/SocialMediaIcons";

const Chapters1 = () => {
  const router = useRouter();

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

  const onCalicutOmanButtonClick = () => {
    router.push("/CalicutChapters");
  };

  const onChapterNorthAmericaClick = () => {
    router.push("/NorthAmericaChapters");
  };

  const onNavigationLinksClick = () => {
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

  return (
    <div className="w-full relative bg-www-equalopp-org-1349x593-default-nero overflow-hidden flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border gap-[49px] leading-[normal] tracking-[normal] text-center text-base text-black font-h3 mq450:gap-[20px] mq800:gap-[39px]">
      <div className="w-[129px] h-[16.5px] relative bg-www-equalopp-org-1349x593-default-nero hidden" />
      <div className="w-[209px] h-[269px] relative hidden">
        <div
          className="absolute top-[0px] left-[0px] w-[209px] h-11 cursor-pointer"
          onClick={onChapterPalkkadButtonClick}
        >
          <div className="absolute top-[0px] left-[0px] rounded-mini bg-www-equalopp-org-1349x593-default-nero w-full h-full" />
          <div className="absolute top-[0px] left-[44px] tracking-[1.5px] leading-[18px] capitalize font-medium flex items-center justify-center w-[113px] h-11">
            Palkkad
          </div>
        </div>
        <div
          className="absolute top-[45px] left-[0px] w-[209px] h-11 cursor-pointer"
          onClick={onChapterUaeButtonClick}
        >
          <div className="absolute top-[0px] left-[0px] rounded-mini bg-www-equalopp-org-1349x593-default-nero w-full h-full" />
          <div className="absolute top-[0px] left-[44px] tracking-[1.5px] leading-[18px] capitalize font-medium flex items-center justify-center w-[113px] h-11">
            UAE
          </div>
        </div>
        <div
          className="absolute top-[90px] left-[0px] w-[209px] h-11 cursor-pointer"
          onClick={onChapterSaudiButtonClick}
        >
          <div className="absolute top-[0px] left-[0px] rounded-mini bg-www-equalopp-org-1349x593-default-nero w-full h-full" />
          <div className="absolute top-[0px] left-[44px] tracking-[1.5px] leading-[18px] capitalize font-medium flex items-center justify-center w-[113px] h-11">
            Saudi
          </div>
        </div>
        <div
          className="absolute top-[135px] left-[0px] w-[209px] h-11 cursor-pointer"
          onClick={onChapterOmanButtonClick}
        >
          <div className="absolute top-[0px] left-[0px] rounded-mini bg-www-equalopp-org-1349x593-default-nero w-full h-full" />
          <div className="absolute top-[0px] left-[48px] tracking-[1.5px] leading-[18px] capitalize font-medium flex items-center justify-center w-[113px] h-11">
            Oman
          </div>
        </div>
        <div
          className="absolute top-[180px] left-[0px] w-full h-11 cursor-pointer"
          onClick={onCalicutOmanButtonClick}
        >
          <div className="absolute top-[0px] left-[0px] rounded-mini bg-www-equalopp-org-1349x593-default-nero w-full h-full" />
          <div className="absolute top-[0px] left-[0px] rounded-mini bg-www-equalopp-org-1349x593-default-nero w-full h-full" />
          <div className="absolute top-[0px] left-[27px] tracking-[1.5px] leading-[18px] capitalize font-medium flex items-center justify-center w-[155px] h-11">
            Calicut
          </div>
        </div>
        <div
          className="absolute top-[225px] left-[0px] w-full h-11 cursor-pointer"
          onClick={onChapterNorthAmericaClick}
        >
          <div className="absolute top-[0px] left-[0px] rounded-mini bg-www-equalopp-org-1349x593-default-nero w-full h-full" />
          <div className="absolute top-[0px] left-[0px] rounded-mini bg-www-equalopp-org-1349x593-default-nero w-full h-full" />
          <div className="absolute top-[0px] left-[46px] tracking-[1.5px] leading-[18px] capitalize font-medium flex items-center justify-center w-[155px] h-11">
            North America
          </div>
        </div>
      </div>
      <section className="self-stretch flex flex-row items-start justify-end pt-0 px-[60px] pb-[36.1px] box-border max-w-full mq800:pl-[30px] mq800:pr-[30px] mq800:box-border mq1350:pl-[23px] mq1350:pr-[23px] mq1350:box-border">
        <header className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] text-center text-sm text-gray1-100 font-h3">
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
                onClick={onNavigationLinksClick}
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
      </section>
      <main className="w-[1401px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <section className="w-[1373px] flex flex-col items-start justify-start py-0 pr-0 pl-5 box-border gap-[79px] max-w-full text-left text-5xl text-black font-h3 mq450:gap-[20px] mq800:gap-[26px]">
          <section className="w-[1020px] flex flex-row items-start justify-end pt-0 pb-[13px] pr-0 pl-3 box-border max-w-full text-left text-29xl text-black font-h3">
            <div className="w-[1308px] flex flex-col items-end justify-start gap-[53px] max-w-full mq800:gap-[16px] mq1350:gap-[33px]">
              <div className="w-[908px] flex flex-row items-start justify-between gap-[20px] max-w-full mq800:flex-wrap">
                <div className="flex flex-col items-start justify-start pt-[24.9px] px-0 pb-0">
                  <h1 className="m-0 relative text-inherit leading-[58px] font-extrabold font-inherit mq450:text-10xl mq450:leading-[35px] mq800:text-19xl mq800:leading-[46px]">
                    Bangalore
                  </h1>
                </div>
                <div className="w-[219px] flex flex-row items-start justify-start relative text-base">
                  <a className="[text-decoration:none] absolute !m-[0] top-[-7.3px] left-[13px] tracking-[1.5px] leading-[18px] capitalize font-medium text-[inherit] inline-block min-w-[127px] z-[2]">
                    Select Chapter
                  </a>
                  <div className="relative bg-[transparent] h-[65.9px] flex-1 rounded-8xs box-border flex flex-row items-start justify-start min-w-[131px] border-[1px] border-solid border-black">
                    <input
                      className="[outline:none] pt-[24.7px] pb-[23.2px] pr-[22.2px] pl-[25px] font-h3 font-medium text-5xl text-black [border:none] w-full h-full [background:transparent] ml-[9.8px]"
                      type="text"
                    />
                    <img
                      className="w-[9.8px] h-[6.3px] absolute z-[2] right-[22.199999999999818px] top-[29.899999999999636px]"
                      alt=""
                      src="/selection-icon.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start max-w-full">
                <img
                  className="w-[1050px] relative max-h-full object-cover max-w-full"
                  loading="lazy"
                  alt=""
                  src="/image-46@2x.png"
                />
              </div>
            </div>
          </section>
          <h2 className="m-0 w-[1308px] relative text-inherit font-normal font-inherit inline-block max-w-full max-h-[1816px] [word-break:break-word] mq450:text-lgi">
            <p className="m-0">
              Darsana Bangalore Chapter has 115 members. A large part of the
              chapter members are employed in the IT. A few of the initiatives
              that the Bangalore chapter has undertaken are:
            </p>
            <p className="m-0"> </p>
            <p className="m-0">
              Members from the Bangalore chapter played a key role in ensuring
              the success of IGNITE 2023. Actively involved 2024 program.
            </p>
            <p className="m-0"> </p>
            <p className="m-0">
              Darsana Fund collection: Bangalore chapter members contributed
              towards Darsana Fund. Fund collection for the current year is
              ongoing, and chapter members are actively contributing.
            </p>
            <p className="m-0"> </p>
            <p className="m-0">
              BCES (Biju Cherian Endowment Scholarship) Program: Bangalore
              Chapter supports the back-end activities for the selection of
              candidates. Activities supported include application form
              management, shortlisting, interview scheduling, etc.
            </p>
            <p className="m-0"> </p>
            <p className="m-0">
              Support To Society: With the objective of supporting the community
              we are in, a School at Kolar Gold Fields that requires our
              intervention was visited by Com. Arunan, Vineeth VS and Sathian in
              June 2022. This School has Pre-Primary, Primary and Secondary
              classes. The students are from poor backgrounds. They are the
              children of daily wagers of the area. The school is supported by
              the CPM for its operation. The number of teachers is less than the
              number of the classes/divisions. The salary for the teachers is
              very low and is not paid regularly. There is no support up to 7th
              standard from the government, and the school is managed with the
              meagre fees of Rs.200/ month received from students. Bangalore
              chapter started the support for the school in Nov-2022. Initially,
              we set up a library and sports equipment for the children. Major
              support provided on an ongoing basis is the salary for two
              teachers (12000/-), textbooks and notebooks for students during
              the start of the academic year, awards to students for sports and
              arts competitions, etc. Our team provides guidance on improving
              the quality of teaching as well. Also, with support from the US
              chapter, we are providing egg supplements to all primary school
              children. We have conducted three visits during the year to
              discuss the progress, conduct workshops and attend the award
              Ceremony.
            </p>
            <p className="m-0">
              For more information, read
              https://darsana.makanerp.com/activity_details/kolar-gold-fields-kgf
            </p>
            <p className="m-0"> </p>
            <p className="m-0">
              Darsana Website: The Bangalore chapter maintains the updates of
              the Darsana website.
            </p>
            <p className="m-0"> </p>
            <p className="m-0">
              Chapter Members meet: Chapter members met in November 2024 near
              Indiranagar. 15 people, including family members, joined. New year
              catch was organized at Cubbon Park and coffee at Koshy’s…14
              members joined.
            </p>
            <p className="m-0"> </p>
            <p className="m-0">
              Political Activism: Our members participate in major events
              conducted by the Bangalore secular forum. In the past, we have
              organized programs like anti-CAA protest seminars etc.
            </p>
            <p className="m-0"> </p>
            <p className="m-0">Programs conducted in the previous years</p>
            <p className="m-0">Fun Events: </p>
            <p className="m-0">
              Chess Tournament conducted in Jul- 2023: More than 40 Darsana
              members and family participated. Babu George (1989 batch) won the
              1st prize. Fahad (son of Latheef 1991) secured second place, and
              Sooryakiran (2021 batch) secured third place.
            </p>
            <p className="m-0">
              Euro Cup prediction Contest: The prediction contest winners were:
              Deego and Sathian.
            </p>
            <p className="m-0">
              Caption Contest: “AdikkurippuMalsaram” was conducted among chapter
              members on 17th November 2021. The Winners were Asif Ramthan and
              Biju K.
            </p>
            <p className="m-0">
              Com. Vineeth PS and Com. Jeeson organised the contest.
            </p>
            <p className="m-0">
              Film-Based Fun Quiz: A filmi fun quiz, “70 MM Cinema Pranth Quiz''
              was Organized for the whole Darsana family. There was an
              encouraging response to the program. It was hosted by Sindhu P R
              and organized with the support of Comrades Vineeth P S and Jeeson.
              The Winners were Kiran (Palakkad Chapter 2009), Sudhish( Bangalore
              Chapter – 2002), Deego ( Bangalore Chapter – 2010)
            </p>
            <p className="m-0">
              Darsana Job Portal: The main objective of the portal is to help
              Darsana members to find a job or to move to better roles and jobs.
              The portal provides a single platform to pool all the job
              requirements known to Darsana members across the globe. Com.
              Krishnakumar inaugurated the job portal on 8th January 2022. It
              was well received initially, and our members have put up several
              job openings. Gradually, the use of the portal showed a downtrend.
              In the coming year, we must brainstorm and take corrective actions
              to re-energise the platform. The job portal was designed and
              realized under the leadership of Com. Ajith Prasad, Com. Jose
              Varghese and Com. Arjun K P
            </p>
            <p className="m-0">
              Career Explorer Talk: An online expert panel discussion was
              conducted to guide engineering students in choosing their career
              paths after completing their Degrees. This was open to all
              Engineering students across Kerala. It was planned as a series of
              sessions to cover all the engineering branches. The first in this
              series, “Career Paths in IT”, was conducted on 22 Jan 2022. The
              Panelists were Com. Mukundan Annamalai, Com. ArunanThayyil and
              Com. Dinesh I. The other sessions planned in the series were put
              on hold as the student crowd's participation was not as high as
              expected. An analysis following the first session indicated that
              student communities, in general, are not giving priority to such
              webinars.
            </p>
            <p className="m-0">
              Com. Mukundan Annamalai conducted two talks with the students on
              the NSSCE campus. The students received these talks well.
            </p>
            <p className="m-0"> </p>
            <p className="m-0">
              The talks were: “Future of Information Technology” on 27th Oct
              2021 and “A Typical Day in a Large IT Organization” on 26th Nov
              2021
            </p>
          </h2>
          <SocialMediaIcons />
          <div className="flex flex-row items-start justify-center py-0 pr-5 pl-[61px] box-border max-w-full text-13xl mq1125:pl-[30px] mq1125:box-border">
            <div className="w-[996px] flex flex-row flex-wrap items-start justify-start gap-[48px] max-w-full mq800:gap-[24px]">
              <div className="flex-1 flex flex-col items-start justify-start gap-[24px] min-w-[225px]">
                <img
                  className="w-12 h-12 relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/icon--email.svg"
                />
                <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
                  <div className="self-stretch flex flex-row items-start justify-start gap-[16px]">
                    <h1 className="m-0 flex-1 relative text-inherit leading-[42px] font-bold font-inherit mq450:text-lgi mq450:leading-[25px] mq800:text-7xl mq800:leading-[33px]">
                      Email
                    </h1>
                    <div className="self-stretch flex-1 relative text-base leading-[150%] hidden max-w-full">
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
            </div>
          </div>
        </section>
      </main>
      <footer className="w-[1381px] bg-www-equalopp-org-1349x593-default-nero flex flex-row items-end justify-start pt-5 pb-6 pr-[29.5px] pl-[396px] box-border gap-[199px] max-w-full text-left text-base text-black font-h3 mq450:gap-[25px] mq450:pl-5 mq450:box-border mq800:gap-[50px] mq800:pl-[99px] mq800:box-border mq1350:flex-wrap mq1350:gap-[99px] mq1350:justify-center mq1350:pl-[198px] mq1350:box-border">
        <footer className="h-[88px] w-[1387px] relative bg-www-equalopp-org-1349x593-default-nero hidden max-w-full" />
        <div className="ml-[-402px] h-11 w-[203px] flex flex-col items-start justify-start shrink-0">
          <div className="w-[138.5px] h-11 relative z-[1] flex items-center justify-center">
            <img
              className="w-full h-full z-[1] object-contain absolute left-[4px] top-[0px] [transform:scale(1.364)]"
              loading="lazy"
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
        <div className="w-[1357px] flex flex-col items-start justify-end pt-0 pb-2.5 pr-[47px] pl-0 box-border shrink-0 max-w-full mq1350:pl-[23px] mq1350:pr-[23px] mq1350:box-border">
          <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
            <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
              <img
                className="w-[13.1px] h-[22px] relative z-[1]"
                alt=""
                src="/social.svg"
              />
            </div>
            <div className="w-[] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border max-w-full shrink-0">
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
            <div className="w-[] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border shrink-0">
              <img
                className="w-[25.1px] h-[22px] relative object-cover z-[1]"
                alt=""
                src="/social-32@2x.png"
              />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Chapters1;
