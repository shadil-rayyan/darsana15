import { useRouter } from "next/router";

const AboutUsChapters = () => {
  const router = useRouter();

  const onDivelementorWidgetWrapContainer1Click = () => {
    router.push("/AboutUsWhatWeDo");
  };

  const onDivelementorWidgetWrapContainer2Click = () => {
    router.push("/AboutUsObjective");
  };

  const onDivelementorWidgetWrapContainer3Click = () => {
    router.push("/AboutUsGeneralInformation");
  };

  const onDivelementorWidgetWrapContainer4Click = () => {
    router.push("/AboutUsChapters");
  };

  const onDivelementorWidgetWrapContainer5Click = () => {
    router.push("/AboutUsPresentLeadership");
  };

  const onDivelementorWidgetWrapContainer6Click = () => {
    router.push("/AboutUsTimeline");
  };

  const onAboutTextClick = () => {
    router.push("/ContactUsFinal");
  };

  const onFeaturesTextClick = () => {
    router.push("/AboutUsStory1");
  };

  const onPricingTextClick = () => {
    router.push("/Initiatives");
  };

  const onGalleryTextClick = () => {
    router.push("/Chapters");
  };

  const onLinkItemsContainerClick = () => {
    router.push("/");
  };

  const onWhyADSTextClick = () => {
    router.push("/Product");
  };

  return (
    <div className="w-full h-[2207px] relative bg-www-equalopp-org-1349x593-default-nero leading-[normal] tracking-[normal] text-center text-xs text-black font-raleway">
      <img
        className="absolute top-[0px] left-[0px] w-full h-full hidden"
        alt=""
        src="/rectangle-22.svg"
      />
      <img
        className="absolute top-[544px] left-[215.5px] w-[902px] h-[674px] object-cover"
        alt=""
        src="/about-us-hero-image@2x.png"
      />
      <section className="absolute top-[1559px] left-[111px] w-[1151px] h-[366px] text-left text-xs text-black font-raleway">
        <div className="absolute top-[12px] right-[649px] tracking-[1px] leading-[27px] flex items-center w-[502px] h-[216px]">
          <span className="w-full">
            <p className="m-0">
              As its members were widely dispersed across the globe, Darsana
              recognized early on that true growth could only be achieved
              through a strong network of independent chapters in various parts
              of the globe. Darsana's strength lies in its chapters. The
              programs initiated and carried out by different chapters have
              produced commendable results. Through chapters, Darsana's dream of
              becoming an umbrella organization for over 3000 former NSSCE
              students from the early 1960s to the present is being realized.
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
        <img
          className="absolute top-[0px] left-[586px] w-[565px] h-[281px] object-cover"
          loading="lazy"
          alt=""
          src="/image-171@2x.png"
        />
      </section>
      <div className="absolute top-[1354px] left-[calc(50%_-_628px)] bg-gray1-700 w-[1140px] h-[70px]">
        <div className="absolute h-full w-[calc(100%_-_977.2px)] top-[0px] right-[977.2px] bottom-[0px] left-[0px] bg-steelblue-400 whitespace-nowrap text-www-equalopp-org-1349x593-default-nero">
          <b className="absolute top-[27.5px] left-[calc(50%_-_38.5px)] tracking-[1px] leading-[25px] flex items-center justify-center w-[78px] h-[25px] min-w-[78px]">
            OUR STORY
          </b>
        </div>
        <div
          className="absolute h-full w-[calc(100%_-_977.2px)] top-[0px] right-[814.4px] bottom-[0px] left-[162.8px] bg-steelblue-500 whitespace-nowrap cursor-pointer"
          onClick={onDivelementorWidgetWrapContainer1Click}
        >
          <div className="absolute top-[17.2px] left-[37.6px] tracking-[0.16px] leading-[35px] font-medium inline-block min-w-[81px]">
            WHAT WE DO
          </div>
        </div>
        <div
          className="absolute h-full w-[calc(100%_-_977.2px)] top-[0px] right-[651.5px] bottom-[0px] left-[325.7px] bg-steelblue-400 cursor-pointer"
          onClick={onDivelementorWidgetWrapContainer2Click}
        >
          <div className="absolute top-[28px] left-[calc(50%_-_45.1px)] tracking-[1px] leading-[16px] font-medium flex items-center justify-center w-[89px] h-3.5 min-w-[89px]">
            OBJECTIVES
          </div>
        </div>
        <div
          className="absolute h-full w-[calc(100%_-_977.2px)] top-[0px] right-[488.7px] bottom-[0px] left-[488.5px] bg-steelblue-500 cursor-pointer"
          onClick={onDivelementorWidgetWrapContainer3Click}
        >
          <div className="absolute top-[15px] left-[calc(50%_-_53.6px)] tracking-[1px] leading-[25px] font-medium flex items-center justify-center w-[107.5px] h-[50px]">
            GENERAL INFORMATION
          </div>
        </div>
        <div
          className="absolute h-full w-[calc(100%_-_977.2px)] top-[0px] right-[325.8px] bottom-[0px] left-[651.4px] bg-steelblue-600 cursor-pointer"
          onClick={onDivelementorWidgetWrapContainer4Click}
        >
          <div className="absolute top-[28px] left-[calc(50%_-_53.8px)] tracking-[1px] leading-[25px] font-medium flex items-center justify-center w-[108.7px] h-[25px]">
            CHAPTERS
          </div>
        </div>
        <div
          className="absolute h-full w-[calc(100%_-_977.2px)] top-[0px] right-[163.2px] bottom-[0px] left-[814px] bg-steelblue-500 cursor-pointer"
          onClick={onDivelementorWidgetWrapContainer5Click}
        >
          <div className="absolute top-[13px] left-[calc(50%_-_43.4px)] tracking-[1px] leading-[25px] font-medium flex items-center w-[103px] h-[50px]">
            <span className="[line-break:anywhere] w-full">
              <p className="m-0">PRESENT</p>
              <p className="m-0">LEADERSHIP</p>
            </span>
          </div>
        </div>
        <div
          className="absolute h-full w-[calc(100%_-_977.2px)] top-[0px] right-[3.2px] bottom-[0px] left-[974px] bg-steelblue-400 cursor-pointer"
          onClick={onDivelementorWidgetWrapContainer6Click}
        >
          <div className="absolute top-[15px] left-[calc(50%_-_51.5px)] tracking-[1px] leading-[25px] font-medium flex items-center justify-center w-[101.7px] h-[25px]">
            TIMELINE
          </div>
        </div>
      </div>
      <footer className="absolute top-[2097px] left-[4px] bg-www-equalopp-org-1349x593-default-nero w-[1387px] h-[88px] max-w-full text-left text-base text-black font-h3">
        <div className="absolute top-[0px] left-[0px] bg-www-equalopp-org-1349x593-default-nero w-full h-full hidden" />
        <div className="absolute top-[20px] left-[0px] w-[138.5px] h-11 flex items-center justify-center">
          <img
            className="w-full h-full object-contain absolute left-[4px] top-[0px] [transform:scale(1.364)]"
            alt=""
            src="/divlogo@2x.png"
          />
        </div>
        <div className="absolute top-[35px] left-[402px] w-[582.5px] flex flex-row items-start justify-between gap-[20px] max-w-full">
          <div
            className="relative inline-block min-w-[77px] whitespace-nowrap cursor-pointer"
            onClick={onAboutTextClick}
          >
            Contact us
          </div>
          <div
            className="relative inline-block min-w-[64px] whitespace-nowrap cursor-pointer"
            onClick={onFeaturesTextClick}
          >
            About us
          </div>
          <div
            className="self-stretch w-0 relative hidden cursor-pointer"
            onClick={onPricingTextClick}
          />
          <div
            className="relative inline-block min-w-[65px] cursor-pointer"
            onClick={onGalleryTextClick}
          >
            Chapters
          </div>
          <div className="relative inline-block min-w-[99px] whitespace-nowrap">
            Eye magazine
          </div>
        </div>
        <img
          className="absolute top-[31px] left-[1183.5px] w-[13.1px] h-[22px]"
          alt=""
          src="/social.svg"
        />
        <img
          className="absolute top-[31px] left-[1222.6px] w-6 h-[22px] object-contain"
          alt=""
          src="/social-11@2x.png"
        />
        <img
          className="absolute top-[30px] left-[1272.6px] w-[33.8px] h-6 overflow-hidden"
          alt=""
          src="/social-2.svg"
        />
        <img
          className="absolute top-[31px] left-[1332.4px] w-[25.1px] h-[22px] object-contain"
          alt=""
          src="/social-31@2x.png"
        />
      </footer>
      <header className="absolute top-[0px] left-[0px] bg-www-equalopp-org-1349x593-default-nero w-full h-[84px] text-center text-sm text-gray1-100 font-h3">
        <div className="absolute h-[calc(100%_-_4px)] top-[2px] bottom-[2px] left-[47px] w-[220px] overflow-hidden">
          <img
            className="absolute h-[calc(100%_-_16px)] top-[8px] bottom-[8px] left-[18px] max-h-full w-[164.4px] object-contain"
            loading="lazy"
            alt=""
            src="/image-32@2x.png"
          />
        </div>
        <div className="absolute top-[22px] left-[466px] w-[541px] h-10">
          <div
            className="absolute top-[0px] left-[0px] rounded-sm flex flex-row items-center justify-center pt-2.5 px-4 pb-2 cursor-pointer text-black border-b-[1px] border-solid border-skyblue"
            onClick={onLinkItemsContainerClick}
          >
            <div className="relative font-medium inline-block min-w-[38px]">
              Home
            </div>
          </div>
          <div className="absolute top-[0px] left-[70px] rounded-sm w-[90px] h-9">
            <div className="absolute top-[10px] left-[16px] font-medium inline-block min-w-[58px]">
              About Us
            </div>
          </div>
          <div className="absolute top-[0px] left-[160px] rounded-sm w-36 h-10">
            <div className="absolute top-[12px] left-[16px] font-medium inline-block min-w-[84px]">
              Key intiatives
            </div>
            <img
              className="absolute top-[30px] left-[108px] w-5 h-5 overflow-hidden"
              alt=""
              src="/iconamoonarrowup2bold.svg"
            />
          </div>
          <div className="absolute top-[0px] left-[304px] rounded-sm w-[155px] h-10">
            <div className="absolute top-[12px] left-[16px] font-medium inline-block min-w-[95px]">
              Other intiatives
            </div>
            <img
              className="absolute top-[30px] left-[119px] w-5 h-5 overflow-hidden"
              alt=""
              src="/iconamoonarrowup2bold.svg"
            />
          </div>
          <div className="absolute top-[0px] left-[459px] rounded-sm w-[82px] h-9">
            <div
              className="absolute top-[10px] left-[16px] font-medium inline-block min-w-[50px] cursor-pointer"
              onClick={onWhyADSTextClick}
            >
              Product
            </div>
          </div>
        </div>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[19.5px] left-[1206px] rounded-lg [background:linear-gradient(83.21deg,_#3b0066,_#175fc4_38.7%,_#00e1e7_83.79%,_#00f7e0_93.69%,_#00ffdd)] w-[104px] h-[45px] whitespace-nowrap">
          <div className="absolute top-[12px] left-[24px] text-lg font-medium font-h3 text-www-equalopp-org-1349x593-default-nero text-center inline-block min-w-[56px]">
            Sign In
          </div>
        </button>
      </header>
      <section className="absolute top-[153px] left-[172px] w-[1082px] h-[321px] text-left text-13xl text-black font-arial">
        <div className="absolute top-[0px] left-[314px] text-45xl tracking-[0.16px] leading-[29px] font-extrabold font-h3 flex items-center w-[534px] h-[29px] mq450:text-19xl mq450:leading-[17px] mq767:text-32xl mq767:leading-[23px]">
          ABOUT US
        </div>
        <div className="absolute top-[176px] left-[0px] tracking-[0.16px] leading-[28.8px] flex items-center w-[1082px] mq450:text-lgi mq450:leading-[17px] mq767:text-7xl mq767:leading-[23px]">
          <span className="w-full">
            <p className="m-0">{`We are a global diaspora of more than thousand highly experienced `}</p>
            <p className="m-0 whitespace-pre-wrap">{`                   `}</p>
          </span>
        </div>
        <div className="absolute top-[235px] left-[41px] tracking-[0.16px] leading-[29px] flex items-center w-[900px] mq450:text-lgi mq450:leading-[17px] mq767:text-7xl mq767:leading-[23px]">
          and socially committed engineers . We work towards making a
        </div>
        <div className="absolute top-[292px] left-[125px] tracking-[0.16px] leading-[29px] flex items-center w-[763px] mq450:text-lgi mq450:leading-[17px] mq767:text-7xl mq767:leading-[23px]">
          {" "}
          difference in the life of needy and down trodden
        </div>
      </section>
    </div>
  );
};

export default AboutUsChapters;
