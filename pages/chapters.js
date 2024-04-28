import { useRouter } from "next/router";

const Chapters = () => {
  const router = useRouter();

  const onNavigationItemsClick = () => {
    router.push("/");
  };

  const onWhyADSTextClick = () => {
    router.push("/Product");
  };

  const onBangaloreContainerClick = () => {
    router.push("/BangaloreChapters");
  };

  const onPalkkadContainerClick = () => {
    router.push("/PalkkadChapters");
  };

  const onCalicutImageContainerClick = () => {
    router.push("/CalicutChapters");
  };

  const onOmanCardContainerClick = () => {
    router.push("/OmanChapters");
  };

  const onSaudiCardClick = () => {
    router.push("/SaudiChapters");
  };

  const onUaeImageContainerClick = () => {
    router.push("/UAEChapters");
  };

  const onChapterRow3Click = () => {
    router.push("/NorthAmericaChapters");
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
    const anchor = document.querySelector("[data-scroll-to='navbar']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  };

  return (
    <div className="w-full relative bg-www-equalopp-org-1349x593-default-nero overflow-hidden flex flex-col items-start justify-start gap-[58px] leading-[normal] tracking-[normal] mq750:gap-[29px]">
      <header
        className="self-stretch bg-www-equalopp-org-1349x593-default-nero flex flex-row items-start justify-between py-0.5 pr-[130px] pl-[47px] box-border top-[0] z-[99] sticky max-w-full gap-[20px] text-center text-sm text-gray1-100 font-h3 mq450:pr-5 mq450:box-border mq750:pl-[23px] mq750:pr-[65px] mq750:box-border"
        data-scroll-to="navbar"
      >
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
      <main className="self-stretch flex flex-row items-start justify-end pt-0 px-12 pb-[91px] box-border max-w-full lg:pl-6 lg:pr-6 lg:pb-[59px] lg:box-border mq750:pb-[38px] mq750:box-border">
        <section className="w-[1318px] flex flex-col items-start justify-start gap-[48px] max-w-full text-left text-17xl text-darkslategray-300 font-h3 mq750:gap-[24px]">
          <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[48px_54px] min-h-[668px] max-w-full mq750:gap-[27px]">
            <div
              className="h-[310px] w-[402px] bg-www-equalopp-org-1349x593-default-nero box-border overflow-hidden shrink-0 flex flex-col items-start justify-start pt-0 px-0 pb-[26px] gap-[26px] max-w-full cursor-pointer border-[1px] border-solid border-darkgray-300"
              onClick={onBangaloreContainerClick}
            >
              <img
                className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                loading="lazy"
                alt=""
                src="/bangalore@2x.png"
              />
              <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[53px]">
                <div className="w-[165px] relative font-semibold [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical] shrink-0 mq1050:text-10xl mq450:text-3xl">
                  Banglore
                </div>
              </div>
            </div>
            <div
              className="h-[310px] w-[402px] bg-www-equalopp-org-1349x593-default-nero box-border overflow-hidden shrink-0 flex flex-col items-end justify-start pt-0 px-0 pb-[26px] gap-[26px] max-w-full cursor-pointer text-center border-[1px] border-solid border-darkgray-300"
              onClick={onPalkkadContainerClick}
            >
              <img
                className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                loading="lazy"
                alt=""
                src="/palkkad@2x.png"
              />
              <div className="w-[369px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
                <div className="w-[165px] relative font-semibold [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical] shrink-0 mq1050:text-10xl mq450:text-3xl">
                  Palkkad
                </div>
              </div>
            </div>
            <div
              className="h-[310px] w-[402px] bg-www-equalopp-org-1349x593-default-nero box-border overflow-hidden shrink-0 flex flex-col items-start justify-start pt-0 px-0 pb-[26px] gap-[26px] max-w-full cursor-pointer border-[1px] border-solid border-darkgray-300"
              onClick={onCalicutImageContainerClick}
            >
              <img
                className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                loading="lazy"
                alt=""
                src="/calicut@2x.png"
              />
              <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[53px]">
                <div className="w-[165px] relative font-semibold [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical] shrink-0 mq1050:text-10xl mq450:text-3xl">
                  Calicut
                </div>
              </div>
            </div>
            <div
              className="h-[310px] w-[402px] bg-www-equalopp-org-1349x593-default-nero box-border overflow-hidden shrink-0 flex flex-col items-start justify-start pt-0 px-0 pb-[26px] gap-[26px] max-w-full cursor-pointer border-[1px] border-solid border-darkgray-300"
              onClick={onOmanCardContainerClick}
            >
              <img
                className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                loading="lazy"
                alt=""
                src="/oman-chapter-image@2x.png"
              />
              <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[53px]">
                <div className="w-[165px] relative font-semibold [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical] shrink-0 mq1050:text-10xl mq450:text-3xl">
                  Oman
                </div>
              </div>
            </div>
            <div
              className="h-[310px] w-[402px] bg-www-equalopp-org-1349x593-default-nero box-border overflow-hidden shrink-0 flex flex-col items-end justify-start pt-0 px-0 pb-[26px] gap-[26px] max-w-full cursor-pointer text-center border-[1px] border-solid border-darkgray-300"
              onClick={onSaudiCardClick}
            >
              <img
                className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                loading="lazy"
                alt=""
                src="/saudi-image@2x.png"
              />
              <div className="w-[369px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
                <div className="w-[165px] relative font-semibold [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical] shrink-0 mq1050:text-10xl mq450:text-3xl">
                  Saudi
                </div>
              </div>
            </div>
            <div
              className="h-[310px] w-[402px] bg-www-equalopp-org-1349x593-default-nero box-border overflow-hidden shrink-0 flex flex-col items-start justify-start pt-0 px-0 pb-[26px] gap-[26px] max-w-full cursor-pointer border-[1px] border-solid border-darkgray-300"
              onClick={onUaeImageContainerClick}
            >
              <img
                className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                loading="lazy"
                alt=""
                src="/uae-chapter-image@2x.png"
              />
              <div className="w-[270px] h-[42px] hidden" />
              <div className="w-[388px] flex flex-row items-start justify-start py-0 px-[59px] box-border max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border">
                <div className="flex-1 relative font-semibold [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical] mq1050:text-10xl mq450:text-3xl">
                  UAE
                </div>
              </div>
            </div>
          </div>
          <div
            className="w-[402px] h-[310px] flex flex-row flex-wrap items-start justify-start max-w-full cursor-pointer"
            onClick={onChapterRow3Click}
          >
            <div className="self-stretch flex-1 bg-www-equalopp-org-1349x593-default-nero box-border overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[29px] gap-[26px] max-w-full border-[1px] border-solid border-darkgray-300">
              <img
                className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                loading="lazy"
                alt=""
                src="/chapter-north-america@2x.png"
              />
              <div className="w-[245px] h-[39px] hidden" />
              <div className="self-stretch h-[39px] flex flex-row items-start justify-start py-0 pr-[79px] pl-[78px] box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
                <div className="self-stretch flex-1 relative leading-[39px] font-semibold overflow-hidden text-ellipsis whitespace-nowrap z-[1] mq1050:text-10xl mq1050:leading-[31px] mq450:text-3xl mq450:leading-[23px]">
                  North America
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
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
  );
};

export default Chapters;
