import { SubHeading as SubHeadingProps } from '../types/common';

const SubHeading = ({ text, addCss }: SubHeadingProps) => {
  return <div className={addCss}>{text}</div>;
};
export default SubHeading;
