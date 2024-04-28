import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();

  const onNavigationItemsClick = () => {
    router.push("/");
  };

  const onWhyADSTextClick = () => {
    router.push("/Product");
  };

  return (
    <header className="self-stretch bg-www-equalopp-org-1349x593-default-nero flex flex-row items-start justify-between py-0.5 pr-[102px] pl-[47px] box-border top-[0] z-[99] sticky max-w-full gap-[20px] text-center text-sm text-gray1-100 font-h3 mq450:pr-5 mq450:box-border mq750:pl-[23px] mq750:pr-[51px] mq750:box-border">
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
  );
};

export default Navbar;
