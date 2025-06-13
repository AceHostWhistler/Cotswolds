# Next Steps for Email Setup

The environment files have been created, but you still need to:

1. **Update your Microsoft app password**:
   - Open the `.env.local` file
   - Replace `your-app-password-here` with your actual Microsoft app password
   - If you don't have an app password yet, follow these steps:
     - Go to [account.microsoft.com](https://account.microsoft.com)
     - Navigate to Security > Advanced security options
     - Under "App passwords", create a new app password
     - Use this generated password in your .env.local file

2. **Test the form submission**:
   - Start your development server: `npm run dev`
   - Navigate to the Reservations page
   - Fill out and submit the form
   - Check if you receive the email at info@reelroom.ca

3. **Deploy to production**:
   - If using Vercel, add these environment variables to your project:
     - `NEXT_PUBLIC_SITE_URL=https://reelroom.ca`
     - `EMAIL_USER=info@reelroom.ca`
     - `EMAIL_PASS=[your-app-password]`
     - `EMAIL_HOST=smtp.office365.com`
     - `EMAIL_PORT=587`
   - Deploy your application

## Troubleshooting

If emails aren't being sent:

1. Check your server logs for error messages
2. Verify that your Microsoft account allows SMTP access
3. Try using your regular Microsoft password instead of an app password (less secure)
4. Contact your email administrator if you continue having issues 