import nodemailer from 'nodemailer';
import { ContactMessage } from '@shared/schema';

// Create reusable transporter object using SMTP
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.EMAIL_PORT || '587'),
    secure: process.env.EMAIL_SECURE === 'true',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
};

export async function sendConfirmationEmail(contactMessage: ContactMessage): Promise<boolean> {
  try {
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
      console.error('Email credentials not provided in environment variables');
      return false;
    }

    const transporter = createTransporter();
    
    // Format date string
    const formattedDate = new Date().toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    
    // Build the message content using template literals
    const emailContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Thank You for Your Consultation Request</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            margin: 0;
            padding: 0;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
          }
          .header {
            background-color: #4f46e5;
            padding: 20px;
            text-align: center;
          }
          .header h1 {
            color: white;
            margin: 0;
          }
          .content {
            padding: 20px;
            background-color: #f9fafb;
          }
          .footer {
            padding: 20px;
            text-align: center;
            font-size: 0.8em;
            color: #6b7280;
          }
          .button {
            display: inline-block;
            background-color: #4f46e5;
            color: white;
            padding: 12px 24px;
            text-decoration: none;
            border-radius: 4px;
            font-weight: bold;
            margin-top: 20px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Thank You for Your Consultation Request</h1>
          </div>
          <div class="content">
            <p>Dear ${contactMessage.contactName},</p>
            
            <p>Thank you for reaching out to Minecore Group. We have received your consultation request submitted on ${formattedDate}.</p>
            
            <p>Our team is reviewing your information and one of our automation specialists will contact you via your preferred method (${contactMessage.preferredContactMethod}) within the next 24-48 business hours.</p>
            
            <p>Here's a summary of the information you provided:</p>
            <ul>
              <li><strong>Company:</strong> ${contactMessage.companyName}</li>
              <li><strong>Business Challenges:</strong> ${contactMessage.businessChallenges.join(', ')}</li>
              <li><strong>Annual Revenue Range:</strong> ${contactMessage.annualRevenue}</li>
              <li><strong>Company Size:</strong> ${contactMessage.companySize}</li>
              <li><strong>Preferred Contact Method:</strong> ${contactMessage.preferredContactMethod}</li>
              ${contactMessage.bestTimeToContact ? `<li><strong>Best Time to Contact:</strong> ${contactMessage.bestTimeToContact}</li>` : ''}
            </ul>
            
            <p>We look forward to discussing how our AI automation solutions can help your business increase revenue while reducing your workload.</p>
            
            <p>In the meantime, you might find these resources helpful:</p>
            
            <a href="https://minecoregroup.com/solutions" class="button">Explore Our Solutions</a>
            
            <p style="margin-top: 20px;">Best regards,</p>
            <p>The Minecore Group Team</p>
          </div>
          <div class="footer">
            <p>Minecore Group</p>
            <p>3580 boulevard saint elzear, ouest, Laval, QC h7p-0l7</p>
            <p>+1 (514) 603-0598 | hello@minecoregroup.com</p>
          </div>
        </div>
      </body>
      </html>
    `;

    // Send confirmation email to the user
    const userInfo = await transporter.sendMail({
      from: `"Minecore Group" <${process.env.EMAIL_USER}>`,
      to: contactMessage.contactEmail,
      subject: "Your Consultation Request - Minecore Group",
      html: emailContent,
    });

    // Send notification email to company address
    const notificationInfo = await transporter.sendMail({
      from: `"Form Submission" <${process.env.EMAIL_USER}>`,
      to: process.env.NOTIFICATION_EMAIL || "hello@minecoregroup.com",
      subject: `New Consultation Request: ${contactMessage.companyName}`,
      html: `
        <h2>New Consultation Request</h2>
        <p><strong>Contact:</strong> ${contactMessage.contactName} (${contactMessage.contactEmail})</p>
        <p><strong>Phone:</strong> ${contactMessage.contactPhone}</p>
        <p><strong>Preferred Contact Method:</strong> ${contactMessage.preferredContactMethod}</p>
        <p><strong>Best Time to Contact:</strong> ${contactMessage.bestTimeToContact || 'Any time'}</p>
        <p><strong>Job Title:</strong> ${contactMessage.contactJobTitle || 'Not provided'}</p>
        <p><strong>Company:</strong> ${contactMessage.companyName}</p>
        <p><strong>Annual Revenue:</strong> ${contactMessage.annualRevenue}</p>
        <p><strong>Employees:</strong> ${contactMessage.companySize}</p>
        <p><strong>Website:</strong> ${contactMessage.websiteUrl || 'Not provided'}</p>
        <p><strong>Business Challenges:</strong> ${contactMessage.businessChallenges.join(', ')}</p>
        <p><strong>Current Solutions:</strong> ${contactMessage.currentSolutions || 'Not provided'}</p>
        <p><strong>Additional Notes:</strong> ${contactMessage.additionalNotes || 'Not provided'}</p>
      `,
    });

    console.log('Confirmation email sent to user:', userInfo.messageId);
    console.log('Notification email sent to company:', notificationInfo.messageId);
    
    return true;
  } catch (error) {
    console.error('Error sending confirmation email:', error);
    return false;
  }
}

// For different types of emails, add more specialized functions below