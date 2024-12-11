import React from "react";
import { createRoot } from "react-dom/client";
import Pizza from "./Pizza";



const App = () => {

    return (
        <div>
            <h1>Papa Gino's - Order Now!</h1>
            <Pizza name="The Peproni Pizza" description="The Peproni Pizza is a delicious Mozzarella cheese pizza with pepperoni." />
            <Pizza name="Hawaiian Pizza" description="The Hawaiian Pizza is a delicious Mozzarella cheese pizza with ham and pineapple." />
            <Pizza name="The Supreme Pizza" description="The Supreme Pizza is a delicious Mozzarella cheese pizza with all the toppings." />
        </div>
    )
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
