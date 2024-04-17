import { memo, useMemo } from "react";

const FrameComponent4 = memo(
  ({
    image6IconWidth,
    arrow1IconFlex,
    arrow1IconWidth,
    propBackgroundImage,
  }) => {
    const frameDivStyle = useMemo(() => {
      return {
        width: image6IconWidth,
      };
    }, [image6IconWidth]);

    const frameDiv1Style = useMemo(() => {
      return {
        flex: arrow1IconFlex,
        width: arrow1IconWidth,
      };
    }, [arrow1IconFlex, arrow1IconWidth]);

    const frameDiv2Style = useMemo(() => {
      return {
        backgroundImage: propBackgroundImage,
      };
    }, [propBackgroundImage]);

    return (
      <div
        className="w-[1110px] flex flex-row items-start justify-end pt-0 px-3.5 pb-[191px] box-border max-w-full text-left text-13xl text-black font-arial lg:pb-[124px] lg:box-border mq750:pb-[81px] mq750:box-border"
        style={frameDivStyle}
      >
        <div
          className="flex-1 flex flex-col items-start justify-start gap-[76px] max-w-full lg:gap-[38px] mq750:gap-[19px]"
          style={frameDiv1Style}
        >
          <div className="self-stretch flex flex-col items-start justify-start gap-[2px] max-w-full">
            <h1 className="m-0 self-stretch h-[46px] relative text-inherit tracking-[0.16px] leading-[28.8px] font-normal font-inherit flex items-center shrink-0 z-[2] mq450:text-lgi mq450:leading-[17px] mq1050:text-7xl mq1050:leading-[23px]">
              <span>
                <p className="m-0">{`We are a global diaspora of more than thousand highly experienced `}</p>
                <p className="m-0 whitespace-pre-wrap">{`                   `}</p>
              </span>
            </h1>
            <div className="flex flex-row items-start justify-start py-0 px-[34px] box-border max-w-full">
              <h1 className="m-0 h-9 relative text-inherit tracking-[0.16px] leading-[28.8px] font-normal font-inherit flex items-center z-[1] mq450:text-lgi mq450:leading-[17px] mq1050:text-7xl mq1050:leading-[23px]">
                and socially committed engineers . We work towards making a
              </h1>
            </div>
            <div className="w-[1019px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full font-h3">
              <h1 className="m-0 h-14 w-[763px] relative text-inherit tracking-[0.16px] leading-[28.8px] font-normal font-inherit flex items-center shrink-0 max-w-full z-[1] mq450:text-lgi mq450:leading-[17px] mq1050:text-7xl mq1050:leading-[23px]">
                {" "}
                difference in the life of needy and down trodden
              </h1>
            </div>
          </div>
          <div className="w-[1019.5px] flex flex-row items-start justify-start py-0 px-[53px] box-border max-w-full mq1050:pl-[26px] mq1050:pr-[26px] mq1050:box-border">
            <div className="h-[674px] flex-1 relative max-w-full">
              <div
                className="absolute h-full top-[0px] bottom-[0px] left-[11.5px] w-[902px] bg-[url('/image-16@2x.png')] bg-cover bg-no-repeat bg-[top] z-[1]"
                style={frameDiv2Style}
              >
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
        </div>
      </div>
    );
  }
);

export default FrameComponent4;
