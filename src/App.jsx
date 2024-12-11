import React from "react";
import { createRoot } from "react-dom/client";
import Pizza from "./Pizza";



const App = () => {

    return (
        <div>
            <h1>Papa Gino's - Order Now!</h1>
            <Pizza
                name="Peproni"
                description="The Peproni Pizza is a delicious Mozzarella cheese pizza with pepperoni."
                image={"/public/pizzas/pepperoni.webp"}
            />
            <Pizza
                name="Hawaiian"
                description="The Hawaiian Pizza is a delicious Mozzarella cheese pizza with ham and pineapple."
                image={"/public/pizzas/hawaiian.webp"}
            />
            <Pizza
                name="Americano"
                description="The Americano Pizza is a delicious Mozzarella cheese pizza with all the toppings."
                image={"/public/pizzas/big_meat.webp"}
            />
        </div>
    )
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
