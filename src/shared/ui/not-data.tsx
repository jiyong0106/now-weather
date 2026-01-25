interface Props {
  message: string;
}

const NotData = ({ message }: Props) => {
  return (
    <div className=" text-2xl text-gray-500  text-center p-10">
      <p className="text-2xl text-gray-500">{message}</p>
    </div>
  );
};

export default NotData;
