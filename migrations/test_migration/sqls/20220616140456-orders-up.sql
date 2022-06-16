CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    status VARCHAR(50),
    quantity integer,
    product_id integer REFERENCES products(id),
    user_id integer REFERENCES users(id)
);


INSERT INTO orders(status, quantity, product_id, user_id) VALUES ('active', 10,'1','1');
INSERT INTO orders(status, quantity, product_id, user_id) VALUES ('complete', 15,'3','1');
INSERT INTO orders(status, quantity, product_id, user_id) VALUES ('complete', 7,'5','2');
INSERT INTO orders(status, quantity, product_id, user_id) VALUES ('active', 9,'2','2');
INSERT INTO orders(status, quantity, product_id, user_id) VALUES ('complete', 20,'5','2');
INSERT INTO orders(status, quantity, product_id, user_id) VALUES ('active', 100,'5','1');
INSERT INTO orders(status, quantity, product_id, user_id) VALUES ('complte', 3,'5','1');
INSERT INTO orders(status, quantity, product_id, user_id) VALUES ('complete', 1,'3','1');
