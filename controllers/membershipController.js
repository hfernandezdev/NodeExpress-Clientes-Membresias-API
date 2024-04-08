const Customer = require('../models/customerModel');
const Membership = require('../models/membershipModel');

// Obtener todas las membresías
exports.getMemberships = async (req, res) => {
  try {
    const memberships = await Membership.find();
    res.json(memberships);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Obtener una membresía
exports.getMembership = async (req, res) => {
  try {
    const { id } = req.params;
    const membershipFound = await Membership.findById(id);
    if (!membershipFound) {
      return res.status(404).json({ message: 'Membresía no encontrada' });
    }
    res.json(membershipFound);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Crear una nueva membresía
exports.createMembership = async (req, res) => {
  try {
    const { customerId } = req.body;

    const customerFound = await Customer.findById(customerId);
    if (!customerFound) {
      return res.status(404).json({ message: 'Cliente no encontrado' });
    }

    const membership = new Membership({
      customerId: req.body.customerId,
      type: req.body.type
    });

    const newMembership = await membership.save();
    res.status(201).json(newMembership);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Actualizar una membresía existente
exports.updateMembership = async (req, res) => {
  try {
    const { id } = req.params;
    const { customerId } = req.body;

    const membershipFound = await Membership.findById(id);
    if (!membershipFound) {
      return res.status(404).json({ message: 'Membresía no encontrada' });
    }

    const customerFound = await Customer.findById(customerId);
    if (!customerFound) {
      return res.status(404).json({ message: 'Cliente no encontrado' });
    }

    await Membership.findByIdAndUpdate(req.params.id, req.body);
    res.json({ message: 'Membresía actualizada' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Eliminar una membresía existente
exports.deleteMembership = async (req, res) => {
  try {
    const { id } = req.params;
    const membershipFound = await Membership.findById(id);
    if (!membershipFound) {
      return res.status(404).json({ message: 'Membresía no encontrada' });
    }
    await Membership.findByIdAndDelete(req.params.id);
    res.json({ message: 'Membresía eliminada' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
