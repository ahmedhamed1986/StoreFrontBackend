CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    status VARCHAR(50),
    quantity integer,
    product_id integer REFERENCES products(id),
    user_id integer REFERENCES users(id)
);