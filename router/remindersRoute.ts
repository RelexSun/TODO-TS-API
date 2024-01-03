import { Router } from "express";
import CreateReminderDto from "../dtos/create-reminders";
import Reminder from "../models/reminder";

const router = Router();
const reminders: Reminder[] = [];

router.get("/", (req, res) => {
  res.json(reminders);
});

router.post("/", (req, res) => {
  const { title } = req.body as CreateReminderDto;
  const rmeinder = new Reminder(title);
  reminders.push(rmeinder);
  res.status(201).json(rmeinder);
});

export default router;
