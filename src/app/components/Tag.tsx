import { Tag as TagProps } from '../types/common';

const Tag = ({ feature, addIcon, addCss, icon, iconCss }: TagProps) => {
  return (
    <div className={`${addCss}`}>
      {addIcon && (
        <div
          className={`flex items-center justify-center w-4 h-4 bg-[#94B337] text-black rounded-full text-sm font-bold ${iconCss}`}
        >
          {icon}
        </div>
      )}
      <span>{feature}</span>
    </div>
  );
};
export default Tag;
