# Connect your NodeJS application to PostgreSQL

[ ] Create an instance on ElephantSQL (you have a guide for that). Create the database with:

```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  first_name varchar(255),
  last_name varchar(255),
  age int,
  active BOOLEAN NOT NULL DEFAULT true
);

CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  price float,
  date timestamp,
  user_id int,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

INSERT INTO users (first_name, last_name, age) VALUES ('John', 'Doe', 18);
INSERT INTO users (first_name, last_name, age) VALUES ('Bob', 'Dylan', 30);
INSERT INTO users (first_name, last_name, age) VALUES ('Jane', 'Doe', 25);

INSERT INTO orders (price, date, user_id) VALUES (18, '2021-01-01 00:00:00', 1);
INSERT INTO orders (price, date, user_id) VALUES (18, '2021-01-02 04:00:00', 1);
INSERT INTO orders (price, date, user_id) VALUES (18, '2021-01-03 05:00:00', 2);
INSERT INTO orders (price, date, user_id) VALUES (18, '2021-01-04 06:00:00', 2);
```

Create an Express server with separate routes.
<br>
The users:
<br>

- [ ] GET / : To get all the users
      <br>
- [ ] GET /:id : To get one user (with the id)
      <br>
- [ ] POST / -> To create a new user
      <br>
- [ ] PUT /:id : To edit one user (with the id)
      <br>
- [ ] DELETE /:id : To delete one user (with the id)

<br>
The orders:
<br>

- [ ] GET / : To get all the orders
      <br>
- [ ] GET /:id : To get one order (with the id)
      <br>
- [ ] POST / -> To create a new order
      <br>
- [ ] PUT /:id : To edit one order (with the id)
      <br>
- [ ] DELETE /:id : To delete one order (with the id)
      <br>

### Extra

If you are finished with these, try to:
<br>
[ ] Validate all the data coming from the users/orders for the Post/Put routes

- https://express-validator.github.io/docs/index.html

[ ] Create a separate module for your pool object

- https://node-postgres.com/guides/async-express

[ ] Create a user route that will return all the orders of a user

- GET /:id/orders : To get all orders linked to a specific user

[ ] Create another user route that will set a user as inactive if he has never ordered anything:

- PUT /:id/check-inactive : If a user has never ordered, he should be set as inactive

[ ] Separate routes in 2 router files. One for Users, one for Orders: https://expressjs.com/en/guide/routing.html
<br>
Don’t forget to check the documentation here: https://node-postgres.com
