import Breadcrumb from "../components/breadcrumb";
import FrameComponent13 from "../components/frame-component13";
import FrameComponent12 from "../components/frame-component12";

const Product = () => {
  return (
    <div className="w-full relative flex flex-row items-start justify-start leading-[normal] tracking-[normal] mq450:gap-[22px] mq950:gap-[44px]">
      <main className="flex-1 bg-www-equalopp-org-1349x593-default-nero overflow-hidden flex flex-col items-center justify-start pt-[172px] px-5 pb-[236px] box-border relative gap-[17px] max-w-full mq975:pt-28 mq975:pb-[153px] mq975:box-border mq700:pt-[73px] mq700:pb-[99px] mq700:box-border">
        <Breadcrumb />
        <FrameComponent13 />
        <FrameComponent12 />
      </main>
    </div>
  );
};

export default Product;
