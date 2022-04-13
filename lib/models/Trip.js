const pool = require('../utils/pool');

module.exports = class Trip {
  id;
  location;
  startDate;
  endDate;
<<<<<<< HEAD
  users;
=======
>>>>>>> 77e878bb709e9539eb901d81dd77db5588d531bc

  constructor(row) {
    this.id = row.id;
    this.location = row.location;
    this.startDate = new Date(row.start_date).toLocaleDateString('en-US');
    this.endDate = new Date(row.end_date).toLocaleDateString('en-US');
<<<<<<< HEAD
    this.users = row.users;
=======
  }

  static async insert({ location, startDate, endDate }) {
    const { rows } = await pool.query(
      'INSERT INTO trips (location, start_date, end_date) VALUES ($1, $2, $3) RETURNING *;',
      [location, startDate, endDate]
    );
    return new Trip(rows[0]);
>>>>>>> 77e878bb709e9539eb901d81dd77db5588d531bc
  }

  static async getTrips() {
    const { rows } = await pool.query('SELECT * FROM trips');
    return rows.map((row) => new Trip(row));
  }
};
