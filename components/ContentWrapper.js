const ContentWrapper = () => {
  return (
    <div className="w-[1400px] flex flex-row items-end justify-between py-0 pr-0 pl-5 box-border top-[0] z-[99] sticky gap-[20px] max-w-full text-left text-base text-gray1-300 font-nunito">
      <img
        className="self-stretch w-[139px] relative max-h-full object-cover min-h-[60px]"
        alt=""
        src="/divlogo1@2x.png"
      />
      <div className="w-[1078px] rounded-21xl bg-www-equalopp-org-1349x593-default-nero flex flex-row items-start justify-start pt-[5px] pb-1 pr-11 pl-[45px] box-border gap-[29.2px] max-w-full mq1125:pl-[22px] mq1125:pr-[22px] mq1125:box-border">
        <div className="w-[44.3px] flex flex-col items-start justify-start pt-[13px] px-0 pb-0 box-border text-steelblue-400">
          <div className="self-stretch h-[22px] relative tracking-[0.16px] leading-[22.4px] flex items-center shrink-0">
            Home
          </div>
        </div>
        <div className="w-[70px] flex flex-col items-start justify-start pt-[13px] px-0 pb-0 box-border">
          <div className="self-stretch relative tracking-[0.16px] leading-[23px] whitespace-nowrap">
            About Us
          </div>
        </div>
        <div className="w-[118.8px] flex flex-col items-start justify-start pt-[13px] px-0 pb-0 box-border">
          <div className="self-stretch flex flex-row items-start justify-start gap-[4.6px]">
            <div className="flex-1 relative tracking-[0.16px] leading-[23px] whitespace-nowrap">
              Key Initiatives
            </div>
            <div className="flex flex-col items-start justify-start pt-[5.2px] px-0 pb-0">
              <img
                className="w-[12.2px] h-3 relative overflow-hidden shrink-0"
                alt=""
                src="/link1.svg"
              />
            </div>
          </div>
        </div>
        <div className="h-[35px] flex-1 flex flex-col items-start justify-start pt-[13px] px-0 pb-0 box-border">
          <div className="self-stretch flex-1 flex flex-row items-end justify-start gap-[4.6px]">
            <div className="self-stretch flex-1 relative tracking-[0.16px] leading-[22.4px] flex items-center whitespace-nowrap">
              Other Initiatives
            </div>
            <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[4.8px]">
              <img
                className="w-[12.2px] h-3 relative overflow-hidden shrink-0"
                alt=""
                src="/link-11.svg"
              />
            </div>
          </div>
        </div>
        <div className="h-[35px] w-[83.5px] flex flex-col items-start justify-start pt-[13px] px-0 pb-0 box-border">
          <div className="self-stretch flex-1 flex flex-row items-end justify-start gap-[4.7px]">
            <div className="self-stretch flex-1 relative tracking-[0.16px] leading-[22.4px] flex items-center whitespace-nowrap">{`Product `}</div>
            <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[4.8px]">
              <img
                className="w-[12.2px] h-3 relative overflow-hidden shrink-0"
                alt=""
                src="/link-21.svg"
              />
            </div>
          </div>
        </div>
        <div className="h-[35px] w-[100.9px] flex flex-col items-start justify-start pt-[13px] px-0 pb-0 box-border mq1125:w-0">
          <div className="self-stretch flex-1 flex flex-row items-start justify-start mq1125:hidden">
            <div className="self-stretch flex-1 relative tracking-[0.16px] leading-[22.4px] flex items-center shrink-0 [debug_commit:1de1738]">
              Actvities
            </div>
            <div className="self-stretch flex-1 relative tracking-[0.16px] leading-[22.4px] flex items-center shrink-0 [debug_commit:1de1738] z-[1] ml-[-100.9px]">
              Actvities
            </div>
          </div>
        </div>
        <div className="w-[116.1px] flex flex-col items-start justify-start pt-[13px] pb-0 pr-5 pl-0 box-border">
          <div className="w-[81px] relative tracking-[0.16px] leading-[23px] flex items-center whitespace-nowrap">
            Contact Us
          </div>
        </div>
        <div className="h-[49px] w-[114px] rounded-11xl bg-steelblue-300 flex flex-row items-start justify-start py-2.5 px-[25px] box-border whitespace-nowrap text-xl text-www-equalopp-org-1349x593-default-nero font-h3">
          <div className="self-stretch flex-1 relative tracking-[0.16px] leading-[28.8px] font-extrabold flex items-center whitespace-nowrap">
            Sign In
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentWrapper;
