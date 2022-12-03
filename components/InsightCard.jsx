'use client';

const InsightCard = ({ imgUrl, title, subtitle }) => (
  <div className="flex flex-col lg:flex-row items-center justify-between gap-5 mb-8">
    <div className="w-[270px] h-[250px] rounded-lg">
      <img
        src={imgUrl}
        alt="plant"
        className="w-full h-full rounded-lg object-cover"
      />
    </div>
    <div className="w-[60%]">
      <h3 className="text-white text-2xl lg:text-3xl font-bold mb-2 w-[100%] lg:w-[60%]">{title}</h3>
      <p className="text-white  text-md mb-2 opacity-25 w-[100%] lg:w-[70%]">{subtitle}</p>
    </div>
    <div className="lg:flex hidden items-center justify-center w-[100px] h-[100px] rounded-full bottom-4 border-solid border-2 border-white">
      <img src="/arrow.svg" alt="" />
    </div>
  </div>
);

export default InsightCard;
