import { useRouter } from "next/router";

const Product = () => {
  const router = useRouter();

  const onAboutTextClick = () => {
    router.push("/ContactUsFinal");
  };

  const onPricingTextClick = () => {
    router.push("/Initiatives");
  };

  const onFrameContainerClick = () => {
    router.push("/");
  };

  const onWhyADSTextClick = () => {
    const anchor = document.querySelector("[data-scroll-to='productList']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  };

  const onProductGContainerClick = () => {
    router.push("/ProductDetail");
  };

  return (
    <div className="w-full relative flex flex-row items-start justify-start leading-[normal] tracking-[normal] mq450:gap-[22px] mq725:gap-[44px]">
      <main
        className="h-[1191px] flex-1 relative bg-www-equalopp-org-1349x593-default-nero overflow-hidden max-w-full text-left text-mid text-base-color-gray-800 font-text-info mq1050:h-auto mq1050:min-h-[1191]"
        data-scroll-to="productList"
      >
        <div className="absolute top-[120px] left-[0px] box-border w-full overflow-hidden flex flex-row items-start justify-end py-2.5 px-10 max-w-full border-[1px] border-solid border-black">
          <div className="w-[65px] flex flex-row items-start justify-start py-[9px] px-3 box-border relative">
            <div className="relative leading-[22px] font-medium inline-block min-w-[35px] whitespace-nowrap z-[2]">
              ALL
            </div>
            <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
              <img
                className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-3xs max-w-full overflow-hidden max-h-full z-[1]"
                alt=""
                src="/-background.svg"
              />
              <img
                className="absolute top-[16px] left-[50px] w-[11px] h-[5px] object-contain z-[2]"
                alt=""
                src="/polygon-1.svg"
              />
            </div>
          </div>
          <div className="w-[429px] flex flex-row items-start justify-start pt-[9px] px-[16.3px] pb-[7px] box-border relative max-w-full ml-[-1px] text-base">
            <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
              <img
                className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-3xs max-w-full overflow-hidden max-h-full"
                alt=""
                src="/-background-1.svg"
              />
              <img
                className="absolute top-[7px] left-[388px] w-7 h-7 object-contain z-[1]"
                loading="lazy"
                alt=""
                src="/image-41@2x.png"
              />
            </div>
            <div className="w-[89.1px] relative tracking-[-0.2px] leading-[24px] inline-block shrink-0 z-[1]">
              Search
            </div>
          </div>
        </div>
        <footer className="absolute top-[1103px] left-[0px] bg-www-equalopp-org-1349x593-default-nero w-[1387px] flex flex-row items-end justify-between pt-5 pb-6 pr-[29px] pl-0 box-border max-w-full gap-[20px] text-left text-base text-black font-h3 mq1050:flex-wrap mq1050:pl-5 mq1050:pr-5 mq1050:box-border">
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
        <section className="absolute top-[0px] left-[0px] w-full flex flex-col items-start justify-start gap-[88px] max-w-full text-center text-sm text-gray1-100 font-h3 mq450:gap-[22px] mq725:gap-[44px]">
          <div className="self-stretch bg-www-equalopp-org-1349x593-default-nero overflow-x-auto flex flex-row items-start justify-between py-0.5 pr-[130px] pl-[47px] gap-[20px] z-[4] mq450:pr-5 mq450:box-border mq725:pl-[23px] mq725:pr-[65px] mq725:box-border">
            <div className="h-20 w-[220px] relative overflow-hidden shrink-0">
              <img
                className="absolute h-[calc(100%_-_16px)] top-[8px] bottom-[8px] left-[18px] max-h-full w-[164.4px] object-contain"
                alt=""
                src="/image-32@2x.png"
              />
            </div>
            <div className="flex flex-col items-start justify-start pt-5 px-0 pb-0">
              <div className="flex flex-row items-start justify-start [row-gap:20px] mq725:flex-wrap">
                <div
                  className="rounded-sm flex flex-row items-start justify-start pt-2.5 px-4 pb-2 cursor-pointer text-black border-b-[1px] border-solid border-skyblue"
                  onClick={onFrameContainerClick}
                >
                  <div className="relative font-medium inline-block min-w-[38px]">
                    Home
                  </div>
                </div>
                <div className="rounded-sm flex flex-row items-start justify-start py-2.5 px-4">
                  <div className="relative font-medium inline-block min-w-[58px]">
                    About Us
                  </div>
                </div>
                <div className="rounded-sm flex flex-row items-start justify-start py-2.5 px-4 gap-[8px]">
                  <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                    <div className="relative font-medium inline-block min-w-[84px]">
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
                    <div className="relative font-medium inline-block min-w-[95px]">
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
            <div className="flex flex-col items-start justify-start pt-[17.5px] px-0 pb-0 text-lg text-www-equalopp-org-1349x593-default-nero">
              <div className="rounded-lg [background:linear-gradient(83.21deg,_#3b0066,_#175fc4_38.7%,_#00e1e7_83.79%,_#00f7e0_93.69%,_#00ffdd)] flex flex-row items-start justify-start py-3 px-6 whitespace-nowrap">
                <div className="relative font-medium inline-block min-w-[56px]">
                  Sign In
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[21px] pl-5 box-border max-w-full text-left text-base text-gray1-600 font-text-info">
            <div className="w-[1237px] grid flex-row items-start justify-start gap-[17.7px] max-w-full grid-cols-[repeat(4,_minmax(222px,_1fr))] mq450:grid-cols-[minmax(222px,_1fr)] mq975:justify-center mq975:grid-cols-[repeat(2,_minmax(222px,_385px))]">
              <div className="flex flex-col items-start justify-start pt-[50px] px-0 pb-0">
                <div className="self-stretch flex flex-col items-start justify-start gap-[17px]">
                  <div
                    className="self-stretch rounded-8xs bg-www-equalopp-org-1349x593-default-nero flex flex-col items-end justify-start pt-[22px] pb-[57px] pr-px pl-0 gap-[38px] cursor-pointer border-[0px] border-solid border-darkgray-400 mq450:gap-[19px]"
                    onClick={onProductGContainerClick}
                  >
                    <img
                      className="self-stretch h-[358px] relative rounded-8xs max-w-full overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/rectangle-3066.svg"
                    />
                    <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[26px] pl-7">
                      <img
                        className="h-[198px] flex-1 relative max-w-full overflow-hidden object-cover z-[2]"
                        loading="lazy"
                        alt=""
                        src="/product-page-01@2x.png"
                      />
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[18.5px]">
                      <img
                        className="self-stretch h-[0.5px] relative rounded-8xs max-w-full overflow-hidden shrink-0 object-contain z-[1]"
                        loading="lazy"
                        alt=""
                        src="/vector-31.svg"
                      />
                      <div className="w-[248px] flex flex-row items-start justify-start py-0 px-7 box-border">
                        <div className="flex-1 relative tracking-[-0.2px] leading-[24px] font-medium z-[1]">
                          Men Long Sleeve
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch rounded-8xs bg-www-equalopp-org-1349x593-default-nero flex flex-col items-start justify-start pt-[43px] px-0 pb-[57px] gap-[17.6px] border-[0px] border-solid border-darkgray-400">
                    <img
                      className="self-stretch h-[358px] relative rounded-8xs max-w-full overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/rectangle-3066.svg"
                    />
                    <div className="self-stretch flex flex-row items-start justify-start py-0 px-[43px] mq450:pl-5 mq450:pr-5 mq450:box-border">
                      <img
                        className="h-[198.4px] flex-1 relative max-w-full overflow-hidden object-cover z-[2]"
                        loading="lazy"
                        alt=""
                        src="/product-page05@2x.png"
                      />
                    </div>
                    <img
                      className="self-stretch h-[0.5px] relative rounded-8xs max-w-full overflow-hidden shrink-0 object-contain z-[1]"
                      loading="lazy"
                      alt=""
                      src="/vector-3-41.svg"
                    />
                    <div className="flex flex-row items-start justify-start py-0 px-7">
                      <div className="relative tracking-[-0.2px] leading-[24px] font-medium z-[1]">{`cement making machine `}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start pt-[50px] px-0 pb-0">
                <div className="self-stretch flex flex-col items-end justify-start gap-[17px]">
                  <div className="self-stretch rounded-8xs bg-www-equalopp-org-1349x593-default-nero flex flex-col items-end justify-start pt-[22px] pb-[33px] pr-px pl-0 gap-[37.6px] border-[0px] border-solid border-darkgray-400 mq450:gap-[19px]">
                    <img
                      className="self-stretch h-[358px] relative rounded-8xs max-w-full overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/rectangle-3066.svg"
                    />
                    <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[42px] pl-[43px] mq450:pl-5 mq450:pr-5 mq450:box-border">
                      <img
                        className="h-[198.4px] flex-1 relative max-w-full overflow-hidden object-cover z-[2]"
                        loading="lazy"
                        alt=""
                        src="/product-page-04@2x.png"
                      />
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[18.5px]">
                      <img
                        className="self-stretch h-[0.5px] relative rounded-8xs max-w-full overflow-hidden shrink-0 object-contain z-[1]"
                        loading="lazy"
                        alt=""
                        src="/vector-31.svg"
                      />
                      <div className="w-[248px] flex flex-row items-start justify-start py-0 px-7 box-border">
                        <div className="flex-1 relative tracking-[-0.2px] leading-[24px] font-medium z-[1]">{`Polished seeds Bowl 250Ml `}</div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch rounded-8xs bg-www-equalopp-org-1349x593-default-nero flex flex-col items-start justify-start pt-[43px] px-[0.7px] pb-[57px] gap-[17.6px] border-[0px] border-solid border-darkgray-400">
                    <img
                      className="self-stretch h-[358px] relative rounded-8xs max-w-full overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/rectangle-3066.svg"
                    />
                    <div className="self-stretch flex flex-row items-start justify-start py-0 px-[42px] mq450:pl-5 mq450:pr-5 mq450:box-border">
                      <img
                        className="h-[198.4px] flex-1 relative max-w-full overflow-hidden object-cover z-[2]"
                        loading="lazy"
                        alt=""
                        src="/product-page07@2x.png"
                      />
                    </div>
                    <img
                      className="self-stretch h-[0.5px] relative rounded-8xs max-w-full overflow-hidden shrink-0 object-contain z-[1]"
                      loading="lazy"
                      alt=""
                      src="/vector-3-5.svg"
                    />
                    <div className="w-[244.6px] flex flex-row items-start justify-start py-0 pr-[26px] pl-[26.3px] box-border">
                      <div className="flex-1 relative tracking-[-0.2px] leading-[24px] font-medium z-[1]">
                        flour making machine
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end justify-start gap-[275px] mq450:gap-[137px]">
                <div className="w-[160.4px] h-[150px] flex flex-row items-start justify-end py-0 pr-[32.7px] pl-[33px] box-border">
                  <div className="self-stretch flex-1 flex flex-row items-start justify-start py-0 pr-3.5 pl-0 relative">
                    <div className="h-[303px] w-[295px] !m-[0] absolute bottom-[-225px] left-[-168.3px] rounded-8xs bg-www-equalopp-org-1349x593-default-nero box-border flex flex-col items-start justify-start pt-[22px] px-0 pb-[33px] gap-[37.6px] border-[0px] border-solid border-darkgray-400">
                      <img
                        className="self-stretch h-[358px] relative rounded-8xs max-w-full overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/rectangle-3066.svg"
                      />
                      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[43px] pl-[42.3px]">
                        <img
                          className="h-[198.4px] flex-1 relative max-w-full overflow-hidden object-cover z-[2]"
                          loading="lazy"
                          alt=""
                          src="/product-page-03@2x.png"
                        />
                      </div>
                      <div className="self-stretch flex flex-col items-start justify-start gap-[18.5px]">
                        <img
                          className="self-stretch h-[0.5px] relative rounded-8xs max-w-full overflow-hidden shrink-0 object-contain z-[1]"
                          loading="lazy"
                          alt=""
                          src="/vector-31.svg"
                        />
                        <div className="w-[248px] flex flex-row items-start justify-start py-0 px-7 box-border">
                          <div className="h-12 flex-1 relative tracking-[-0.2px] leading-[24px] font-medium inline-block z-[1]">
                            <p className="m-0">{`a cofee machine `}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <form className="m-0 h-[136px] flex-1 shadow-[0px_2px_4px_rgba(25,_33,_61,_0.08)] rounded-cards-small bg-www-equalopp-org-1349x593-default-nero box-border flex flex-col items-start justify-start py-dropdowns-paddings-pd-regular px-[7px] gap-[2px] z-[3] border-[1px] border-solid border-dropdowns-borders-br-color-1 mq450:h-[136px]">
                      <button className="cursor-pointer [border:none] p-2 bg-www-equalopp-org-1349x593-default-nero self-stretch rounded-dropdowns-default overflow-hidden flex flex-row items-center justify-start gap-[6px]">
                        <img
                          className="h-3.5 w-3.5 relative hidden"
                          alt=""
                          src="/social-media-icon-colorgoogle-sheets.svg"
                        />
                        <div className="flex flex-row items-start justify-start">
                          <div className="flex flex-row items-center justify-start">
                            <div className="relative text-xs leading-[16px] font-text-info text-titles-paragraphs-text-neutral text-left inline-block min-w-[63px]">
                              Electronics
                            </div>
                          </div>
                        </div>
                      </button>
                      <div className="rounded-dropdowns-default bg-www-equalopp-org-1349x593-default-nero overflow-hidden flex flex-row items-center justify-start py-dropdowns-paddings-pd-regular1 pr-[29px] pl-dropdowns-paddings-pd-regular1 gap-[6px]">
                        <img
                          className="h-3.5 w-3.5 relative hidden"
                          alt=""
                          src="/social-media-icon-colorairtable.svg"
                        />
                        <div className="flex flex-row items-start justify-start">
                          <div className="flex flex-row items-center justify-start">
                            <div className="relative text-xs leading-[16px] font-text-info text-titles-paragraphs-text-neutral text-left inline-block min-w-[28px]">
                              Gifts
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-dropdowns-default bg-www-equalopp-org-1349x593-default-nero overflow-hidden flex flex-row items-center justify-start py-dropdowns-paddings-pd-regular1 pr-[9px] pl-dropdowns-paddings-pd-regular1 gap-[6px]">
                        <img
                          className="h-3.5 w-3.5 relative hidden"
                          alt=""
                          src="/line-roundedcsv.svg"
                        />
                        <div className="flex flex-row items-start justify-start">
                          <div className="flex flex-row items-center justify-start">
                            <div className="relative text-xs leading-[16px] font-text-info text-titles-paragraphs-text-neutral text-left inline-block min-w-[48px]">
                              Farmer’s
                            </div>
                          </div>
                        </div>
                      </div>
                      <button className="cursor-pointer [border:none] py-dropdowns-paddings-pd-regular1 pr-[9px] pl-dropdowns-paddings-pd-regular1 bg-www-equalopp-org-1349x593-default-nero self-stretch rounded-dropdowns-default overflow-hidden flex flex-row items-center justify-start gap-[6px]">
                        <img className="h-3.5 w-3.5 relative hidden" alt="" />
                        <div className="flex flex-row items-start justify-start">
                          <div className="flex flex-row items-center justify-start">
                            <div className="relative text-xs leading-[16px] font-text-info text-titles-paragraphs-text-neutral text-left inline-block min-w-[62px]">
                              Agriculture
                            </div>
                          </div>
                        </div>
                      </button>
                    </form>
                  </div>
                </div>
                <div className="self-stretch rounded-8xs bg-www-equalopp-org-1349x593-default-nero flex flex-col items-start justify-start pt-[43px] px-0 pb-[57px] gap-[17.6px] border-[0px] border-solid border-darkgray-400">
                  <img
                    className="self-stretch h-[358px] relative rounded-8xs max-w-full overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/rectangle-3066.svg"
                  />
                  <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[43px] pl-[43.3px] mq450:pl-5 mq450:pr-5 mq450:box-border">
                    <img
                      className="h-[198.4px] flex-1 relative max-w-full overflow-hidden object-cover z-[2]"
                      loading="lazy"
                      alt=""
                      src="/product-page06@2x.png"
                    />
                  </div>
                  <img
                    className="self-stretch h-[0.5px] relative rounded-8xs max-w-full overflow-hidden shrink-0 object-contain z-[1]"
                    loading="lazy"
                    alt=""
                    src="/vector-3-41.svg"
                  />
                  <div className="w-[248px] flex flex-row items-start justify-start py-0 px-7 box-border">
                    <div className="flex-1 relative tracking-[-0.2px] leading-[24px] font-medium whitespace-pre-wrap z-[1]">{`              tractor `}</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start pt-[50px] px-0 pb-0">
                <div className="self-stretch flex flex-col items-start justify-start gap-[17px]">
                  <div className="self-stretch rounded-8xs bg-www-equalopp-org-1349x593-default-nero flex flex-col items-end justify-start pt-[22px] pb-[57px] pr-px pl-0 gap-[37.6px] border-[0px] border-solid border-darkgray-400 mq450:gap-[19px]">
                    <img
                      className="self-stretch h-[358px] relative rounded-8xs max-w-full overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/rectangle-3066.svg"
                    />
                    <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[42px] pl-[43px] mq450:pl-5 mq450:pr-5 mq450:box-border">
                      <img
                        className="h-[198.4px] flex-1 relative max-w-full overflow-hidden object-cover z-[2]"
                        loading="lazy"
                        alt=""
                        src="/product-page-02@2x.png"
                      />
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[18.5px]">
                      <img
                        className="self-stretch h-[0.5px] relative rounded-8xs max-w-full overflow-hidden shrink-0 object-contain z-[1]"
                        loading="lazy"
                        alt=""
                        src="/vector-31.svg"
                      />
                      <div className="w-[248px] flex flex-row items-start justify-start py-0 px-7 box-border">
                        <div className="flex-1 relative tracking-[-0.2px] leading-[24px] font-medium z-[1]">{`a rare flower plant `}</div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch rounded-8xs bg-www-equalopp-org-1349x593-default-nero flex flex-col items-start justify-start pt-[43px] px-0 pb-[33px] gap-[17.6px] border-[0px] border-solid border-darkgray-400">
                    <img
                      className="self-stretch h-[358px] relative rounded-8xs max-w-full overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/rectangle-3066.svg"
                    />
                    <div className="self-stretch flex flex-row items-start justify-start py-0 px-[43px] mq450:pl-5 mq450:pr-5 mq450:box-border">
                      <img
                        className="h-[198.4px] flex-1 relative max-w-full overflow-hidden object-cover z-[2]"
                        loading="lazy"
                        alt=""
                        src="/product-page08@2x.png"
                      />
                    </div>
                    <img
                      className="self-stretch h-[0.5px] relative rounded-8xs max-w-full overflow-hidden shrink-0 object-contain z-[1]"
                      loading="lazy"
                      alt=""
                      src="/vector-31.svg"
                    />
                    <div className="w-[248px] flex flex-row items-start justify-start py-0 px-7 box-border">
                      <div className="h-12 flex-1 relative tracking-[-0.2px] leading-[24px] font-medium inline-block z-[1]">
                        <p className="m-0">a grass cutting machine</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Product;
