//bring in all our secret keys for stripe
require('dotenv').config();

module.exports = {
  // Default country for the checkout form.
  country: "US",

  // Store currency.
  currency: "eur",

  stripe: {
    // The two-letter country code of your Stripe account (required for Payment Request).
    country: process.env.STRIPE_ACCOUNT_COUNTRY || "US",
    // API version to set for this app (Stripe otherwise uses your default account version).
    apiVersion: "2019-03-14",
    // Use your test keys for development and live keys for real charges in production.
    // For non-card payments like iDEAL, live keys will redirect to real banking sites.
    publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
    secretKey: process.env.STRIPE_SECRET_KEY,
    // Setting the webhook secret is good practice in order to verify signatures.
    // After creating a webhook, click to reveal details and find your signing secret.
    webhookSecret: process.env.STRIPE_WEBHOOK_SECRET
  }
};