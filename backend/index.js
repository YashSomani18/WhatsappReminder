require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

// App config
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// DB config
mongoose
  .connect(process.env.LINK, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(9000, () => console.log("Backend working successfully"));
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

// Schema
const reminderSchema = new mongoose.Schema({
  reminderMsg: String,
  remindAt: String,
  isReminded: Boolean,
});
const Reminder = mongoose.model("reminder", reminderSchema);

// Send reminder
const sendReminder = (reminder) => {
  const accountSid = process.env.ACCOUNT_SID;
  const authToken = process.env.AUTH_TOKEN;
  const client = require("twilio")(accountSid, authToken);

  client.messages
    .create({
      body: reminder.reminderMsg,
      from: "whatsapp:+14155238886",
      to: "whatsapp:+917042962313",
    })
    .then((message) => console.log(message.sid))
    .catch((err) => console.log(err));
};

// Schedule reminders check
setInterval(() => {
  const now = new Date();
  Reminder.find({ isReminded: false, remindAt: { $lt: now } })
    .then((reminderList) => {
      reminderList.forEach((reminder) => {
        Reminder.findByIdAndUpdate(reminder._id, { isReminded: true })
          .then((remindObj) => {
            sendReminder(reminder);
          })
          .catch((err) => {
            console.log(err);
          });
      });
    })
    .catch((err) => {
      console.log(err);
    });
}, 1000);

// API Routes
app.get("/getAllReminder", async (req, res) => {
  try {
    const reminderList = await Reminder.find({});
    res.send(reminderList);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error");
  }
});

app.post("/addReminder", async (req, res) => {
  const { reminderMsg, remindAt } = req.body;

  try {
    const reminder = new Reminder({
      reminderMsg,
      remindAt,
      isReminded: false,
    });

    await reminder.save();
    const reminderList = await Reminder.find({});
    res.send(reminderList);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error");
  }
});

app.post("/deleteReminder", async (req, res) => {
  const { id } = req.body;

  try {
    await Reminder.deleteOne({ _id: id });
    const reminderList = await Reminder.find({});
    res.send(reminderList);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error");
  }
});

app.get("/", (req, res) => {
  res.send("Successful");
});
