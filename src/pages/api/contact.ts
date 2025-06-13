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
    console.log("Form submission saved to file successfully");
    
    // Log environment variables for debugging
    if (DEBUG_MODE) {
      console.log("Email Environment Variables:");
      console.log("SMTP_USER:", process.env.SMTP_USER || "Not set");
      console.log("SMTP_PASSWORD:", process.env.SMTP_PASSWORD ? "Set (length: " + process.env.SMTP_PASSWORD.length + ")" : "Not set");
    }
    
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
    
    // Try multiple email sending approaches
    try {
      console.log("Attempting to send email - Method 1");
      
      // Method 1: Direct SMTP configuration
      const transporter1 = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          user: 'benkirsh1@gmail.com',
          pass: 'jreg ytvb dmcs kpej',
        },
        logger: true,
        debug: true
      });
      
      console.log("Verifying SMTP connection...");
      await transporter1.verify();
      console.log("SMTP connection verified successfully");
      
      console.log("Sending email...");
      const info1 = await transporter1.sendMail(mailOptions);
      console.log('Email sent successfully with Method 1:', info1.messageId);
      
      return res.status(200).json({
        success: true,
        message: 'Thank you! Your message has been sent successfully.',
      });
    } catch (error1: any) {
      console.error('Method 1 failed:', error1.message);
      
      try {
        console.log("Attempting to send email - Method 2");
        
        // Method 2: Service-based configuration
        const transporter2 = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: 'benkirsh1@gmail.com',
            pass: 'jreg ytvb dmcs kpej',
          }
        });
        
        const info2 = await transporter2.sendMail(mailOptions);
        console.log('Email sent successfully with Method 2:', info2.messageId);
        
        return res.status(200).json({
          success: true,
          message: 'Thank you! Your message has been sent successfully.',
        });
      } catch (error2: any) {
        console.error('Method 2 failed:', error2.message);
        
        try {
          console.log("Attempting to send email - Method 3");
          
          // Method 3: OAuth2 configuration
          const transporter3 = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
              user: 'benkirsh1@gmail.com',
              pass: 'jreg ytvb dmcs kpej',
            },
            tls: {
              rejectUnauthorized: false
            }
          });
          
          const info3 = await transporter3.sendMail(mailOptions);
          console.log('Email sent successfully with Method 3:', info3.messageId);
          
          return res.status(200).json({
            success: true,
            message: 'Thank you! Your message has been sent successfully.',
          });
        } catch (error3: any) {
          console.error('Method 3 failed:', error3.message);
          
          // All methods failed, return a detailed error
          throw new Error(`All email sending methods failed. 
            Method 1: ${error1.message}, 
            Method 2: ${error2.message}, 
            Method 3: ${error3.message}`);
        }
      }
    }
  } catch (error: any) {
    console.error('Error in form submission handler:', error);
    
    // Return error response with more details
    return res.status(500).json({
      success: false,
      message: 'Your form was received and saved, but we could not send the email notification. Our team will still receive your request.',
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