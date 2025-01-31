const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Create a new camera
exports.cameraPost = async (req, res) => {
  const { ip_address, name, location } = req.body;
  const result = await prisma.cameras.create({
    data: { ip_address, name, location },
  });
  res.json(result);
};

// Get all cameras
exports.getPosts = async (req, res) => {
  const cameras = await prisma.cameras.findMany();
  res.json(cameras);
};

// Get a single camera by ID
exports.getCameraById = async (req, res) => {
  const { id } = req.params;
  const camera = await prisma.cameras.findUnique({
    where: { id: id },
  });
  res.json(camera);
};

// Update a camera
exports.updateCamera = async (req, res) => {
  const { id } = req.params;
  const { ip_address, name, location } = req.body;
  const result = await prisma.cameras.update({
    where: { id: id },
    data: { ip_address, name, location },
  });
  res.json(result);
};

// Delete a camera
exports.deleteCamera = async (req, res) => {
  const { id } = req.params;
  const camera = await prisma.cameras.delete({
    where: { id: id },
  });
  res.json(camera);
};

// Get camera by IP
exports.getCameraByIP = async (req, res) => {
  const { ip } = req.params;
  const camera = await prisma.cameras.findUnique({
    where: { ip_address: ip },
  });
  res.json(camera);
};
