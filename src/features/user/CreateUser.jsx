import { useState } from "react";
import Button from "../../ui/Button";
import { updateName } from "./userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function CreateUser() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!username) return;
    dispatch(updateName(username));
    navigate("/menu");
  }

  return (
    <form onSubmit={handleSubmit} className="column flex-col gap-11">
      <p className="mb-6 text-xl italic text-red-100 max-md:text-lg ">
        ¡Bienvenido! Por favor empieza diciéndonos tu nombre:
      </p>

      <div className="flex items-center justify-center gap-4 max-sm:flex-col">
        <input
          type="text"
          placeholder="Nombre Completo"
          value={username}
          onChange={(e) => setUsername(e.currentTarget.value)}
          className="input bord h-10 w-60	rounded-xl bg-red-200 text-stone-900 placeholder:text-stone-500"
        />

        {username !== "" && (
          <div>
            <Button onClick={handleSubmit}>Empezar a ordenar</Button>
          </div>
        )}
      </div>
    </form>
  );
}

export default CreateUser;
