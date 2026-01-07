import express from "express";
import { Subscriber } from "../models/subscribe.model.js";
import axios from "axios";
import validator from "validator"
// import validator from "validator";



export const createSubscriber = async (req, res) => {
  try{
    const BREVO_API_KEY = process.env.BREVO_API_KEY;
    const BREVO_LIST_ID = Number(process.env.BREVO_LIST_ID);


    if (!BREVO_API_KEY || !BREVO_LIST_ID){
      return res.status(500).json({
        message: "Brevo API key or list ID not configured"
      });
    }

    const { email, formStartedAt } = req.body;

    if (!formStartedAt || Date.now() - formStartedAt < 3000){
      return res.status(400).json({
        message: "Suspicious activity detected"
      })
    }

    if (!email || typeof email !== "string") {
      return res.status(400).json({message: "Email is required"})
    }

    const normalizedEmail = validator.normalizeEmail(email);

    if (!normalizedEmail || !validator.isEmail(normalizedEmail)){
      return res.status(400).json({message: "Invalid email address"})
    }

    await axios.post(
       "https://api.brevo.com/v3/contacts",
       {
        // email: normalizedEmail,
        email: normalizedEmail,
        listIds: [BREVO_LIST_ID],
        updateEnabled: true,
       },
       {
        headers: {
          "api-key": BREVO_API_KEY,
          "Content-Type": "application/json"
        },
       }
    );

    return res.status(201).json({ message: "Submission successful"})
  }
  catch (err) {
      console.error("Brevo error:", err.response?.data || err.message)
      return res.status(500).json({message: err.response?.data || "Subscription failed" });
  }
}



