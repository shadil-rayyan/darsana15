import { memo, useMemo } from "react";

const Content = memo(({ image15IconBackgroundImage }) => {
  const frameDiv3Style = useMemo(() => {
    return {
      backgroundImage: image15IconBackgroundImage,
    };
  }, [image15IconBackgroundImage]);

  return (
    <div className="w-[602px] rounded-8xs box-border flex flex-col items-end justify-start pt-0 px-0 pb-[15px] gap-[15px] max-w-full shrink-0 text-center text-7xl text-assignment-1-dark-bluish-grey font-montserrat border-[1px] border-solid border-silver-100">
      <div
        className="self-stretch flex flex-row items-start justify-center pt-[165px] px-5 pb-[139px] box-border bg-cover bg-no-repeat bg-[top] max-w-full mq450:pt-[107px] mq450:pb-[90px] mq450:box-border"
        style={frameDiv3Style}
      >
        <img
          className="h-[354px] w-[600px] relative object-cover hidden max-w-full"
          alt=""
          src="/image-15@2x.png"
        />
        <img
          className="h-[50px] w-[50px] relative object-cover z-[1]"
          loading="lazy"
          alt=""
          src="/image-171@2x.png"
        />
      </div>
      <div className="w-[586px] flex flex-row items-start justify-center gap-[16px] max-w-full mq800:flex-wrap">
        <div className="w-[57px] flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border">
          <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
            <div className="flex flex-row items-start justify-start py-0 px-[18px]">
              <b className="w-[21px] relative leading-[101.1%] inline-block min-w-[21px] mq450:text-2xl mq450:leading-[21px]">
                11
              </b>
            </div>
            <div className="flex flex-row items-start justify-start py-0 pr-[3px] pl-[3.5px] text-5xl text-slateblue">
              <div className="w-[50px] relative leading-[101.1%] font-semibold inline-block min-w-[50px] mq450:text-lgi mq450:leading-[19px]">
                JAN
              </div>
            </div>
            <b className="self-stretch relative text-4xl leading-[101.1%] inline-block min-w-[57px] mq450:text-lg mq450:leading-[19px]">
              2023
            </b>
          </div>
        </div>
        <b className="flex-1 relative text-5xl [display:-webkit-inline-box] font-assignment-1-small-title text-left overflow-hidden text-ellipsis [-webkit-line-clamp:3] [-webkit-box-orient:vertical] min-w-[333px] max-w-full mq450:text-lgi">
          DARSANA WEBINAR 3 | എംജി സുരേഷ് കുമാർ | "കേരളത്തിന്‍റെ ഊർജഭദ്രത -
          സാധ്യതകളും വെല്ലുവിള�
        </b>
      </div>
    </div>
  );
});

export default Content;
