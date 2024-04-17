import { memo, useCallback } from "react";
import { useRouter } from "next/router";

const FrameComponent2 = memo(() => {
  const router = useRouter();

  const onNodeClick = useCallback(() => {
    router.push("/conversation-list");
  }, [router]);

  const onImage56Click = useCallback(() => {
    router.push("/gallery");
  }, [router]);

  const onNode1Click = useCallback(() => {
    router.push("/initiatives");
  }, [router]);

  return (
    <section className="flex flex-row items-start justify-start py-0 px-[79px] box-border max-w-full shrink-0 text-center text-6xl text-gray1-200 font-poppins mq1350:pl-[39px] mq1350:pr-[39px] mq1350:box-border">
      <div className="w-[1245px] overflow-hidden shrink-0 flex flex-row items-start justify-start pt-0 px-[78px] pb-[48.9px] box-border gap-[144.7px] max-w-full mq800:gap-[36px] mq1350:flex-wrap mq1350:gap-[72px] mq1350:justify-center mq1350:pl-[39px] mq1350:pr-[39px] mq1350:box-border mq450:gap-[18px] mq450:pb-8 mq450:box-border">
        <div className="w-[319px] flex flex-col items-start justify-start pt-[201px] px-0 pb-0 box-border">
          <div className="self-stretch flex flex-col items-start justify-start gap-[19px] shrink-0 [debug_commit:1de1738]">
            <div className="w-[180px] flex flex-row items-start justify-start relative">
              <h3 className="m-0 h-10 flex-1 relative text-inherit leading-[33px] capitalize font-bold font-inherit inline-block shrink-0 [debug_commit:1de1738] mq450:text-xl mq450:leading-[26px]">
                Conversation
              </h3>
              <img
                className="h-[187px] w-[187px] absolute !m-[0] top-[-173px] left-[-15px] overflow-hidden shrink-0 cursor-pointer z-[1]"
                loading="lazy"
                alt=""
                src="/3238375-44135-1.svg"
                onClick={onNodeClick}
              />
            </div>
            <div className="self-stretch h-[58.6px] relative text-base leading-[24px] capitalize font-h3 text-dimgray-200 inline-block shrink-0 [debug_commit:1de1738]">
              <p className="m-0">We analyse your website’s structure,</p>
              <p className="m-0">{`internal architecture & other key`}</p>
            </div>
          </div>
        </div>
        <div className="w-[1299.6px] flex flex-row items-end justify-start py-0 pr-[516px] pl-0 box-border gap-[59.9px] shrink-0 [debug_commit:1de1738] text-base text-dimgray-200 font-h3 mq800:gap-[30px] mq800:pr-[129px] mq800:box-border mq1350:flex-wrap mq1350:pr-[258px] mq1350:box-border mq450:pr-5 mq450:box-border">
          <div className="w-[344.7px] flex flex-col items-start justify-start gap-[69.5px] min-w-[344.6999999999998px] max-w-full mq1350:flex-1 mq1350:min-w-full mq450:gap-[35px]">
            <div className="w-[172.6px] flex flex-row items-start justify-start py-0 pr-3 pl-[11.8px] box-border">
              <div className="flex-1 flex flex-col items-end justify-start gap-[14px] shrink-0 [debug_commit:1de1738] mq1350:flex-1">
                <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[24.5px] pl-7">
                  <div className="flex-1 flex flex-row items-start justify-start p-2.5 gap-[9px]">
                    <div className="h-2 w-2 relative rounded-[50%] bg-black" />
                    <div className="h-2 w-2 relative rounded-[50%] bg-neutral-gray" />
                    <div className="h-2 w-2 relative rounded-[50%] bg-neutral-gray" />
                    <div className="h-2 w-2 relative rounded-[50%] bg-neutral-gray" />
                    <div className="h-2 w-2 relative rounded-[50%] bg-neutral-gray" />
                  </div>
                </div>
                <img
                  className="w-[149px] h-[149px] relative object-cover cursor-pointer"
                  loading="lazy"
                  alt=""
                  src="/image-56@2x.png"
                  onClick={onImage56Click}
                />
              </div>
            </div>
            <div className="self-stretch h-[58.6px] relative leading-[24px] capitalize inline-block shrink-0 [debug_commit:1de1738]">
              <p className="m-0">We are well known within the industry</p>
              <p className="m-0">for our technical capabilities</p>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[19.5px] min-w-[246px] max-w-full text-6xl text-gray1-200 font-poppins">
            <div className="w-[172.4px] flex flex-row items-start justify-start relative">
              <h3 className="m-0 h-[40.3px] flex-1 relative text-inherit leading-[33px] capitalize font-bold font-inherit inline-block shrink-0 mq450:text-xl mq450:leading-[26px]">
                Gallery
              </h3>
              <img
                className="h-[210.7px] w-[196px] absolute !m-[0] top-[-185.7px] right-[-73.3px] overflow-hidden shrink-0 cursor-pointer z-[1]"
                loading="lazy"
                alt=""
                src="/6170572-3014248-1.svg"
                onClick={onNode1Click}
              />
            </div>
            <div className="self-stretch flex flex-row items-start justify-end text-base text-dimgray-200 font-h3">
              <div className="h-[58.6px] w-[292.2px] relative leading-[24px] capitalize inline-block shrink-0">
                <p className="m-0">4517 Washington Ave. Manchester</p>
                <p className="m-0">Kentucky 39495</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[129px] flex flex-col items-start justify-start pt-[200.7px] px-0 pb-0 box-border">
          <h3 className="m-0 self-stretch h-[33px] relative text-inherit leading-[33px] capitalize font-bold font-inherit inline-block shrink-0 [debug_commit:1de1738] mq450:text-xl mq450:leading-[26px]">
            Initiatives
          </h3>
        </div>
      </div>
    </section>
  );
});

export default FrameComponent2;
