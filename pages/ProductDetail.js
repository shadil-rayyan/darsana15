import { useRouter } from "next/router";

const ProductDetail = () => {
  const router = useRouter();

  const onAboutText1Click = () => {
    router.push("/ContactUsFinal");
  };

  const onPricingText1Click = () => {
    router.push("/Initiatives");
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
    <div className="w-full relative bg-www-equalopp-org-1349x593-default-nero overflow-hidden flex flex-col items-end justify-start pt-5 px-0 pb-0 box-border gap-[47px] leading-[normal] tracking-[normal] text-left text-base text-black font-h3 mq725:gap-[23px]">
      <header className="self-stretch flex flex-col items-start justify-start gap-[22px] max-w-full text-left text-base text-black font-h3">
        <div className="w-[1377.5px] flex flex-row items-end justify-between py-0 pr-5 pl-0 box-border gap-[20px] max-w-full">
          <div className="h-11 w-[203px] flex flex-col items-start justify-start">
            <div className="w-[138.5px] h-11 relative z-[5] flex items-center justify-center">
              <img
                className="w-full h-full z-[5] object-contain absolute left-[4px] top-[0px] [transform:scale(1.364)]"
                alt=""
                src="/divlogo@2x.png"
              />
            </div>
          </div>
          <div className="w-[582.5px] flex flex-col items-start justify-end pt-0 px-0 pb-2.5 box-border max-w-full">
            <div className="self-stretch flex flex-row items-start justify-between gap-[20px] z-[5]">
              <div
                className="relative inline-block min-w-[77px] whitespace-nowrap cursor-pointer"
                onClick={onAboutText1Click}
              >
                Contact us
              </div>
              <div className="relative inline-block min-w-[64px] whitespace-nowrap">
                About us
              </div>
              <div
                className="self-stretch w-0 relative hidden cursor-pointer"
                onClick={onPricingText1Click}
              />
              <div className="relative inline-block min-w-[65px]">Chapters</div>
              <div className="relative inline-block min-w-[99px] whitespace-nowrap">
                Eye magazine
              </div>
            </div>
          </div>
          <div className="w-[174px] flex flex-col items-start justify-end pt-0 px-0 pb-2.5 box-border">
            <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
              <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                <img
                  className="w-[13.1px] h-[22px] relative z-[5]"
                  alt=""
                  src="/social.svg"
                />
              </div>
              <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                <img
                  className="w-6 h-[22px] relative object-cover z-[5]"
                  alt=""
                  src="/social-11@2x.png"
                />
              </div>
              <img
                className="self-stretch w-[33.8px] relative max-h-full overflow-hidden shrink-0 min-h-[24px] z-[5]"
                alt=""
                src="/social-2.svg"
              />
              <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                <img
                  className="w-[25.1px] h-[22px] relative object-cover z-[5]"
                  alt=""
                  src="/social-31@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
        <header className="self-stretch box-border overflow-hidden flex flex-row items-start justify-start max-w-full text-left text-mid text-base-color-gray-800 font-text-info border-[1px] border-solid border-black">
          <div className="flex-1 box-border overflow-hidden flex flex-row items-start justify-end py-2.5 px-10 max-w-full z-[3] border-[1px] border-solid border-black">
            <div className="h-10 w-[65px] relative">
              <img
                className="absolute top-[0px] left-[0px] rounded-3xs w-full h-full z-[1]"
                alt=""
                src="/-background.svg"
              />
              <div className="absolute top-[0px] left-[0px] w-full h-full">
                <div className="absolute top-[9px] left-[12px] leading-[22px] font-medium inline-block w-[35px] min-w-[35px] whitespace-nowrap z-[2]">
                  ALL
                </div>
                <img
                  className="absolute top-[16px] left-[50px] w-[11px] h-[5px] object-contain hidden"
                  alt=""
                  src="/polygon-1.svg"
                />
                <div className="absolute top-[9px] left-[12px] leading-[22px] font-medium inline-block w-[35px] min-w-[35px] whitespace-nowrap z-[2]">
                  ALL
                </div>
                <div className="absolute top-[0px] left-[0px] w-full h-full">
                  <img
                    className="absolute top-[0px] left-[0px] rounded-3xs w-full h-full z-[1]"
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
            </div>
            <div className="h-10 w-[429px] relative max-w-full ml-[-1px] text-base">
              <img
                className="absolute top-[0px] left-[0px] rounded-3xs w-full h-full"
                alt=""
                src="/-background-1.svg"
              />
              <div className="absolute top-[0px] left-[0px] w-full flex flex-row items-start justify-start pt-[9px] px-[16.3px] pb-[7px] box-border max-w-full h-full">
                <div className="w-[89.1px] absolute !m-[0] bottom-[7px] left-[16.3px] tracking-[-0.2px] leading-[24px] inline-block z-[1]">
                  Search
                </div>
                <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
                  <div className="absolute top-[7px] left-[388px] w-7 h-7 bg-[url('/image-41@2x.png')] bg-cover bg-no-repeat bg-[top] z-[1]">
                    <img
                      className="absolute top-[0px] left-[0px] w-full h-full object-cover hidden"
                      alt=""
                      src="/image-41@2x.png"
                    />
                    <img
                      className="absolute top-[0px] left-[0px] w-full h-full object-cover z-[1]"
                      loading="lazy"
                      alt=""
                      src="/image-41@2x.png"
                    />
                  </div>
                  <img
                    className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-3xs max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/-background-1.svg"
                  />
                </div>
                <div className="w-[89.1px] relative tracking-[-0.2px] leading-[24px] inline-block shrink-0 z-[1]">
                  Search
                </div>
              </div>
            </div>
          </div>
        </header>
      </header>
      <main className="w-[1356px] flex flex-col items-end justify-start pt-0 pb-[136px] pr-0 pl-5 box-border gap-[55.3px] max-w-full text-left text-xl text-dark font-text-info mq450:pb-[57px] mq450:box-border mq725:gap-[28px] mq975:pb-[88px] mq975:box-border">
        <div className="w-[1004px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <div className="w-[748px] flex flex-row items-start justify-start gap-[38px] max-w-full mq725:flex-wrap mq975:gap-[19px]">
            <div className="flex-1 flex flex-col items-start justify-start gap-[32px] max-w-full mq450:gap-[16px]">
              <div className="w-[388px] flex flex-row items-start justify-start py-0 px-0.5 box-border max-w-full">
                <div className="flex-1 relative tracking-[-0.2px] leading-[28px] font-semibold inline-block max-w-full z-[5] mq450:text-base mq450:leading-[22px]">
                  Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[12.7px] max-w-full text-base text-gray-500">
                <div className="w-[223px] flex flex-row items-start justify-between gap-[20px]">
                  <div className="relative leading-[15.7px] inline-block min-w-[43px] z-[2]">{`Price: `}</div>
                  <div className="relative leading-[15.7px] text-gray-600 inline-block min-w-[83px] z-[5]">
                    Negotiable
                  </div>
                </div>
                <div className="self-stretch h-px relative">
                  <div className="absolute top-[0px] left-[0px] box-border w-full h-full z-[2] border-t-[1px] border-solid border-base-color-gray-200" />
                  <div className="absolute top-[0px] left-[0px] box-border w-full h-full z-[5] border-t-[1px] border-solid border-base-color-gray-200" />
                </div>
                <div className="w-[255px] flex flex-row items-start justify-between gap-[20px]">
                  <div className="flex flex-col items-start justify-start gap-[13.2px]">
                    <div className="h-[15.7px] relative leading-[18.91px] inline-block shrink-0 min-w-[42px] z-[2]">{`Type: `}</div>
                    <div className="h-[15.7px] relative leading-[18.91px] inline-block shrink-0 min-w-[66px] z-[2]">{`Material: `}</div>
                    <div className="h-[15.7px] relative leading-[18.91px] inline-block shrink-0 min-w-[57px] z-[5]">{`Design: `}</div>
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[13.2px] text-gray-600">
                    <div className="h-[15.7px] relative leading-[18.91px] whitespace-pre-wrap inline-block shrink-0 min-w-[108px] z-[2]">
                      Classic shoes
                    </div>
                    <div className="h-[15.7px] relative leading-[18.91px] inline-block shrink-0 min-w-[115px] z-[2]">
                      Plastic material
                    </div>
                    <div className="h-[15.7px] relative leading-[18.91px] inline-block shrink-0 min-w-[95px] z-[2]">
                      Modern nice
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-px relative">
                  <div className="absolute top-[0px] left-[0px] box-border w-full h-full z-[2] border-t-[1px] border-solid border-base-color-gray-200" />
                  <div className="absolute top-[0px] left-[0px] box-border w-full h-full z-[5] border-t-[1px] border-solid border-base-color-gray-200" />
                </div>
                <div className="flex flex-row items-start justify-start gap-[27px] max-w-full mq450:flex-wrap">
                  <div className="flex flex-col items-start justify-start gap-[29px]">
                    <div className="relative leading-[15.7px] inline-block min-w-[113px] z-[5]">{`Customization: `}</div>
                    <div className="flex flex-col items-start justify-start gap-[13.3px]">
                      <div className="h-[15.7px] relative leading-[18.91px] inline-block shrink-0 min-w-[83px] z-[2]">{`Protection: `}</div>
                      <div className="h-[15.7px] relative leading-[18.91px] inline-block shrink-0 min-w-[73px] z-[2]">{`Warranty: `}</div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[13.3px] text-gray-600">
                    <div className="h-[31.4px] relative inline-block shrink-0 z-[5]">
                      <p className="m-0">{`Customized logo and `}</p>
                      <p className="m-0">design custom packages</p>
                    </div>
                    <div className="h-[15.7px] relative leading-[18.91px] inline-block shrink-0 min-w-[104px] z-[2]">
                      Refund Policy
                    </div>
                    <div className="h-[15.7px] relative leading-[18.91px] inline-block shrink-0 z-[2]">{`2 years full warranty `}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[280px] flex flex-col items-start justify-start pt-1.5 px-0 pb-0 box-border min-w-[280px] text-base text-gray-500 mq725:flex-1">
              <div className="self-stretch shadow-[0px_1px_2px_rgba(56,_56,_56,_0.08)] rounded-md bg-www-equalopp-org-1349x593-default-nero flex flex-row items-start justify-start relative z-[2] border-[1px] border-solid border-gray-300">
                <div className="self-stretch w-[280px] relative shadow-[0px_1px_2px_rgba(56,_56,_56,_0.08)] rounded-md bg-www-equalopp-org-1349x593-default-nero box-border hidden z-[0] border-[1px] border-solid border-gray-300" />
                <div className="flex-1 shadow-[0px_1px_2px_rgba(56,_56,_56,_0.08)] rounded-md bg-www-equalopp-org-1349x593-default-nero flex flex-col items-start justify-start pt-3.5 pb-12 pr-[13px] pl-[15px] gap-[13px] z-[5] border-[1px] border-solid border-gray-300">
                  <img className="w-5 h-[16.6px] relative hidden" alt="" />
                  <img className="w-5 h-[16.6px] relative hidden" alt="" />
                  <div className="w-[182px] h-5 relative tracking-[-0.2px] leading-[24px] hidden shrink-0">
                    Palakkad,Kerala,India
                  </div>
                  <div className="self-stretch h-px relative box-border hidden border-t-[1px] border-solid border-base-color-gray-200" />
                  <div className="relative tracking-[-0.2px] leading-[19.9px] text-dark hidden min-w-[61px]">
                    Supplier
                  </div>
                  <div className="relative tracking-[-0.2px] leading-[19.9px] text-dark hidden">
                    Guanjoi Trading LLC
                  </div>
                  <div className="w-12 h-[39.7px] relative hidden text-9xl text-cadetblue">
                    <div className="absolute top-[0px] left-[0px] rounded bg-paleturquoise w-full h-full" />
                    <div className="absolute top-[9.9px] left-[14px] tracking-[-0.2px] leading-[19.9px] font-semibold inline-block w-[19px] h-[19.9px] min-w-[19px] mq450:text-3xl mq450:leading-[16px]">
                      R
                    </div>
                  </div>
                  <div className="w-[182px] h-5 relative tracking-[-0.2px] leading-[24px] hidden shrink-0 whitespace-nowrap">
                    +91 9999999999
                  </div>
                  <div className="w-[182px] relative tracking-[-0.2px] leading-[24px] hidden">
                    Shadil Rayan
                  </div>
                  <div className="relative tracking-[-0.2px] leading-[20px] hidden whitespace-nowrap">
                    ShadilRayan@gmail.com
                  </div>
                  <img
                    className="w-[22px] h-[22px] relative hidden"
                    alt=""
                    src="/near-me.svg"
                  />
                  <img
                    className="w-[22px] h-[22px] relative hidden"
                    alt=""
                    src="/account-circle.svg"
                  />
                  <img
                    className="w-[22px] h-[22px] relative hidden"
                    alt=""
                    src="/call.svg"
                  />
                  <img
                    className="w-[22px] h-[22px] relative hidden"
                    alt=""
                    src="/mail.svg"
                  />
                  <div className="w-[280px] h-60 relative shadow-[0px_1px_2px_rgba(56,_56,_56,_0.08)] rounded-md bg-www-equalopp-org-1349x593-default-nero box-border hidden border-[1px] border-solid border-gray-300" />
                  <div className="self-stretch flex flex-col items-start justify-start gap-[16.6px] text-dark">
                    <div className="flex flex-row items-start justify-start gap-[11px]">
                      <button className="cursor-pointer [border:none] py-[9.9px] px-3.5 bg-paleturquoise w-12 rounded flex flex-row items-start justify-start box-border z-[1] hover:bg-powderblue">
                        <div className="h-[39.7px] w-12 relative rounded bg-paleturquoise hidden" />
                        <div className="relative text-9xl tracking-[-0.2px] leading-[19.9px] font-semibold font-text-info text-cadetblue text-left inline-block min-w-[19px] z-[1] mq450:text-3xl mq450:leading-[16px]">
                          R
                        </div>
                      </button>
                      <div className="flex flex-col items-start justify-start">
                        <div className="relative tracking-[-0.2px] leading-[19.9px] inline-block min-w-[61px] shrink-0 [debug_commit:1de1738] z-[1]">
                          Supplier
                        </div>
                        <div className="flex flex-row items-start justify-start pt-0 px-0 pb-0">
                          <div className="mt-[-0.0999999999985448px] relative tracking-[-0.2px] leading-[19.9px] shrink-0 [debug_commit:1de1738] z-[1]">
                            Guanjoi Trading LLC
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-px text-gray-500">
                      <div className="flex-1 flex flex-col items-start justify-start gap-[4.4px]">
                        <div className="self-stretch h-px relative box-border z-[1] border-t-[1px] border-solid border-base-color-gray-200" />
                        <div className="w-[229px] flex flex-col items-start justify-start gap-[7.9px]">
                          <div className="self-stretch flex flex-row items-start justify-end py-0 px-px">
                            <div className="w-[182px] relative tracking-[-0.2px] leading-[20px] inline-block shrink-0 z-[1]">
                              Palakkad,Kerala,India
                            </div>
                          </div>
                          <div className="self-stretch flex flex-row items-start justify-start gap-[27px]">
                            <div className="flex flex-col items-start justify-start pt-[4.4px] px-0 pb-0">
                              <img
                                className="w-5 h-[16.6px] relative z-[1]"
                                alt=""
                              />
                            </div>
                            <div className="flex-1 relative tracking-[-0.2px] leading-[24px] z-[6]">
                              Shadil Rayan
                            </div>
                          </div>
                          <div className="self-stretch flex flex-row items-start justify-start gap-[27px]">
                            <img
                              className="h-[16.6px] w-5 relative z-[1]"
                              alt=""
                            />
                            <div className="flex-1 relative tracking-[-0.2px] leading-[20px] whitespace-nowrap z-[6]">
                              +91 9999999999
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-end py-0 px-5">
                    <div className="relative tracking-[-0.2px] leading-[20px] whitespace-nowrap z-[6]">
                      ShadilRayan@gmail.com
                    </div>
                  </div>
                </div>
                <div className="h-[396px] w-[1180px] absolute !m-[0] bottom-[-118px] left-[-878px] text-gray-600">
                  <div className="absolute top-[21px] left-[0px] rounded-md bg-www-equalopp-org-1349x593-default-nero box-border w-full h-[375px] border-[1px] border-solid border-gray-300">
                    <div className="absolute top-[0px] left-[0px] rounded-md bg-www-equalopp-org-1349x593-default-nero box-border w-full h-full hidden border-[1px] border-solid border-gray-300" />
                    <img
                      className="absolute top-[344px] left-[410px] w-[430px] h-px z-[1]"
                      alt=""
                      src="/info.svg"
                    />
                    <div className="absolute right-[441px] bottom-[102.3px] inline-block w-[189px] h-[31.4px] z-[2]">
                      <p className="m-0">{`Customized logo and `}</p>
                      <p className="m-0">design custom packages</p>
                    </div>
                    <div className="absolute bottom-[118px] left-[410px] leading-[15.7px] text-gray-500 inline-block w-[113px] h-[15.7px] min-w-[113px] z-[2]">{`Customization: `}</div>
                    <div className="absolute bottom-[160.2px] left-[410px] leading-[18.91px] text-gray-500 inline-block w-[57px] h-[15.7px] min-w-[57px] z-[2]">{`Design: `}</div>
                    <div className="absolute top-[99px] right-[547px] leading-[18.91px] inline-block w-[83px] h-[15.7px] min-w-[83px] z-[2]">
                      Negotiable
                    </div>
                    <div className="absolute top-[11px] right-[384px] text-xl tracking-[-0.2px] leading-[28px] font-semibold text-dark inline-block w-96 h-14 z-[2] mq450:text-base mq450:leading-[22px]">
                      Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle
                    </div>
                    <img
                      className="absolute top-[0px] left-[0px] w-full h-full"
                      alt=""
                      src="/contentmain.svg"
                    />
                    <div className="absolute bottom-[44.3px] left-[410px] leading-[18.91px] text-gray-500 inline-block w-[73px] h-[15.7px] min-w-[73px] z-[5]">{`Warranty: `}</div>
                    <div className="absolute right-[475px] bottom-[44.3px] leading-[18.91px] inline-block w-[155px] h-[15.7px] z-[5]">{`2 years full warranty `}</div>
                    <div className="absolute bottom-[73.3px] left-[410px] leading-[18.91px] text-gray-500 inline-block w-[83px] h-[15.7px] min-w-[83px] z-[5]">{`Protection: `}</div>
                    <div className="absolute right-[526px] bottom-[73.3px] leading-[18.91px] inline-block w-[104px] h-[15.7px] min-w-[104px] z-[5]">
                      Refund Policy
                    </div>
                    <div className="absolute right-[535px] bottom-[160.2px] leading-[18.91px] inline-block w-[95px] h-[15.7px] min-w-[95px] z-[5]">
                      Modern nice
                    </div>
                    <div className="absolute top-[170.2px] left-[410px] leading-[18.91px] text-gray-500 inline-block w-[66px] h-[15.7px] min-w-[66px] z-[5]">{`Material: `}</div>
                    <div className="absolute top-[170.2px] right-[515px] leading-[18.91px] inline-block w-[115px] h-[15.7px] min-w-[115px] z-[5]">
                      Plastic material
                    </div>
                    <div className="absolute top-[141.2px] left-[410px] leading-[18.91px] text-gray-500 inline-block w-[42px] h-[15.7px] min-w-[42px] z-[5]">{`Type: `}</div>
                    <div className="absolute top-[141.2px] right-[522px] leading-[18.91px] whitespace-pre-wrap inline-block w-[108px] h-[15.7px] min-w-[108px] z-[5]">
                      Classic shoes
                    </div>
                    <div className="absolute top-[99px] left-[410px] leading-[18.91px] text-gray-500 inline-block w-[43px] h-[15.7px] min-w-[43px] z-[5]">{`Price: `}</div>
                  </div>
                  <div className="absolute top-[322px] left-[16px] rounded-10xs bg-www-equalopp-org-1349x593-default-nero box-border w-14 h-[46.3px] z-[2] border-[1px] border-solid border-gray-600">
                    <div className="absolute top-[0px] left-[0px] rounded-10xs bg-www-equalopp-org-1349x593-default-nero box-border w-full h-full hidden border-[1px] border-solid border-gray-600" />
                    <img
                      className="absolute top-[3.4px] left-[4.1px] w-12 h-[39.7px] object-cover hidden z-[1]"
                      alt=""
                      src="/image-38@2x.png"
                    />
                    <div className="absolute top-[0px] left-[0px] rounded-10xs bg-www-equalopp-org-1349x593-default-nero box-border w-full h-full z-[5] border-[1px] border-solid border-gray-600">
                      <div className="absolute top-[0px] left-[0px] rounded-10xs bg-www-equalopp-org-1349x593-default-nero box-border w-full h-full hidden border-[1px] border-solid border-gray-600" />
                      <img
                        className="absolute top-[3.4px] left-[4.1px] w-12 h-[39.7px] object-cover z-[1]"
                        loading="lazy"
                        alt=""
                        src="/image-38@2x.png"
                      />
                    </div>
                  </div>
                  <div className="absolute top-[322px] left-[81.1px] rounded bg-www-equalopp-org-1349x593-default-nero box-border w-14 h-[46.3px] z-[2] border-[1px] border-solid border-gray-300">
                    <div className="absolute top-[0px] left-[0px] rounded bg-www-equalopp-org-1349x593-default-nero box-border w-full h-full hidden border-[1px] border-solid border-gray-300" />
                    <img
                      className="absolute top-[3.3px] left-[4.2px] w-12 h-[39.7px] object-cover hidden z-[1]"
                      alt=""
                      src="/image-35@2x.png"
                    />
                    <div className="absolute top-[0px] left-[0px] rounded bg-www-equalopp-org-1349x593-default-nero box-border w-full h-full z-[5] border-[1px] border-solid border-gray-300">
                      <div className="absolute top-[0px] left-[0px] rounded bg-www-equalopp-org-1349x593-default-nero box-border w-full h-full hidden border-[1px] border-solid border-gray-300" />
                      <img
                        className="absolute top-[3.3px] left-[4.2px] w-12 h-[39.7px] object-cover z-[1]"
                        alt=""
                        src="/image-35@2x.png"
                      />
                    </div>
                  </div>
                  <div className="absolute top-[322px] left-[211.1px] rounded bg-www-equalopp-org-1349x593-default-nero box-border w-14 h-[46.3px] z-[2] border-[1px] border-solid border-gray-300">
                    <div className="absolute top-[0px] left-[0px] rounded bg-www-equalopp-org-1349x593-default-nero box-border w-full h-full hidden border-[1px] border-solid border-gray-300" />
                    <img
                      className="absolute top-[2.5px] left-[7.4px] w-[41px] h-[42.2px] object-contain hidden z-[1]"
                      alt=""
                      src="/image-36@2x.png"
                    />
                    <div className="absolute top-[0px] left-[0px] rounded bg-www-equalopp-org-1349x593-default-nero box-border w-full h-full z-[5] border-[1px] border-solid border-gray-300">
                      <div className="absolute top-[0px] left-[0px] rounded bg-www-equalopp-org-1349x593-default-nero box-border w-full h-full hidden border-[1px] border-solid border-gray-300" />
                      <img
                        className="absolute top-[2.5px] left-[7.4px] w-[41px] h-[42.2px] object-contain z-[1]"
                        loading="lazy"
                        alt=""
                        src="/image-36@2x.png"
                      />
                    </div>
                  </div>
                  <div className="absolute top-[322px] left-[276.1px] rounded bg-www-equalopp-org-1349x593-default-nero box-border w-14 h-[46.3px] z-[2] border-[1px] border-solid border-gray-300">
                    <div className="absolute top-[0px] left-[0px] rounded bg-www-equalopp-org-1349x593-default-nero box-border w-full h-full hidden border-[1px] border-solid border-gray-300" />
                    <img
                      className="absolute top-[1.7px] left-[5.5px] w-[45px] h-[43px] object-contain hidden z-[1]"
                      alt=""
                      src="/image-37@2x.png"
                    />
                    <div className="absolute top-[0px] left-[0px] rounded bg-www-equalopp-org-1349x593-default-nero box-border w-full h-full z-[5] border-[1px] border-solid border-gray-300">
                      <div className="absolute top-[0px] left-[0px] rounded bg-www-equalopp-org-1349x593-default-nero box-border w-full h-full hidden border-[1px] border-solid border-gray-300" />
                      <img
                        className="absolute top-[1.7px] left-[5.5px] w-[45px] h-[43px] object-contain z-[1]"
                        loading="lazy"
                        alt=""
                        src="/image-37@2x.png"
                      />
                    </div>
                  </div>
                  <div className="absolute top-[322px] left-[341.1px] rounded bg-www-equalopp-org-1349x593-default-nero box-border w-14 h-[46.3px] z-[2] border-[1px] border-solid border-gray-300">
                    <div className="absolute top-[0px] left-[0px] rounded bg-www-equalopp-org-1349x593-default-nero box-border w-full h-full hidden border-[1px] border-solid border-gray-300" />
                    <img
                      className="absolute top-[3.3px] left-[3.7px] w-[49px] h-[40.6px] object-cover hidden z-[1]"
                      alt=""
                      src="/image-39@2x.png"
                    />
                    <div className="absolute top-[0px] left-[0px] rounded bg-www-equalopp-org-1349x593-default-nero box-border w-full h-full z-[5] border-[1px] border-solid border-gray-300">
                      <div className="absolute top-[0px] left-[0px] rounded bg-www-equalopp-org-1349x593-default-nero box-border w-full h-full hidden border-[1px] border-solid border-gray-300" />
                      <img
                        className="absolute top-[3.3px] left-[3.7px] w-[49px] h-[40.6px] object-cover z-[1]"
                        loading="lazy"
                        alt=""
                        src="/image-39@2x.png"
                      />
                    </div>
                  </div>
                  <div className="absolute top-[322px] left-[146.1px] rounded bg-www-equalopp-org-1349x593-default-nero box-border w-14 h-[46.3px] z-[2] border-[1px] border-solid border-gray-300">
                    <div className="absolute top-[0px] left-[0px] rounded bg-www-equalopp-org-1349x593-default-nero box-border w-full h-full hidden border-[1px] border-solid border-gray-300" />
                    <img
                      className="absolute top-[3.3px] left-[3.9px] w-[49px] h-[39.7px] object-cover hidden z-[1]"
                      alt=""
                      src="/image-40@2x.png"
                    />
                    <div className="absolute top-[0px] left-[0px] rounded bg-www-equalopp-org-1349x593-default-nero box-border w-full h-full z-[5] border-[1px] border-solid border-gray-300">
                      <div className="absolute top-[0px] left-[0px] rounded bg-www-equalopp-org-1349x593-default-nero box-border w-full h-full hidden border-[1px] border-solid border-gray-300" />
                      <img
                        className="absolute top-[3.3px] left-[3.9px] w-[49px] h-[39.7px] object-cover z-[1]"
                        loading="lazy"
                        alt=""
                        src="/image-40@2x.png"
                      />
                    </div>
                  </div>
                  <div className="absolute top-[0px] left-[10px] w-[294px] h-[294px] bg-[url('/image-361@2x.png')] bg-cover bg-no-repeat bg-[top] z-[2]">
                    <img
                      className="absolute top-[0px] left-[0px] w-full h-full object-cover hidden"
                      alt=""
                      src="/image-361@2x.png"
                    />
                    <img
                      className="absolute top-[0px] left-[0px] w-full h-full object-cover hidden z-[5]"
                      loading="lazy"
                      alt=""
                      src="/image-361@2x.png"
                    />
                  </div>
                  <img
                    className="absolute top-[110px] left-[912px] w-[22px] h-[22px] z-[6]"
                    loading="lazy"
                    alt=""
                    src="/near-me.svg"
                  />
                  <img
                    className="absolute top-[140px] left-[912px] w-[22px] h-[22px] z-[6]"
                    loading="lazy"
                    alt=""
                    src="/account-circle.svg"
                  />
                  <img
                    className="absolute top-[175px] left-[912px] w-[22px] h-[22px] z-[6]"
                    loading="lazy"
                    alt=""
                    src="/call.svg"
                  />
                  <img
                    className="absolute top-[210px] left-[912px] w-[22px] h-[22px] z-[6]"
                    loading="lazy"
                    alt=""
                    src="/mail.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start relative max-w-full text-base text-gray-600">
          <img
            className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/blockdetail.svg"
          />
          <div className="flex-1 flex flex-col items-start justify-start pt-0 px-2.5 pb-4 box-border relative gap-[140px] max-w-full z-[3] mq450:gap-[35px] mq975:gap-[70px]">
            <div className="w-[1315px] absolute !m-[0] top-[41px] right-[0px] tracking-[-0.2px] leading-[24px] inline-block z-[1]">
              <p className="m-0">{`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `}</p>
              <p className="m-0">{`Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure `}</p>
              <p className="m-0 whitespace-pre-wrap">{`dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  Lorem ipsum dolor sit amet, consectetur `}</p>
              <p className="m-0">{`adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, `}</p>
              <p className="m-0">{`Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in `}</p>
              <p className="m-0">{`voluptate velit esse cillum dolore eu fugiat nulla pariatur. `}</p>
            </div>
            <div className="w-[867px] bg-www-equalopp-org-1349x593-default-nero box-border overflow-hidden hidden flex-col items-start justify-start max-w-full z-[1] border-[1px] border-solid border-gainsboro-100">
              <div className="self-stretch h-9 relative">
                <div className="absolute h-full w-[35.97%] top-[0%] right-[64.03%] bottom-[0%] left-[0%] bg-gray-200" />
                <div className="absolute h-full top-[0%] bottom-[0%] left-[0%] w-0" />
                <div className="absolute top-[calc(50%_-_8px)] left-[10px] inline-block min-w-[47px]">
                  Model
                </div>
                <div className="absolute h-full w-[56.86%] top-[0%] right-[7.16%] bottom-[0%] left-[35.97%] bg-www-equalopp-org-1349x593-default-nero" />
                <div className="absolute h-[102.78%] w-[0.12%] top-[-1.39%] right-[63.97%] bottom-[-1.39%] left-[35.92%] box-border border-r-[1px] border-solid border-gainsboro-100" />
                <div className="absolute top-[calc(50%_-_12px)] left-[214px] tracking-[-0.2px] leading-[24px] inline-block min-w-[77px]">
                  #8786867
                </div>
                <div className="absolute w-[calc(100%_+_1px)] top-[0.5px] right-[-0.5px] left-[-0.5px] box-border h-px border-t-[1px] border-solid border-gainsboro-100" />
              </div>
              <div className="self-stretch h-9 relative">
                <div className="absolute h-full w-[35.97%] top-[0%] right-[64.03%] bottom-[0%] left-[0%] bg-gray-200" />
                <div className="absolute h-full top-[0%] bottom-[0%] left-[0%] w-0" />
                <div className="absolute top-[calc(50%_-_8px)] left-[10px] inline-block min-w-[39px]">
                  Style
                </div>
                <div className="absolute h-full w-[56.86%] top-[0%] right-[7.16%] bottom-[0%] left-[35.97%] bg-www-equalopp-org-1349x593-default-nero" />
                <div className="absolute h-[102.78%] w-[0.12%] top-[-1.39%] right-[63.97%] bottom-[-1.39%] left-[35.92%] box-border border-r-[1px] border-solid border-gainsboro-100" />
                <div className="absolute top-[calc(50%_-_12px)] left-[214px] tracking-[-0.2px] leading-[24px] inline-block min-w-[93px]">
                  Classic style
                </div>
                <div className="absolute w-[calc(100%_+_1px)] top-[0.5px] right-[-0.5px] left-[-0.5px] box-border h-px border-t-[1px] border-solid border-gainsboro-100" />
              </div>
              <div className="self-stretch h-9 relative">
                <div className="absolute h-full w-[35.97%] top-[0%] right-[64.03%] bottom-[0%] left-[0%] bg-gray-200" />
                <div className="absolute h-full top-[0%] bottom-[0%] left-[0%] w-0" />
                <div className="absolute top-[calc(50%_-_8px)] left-[10px] inline-block min-w-[80px]">
                  Certificate
                </div>
                <div className="absolute h-full w-[56.86%] top-[0%] right-[7.16%] bottom-[0%] left-[35.97%] bg-www-equalopp-org-1349x593-default-nero" />
                <div className="absolute h-[102.78%] w-[0.12%] top-[-1.39%] right-[63.97%] bottom-[-1.39%] left-[35.92%] box-border border-r-[1px] border-solid border-gainsboro-100" />
                <div className="absolute top-[calc(50%_-_12px)] left-[214px] tracking-[-0.2px] leading-[24px] inline-block min-w-[115px]">
                  ISO-898921212
                </div>
                <div className="absolute w-[calc(100%_+_1px)] top-[0.5px] right-[-0.5px] left-[-0.5px] box-border h-px border-t-[1px] border-solid border-gainsboro-100" />
              </div>
              <div className="self-stretch h-9 relative">
                <div className="absolute h-full w-[35.97%] top-[0%] right-[64.03%] bottom-[0%] left-[0%] bg-gray-200" />
                <div className="absolute h-full top-[0%] bottom-[0%] left-[0%] w-0" />
                <div className="absolute top-[calc(50%_-_8px)] left-[10px] inline-block min-w-[32px]">
                  Size
                </div>
                <div className="absolute h-full w-[56.86%] top-[0%] right-[7.16%] bottom-[0%] left-[35.97%] bg-www-equalopp-org-1349x593-default-nero" />
                <div className="absolute h-[102.78%] w-[0.12%] top-[-1.39%] right-[63.97%] bottom-[-1.39%] left-[35.92%] box-border border-r-[1px] border-solid border-gainsboro-100" />
                <div className="absolute top-[calc(50%_-_12px)] left-[214px] tracking-[-0.2px] leading-[24px]">
                  34mm x 450mm x 19mm
                </div>
                <div className="absolute w-[calc(100%_+_1px)] top-[0.5px] right-[-0.5px] left-[-0.5px] box-border h-px border-t-[1px] border-solid border-gainsboro-100" />
              </div>
            </div>
            <img
              className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
              loading="lazy"
              alt=""
              src="/blockdetail.svg"
            />
            <div className="w-[1315px] absolute !m-[0] top-[41px] right-[0px] tracking-[-0.2px] leading-[24px] inline-block z-[1]">
              <p className="m-0">{`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `}</p>
              <p className="m-0">{`Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure `}</p>
              <p className="m-0 whitespace-pre-wrap">{`dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  Lorem ipsum dolor sit amet, consectetur `}</p>
              <p className="m-0">{`adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, `}</p>
              <p className="m-0">{`Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in `}</p>
              <p className="m-0">{`voluptate velit esse cillum dolore eu fugiat nulla pariatur. `}</p>
            </div>
            <div className="w-[120px] h-12 relative text-center">
              <div className="absolute top-[0px] left-[0px] flex flex-row items-start justify-start pt-4 px-4 pb-[13px] box-border w-full h-full z-[2]">
                <div className="relative font-medium inline-block min-w-[88px]">
                  Description
                </div>
              </div>
              <div className="absolute top-[0px] left-[0px] flex flex-row items-start justify-start pt-4 px-4 pb-[13px] box-border w-full h-full z-[2]">
                <div className="relative font-medium inline-block min-w-[88px]">
                  Description
                </div>
              </div>
            </div>
            <div className="w-[899px] flex flex-row items-start justify-start py-0 px-4 box-border max-w-full">
              <div className="flex-1 bg-www-equalopp-org-1349x593-default-nero box-border overflow-hidden flex flex-col items-start justify-start max-w-full z-[1] border-[1px] border-solid border-gainsboro-100">
                <div className="self-stretch flex flex-row items-start justify-start relative gap-[10px] max-w-full mq975:flex-wrap">
                  <div className="h-full w-[311.9px] absolute !m-[0] top-[0px] bottom-[0px] left-[0px] bg-gray-200" />
                  <div className="h-9 w-0 relative mq975:w-full mq975:h-0" />
                  <div className="w-[194px] flex flex-col items-start justify-start pt-2.5 pb-0 pr-5 pl-0 box-border">
                    <div className="relative inline-block min-w-[47px] z-[1]">
                      Model
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start pt-1.5 pb-0 pr-[10.9px] pl-0">
                    <div className="relative tracking-[-0.2px] leading-[24px] inline-block min-w-[77px] z-[1]">
                      #8786867
                    </div>
                  </div>
                  <div className="h-9 w-[493px] flex flex-row items-start justify-start max-w-full">
                    <div className="self-stretch w-[493px] relative bg-www-equalopp-org-1349x593-default-nero max-w-full" />
                    <div className="h-[37px] w-px relative box-border ml-[-493px] border-r-[1px] border-solid border-gainsboro-100" />
                  </div>
                  <div className="h-px w-[calc(100%_+_1px)] absolute !m-[0] top-[1px] right-[-1px] left-[0px] box-border z-[1] border-t-[1px] border-solid border-gainsboro-100" />
                </div>
                <div className="self-stretch flex flex-row items-start justify-start relative gap-[4.9px] max-w-full mq975:flex-wrap">
                  <div className="h-full w-[311.9px] absolute !m-[0] top-[0px] bottom-[0px] left-[0px] bg-gray-200" />
                  <div className="flex flex-col items-start justify-start py-0 pr-[5.1px] pl-0">
                    <div className="w-0 h-9 relative" />
                  </div>
                  <div className="w-[199.1px] flex flex-col items-start justify-start pt-2.5 pb-0 pr-5 pl-0 box-border">
                    <div className="relative inline-block min-w-[39px] z-[1]">
                      Style
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
                    <div className="relative tracking-[-0.2px] leading-[24px] inline-block min-w-[93px] z-[1]">
                      Classic style
                    </div>
                  </div>
                  <div className="h-9 w-[493px] flex flex-row items-start justify-start max-w-full">
                    <div className="self-stretch w-[493px] relative bg-www-equalopp-org-1349x593-default-nero max-w-full" />
                    <div className="h-[37px] w-px relative box-border ml-[-493px] border-r-[1px] border-solid border-gainsboro-100" />
                  </div>
                  <div className="h-px w-[calc(100%_+_1px)] absolute !m-[0] top-[1px] right-[-1px] left-[0px] box-border z-[1] border-t-[1px] border-solid border-gainsboro-100" />
                </div>
                <div className="self-stretch h-9 relative max-w-full mq450:h-auto mq450:min-h-[36]">
                  <div className="absolute h-full w-[35.97%] top-[0%] right-[64.03%] bottom-[0%] left-[0%] bg-gray-200" />
                  <div className="absolute h-full top-[0%] bottom-[0%] left-[0%] w-0" />
                  <input
                    className="[border:none] [outline:none] bg-www-equalopp-org-1349x593-default-nero absolute h-full w-[56.86%] top-[0%] right-[7.16%] bottom-[0%] left-[35.97%]"
                    type="text"
                  />
                  <div className="absolute h-[102.78%] w-[0.12%] top-[0%] right-[63.91%] bottom-[-2.78%] left-[35.97%] box-border border-r-[1px] border-solid border-gainsboro-100" />
                  <div className="absolute top-[1px] left-[0px] w-full flex flex-col items-start justify-start gap-[4px] max-w-full">
                    <div className="self-stretch h-px relative box-border z-[1] border-t-[1px] border-solid border-gainsboro-100" />
                    <div className="w-[336.7px] flex flex-row items-start justify-start py-0 px-2.5 box-border max-w-full">
                      <div className="flex-1 flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
                        <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                          <div className="relative inline-block min-w-[80px] shrink-0 [debug_commit:1de1738] z-[1]">
                            Certificate
                          </div>
                        </div>
                        <div className="relative tracking-[-0.2px] leading-[24px] inline-block min-w-[115px] shrink-0 [debug_commit:1de1738] z-[1]">
                          ISO-898921212
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start relative gap-[10px] mq450:flex-wrap">
                  <div className="h-full w-[311.9px] absolute !m-[0] top-[0px] bottom-[0px] left-[0px] bg-gray-200" />
                  <div className="h-9 w-0 relative mq450:w-full mq450:h-0" />
                  <div className="w-[194px] flex flex-col items-start justify-start pt-2.5 pb-0 pr-5 pl-0 box-border">
                    <div className="relative inline-block min-w-[32px] z-[1]">
                      Size
                    </div>
                  </div>
                  <input
                    className="[border:none] [outline:none] bg-www-equalopp-org-1349x593-default-nero h-full w-[493px] absolute !m-[0] top-[0px] right-[62.1px] bottom-[0px]"
                    type="text"
                  />
                  <div className="h-[calc(100%_+_1px)] w-px absolute !m-[0] top-[0px] bottom-[-1px] left-[311.9px] box-border border-r-[1px] border-solid border-gainsboro-100" />
                  <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
                    <div className="relative tracking-[-0.2px] leading-[24px] z-[1]">
                      34mm x 450mm x 19mm
                    </div>
                  </div>
                  <div className="h-px w-[calc(100%_+_1px)] absolute !m-[0] top-[1px] right-[-1px] left-[0px] box-border z-[1] border-t-[1px] border-solid border-gainsboro-100" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="w-[1387px] h-[88px] relative bg-www-equalopp-org-1349x593-default-nero hidden max-w-full" />
      <div className="self-stretch flex flex-row items-start justify-start max-w-full">
        <div className="w-[1387px] bg-www-equalopp-org-1349x593-default-nero flex flex-row items-end justify-between pt-5 pb-6 pr-[29px] pl-0 box-border max-w-full gap-[20px] mq1050:flex-wrap mq1050:pl-5 mq1050:pr-5 mq1050:box-border">
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
                  src="/social-31@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
