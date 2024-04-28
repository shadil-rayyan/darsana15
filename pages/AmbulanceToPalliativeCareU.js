import { useRouter } from "next/router";
import FooterContainer from "../components/FooterContainer";

const AmbulanceToPalliativeCareU = () => {
  const router = useRouter();

  const onAboutTextClick = () => {
    router.push("/ContactUsFinal");
  };

  const onPricingTextClick = () => {
    router.push("/Initiatives");
  };

  return (
    <div className="w-full relative bg-www-equalopp-org-1349x593-default-nero overflow-hidden flex flex-col items-end justify-start pt-0.5 pb-0 pr-[42px] pl-0 box-border gap-[797px] leading-[normal] tracking-[normal] mq450:gap-[199px] mq750:gap-[398px] mq750:pr-[21px] mq750:box-border">
      <section className="w-[1387px] flex flex-col items-start justify-start py-0 pr-0 pl-5 box-border gap-[97px] max-w-full text-center text-29xl text-black font-h3 mq450:gap-[24px] mq750:gap-[48px]">
        <div className="w-[1329px] flex flex-row items-start justify-start pt-0 px-[33px] pb-[7px] box-border max-w-full">
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
          </header>
        </div>
        <div className="w-[1352px] flex flex-row items-start justify-start py-0 px-2.5 box-border max-w-full">
          <div className="flex-1 flex flex-col items-end justify-start gap-[76px] max-w-full mq450:gap-[19px] mq750:gap-[38px]">
            <div className="w-[1306px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
              <h1 className="m-0 w-[894px] relative text-inherit leading-[120%] font-extrabold font-inherit inline-block shrink-0 max-w-full mq450:text-10xl mq450:leading-[35px] mq1025:text-19xl mq1025:leading-[46px]">
                <p className="m-0">Ambulance to Palliative care unit</p>
              </h1>
            </div>
            <img
              className="self-stretch relative max-w-full overflow-hidden max-h-full object-cover"
              loading="lazy"
              alt=""
              src="/ambulance-to-palliative-care-unit-other-inviaties-hero-image@2x.png"
            />
          </div>
        </div>
        <h2 className="m-0 self-stretch relative text-5xl font-normal font-arial text-left mq450:text-lgi">
          <p className="[margin-block-start:0] [margin-block-end:1px]">
            &nbsp;
          </p>
          <p className="[margin-block-start:0] [margin-block-end:1px]">
            Darsana contributed an Ambulance for EMS Jana SevanaKendram, a
            Palliative Care Society, formed at Palakkad, in 2013. The fund for
            the purchase of ambulance was generated through generous
            contributions of Darsana members. The state of the art ambulance was
            handed over to the society (EMSJSK) on 13th June 2013. 
          </p>
          <p className="m-0">
            This initiative was widely appreciated as a proof of Darsana's
            commitment to social causes.
          </p>
        </h2>
      </section>
      <FooterContainer
        social3="/social-32@2x.png"
        onAboutTextClick={onAboutTextClick}
        onPricingTextClick={onPricingTextClick}
        showPricing={false}
      />
    </div>
  );
};

export default AmbulanceToPalliativeCareU;
