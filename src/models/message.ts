import mongoose, { Schema } from "mongoose";

const messageSchema = new Schema({
	user: {type: String, required: true},
	body: {type: String, required: true},
	added: new Date()
});

const Message = mongoose.model('Message', messageSchema);

export default Message;
