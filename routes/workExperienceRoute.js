







const express = require('express');
const workExperienceRoute = express.Router();

const { verifyHREmployee, verifyEmployee} = require('../middleware/authMiddleware');

const { getAllWorkExperience, createWorkExperience, updateWorkExperience, deleteWorkExperience } = require('../controllers/workExperienceController');

// GET: Retrieve all countries
workExperienceRoute.get("/work-experience/:id",  getAllWorkExperience);

// POST: Create a new city
workExperienceRoute.post("/work-experience/:id",   createWorkExperience);

// PUT: Update an existing work
workExperienceRoute.put("/work-experience/:id",   updateWorkExperience);

// DELETE: Delete a work
workExperienceRoute.delete("/work-experience/:id",   deleteWorkExperience);

module.exports = workExperienceRoute;