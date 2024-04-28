import { useRouter } from "next/router";
import FooterContainer from "../components/FooterContainer";

const SeminarOnRestructuringOther = () => {
  const router = useRouter();

  const onAboutTextClick = () => {
    router.push("/ContactUsFinal");
  };

  const onPricingTextClick = () => {
    router.push("/Initiatives");
  };

  return (
    <div className="w-full relative bg-www-equalopp-org-1349x593-default-nero overflow-hidden flex flex-col items-end justify-start pt-0.5 pb-0 pr-8 pl-0 box-border gap-[492px] leading-[normal] tracking-[normal] mq450:gap-[123px] mq750:gap-[246px]">
      <main className="w-[1387px] flex flex-col items-start justify-start py-0 pr-0 pl-5 box-border gap-[93px] max-w-full mq450:gap-[23px] mq750:gap-[46px]">
        <header className="w-[1309px] flex flex-row items-start justify-start py-0 px-[23px] box-border max-w-full text-center text-sm text-gray1-100 font-h3">
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
        </header>
        <section className="self-stretch flex flex-row items-start justify-center pt-0 pb-[59px] pr-5 pl-[57px] box-border max-w-full text-center text-29xl text-black font-h3 mq1125:pl-7 mq1125:box-border mq450:pb-[25px] mq450:box-border mq1025:pb-[38px] mq1025:box-border">
          <div className="w-[1056px] flex flex-col items-start justify-start gap-[87px] max-w-full mq1125:gap-[43px] mq750:gap-[22px]">
            <h1 className="m-0 self-stretch relative text-inherit leading-[120%] font-extrabold font-inherit mq450:text-10xl mq450:leading-[35px] mq1025:text-19xl mq1025:leading-[46px]">
              <p className="m-0">
                Seminar on restructuring Engineering education
              </p>
            </h1>
            <div className="w-[1009px] flex flex-row items-start justify-start py-0 px-[21px] box-border max-w-full">
              <img
                className="h-[611px] flex-1 relative max-w-full overflow-hidden object-cover"
                loading="lazy"
                alt=""
                src="/seminar-on-restructuring-other-inviaties-hero-image@2x.png"
              />
            </div>
          </div>
        </section>
        <section className="self-stretch relative text-5xl font-arial text-black text-left mq450:text-lgi">
          <p className="[margin-block-start:0] [margin-block-end:1px]">
            The seminar we conducted at Palakkad Fort Palace was a roaring
            success.
          </p>
          <p className="[margin-block-start:0] [margin-block-end:1px]">
            Participants from 15 colleges out of the 18 colleges under the
            University of Calicut attended. Parents, University staff members,
            students from many colleges, teachers from almost all colleges, and
            the controller of exams were all present at the function.
          </p>
          <p className="[margin-block-start:0] [margin-block-end:1px]">
            The total number of participants was 118. The seminar maintained the
            schedule and the discussions were all to the point. Eminent
            personalities from IIT Madras, NIT Calicut, Anna University, Amrita
            University (deemed), etc. were present. Principals of 6 engineering
            colleges attended and expressed their views. Members from the media
            fraternity, who visited appreciated the seriousness of the seminar.
          </p>
          <p className="[margin-block-start:0] [margin-block-end:1px]">
            The "Open House" was vibrant with divergent views and effective
            inputs from all sections of the participants. Controller of exams
            mentioned that the way we have conducted the seminar proves beyond
            doubt that we are "up to doing something concrete.” 
          </p>
          <p className="[margin-block-start:0] [margin-block-end:1px]">
            A follow-up council with about 90 members with representation from
            all 18 colleges was constituted. A 14-member executive committee was
            formed to spearhead the activities of the council. Mr. Sreenadhan is
            the convenor of the EC, and four Darsana members are also part of
            the executive committee.
          </p>
          <p className="m-0">
            Darsana has established itself as a a renowned name in all the
            Engineering colleges under the University of Calicut, and also among
            the "who is who" at the University of Calicut and some other major
            universities.
          </p>
        </section>
      </main>
      <FooterContainer
        social3="/social1@2x.png"
        onAboutTextClick={onAboutTextClick}
        onPricingTextClick={onPricingTextClick}
        showPricing={false}
      />
    </div>
  );
};

export default SeminarOnRestructuringOther;
