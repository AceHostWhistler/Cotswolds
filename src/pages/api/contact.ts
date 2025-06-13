import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';

// For debugging
const DEBUG_MODE = true;

// Add a function to save form submissions to file if email fails
const saveSubmissionToFile = async (data: any) => {
  try {
    // Create a submissions directory if it doesn't exist
    const dir = path.join(process.cwd(), 'contact-submissions');
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    // Create a unique filename with timestamp
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const filename = path.join(dir, `submission-${timestamp}.json`);
    
    // Write the submission data to file
    fs.writeFileSync(filename, JSON.stringify(data, null, 2));
    console.log(`Saved submission to ${filename}`);
    return true;
  } catch (error) {
    console.error("Failed to save submission to file:", error);
    return false;
  }
};

type ResponseData = {
  success: boolean;
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  // Only allow POST method
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }
  
  try {
    // Get form data from request body
    const { fullName, email, phone, showingTime, guestCount, preferredDate, bookingDetails } = req.body;
    
    // Basic validation
    if (!fullName || !email || !phone) {
      return res.status(400).json({ success: false, message: 'Please provide all required fields' });
    }
    
    // First, always save to file as backup
    const submissionData = {
      fullName,
      email,
      phone,
      showingTime,
      guestCount,
      preferredDate,
      bookingDetails,
      submittedAt: new Date().toISOString(),
    };
    
    await saveSubmissionToFile(submissionData);
    
    // Log environment variables for debugging
    if (DEBUG_MODE) {
      console.log("Email Environment Variables:");
      console.log("SMTP_USER:", process.env.SMTP_USER || "Not set");
      console.log("SMTP_PASSWORD:", process.env.SMTP_PASSWORD ? "Set (length: " + process.env.SMTP_PASSWORD.length + ")" : "Not set");
    }
    
    // Configure email transport with Gmail - using direct configuration
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true, // use SSL
      auth: {
        user: 'benkirsh1@gmail.com', // hardcoded for reliability
        pass: 'jreg ytvb dmcs kpej', // hardcoded app password for reliability
      },
      debug: true, // Enable debug output
    });
    
    // Construct email content
    const emailContent = `
      <h1>New Booking Request from ${fullName}</h1>
      
      <h2>Contact Information:</h2>
      <p><strong>Name:</strong> ${fullName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      
      <h2>Booking Details:</h2>
      <p><strong>Showing Time:</strong> ${showingTime || 'Not specified'}</p>
      <p><strong>Guest Count:</strong> ${guestCount || 'Not specified'}</p>
      <p><strong>Preferred Date & Time:</strong> ${preferredDate || 'Not specified'}</p>
      
      <h2>Additional Information:</h2>
      <p>${bookingDetails || 'No additional details provided.'}</p>
      
      <p>This message was sent from the contact form on the Reel Room website.</p>
    `;
    
    // Setup email data
    const mailOptions = {
      from: '"Reel Room Website" <benkirsh1@gmail.com>',
      to: 'benkirsh1@gmail.com', // Send to Gmail account
      subject: `New Booking Request from ${fullName}`,
      html: emailContent,
      replyTo: email,
    };
    
    try {
      // Verify SMTP connection before sending
      await transporter.verify();
      console.log('SMTP connection verified successfully');
      
      // Send email
      const info = await transporter.sendMail(mailOptions);
      console.log('Email sent successfully:', info.messageId);
      
      // Return success response
      return res.status(200).json({
        success: true,
        message: 'Thank you! Your message has been sent successfully.',
      });
    } catch (emailError: any) {
      console.error('Error in email sending:', emailError);
      console.error('Error details:', emailError.message);
      
      // Try alternative approach
      console.log('Trying alternative email approach...');
      
      // Create alternative transporter
      const altTransporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'benkirsh1@gmail.com',
          pass: 'jreg ytvb dmcs kpej',
        }
      });
      
      try {
        // Send with alternative transporter
        const altInfo = await altTransporter.sendMail(mailOptions);
        console.log('Email sent successfully with alternative method:', altInfo.messageId);
        
        return res.status(200).json({
          success: true,
          message: 'Thank you! Your message has been sent successfully.',
        });
      } catch (altError: any) {
        console.error('Alternative email approach also failed:', altError);
        throw new Error(`Email sending failed: ${altError.message}`);
      }
    }
  } catch (error: any) {
    console.error('Error in form submission handler:', error);
    
    // Return error response
    return res.status(500).json({
      success: false,
      message: 'Sorry, there was an error sending your message. Please try again later.',
    });
  }
}

