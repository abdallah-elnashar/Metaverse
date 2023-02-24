import styles from "../styles";

const NewFeatures = ({ imgUrl, title, subtitle }) => (
  <div className="flex-1 flex flex-col sm:max-w-[250px] min-w-[210px]">
    <div
      className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323f5d] `}
    >
      <img src={imgUrl} alt="icon" className="w-1/2 h-1/2 object-contain" />
    </div>
    <h
      className="mt-[26px] font-bold text-[24px]
      leading-[30px] text-white"
    >
      Title {title}
    </h>
    <p
      className="flex-1 mt-[16px] fonnor
       text-[18px] text-[#b0b0b0] leading-[32px] "
    >
      {subtitle}
    </p>
  </div>
);

export default NewFeatures;