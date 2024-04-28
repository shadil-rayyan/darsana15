const SocialMediaIcons = () => {
  return (
    <div className="flex flex-row items-start justify-start pt-0 px-[29px] pb-[20.6px] box-border max-w-full text-left text-xl text-black font-h3">
      <div className="flex-1 shadow-[0px_94px_200px_rgba(21,_21,_21,_0.15)] flex flex-row flex-wrap items-start justify-start relative gap-[38px] max-w-full mq800:gap-[19px]">
        <img
          className="h-[75.8px] w-[75.8px] absolute !m-[0] top-[-38px] left-[25px] object-contain z-[1]"
          loading="lazy"
          alt=""
          src="/profile@2x.png"
        />
        <img
          className="h-[75.8px] w-[75.8px] absolute !m-[0] top-[-36px] left-[437px] object-contain z-[1]"
          alt=""
          src="/profile-1@2x.png"
        />
        <img
          className="h-[75.8px] w-[75.8px] absolute !m-[0] top-[-36px] right-[251.2px] object-contain z-[1]"
          alt=""
          src="/profile-2@2x.png"
        />
        <div className="flex-1 shadow-[0px_28.9px_61.56px_rgba(21,_21,_21,_0.15)] rounded-2xl bg-www-equalopp-org-1349x593-default-nero flex flex-col items-start justify-center pt-[41.8px] px-[25px] pb-[56.8px] box-border gap-[32px] min-w-[280px] max-w-full mq450:gap-[16px]">
          <div className="self-stretch h-[20.4px]" />
          <h3 className="m-0 self-stretch relative text-inherit font-normal font-inherit mq450:text-base">
            "Incredible initiative! Well done, Bangalore chapter!"
          </h3>
          <div className="self-stretch flex flex-row items-center justify-center text-sm font-manrope">
            <div className="flex flex-col items-start justify-start gap-[1px]">
              <div className="relative font-extrabold inline-block min-w-[121px]">
                Kyle Roberts DVM
              </div>
              <div className="relative text-3xs text-gray-600 inline-block min-w-[123px]">
                Customer Web Consultant
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 shadow-[0px_28.9px_61.56px_rgba(21,_21,_21,_0.15)] rounded-2xl bg-www-equalopp-org-1349x593-default-nero flex flex-col items-start justify-center pt-5 px-[25px] pb-[35px] box-border gap-[32px] min-w-[280px] max-w-full text-center mq450:gap-[16px]">
          <div className="self-stretch h-[20.4px]" />
          <h3 className="m-0 h-[90px] relative text-inherit leading-[30px] font-normal font-inherit inline-block mq450:text-base mq450:leading-[24px]">
            <p className="m-0">
              Heartwarming event. Inspiring work by Darsana.
            </p>
          </h3>
          <div className="self-stretch flex flex-row items-center justify-center text-left text-sm font-manrope">
            <div className="flex flex-col items-start justify-start gap-[1px]">
              <div className="relative font-extrabold inline-block min-w-[118px]">
                Sophia Anderson
              </div>
              <div className="relative text-3xs text-gray-600">
                Internal Implementation Officer
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 shadow-[0px_28.9px_61.56px_rgba(21,_21,_21,_0.15)] rounded-2xl bg-www-equalopp-org-1349x593-default-nero flex flex-col items-start justify-center pt-5 px-[25px] pb-[35px] box-border gap-[32px] min-w-[280px] max-w-full mq450:gap-[16px]">
          <div className="self-stretch h-[20.4px]" />
          <h3 className="m-0 self-stretch h-[92px] relative text-inherit font-normal font-inherit inline-block mq450:text-base">
            <p className="m-0">
              "Impressive progress. Keep it up, Darsana team!"
            </p>
            <p className="m-0">&nbsp;</p>
          </h3>
          <div className="self-stretch flex flex-row items-center justify-center text-sm font-manrope">
            <div className="flex flex-col items-start justify-start gap-[1px]">
              <div className="relative font-extrabold inline-block min-w-[109px]">
                Stephen Brekke
              </div>
              <div className="relative text-3xs text-gray-600">
                Legacy Integration Producer
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaIcons;
