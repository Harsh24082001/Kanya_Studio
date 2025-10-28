const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const contactModel = require("../../../../Schema/Contact_Schema");
require("dotenv").config({ path: "./.env" });

const app = express();
const port = 4000; 

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose
  .connect(process.env.MONGODB)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Not Connected to MongoDB:", err));

// API route
app.post("/contactform", async (req, res) => {
  try {
    const { name, email, phone, guestCount, eventDetails, location, eventDate, services } = req.body;

    const newContact = new contactModel({
      name,
      email,
      phone,
      guestCount,
      eventDetails,
      location,
      eventDate,
      services,
    });

    const customerDetails = await newContact.save();
    console.log("Form Submitted:", customerDetails);

    res.status(200).json({ success: true, message: "Form submitted successfully!" });
  } catch (error) {
    console.error("Error saving contact:", error);
    res.status(500).json({ success: false, message: "Server error", error });
  }
});

// Start server
app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
