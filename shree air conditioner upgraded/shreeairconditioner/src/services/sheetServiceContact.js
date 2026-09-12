const GOOGLE_SHEET_URL =
  'https://script.google.com/macros/s/AKfycbw2VsG2R4BgSopcYdA-2HG0jaQ_qjXOIsTQKUlrp2YbNrwR6iDN62Br8F-C4f5WIkdd/exec'

export async function submitContactForm(data = {}) {
  const name = String(data.name || '').trim()
  const email = String(data.email || '').trim()
  const message = String(data.message || '').trim()
  const source = String(data.source || 'Website').trim()

  // Keep only digits and take maximum 10 digits
  const phoneDigits = String(data.phone || '')
    .replace(/\D/g, '')
    .slice(0, 10)

  // -----------------------------
  // Frontend validation
  // -----------------------------

  if (!name) {
    throw new Error('Please enter your name.')
  }

  if (!/^\d{10}$/.test(phoneDigits)) {
    throw new Error('Please enter a valid 10-digit phone number.')
  }

  if (!message) {
    throw new Error('Please enter your message.')
  }

  // Google Sheet receives +91XXXXXXXXXX
  const phone = `+91${phoneDigits}`

  const payload = {
    name,
    email,
    phone,
    message,
    source,
  }

  try {
    await fetch(GOOGLE_SHEET_URL, {
      method: 'POST',

      // Works from localhost and deployed frontend
      mode: 'no-cors',

      // text/plain avoids CORS preflight
      headers: {
        'Content-Type': 'text/plain;charset=utf-8',
      },

      body: JSON.stringify(payload),
    })

    // With no-cors the response is opaque,
    // so we cannot read Google's JSON response.
    return {
      ok: true,
      message: 'Thank you! Your request has been submitted successfully.',
    }
  } catch (error) {
    console.error('Contact form submission error:', error)

    throw new Error(
      error?.message ||
        'Something went wrong while submitting your request.'
    )
  }
}
