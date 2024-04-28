import { useRouter } from "next/router";

const LoginPage = () => {
  const router = useRouter();

  const onNavigationItemsContainerClick = () => {
    router.push("/AboutUsStory1");
  };

  return (
    <div className="w-full relative bg-www-equalopp-org-1349x593-default-nero overflow-hidden flex flex-col items-start justify-start pt-0.5 px-[47px] pb-[169px] box-border gap-[141.5px] leading-[normal] tracking-[normal] mq750:gap-[71px] mq750:pl-[23px] mq750:pr-[23px] mq750:box-border mq450:gap-[35px]">
      <header className="w-[1263px] flex flex-row items-start justify-between gap-[20px] max-w-full text-center text-sm text-gray1-100 font-h3">
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
            <button className="cursor-pointer [border:none] pt-2.5 px-4 pb-2 bg-[transparent] rounded-sm flex flex-row items-start justify-start border-b-[1px] border-solid border-skyblue hover:bg-deepskyblue-400">
              <div className="relative text-sm font-medium font-h3 text-black text-center inline-block min-w-[38px]">
                Home
              </div>
            </button>
            <div
              className="rounded-sm flex flex-row items-start justify-start py-2.5 px-4 cursor-pointer"
              onClick={onNavigationItemsContainerClick}
            >
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
            <div className="rounded-sm flex flex-row items-start justify-start py-2.5 px-4 z-[1]">
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
      <section className="self-stretch flex flex-row items-start justify-start py-0 pr-[37px] pl-8 box-border max-w-full text-left text-29xl text-gray1-900 font-poppins">
        <div className="flex-1 flex flex-row items-end justify-start gap-[50.5px] max-w-full lg:flex-wrap mq750:gap-[25px]">
          <div className="w-[538px] flex flex-col items-start justify-start gap-[16px] min-w-[538px] max-w-full lg:flex-1 mq750:min-w-full">
            <h1 className="m-0 relative text-inherit leading-[68px] font-semibold font-inherit inline-block max-w-full mq450:text-10xl mq450:leading-[41px] mq1050:text-19xl mq1050:leading-[54px]">
              Welcome to Darsana
            </h1>
            <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[58px] box-border max-w-full text-9xl text-dimgray-400">
              <h3 className="m-0 flex-1 relative text-inherit leading-[40px] font-normal font-inherit inline-block max-w-full mq450:text-3xl mq450:leading-[32px]">
                Access to thousands of design resources and templates
              </h3>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[7px] box-border max-w-full text-lg text-darkslategray-200 font-text-info">
              <div className="flex-1 flex flex-col items-start justify-start gap-[30px] max-w-full">
                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[13px] box-border max-w-full">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[12px] max-w-full">
                    <div className="self-stretch flex flex-row items-start justify-start py-0 px-px box-border max-w-full">
                      <div className="flex-1 rounded-21xl bg-www-equalopp-org-1349x593-default-nero box-border overflow-hidden flex flex-row items-start justify-center py-3.5 pr-5 pl-10 gap-[16px] max-w-full border-[1px] border-solid border-darkslategray-200">
                        <img
                          className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                          alt=""
                          src="/social-media-logo.svg"
                        />
                        <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                          <div className="relative font-thin">
                            Continue with your Google account
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch rounded-21xl bg-www-equalopp-org-1349x593-default-nero overflow-hidden flex flex-row items-start justify-center pt-[11px] pb-2.5 pr-5 pl-[21px] gap-[16px] border-[1px] border-solid border-darkslategray-200 mq750:flex-wrap">
                      <img
                        className="h-8 w-8 relative"
                        alt=""
                        src="/social-media-logo1.svg"
                      />
                      <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                        <div className="relative font-thin">
                          Continue with Facebook account
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-px box-border max-w-full text-5xl font-avenir">
                      <div className="flex-1 rounded-21xl bg-www-equalopp-org-1349x593-default-nero box-border overflow-hidden flex flex-row items-end justify-center pt-2.5 pb-3.5 pr-5 pl-[22px] gap-[18px] max-w-full border-[1px] border-solid border-darkslategray-200">
                        <img
                          className="h-[26px] w-[26px] relative object-contain z-[1]"
                          loading="lazy"
                          alt=""
                          src="/image-511@2x.png"
                        />
                        <div className="h-[22px] w-[269px] relative flex items-center mq450:text-lgi">
                          Continue with Microsoft account
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative text-base font-poppins inline-block max-w-full text-gray1-900">
                  <span className="text-dimgray-500">
                    By signing up, you agree to the
                  </span>
                  <span className="text-darkslategray-200">{` `}</span>
                  <span className="[text-decoration:underline]">
                    Terms of use
                  </span>
                  <span className="text-dimgray-100">{` `}</span>
                  <span className="text-dimgray-500">and</span>
                  <span className="text-dimgray-100">{` `}</span>
                  <span className="[text-decoration:underline]">
                    <span>Privacy Policy.</span>
                    <span className="text-dimgray-100">{` `}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[54px] box-border min-w-[447px] min-h-[559px] max-w-full mq750:pb-[35px] mq750:box-border mq750:min-w-full">
            <img
              className="self-stretch h-[504px] relative max-w-full overflow-hidden shrink-0 object-cover"
              loading="lazy"
              alt=""
              src="/login-hero-image@2x.png"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginPage;
