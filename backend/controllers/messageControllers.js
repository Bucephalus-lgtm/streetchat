const asyncHandler = require("express-async-handler");
const Message = require("../models/messageModel");
const User = require("../models/userModel");
const Chat = require("../models/chatModel");

//@description     Get all Messages
//@route           GET /api/Message/:chatId
//@access          Protected
const allMessages = asyncHandler(async (req, res) => {
  try {
    const messages = await Message.find({ chat: req.params.chatId })
      .populate("sender", "name pic email")
      .populate("chat");
    res.json(messages);
  } catch (error) {
    res.status(400);
    throw new Error(error.message);
  }
});

//@description     Create New Message
//@route           POST /api/Message/
//@access          Protected
const sendMessage = asyncHandler(async (req, res) => {
  const { content, chatId } = req.body;

  if (!content || !chatId) {
    console.log("Invalid data passed into request");
    return res.sendStatus(400);
  }

  //check chat
  //if chat has sm ON and req.id is not admin then error

  //
  var chat = await Chat.findOne({ _id: chatId });
  // console.log({ CHAT: chat });
  // if (!chat) {
  //   throw new Error("Only admins can message in this group");
  // }
  // console.log("gc", chat)
  // console.log("my id", req.user._id)
  // console.log({ chatGroupAdmin: chat.groupAdmin, myId: req.user._id });
  if (
    chat.isGroupChat === true &&
    chat.strictMode === true &&
    !chat.groupAdmin.equals(req.user._id)
  ) {
    res.status(400);
    throw new Error("Only admins can message in this group");
  }
  // if chat is a groupChat and

  var newMessage = {
    sender: req.user._id,
    content: content,
    chat: chatId,
  };

  try {
    var message = await Message.create(newMessage);

    message = await message.populate("sender", "name pic").execPopulate();
    message = await message.populate("chat").execPopulate();
    message = await User.populate(message, {
      path: "chat.users",
      select: "name pic email",
    });

    await Chat.findByIdAndUpdate(req.body.chatId, { latestMessage: message });

    res.json(message);
  } catch (error) {
    res.status(400);
    throw new Error(error.message);
  }
});

module.exports = { allMessages, sendMessage };
