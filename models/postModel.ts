import mongoose from 'mongoose';

const { Schema } = mongoose;

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    likes: {
      type: Number,
      default: 0,
    },
    likedBy: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],

    image: {
      type: String,
      required: true,
    },
    
    
  },
  { timestamps: true },
);

//If the Post collection does not exist create a new one.
export default mongoose.models.Post || mongoose.model('Post', postSchema);