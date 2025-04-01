// Import the Twilio library
const twilio = require("twilio"); // Or, for ESM: import twilio from "twilio";

// Retrieve Twilio credentials, service SID, and phone number from environment variables
const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
const verifyServiceSid = process.env.VERIFY_SERVICE_SID;
const phoneNumber = process.env.PHONE_NUMBER;

// Initialize the Twilio client
const client = twilio(accountSid, authToken);


/**
 * Sends an SMS verification code to the specified phone number.
 * @param {string} phoneNumber - The phone number to send the verification code to.
 */
async function sendSmsVerification(phoneNumber) {
    try {
      const verification = await client.verify.v2
        .services(verifyServiceSid)
        .verifications.create({
          channel: "sms",
          to: phoneNumber,
        });
  
      console.log(`Verification status: ${verification.status}`);
    } catch (error) {
      console.error("Error sending verification code:", error.message);
    }
  }
  
  /**
   * Validates the verification code for the specified phone number.
   * @param {string} phoneNumber - The phone number to validate the code for.
   * @param {string} code - The verification code provided by the user.
   * @returns {boolean} - True if the code is valid, false otherwise.
   */
  async function validateVerificationCode(phoneNumber, code) {
    try {
      const verificationCheck = await client.verify.v2
        .services(verifyServiceSid)
        .verificationChecks.create({
          to: phoneNumber,
          code: code,
        });
  
      return verificationCheck.status === "approved";
    } catch (error) {
      console.error("Error validating verification code:", error.message);
      return false;
    }
  }
  
  module.exports = { sendSmsVerification, validateVerificationCode };