import { useRouter } from "next/router";
import FooterContainer from "../components/FooterContainer";

const JobFairOtherInviaties = () => {
  const router = useRouter();

  const onAboutTextClick = () => {
    router.push("/ContactUsFinal");
  };

  const onPricingTextClick = () => {
    router.push("/Initiatives");
  };

  return (
    <div className="w-full relative bg-www-equalopp-org-1349x593-default-nero overflow-hidden flex flex-col items-end justify-start pt-0.5 pb-0 pr-8 pl-0 box-border gap-[742px] leading-[normal] tracking-[normal] text-left text-5xl text-black font-arial mq450:gap-[185px] mq750:gap-[371px]">
      <div className="w-[1367px] h-[1223px] flex flex-col items-start justify-start gap-[104px]">
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
        <div className="self-stretch flex flex-row items-start justify-center pt-0 pb-12 pr-[30px] pl-5 box-border max-w-full mq450:pb-5 mq450:box-border mq1025:pb-[31px] mq1025:box-border">
          <section className="w-[967px] flex flex-col items-end justify-start gap-[76px] max-w-full text-center text-29xl text-black font-h3 mq750:gap-[19px] mq1025:gap-[38px]">
            <div className="w-[930px] h-[58px] flex flex-row items-start justify-end py-0 pr-9 pl-0 box-border">
              <h1 className="m-0 flex-1 relative text-inherit leading-[58px] font-extrabold font-inherit inline-block max-w-full mq450:text-10xl mq450:leading-[35px] mq1025:text-19xl mq1025:leading-[46px]">
                Job Fair
              </h1>
            </div>
            <img
              className="self-stretch h-[611px] relative max-w-full overflow-hidden shrink-0 object-cover"
              loading="lazy"
              alt=""
              src="/job-fair-other-inviaties-hero-image@2x.png"
            />
          </section>
        </div>
        <h2 className="m-0 self-stretch relative text-inherit font-normal font-inherit mq450:text-lgi">
          <p className="[margin-block-start:0] [margin-block-end:1px]">{`Darsana conducted a massive job fair on 1st & 2nd August 2008 at Govt. Victoria College. By far, It is the largest event organized by Darsana. The job fair helped Darsana become a popular name in and around Palakkad.`}</p>
          <p className="[margin-block-start:0] [margin-block-end:1px]"> </p>
          <p className="[margin-block-start:0] [margin-block-end:1px]">
             Darsana was a partner for the Deshabhimani Job fair held at
            Kozhikode from 17th to 20th October 2013. Darsana members played a
            key role in the conducting of the job fair.
          </p>
        </h2>
      </div>
      <FooterContainer
        social3="/social1@2x.png"
        onAboutTextClick={onAboutTextClick}
        onPricingTextClick={onPricingTextClick}
        showPricing={false}
      />
    </div>
  );
};

export default JobFairOtherInviaties;
