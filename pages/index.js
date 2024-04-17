import MainContainer from "../components/main-container";
import Navbar from "../components/navbar";
import FrameComponent3 from "../components/frame-component3";
import FrameComponent2 from "../components/frame-component2";
import FrameComponent1 from "../components/frame-component1";
import Articles from "../components/articles";
import FrameComponent from "../components/frame-component";

const DarsanaPage = () => {
  return (
    <div className="w-full h-[2929px] relative bg-whitesmoke overflow-hidden flex flex-col items-start justify-start pt-0 pb-[70px] pr-0 pl-[19px] box-border gap-[7px] leading-[normal] tracking-[normal] text-center text-21xl text-www-equalopp-org-1349x593-default-mine-shaft font-h3 mq1350:h-auto">
      <MainContainer />
      <div className="w-[1402px] flex flex-row items-start justify-start pt-0 px-[78px] pb-[3px] box-border max-w-full shrink-0 mq1350:pl-[39px] mq1350:pr-[39px] mq1350:box-border">
        <img
          className="h-[78px] flex-1 relative max-w-full overflow-hidden object-cover"
          alt=""
          src="/banner-content@2x.png"
        />
      </div>
      <Navbar />
      <section className="ml-[-529.2000000000007px] mb-[3px] w-[2460.4px] overflow-hidden flex flex-row items-start justify-center pt-32 pb-0 pr-5 pl-9 box-border gap-[15px] max-w-[173%] shrink-0 mq800:pt-[54px] mq800:box-border mq1350:flex-wrap mq1350:justify-center mq1125:pt-[83px] mq1125:box-border">
        <div className="flex flex-col items-start justify-start pt-[893px] px-0 pb-0 mq800:pt-[377px] mq800:box-border mq1125:pt-[580px] mq1125:box-border">
          <button className="cursor-pointer py-4 px-[15px] bg-www-equalopp-org-1349x593-default-nero w-14 h-14 rounded-31xl box-border flex flex-row items-center justify-center border-[1px] border-solid border-black">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0"
              alt=""
              src="/icon.svg"
            />
          </button>
        </div>
        <FrameComponent3 />
      </section>
      <FrameComponent2 />
      <FrameComponent1 />
      <div className="w-[1344px] flex flex-row items-start justify-center pt-0 px-5 pb-[27px] box-border max-w-full shrink-0">
        <h1 className="m-0 w-[220px] relative text-inherit leading-[39px] font-extrabold font-inherit flex items-center justify-center shrink-0 z-[1] mq800:text-13xl mq800:leading-[31px] mq450:text-5xl mq450:leading-[23px]">
          Featured On
        </h1>
      </div>
      <Articles />
      <FrameComponent />
    </div>
  );
};

export default DarsanaPage;
