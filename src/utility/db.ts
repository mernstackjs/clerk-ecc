import mongoose from "mongoose";

const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(process.env.MONGODB_URL as string);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};

mongoose.connection.on("connected", () =>
  console.log("MongoDB connected to the server")
);

mongoose.connection.on("error", (err) =>
  console.error("MongoDB connection error:", err)
);

mongoose.connection.on("disconnected", () =>
  console.log("MongoDB connection disconnected")
);

process.on("SIGINT", async () => {
  await mongoose.connection.close();
  console.log("MongoDB connection closed due to Node.js process termination");
  process.exit(0);
});

export default connectDB;
