const CONTACT_ENDPOINT =
  import.meta.env.DEV
    ? '/api/contact'
    : 'https://script.google.com/macros/s/AKfycbwEwJjjchKeQyN_RM1F44CiB-L7HJ9icQa_SiQvtldlpOrxnyCq9lzmpgoosweA2FRB/exec'

export async function submitContactForm(data) {
  const normalizedPhone = String(data.phone || '').replace(/\s+/g, '')

  if (!/^\+?91\d{10}$/.test(normalizedPhone)) {
    throw new Error('Phone number must be in the format +91XXXXXXXXXX.')
  }

  const response = await fetch(CONTACT_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: data.name,
      email: data.email,
      phone: normalizedPhone,
      message: data.message,
    }),
  })

  const result = await response.json().catch(() => ({}))

  if (!response.ok || result.success === false) {
    throw new Error(result.message || 'Failed to submit contact form.')
  }

  return {
    ok: true,
    message:
      result.message || 'Thank you! Your request has been sent successfully.',
  }
}
