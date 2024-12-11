CREATE TABLE pizza_types (
    pizza_type_id INTEGER PRIMARY KEY,
    name TEXT,
    category TEXT,
    ingredients TEXT
);

CREATE TABLE pizzas (
    pizza_id TEXT PRIMARY KEY,
    pizza_type_id INTEGER,
    size TEXT,
    price REAL,
    FOREIGN KEY (pizza_type_id) REFERENCES pizza_types(pizza_type_id)
);

CREATE TABLE orders (
    order_id INTEGER PRIMARY KEY AUTOINCREMENT,
    date TEXT,
    time TEXT
);

CREATE TABLE order_details (
    order_id INTEGER,
    pizza_id TEXT,
    quantity INTEGER,
    FOREIGN KEY (order_id) REFERENCES orders(order_id),
    FOREIGN KEY (pizza_id) REFERENCES pizzas(pizza_id)
);