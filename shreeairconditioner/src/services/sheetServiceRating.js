const RATING_ENDPOINT =
  import.meta.env.DEV
    ? '/api/rating'
    : 'https://script.google.com/macros/s/AKfycbwAZqDRISL0ebRn_ScjonqKTvBFxN0-Yt9Cmosf7N-jpzrGg_CzxLE3DSfbsx9v9tfJ/exec'

export async function submitRating(data) {
  const response = await fetch(RATING_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: data.name,
      contact: data.contact,
      review: data.review,
      rating: data.rating,
    }),
  })

  const result = await response.json().catch(() => ({}))

  if (!response.ok || result.success === false) {
    throw new Error(result.message || 'Failed to submit rating.')
  }

  return {
    ok: true,
    message: result.message || 'Thank you! Your review has been submitted.',
  }
}
