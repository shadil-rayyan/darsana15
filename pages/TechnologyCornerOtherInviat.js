import { useRouter } from "next/router";
import FooterContainer from "../components/FooterContainer";

const TechnologyCornerOtherInviat = () => {
  const router = useRouter();

  const onAboutTextClick = () => {
    router.push("/ContactUsFinal");
  };

  const onPricingTextClick = () => {
    router.push("/Initiatives");
  };

  return (
    <div className="w-full relative bg-www-equalopp-org-1349x593-default-nero overflow-hidden flex flex-col items-end justify-start pt-0.5 pb-0 pr-8 pl-0 box-border gap-[688px] leading-[normal] tracking-[normal] mq450:gap-[172px] mq750:gap-[344px]">
      <div className="w-[1050px] flex-1 relative hidden max-w-full" />
      <section className="w-[1387px] flex flex-col items-start justify-start py-0 pr-0 pl-5 box-border gap-[104px] max-w-full text-center text-29xl text-black font-h3 mq450:gap-[26px] mq750:gap-[52px]">
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
        <div className="flex flex-row items-start justify-start pt-0 px-11 pb-12 box-border max-w-full lg:pl-[22px] lg:pr-[22px] lg:box-border mq1050:pb-[31px] mq1050:box-border mq450:pb-5 mq450:box-border">
          <div className="w-[1269px] flex flex-col items-end justify-start gap-[76px] max-w-full mq450:gap-[19px] mq750:gap-[38px]">
            <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[21px] box-border max-w-full">
              <h1 className="m-0 w-[894px] relative text-inherit leading-[58px] font-extrabold font-inherit inline-block shrink-0 max-w-full mq1050:text-19xl mq1050:leading-[46px] mq450:text-10xl mq450:leading-[35px]">
                Technology Corner
              </h1>
            </div>
            <img
              className="self-stretch relative max-w-full overflow-hidden max-h-full object-cover z-[1]"
              loading="lazy"
              alt=""
              src="/technology-corner-other-inviaties-hero-image@2x.png"
            />
          </div>
        </div>
        <h2 className="m-0 self-stretch relative text-5xl font-normal font-arial text-left mq450:text-lgi">
          <p className="[margin-block-start:0] [margin-block-end:1px]">
            Prof K Viswanathan, who was part of our Mechanical engineering
            department, was a leading light and a guide for many of the students
            during his tenure. He remained an influencer and a guide even after
            he retired from the college. Through his involvement at the IRTC, he
            had stamped a strong mark in alternative and sustainable approaches
            to engineering practices.
          </p>
          <p className="[margin-block-start:0] [margin-block-end:1px]">
            As a memorial to the beloved teacher, Darsana set up a technology
            corner at Palakkad district public library called Prof. K.
            Viswanathan Memorial Technology Corner. The technology corner has
            reference books in engineering, management, and related
            subjects.  The technology corner was inaugurated by Mr. K.D
            Prasenan, (Hon. MLA Alathur constituency). The facility is being
            utilized by students across the district.
          </p>
        </h2>
      </section>
      <FooterContainer
        social3="/social1@2x.png"
        onAboutTextClick={onAboutTextClick}
        onPricingTextClick={onPricingTextClick}
        showPricing={false}
      />
    </div>
  );
};

export default TechnologyCornerOtherInviat;
