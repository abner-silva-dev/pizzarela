import { useSelector } from "react-redux";
import { useScreen } from "../hooks/useScreen";
import CreateUser from "./../features/user/CreateUser";
import Galery from "./Galery";
import Button from "./Button";

function Home() {
  const { userName } = useSelector((state) => state.user);
  const { screenWidth } = useScreen();

  return (
    <div className="m-[0_auto] grid w-full max-w-[130rem] grid-cols-[1fr_1fr] justify-center  gap-16  px-32 py-10	text-red-200 max-lg:h-full max-lg:grid-cols-1 max-md:px-2 max-md:py-1">
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
        <h1 className="tracking-wides mt-14 self-start	text-2xl  font-bold text-gray-100	max-md:text-4xl md:text-6xl">
          <span className="max-md:text-md text-2xl font-semibold uppercase tracking-widest text-red-500">
            LA MEJOR PIZZA.
          </span>
          <br />
          <span>Recién salido del horno, directo a ti.</span>
        </h1>
        <p className="text-2xl italic leading-10 text-gray-200 shadow-md max-md:text-lg	">
          En Pizzarela, nos enorgullecemos de ofrecer las mejores pizzas,
          preparadas con ingredientes de la más alta calidad. Cada pizza es una
          obra maestra, creada con pasión y dedicación para garantizar un sabor
          excepcional en cada bocado.
        </p>

        {userName ? (
          <Button to="/menu" type="primary">
            Continuar Ordenando {userName}
          </Button>
        ) : (
          <CreateUser />
        )}
      </div>
      {screenWidth >= 1100 && <Galery />}
    </div>
  );
}

export default Home;
