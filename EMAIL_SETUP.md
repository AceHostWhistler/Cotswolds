# Email Configuration Setup for The Reel Room Website

The website has been configured to send form submissions using Gmail SMTP.

## Current Configuration

The system is currently set up to:
- Use Gmail SMTP for sending emails
- Send all form submissions to benkirsh1@gmail.com
- Save all submissions to the 'contact-submissions' folder as backup

## Environment Variables

The `.env.local` file contains:

```
NEXT_PUBLIC_SITE_URL=https://reelroom.ca
SMTP_USER=benkirsh1@gmail.com
SMTP_PASSWORD=jreg ytvb dmcs kpej
```

## Gmail App Password

The system is using a Gmail app password for authentication. This is more secure than using your regular Gmail password.

If you need to update the app password:

1. Go to your Google Account settings at [myaccount.google.com](https://myaccount.google.com)
2. Go to Security > 2-Step Verification > App passwords
3. Create a new app password specifically for this website
4. Update the `SMTP_PASSWORD` value in your .env.local file

## Testing the Form

1. Fill out the form on the website
2. Check that emails are being delivered to benkirsh1@gmail.com
3. Verify that the form submission success message appears

## Switching to Microsoft Outlook in the Future

If you want to use info@reelroom.ca with Microsoft Outlook in the future:

1. Get an app password for your Microsoft account
2. Update the API endpoint in src/pages/api/contact.ts
3. Update your environment variables to:
   - `EMAIL_USER=info@reelroom.ca`
   - `EMAIL_PASS=[your-outlook-app-password]`
   - `EMAIL_HOST=smtp.office365.com`
   - `EMAIL_PORT=587`

## Important Notes

- Never commit your .env.local file to version control
- Keep your email passwords and API keys secure
- For production, always use environment variables in your hosting platform 