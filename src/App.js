const Pizza = (props) => {
    return React.createElement(
        "div",
        {},
        [
            React.createElement("h1", {}, props.name),
            React.createElement("p", {}, props.description)
        ]
    )
}

const App = () => {
    return React.createElement(
        "div",
        {},
        [
            React.createElement("h1", {}, "Papa Gino's"),
            React.createElement(Pizza, { name: "The Cheese Pizza", description: "The Cheese Pizza is a delicious pizza with cheese." }),
            React.createElement(Pizza, { name: "The Pepperoni Pizza", description: "The Pepperoni Pizza is a delicious pizza with pepperoni." }),
            React.createElement(Pizza, { name: "The Supreme Pizza", description: "The Supreme Pizza is a delicious pizza with all the toppings." }),
            React.createElement(Pizza, { name: "The Veggie Pizza", description: "The Veggie Pizza is a delicious pizza with vegetables." }),
            React.createElement(Pizza, { name: "The Meat Pizza", description: "The Meat Pizza is a delicious pizza with meat." })
        ]
    )
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
