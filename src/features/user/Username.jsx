import { useSelector } from "react-redux";

function Username() {
  const { userName } = useSelector((state) => state.user);

  if (!userName) return null;

  return <div className=" text-md font-semibold max-md:hidden">{userName}</div>;
}

export default Username;
