import { config } from "dotenv";
import { connectDB } from "../lib/db.js";
import User from "../models/user.model.js";

config();

 const seedUsers = [
  // Boy 1
  {
    email: "arjun.patel@example.com",
    fullName: "Arjun Patel",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/10.jpg",
  },
  // Girl 1
  {
    email: "aarohi.sharma@example.com",
    fullName: "Aarohi Sharma",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/10.jpg",
  },
  // Boy 2
  {
    email: "rahul.verma@example.com",
    fullName: "Rahul Verma",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  // Boy 3
  {
    email: "veer.joshi@example.com",
    fullName: "Veer Joshi",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  // Girl 2
  {
    email: "isha.kapoor@example.com",
    fullName: "Isha Kapoor",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/11.jpg",
  },
  // Boy 4
  {
    email: "rohit.singh@example.com",
    fullName: "Rohit Singh",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/13.jpg",
  },
  // Boy 5
  {
    email: "yash.mehta@example.com",
    fullName: "Yash Mehta",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/14.jpg",
  },
  // Girl 3
  {
    email: "meera.bansal@example.com",
    fullName: "Meera Bansal",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  // Boy 6
  {
    email: "manav.iyer@example.com",
    fullName: "Manav Iyer",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/15.jpg",
  },
  // Boy 7
  {
    email: "karan.rai@example.com",
    fullName: "Karan Rai",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/16.jpg",
  },
  // Girl 4
  {
    email: "saanvi.rana@example.com",
    fullName: "Saanvi Rana",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/13.jpg",
  },
  // Boy 8
  {
    email: "aditya.das@example.com",
    fullName: "Aditya Das",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/17.jpg",
  },
  // Boy 9
  {
    email: "siddharth.nair@example.com",
    fullName: "Siddharth Nair",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/18.jpg",
  },
  // Boy 10
  {
    email: "vivaan.mukherjee@example.com",
    fullName: "Vivaan Mukherjee",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/19.jpg",
  }
];


const seedDatabase = async () => {
  try {
    await connectDB();

    await User.insertMany(seedUsers);
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

// Call the function
seedDatabase();
