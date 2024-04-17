import FrameComponent17 from "../components/frame-component17";
import FrameComponent19 from "../components/frame-component19";
import FrameComponent18 from "../components/frame-component18";

const AboutUsPresentLeadership = () => {
  return (
    <div className="w-full relative bg-www-equalopp-org-1349x593-default-nero flex flex-col items-center justify-start pt-[140px] px-5 pb-[485px] box-border leading-[normal] tracking-[normal]">
      <img
        className="w-[1412px] h-[2417px] relative hidden max-w-full"
        alt=""
        src="/rectangle-22.svg"
      />
      <section className="w-[1208.2px] flex flex-row items-start justify-center py-0 pr-0 pl-[168px] box-border max-w-full text-left text-45xl text-black font-h3 mq450:pl-5 mq450:box-border mq750:pl-[84px] mq750:box-border">
        <h1 className="m-0 h-[175px] w-[534px] relative text-inherit tracking-[0.16px] leading-[28.8px] font-extrabold font-inherit flex items-center shrink-0 max-w-full z-[1] mq450:text-19xl mq450:leading-[17px] mq1050:text-32xl mq1050:leading-[23px]">
          ABOUT US
        </h1>
      </section>
      <section className="w-[1203.1px] flex flex-col items-start justify-start gap-[76px] max-w-full mq450:gap-[19px] mq750:gap-[38px]">
        <FrameComponent17 weAreAWidth="unset" weAreAAlignSelf="stretch" />
        <div className="w-[1145.7px] flex flex-row items-start justify-center pt-0 px-5 pb-[58px] box-border max-w-full mq750:pb-[38px] mq750:box-border">
          <div className="h-[674px] w-[913.5px] relative max-w-full">
            <div className="absolute h-full top-[0px] bottom-[0px] left-[11.5px] w-[902px] bg-cover bg-no-repeat bg-[top] z-[1]">
              <img
                className="absolute top-[0px] left-[0px] w-full h-full object-cover hidden"
                alt=""
                src="/image-16@2x.png"
              />
              <img
                className="absolute top-[620px] left-[399.5px] w-[54px] h-[54px] object-cover z-[2]"
                loading="lazy"
                alt=""
                src="/image-6@2x.png"
              />
              <img
                className="absolute top-[310px] left-[848.5px] w-[54px] h-[54px] object-contain z-[2]"
                loading="lazy"
                alt=""
                src="/arrow-1@2x.png"
              />
            </div>
            <img
              className="absolute top-[310px] left-[0px] w-[54px] h-[54px] object-contain z-[2]"
              loading="lazy"
              alt=""
              src="/arrow-2@2x.png"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-col items-end justify-start gap-[47.5px] max-w-full mq750:gap-[24px]">
          <FrameComponent19 />
          <FrameComponent18 />
        </div>
      </section>
    </div>
  );
};

export default AboutUsPresentLeadership;
