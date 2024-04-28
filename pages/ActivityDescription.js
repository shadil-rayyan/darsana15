import { useRouter } from "next/router";

const ActivityDescription = () => {
  const router = useRouter();

  const onAboutTextClick = () => {
    router.push("/ContactUsFinal");
  };

  const onPricingTextClick = () => {
    router.push("/Initiatives");
  };

  return (
    <div className="w-full relative bg-www-equalopp-org-1349x593-default-nero overflow-hidden flex flex-col items-end justify-start pt-0.5 pb-0 pr-[53px] pl-0 box-border gap-[82px] leading-[normal] tracking-[normal] text-left text-sm text-black font-h3 mq450:gap-[20px] mq750:gap-[41px] mq750:pr-[26px] mq750:box-border">
      <div className="relative leading-[150%] hidden min-w-[78px]">
        11 Jan 2022
      </div>
      <div className="relative text-lg leading-[150%] hidden min-w-[7px]">
        •
      </div>
      <div className="relative leading-[150%] hidden min-w-[66px]">
        5 min read
      </div>
      <div className="w-[1050px] flex-1 relative hidden max-w-full" />
      <header className="self-stretch flex flex-row items-start justify-end py-0 pr-[60px] pl-16 box-border max-w-full text-center text-sm text-gray1-100 font-h3 lg:pl-8 lg:pr-[30px] lg:box-border">
        <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px]">
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
              <button className="cursor-pointer [border:none] pt-2.5 px-4 pb-2 bg-[transparent] rounded-sm flex flex-row items-start justify-start border-b-[1px] border-solid border-skyblue hover:bg-deepskyblue-400">
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
                <div className="relative font-medium inline-block min-w-[50px]">
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
        </div>
      </header>
      <main className="w-[1302px] flex flex-row items-start justify-end pt-0 px-[27px] pb-[30.6px] box-border max-w-full">
        <section className="flex-1 flex flex-col items-start justify-start gap-[94px] max-w-full text-center text-29xl text-black font-h3 mq450:gap-[23px] mq750:gap-[47px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[47.8px] max-w-full mq750:gap-[24px]">
            <div className="w-[1218px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
              <div className="w-[1050px] flex flex-col items-start justify-start max-w-full">
                <div className="w-[794px] flex flex-row items-start justify-start py-0 px-[7px] box-border max-w-full">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[10px] max-w-full">
                    <div className="self-stretch flex flex-row items-start justify-end max-w-full">
                      <h1 className="m-0 w-[550px] relative text-inherit leading-[58px] font-extrabold font-inherit inline-block shrink-0 max-w-full mq450:text-10xl mq450:leading-[35px] mq1050:text-19xl mq1050:leading-[46px]">
                        Kolar Gold fields (KGF)
                      </h1>
                    </div>
                    <div className="relative text-sm leading-[150%] text-left inline-block min-w-[81px]">
                      <span>By</span>
                      <span className="font-semibold"> Full name</span>
                    </div>
                  </div>
                </div>
                <div className="self-stretch rounded-2xs overflow-hidden flex flex-row items-start justify-start pt-0 px-0 pb-[594.4px] gap-[8px] bg-[url('/kolar-gold-field-program1@3x.png')] bg-cover bg-no-repeat bg-[top] z-[1] text-left text-sm mq750:pb-[386px] mq750:box-border">
                  <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                    <div className="relative leading-[150%] inline-block min-w-[78px]">
                      03 Feb 2024
                    </div>
                  </div>
                  <div className="relative text-lg leading-[150%] inline-block min-w-[7px]">
                    •
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-end max-w-full">
              <footer className="w-[1157px] flex flex-row flex-wrap items-start justify-center gap-[44px] max-w-full text-left text-5xl text-black font-arial mq750:gap-[22px]">
                <div className="flex flex-col items-start justify-start pt-[75px] px-0 pb-0">
                  <div className="flex flex-col items-start justify-start gap-[8px]">
                    <div className="w-8 h-8 rounded-45xl bg-light-grey overflow-hidden shrink-0 flex flex-col items-center justify-center p-1 box-border">
                      <img
                        className="w-6 h-6 relative overflow-hidden shrink-0"
                        loading="lazy"
                        alt=""
                        src="/icon--link.svg"
                      />
                    </div>
                    <div className="w-8 h-8 rounded-45xl bg-light-grey overflow-hidden shrink-0 flex flex-col items-center justify-center p-1 box-border">
                      <img
                        className="w-6 h-6 relative overflow-hidden shrink-0"
                        loading="lazy"
                        alt=""
                        src="/icon--linkedin.svg"
                      />
                    </div>
                    <div className="w-8 h-8 rounded-45xl bg-light-grey overflow-hidden shrink-0 flex flex-col items-center justify-center p-1 box-border">
                      <img
                        className="w-6 h-6 relative overflow-hidden shrink-0"
                        loading="lazy"
                        alt=""
                        src="/icon--x.svg"
                      />
                    </div>
                    <div className="w-8 h-8 rounded-45xl bg-light-grey overflow-hidden shrink-0 flex flex-col items-center justify-center p-1 box-border">
                      <img
                        className="w-6 h-6 relative overflow-hidden shrink-0"
                        loading="lazy"
                        alt=""
                        src="/icon--facebook.svg"
                      />
                    </div>
                  </div>
                </div>
                <h2 className="m-0 flex-1 relative text-inherit font-normal font-inherit inline-block min-w-[703px] max-w-full z-[1] mq450:text-lgi mq1050:min-w-full">
                  <p className="m-0">
                    On behalf of the Bangalore chapter, happy to share that the
                    first milestone of our support program to Mysore Mines
                    School, Kolar Gold Fields (KGF) was achieved on 17 Dec 2022.
                    The school is organising a function to formally inaugurate
                    the library and sports facilities we have set up for them.
                    The function is expected to be attended by the local
                    residents, old students of the school, and representatives
                    from Darsana and their family members. As a run-up to the
                    program for the day, a few sports and games competition has
                    been conducted and the winners will be given prizes by us.
                    The school has benevolently declared more than 100 winners
                    and hence we will be giving a small prize to all of these
                    students.
                  </p>
                  <p className="m-0">
                    In the last few months, with the active support of all of
                    you, we have been able to do the following
                  </p>
                  <p className="m-0">1) Help set up a well-equipped library</p>
                  <p className="m-0">
                    2) Provide equipment for various sports and games activities
                  </p>
                  <p className="m-0">
                    3) Replace the dilapidated writing boards in all classrooms
                  </p>
                  <p className="m-0">
                    4) appoint two additional teachers from our funds
                  </p>
                  <p className="m-0">
                    5) Boost the morale of the management team through multiple
                    visits.
                  </p>
                  <p className="m-0">
                    We plan to do the following as the next steps
                  </p>
                  <p className="m-0">
                    1) Actively scouting for CSR partners to fund various
                    development activities at the school
                  </p>
                  <p className="m-0">
                    2) Improve nutrition in the meals of the students.
                  </p>
                  <p className="m-0">
                    <a
                      className="text-[inherit]"
                      href={`https://www.linkedin.com/feed/hashtag/?keywords=team&highlightedUpdateUrns=urn%3Ali%3Aactivity%3A7008811522307076096`}
                      target="_blank"
                    >
                      <span className="[text-decoration:underline]">#team</span>
                    </a>
                     
                    <a
                      className="text-[inherit]"
                      href={`https://www.linkedin.com/feed/hashtag/?keywords=share&highlightedUpdateUrns=urn%3Ali%3Aactivity%3A7008811522307076096`}
                      target="_blank"
                    >
                      <span className="[text-decoration:underline]">
                        #share
                      </span>
                    </a>
                     
                    <a
                      className="text-[inherit]"
                      href={`https://www.linkedin.com/feed/hashtag/?keywords=darsana&highlightedUpdateUrns=urn%3Ali%3Aactivity%3A7008811522307076096`}
                      target="_blank"
                    >
                      <span className="[text-decoration:underline]">
                        #darsana
                      </span>
                    </a>
                  </p>
                </h2>
              </footer>
            </div>
            <h3 className="m-0 w-64 relative text-3xl font-bold font-inherit text-left inline-block mq450:text-lg">
              STORIES OF CHANGE
            </h3>
          </div>
          <div className="w-[1199px] shadow-[0px_94px_200px_rgba(21,_21,_21,_0.15)] flex flex-row flex-wrap items-start justify-start relative gap-[38px] max-w-full text-left text-xl mq750:gap-[19px]">
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
        </section>
      </main>
      <footer className="self-stretch bg-www-equalopp-org-1349x593-default-nero flex flex-row items-end justify-between pt-5 pb-6 pr-[29px] pl-0 box-border max-w-full gap-[20px] text-left text-base text-black font-h3 lg:flex-wrap lg:pl-5 lg:pr-5 lg:box-border">
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
                src="/social5@2x.png"
              />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ActivityDescription;
