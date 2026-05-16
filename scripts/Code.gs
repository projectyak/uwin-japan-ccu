/**
 * UWin·Japan — Google Apps Script Web App
 *
 * This file is the canonical source of truth for the GAS Web App that backs
 * the website's forms. The deployed copy lives at script.google.com bound
 * to the response spreadsheet; keep these two in sync.
 *
 * Deploy workflow after editing:
 *   1. Open the project at https://script.google.com
 *   2. Paste this entire file into Code.gs
 *   3. "Deploy" → "Manage deployments" → pencil icon on the existing deploy
 *   4. Version: "New version" → "Deploy"
 *   5. The Web App URL MUST stay the same (don't pick "New deployment",
 *      that creates a new URL and breaks the front-end).
 *
 * Endpoint URL is hard-coded in:
 *   - index.html (APPS_SCRIPT_URL, visitor gate form — site root)
 *   - home.html  (APPS_SCRIPT_URL, contact form — main marketing site)
 *
 * Routing: doPost reads `form_type` to pick a handler.
 *   - missing or "contact"       → handleContact   (writes to "Contact"  sheet)
 *   - "visitor_gate"             → handleVisitorGate (writes to "Visitors" sheet)
 */

var RECIPIENT_EMAIL = "project@yaktw.com";

function doPost(e) {
  try {
    var data = e.parameter || {};
    var formType = data.form_type || "contact";

    if (formType === "visitor_gate") {
      return handleVisitorGate(data);
    }
    return handleContact(data);

  } catch (error) {
    return ContentService
      .createTextOutput("Error: " + (error && error.message ? error.message : error))
      .setMimeType(ContentService.MimeType.TEXT);
  }
}

/* ── Contact form (existing behaviour) ────────────────────────────── */
function handleContact(data) {
  var sheet = getOrCreateSheet_("Contact",
    ["Timestamp", "Name", "Email", "Company", "Message"]);
  sheet.appendRow([
    new Date(),
    data.name || "",
    data.email || "",
    data.company || "",
    data.message || ""
  ]);

  var subject = "【CCU Platform】收到新的預約諮詢 - " + (data.company || "");
  var htmlBody =
    '<div style="font-family:\'Helvetica Neue\',Helvetica,Arial,sans-serif;max-width:600px;color:#333;">' +
      '<h2 style="color:#043d30;font-size:24px;margin-bottom:24px;">New contact form submission</h2>' +
      '<table style="width:100%;border-collapse:collapse;">' +
        row_("Name",    data.name) +
        row_("Email",   data.email) +
        row_("Company", data.company) +
        row_("Message", data.message) +
      '</table>' +
      '<p style="color:#999;font-size:12px;margin-top:30px;">Sent from CCU Expo contact form</p>' +
    '</div>';

  MailApp.sendEmail({ to: RECIPIENT_EMAIL, subject: subject, htmlBody: htmlBody });
  return ContentService.createTextOutput("Success").setMimeType(ContentService.MimeType.TEXT);
}

/* ── Visitor gate (new) ───────────────────────────────────────────── */
function handleVisitorGate(data) {
  var sheet = getOrCreateSheet_("Visitors",
    ["Timestamp", "Name", "Company", "Title", "Email"]);
  sheet.appendRow([
    new Date(),
    data.name || "",
    data.company || "",
    data.title || "",
    data.email || ""
  ]);

  var subject = "【CCU Platform】新訪客登記 - "
    + (data.company || "") + " / " + (data.name || "");
  var htmlBody =
    '<div style="font-family:\'Helvetica Neue\',Helvetica,Arial,sans-serif;max-width:600px;color:#333;">' +
      '<h2 style="color:#043d30;font-size:24px;margin-bottom:24px;">New visitor registered</h2>' +
      '<table style="width:100%;border-collapse:collapse;">' +
        row_("Name",    data.name) +
        row_("Company", data.company) +
        row_("Title",   data.title) +
        row_("Email",   data.email) +
      '</table>' +
      '<p style="color:#999;font-size:12px;margin-top:30px;">Sent from CCU visitor gate (QR entry)</p>' +
    '</div>';

  MailApp.sendEmail({ to: RECIPIENT_EMAIL, subject: subject, htmlBody: htmlBody });
  return ContentService.createTextOutput("Success").setMimeType(ContentService.MimeType.TEXT);
}

/* ── Helpers ──────────────────────────────────────────────────────── */
function getOrCreateSheet_(name, headers) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(name);
  if (!sheet) {
    sheet = ss.insertSheet(name);
    sheet.appendRow(headers);
    sheet.getRange(1, 1, 1, headers.length).setFontWeight("bold");
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function row_(label, value) {
  return '<tr style="border-bottom:1px solid #eee;">' +
    '<td style="padding:15px 0;font-weight:bold;color:#666;width:120px;">' + label + '</td>' +
    '<td style="padding:15px 0;">' + (value || "") + '</td>' +
  '</tr>';
}
