import { Heading as HeadingProps } from '../types/common';

const Heading = ({ text, span, textCss, spanCss }: HeadingProps) => {
  return (
    <div className={textCss}>
      {text} <span className={spanCss}>{span}</span>
    </div>
  );
};
export default Heading;
