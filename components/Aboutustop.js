import { useMemo } from "react";

const Aboutustop = ({ propTop, propLeft }) => {
  const aboutustopStyle = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  return (
    <section
      className="absolute top-[112px] left-[149px] w-[1082px] h-[321px] text-left text-13xl text-black font-arial"
      style={aboutustopStyle}
    >
      <div className="absolute top-[0px] left-[314px] text-45xl tracking-[0.16px] leading-[29px] font-extrabold font-h3 flex items-center w-[534px] h-[29px] mq450:text-19xl mq450:leading-[17px] mq750:text-32xl mq750:leading-[23px]">
        ABOUT US
      </div>
      <div className="absolute top-[176px] left-[0px] tracking-[0.16px] leading-[28.8px] flex items-center w-[1082px] mq450:text-lgi mq450:leading-[17px] mq750:text-7xl mq750:leading-[23px]">
        <span className="w-full">
          <p className="m-0">{`We are a global diaspora of more than thousand highly experienced `}</p>
          <p className="m-0 whitespace-pre-wrap">{`                   `}</p>
        </span>
      </div>
      <div className="absolute top-[235px] left-[41px] tracking-[0.16px] leading-[29px] flex items-center w-[900px] mq450:text-lgi mq450:leading-[17px] mq750:text-7xl mq750:leading-[23px]">
        and socially committed engineers . We work towards making a
      </div>
      <div className="absolute top-[292px] left-[125px] tracking-[0.16px] leading-[29px] flex items-center w-[763px] mq450:text-lgi mq450:leading-[17px] mq750:text-7xl mq750:leading-[23px]">
        {" "}
        difference in the life of needy and down trodden
      </div>
    </section>
  );
};

export default Aboutustop;
