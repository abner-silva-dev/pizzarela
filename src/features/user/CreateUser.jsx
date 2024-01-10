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
      <p className="mb-8 text-xl">
        Welcome! Please start by telling us your name:
      </p>

      <input
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.currentTarget.value)}
        className="input bord mb-6 h-10 w-60	rounded-xl bg-red-200 text-stone-900 placeholder:text-stone-500"
      />

      {username !== "" && (
        <div>
          <Button onClick={handleSubmit}>Start ordering</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
