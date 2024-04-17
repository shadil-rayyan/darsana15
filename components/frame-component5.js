import { memo } from "react";

const FrameComponent5 = memo(() => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[43px] max-w-full text-center text-xs text-black font-raleway mq750:gap-[21px]">
      <div className="self-stretch flex flex-row items-start justify-end py-0 px-[15px] box-border max-w-full">
        <div className="w-[1140px] bg-steelblue-500 flex flex-row flex-wrap items-start justify-center py-0 pr-[3.2px] pl-[12.5px] box-border gap-[0.1px] max-w-full z-[1]">
          <div className="w-[313.1px] flex flex-row items-start justify-start">
            <button className="cursor-pointer [border:none] pt-[27.5px] pb-[28.5px] pr-[42.5px] pl-[42.9px] bg-steelblue-400 flex-1 flex flex-row items-start justify-start shrink-0 [debug_commit:f6aba90] hover:bg-deepskyblue-300">
              <div className="flex-1 relative text-xs tracking-[1px] leading-[14px] font-medium font-raleway text-black text-center inline-block min-w-[77.4px]">
                OUR STORY
              </div>
            </button>
            <button className="cursor-pointer [border:none] pt-[17.2px] px-[37.7px] pb-[17.8px] bg-steelblue-600 flex-1 flex flex-row items-start justify-start shrink-0 [debug_commit:f6aba90] z-[1] ml-[-12.5px] hover:bg-steelblue-200">
              <b className="w-[81px] relative text-xs tracking-[0.16px] leading-[35px] flex font-raleway text-www-equalopp-org-1349x593-default-nero text-center items-center justify-center min-w-[81px]">
                WHAT WE DO
              </b>
            </button>
          </div>
          <button className="cursor-pointer [border:none] py-7 px-[36.3px] bg-steelblue-400 w-[162.8px] flex flex-row items-start justify-start box-border hover:bg-deepskyblue-300">
            <div className="flex-1 relative text-xs tracking-[1px] leading-[16px] font-medium font-raleway text-black text-center inline-block min-w-[89px]">
              OBJECTIVES
            </div>
          </button>
          <button className="cursor-pointer [border:none] pt-[15px] pb-4 pr-[27.5px] pl-[27.8px] bg-steelblue-500 w-[162.8px] flex flex-row items-start justify-start box-border whitespace-nowrap hover:bg-deepskyblue-300">
            <div className="h-[39px] flex-1 relative text-xs tracking-[1px] leading-[25px] font-medium font-raleway text-black text-center flex items-center justify-center">
              GENERAL INFORMATION
            </div>
          </button>
          <div className="flex-1 flex flex-row items-start justify-center min-w-[315px] max-w-full [row-gap:20px] mq750:flex-wrap">
            <button className="cursor-pointer [border:none] py-7 pr-[26.5px] pl-[27.6px] bg-steelblue-400 flex-1 flex flex-row items-start justify-start box-border min-w-[109px] shrink-0 [debug_commit:f6aba90] hover:bg-deepskyblue-300">
              <div className="flex-1 relative text-xs tracking-[1px] leading-[14px] font-medium font-raleway text-black text-center">
                CHAPTERS
              </div>
            </button>
            <div className="flex-1 bg-steelblue-500 flex flex-row items-start justify-start py-[13px] pr-[21.8px] pl-[38px] box-border min-w-[109px] shrink-0 [debug_commit:f6aba90] z-[1] ml-[-1.5px] mq450:flex-1">
              <div className="h-11 flex-1 relative tracking-[1px] leading-[25px] font-medium flex items-center">
                <span className="[line-break:anywhere]">
                  <p className="m-0">PRESENT</p>
                  <p className="m-0">LEADERSHIP</p>
                </span>
              </div>
            </div>
            <button className="cursor-pointer [border:none] pt-[15px] px-[29.9px] pb-4 bg-steelblue-400 flex-1 flex flex-row items-start justify-start box-border min-w-[109px] shrink-0 [debug_commit:f6aba90] z-[2] ml-[-1.5px] hover:bg-deepskyblue-300 mq450:flex-1">
              <div className="h-[39px] flex-1 relative text-xs tracking-[1px] leading-[25px] font-medium font-raleway text-black text-center flex items-center justify-center">
                TIMELINE
              </div>
            </button>
          </div>
        </div>
      </div>
      <b className="w-[77.4px] h-3.5 relative tracking-[1px] leading-[25px] flex text-www-equalopp-org-1349x593-default-nero items-center justify-center shrink-0 min-w-[77.4px] z-[1]">
        OUR STORY
      </b>
      <div className="self-stretch flex flex-row items-start justify-end max-w-full text-left">
        <div className="w-[1140px] flex flex-row items-start justify-center gap-[54px] max-w-full mq750:gap-[27px] mq1050:flex-wrap">
          <div className="w-[521px] relative tracking-[1px] leading-[27px] flex items-center shrink-0 min-w-[521px] max-w-full z-[1] mq750:min-w-full mq1050:flex-1">
            <span className="w-full">
              <p className="m-0">
                We have undertaken many socially relevant initiatives in
                education, waste management, sustainable construction methods,
                e-governance at panchayat level and many more in addition to
                various charity initiatives like sponsoring economically weak
                students etc. We are the organisers of Biju Cherian Scholarship
                which finacially supports more than 40 engineering students with
                an annual budget outlay of Rs 5 lakhs.
              </p>
              <p className="m-0">
                We are the proud organizers of IGNITE, the biggest innovatiion
                contest held for college students in Kerala. We are also very
                active in designing and constructing alternate and sustainable
                houses. Darsana so far built 10 houses for the needy.
              </p>
            </span>
          </div>
          <img
            className="h-[281px] flex-1 relative max-w-full overflow-hidden object-cover min-w-[367px] z-[1] mq750:min-w-full"
            loading="lazy"
            alt=""
            src="/image-20@2x.png"
          />
        </div>
      </div>
    </div>
  );
});

export default FrameComponent5;
