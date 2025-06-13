# Email Configuration Setup for The Reel Room Website

To enable form submissions to be sent to info@reelroom.ca, follow these steps:

## 1. Create a .env.local file

Create a file named `.env.local` in the root directory of your project with the following variables:

```
NEXT_PUBLIC_SITE_URL=https://reelroom.ca
EMAIL_USER=youremail@gmail.com
EMAIL_PASSWORD=your-app-password
```

## 2. Set up Gmail App Password

If you're using Gmail to send emails:

1. Go to your Google Account settings at [myaccount.google.com](https://myaccount.google.com)
2. Go to Security > 2-Step Verification > App passwords
3. Create a new app password specifically for this website
4. Use this generated password as the `EMAIL_PASSWORD` value in your .env.local file

## 3. Alternative Email Services

If you prefer not to use Gmail or want a more professional setup:

- Consider using a transactional email service like SendGrid, Mailgun, or Amazon SES
- Update the nodemailer configuration in `src/pages/api/contact.ts` with your chosen provider

## 4. Test the Form

1. Fill out the form on the website
2. Check that emails are being delivered to info@reelroom.ca
3. Verify that the form submission success message appears

## Important Notes

- Never commit your .env.local file to version control
- Keep your email passwords and API keys secure
- For production, consider using environment variables in your hosting platform instead of .env files 