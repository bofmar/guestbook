import mongoose, { Schema } from "mongoose";

const messageSchema = new Schema({
	user: {type: String, required: true},
	body: {type: String, required: true},
	added: {type: Date, required: true} 
});

const Message = mongoose.model('Message', messageSchema);

export default Message;
