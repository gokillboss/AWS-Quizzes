import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import User from '../models/userModel'; // Adjust the path to your User model as needed

// MongoDB connection string
const mongoUri = 'mongodb://localhost:27017/AWS_Quiz'; // Replace with your MongoDB URI

// Admin user details
const adminData = {
  email: 'admin@gmail.com',
  firstName: 'Admin',
  lastName: 'User',
  password: 'hohuudai', // Use a secure password and consider using environment variables
  phoneNumber: '1234567890',
  isVerified: true,
  isPremium: true,
};

async function createAdminUser() {
  try {
    // Connect to MongoDB
    await mongoose.connect(mongoUri);
    console.log('Connected to MongoDB');

    // Check if admin already exists
    const existingAdmin = await User.findOne({ email: adminData.email });
    if (existingAdmin) {
      console.log('Admin user already exists.');
      return;
    }

    // Hash the password before saving
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(adminData.password, saltRounds);

    // Create and save the admin user
    const adminUser = new User({
      ...adminData,
      password: hashedPassword,
    });

    await adminUser.save();
    console.log('Admin user created successfully');
  } catch (error) {
    console.error('Error creating admin user:', error);
  } finally {
    mongoose.connection.close();
  }
}

createAdminUser();
