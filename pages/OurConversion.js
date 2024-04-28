import { useRouter } from "next/router";
import PageFooter from "../components/PageFooter";

const OurConversion = () => {
  const router = useRouter();

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

  const onNavigationItemsClick = () => {
    router.push("/");
  };

  const onWhyADSTextClick = () => {
    router.push("/Product");
  };

  return (
    <div className="w-full relative bg-www-equalopp-org-1349x593-default-nero flex flex-col items-start justify-start gap-[423px] leading-[normal] tracking-[normal] mq450:gap-[106px] mq725:gap-[211px]">
      <img
        className="self-stretch relative max-w-full overflow-hidden max-h-full hidden"
        alt=""
        src="/rectangle-34624349.svg"
      />
      <section className="self-stretch flex flex-col items-start justify-start gap-[165px] max-w-full text-center text-7xl text-darkslategray-300 font-montserrat mq450:gap-[41px] mq725:gap-[82px]">
        <header className="self-stretch bg-www-equalopp-org-1349x593-default-nero flex flex-row items-start justify-between py-0.5 pr-[120px] pl-[47px] box-border top-[0] z-[99] sticky max-w-full gap-[20px] text-center text-sm text-gray1-100 font-h3 mq450:pr-5 mq450:box-border mq725:pl-[23px] mq725:pr-[60px] mq725:box-border">
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
        <div className="flex flex-row items-start justify-start py-0 px-2 box-border max-w-full">
          <div className="w-[1316px] flex flex-row flex-wrap items-start justify-start gap-[48px] max-w-full mq725:gap-[24px]">
            <div className="flex-1 rounded-8xs box-border flex flex-col items-start justify-start py-0 pr-[34px] pl-0 min-w-[413px] max-w-full shrink-0 z-[1] border-[1px] border-solid border-silver mq725:min-w-full">
              <div className="self-stretch flex flex-row items-start justify-center pt-[165px] px-5 pb-[139px] box-border bg-[url('/image-15@2x.png')] bg-cover bg-no-repeat bg-[top] max-w-full mq450:pt-[107px] mq450:pb-[90px] mq450:box-border">
                <img
                  className="h-[354px] w-[600px] relative object-cover hidden max-w-full"
                  alt=""
                  src="/image-15@2x.png"
                />
                <img
                  className="h-[50px] w-[50px] relative object-contain z-[1]"
                  loading="lazy"
                  alt=""
                  src="/image-17@2x.png"
                />
              </div>
              <div className="self-stretch bg-www-equalopp-org-1349x593-default-nero flex flex-row items-center justify-center max-w-full [row-gap:20px] mq725:flex-wrap">
                <div className="flex flex-col items-start justify-start pt-[18px] pb-7 pr-4 pl-3.5">
                  <div className="flex flex-col items-center justify-start gap-[6px]">
                    <b className="relative leading-[101.1%] inline-block min-w-[33px] mq450:text-2xl mq450:leading-[21px]">
                      03
                    </b>
                    <h2 className="m-0 relative text-5xl leading-[101.1%] font-semibold font-inherit text-slateblue inline-block min-w-[50px] mq450:text-lgi mq450:leading-[19px]">
                      FEB
                    </h2>
                    <b className="relative text-4xl leading-[101.1%] inline-block min-w-[57px] mq450:text-lg mq450:leading-[19px]">
                      2023
                    </b>
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-center justify-center py-[15px] px-0 box-border min-w-[333px] max-w-full text-left text-5xl font-open-sans">
                  <h2 className="m-0 self-stretch relative text-inherit font-bold font-inherit [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:3] [-webkit-box-orient:vertical] mq450:text-lgi">
                    DARSANA WEBINAR 3 | എംജി സുരേഷ് കുമാർ | "കേരളത്തിന്‍റെ
                    ഊർജഭദ്രത - സാധ്യതകളും വെല്ലുവിള�
                  </h2>
                </div>
              </div>
            </div>
            <div className="flex-1 rounded-8xs box-border flex flex-col items-start justify-start py-0 pr-[34px] pl-0 min-w-[413px] max-w-full shrink-0 z-[1] border-[1px] border-solid border-silver mq725:min-w-full">
              <div className="self-stretch flex flex-row items-start justify-center py-[152px] pr-5 pl-[70px] box-border bg-[url('/ourconversion-heroimage-2@2x.png')] bg-cover bg-no-repeat bg-[top] max-w-full mq450:pt-[99px] mq450:pb-[99px] mq450:box-border">
                <img
                  className="h-[354px] w-[600px] relative object-cover hidden max-w-full"
                  alt=""
                  src="/ourconversion-heroimage-2@2x.png"
                />
                <img
                  className="h-[50px] w-[50px] relative object-contain z-[1]"
                  alt=""
                  src="/image-17@2x.png"
                />
              </div>
              <div className="self-stretch bg-www-equalopp-org-1349x593-default-nero flex flex-row items-center justify-center max-w-full [row-gap:20px] mq725:flex-wrap">
                <div className="flex flex-col items-start justify-start pt-[18px] pb-7 pr-4 pl-3.5">
                  <div className="flex flex-col items-center justify-start gap-[6px]">
                    <b className="relative leading-[101.1%] inline-block min-w-[33px] mq450:text-2xl mq450:leading-[21px]">
                      02
                    </b>
                    <h2 className="m-0 relative text-5xl leading-[101.1%] font-semibold font-inherit text-slateblue inline-block min-w-[50px] mq450:text-lgi mq450:leading-[19px]">
                      FEB
                    </h2>
                    <b className="relative text-4xl leading-[101.1%] inline-block min-w-[57px] mq450:text-lg mq450:leading-[19px]">
                      2023
                    </b>
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-center justify-center py-[15px] px-0 box-border min-w-[333px] max-w-full text-left text-5xl font-h3">
                  <h2 className="m-0 self-stretch relative text-inherit font-bold font-inherit [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:3] [-webkit-box-orient:vertical] mq450:text-lgi">
                    <p className="m-0">Socio Political Webinar series</p>
                    <p className="m-0">&nbsp;</p>
                    <p className="m-0">
                      Examining Feminism and social Realities
                    </p>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <PageFooter
        social1="/social3@2x.png"
        onAboutTextClick={onAboutTextClick}
        onFeaturesTextClick={onFeaturesTextClick}
        onPricingTextClick={onPricingTextClick}
        onGalleryTextClick={onGalleryTextClick}
        showPricing={false}
      />
    </div>
  );
};

export default OurConversion;
