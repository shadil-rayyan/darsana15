import { memo, useMemo } from "react";

const Property1Default = memo(
  ({
    about,
    features,
    pricing,
    gallery,
    team,
    property1DefaultAlignSelf,
    property1DefaultGap,
    property1DefaultWidth,
    aboutMinWidth,
    featuresMinWidth,
    pricingMinWidth,
    galleryMinWidth,
    teamMinWidth,
  }) => {
    const property1DefaultStyle = useMemo(() => {
      return {
        alignSelf: property1DefaultAlignSelf,
        gap: property1DefaultGap,
        width: property1DefaultWidth,
      };
    }, [property1DefaultAlignSelf, property1DefaultGap, property1DefaultWidth]);

    const aboutStyle = useMemo(() => {
      return {
        minWidth: aboutMinWidth,
      };
    }, [aboutMinWidth]);

    const featuresStyle = useMemo(() => {
      return {
        minWidth: featuresMinWidth,
      };
    }, [featuresMinWidth]);

    const pricingStyle = useMemo(() => {
      return {
        minWidth: pricingMinWidth,
      };
    }, [pricingMinWidth]);

    const galleryStyle = useMemo(() => {
      return {
        minWidth: galleryMinWidth,
      };
    }, [galleryMinWidth]);

    const teamStyle = useMemo(() => {
      return {
        minWidth: teamMinWidth,
      };
    }, [teamMinWidth]);

    return (
      <div
        className="max-w-full flex flex-row items-start justify-start gap-[40px] text-left text-base text-black font-h3"
        style={property1DefaultStyle}
      >
        <div className="relative" style={aboutStyle}>
          {about}
        </div>
        <div className="relative" style={featuresStyle}>
          {features}
        </div>
        <div className="relative" style={pricingStyle}>
          {pricing}
        </div>
        <div className="relative" style={galleryStyle}>
          {gallery}
        </div>
        <div className="relative" style={teamStyle}>
          {team}
        </div>
      </div>
    );
  }
);

export default Property1Default;
