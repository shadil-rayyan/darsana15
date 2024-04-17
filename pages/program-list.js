import { useCallback } from "react";
import { useRouter } from "next/router";
import ContentCard from "../components/content-card";

const ProgramList = () => {
  const router = useRouter();

  const onContentCardContainerClick = useCallback(() => {
    router.push("/activity-description");
  }, [router]);

  return (
    <div className="w-full relative bg-www-equalopp-org-1349x593-default-nero overflow-hidden flex flex-row flex-wrap items-start justify-start pt-[204px] pb-[45px] pr-[170px] pl-[172px] box-border gap-[74px] leading-[normal] tracking-[normal] lg:gap-[37px] lg:pl-[86px] lg:pr-[85px] lg:box-border mq450:pl-5 mq450:pr-5 mq450:box-border mq750:gap-[18px] mq750:pl-[43px] mq750:pr-[42px] mq750:box-border">
      <div className="flex-1 flex flex-col items-start justify-start gap-[74px] min-w-[333px] max-w-full mq450:gap-[18px] mq750:gap-[37px]">
        <ContentCard
          onContentCardContainerClick={onContentCardContainerClick}
        />
        <ContentCard />
      </div>
      <div className="flex-1 flex flex-col items-start justify-start gap-[74px] min-w-[333px] max-w-full mq450:gap-[18px] mq750:gap-[37px]">
        <ContentCard />
        <ContentCard />
      </div>
    </div>
  );
};

export default ProgramList;
