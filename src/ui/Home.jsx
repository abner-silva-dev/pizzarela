import { useSelector } from "react-redux";
import { useScreen } from "../hooks/useScreen";
import CreateUser from "./../features/user/CreateUser";
import Galery from "./Galery";
import Button from "./Button";

function Home() {
  const { userName } = useSelector((state) => state.user);
  const { screenWidth } = useScreen();

  return (
    <div className="grid w-full grid-cols-[2fr_1.5fr] gap-16 p-7 text-red-200  max-md:h-full max-md:grid-cols-1">
      <div
        style={{
          position: "fixed",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          zIndex: "-999",
          background:
            "linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)), url(/pizza-1.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="flex h-full flex-col items-center gap-20 text-center">
        <h1 className="tracking-wides mt-14 self-start	text-2xl  font-bold text-red-100	max-md:text-4xl md:text-6xl">
          <span className="max-md:text-md text-2xl font-semibold uppercase tracking-widest text-red-500">
            LA MEJOR PIZZA.
          </span>
          <br />
          <span className="">Recién salido del horno, directo a ti.</span>
        </h1>
        {userName ? (
          <Button to="/menu" type="primary">
            Continuar Ordenando {userName}
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
