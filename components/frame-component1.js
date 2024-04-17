import { memo, useCallback } from "react";
import { useRouter } from "next/router";

const FrameComponent1 = memo(() => {
  const router = useRouter();

  const onPrimaryButtonClick = useCallback(() => {
    router.push("/product");
  }, [router]);

  return (
    <section className="self-stretch flex flex-row items-start justify-center pt-0 pb-[91px] pr-[26px] pl-5 box-border max-w-full shrink-0 text-left text-53xl text-gray1-400 font-poppins mq800:pb-[59px] mq800:box-border mq450:pb-[38px] mq450:box-border">
      <div className="w-[1249px] flex flex-row items-end justify-start gap-[72px] max-w-full mq800:gap-[36px] mq450:gap-[18px] mq1125:flex-wrap">
        <div className="w-[453px] flex flex-col items-start justify-start gap-[25px] min-w-[453px] max-w-full mq800:min-w-full mq1125:flex-1">
          <div className="self-stretch [backdrop-filter:blur(7px)] flex flex-row items-start justify-start max-w-full z-[1]">
            <h1 className="m-0 flex-1 relative text-inherit font-bold font-inherit inline-block max-w-full mq800:text-39xl mq450:text-24xl">
              Discover the Magic of Locally Sourced Treasures!
            </h1>
          </div>
          <div className="flex flex-row items-start justify-start py-0 px-[73px] box-border max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border">
            <button
              className="cursor-pointer [border:none] py-6 px-12 bg-steelblue-100 rounded-17xl overflow-hidden flex flex-row items-start justify-start z-[1] hover:bg-deepskyblue-100"
              onClick={onPrimaryButtonClick}
            >
              <b className="relative text-5xl leading-[18px] inline-block font-poppins text-lavenderblush text-left min-w-[91px] mq450:text-lgi mq450:leading-[14px]">
                Explore
              </b>
            </button>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[33px] box-border min-w-[471px] max-w-full mq800:min-w-full">
          <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
            <img
              className="h-[902px] w-[1073.6px] absolute !m-[0] bottom-[-278px] left-[-598px] overflow-hidden shrink-0 object-cover"
              alt=""
              src="/gallery-image@2x.png"
            />
            <div className="flex-1 flex flex-col items-end justify-start gap-[47px] max-w-full z-[1] mq800:gap-[23px]">
              <img
                className="self-stretch h-[259px] relative rounded-3xl max-w-full overflow-hidden shrink-0 object-cover"
                loading="lazy"
                alt=""
                src="/rectangle-2967@2x.png"
              />
              <div className="self-stretch flex flex-row items-start justify-start gap-[25px] max-w-full mq800:flex-wrap">
                <img
                  className="self-stretch flex-1 relative rounded-3xl max-w-full overflow-hidden max-h-full object-cover min-w-[229px] min-h-[350px]"
                  loading="lazy"
                  alt=""
                  src="/rectangle-2967-1@2x.png"
                />
                <img
                  className="self-stretch w-[337px] relative rounded-3xl max-h-full object-cover min-h-[350px] max-w-full mq800:flex-1"
                  loading="lazy"
                  alt=""
                  src="/rectangle-2967-2@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default FrameComponent1;
