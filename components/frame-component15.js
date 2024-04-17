import { memo, useMemo } from "react";

const FrameComponent15 = memo(
  ({
    websiteDesignDidExactlyWh,
    kyleRobertsDVM,
    customerWebConsultant,
    contentRow,
    propHeight,
    propLineHeight,
    propMinWidth,
  }) => {
    const websiteDesignDid1Style = useMemo(() => {
      return {
        height: propHeight,
        lineHeight: propLineHeight,
      };
    }, [propHeight, propLineHeight]);

    const customerWebConsultant1Style = useMemo(() => {
      return {
        minWidth: propMinWidth,
      };
    }, [propMinWidth]);

    return (
      <div className="flex-1 rounded-2xl bg-www-equalopp-org-1349x593-default-nero shadow-[0px_28.9px_61.56px_rgba(21,_21,_21,_0.15)] flex flex-col items-start justify-center pt-0 px-[25px] pb-[35px] box-border relative gap-[32px] min-w-[280px] min-h-[265px] max-w-full text-left text-xl text-black font-h3 mq450:gap-[16px]">
        <div className="self-stretch h-[20.4px]" />
        <div
          className="self-stretch h-[92px] relative inline-block mq450:text-base"
          style={websiteDesignDid1Style}
        >
          {websiteDesignDidExactlyWh}
        </div>
        <div className="self-stretch flex flex-row items-center justify-center text-sm font-manrope">
          <div className="flex flex-col items-start justify-start gap-[1px]">
            <div className="relative font-extrabold inline-block min-w-[121px]">
              {kyleRobertsDVM}
            </div>
            <div
              className="relative text-3xs text-gray-600 inline-block min-w-[123px]"
              style={customerWebConsultant1Style}
            >
              {customerWebConsultant}
            </div>
          </div>
        </div>
        <img
          className="w-[75.8px] h-[75.8px] absolute !m-[0] top-[-33.1px] left-[25px] rounded-[50%] object-cover z-[1]"
          loading="lazy"
          alt=""
          src={contentRow}
        />
      </div>
    );
  }
);

export default FrameComponent15;
