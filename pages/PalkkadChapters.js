import { useRouter } from "next/router";

const PalkkadChapters = () => {
  const router = useRouter();

  const onChapterBangaloreButtonClick = () => {
    router.push("/BangaloreChapters");
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

  const onCalicutOmanButton2Click = () => {
    router.push("/CalicutChapters");
  };

  const onNavigationItemsClick = () => {
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
    <div className="w-full relative bg-www-equalopp-org-1349x593-default-nero overflow-hidden flex flex-col items-end justify-start pt-0.5 pb-[30px] pr-11 pl-0 box-border gap-[84px] leading-[normal] tracking-[normal] text-center text-base text-black font-h3 mq450:gap-[18px] mq825:gap-[42px] mq825:pr-[22px] mq825:box-border mq750:gap-[36px]">
      <div className="w-[129px] h-[16.5px] relative bg-www-equalopp-org-1349x593-default-nero hidden" />
      <div className="w-[209px] h-[265px] hidden flex-col items-start justify-start gap-[2px]">
        <div
          className="self-stretch h-11 relative cursor-pointer"
          onClick={onChapterBangaloreButtonClick}
        >
          <div className="absolute top-[0px] left-[0px] rounded-mini bg-www-equalopp-org-1349x593-default-nero w-full h-full" />
          <div className="absolute top-[0px] left-[58px] tracking-[1.5px] leading-[18px] capitalize font-medium flex items-center justify-center w-[113px] h-11">
            Bangalore
          </div>
        </div>
        <div
          className="self-stretch h-11 relative cursor-pointer"
          onClick={onChapterUaeButtonClick}
        >
          <div className="absolute top-[0px] left-[0px] rounded-mini bg-www-equalopp-org-1349x593-default-nero w-full h-full" />
          <div className="absolute top-[0px] left-[44px] tracking-[1.5px] leading-[18px] capitalize font-medium flex items-center justify-center w-[113px] h-11">
            UAE
          </div>
        </div>
        <div
          className="self-stretch h-11 relative cursor-pointer"
          onClick={onChapterSaudiButtonClick}
        >
          <div className="absolute top-[0px] left-[0px] rounded-mini bg-www-equalopp-org-1349x593-default-nero w-full h-full" />
          <div className="absolute top-[0px] left-[44px] tracking-[1.5px] leading-[18px] capitalize font-medium flex items-center justify-center w-[113px] h-11">
            Saudi
          </div>
        </div>
        <div
          className="self-stretch h-11 relative cursor-pointer"
          onClick={onChapterOmanButtonClick}
        >
          <div className="absolute top-[0px] left-[0px] rounded-mini bg-www-equalopp-org-1349x593-default-nero w-full h-full" />
          <div className="absolute top-[0px] left-[48px] tracking-[1.5px] leading-[18px] capitalize font-medium flex items-center justify-center w-[113px] h-11">
            Oman
          </div>
          <div
            className="absolute top-[40px] left-[0px] w-full h-full cursor-pointer"
            onClick={onCalicutOmanButtonClick}
          >
            <div className="absolute top-[0px] left-[0px] rounded-mini bg-www-equalopp-org-1349x593-default-nero w-full h-full" />
            <div className="absolute top-[0px] left-[0px] rounded-mini bg-www-equalopp-org-1349x593-default-nero w-full h-full" />
            <div className="absolute top-[0px] left-[27px] tracking-[1.5px] leading-[18px] capitalize font-medium flex items-center justify-center w-[155px] h-11">
              Calicut
            </div>
          </div>
        </div>
        <div
          className="self-stretch h-11 relative cursor-pointer"
          onClick={onChapterNorthAmericaClick}
        >
          <div className="absolute top-[0px] left-[0px] rounded-mini bg-www-equalopp-org-1349x593-default-nero w-full h-full" />
          <div className="absolute top-[0px] left-[0px] rounded-mini bg-www-equalopp-org-1349x593-default-nero w-full h-full" />
          <div className="absolute top-[0px] left-[46px] tracking-[1.5px] leading-[18px] capitalize font-medium flex items-center justify-center w-[155px] h-11">
            North America
          </div>
        </div>
        <div
          className="self-stretch h-11 relative cursor-pointer"
          onClick={onCalicutOmanButton2Click}
        >
          <div className="absolute top-[0px] left-[0px] rounded-mini bg-www-equalopp-org-1349x593-default-nero w-full h-full" />
          <div className="absolute top-[0px] left-[0px] rounded-mini bg-www-equalopp-org-1349x593-default-nero w-full h-full" />
          <div className="absolute top-[0px] left-[27px] tracking-[1.5px] leading-[18px] capitalize font-medium flex items-center justify-center w-[155px] h-11">
            Calicut
          </div>
        </div>
      </div>
      <section className="self-stretch flex flex-row items-start justify-center pt-0 pb-[14.1px] pr-5 pl-[37px] box-border max-w-full mq1400:pl-[23px] mq1400:pr-[23px] mq1400:box-border mq750:pb-[58px] mq750:box-border">
        <header className="flex-1 flex flex-row items-start justify-between gap-[20px] max-w-full text-center text-sm text-gray1-100 font-h3">
          <div className="h-20 w-[220px] relative overflow-hidden shrink-0">
            <img
              className="absolute h-[calc(100%_-_16px)] top-[8px] bottom-[8px] left-[18px] max-h-full w-[164.4px] object-contain"
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
      </section>
      <section className="w-[] flex flex-col items-start justify-start gap-[29px] max-w-full mq750:gap-[25px]">
        <section className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[499px] box-border gap-[504px] max-w-full text-left text-29xl text-black font-h3 mq450:gap-[63px] mq450:pl-5 mq450:box-border mq825:gap-[126px] mq825:pl-[124px] mq825:box-border mq1400:flex-wrap mq1400:gap-[252px] mq1400:pl-[249px] mq1400:box-border">
          <div className="ml-[-915px] w-[411px] flex flex-col items-start justify-start pt-[81.9px] px-0 pb-0 box-border max-w-full shrink-0">
            <div className="w-[196px] h-10 relative bg-gainsboro-200" />
          </div>
          <div className="flex flex-col items-start justify-start pt-[36.9px] px-0 pb-0">
            <h1 className="m-0 relative text-inherit leading-[58px] font-extrabold font-inherit mq1050:text-19xl mq1050:leading-[46px] mq450:text-10xl mq450:leading-[35px] mq825:text-19xl mq825:leading-[46px]">{`Palkkad `}</h1>
          </div>
          <div className="w-[219px] flex flex-row items-start justify-start relative shrink-0">
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute !m-[0] top-[-7.3px] left-[13px] text-base tracking-[1.5px] leading-[18px] capitalize font-medium font-h3 text-black text-left inline-block min-w-[127px] z-[2]">
              Select Chapter
            </button>
            <select className="h-[] flex-1 rounded-8xs bg-[transparent] box-border flex flex-row items-end justify-start py-[23px] px-[25px] font-h3 font-medium text-5xl text-black border-[1px] border-solid border-black" />
          </div>
        </section>
        <section className="w-[1230px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <img
            className="w-[1050px] relative max-h-full object-cover max-w-full"
            loading="lazy"
            alt=""
            src="/palkkad-chapter-hero-image@2x.png"
          />
        </section>
      </section>
      <section className="w-[1366px] flex flex-col items-start justify-start pt-0 pb-[78px] pr-0 pl-5 box-border gap-[72px] max-w-full text-left text-5xl text-black font-h3 lg:pb-[33px] lg:box-border mq450:gap-[18px] mq825:gap-[36px] mq825:pb-[21px] mq825:box-border mq1400:pb-[51px] mq1400:box-border">
        <h2 className="m-0 self-stretch relative text-inherit font-normal font-inherit inline-block max-w-full mq450:text-lgi">
          <p className="m-0">
            Palakkad chapter plays an active role in the planning, organization,
            campaigning, and execution of many programs of Darsana. The chapter
            has a 16-member coordination committee and regular online CC
            meetings are happening. The specific programs for which Palakkad
            chapter had a major role to play in the last year are listed below. 
          </p>
          <p className="m-0">1.      IGNITE 2023</p>
          <p className="m-0">
            The Ignite project aims to create an ecosystem available to
            students, technologists, or anyone with a creative mind, to
            experiment, create, revise, and evolve along with our panel of
            technical experts and mentors. As part of this initiative, we have
            set up a platform called IGNITE, consisting of a web portal
            (www.ignite.darsana.in) as a medium of exchange and a team of
            academicians, senior professionals from various engineering streams,
            and experienced business owners to nurture the dream ideas into
            reality. Through the annual ‘IGNITE Innovation and Entrepreneurship
            Challenge’, we introduced this platform to the educational
            institutions in Kerala. The finale of this year’s edition was on 12
            August 2023, at Govt. Polytechnic College, Palakkad. The chapter has
            been able to ensure active participation of its members in the
            successful running of the program. Our members are present in the
            leadership roles of the program as well.
          </p>
          <p className="m-0">1.1  MoU signing with KSUM</p>
          <p className="m-0">
            In a full day event held at Palakkad on 17 February 2023, various
            discussions were conducted to discuss and deliberate about the ways
            to tap the entrepreneurial potential of Malabar region in Kerala.
            The function was attended by eminent business stakeholders of
            Palakkad. Our members, Anirudhan, Vinod, Radhakrishnan, Niranjan,
            Krishna Mohan, Prasad Mathew, Ajith Mohan, Mukundhan, Farih, and
            Pradeep also attended the event representing Darsana. KSUM handed
            over the MoU signed with Darsana to Vinod P., treasurer, Darsana,
            furthering the cause of innovation and entrepreneurship in Kerala.
          </p>
          <p className="m-0"> </p>
          <p className="m-0">2.      Biju Cherian Endowment Scholarship </p>
          <p className="m-0">
            The chapter coordinated BCES house visits with the help of
            Trivandrum, Ernakulam, and Calicut chapters. Houses of students
            shortlisted for the BCES scholarship were visited by Darsana members
            to understand the situation of the students and finalize the
            beneficiaries for the scholarship. 16 new students were selected for
            the scholarship after proper verification of their background. The
            scholarship was distributed to the new beneficiaries on 26 February
            2024. 
          </p>
          <p className="m-0"> </p>
          <p className="m-0">3.             BCES Mentorship Program</p>
          <p className="m-0">
            The BCES beneficiaries of second and third year were allotted with
            mentors for any additional support that they may require. A team of
            mentors were formed from within the Palakkad chapter. All the
            mentors stayed in touch with their mentee(s) and contact them at
            least once in a month to enquire about and addressed their general
            wellbeing as well as academic concerns. A review meeting was held
            once a month for discussing the issues faced by the mentees and for
            ensuring timely interventions if required under the guidance of K.
            A. Nandajan – counsellor, trainer, mentor, and a member of the
            Darsana Palakkad chapter. Multiple workshops were conducted as part
            of the BCES Mentorship Program for the mentees and mentors. 
          </p>
          <p className="m-0"> </p>
          <p className="m-0">
            ‘Break the Shackles’, a one-day workshop was organised for the
            mentees on 23 April 2023, at Sayoojyam Residency, Palakkad. 18
            students and 10 mentors participated in the workshop. The workshop
            was led by K. A. Nandajan, Manoj Kumar, and Neeraj C. R., all of
            them Darsana Palakkad members. To accommodate the new batch of BCES
            beneficiaries in the program, new members were added to the mentors’
            group. ‘Learn the Art of Mentoring’, a three-day online workshop
            (from 22 to 24 June 2023), was organised to prepare the new Mentors
            to face the challenges of mentoring and as a refresher course for
            the existing mentors. The program was organised and coordinated by
            the Palakkad chapter and saw the participation of over 20 members. 
          </p>
          <p className="m-0">
            Lear, Unlearn, and Relearn, a one-day workshop was organized for the
            mentees on 5 November 2023, at Sayoojyam Residency, Palakkad. 17
            students and 11 mentors participated in the workshop. The workshop
            was led by K. A. Nandajan, Manoj Kumar, Neeraj (Darsana Palakkad
            members), and Adarsh.
          </p>
          <p className="m-0">4.      Educational Intervention</p>
          <p className="m-0">4.1  Ummini School Visit for Helping with ATL</p>
          <p className="m-0">
            The school authorities of Ummini Government School had raised a
            request to Darsana to help with activities of the Innovation Lab
            which was set up in 2019 and was not being utilized by the students
            due to a lack of facilitators. 7 members of Darsana visited the lab
            on 31 January to understand the exact requirements. The lab has
            several advanced equipment such as 3D printers, robotics kits etc.
            Workshops and student projects using the facilities in the Lab are
            under plan of the Palakkad chapter activities.
          </p>
          <p className="m-0">
            4.2  Handover of Tables and Chairs to Ummini School
          </p>
          <p className="m-0">
            As per the request from authorities of Ummini Government School, a
            set of 9 tables and chairs were handed over to the school on 11th
            February 2023 in presence of the principal, teachers, and Darsana
            members. Darsana incurred a total expenditure of 37,900 rupees which
            was collected entirely from within the chapter.
          </p>
          <p className="m-0">5.      Housing Project</p>
          <p className="m-0">
            The 10th house constructed under the supervision of Darsana at
            Anjumurthi, Vadakkencheri was handed over to the beneficiary in the
            presence P. P. Sumod MLA, Panchayath president, KCSMW
            representative, Darsana members, and the local public. The house was
            funded by the women’s wing of KCSMW, USA. Darsana US chapter also
            played an important role in coordinating the work. 17 Darsana
            members (14 from Palakkad chapter) participated.
          </p>
          <p className="m-0">6.    Membership Campaign</p>
          <p className="m-0">
            As part of our membership campaign a meeting was organized on 18
            June 2023 to welcome the associate members who joined us from the
            recently graduated batches. Com. Ajith Zachariah distributed the
            memberships to all the new members.
          </p>
        </h2>
        <div className="flex flex-row items-start justify-end py-0 px-[68px] box-border max-w-full text-xl mq1400:pl-[34px] mq1400:pr-[34px] mq1400:box-border">
          <div className="h-[456px] w-[1199px] flex flex-col items-end justify-start gap-[28.6px] max-w-full mq450:h-auto mq450:min-h-[100.59999999999854]">
            <div className="self-stretch shadow-[0px_94px_200px_rgba(21,_21,_21,_0.15)] flex flex-row flex-wrap items-start justify-start relative gap-[38px] max-w-full mq825:gap-[19px] mq750:gap-[19px]">
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
                <h3 className="m-0 self-stretch relative text-inherit font-normal font-inherit mq450:text-base">
                  "Incredible initiative! Well done, Bangalore chapter!"
                </h3>
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
                <h3 className="m-0 h-[90px] relative text-inherit leading-[30px] font-normal font-inherit inline-block mq450:text-base mq450:leading-[24px]">
                  <p className="m-0">
                    Heartwarming event. Inspiring work by Darsana.
                  </p>
                </h3>
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
                <h3 className="m-0 self-stretch h-[92px] relative text-inherit font-normal font-inherit inline-block mq450:text-base">
                  <p className="m-0">
                    "Impressive progress. Keep it up, Darsana team!"
                  </p>
                  <p className="m-0">&nbsp;</p>
                </h3>
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
            <div className="w-[1070px] flex flex-row items-start justify-end py-0 px-[37px] box-border max-w-full text-13xl">
              <div className="flex-1 flex flex-row flex-wrap items-center justify-start gap-[48px] max-w-full mq825:gap-[24px] mq750:gap-[24px]">
                <div className="flex-1 flex flex-col items-start justify-start gap-[24px] min-w-[225px]">
                  <img
                    className="w-12 h-12 relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/icon--email.svg"
                  />
                  <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
                      <h1 className="m-0 self-stretch relative text-inherit leading-[42px] font-bold font-inherit mq1050:text-7xl mq1050:leading-[33px] mq450:text-lgi mq450:leading-[25px] mq825:text-7xl mq825:leading-[33px]">
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
                      <h1 className="m-0 self-stretch relative text-inherit leading-[42px] font-bold font-inherit mq1050:text-7xl mq1050:leading-[33px] mq450:text-lgi mq450:leading-[25px] mq825:text-7xl mq825:leading-[33px]">
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
                      <h1 className="m-0 self-stretch relative text-inherit leading-[42px] font-bold font-inherit mq1050:text-7xl mq1050:leading-[33px] mq450:text-lgi mq450:leading-[25px] mq825:text-7xl mq825:leading-[33px]">
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
          </div>
        </div>
      </section>
      <footer className="self-stretch flex flex-row items-start justify-end py-0 pr-[9px] pl-0 box-border max-w-full">
        <footer className="w-[1387px] bg-www-equalopp-org-1349x593-default-nero flex flex-row items-end justify-between pt-5 pb-6 pr-[29px] pl-0 box-border max-w-full gap-[20px] text-left text-base text-black font-h3 lg:flex-wrap lg:pl-5 lg:pr-5 lg:box-border mq1050:flex-wrap mq1050:justify-center mq1050:pl-5 mq1050:pr-5 mq1050:box-border">
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
          <div className="w-[1357px] flex flex-col items-start justify-end pt-0 pb-2.5 pr-[47px] pl-0 box-border max-w-full lg:pl-[23px] lg:pr-[23px] lg:box-border">
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
          <section className="flex-1 flex flex-col items-start justify-end pt-0 px-11 pb-2.5 box-border max-w-full lg:pl-[22px] lg:pr-[22px] lg:box-border">
            <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
              <div className="w-[] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border max-w-full">
                <img
                  className="w-[13.1px] h-[22px] relative z-[1]"
                  alt=""
                  src="/social.svg"
                />
              </div>
              <div className="w-[] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
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
          </section>
        </footer>
      </footer>
    </div>
  );
};

export default PalkkadChapters;
