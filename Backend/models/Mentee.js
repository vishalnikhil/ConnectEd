const mongoose = require('mongoose');

const menteeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  role: { type: String, enum: ['mentee'], required: true },  // role is fixed to 'mentee'
  profile_details: { type: String, default: '' },
  tags: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Tag' }],  // tags referencing the Tag model
  jobTitle: { type: String },  // field for job title
  company: { type: String },   // field for company
  location: { type: String },  // field for location
  bio: { type: String },       // field for bio
  summary: { type: String },   // field for summary
  bookedSessions: [{
    sessionId: { type: mongoose.Schema.Types.ObjectId, ref: 'Session' },
    date: { type: Date },
    time: { type: String }
  }],  // sessions the mentee has registered for
  communityJoined: [{ 
    type: mongoose.Schema.Types.ObjectId, ref: 'Community' 
  }],  // communities the mentee is a part of
  posts: [{ 
    type: mongoose.Schema.Types.ObjectId, ref: 'Post' 
  }],  // posts made by the mentee
});

const Mentee = mongoose.model('Mentee', menteeSchema);
module.exports= Mentee;