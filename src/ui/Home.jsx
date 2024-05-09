import { useSelector } from "react-redux";
import { useScreen } from "../hooks/useScreen";
import CreateUser from "./../features/user/CreateUser";
import Galery from "./Galery";
import Button from "./Button";
import Visits from "./Visits";
import { getVisits } from "../services/apiRestaurant";
import { useLoaderData } from "react-router-dom";

function Home() {
  const numVisits = useLoaderData();

  const { userName } = useSelector((state) => state.user);
  const { screenWidth } = useScreen();

  return (
    <div
      className={`grid w-full grid-cols-[2fr_1.5fr] items-center gap-16 p-7 text-red-200 max-md:h-full max-md:grid-cols-1 max-md:bg-[url('/pizza-1.jpg')] max-md:bg-cover`}
      style={{
        background:
          "linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)), url(/pizza-1.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
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
        <Visits numVisits={numVisits} />
        {/* <p className=" max-md:text-md text-justify text-2xl text-red-300">
          En<b> PIZZARELA, </b>combinamos años de experiencia en la preparación
          artesanal de pizzas con un toque de innovación, ofreciendo a nuestros
          clientes una experiencia gastronómica única. Nos enorgullece utilizar
          ingredientes frescos y de la más alta calidad en cada una de nuestras
          creaciones, y nuestro equipo está comprometido con brindar un servicio
          excepcional y una atención personalizada a cada cliente.
        </p>
        <p className="max-md:text-md text-2xl font-semibold uppercase tracking-widest text-red-500">
          {" "}
          ¡Tu orden en solo 45 minutos!
        </p> */}
      </div>
      {screenWidth >= 768 && <Galery />}
    </div>
  );
}

export async function loader() {
  try {
    const numVisits = await getVisits();
    return numVisits || null;
  } catch (error) {
    console.log(error);
  }
}

export default Home;
