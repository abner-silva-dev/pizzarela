import { useNavigate, useRouteError } from "react-router-dom";
import LinkButton from "./LinkButton";

function Error() {
  const error = useRouteError();

  console.log(error);

  return (
    <div>
      <h1>Algo salió mal 😢</h1>
      <p>{error.data || error.message}</p>
      <LinkButton to="-1">&larr; Regresa</LinkButton>
    </div>
  );
}

export default Error;
