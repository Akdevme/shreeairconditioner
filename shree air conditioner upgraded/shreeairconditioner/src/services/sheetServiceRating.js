export async function submitRating(payload) {
  const response = await fetch('/api/rating', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: payload.name,
      contact: payload.contact,
      rating: Number(payload.rating),
      review: payload.review,
    }),
  })

  const result = await response.json().catch(() => ({}))

  if (!response.ok || result.success === false) {
    throw new Error(result.message || 'Unable to submit review.')
  }

  return result
}
