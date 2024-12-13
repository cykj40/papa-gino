import { useState, useEffect } from "react";
import Pizza from "./Pizza";

// feel free to change en-US / USD to your locale
const intl = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export default function Order() {
  const [pizzaType, setPizzaType] = useState("");
  const [pizzaSize, setPizzaSize] = useState("M");
  const [pizzaTypes, setPizzaTypes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPizzaTypes();
  }, []);

  async function fetchPizzaTypes() {
    try {
      const pizzasRes = await fetch("/api/pizzas");
      const pizzasJson = await pizzasRes.json();
      setPizzaTypes(pizzasJson);
      if (pizzasJson.length > 0) {
        setPizzaType(pizzasJson[0].id);
      }
      setLoading(false);
    } catch (error) {
      console.error("Error fetching pizzas:", error);
      setLoading(false);
    }
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  const selectedPizza = pizzaTypes.find((pizza) => pizzaType === pizza.id);
  const price = selectedPizza?.sizes ? intl.format(selectedPizza.sizes[pizzaSize]) : "";

  return (
    <div className="order">
      <h2>Create Order</h2>
      <form>
        <div>
          <div>
            <label htmlFor="pizza-type">Pizza Type</label>
            <select
              onChange={(e) => setPizzaType(e.target.value)}
              name="pizza-type"
              value={pizzaType}
            >
              {pizzaTypes.map((pizza) => (
                <option key={pizza.id} value={pizza.id}>
                  {pizza.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="pizza-size">Pizza Size</label>
            <div>
              <span>
                <input
                  onChange={(e) => setPizzaSize(e.target.value)}
                  checked={pizzaSize === "S"}
                  type="radio"
                  name="pizza-size"
                  value="S"
                  id="pizza-s"
                />
                <label htmlFor="pizza-s">Small</label>
              </span>
              <span>
                <input
                  onChange={(e) => setPizzaSize(e.target.value)}
                  checked={pizzaSize === "M"}
                  type="radio"
                  name="pizza-size"
                  value="M"
                  id="pizza-m"
                />
                <label htmlFor="pizza-m">Medium</label>
              </span>
              <span>
                <input
                  onChange={(e) => setPizzaSize(e.target.value)}
                  checked={pizzaSize === "L"}
                  type="radio"
                  name="pizza-size"
                  value="L"
                  id="pizza-l"
                />
                <label htmlFor="pizza-l">Large</label>
              </span>
            </div>
          </div>
          <button type="submit">Add to Cart</button>
        </div>
        <div className="order-pizza">
          {selectedPizza && (
            <>
              <Pizza
                name={selectedPizza.name}
                description={selectedPizza.description}
                image={selectedPizza.image}
              />
              <p>Price: {price}</p>
            </>
          )}
        </div>
      </form>
    </div>
  );
}

