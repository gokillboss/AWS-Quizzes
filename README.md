# AWS Certification Practice Platform

A comprehensive full-stack web application designed to help users prepare for AWS certification exams through interactive practice tests, AI-powered assistance, and personalized study resources.

## 🌟 Features

### 📚 Practice Tests
- Multiple AWS certification practice quizzes
- Timed exam simulations (90 minutes, 70 questions)
- Question marking and review functionality
- Randomized questions and answer options
- Detailed scoring and progress tracking

### 🤖 AI Assistant
- OpenAI-powered question analysis
- Real-time study assistance
- Interactive Q&A during practice
- Detailed explanations for AWS concepts
- Contextual help based on selected answers

### 💳 Payment Integration
- Stripe payment processing
- Premium quiz access
- Secure transaction handling
- Purchase verification system

### 👤 User Management
- User registration and email verification
- Password reset functionality
- Profile management
- Premium user status tracking

### 🎯 Exam Simulation
- Real AWS exam environment simulation
- Question navigation and marking
- Countdown timer with progress tracking
- Results analysis and review mode

## 🛠️ Tech Stack

### Frontend
- **React** 18 with TypeScript
- **React Bootstrap** for UI components
- **React Router** for navigation
- **Stripe** for payment processing
- **Axios** for API communication

### Backend
- **Node.js** with **Express.js**
- **TypeScript** for type safety
- **MongoDB** with **Mongoose** ODM
- **JWT** for authentication
- **Stripe** for payment processing
- **Nodemailer** for email services
- **OpenAI API** for AI assistance

### Additional Tools
- **Bcrypt** for password hashing
- **CORS** for cross-origin requests
- **Rate limiting** for API protection
- **Morgan** for request logging

## 📋 Prerequisites

Before running this application, make sure you have:

- **Node.js** (v16 or higher)
- **MongoDB** (v5 or higher)
- **npm** or **yarn**
- **Stripe account** (for payment processing)
- **OpenAI API key** (for AI features)
- **Gmail account** (for email services)

## 🚀 Installation & Setup

### 1. Clone the Repository
```bash
git clone <repository-url>
cd aws-quiz-platform
```

### 2. Backend Setup
```bash
cd backend
npm install
```

Create a `.env` file in the backend directory:
```env
# Database
MONGO_URI=mongodb://127.0.0.1:27017/AWS_Quiz

# JWT
JWT_SECRET=your_super_secret_jwt_key

# Email Configuration
EMAIL_USER=your_gmail@gmail.com
EMAIL_PASS=your_app_password

# Stripe
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret

# OpenAI
OPENAI_API_KEY=sk-your_openai_api_key

# Frontend URL
CLIENT_URL=http://localhost:3000

# Environment
NODE_ENV=development
```

### 3. Frontend Setup
```bash
cd frontend
npm install
```

Create a `.env` file in the frontend directory:
```env
REACT_APP_STRIPE_PUBLIC_KEY=pk_test_your_stripe_public_key
```

### 4. Database Setup
Start MongoDB and run the data seeding scripts:
```bash
cd backend/src/data
npm run build
node addAdminUser.js
node addAWS_Quiz1.js
node addAWS_Quiz2.js
node addAWS_VIP_Quiz.js
```

### 5. Start the Application

**Backend:**
```bash
cd backend
npm run dev
```

**Frontend:**
```bash
cd frontend
npm start
```

The application will be available at:
- Frontend: `http://localhost:3000`
- Backend API: `http://localhost:5000`

## 📊 Database Structure

### Collections
- **Users**: User profiles, authentication, and premium status
- **Quizzes**: Quiz metadata and question references
- **Questions**: Individual questions with options and categories
- **Transactions**: Payment records and purchase history

### Default Admin Account
- Email: `admin@gmail.com`
- Password: `hohuudai`

## 🔐 Security Features

- JWT-based authentication
- Password hashing with bcrypt
- Rate limiting on sensitive endpoints
- Input validation and sanitization
- CORS protection
- Secure payment processing

## 🎮 Usage

### For Students
1. **Register** for a new account
2. **Verify** your email address
3. **Browse** available practice quizzes
4. **Purchase** premium quizzes (if required)
5. **Take** practice tests with AI assistance
6. **Review** results and explanations


## 🤖 AI Features

The platform integrates OpenAI's GPT models to provide:
- **Question Analysis**: Detailed explanations of AWS concepts
- **Interactive Help**: Real-time assistance during practice
- **Study Guidance**: Personalized recommendations
- **Concept Clarification**: Clear explanations of complex topics

## 💰 Payment Features

- Secure Stripe integration
- One-time quiz purchases
- Premium account upgrades
- Automatic access management
- Transaction history tracking

## 📱 Responsive Design

The application is fully responsive and works seamlessly on:
- Desktop computers
- Tablets
- Mobile devices


## 🚀 Deployment

### Environment Variables for Production
Update your production environment variables:
```env
NODE_ENV=production
MONGO_URI=your_production_mongodb_url
CLIENT_URL=https://your-domain.com
```


## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes and commit: `git commit -m 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request


## 🎯 Future Enhancements

- [ ] Mobile app development
- [ ] Advanced analytics dashboard
- [ ] Social learning features
- [ ] Video explanations
- [ ] Practice test scheduling
- [ ] Achievement system
- [ ] Study group functionality



## 🙏 Acknowledgments

- AWS for providing excellent certification resources
- OpenAI for AI assistance capabilities
- Stripe for secure payment processing
- React and Node.js communities for excellent frameworks

---

**Made with ❤️ for AWS certification aspirants**
