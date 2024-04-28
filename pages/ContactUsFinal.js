import { useRouter } from "next/router";

const ContactUsFinal = () => {
  const router = useRouter();

  const onNavigationItemsContainerClick = () => {
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
    <div className="w-full relative bg-www-equalopp-org-1349x593-default-nero overflow-hidden flex flex-col items-end justify-start pt-0.5 pb-0 pr-[53px] pl-0 box-border gap-[178px] leading-[normal] tracking-[normal] mq750:gap-[89px] mq750:pr-[26px] mq750:box-border mq450:gap-[44px]">
      <main className="self-stretch flex flex-row items-start justify-end py-0 pr-11 pl-[47px] box-border max-w-full text-left text-3xl text-www-equalopp-org-1349x593-default-nero font-h3 lg:pl-[23px] lg:pr-[22px] lg:box-border">
        <div className="flex-1 flex flex-col items-end justify-start gap-[86px] max-w-full mq750:gap-[43px] mq450:gap-[21px]">
          <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[33px] pl-0 box-border max-w-full">
            <main className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] text-center text-sm text-gray1-100 font-h3">
              <div className="h-20 w-[220px] relative overflow-hidden shrink-0">
                <img
                  className="absolute h-[calc(100%_-_16px)] top-[8px] bottom-[8px] left-[18px] max-h-full w-[164.4px] object-contain"
                  alt=""
                  src="/image-32@2x.png"
                />
              </div>
              <div className="flex flex-col items-start justify-start pt-5 px-0 pb-0 box-border max-w-full">
                <div className="flex flex-row items-start justify-start">
                  <div
                    className="rounded-sm flex flex-row items-start justify-start pt-2.5 px-4 pb-2 cursor-pointer text-black border-b-[1px] border-solid border-skyblue"
                    onClick={onNavigationItemsContainerClick}
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
            </main>
          </div>
          <div className="w-[1245px] flex flex-row items-start justify-start gap-[110px] max-w-full lg:flex-wrap mq750:gap-[55px] mq450:gap-[27px]">
            <div className="w-[517px] rounded-3xl [background:linear-gradient(180.03deg,_#6ab5df,_#e4f1f9)] overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[31px] pb-[273px] pr-3.5 pl-[31px] box-border gap-[28px] min-w-[517px] max-w-full lg:flex-1 mq750:pt-5 mq750:pb-[177px] mq750:box-border mq750:min-w-full">
              <div className="w-[517px] h-[753px] relative rounded-3xl [background:linear-gradient(180.03deg,_#6ab5df,_#e4f1f9)] hidden max-w-full" />
              <div className="flex flex-row items-start justify-start pt-0 px-[7px] pb-[11px] text-9xl">
                <div className="relative tracking-[1.5px] leading-[18px] capitalize font-semibold z-[1] mq450:text-3xl mq450:leading-[14px]">
                  Get in Touch
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-1 box-border max-w-full">
                <div className="flex-1 flex flex-col items-start justify-start gap-[18px] max-w-full">
                  <div className="relative tracking-[1.5px] leading-[18px] capitalize font-semibold inline-block min-w-[88px] z-[1] mq450:text-lg mq450:leading-[14px]">{`Visit Us `}</div>
                  <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-0.5 box-border max-w-full text-base">
                    <div className="flex-1 relative tracking-[1.5px] leading-[18px] capitalize inline-block max-w-full z-[1]">
                      NSS College of Engineering,Agathethara Palakkad Kerala
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[354px] flex flex-row items-start justify-start py-0 px-1.5 box-border max-w-full">
                <div className="flex-1 flex flex-col items-start justify-start gap-[18px] max-w-full">
                  <div className="relative tracking-[1.5px] leading-[18px] capitalize font-semibold inline-block min-w-[122px] z-[1] mq450:text-lg mq450:leading-[14px]">
                    <span>Chat to Us</span>
                    <span className="text-6xl">{` `}</span>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-px box-border max-w-full text-lg">
                    <div className="flex-1 flex flex-col items-start justify-start gap-[13px] max-w-full">
                      <div className="relative tracking-[1.5px] leading-[18px] capitalize font-medium z-[1]">
                        Our friendly group is here to help !
                      </div>
                      <div className="relative text-base tracking-[1.5px] leading-[18px] lowercase whitespace-nowrap z-[1]">
                        infodarsana@gmail.com
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start pt-0 px-0 pb-1.5 gap-[16px]">
                <div className="flex flex-row items-start justify-start py-0 pr-0 pl-1.5">
                  <div className="flex flex-col items-start justify-start gap-[13px]">
                    <div className="relative tracking-[1.5px] leading-[18px] capitalize font-semibold inline-block min-w-[80px] z-[1] mq450:text-lg mq450:leading-[14px]">
                      <span>Call Us</span>
                      <span className="text-6xl">{` `}</span>
                    </div>
                    <div className="relative text-lg tracking-[1.5px] leading-[18px] capitalize font-medium z-[1]">
                      Monday - Friday
                    </div>
                  </div>
                </div>
                <div className="relative text-base tracking-[1.5px] leading-[18px] lowercase whitespace-nowrap z-[1]">
                  +91 99999999999
                </div>
              </div>
              <div className="w-[172px] flex flex-row items-start justify-start py-0 px-1.5 box-border">
                <div className="flex-1 flex flex-col items-start justify-start gap-[18px]">
                  <div className="relative tracking-[1.5px] leading-[18px] capitalize font-semibold z-[1] mq450:text-lg mq450:leading-[14px]">
                    <span>Social Media</span>
                    <span className="text-6xl">{` `}</span>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-px">
                    <div className="flex-1 rounded-3xl flex flex-row items-start justify-between gap-[20px] z-[1]">
                      <img
                        className="h-6 w-6 relative object-cover min-h-[24px]"
                        alt=""
                        src="/youtube@2x.png"
                      />
                      <img
                        className="h-6 w-6 relative object-cover min-h-[24px]"
                        alt=""
                        src="/instagram-circle@2x.png"
                      />
                      <img
                        className="h-6 w-6 relative object-cover min-h-[24px]"
                        alt=""
                        src="/linkedin@2x.png"
                      />
                      <img
                        className="h-6 w-6 relative object-cover min-h-[24px]"
                        alt=""
                        src="/facebook@2x.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[60px] min-w-[402px] max-w-full text-lg text-black mq750:gap-[30px] mq750:min-w-full">
              <div className="self-stretch flex flex-col items-start justify-start gap-[6px] max-w-full">
                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-px pl-0.5 box-border max-w-full">
                  <div className="flex-1 flex flex-row items-start justify-start gap-[15px] max-w-full mq750:flex-wrap">
                    <div className="flex-1 flex flex-col items-start justify-start gap-[26px] min-w-[195px]">
                      <div className="self-stretch h-[84px] flex flex-col items-start justify-start gap-[6px]">
                        <div className="relative tracking-[1.5px] leading-[18px] capitalize font-medium inline-block min-w-[104px]">
                          first Name
                        </div>
                        <div className="self-stretch flex-1 relative rounded-smi bg-www-equalopp-org-1349x593-default-nero border-[2px] border-solid border-lightgray" />
                      </div>
                      <div className="w-[59px] flex flex-row items-start justify-start py-0 px-px box-border">
                        <div className="flex-1 relative tracking-[1.5px] leading-[18px] capitalize font-medium">
                          {" "}
                          Email
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start gap-[6px] min-w-[195px]">
                      <div className="relative tracking-[1.5px] leading-[18px] capitalize font-medium inline-block min-w-[101px]">
                        Last Name
                      </div>
                      <div className="self-stretch h-[60px] relative rounded-smi bg-www-equalopp-org-1349x593-default-nero box-border border-[2px] border-solid border-lightgray" />
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-[286px] flex flex-col items-start justify-start pt-0 px-0 pb-2.5 box-border gap-[26px] max-w-full">
                  <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-0.5 box-border max-w-full">
                    <img
                      className="h-[57px] flex-1 relative rounded-smi max-w-full overflow-hidden"
                      alt=""
                      src="/rectangle-2364.svg"
                    />
                  </div>
                  <div className="self-stretch flex-1 flex flex-row items-start justify-start pt-0 pb-[5px] pr-px pl-0.5 box-border max-w-full">
                    <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[6px] max-w-full">
                      <div className="relative tracking-[1.5px] leading-[18px] capitalize font-medium">
                        Phone Number
                      </div>
                      <img
                        className="self-stretch flex-1 relative rounded-smi max-w-full overflow-hidden max-h-full"
                        alt=""
                        src="/rectangle-2374.svg"
                      />
                    </div>
                  </div>
                  <div className="self-stretch h-[81px] flex flex-col items-start justify-start gap-[6px]">
                    <div className="relative tracking-[1.5px] leading-[18px] capitalize font-medium inline-block min-w-[72px]">
                      Subject
                    </div>
                    <img
                      className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full"
                      alt=""
                      src="/rectangle-2374.svg"
                    />
                  </div>
                </div>
                <div className="self-stretch h-[125px] flex flex-row items-start justify-start py-0 pr-1 pl-0.5 box-border max-w-full">
                  <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[6px] max-w-full">
                    <div className="relative tracking-[1.5px] leading-[18px] capitalize font-medium inline-block min-w-[85px]">
                      message
                    </div>
                    <img
                      className="self-stretch flex-1 relative rounded-smi max-w-full overflow-hidden max-h-full"
                      alt=""
                      src="/rectangle-2369.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start py-0 px-0.5 box-border max-w-full">
                <div className="flex flex-row items-start justify-start gap-[15px] max-w-full mq750:flex-wrap">
                  <div className="bg-www-equalopp-org-1349x593-default-nero overflow-hidden flex flex-row items-end justify-start gap-[15px] max-w-full">
                    <img
                      className="h-5 w-5 relative rounded-10xs min-h-[20px] shrink-0 [debug_commit:1de1738]"
                      alt=""
                      src="/rectangle-2365.svg"
                    />
                    <div className="relative tracking-[1.5px] leading-[18px] font-medium shrink-0 [debug_commit:1de1738]">
                      I understand and agree to the Privacy Policy
                    </div>
                  </div>
                  <div className="relative tracking-[1.5px] leading-[18px] capitalize font-medium inline-block min-w-[85px]">
                    message
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-px pl-0.5 box-border max-w-full text-www-equalopp-org-1349x593-default-nero">
                <div className="flex-1 rounded-3xs bg-cornflowerblue box-border flex flex-row items-start justify-start pt-5 px-[230px] pb-[19px] max-w-full border-[1px] border-solid border-lightgray mq750:pl-[115px] mq750:pr-[115px] mq750:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
                  <img
                    className="h-[61px] w-[615px] relative rounded-3xs hidden max-w-full"
                    alt=""
                    src="/rectangle-2370.svg"
                  />
                  <div className="relative tracking-[1.5px] leading-[18px] capitalize font-medium z-[1]">
                    <span>Send</span>
                    <span className="text-black">{` `}</span>
                    <span>Message</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="self-stretch bg-www-equalopp-org-1349x593-default-nero flex flex-row items-end justify-between pt-5 pb-6 pr-[29px] pl-0 box-border max-w-full gap-[20px] text-left text-base text-black font-h3 lg:flex-wrap lg:pl-5 lg:pr-5 lg:box-border">
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
                src="/social3@2x.png"
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

export default ContactUsFinal;
