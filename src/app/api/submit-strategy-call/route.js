/**
 * API Route: /api/submit-strategy-call
 * Handles form submission and saves email to spreadsheet
 * 
 * This endpoint receives email data and can be configured to save to:
 * - Google Sheets (via Google Sheets API)
 * - Airtable (via Airtable API)
 * - Other spreadsheet services
 * 
 * For now, it logs the data and returns success.
 * To integrate with Google Sheets, you'll need to:
 * 1. Set up Google Sheets API credentials
 * 2. Install googleapis package: npm install googleapis
 * 3. Configure the spreadsheet ID and credentials
 */

export async function POST(request) {
  try {
    // Parse request body
    const body = await request.json();
    const { email } = body;

    // Validate email
    if (!email || !email.includes('@')) {
      return Response.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // TODO: Integrate with your spreadsheet service
    // Example for Google Sheets:
    // const { google } = require('googleapis');
    // const sheets = google.sheets({ version: 'v4', auth: YOUR_AUTH });
    // await sheets.spreadsheets.values.append({
    //   spreadsheetId: YOUR_SPREADSHEET_ID,
    //   range: 'Sheet1!A:A',
    //   valueInputOption: 'RAW',
    //   resource: { values: [[email, new Date().toISOString()]] }
    // });

    // For now, log the submission (you can replace this with actual spreadsheet integration)
    console.log('Strategy call request submitted:', {
      email,
      timestamp: new Date().toISOString(),
    });

    // In production, you would save to spreadsheet here
    // For development/testing, you can use a service like:
    // - Google Sheets API
    // - Airtable API
    // - Zapier webhook
    // - Make.com webhook

    // Return success response
    return Response.json(
      {
        success: true,
        message: 'Email submitted successfully',
      },
      { status: 200 }
    );
  } catch (error) {
    // Log error for debugging
    console.error('Error in submit-strategy-call API:', error);

    // Return error response
    return Response.json(
      {
        error: 'Failed to submit email. Please try again.',
      },
      { status: 500 }
    );
  }
}

