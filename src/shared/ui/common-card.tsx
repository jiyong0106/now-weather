/**
 * @description 공통 카드 컴포넌트
 */

interface Props {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const CommonCard = ({ children, className, onClick }: Props) => {
  return (
    <div
      onClick={onClick}
      className={`bg-[#E0F2FF] rounded-xl p-6 ${className}`}
    >
      {children}
    </div>
  );
};

export default CommonCard;
