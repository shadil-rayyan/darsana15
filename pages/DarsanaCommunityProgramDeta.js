import { useRouter } from "next/router";

const DarsanaCommunityProgramDeta = () => {
  const router = useRouter();

  const onAboutTextClick = () => {
    router.push("/ContactUsFinal");
  };

  const onPricingTextClick = () => {
    router.push("/Initiatives");
  };

  return (
    <div className="w-full relative bg-www-equalopp-org-1349x593-default-nero overflow-hidden flex flex-col items-end justify-start pt-0.5 pb-0 pr-[27px] pl-0 box-border gap-[82px] leading-[normal] tracking-[normal] mq450:gap-[20px] mq750:gap-[41px]">
      <div className="w-[1050px] flex-1 relative hidden max-w-full" />
      <header className="self-stretch flex flex-row items-start justify-start py-0 px-16 box-border max-w-full text-center text-sm text-gray1-100 font-h3 lg:pl-8 lg:pr-8 lg:box-border">
        <div className="w-[1263px] flex flex-row items-start justify-between gap-[20px] max-w-full">
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
      <section className="w-[1388px] flex flex-row items-start justify-center pt-0 px-5 pb-[4.4px] box-border max-w-full text-left text-29xl text-black font-h3">
        <div className="w-[1050px] flex flex-col items-start justify-start max-w-full">
          <div className="w-[938px] flex flex-row items-start justify-start py-0 px-[9px] box-border max-w-full">
            <div className="flex-1 flex flex-col items-start justify-start gap-[10px] max-w-full">
              <div className="self-stretch flex flex-row items-start justify-end">
                <h1 className="m-0 relative text-inherit leading-[58px] font-extrabold font-inherit mq450:text-10xl mq450:leading-[35px] mq1050:text-19xl mq1050:leading-[46px]">
                  Darsana - Community Engagement
                </h1>
              </div>
              <div className="relative text-sm leading-[150%] inline-block min-w-[81px]">
                <span>By</span>
                <span className="font-semibold"> Full name</span>
              </div>
            </div>
          </div>
          <div className="self-stretch h-[657.6px] relative text-sm">
            <div className="absolute top-[3px] left-[9px] leading-[150%] inline-block min-w-[78px]">
              11 Jan 2022
            </div>
            <div className="absolute top-[0px] left-[95px] text-lg leading-[150%] inline-block min-w-[7px]">
              •
            </div>
            <div className="absolute top-[3px] left-[110px] leading-[150%] inline-block min-w-[66px]">
              5 min read
            </div>
            <img
              className="absolute top-[63px] left-[0px] rounded-2xs w-[1050px] h-[594.6px] object-cover z-[1]"
              loading="lazy"
              alt=""
              src="/darsana-hero-iamge-program-detail@2x.png"
            />
          </div>
        </div>
      </section>
      <section className="w-[1230px] flex flex-row flex-wrap items-start justify-center pt-0 pb-[49px] pr-0 pl-5 box-border gap-[49px] max-w-full text-left text-5xl text-black font-arial mq450:pb-8 mq450:box-border mq750:gap-[24px]">
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
        <h2 className="m-0 flex-1 relative text-inherit font-normal font-inherit inline-block min-w-[734px] max-w-full mq450:text-lgi mq1050:min-w-full">
          <p className="m-0">
            Darsana's support to Mysore Mine School and KS Vasan memorial school
            is continuing ...
          </p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">
            We provided green boards to all class rooms, toys for children in
            small classesand outdoor play
          </p>
          <p className="m-0">{`equipments to all senior classes. Happy to see the library becoming functional utilizing the `}</p>
          <p className="m-0">books contributed by Darsana Members.</p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">
            Another highlight is Darsana sponsored all the prizes for the sports
            day this year.The commitment of Bangalore chapter is what is driving
            this whole programme.
          </p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">
            As our continued commitment to the students of school, Darsana has
            started sponsoring eggs to students.Funding for this inititaive is
            coming from the US Chapter
          </p>
        </h2>
      </section>
      <section className="w-[1387px] flex flex-row items-start justify-center pt-0 px-5 pb-[66.6px] box-border max-w-full text-left text-3xl text-black font-h3 mq450:pb-[43px] mq450:box-border">
        <div className="w-[1215px] flex flex-col items-start justify-start gap-[96px] max-w-full mq450:gap-[24px] mq750:gap-[48px]">
          <h3 className="m-0 w-64 relative text-inherit font-bold font-inherit inline-block mq450:text-lg">
            STORIES OF CHANGE
          </h3>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-4 box-border max-w-full text-center text-xl">
            <div className="flex-1 shadow-[0px_94px_200px_rgba(21,_21,_21,_0.15)] flex flex-row flex-wrap items-start justify-start relative gap-[38px] max-w-full mq750:gap-[19px]">
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
              <div className="flex-1 shadow-[0px_28.9px_61.56px_rgba(21,_21,_21,_0.15)] rounded-2xl bg-www-equalopp-org-1349x593-default-nero flex flex-col items-start justify-center pt-[41.8px] px-[25px] pb-[56.8px] box-border gap-[32px] min-w-[280px] max-w-full text-left mq450:gap-[16px]">
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
              <div className="flex-1 shadow-[0px_28.9px_61.56px_rgba(21,_21,_21,_0.15)] rounded-2xl bg-www-equalopp-org-1349x593-default-nero flex flex-col items-start justify-center pt-5 px-[25px] pb-[35px] box-border gap-[32px] min-w-[280px] max-w-full mq450:gap-[16px]">
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
              <div className="flex-1 shadow-[0px_28.9px_61.56px_rgba(21,_21,_21,_0.15)] rounded-2xl bg-www-equalopp-org-1349x593-default-nero flex flex-col items-start justify-center pt-[7.3px] px-[25px] pb-[22.3px] box-border gap-[32px] min-w-[280px] max-w-full mq450:gap-[16px]">
                <div className="self-stretch h-[20.4px]" />
                <h3 className="m-0 self-stretch h-[115px] relative text-inherit tracking-[-0.06px] font-normal font-inherit inline-block mq450:text-base">
                  <p className="m-0">Wonderful collaboration, US Chapter!</p>
                  <p className="m-0">&nbsp;</p>
                  <p className="m-0">&nbsp;</p>
                </h3>
                <div className="self-stretch flex flex-row items-center justify-center text-left text-sm font-manrope">
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
          </div>
        </div>
      </section>
      <section className="self-stretch flex flex-row items-start justify-end py-0 pr-[26px] pl-0 box-border max-w-full text-left text-base text-black font-h3">
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
        </div>
      </section>
    </div>
  );
};

export default DarsanaCommunityProgramDeta;
