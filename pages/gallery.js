import { useRouter } from "next/router";

const Gallery = () => {
  const router = useRouter();

  const onHomeLinkContainerClick = () => {
    router.push("/");
  };

  const onWhyADSTextClick = () => {
    router.push("/Product");
  };

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

  return (
    <div className="w-full relative bg-www-equalopp-org-1349x593-default-nero overflow-hidden flex flex-col items-start justify-start pt-0.5 px-0 pb-4 box-border gap-[172px] leading-[normal] tracking-[normal] text-center text-sm text-gray1-100 font-h3 lg:gap-[86px] mq750:gap-[43px] mq450:gap-[21px]">
      <div className="w-[1357px] flex flex-row items-start justify-start py-0 px-[47px] box-border max-w-full lg:pl-[23px] lg:pr-[23px] lg:box-border">
        <div className="flex-1 flex flex-col items-end justify-start gap-[26px] max-w-full">
          <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px]">
            <div className="h-20 w-[220px] relative overflow-hidden shrink-0">
              <img
                className="absolute h-[calc(100%_-_16px)] top-[8px] bottom-[8px] left-[18px] max-h-full w-[164.4px] object-cover"
                alt=""
                src="/image-32@2x.png"
              />
            </div>
            <div className="flex flex-col items-start justify-start pt-5 px-0 pb-0 box-border max-w-full">
              <div className="flex flex-row items-start justify-start">
                <div
                  className="rounded-sm flex flex-row items-start justify-start pt-2.5 px-4 pb-2 cursor-pointer text-black border-b-[1px] border-solid border-skyblue"
                  onClick={onHomeLinkContainerClick}
                >
                  <div className="relative font-medium inline-block min-w-[38px]">
                    Home
                  </div>
                </div>
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
                  <div
                    className="relative font-medium inline-block min-w-[50px] cursor-pointer"
                    onClick={onWhyADSTextClick}
                  >
                    Product
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start pt-[17.5px] px-0 pb-0 text-lg text-www-equalopp-org-1349x593-default-nero">
              <div className="rounded-lg [background:linear-gradient(83.21deg,_#3b0066,_#175fc4_38.7%,_#00e1e7_83.79%,_#00f7e0_93.69%,_#00ffdd)] flex flex-row items-start justify-start py-3 px-6 whitespace-nowrap">
                <div className="relative font-medium inline-block min-w-[56px] whitespace-nowrap">
                  Sign In
                </div>
              </div>
            </div>
          </div>
          <div className="w-[1124px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-29xl text-black">
            <b className="w-[304px] relative leading-[58px] inline-block shrink-0 mq1050:text-19xl mq1050:leading-[46px] mq450:text-10xl mq450:leading-[35px]">
              {" "}
              Gallery
            </b>
          </div>
        </div>
      </div>
      <main className="w-[1407px] flex flex-col items-end justify-start py-0 pr-5 pl-0 box-border gap-[59px] max-w-full mq750:gap-[29px]">
        <div className="w-[1370px] flex flex-row items-start justify-end pt-0 px-[29px] pb-3 box-border max-w-full">
          <div className="flex-1 grid flex-row items-start justify-start gap-[32px] max-w-full grid-cols-[repeat(4,_minmax(228px,_1fr))] mq750:gap-[16px] mq750:grid-cols-[minmax(228px,_1fr)] mq1050:justify-center mq1050:grid-cols-[repeat(2,_minmax(228px,_395px))]">
            <img
              className="relative max-w-full overflow-hidden max-h-full object-contain min-h-[228px] mq750:w-full"
              loading="lazy"
              alt=""
              src="/image-48@2x.png"
            />
            <img
              className="relative max-w-full overflow-hidden max-h-full object-contain min-h-[228px] mq750:w-full"
              loading="lazy"
              alt=""
              src="/image-53@2x.png"
            />
            <img
              className="relative max-w-full overflow-hidden max-h-full object-contain min-h-[228px] mq750:w-full"
              loading="lazy"
              alt=""
              src="/image-501@2x.png"
            />
            <img
              className="relative max-w-full overflow-hidden max-h-full object-contain min-h-[228px] mq750:w-full"
              loading="lazy"
              alt=""
              src="/image-47@2x.png"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[29px] pl-7 box-border max-w-full">
          <div className="flex-1 flex flex-col items-start justify-start gap-[32px] max-w-full mq750:gap-[16px]">
            <div className="self-stretch grid flex-row items-start justify-start pt-0 px-0 pb-5 gap-[41px] grid-cols-[repeat(4,_minmax(228px,_1fr))] mq750:gap-[20px] mq750:grid-cols-[minmax(228px,_1fr)] mq1050:justify-center mq1050:grid-cols-[repeat(2,_minmax(228px,_395px))]">
              <img
                className="relative max-w-full overflow-hidden max-h-full object-cover mq750:w-full"
                loading="lazy"
                alt=""
                src="/image-51@2x.png"
              />
              <img
                className="relative max-w-full overflow-hidden max-h-full object-cover mq750:w-full"
                loading="lazy"
                alt=""
                src="/644961d7557be-1682530775-1@2x.png"
              />
              <div className="h-[233px] flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border">
                <img
                  className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                  loading="lazy"
                  alt=""
                  src="/6449617741f5b-1682530679-1@2x.png"
                />
              </div>
              <div className="h-[233px] flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border">
                <img
                  className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                  loading="lazy"
                  alt=""
                  src="/647456850cab1-1685345925-1@2x.png"
                />
              </div>
            </div>
            <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[32px] max-w-full mq750:gap-[16px]">
              <div className="w-[322px] flex flex-col items-start justify-start pt-3 pb-0 pr-[18px] pl-0 box-border min-w-[209px] max-w-full">
                <img
                  className="self-stretch h-[204px] relative max-w-full overflow-hidden shrink-0 object-cover"
                  loading="lazy"
                  alt=""
                  src="/image-57@2x.png"
                />
              </div>
              <img
                className="h-[206px] w-[304px] relative object-cover"
                loading="lazy"
                alt=""
                src="/image-52@2x.png"
              />
              <img
                className="h-[228px] w-[304px] relative object-cover min-h-[228px]"
                loading="lazy"
                alt=""
                src="/6474581ddae63-1685346333-1@2x.png"
              />
              <div className="h-[228px] w-[304px] flex flex-col items-start justify-start pt-5 px-0 pb-0 box-border">
                <img
                  className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                  loading="lazy"
                  alt=""
                  src="/6474585faf645-1685346399-1@2x.png"
                />
              </div>
            </div>
            <div className="self-stretch flex flex-row flex-wrap items-end justify-center gap-[32px] max-w-full mq750:gap-[16px]">
              <div className="flex-1 flex flex-col items-start justify-start py-0 pr-[18px] pl-0 box-border min-w-[209px] max-w-full">
                <img
                  className="self-stretch h-[228px] relative max-w-full overflow-hidden shrink-0 object-cover"
                  loading="lazy"
                  alt=""
                  src="/64496197edc44-1682530711-1@2x.png"
                />
              </div>
              <div className="h-64 w-[304px] flex flex-col items-start justify-end pt-0 px-0 pb-7 box-border">
                <img
                  className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                  loading="lazy"
                  alt=""
                  src="/64bfa1de7824d-1690280414-1@2x.png"
                />
              </div>
              <div className="h-[243px] w-[304px] flex flex-col items-start justify-end pt-0 px-0 pb-[15px] box-border">
                <img
                  className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                  loading="lazy"
                  alt=""
                  src="/image-58@2x.png"
                />
              </div>
              <img
                className="h-[228px] w-[304px] relative object-cover"
                loading="lazy"
                alt=""
                src="/6474583f8f6ed-1685346367-1@2x.png"
              />
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[58px] max-w-full mq750:gap-[29px]">
          <div className="w-[1050px] flex flex-row items-start justify-start py-0 px-7 box-border max-w-full">
            <div className="flex-1 flex flex-row flex-wrap items-end justify-start gap-[32px] max-w-full mq750:gap-[16px]">
              <div className="flex-1 flex flex-col items-start justify-start py-0 pr-[18px] pl-0 box-border min-w-[209px] max-w-full">
                <img
                  className="self-stretch h-[217px] relative max-w-full overflow-hidden shrink-0 object-cover"
                  loading="lazy"
                  alt=""
                  src="/647459897a3de-1685346697-1@2x.png"
                />
              </div>
              <img
                className="h-[228px] w-[304px] relative object-cover"
                loading="lazy"
                alt=""
                src="/647457910a64c-1685346193-1@2x.png"
              />
              <div className="h-[217px] w-[304px] flex flex-col items-start justify-start">
                <img
                  className="self-stretch h-[165.4px] relative max-w-full overflow-hidden shrink-0 object-cover"
                  loading="lazy"
                  alt=""
                  src="/6470ffb867412-1685127096-1@2x.png"
                />
              </div>
            </div>
          </div>
          <footer className="self-stretch bg-www-equalopp-org-1349x593-default-nero flex flex-row items-end justify-between pt-5 pb-6 pr-[29px] pl-0 box-border max-w-full gap-[20px] text-left text-base text-black font-h3 mq1050:flex-wrap mq1050:pl-5 mq1050:pr-5 mq1050:box-border">
            <div className="h-[88px] w-[1387px] relative bg-www-equalopp-org-1349x593-default-nero hidden max-w-full" />
            <div className="h-11 w-[203px] flex flex-col items-start justify-start">
              <div className="w-[138.5px] h-11 relative z-[1] flex items-center justify-center">
                <img
                  className="w-full h-full z-[1] object-contain absolute left-[4px] top-[0px] [transform:scale(1.364)]"
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
                <div
                  className="relative inline-block min-w-[64px] cursor-pointer"
                  onClick={onFeaturesTextClick}
                >
                  About us
                </div>
                <div
                  className="self-stretch w-0 relative hidden cursor-pointer"
                  onClick={onPricingTextClick}
                />
                <div
                  className="relative inline-block min-w-[65px] cursor-pointer"
                  onClick={onGalleryTextClick}
                >
                  Chapters
                </div>
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
                <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                  <img
                    className="w-[25.1px] h-[22px] relative object-cover z-[1]"
                    alt=""
                    src="/social-3@2x.png"
                  />
                </div>
              </div>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
};

export default Gallery;
