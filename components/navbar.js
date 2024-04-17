import { memo, useCallback } from "react";
import { useRouter } from "next/router";

const Navbar = memo(() => {
  const router = useRouter();

  const onMenuStructureContainerClick = useCallback(() => {
    router.push("/product");
  }, [router]);

  const onFrameContainer1Click = useCallback(() => {
    router.push("/about-us-story");
  }, [router]);

  const onFrameContainer2Click = useCallback(() => {
    router.push("/initiatives");
  }, [router]);

  const onFrameContainer3Click = useCallback(() => {
    router.push("/initiatives");
  }, [router]);

  const onButtonContainerClick = useCallback(() => {
    router.push("/login-page");
  }, [router]);

  return (
    <header className="ml-[-129px] mb-[42px] w-[1550px] bg-www-equalopp-org-1349x593-default-nero overflow-hidden flex flex-row items-start justify-center py-2.5 px-5 box-border gap-[242.5px] max-w-[109%] shrink-0 text-center text-sm text-gray1-100 font-h3 mq800:gap-[61px] mq1350:flex-wrap mq1350:gap-[121px] mq450:gap-[30px]">
      <div className="h-20 w-[220px] relative overflow-hidden shrink-0">
        <img
          className="absolute h-[calc(100%_-_16px)] top-[8px] bottom-[8px] left-[18px] max-h-full w-[164.4px] object-contain"
          alt=""
          src="/image-32@2x.png"
        />
      </div>
      <div className="w-[541px] flex flex-col items-start justify-start pt-5 px-0 pb-0 box-border max-w-full">
        <div
          className="self-stretch flex flex-row items-start justify-start [row-gap:20px] cursor-pointer mq800:flex-wrap"
          onClick={onMenuStructureContainerClick}
        >
          <div className="rounded-sm flex flex-row items-start justify-start pt-[9px] px-4 pb-2 text-black border-b-[1px] border-solid border-skyblue">
            <div className="w-[38px] relative font-medium flex items-center justify-center min-w-[38px]">
              Home
            </div>
          </div>
          <div
            className="rounded-sm flex flex-row items-start justify-start py-2.5 px-4 cursor-pointer"
            onClick={onFrameContainer1Click}
          >
            <div className="w-[58px] relative font-medium flex items-center justify-center min-w-[58px]">
              About Us
            </div>
          </div>
          <div
            className="w-36 rounded-sm flex flex-row items-start justify-start py-2.5 px-4 box-border gap-[8px] cursor-pointer"
            onClick={onFrameContainer2Click}
          >
            <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
              <div className="self-stretch relative font-medium inline-block min-w-[84px]">
                Key intiatives
              </div>
            </div>
            <img
              className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
              alt=""
              src="/iconamoonarrowup2bold.svg"
            />
          </div>
          <div
            className="flex-1 rounded-sm flex flex-row items-start justify-start py-2.5 px-4 box-border gap-[8px] min-w-[101px] cursor-pointer"
            onClick={onFrameContainer3Click}
          >
            <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
              <div className="self-stretch relative font-medium inline-block min-w-[95px]">
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
            <div className="w-[50px] relative font-medium flex items-center justify-center min-w-[50px]">
              Product
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start pt-[17.5px] px-0 pb-0 text-lg text-www-equalopp-org-1349x593-default-nero">
        <div
          className="rounded-lg [background:linear-gradient(83.21deg,_#3b0066,_#175fc4_38.7%,_#00e1e7_83.79%,_#00f7e0_93.69%,_#00ffdd)] flex flex-row items-start justify-start py-3 px-6 whitespace-nowrap cursor-pointer"
          onClick={onButtonContainerClick}
        >
          <div className="w-14 relative font-medium flex items-center justify-center min-w-[56px]">
            Sign In
          </div>
        </div>
      </div>
    </header>
  );
});

export default Navbar;
