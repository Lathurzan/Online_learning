require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors({ 
  origin: 'http://localhost:5173', 
  credentials: true 
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/user', require('./routes/userAuth'));
app.use('/api/admin', require('./routes/adminAuth'));
// Mount the stats route
app.use('/api', require('./routes/stats'));

// Routes
app.use('/api/trainers', require('./routes/trainers')); // ✅ Ensure this is correct





//cont create subscription route
const plan =[
{
  planId: 'price_1QpB1YLfpECkoc7pqEbq9mLe',
  name: 'standard',
  duration: 'month',
},
{
  planId: 'price_1QpB4ALfpECkoc7pM6ZTUk76',
  name: 'premium',
  duration: 'year',
},
]


//create subscription route
app.post('/subscription', async (req, res) => {
  const { name, duration } = req.body;
  const plan = plans.find(plan => plan.name === name && plan.duration === duration);
  console.log({plan});
  if (!plan){
    return res.status (400).json({ message: 'Invalid plan' });
  }



try {
  const session = await stripe.checkout.sessions.create({
    mode: 'subscription',
    payment_method_types: ['card'],
    line_items: [
      {
        price: plan.planId,
      },
    ],
    sucess_url: `http://localhost:5175/paymentsuccess?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `http://localhost:5175/paymentcancel`,
    customer_email: 'subanlathu@gmail.com',

  });

return res.status(200).json({ sessionId: session.id});


}catch (error) {
  console.error('❌ Error:', error);
  throw error;
}
});









// Global Error Handling Middleware
app.use((err, req, res, next) => {
  console.error('❌ Error:', err.stack);
  res.status(500).json({ 
    message: 'Something went wrong', 
    error: err.message 
  });
});

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => 
  console.log(`🚀 Server running on port ${PORT}`)
);

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
  console.error(`❌ Error: ${err.message}`);
  server.close(() => process.exit(1));
});

module.exports = app;
