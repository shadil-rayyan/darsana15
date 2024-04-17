import FrameComponent11 from "../components/frame-component11";
import FrameComponent10 from "../components/frame-component10";

const Gallery = () => {
  return (
    <div className="w-full relative bg-www-equalopp-org-1349x593-default-nero overflow-hidden flex flex-col items-start justify-start pt-[151px] px-[30px] pb-[213px] box-border gap-[436.8px] leading-[normal] tracking-[normal] text-center text-29xl text-black font-h3 lg:gap-[218px] mq750:gap-[109px] mq450:gap-[55px]">
      <div className="w-[842px] h-[-1.8px] flex flex-row items-start justify-center max-w-full">
        <b className="h-[-1.8px] w-[304px] relative leading-[120%] inline-block shrink-0 mq450:text-10xl mq450:leading-[35px] mq1050:text-19xl mq1050:leading-[46px]">
          {" "}
          Gallery
        </b>
      </div>
      <section className="w-[1330px] flex flex-col items-start justify-start gap-[31px] max-w-full mq750:gap-[15px]">
        <FrameComponent11 />
        <FrameComponent10 />
      </section>
    </div>
  );
};

export default Gallery;
