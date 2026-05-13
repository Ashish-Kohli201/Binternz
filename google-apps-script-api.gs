/**
 * Google Apps Script Web App API for Binternz partner form.
 *
 * Setup:
 * 1. Create a Google Sheet and note its Spreadsheet ID.
 * 2. Open script.google.com, create a new project, paste this file into Code.gs.
 * 3. Set SHEET_NAME and optionally ALLOWED_ORIGIN.
 * 4. Deploy -> New deployment -> Web app.
 *    Execute as: Me
 *    Who has access: Anyone
 * 5. Copy web app URL and paste it into PARTNER_FORM_API_URL in companies.html.
 */

const SHEET_NAME = 'PartnerLeads';
const SPREADSHEET_ID = ''; // Optional but recommended for standalone scripts.
const ALLOWED_ORIGIN = '*'; // e.g. "https://yourdomain.com"

function doOptions() {
  return ContentService
    .createTextOutput('')
    .setMimeType(ContentService.MimeType.TEXT);
}

function doPost(e) {
  try {
    const payload = parsePayload_(e);

    const required = [
      'companyName',
      'contactPerson',
      'corporateEmail',
      'stipend',
      'internshipRequirements'
    ];

    const missing = required.filter((k) => !String(payload[k] || '').trim());
    if (missing.length > 0) {
      return jsonResponse({
        ok: false,
        message: 'Missing required fields',
        missing
      }, 400);
    }

    const sheet = getOrCreateSheet_();
    ensureHeader_(sheet);

    sheet.appendRow([
      new Date(),
      String(payload.companyName || '').trim(),
      String(payload.contactPerson || '').trim(),
      String(payload.corporateEmail || '').trim(),
      String(payload.phoneNumber || '').trim(),
      String(payload.stipend || '').trim(),
      String(payload.internshipRequirements || '').trim(),
      String(payload.source || 'companies.html').trim()
    ]);

    return jsonResponse({ ok: true, message: 'Saved' }, 200);
  } catch (err) {
    return jsonResponse({ ok: false, message: err.message }, 500);
  }
}

function getOrCreateSheet_() {
  const ss = SPREADSHEET_ID
    ? SpreadsheetApp.openById(SPREADSHEET_ID)
    : SpreadsheetApp.getActiveSpreadsheet();
  if (!ss) {
    throw new Error('No spreadsheet found. Set SPREADSHEET_ID in script.');
  }
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
  }
  return sheet;
}

function parsePayload_(e) {
  const postData = e && e.postData ? e.postData : null;
  const contentType = postData && postData.type ? String(postData.type) : '';

  if (contentType.includes('application/json')) {
    return JSON.parse((postData && postData.contents) || '{}');
  }

  // application/x-www-form-urlencoded lands in e.parameter.
  if (e && e.parameter && Object.keys(e.parameter).length > 0) {
    return e.parameter;
  }

  // Last-resort parse if body exists but parameter is empty.
  if (postData && postData.contents) {
    return Utilities.parseQueryString(postData.contents);
  }

  return {};
}

function ensureHeader_(sheet) {
  if (sheet.getLastRow() > 0) return;

  sheet.appendRow([
    'timestamp',
    'companyName',
    'contactPerson',
    'corporateEmail',
    'phoneNumber',
    'stipend',
    'internshipRequirements',
    'source'
  ]);
}

function jsonResponse(body, statusCode) {
  // Apps Script ContentService does not set arbitrary HTTP status headers reliably
  // for web apps, so we return code in JSON payload as well.
  body.statusCode = statusCode;
  return ContentService
    .createTextOutput(JSON.stringify(body))
    .setMimeType(ContentService.MimeType.JSON);
}
