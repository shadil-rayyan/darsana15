import FrameComponent16 from "../components/frame-component16";
import IconContent from "../components/icon-content";
import FrameComponent14 from "../components/frame-component14";
import ContactInfo from "../components/contact-info";

const Chapters = () => {
  return (
    <div className="w-full h-[2768px] relative bg-www-equalopp-org-1349x593-default-nero overflow-hidden flex flex-col items-start justify-start pt-[135px] pb-[198px] pr-0 pl-[60px] box-border gap-[132px] leading-[normal] tracking-[normal] lg:h-auto mq450:gap-[33px] mq750:gap-[66px] mq750:pl-[30px] mq750:box-border">
      <div className="w-[1050px] flex-1 relative hidden max-w-full" />
      <FrameComponent16 />
      <section className="w-[1352px] flex flex-row items-start justify-start py-0 px-4 box-border max-w-full shrink-0">
        <IconContent />
      </section>
      <section className="w-[1331px] flex flex-row items-start justify-start py-0 px-[66px] box-border max-w-full shrink-0 lg:pl-[33px] lg:pr-[33px] lg:box-border">
        <div className="flex-1 flex flex-col items-end justify-start gap-[69.6px] max-w-full lg:gap-[35px] mq750:gap-[17px]">
          <FrameComponent14 />
          <ContactInfo />
        </div>
      </section>
    </div>
  );
};

export default Chapters;
