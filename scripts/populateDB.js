const mongoose = require('mongoose');
const Customer = require('../models/customerModel');
const Membership = require('../models/membershipModel');

mongoose.connect('mongodb://127.0.0.1:27017/clientes_membresias_db', { auth: { username: "admin", password: "1234" } });

async function populateDatabase() {
  try {
    const customers = await Customer.create([
      { firstName: 'John', lastName: 'Doe', document: '123456789', phoneNumber: '5551234', birthDate: '1990-01-01' },
      { firstName: 'Alice', lastName: 'Smith', document: '987654321', phoneNumber: '5555678', birthDate: '1992-05-15' },
      { firstName: 'Bob', lastName: 'Johnson', document: '456789123', phoneNumber: '5552468', birthDate: '1985-09-30' },
      { firstName: 'Emily', lastName: 'Brown', document: '789123456', phoneNumber: '5551357', birthDate: '1988-07-20' },
      { firstName: 'Michael', lastName: 'Davis', document: '321654987', phoneNumber: '5553698', birthDate: '1994-03-10' }
    ]);

    const memberships = await Membership.create([
      { customerId: customers[0]._id, type: 'GOLD', startDate: new Date(), endDate: new Date().setMonth(new Date().getMonth() + 6) },
      { customerId: customers[1]._id, type: 'PLUS', startDate: new Date(), endDate: new Date().setMonth(new Date().getMonth() + 6) },
      { customerId: customers[2]._id, type: 'CLASSIC', startDate: new Date(), endDate: new Date().setMonth(new Date().getMonth() + 6) },
      { customerId: customers[3]._id, type: 'PLUS', startDate: new Date(), endDate: new Date().setMonth(new Date().getMonth() + 6) },
      { customerId: customers[4]._id, type: 'GOLD', startDate: new Date(), endDate: new Date().setMonth(new Date().getMonth() + 6) }
    ]);

    console.log('Base de datos poblada exitosamente con 5 clientes y 5 membresías.');
  } catch (error) {
    console.error('Error al poblar la base de datos:', error);
  }
}

populateDatabase();
