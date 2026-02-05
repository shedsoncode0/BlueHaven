/** @format */

const router = require("express").Router();
const Conversation = require("../models/conversation_model");

router.post("/", async (req, res) => {
  const newConversation = new Conversation({
    members: [req.body.senderId, req.body.receiverId],
  });

  try {
    const savedConversation = await newConversation.save();
    res.status(201).json({
      status: true,
      message: "conversation has been saved",
      data: savedConversation,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      error,
    });
  } 
});

router.get("/:userId", async (req, res) => {
  const userId = req.params.userId;
  try {
    const conversation = await Conversation.find({
      members: { $in: [userId] },
    });
    res.status(200).json({
      status: true,
      message: "all conversation",
      data: conversation,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      error,
    });
  }
});

module.exports = router;
