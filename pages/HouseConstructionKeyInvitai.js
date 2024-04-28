import { useRouter } from "next/router";

const HouseConstructionKeyInvitai = () => {
  const router = useRouter();

  const onAboutTextClick = () => {
    router.push("/ContactUsFinal");
  };

  const onPricingTextClick = () => {
    router.push("/Initiatives");
  };

  return (
    <div className="w-full relative bg-www-equalopp-org-1349x593-default-nero overflow-hidden flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border gap-[104px] leading-[normal] tracking-[normal] text-center text-sm text-gray1-100 font-h3 mq450:gap-[26px] mq750:gap-[52px]">
      <div className="w-[1391px] flex flex-row items-start justify-start py-0 px-16 box-border max-w-full lg:pl-8 lg:pr-8 lg:box-border">
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
      <section className="self-stretch flex flex-row items-start justify-center pt-0 pb-12 pr-[21px] pl-5 box-border max-w-full text-center text-29xl text-black font-h3 mq1050:pb-[31px] mq1050:box-border mq450:pb-5 mq450:box-border">
        <div className="w-[967px] flex flex-col items-end justify-start gap-[76px] max-w-full mq1050:gap-[38px] mq750:gap-[19px]">
          <div className="self-stretch flex flex-row items-start justify-end py-0 pr-9 pl-[37px] box-border max-w-full">
            <h1 className="m-0 flex-1 relative text-inherit leading-[120%] font-extrabold font-inherit inline-block max-w-full mq1050:text-19xl mq1050:leading-[46px] mq450:text-10xl mq450:leading-[35px]">
              <p className="m-0">House Constructions</p>
            </h1>
          </div>
          <img
            className="self-stretch h-[611px] relative max-w-full overflow-hidden shrink-0 object-cover"
            loading="lazy"
            alt=""
            src="/64154e7565823-1679117941-42@2x.png"
          />
        </div>
      </section>
      <section className="flex flex-row items-start justify-end pt-0 px-8 pb-[49px] box-border max-w-full text-left text-5xl text-black font-arial mq1050:pb-8 mq1050:box-border mq450:pb-[21px] mq450:box-border">
        <h2 className="m-0 w-[1367px] relative text-inherit font-normal font-inherit inline-block shrink-0 max-w-full mq450:text-lgi">
          <p className="[margin-block-start:0] [margin-block-end:1px]">
            As a socially committed organization, Darsana decided to join the
            “Rebuild Kerala” initiative by the Government of Kerala to support
            the families affected by the floods in 2018.
          </p>
          <p className="[margin-block-start:0] [margin-block-end:1px]">
            Darsana also decided to use its engineering skills to design
            cost-effective, sustainable houses as part of this initiative
            bearing in mind the impact of cost, time, and environment. It formed
            a team to develop a methodology to achieve this goal and manage
            execution.
          </p>
          <p className="[margin-block-start:0] [margin-block-end:1px]">
            Darsana team constructed six houses in Palakkad under the
            supervision of Sri. Shibu and three homes in Calicut and Malappuram
            coordinated by Sri. Babeesh.
          </p>
          <p className="[margin-block-start:0] [margin-block-end:1px]">
            Darsana members contributed about Rs. 24 lakhs for this noble cause.
            Most of the houses were constructed with fly ash blocks and truss
            roofing with Mangalore tile to reduce cost and time.
          </p>
          <p className="[margin-block-start:0] [margin-block-end:1px]">
            · First project of My home for Smt. Sreedevi Amma at Railway Colony,
            Palakkad. A 500 Sq ft house was constructed in 22 days at the cost
            of Rs. 4,96,180. The key handover was done by Com. V. S.
            Achuthanandan and Com. M. B. Rajesh on 21/12/18.
          </p>
          <p className="[margin-block-start:0] [margin-block-end:1px]">
            · Marutharoad project for Smt. Nabeesa at Marutha road, Palakkad.
            451 Sq ft house constructed at the cost of Rs. 5,08,354. The key
            handover was done by Com. M. B. Rajesh on 12/03/19.
          </p>
          <p className="[margin-block-start:0] [margin-block-end:1px]">
            · Kallikkad project for Smt. Kashu at Kallikkad with the support of
            service cooperative bank. 440 Sq ft house constructed at the cost of
            Rs. 5,16,645. The key handover was done by bank authorities on
            21/04/19.
          </p>
          <p className="[margin-block-start:0] [margin-block-end:1px]">
            · Calicut First project of My home at Calicut for Smt. Subhaida at
            Kadalundy. 450 Sq ft house constructed at the cost of Rs. 5,71,315.
            The key handover was done by V. K. C. Mammad Koya, MLA on 12/06/19.
          </p>
          <p className="[margin-block-start:0] [margin-block-end:1px]">
            · Railway colony Project for Shri. Preman at Railway Colony,
            Palakkad along with Spark. 298 Sq ft house constructed at the cost
            of Rs. 2,35,446. The key handover was done by Com. M. B. Rajesh on
            17/07/19.
          </p>
          <p className="[margin-block-start:0] [margin-block-end:1px]">
            · Paitankunnu project of My home for Smt. Vella at Paittankunnu,
            Palakkad. 392 Sq ft house constructed at the cost of Rs. 5,74,995.
            The key handover was done by Com N N Krishnadas.
          </p>
          <p className="[margin-block-start:0] [margin-block-end:1px]">{`Darsana coordinated a seminar on the topic “Alternative methods in house construction” at the venue of “Nattuvicharam” coordinated by Com. Niranjan on December 26 & 27, 2019.`}</p>
          <p className="[margin-block-start:0] [margin-block-end:1px]">
            Darsana participated and won 2nd place for the construction
            methodology in one day workshop and exhibition “NEW HOUSING LITERACY
            FOR REBUILDING KERALA" conducted by NIT Calicut.
          </p>
          <p className="m-0">
            The 11th house with the funding of KCS Women's wing, USA was
            constructed at Mannaar, Alapuzha.
          </p>
        </h2>
      </section>
      <footer className="w-[1387px] bg-www-equalopp-org-1349x593-default-nero flex flex-row items-end justify-between pt-5 pb-6 pr-[29px] pl-0 box-border max-w-full gap-[20px] text-left text-base text-black font-h3 mq1050:flex-wrap mq1050:pl-5 mq1050:pr-5 mq1050:box-border">
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
                src="/social1@2x.png"
              />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HouseConstructionKeyInvitai;