// Configure API to accept larger request bodies
export const config = {
  api: {
    bodyParser: {
      sizeLimit: "10mb",
    },
  },
};

// Function to generate HTML email content
function generateEmail({
  name,
  email,
  phone,
  message,
  inquiryType,
  dates,
  propertyInterest,
  guests,
}: {
  name: string;
  email: string;
  phone: string;
  message: string;
  inquiryType: string;
  dates?: string;
  propertyInterest?: string;
  guests?: string;
}) {
  return `
    <html>
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>AceHost Whistler - New Inquiry</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    line-height: 1.6;
                    color: #333;
                    margin: 0;
                    padding: 0;
                }

                .email-wrapper {
                    max-width: 600px;
                    margin: 0 auto;
                    background-color: #ffffff;
                    border: 1px solid #ddd;
                }

                .header {
                    background-color: #000000;
                    padding: 20px;
                    text-align: center;
                }

                .content {
                    padding: 20px;
                }

                .info-section {
                    margin-bottom: 20px;
                    border-left: 4px solid #000;
                    padding-left: 15px;
                }

                .message-content {
                    background-color: #f7f7f7;
                    padding: 15px;
                    border-radius: 5px;
                    margin-top: 10px;
                }

                h1 {
                    margin-top: 0;
                    font-size: 22px;
                    color: #000;
                }

                h2 {
                    font-size: 18px;
                    margin-bottom: 10px;
                    color: #000;
                }

                .footer {
                    text-align: center;
                    padding: 15px;
                    font-size: 12px;
                    background-color: #f7f7f7;
                    color: #666;
                }

                .button {
                    display: inline-block;
                    background-color: #000;
                    color: white;
                    padding: 10px 20px;
                    text-decoration: none;
                    border-radius: 4px;
                    font-weight: bold;
                }

                a {
                    color: #0066cc;
                }
            </style>
        </head>
        <body>
            <div class="email-wrapper">
                <div class="header">
                    <h1 style="color: #ffffff; margin: 0;">AceHost Whistler Inquiry</h1>
                </div>
                
                <div class="content">
                    <h1>New ${inquiryType} Inquiry</h1>
                    <p>You have received a new inquiry from the AceHost website contact form.</p>
                    
                    <div class="info-section">
                        <h2>Contact Information</h2>
                        <p><strong>Name:</strong> ${name}</p>
                        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                        <p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
                        <p><strong>Inquiry Type:</strong> ${inquiryType}</p>
                    </div>
                    
                    ${propertyInterest ? `
                    <div class="info-section">
                        <h2>Property Interest</h2>
                        <p>${propertyInterest}</p>
                    </div>
                    ` : ''}
                    
                    ${dates || guests ? `
                    <div class="info-section">
                        <h2>Travel Details</h2>
                        ${dates ? `<p><strong>Dates:</strong> ${dates}</p>` : ''}
                        ${guests ? `<p><strong>Guests:</strong> ${guests}</p>` : ''}
                    </div>
                    ` : ''}
                    
                    <div class="info-section">
                        <h2>Message</h2>
                        <div class="message-content">${message.replace(/\n/g, '<br>')}</div>
                    </div>
                    
                    <div style="margin-top: 30px; text-align: center;">
                        <a href="mailto:${email}?subject=RE: Your AceHost Inquiry" style="background-color: #000; color: white; padding: 10px 20px; text-decoration: none; border-radius: 4px; font-weight: bold;">Reply to ${name}</a>
                    </div>
                </div>
                
                <div class="footer">
                    <p>This email was sent from the AceHost Whistler website contact form.</p>
                    <p>&copy; ${new Date().getFullYear()} AceHost Whistler. All rights reserved.</p>
                </div>
            </div>
        </body>
    </html>
  `;
} 