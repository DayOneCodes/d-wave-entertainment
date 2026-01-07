import express from "express";
import { Subscriber } from "../models/subscribe.model.js";
import axois from "axios";
import validator from "validator";

const BREVO_API_KEY = process.env.BREVO_API_KEY;
const BREVO_LIST_ID = Number(process.env.BREVO_LIST_ID);

export const createSubscriber = async (req, res) => {
  try{
    const { email } = req.body;

    if (!email  || !validator.isEmail(email)){
      return res.status(400).json({ message: "Invalid email address"});
    }

    const normalizedEmail = validator.normalizeEmail(email);

    await axios.post(
       "https://api.brevo.com/v3/contacts",
       {
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
      return res.status(500).json({message: "Subscription failed" });
  }
}



