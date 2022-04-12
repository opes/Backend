-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS trips CASCADE;
DROP TABLE IF EXISTS users_trips CASCADE;

CREATE TABLE users (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    username TEXT NOT NULL,
    email TEXT NOT NULL,
    avatar TEXT
);

CREATE TABLE trips (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    location TEXT NOT NULL,
    start_date DATE,
    end_date DATE,
    users BIGINT NOT NULL REFERENCES users(id)
);

CREATE TABLE users_trips (
    users_id BIGINT REFERENCES users(id),
    trips_id BIGINT REFERENCES trips(id)
);

-- INSERT INTO
-- trips (location, start_date, end_date, users)
-- VALUES
-- ('vegas', '4/29/2022', '5/12/2022', 1),
-- ('italy', '6/19/2022', '7/20/2022', 2);
