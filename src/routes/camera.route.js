const express = require('express');
const app = express.Router();
const cameraController = require('../controllers/camera.controller');

app.post('/', cameraController.cameraPost);
app.get('/', cameraController.getPosts);
app.get('/:id', cameraController.getCameraById);
app.put('/:id', cameraController.updateCamera);
app.delete('/:id', cameraController.deleteCamera);
app.get('/ip/:ip', cameraController.getCameraByIP);

module.exports = app;
