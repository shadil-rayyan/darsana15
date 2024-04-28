import { useRouter } from "next/router";

const FrameComponent5 = () => {
  const router = useRouter();

  const onNavigationItemsContainerClick = () => {
    router.push("/");
  };

  const onWhyADSTextClick = () => {
    router.push("/Product");
  };

  return (
    <header className="self-stretch flex flex-row items-start justify-start py-0 px-[45px] box-border max-w-full text-left text-13xl text-black font-h3 lg:pl-[22px] lg:pr-[22px] lg:box-border">
      <div className="h-[82px] w-[1263px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border gap-[24px] max-w-full">
        <div className="mt-[-42px] self-stretch h-[18px] flex flex-row items-start justify-center py-0 pr-5 pl-[132px] box-border shrink-0 mq450:pl-5 mq450:box-border">
          <h2 className="m-0 self-stretch w-[143px] relative text-inherit leading-[18px] font-extrabold font-inherit inline-block shrink-0 [debug_commit:1de1738] whitespace-nowrap">
            Initiatives
          </h2>
        </div>
        <div className="self-stretch flex flex-row items-start justify-between shrink-0 [debug_commit:1de1738] max-w-full gap-[20px] text-center text-sm text-gray1-100">
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
        </div>
      </div>
    </header>
  );
};

export default FrameComponent5;
