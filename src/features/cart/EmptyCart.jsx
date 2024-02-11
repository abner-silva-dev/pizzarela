import LinkButton from "../../ui/LinkButton";

function EmptyCart() {
  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Volver al Menú</LinkButton>

      <p className="font-semibold">
      Tu carro sigue vacío. Empieza a agregar algunas pizzas. :)
      </p>
    </div>
  );
}

export default EmptyCart;
