const pool = require('../utils/pool');

module.exports = class Lodging {
  id;
  nameOfPlace;
  contactInfo;
  pricePerNight;
  checkIn;
  checkOut;
  address1;
  address2;
  city;
  state;
  zip;

  constructor(row) {
    this.id = row.id;
    this.nameOfPlace = row.name_of_place;
    this.contactInfo = row.contact_info;
    this.pricePerNight = row.price_per_night;
    this.checkIn = row.check_in;
    this.checkOut = row.check_out;
    this.address1 = row.address_1;
    this.address2 = row.address_2;
    this.city = row.city;
    this.state = row.state;
    this.zip = row.zip;
  }
  static async insert({
    nameOfPlace,
    contactInfo,
    pricePerNight,
    checkIn,
    checkOut,
    address1,
    address2,
    city,
    state,
    zip,
  }) {
    const { rows } = await pool.query(
      `INSERT INTO 
            lodging (name_of_place, contact_info, price_per_night, check_in, check_out, address_1, address_2, city, state, zip) 
        VALUES
            ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
        RETURNING
            *
        `,
      [
        nameOfPlace,
        contactInfo,
        pricePerNight,
        checkIn,
        checkOut,
        address1,
        address2,
        city,
        state,
        zip,
      ]
    );
    return new Lodging(rows[0]);
  }

  static async getHotelById(id) {
    const { rows } = await pool.query('SELECT * FROM lodging WHERE id=$1', [
      id,
    ]);
    if (!rows[0]) return null;
    return new Lodging(rows[0]);
  }
};
