/**
 * Google Apps Script Web App API for Binternz Newsletter Signups
 * 
 * Setup:
 * 1. Create a Google Sheet (Newsletter Signups)
 * 2. Copy Sheet ID and paste into SHEET_ID below
 * 3. Deploy -> New deployment -> Web app
 *    Execute as: Your email
 *    Who has access: Anyone
 * 4. Copy deployment URL to students.html
 */

const SHEET_ID = ''; // Your Google Sheet ID here

function doPost(e) {
  try {
    const email = e.parameter.email || '';
    
    if (!email || email.trim() === '') {
      return sendResponse({ success: false, error: 'Email is required' });
    }
    
    if (!isValidEmail(email)) {
      return sendResponse({ success: false, error: 'Invalid email format' });
    }

    const sheet = SpreadsheetApp.openById(SHEET_ID).getActiveSheet();
    
    // Create headers if empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Timestamp', 'Email', 'Status']);
    }

    // Check if email already exists
    const data = sheet.getDataRange().getValues();
    for (let i = 1; i < data.length; i++) {
      if (data[i][1].toLowerCase() === email.toLowerCase()) {
        return sendResponse({ success: true, message: 'Already subscribed', isNew: false });
      }
    }

    // Add new subscriber
    sheet.appendRow([
      new Date(),
      email.trim(),
      'subscribed'
    ]);

    return sendResponse({ success: true, message: 'Successfully subscribed!', isNew: true });
  } catch (error) {
    Logger.log('Error: ' + error.toString());
    return sendResponse({ success: false, error: 'Server error: ' + error.toString() });
  }
}

function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function sendResponse(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
