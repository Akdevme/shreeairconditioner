# Google Sheets Integration Setup for Contact and Rating Forms

This guide explains how to connect both forms to separate Google Sheets using Google Apps Script.

## 1) Create two Google Sheets

Create one spreadsheet and inside it create two tabs (sheets):

### Sheet 1: Contact Form
Name the sheet exactly:
- ContactForm

Add these headers in row 1:
- timestamp
- name
- email
- phone
- message
- source
- submittedAt
- web app url : https://script.google.com/macros/s/AKfycbxcqJP7xmPtfJvRtwXGxuB_EiaO3abHLqev-5oKDrE_Ahh3X_46-fCr-A9ma_3ofD-zmQ/exec
- deployment id : AKfycbxcqJP7xmPtfJvRtwXGxuB_EiaO3abHLqev-5oKDrE_Ahh3X_46-fCr-A9ma_3ofD-zmQ

### Sheet 2: Rating Form
Name the sheet exactly:
- RatingForm

Add these headers in row 1:
- timestamp
- name
- contact
- rating
- review
- source
- submittedAt
- deployment id : AKfycbz4nU4UbHOYTpiKgrEhPEQSKOmh2Kw0_6FvNQnOxYmxmmIUgqYjjR2g8A7FbIfa0g7Q
- web app url : https://script.google.com/macros/s/AKfycbz4nU4UbHOYTpiKgrEhPEQSKOmh2Kw0_6FvNQnOxYmxmmIUgqYjjR2g8A7FbIfa0g7Q/exec

---

## 2) Get the spreadsheet ID

1. Open the Google Sheet.
2. Look at the URL:
   `https://docs.google.com/spreadsheets/d/PASTE_YOUR_SPREADSHEET_ID/edit`
3. Copy the value between `/d/` and `/edit`.
4. Save it for the Apps Script code.

---

## 3) Create Apps Script for Contact Form

In Google Sheets:
1. Open the sheet.
2. Go to Extensions > Apps Script.
3. Delete any default code.
4. Paste this script:

```javascript
function doPost(e) {
  try {
    const payload = JSON.parse(e.postData.contents || '{}');
    const spreadsheetId = 'PASTE_YOUR_SPREADSHEET_ID';
    const sheet = SpreadsheetApp.openById(spreadsheetId).getSheetByName('ContactForm');

    if (!sheet) {
      return ContentService
        .createTextOutput(JSON.stringify({ success: false, message: 'ContactForm sheet not found.' }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    const row = [
      new Date(),
      payload.name || '',
      payload.email || '',
      payload.phone || '',
      payload.message || '',
      payload.source || 'contact_form',
      payload.submittedAt || new Date().toISOString()
    ];

    sheet.appendRow(row);

    return ContentService
      .createTextOutput(JSON.stringify({
        success: true,
        message: 'Thank you! Your request has been sent successfully.'
      }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        message: 'Something went wrong while saving the contact form.'
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

### Important:
Replace:
- `PASTE_YOUR_SPREADSHEET_ID` with your actual sheet ID.

Then deploy:
1. Click Deploy > New deployment.
2. Select Type: Web app.
3. Execute as: Me.
4. Who has access: Anyone.
5. Copy the generated Web App URL.
6. Paste it inside `src/services/sheetService.js` as `GOOGLE_SHEETS_CONTACT_ENDPOINT`.

---

## 4) Create Apps Script for Rating Form

Create a second Apps Script file in the same project or a separate project, then paste:

```javascript
function doPost(e) {
  try {
    const payload = JSON.parse(e.postData.contents || '{}');
    const spreadsheetId = 'PASTE_YOUR_SPREADSHEET_ID';
    const sheet = SpreadsheetApp.openById(spreadsheetId).getSheetByName('RatingForm');

    if (!sheet) {
      return ContentService
        .createTextOutput(JSON.stringify({ success: false, message: 'RatingForm sheet not found.' }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    const row = [
      new Date(),
      payload.name || '',
      payload.contact || '',
      payload.rating || 0,
      payload.review || '',
      payload.source || 'rating_form',
      payload.submittedAt || new Date().toISOString()
    ];

    sheet.appendRow(row);

    return ContentService
      .createTextOutput(JSON.stringify({
        success: true,
        message: 'Thank you! Your review has been submitted.'
      }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        message: 'Something went wrong while saving the rating form.'
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

### Important:
Replace:
- `PASTE_YOUR_SPREADSHEET_ID` with your actual sheet ID.

Then deploy again and copy the new Web App URL.

Paste it inside:
- `GOOGLE_SHEETS_RATING_ENDPOINT`

---

## 5) Update the frontend

In the file `src/services/sheetService.js`, set:

```javascript
export const GOOGLE_SHEETS_CONTACT_ENDPOINT = 'PASTE_YOUR_CONTACT_SHEET_WEB_APP_URL_HERE'
export const GOOGLE_SHEETS_RATING_ENDPOINT = 'PASTE_YOUR_RATING_SHEET_WEB_APP_URL_HERE'
```

Then use the form submit logic already in the project.

---

## 6) Example sheet structure

### ContactForm sheet
| timestamp | name | email | phone | message | source | submittedAt |
|---|---|---|---|---|---|---|
| 2026-08-09 12:00:00 | Raj | raj@gmail.com | 9876543210 | AC not cooling | contact_form | 2026-08-09T12:00:00Z |

### RatingForm sheet
| timestamp | name | contact | rating | review | source | submittedAt |
|---|---|---|---:|---|---|---|
| 2026-08-09 12:05:00 | Neha | neha@gmail.com | 5 | Great service and quick response | rating_form | 2026-08-09T12:05:00Z |

---

## 7) Final note

Use separate sheets for each form so the data stays organized and easy to manage.

If you want, you can later add:
- an auto email notification,
- a status column like `Pending / Done`,
- a filter view for leads and reviews.
