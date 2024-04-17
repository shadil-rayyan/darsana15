import { memo } from "react";
import ProductG from "./product-g";

const FrameComponent12 = memo(() => {
  return (
    <section className="w-[1237px] grid flex-row items-start justify-start gap-[18px] max-w-full grid-cols-[repeat(4,_minmax(222px,_1fr))] text-left text-base text-gray1-500 font-text-info mq450:grid-cols-[minmax(222px,_1fr)] mq975:justify-center mq975:grid-cols-[repeat(2,_minmax(222px,_385px))]">
      <ProductG
        image39="/image-39@2x.png"
        vector3="/vector-3-41.svg"
        bellRossNightlum="cement making machine "
      />
      <ProductG
        image39="/image-38-1@2x.png"
        vector3="/vector-3-5.svg"
        bellRossNightlum="flour making machine"
        propWidth="244.6px"
        propFlex="1"
      />
      <ProductG
        image39="/image-37@2x.png"
        vector3="/vector-3-41.svg"
        bellRossNightlum="              tractor "
        propWidth="248px"
        propFlex="1"
      />
      <div className="rounded-8xs bg-www-equalopp-org-1349x593-default-nero flex flex-col items-start justify-start pt-[43px] px-0 pb-[33px] gap-[17.6px] border-[0px] border-solid border-darkgray-400 mq450:pt-7 mq450:pb-[21px] mq450:box-border">
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
            src="/image-36@2x.png"
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
    </section>
  );
});

export default FrameComponent12;
