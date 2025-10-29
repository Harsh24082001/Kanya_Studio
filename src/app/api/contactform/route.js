import { NextResponse } from "next/server";
import mongoose from "mongoose";
import contactModel from "../../../../Schema/Contact_Schema.js";

let isConnected = false;

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phone, guestCount, eventDetails, location, eventDate, services } = body;

    // Connect to MongoDB
    if (!isConnected) {
      await mongoose.connect(process.env.MONGODB);
      isConnected = true;
      console.log("✅ Connected to MongoDB");
    }

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

    await newContact.save();

    return NextResponse.json({ success: true, message: "Form submitted successfully!" });
  } catch (error) {
    console.error("❌ Error saving contact:", error);
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
}
