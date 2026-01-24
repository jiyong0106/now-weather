import { FaAngleUp } from "react-icons/fa";
import clsx from "clsx";

interface Props {
  className?: string;
}

const FloatButton = ({ className }: Props) => {
  
  // app-layout에 지정해준 id: scroll-root를 기준으로 스크롤 이동
  const scrollToTop = () => {
    const scrollRoot = document.getElementById("scroll-root");
    scrollRoot?.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={clsx(
        "w-20 h-20 !bg-blue-500 flex items-center justify-center rounded-full",
        className,
      )}
    >
      <FaAngleUp size={30} color="white" />
    </button>
  );
};

export default FloatButton;
