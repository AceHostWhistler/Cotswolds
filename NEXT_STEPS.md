# Next Steps for Email Setup

The environment files have been created and configured to use Gmail for form submissions.

## Current Configuration

The system is now set up to:
- Use Gmail SMTP for sending emails
- Send all form submissions to benkirsh1@gmail.com
- Save all submissions to the 'contact-submissions' folder as backup

## Testing the Form

1. **Test the form submission**:
   - Start your development server: `npm run dev`
   - Navigate to the Reservations page
   - Fill out and submit the form
   - Check if you receive the email at benkirsh1@gmail.com

## Deployment to Production

When deploying to production:

1. **Add these environment variables to your Vercel project**:
   - `NEXT_PUBLIC_SITE_URL=https://reelroom.ca`
   - `SMTP_USER=benkirsh1@gmail.com`
   - `SMTP_PASSWORD=jreg ytvb dmcs kpej`

2. **Deploy your application**

## Switching to Outlook in the Future

If you want to switch to using info@reelroom.ca with Outlook in the future:

1. Get an app password for your Microsoft account
2. Update the API endpoint in src/pages/api/contact.ts
3. Update your environment variables to:
   - `EMAIL_USER=info@reelroom.ca`
   - `EMAIL_PASS=[your-outlook-app-password]`
   - `EMAIL_HOST=smtp.office365.com`
   - `EMAIL_PORT=587`

## Troubleshooting

If emails aren't being sent:

1. Check your server logs for error messages
2. Verify that Gmail's "Less secure app access" is enabled for your account
3. Make sure your Gmail app password is correct
4. Check your spam folder for test emails 