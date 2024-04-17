import { memo, useMemo } from "react";

const Component = memo(({ number, text, propLeft }) => {
  const dividerStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div className="w-[245.4px] flex flex-col items-start justify-start relative gap-[18px] text-center text-35xl text-gray1-800 font-h3">
      <b className="self-stretch relative leading-[60px] mq800:text-24xl mq800:leading-[48px] mq450:text-13xl mq450:leading-[36px]">
        {number}
      </b>
      <div className="self-stretch relative text-lg leading-[26px] font-semibold">
        {text}
      </div>
      <div
        className="w-[3px] h-[56.6px] absolute !m-[0] bottom-[-17.6px] left-[calc(50%_+_28.3px)] rounded-31xl bg-darkorchid [transform:_rotate(90deg)] [transform-origin:0_0]"
        style={dividerStyle}
      />
    </div>
  );
});

export default Component;
