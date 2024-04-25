const API_URL = "https://react-fast-pizza-api.onrender.com/api";
const API_URL_PIZZARELA = "https://pizzarela-api.vercel.app/api/v1";
// const API_URL_PIZZARELA = "http://localhost:3000/api/v1";

export async function getMenu() {
  const res = await fetch(`${API_URL}/menu`);

  // fetch won't throw error on 400 errors (e.g. when URL is wrong), so we need to do it manually. This will then go into the catch block, where the message is set
  if (!res.ok) throw Error("No se pudo obtener el menú");

  const { data } = await res.json();
  return data;
}

// export async

export async function getOrder(id) {
  const res = await fetch(`${API_URL}/order/${id}`);
  if (!res.ok) throw Error(`No se pudo encontrar el pedido # ${id}`);

  const { data } = await res.json();
  return data;
}

export async function createOrder(newOrder) {
  try {
    const res = await fetch(`${API_URL}/order`, {
      method: "POST",
      body: JSON.stringify(newOrder),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) throw Error();
    const { data } = await res.json();
    return data;
  } catch {
    throw Error("Error al crear su pedido");
  }
}

export async function updateOrder(id, updateObj) {
  try {
    const res = await fetch(`${API_URL}/order/${id}`, {
      method: "PATCH",
      body: JSON.stringify(updateObj),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) throw Error();
    // We don't need the data, so we don't return anything
  } catch (err) {
    throw Error("Error al actualizar su pedido");
  }
}

export async function checkoutSession(order) {
  console.log(order);
  try {
    const res = await fetch(`${API_URL_PIZZARELA}/pizzas/checkout-session`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(order),
    });

    const data = await res.json();
    console.log(data.data);

    return data.data.session;
  } catch (err) {
    throw Error(err.message);
  }
}
