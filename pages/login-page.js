import FrameComponent20 from "../components/frame-component20";

const LoginPage = () => {
  return (
    <div className="w-full relative bg-www-equalopp-org-1349x593-default-nero overflow-hidden flex flex-row items-end justify-start pt-[223.5px] px-[79px] pb-[161px] box-border gap-[39.5px] leading-[normal] tracking-[normal] text-left text-29xl text-gray1-700 font-poppins mq750:gap-[20px] mq750:pl-[39px] mq750:pr-[39px] mq750:box-border mq1150:flex-wrap">
      <div className="w-[549px] flex flex-col items-start justify-start gap-[74px] min-w-[549px] max-w-full mq750:gap-[37px] mq750:min-w-full mq450:gap-[18px] mq1150:flex-1">
        <div className="w-[530px] flex flex-col items-start justify-start gap-[16px] max-w-full">
          <h1 className="m-0 w-[513px] relative text-inherit leading-[68px] font-semibold font-inherit inline-block max-w-full mq450:text-10xl mq450:leading-[41px] mq1050:text-19xl mq1050:leading-[54px]">
            Welcome to Darsana
          </h1>
          <h3 className="m-0 self-stretch relative text-9xl leading-[40px] font-normal font-inherit text-dimgray-300 mq450:text-3xl mq450:leading-[32px]">
            Access to thousands of design resources and templates
          </h3>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[7px] box-border max-w-full">
          <FrameComponent20 />
        </div>
      </div>
      <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[62px] box-border min-w-[447px] min-h-[567px] max-w-full mq750:pb-10 mq750:box-border mq750:min-w-full">
        <img
          className="self-stretch h-[504px] relative max-w-full overflow-hidden shrink-0 object-cover"
          loading="lazy"
          alt=""
          src="/10586-1@2x.png"
        />
      </div>
    </div>
  );
};

export default LoginPage;
