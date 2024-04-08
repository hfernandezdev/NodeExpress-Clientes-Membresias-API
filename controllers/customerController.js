const Customer = require('../models/customerModel');
const mongoose = require('mongoose');

// Obtener todos los clientes con sus membresías
exports.getCustomersWithMemberships = async (req, res) => {
  try {
    const customers = await Customer.aggregate([
      {
        $lookup: {
          from: 'memberships',
          localField: '_id',
          foreignField: 'customerId',
          as: 'memberships'
        }
      }
    ]);

    res.json(customers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Obtener todos los clientes
exports.getCustomers = async (req, res) => {
  try {
    const customers = await Customer.aggregate([
      {
        $lookup: {
          from: 'memberships',
          localField: '_id',
          foreignField: 'customerId',
          as: 'memberships'
        }
      },
      {
        $project: {
          firstName: 1,
          lastName: 1,
          document: 1,
          phoneNumber: 1,
          birthDate: 1,
          memberships: '$memberships._id'
        }
      }
    ]);
    res.json(customers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Obtener un cliente
exports.getCustomer = async (req, res) => {
  try {
    const { id } = req.params;
    const customerFound = await Customer.aggregate([
      {
        $match: {
          _id: new mongoose.Types.ObjectId(id)
        }
      },
      {
        $lookup: {
          from: 'memberships',
          localField: '_id',
          foreignField: 'customerId',
          as: 'memberships'
        }
      },
      {
        $project: {
          firstName: 1,
          lastName: 1,
          document: 1,
          phoneNumber: 1,
          birthDate: 1,
          memberships: '$memberships._id'
        }
      }
    ]);

    if (customerFound.length === 0) {
      return res.status(404).json({ message: 'Cliente no encontrado' });
    }
    res.json(customerFound[0]);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Crear un nuevo cliente
exports.createCustomer = async (req, res) => {
  try {
    const { document } = req.body;
    const customerFound = await Customer.findOne({ document: document });
    if (customerFound) {
      return res.status(409).json({ message: 'Cliente ya existe' });
    }

    const customer = new Customer({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      document: req.body.document,
      phoneNumber: req.body.phoneNumber,
      birthDate: req.body.birthDate
    });

    const newCustomer = await customer.save();
    res.status(201).json(newCustomer);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Actualizar un cliente existente
exports.updateCustomer = async (req, res) => {
  try {
    const { id } = req.params;
    const customerFound = await Customer.findById(id);
    if (!customerFound) {
      return res.status(404).json({ message: 'Cliente no encontrado' });
    }
    await Customer.findByIdAndUpdate(req.params.id, req.body);
    res.json({ message: 'Cliente actualizado' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Eliminar un cliente existente
exports.deleteCustomer = async (req, res) => {
  try {
    const { id } = req.params;
    const customerFound = await Customer.findById(id);
    if (!customerFound) {
      return res.status(404).json({ message: 'Cliente no encontrado' });
    }
    await Customer.findByIdAndDelete(req.params.id);
    res.json({ message: 'Cliente eliminado' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
