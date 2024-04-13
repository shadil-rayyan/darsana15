import { useMemo } from "react";
import styles from "./property1-default.module.css";

const Property1Default = ({
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
    <div className={styles.property1default} style={property1DefaultStyle}>
      <div className={styles.about} style={aboutStyle}>
        {about}
      </div>
      <div className={styles.features} style={featuresStyle}>
        {features}
      </div>
      <div className={styles.pricing} style={pricingStyle}>
        {pricing}
      </div>
      <div className={styles.gallery} style={galleryStyle}>
        {gallery}
      </div>
      <div className={styles.team} style={teamStyle}>
        {team}
      </div>
    </div>
  );
};

export default Property1Default;
