import { useRouter } from "next/router";

const BridgeKeyInviativites = () => {
  const router = useRouter();

  const onAboutTextClick = () => {
    router.push("/ContactUsFinal");
  };

  const onPricingTextClick = () => {
    router.push("/Initiatives");
  };

  return (
    <div className="w-full relative bg-www-equalopp-org-1349x593-default-nero overflow-hidden flex flex-col items-end justify-start pt-0.5 pb-0 pr-8 pl-0 box-border gap-[325px] leading-[normal] tracking-[normal] mq450:gap-[81px] mq750:gap-[162px]">
      <main className="w-[1387px] flex flex-col items-start justify-start py-0 pr-0 pl-5 box-border gap-[104px] max-w-full text-center text-sm text-gray1-100 font-h3 mq450:gap-[26px] mq750:gap-[52px]">
        <div className="w-[1309px] flex flex-row items-start justify-start py-0 px-[23px] box-border max-w-full">
          <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px]">
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
                <div className="rounded-sm flex flex-row items-start justify-start py-2.5 px-4">
                  <div className="relative font-medium inline-block min-w-[58px] whitespace-nowrap">
                    About Us
                  </div>
                </div>
                <div className="rounded-sm flex flex-row items-start justify-start py-2.5 px-4 gap-[8px]">
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
                <div className="rounded-sm flex flex-row items-start justify-start py-2.5 px-4 gap-[8px]">
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
                <div className="rounded-sm flex flex-row items-start justify-start py-2.5 px-4">
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
        </div>
        <header className="self-stretch flex flex-row items-start justify-center pt-0 pb-12 pr-[30px] pl-5 box-border max-w-full mq450:pb-5 mq450:box-border mq1025:pb-[31px] mq1025:box-border">
          <main className="w-[967px] flex flex-col items-end justify-start gap-[76px] max-w-full text-center text-29xl text-black font-h3 mq750:gap-[19px] mq1025:gap-[38px]">
            <div className="self-stretch flex flex-row items-start justify-end py-0 pr-9 pl-[37px] box-border max-w-full">
              <h1 className="m-0 flex-1 relative text-inherit leading-[58px] font-extrabold font-inherit inline-block max-w-full mq450:text-10xl mq450:leading-[35px] mq1025:text-19xl mq1025:leading-[46px]">
                Bridge
              </h1>
            </div>
            <img
              className="self-stretch h-[611px] relative max-w-full overflow-hidden shrink-0 object-cover"
              loading="lazy"
              alt=""
              src="/64154e7565823-1679117941-41@2x.png"
            />
          </main>
        </header>
        <section className="self-stretch relative text-5xl font-arial text-black text-left mq450:text-lgi">
          <p className="[margin-block-start:0] [margin-block-end:1px]">
            Bridge is a program designed to offer academic support to students
            from socially underprivileged groups in society. A large number of
            such students in professional colleges either drop out or fail to
            meet the requirements of successful completion of the courses. For
            example, the pass percentage of SC/ST students in engineering is
            less than 10%. While the main reason is the lack of an academic
            foundation,  sometimes the inability to adjust culturally to the
            college environment also contributes.
          </p>
          <p className="[margin-block-start:0] [margin-block-end:1px]">
            It has been decided to start a pilot program for the Bridge at NSS
            College of Engineering, Palakkad. Based on the feedback from the
            college, the scope of the program was widened to include financially
            weaker students along with students from socially underprivileged
            groups. Selection of the students was based on their family income,
            rank in entrance examinations, social category, etc. In addition to
            academic support, the program also included training on social and
            cultural adjustments, communication, and other soft skills.
          </p>
          <p className="[margin-block-start:0] [margin-block-end:1px]">
            The initial plan was to start the programs for 2021-22 admissions in
            the college. However, based on the request from the college, the
            first Bridge program started with third-semester students entering
            the campus for the first time after the pandemic. Forty students
            were shortlisted for the program from a list of 500. 
          </p>
          <p className="[margin-block-start:0] [margin-block-end:1px]">
            The program was inaugurated by Principal Dr P. R. Suresh on December
            18, 2021. The nodal officer from the college Dr.Harikrishnan and a
            few members from Darsana also were present. The program started with
            Mathematics and English/Personality development classes.
          </p>
          <p className="[margin-block-start:0] [margin-block-end:1px]">
            Subsequently, another batch for fresh 2021 admissions also was
            started. Forty first-year students shortlisted from 100 applications
            are participating in it. 
          </p>
          <p className="[margin-block-start:0] [margin-block-end:1px]">
            The bridge committee includes people from Kochi, Thiruvananthapuram,
            Bangalore, and Palakkad chapters to ensure close contact with all
            participating students. A group of resource persons has been
            identified to run the sessions. Sessions are monitored and managed
            using an app.
          </p>
        </section>
      </main>
      <footer className="self-stretch flex flex-row items-start justify-end py-0 pr-[21px] pl-0 box-border max-w-full text-left text-base text-black font-h3">
        <div className="flex-1 bg-www-equalopp-org-1349x593-default-nero flex flex-row items-end justify-between pt-5 pb-6 pr-[29px] pl-0 box-border max-w-full gap-[20px] mq1100:flex-wrap mq1100:pl-5 mq1100:pr-5 mq1100:box-border">
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
              <section className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                <img
                  className="w-[13.1px] h-[22px] relative z-[1]"
                  loading="lazy"
                  alt=""
                  src="/social.svg"
                />
              </section>
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
                  src="/social1@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BridgeKeyInviativites;
