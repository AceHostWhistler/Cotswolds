# Email Configuration Setup for The Reel Room Website

To enable form submissions to be sent using Microsoft Outlook SMTP, follow these steps:

## 1. Create a .env.local file

Create a file named `.env.local` in the root directory of your project with the following variables:

```
NEXT_PUBLIC_SITE_URL=https://reelroom.ca
EMAIL_USER=info@reelroom.ca
EMAIL_PASS=your-app-password-here
EMAIL_HOST=smtp.office365.com
EMAIL_PORT=587
```

## 2. Set up Microsoft Outlook App Password

If you have 2-factor authentication enabled on your Microsoft account (recommended):

1. Go to your Microsoft Account settings at [account.microsoft.com](https://account.microsoft.com)
2. Navigate to Security > Advanced security options
3. Under "App passwords", create a new app password specifically for this website
4. Use this generated password as the `EMAIL_PASS` value in your .env.local file

If you don't have 2FA enabled, you can use your regular account password, but this is less secure.

## 3. Vercel Deployment Configuration

If deploying to Vercel:

1. Go to your project settings in the Vercel dashboard
2. Navigate to the "Environment Variables" section
3. Add each of the environment variables from your .env.local file
4. Deploy your application

## 4. Test the Form

1. Fill out the form on the website
2. Check that emails are being delivered to info@reelroom.ca
3. Verify that the form submission success message appears

## Troubleshooting

If emails aren't being sent:

1. Check the server logs for detailed error messages
2. Verify your Microsoft account allows "less secure apps" if not using an app password
3. Ensure your Microsoft account doesn't have any restrictions on SMTP access
4. Try testing with a different email provider temporarily to isolate the issue

## Important Notes

- Never commit your .env.local file to version control
- Keep your email passwords and API keys secure
- For production, always use environment variables in your hosting platform
- Microsoft may occasionally require you to update your app password 