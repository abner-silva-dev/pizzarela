import { useSelector } from "react-redux";
import { useScreen } from "../hooks/useScreen";
import CreateUser from "./../features/user/CreateUser";
import Galery from "./Galery";
import Button from "./Button";

// grid-cols-[2fr_3fr]

function Home() {
  const { userName } = useSelector((state) => state.user);
  const { screenWidth } = useScreen();

  return (
    <div
      className={`grid h-screen w-full grid-cols-[2fr_1.5fr] items-center gap-16 p-7  text-red-200 max-md:grid-cols-1 max-md:bg-[url('/pizza-1.jpg')] max-md:bg-cover`}
      style={{
        background:
          "linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)), url(/pizza-1.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-sm:h flex h-full flex-col items-center gap-20 text-center">
        <h1 className="tracking-wides mt-14 self-start	text-2xl  font-bold text-red-100	max-md:text-4xl md:text-6xl">
          <span className="max-md:text-md text-2xl font-semibold uppercase tracking-widest text-red-500">
            The best pizza.
          </span>
          <br />
          <span className="">Straight out of the oven, straight to you.</span>
        </h1>

        {userName ? (
          <Button to="/menu" type="primary">
            Continue ordering {userName}
          </Button>
        ) : (
          <CreateUser />
        )}
      </div>
      {screenWidth >= 768 && <Galery />}
    </div>
  );
}

export default Home;

// <Galery />;
