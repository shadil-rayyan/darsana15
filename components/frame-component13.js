import { memo, useCallback } from "react";
import { useRouter } from "next/router";
import ProductG1 from "./product-g1";

const FrameComponent13 = memo(() => {
  const router = useRouter();

  const onProductGContainerClick = useCallback(() => {
    router.push("/product-detail");
  }, [router]);

  return (
    <section className="w-[1237px] h-[408px] relative max-w-full text-left text-base text-gray1-500 font-text-info mq700:h-auto mq700:min-h-[408]">
      <div className="absolute top-[50px] left-[0px] w-[609.3px] flex flex-row flex-wrap items-start justify-start gap-[17.3px] max-w-full">
        <ProductG1
          image38="/image-38@2x.png"
          bellRossNightlum="Men Long Sleeve"
          onProductGContainerClick={onProductGContainerClick}
        />
        <ProductG1
          image38="/image-41-1@2x.png"
          bellRossNightlum="Polished seeds Bowl 250Ml "
          propFlex="1"
          propMinWidth="295px"
          propAlignSelf="unset"
        />
      </div>
      <div className="absolute top-[50px] left-[626.7px] rounded-8xs bg-www-equalopp-org-1349x593-default-nero box-border w-[296px] flex flex-col items-start justify-start pt-[22px] px-0 pb-[33px] gap-[37.6px] border-[0px] border-solid border-darkgray-400">
        <img
          className="self-stretch h-[358px] relative rounded-8xs max-w-full overflow-hidden shrink-0 hidden"
          alt=""
          src="/rectangle-3066.svg"
        />
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-11 pl-[42.3px]">
          <img
            className="h-[198.4px] flex-1 relative max-w-full overflow-hidden object-cover z-[2]"
            loading="lazy"
            alt=""
            src="/image-42@2x.png"
          />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[18.5px]">
          <img
            className="self-stretch h-[0.5px] relative rounded-8xs max-w-full overflow-hidden shrink-0 object-contain z-[1]"
            loading="lazy"
            alt=""
            src="/vector-31.svg"
          />
          <div className="w-[248px] flex flex-row items-start justify-start py-0 px-7 box-border">
            <div className="h-12 flex-1 relative tracking-[-0.2px] leading-[24px] font-medium inline-block z-[1]">
              <p className="m-0">{`a cofee machine `}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[0px] left-[795px] w-[442px] flex flex-row flex-wrap items-start justify-start gap-[51px] max-w-full text-xs text-titles-paragraphs-text-neutral">
        <div className="w-[95px] rounded-cards-small bg-www-equalopp-org-1349x593-default-nero shadow-[0px_2px_4px_rgba(25,_33,_61,_0.08)] box-border flex flex-col items-start justify-start py-dropdowns-paddings-pd-regular px-[7px] gap-[2px] z-[3] border-[1px] border-solid border-dropdowns-borders-br-color-1">
          <button className="cursor-pointer [border:none] p-2 bg-www-equalopp-org-1349x593-default-nero rounded-dropdowns-default overflow-hidden flex flex-row items-center justify-start gap-[6px]">
            <img
              className="h-3.5 w-3.5 relative hidden"
              alt=""
              src="/social-media-icon-colorgoogle-sheets.svg"
            />
            <div className="flex flex-row items-start justify-start">
              <div className="flex flex-row items-center justify-start">
                <div className="relative text-xs leading-[16px] font-text-info text-titles-paragraphs-text-neutral text-left inline-block min-w-[63px]">
                  Electronics
                </div>
              </div>
            </div>
          </button>
          <div className="self-stretch rounded-dropdowns-default bg-www-equalopp-org-1349x593-default-nero overflow-hidden flex flex-row items-center justify-start p-2 gap-[6px]">
            <img
              className="h-3.5 w-3.5 relative hidden"
              alt=""
              src="/social-media-icon-colorairtable.svg"
            />
            <div className="flex flex-row items-start justify-start">
              <div className="flex flex-row items-center justify-start">
                <div className="relative leading-[16px] inline-block min-w-[28px]">
                  Gifts
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-dropdowns-default bg-www-equalopp-org-1349x593-default-nero overflow-hidden flex flex-row items-center justify-start py-dropdowns-paddings-pd-regular1 pr-[23px] pl-dropdowns-paddings-pd-regular1 gap-[6px]">
            <img
              className="h-3.5 w-3.5 relative hidden"
              alt=""
              src="/line-roundedcsv.svg"
            />
            <div className="flex flex-row items-start justify-start">
              <div className="flex flex-row items-center justify-start">
                <div className="relative leading-[16px] inline-block min-w-[48px]">
                  Farmer’s
                </div>
              </div>
            </div>
          </div>
          <button className="cursor-pointer [border:none] py-dropdowns-paddings-pd-regular1 pr-[9px] pl-dropdowns-paddings-pd-regular1 bg-www-equalopp-org-1349x593-default-nero rounded-dropdowns-default overflow-hidden flex flex-row items-center justify-start gap-[6px]">
            <img className="h-3.5 w-3.5 relative hidden" alt="" />
            <div className="flex flex-row items-start justify-start">
              <div className="flex flex-row items-center justify-start">
                <div className="relative text-xs leading-[16px] font-text-info text-titles-paragraphs-text-neutral text-left inline-block min-w-[62px]">
                  Agriculture
                </div>
              </div>
            </div>
          </button>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start pt-[50px] px-0 pb-0 box-border min-w-[192px]">
          <ProductG1
            image38="/image-43@2x.png"
            bellRossNightlum="a rare flower plant "
            propFlex="unset"
            propMinWidth="unset"
            propAlignSelf="stretch"
          />
        </div>
      </div>
    </section>
  );
});

export default FrameComponent13;
