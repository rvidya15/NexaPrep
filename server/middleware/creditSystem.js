const User = require('../models/User');

const checkAiCredits = (cost = 1) => async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id);
    
    // Pro users get unlimited access, or action is free
    if (user.subscriptionPlan === 'pro' || cost === 0) {
      return next();
    }

    // Free users require AI tokens
    if (user.aiTokens >= cost) {
      user.aiTokens -= cost;
      await user.save();
      return next();
    } else {
      return res.status(402).json({ error: `Not enough tokens! This action requires ${cost} tokens.` });
    }
  } catch (error) {
    res.status(500).json({ error: 'Credit verification failed.' });
  }
};

module.exports = { checkAiCredits };
