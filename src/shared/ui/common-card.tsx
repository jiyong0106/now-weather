/**
 * @description 공통 카드 컴포넌트
 */

interface Props {
  children: React.ReactNode;
  className?: string;
}

const CommonCard = ({ children, className }: Props) => {
  return (
    <div className={`bg-[#E0F2FF] rounded-[12px] p-6 ${className}`}>
      {children}
    </div>
  );
};

export default CommonCard;
