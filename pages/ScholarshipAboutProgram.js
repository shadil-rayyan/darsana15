import { useRouter } from "next/router";

const ScholarshipAboutProgram = () => {
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
    <div className="w-full relative bg-www-equalopp-org-1349x593-default-nero overflow-hidden flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border gap-[35px] leading-[normal] tracking-[normal] text-left text-mini text-gray1-500 font-h3 mq750:gap-[17px]">
      <section className="w-[1386.5px] flex flex-row items-start justify-start pt-0 px-[47px] pb-[324px] box-border max-w-full text-center text-13xl font-roboto-condensed lg:pl-[23px] lg:pr-[23px] lg:box-border mq750:pb-[137px] mq750:box-border mq1050:pb-[211px] mq1050:box-border">
        <div className="h-[738px] w-[1292.5px] flex flex-col items-end justify-start gap-[53px]">
          <div className="w-[1292.5px] h-20 flex flex-row items-start justify-end py-0 pr-[29.5px] pl-0 box-border">
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
                <section className="flex flex-row items-start justify-start text-center text-sm text-gray1-100 font-h3">
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
                  <div className="rounded-sm flex flex-row items-start justify-start py-2.5 px-4 gap-[8px] z-[1]">
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
                  <div className="rounded-sm flex flex-row items-start justify-start py-2.5 px-4 gap-[8px] z-[2]">
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
                  <div className="rounded-sm flex flex-row items-start justify-start py-2.5 px-4 z-[3]">
                    <div className="relative font-medium inline-block min-w-[50px]">
                      Product
                    </div>
                  </div>
                </section>
              </div>
              <header className="flex flex-col items-start justify-start pt-[17.5px] px-0 pb-0">
                <button className="cursor-pointer [border:none] py-3 px-6 bg-[transparent] rounded-lg [background:linear-gradient(83.21deg,_#3b0066,_#175fc4_38.7%,_#00e1e7_83.79%,_#00f7e0_93.69%,_#00ffdd)] flex flex-row items-start justify-start whitespace-nowrap">
                  <div className="relative text-lg font-medium font-h3 text-www-equalopp-org-1349x593-default-nero text-center inline-block min-w-[56px] whitespace-nowrap">
                    Sign In
                  </div>
                </button>
              </header>
            </div>
          </div>
          <div className="w-[1245.5px] flex flex-col items-start justify-start gap-[35px] max-w-full mq750:gap-[17px]">
            <div className="w-[941px] h-[500px] flex flex-row items-start justify-start py-0 pr-0 pl-[221px] box-border">
              <div className="flex flex-row items-start justify-start pt-[15px] pb-[450px] pr-[58px] pl-[66px] box-border bg-[url('/scholarship-hero-image@2x.png')] bg-cover bg-no-repeat bg-[top] max-w-full mq750:pt-5 mq750:pb-[292px] mq750:pr-[29px] mq750:pl-[33px] mq750:box-border">
                <img
                  className="h-[500px] w-[720px] relative object-cover hidden max-w-full"
                  alt=""
                  src="/scholarship-hero-image@2x.png"
                />
                <h1 className="m-0 relative text-inherit tracking-[0.16px] leading-[35px] uppercase font-bold font-inherit text-transparent !bg-clip-text [background:linear-gradient(89.86deg,_rgba(26,_27,_65,_0),_rgba(253,_241,_241,_0.9)),_linear-gradient(90.14deg,_#a2bccb,_rgba(24,_77,_183,_0.82)_26%,_#305db5_51.5%,_rgba(29,_55,_107,_0.9)_73.5%,_#223e75)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [text-shadow:1px_0_0_#491fa0,_0_1px_0_#491fa0,_-1px_0_0_#491fa0,_0_-1px_0_#491fa0] z-[1] mq450:text-lgi mq450:leading-[21px] mq1050:text-7xl mq1050:leading-[28px]">
                  Educate With Biju Cherian Scholarship
                </h1>
              </div>
            </div>
            <div className="self-stretch flex flex-row flex-wrap items-start justify-center max-w-full [row-gap:20px]">
              <button className="cursor-pointer [border:none] pt-[17px] pb-[18px] pr-5 pl-[22px] bg-steelblue-600 w-[311.3px] flex flex-row items-start justify-center box-border whitespace-nowrap hover:bg-steelblue-200">
                <div className="relative text-base tracking-[0.16px] leading-[35px] font-medium font-h3 text-www-equalopp-org-1349x593-default-nero text-center inline-block min-w-[111px]">
                  About Program
                </div>
              </button>
              <div className="h-[70px] flex-1 relative min-w-[405px] max-w-full mq750:min-w-full">
                <button
                  className="cursor-pointer [border:none] pt-7 px-[82px] pb-[21px] bg-steelblue-500 absolute top-[0px] left-[0px] w-[311.3px] flex flex-row items-start justify-start box-border hover:bg-deepskyblue-300"
                  onClick={onEligibilitySnavbarClick}
                >
                  <div className="w-[117px] relative text-mini tracking-[0.6px] leading-[21px] font-medium font-h3 text-black text-center flex items-center justify-center shrink-0">
                    Eligibilty
                  </div>
                </button>
                <button
                  className="cursor-pointer [border:none] pt-[15px] pb-5 pr-5 pl-[22px] bg-steelblue-500 absolute top-[0px] left-[311.2px] w-[311.5px] flex flex-row items-start justify-center box-border z-[1] hover:bg-deepskyblue-300"
                  onClick={onFaqSnavbarClick}
                >
                  <div className="w-[107.5px] relative text-mini tracking-[0.16px] leading-[35px] font-medium font-raleway text-black text-center flex items-center justify-center shrink-0">
                    FAQ
                  </div>
                </button>
              </div>
              <button
                className="cursor-pointer [border:none] pt-7 pb-[7px] pr-5 pl-[51px] bg-steelblue-400 w-[311.5px] flex flex-row items-start justify-center box-border whitespace-nowrap hover:bg-deepskyblue-300"
                onClick={onConactUsSnavbarClick}
              >
                <div className="w-[137px] relative text-mini tracking-[0.16px] leading-[35px] font-medium font-raleway text-black text-center flex items-center justify-center shrink-0">
                  Contact us
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="self-stretch flex flex-row items-start justify-end pt-0 px-[52px] pb-[277px] box-border max-w-full text-left text-5xl text-black font-h3 lg:pl-[26px] lg:pr-[26px] lg:box-border mq750:pb-[117px] mq750:box-border mq1050:pb-[180px] mq1050:box-border">
        <h2 className="m-0 h-[723px] w-[1303px] relative text-inherit tracking-[0.16px] leading-[34.56px] font-normal font-inherit flex items-center shrink-0 max-w-full mq450:text-lgi mq450:leading-[28px]">
          <span className="w-full">
            <p className="[margin-block-start:0] [margin-block-end:12px]">
              Biju Cheriyan studied Instrumentation and Control Engineering at
              the NSS College of Engineering in Palakkad from 1987 to 1991.
              Biju, who had been active in the progressive left movement since
              his school days, significantly contributed to shaping the campus
              ethos at the NSSCE. An excellent student, he was also a committed
              supporter of students' rights, an ardent leftist, a practical
              leader, a tenacious fighter, a devoted friend, and most
              importantly, a stunning human being. In 1997, he passed away far
              too soon. To preserve the memory of Biju Cheriyan and the
              principles he upheld, his friends formed Darsana, a group of
              like-minded former NSSCE students.
            </p>
            <p className="[margin-block-start:0] [margin-block-end:12px]">
              One of the flagship programs of Darsana, the Biju Cheriyan
              Endowment, started with the modest aim of effectively intervening
              in the academic lives of some of the less privileged students of
              NSSCE. Beginning in 2008, an annual stipend of Rs. 8000 was
              provided to eight students of NSSCE, who were selected based on
              their economic status after scrutiny. Over the years, this amount
              has increased to Rs 12,000, with the number of beneficiaries
              increasing to 40 students per year. The stipend is linked to their
              academic performance, with graded incentives for better CGPA.
              Darsana is proud to have made a difference in the lives of these
              students. It is heartening to see that quite a few of the
              beneficiaries, doing well in life, enthusiastically contribute to
              the Endowment in whatever way possible.
            </p>
            <p className="[margin-block-start:0] [margin-block-end:12px]">
              The Biju Cheriyan Endowment has grown beyond just a scholarship
              scheme with programs to equip students with better communication
              skills, career guidance sessions, and motivational talks. Darsana
              members have also been mentoring some beneficiaries, spending time
              with them, guiding them over academic and personal difficulties,
              and enabling them to achieve better prospects. The Endowment also
              organises regular academic programs to help the under-performers
              learn better and progress towards their B.Tech degree. The Biju
              Cheriyan Endowment and the Scholarship are now well-known in the
              college and beyond, with the number of applications growing
              yearly. We have regretfully rejected several suitable applicants,
              as the numbers are beyond our capacity to accommodate them
              financially and logistically.
            </p>
            <p className="[margin-block-start:0] [margin-block-end:12px]">
              The Endowment is built solely through contributions from Darsana
              members in units of Rs.500/-. A corpus has been built up for this
              purpose and carefully administered by the Executive Committee. The
              entire Scholarship program, right from the call for applications,
              through shortlisting, vetting of the applications, visits to
              applicant’s homes for verification, and finalization to the
              function for awarding the scholarship by the Principal, is run by
              Darsana members, with help from the college authorities.
            </p>
            <p className="[margin-block-start:0] [margin-block-end:12px]">
              We handed over the scholarship amount to 16 first-year students on
              26 Feb 2024 as part of our Biju Cherian Endowment Student
              Empowerment program at 12:00 PM in our college in the presence of
              the Principal and HODs. Four of the 16 scholarships are sponsored
              by MEANA (A North America-based Malayalee engineers'
              organization). The total scholarship per student per year is
              16,000Rs (12,000 base amount and 4000 as an encouragement based on
              academic performance).
            </p>
            <p className="[margin-block-start:0] [margin-block-end:12px]">
              Our members have done the due diligence to ensure the scholarships
              reach the most needy. There were more than 170 applicants this
              year, of which 48 were shortlisted for virtual meetings, based on
              which 21 students were in the final shortlist. Members from
              various chapters in Kerala visited their homes and provided
              recommendations about each of them to the committee, based on
              which 16 were selected. As you know, through this program, we hope
              to contribute to the transformation of these 16 and thereby impact
              their families, too.
            </p>
            <p className="[margin-block-start:0] [margin-block-end:12px]">
              Counting all four years, we will support 64 students in the due
              course. Thanks to each one of the Darsana family for making this
              happen.
            </p>
            <p className="m-0"> </p>
          </span>
        </h2>
      </section>
      <div className="w-[1183px] h-[141px] flex flex-row items-start justify-start py-0 pr-0 pl-[369px] box-border">
        <div className="w-[814px] flex flex-col items-start justify-start gap-[18px] max-w-full">
          <div className="self-stretch flex flex-row items-start justify-end max-w-full">
            <div className="w-[616px] relative leading-[23px] font-medium inline-block shrink-0 max-w-full">
              Click here to applly for the scholarship
            </div>
          </div>
          <button className="cursor-pointer [border:none] pt-[29.2px] px-[27px] pb-[13px] bg-[transparent] w-[676px] flex flex-row items-start justify-start box-border relative max-w-full">
            <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-xl bg-royalblue" />
            <div className="h-[57.8px] flex-1 relative text-13xl font-semibold font-h3 text-www-equalopp-org-1349x593-default-nero text-center inline-block max-w-full z-[1] mq450:text-lgi mq1050:text-7xl">
              APPLY NOW
            </div>
          </button>
        </div>
      </div>
      <footer className="w-[1387px] bg-www-equalopp-org-1349x593-default-nero flex flex-row items-end justify-between pt-5 pb-6 pr-[29px] pl-0 box-border max-w-full gap-[20px] text-left text-base text-black font-h3 mq1050:flex-wrap mq1050:justify-center mq1050:pl-5 mq1050:pr-5 mq1050:box-border">
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
        <div className="h-[34px] w-[174px] flex flex-col items-start justify-end pt-0 px-0 pb-2.5 box-border">
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
            <div className="h-[23px] w-[25.1px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
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

export default ScholarshipAboutProgram;
