import FrameComponent4 from "../components/frame-component4";
import WhyTrustUsLink from "../components/why-trust-us-link";

const AboutUsChapters = () => {
  return (
    <div className="w-full relative bg-www-equalopp-org-1349x593-default-nero flex flex-col items-start justify-start pt-[151px] px-[87.9px] pb-[492px] box-border leading-[normal] tracking-[normal] mq450:pl-5 mq450:pr-5 mq450:box-border mq750:pl-11 mq750:pr-11 mq750:box-border">
      <img
        className="w-[1412px] h-[2417px] relative hidden max-w-full"
        alt=""
        src="/rectangle-22.svg"
      />
      <section className="self-stretch flex flex-row items-start justify-center py-0 pr-0 pl-[140px] box-border max-w-full text-left text-45xl text-black font-h3 mq450:pl-5 mq450:box-border mq750:pl-[70px] mq750:box-border">
        <h1 className="m-0 h-[175px] w-[534px] relative text-inherit tracking-[0.16px] leading-[28.8px] font-extrabold font-inherit flex items-center shrink-0 max-w-full z-[1] mq450:text-19xl mq450:leading-[17px] mq750:text-32xl mq750:leading-[23px]">
          ABOUT US
        </h1>
      </section>
      <section className="w-[1174.1px] flex flex-col items-end justify-start gap-[81.5px] max-w-full text-left text-xs text-black font-raleway mq750:gap-[20px] mq1275:gap-[41px]">
        <FrameComponent4
          image6IconWidth="1140px"
          arrow1IconFlex="1"
          arrow1IconWidth="unset"
          propBackgroundImage="unset"
        />
        <WhyTrustUsLink />
        <div className="w-[1151px] flex flex-row items-start justify-between max-w-full gap-[20px] mq1275:flex-wrap">
          <div className="w-[502px] flex flex-col items-start justify-start pt-3 px-0 pb-0 box-border min-w-[502px] max-w-full mq750:min-w-full mq1275:flex-1">
            <div className="self-stretch h-[354px] relative tracking-[1px] leading-[27px] flex items-center shrink-0 z-[1]">
              <span>
                <p className="m-0">
                  As its members were widely dispersed across the globe, Darsana
                  recognized early on that true growth could only be achieved
                  through a strong network of independent chapters in various
                  parts of the globe. Darsana's strength lies in its chapters.
                  The programs initiated and carried out by different chapters
                  have produced commendable results. Through chapters, Darsana's
                  dream of becoming an umbrella organization for over 3000
                  former NSSCE students from the early 1960s to the present is
                  being realized.
                </p>
                <p className="m-0">
                  <a
                    className="text-[inherit]"
                    href="https://darsana.in/aboutus#"
                    target="_blank"
                  >
                    <span className="[text-decoration:underline]">&nbsp;</span>
                  </a>
                </p>
              </span>
            </div>
          </div>
          <img
            className="w-[565px] relative max-h-full object-cover max-w-full z-[1] mq1275:flex-1"
            loading="lazy"
            alt=""
            src="/image-17@2x.png"
          />
        </div>
      </section>
    </div>
  );
};

export default AboutUsChapters;
