import { useRouter } from "next/router";

const ProgramList = () => {
  const router = useRouter();

  const onContentCardContainerClick = () => {
    router.push("/ActivityDescription");
  };

  const onContentCardContainer2Click = () => {
    router.push("/ActivityDescription");
  };

  const onContentCardContainer1Click = () => {
    router.push("/ActivityDescription");
  };

  return (
    <div className="w-full relative bg-www-equalopp-org-1349x593-default-nero h-[1245px] overflow-hidden flex flex-col items-start justify-end pt-[204px] pb-[45px] pr-[170px] pl-[172px] box-border gap-[74px] text-center text-7xl text-darkslategray-300 font-montserrat">
      <div className="w-[1098px] h-[461px] overflow-hidden shrink-0 flex flex-row items-center justify-start gap-[74px]">
        <div
          className="rounded-3xs bg-www-equalopp-org-1349x593-default-nero overflow-hidden flex flex-col items-start justify-start cursor-pointer border-[1px] border-solid border-darkgray-300"
          onClick={onContentCardContainerClick}
        >
          <img
            className="w-[512px] relative h-[254px] overflow-hidden shrink-0"
            alt=""
            src="/image.svg"
          />
          <div className="w-[512px] h-[207px] flex flex-row items-start justify-start">
            <div className="w-[119px] h-[207px] flex flex-col items-start justify-start py-[23px] px-[30px] box-border">
              <div className="flex flex-col items-center justify-start gap-[6px]">
                <b className="relative leading-[101.1%]">01</b>
                <div className="relative text-5xl leading-[101.1%] font-semibold text-slateblue">
                  FEB
                </div>
                <b className="relative text-4xl leading-[101.1%]">2023</b>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[10px] w-[156px] mt-[18px] text-left text-lg text-dimgray-200 font-open-sans">
              <div className="w-[365px] relative text-5xl font-semibold text-darkslategray-300 [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">
                Kolar Gold Fields (KGF)
              </div>
              <div className="self-stretch relative font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
                Venue
              </div>
              <div className="w-[190px] relative uppercase inline-block">
                00:00 AM - 00:00 PM
              </div>
              <div className="flex flex-row items-center justify-start gap-[9px]">
                <div className="flex flex-row items-start justify-start gap-[7px]">
                  <img
                    className="w-[22px] relative h-[22px] overflow-hidden shrink-0"
                    alt=""
                    src="/ionticket.svg"
                  />
                  <div className="relative font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
                    Read More
                  </div>
                </div>
                <div className="w-[5px] relative rounded-[50%] bg-dimgray-200 h-[5px]" />
                <div className="flex flex-row items-center justify-start gap-[4px]">
                  <img
                    className="w-[21px] relative rounded-12xs-5 h-[21px]"
                    alt=""
                    src="/star-1.svg"
                  />
                  <div className="relative font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
                    10 interested
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-3xs bg-www-equalopp-org-1349x593-default-nero box-border h-[461px] overflow-hidden flex flex-col items-start justify-start border-[1px] border-solid border-darkgray-300">
          <img
            className="w-[512px] relative h-[254px] overflow-hidden shrink-0"
            alt=""
            src="/image1.svg"
          />
          <div className="w-[512px] relative h-[207px]">
            <div className="absolute top-[0px] left-[0px] w-[119px] h-[207px] flex flex-col items-start justify-start py-[23px] px-[30px] box-border">
              <div className="flex flex-col items-center justify-start gap-[6px]">
                <b className="relative leading-[101.1%]">01</b>
                <div className="w-[50px] relative text-5xl leading-[101.1%] font-semibold text-slateblue inline-block">
                  FEB
                </div>
                <b className="relative text-4xl leading-[101.1%]">2023</b>
              </div>
            </div>
            <div className="absolute top-[18px] left-[119px] flex flex-col items-start justify-start gap-[10px] text-left text-lg text-dimgray-200 font-open-sans">
              <div className="w-[365px] relative text-5xl font-semibold text-darkslategray-300 [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">
                House No 10 by Darsana
              </div>
              <div className="self-stretch relative font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
                Venue
              </div>
              <div className="w-[190px] relative uppercase inline-block">
                00:00 AM - 00:00 PM
              </div>
              <div className="flex flex-row items-center justify-start gap-[9px]">
                <div className="flex flex-row items-start justify-start gap-[7px]">
                  <img
                    className="w-[22px] relative h-[22px] overflow-hidden shrink-0"
                    alt=""
                    src="/ionticket.svg"
                  />
                  <div className="relative font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
                    Read More
                  </div>
                </div>
                <div className="w-[5px] relative rounded-[50%] bg-dimgray-200 h-[5px]" />
                <div className="flex flex-row items-center justify-start gap-[4px]">
                  <img
                    className="w-[21px] relative rounded-12xs-5 h-[21px]"
                    alt=""
                    src="/star-1.svg"
                  />
                  <div className="relative font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
                    10 interested
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1098px] h-[461px] overflow-hidden shrink-0 flex flex-row items-center justify-start gap-[74px]">
        <div
          className="rounded-3xs bg-www-equalopp-org-1349x593-default-nero overflow-hidden flex flex-col items-start justify-start cursor-pointer border-[1px] border-solid border-darkgray-300"
          onClick={onContentCardContainer2Click}
        >
          <img
            className="w-[512px] relative h-[254px] overflow-hidden shrink-0"
            alt=""
            src="/image2.svg"
          />
          <div className="w-[512px] h-[207px] flex flex-row items-center justify-start">
            <div className="w-[119px] h-[207px] flex flex-col items-start justify-start py-[23px] px-[30px] box-border">
              <div className="flex flex-col items-center justify-start gap-[6px]">
                <b className="relative leading-[101.1%]">01</b>
                <div className="relative text-5xl leading-[101.1%] font-semibold text-slateblue">
                  FEB
                </div>
                <b className="relative text-4xl leading-[101.1%]">2023</b>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[10px] text-left text-lg text-dimgray-200 font-open-sans">
              <div className="w-[365px] relative text-5xl font-semibold text-darkslategray-300 [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">
                Darsana - Community Engagement
              </div>
              <div className="self-stretch relative font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
                Venue
              </div>
              <div className="w-[190px] relative uppercase inline-block">
                00:00 AM - 00:00 PM
              </div>
              <div className="flex flex-row items-center justify-start gap-[9px]">
                <div className="flex flex-row items-start justify-start gap-[7px]">
                  <img
                    className="w-[22px] relative h-[22px] overflow-hidden shrink-0"
                    alt=""
                    src="/ionticket.svg"
                  />
                  <div className="relative font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
                    Read More
                  </div>
                </div>
                <div className="w-[5px] relative rounded-[50%] bg-dimgray-200 h-[5px]" />
                <div className="flex flex-row items-center justify-start gap-[4px]">
                  <img
                    className="w-[21px] relative rounded-12xs-5 h-[21px]"
                    alt=""
                    src="/star-1.svg"
                  />
                  <div className="relative font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
                    10 interested
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="rounded-3xs bg-www-equalopp-org-1349x593-default-nero box-border h-[461px] overflow-hidden flex flex-col items-start justify-start cursor-pointer text-left text-lg font-open-sans border-[1px] border-solid border-darkgray-300"
          onClick={onContentCardContainer1Click}
        >
          <div className="w-[512px] relative h-[254px] overflow-hidden shrink-0 bg-[url('/image3@3x.png')] bg-cover bg-no-repeat bg-[top]">
            <img
              className="absolute top-[14px] left-[450px] rounded-51xl w-12 h-12 overflow-hidden"
              alt=""
              src="/interested-button.svg"
            />
            <div className="absolute bottom-[0px] left-[0px] rounded-tl-none rounded-tr-md rounded-b-none bg-gold-100 overflow-hidden flex flex-row items-center justify-center py-[5px] px-2.5">
              <div className="relative font-semibold">Scolarship</div>
            </div>
          </div>
          <div className="w-[512px] h-[207px] flex flex-row items-center justify-start text-center text-7xl font-montserrat">
            <div className="w-[119px] h-[207px] flex flex-col items-start justify-start py-[23px] px-[30px] box-border">
              <div className="flex flex-col items-center justify-start gap-[6px]">
                <b className="relative leading-[101.1%]">11</b>
                <div className="relative text-5xl leading-[101.1%] font-semibold text-slateblue">
                  JAN
                </div>
                <b className="relative text-4xl leading-[101.1%]">2023</b>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[10px] text-left text-lg text-dimgray-200 font-open-sans">
              <div className="w-[365px] relative text-5xl font-semibold text-darkslategray-300 [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">
                Biju Cherian Scholarship (BCS) program
              </div>
              <div className="self-stretch relative font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
                Venue
              </div>
              <div className="w-[190px] relative uppercase inline-block">
                00:00 AM - 00:00 PM
              </div>
              <div className="flex flex-row items-center justify-start gap-[9px]">
                <div className="flex flex-row items-start justify-start gap-[7px]">
                  <img
                    className="w-[22px] relative h-[22px] overflow-hidden shrink-0"
                    alt=""
                    src="/ionticket.svg"
                  />
                  <div className="relative font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
                    Read More
                  </div>
                </div>
                <div className="w-[5px] relative rounded-[50%] bg-dimgray-200 h-[5px]" />
                <div className="flex flex-row items-center justify-start gap-[4px]">
                  <img
                    className="w-[21px] relative rounded-12xs-5 h-[21px]"
                    alt=""
                    src="/star-1.svg"
                  />
                  <div className="relative font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
                    10 interested
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramList;
