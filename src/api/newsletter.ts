export async function subscribeToNewsletter(email: string): Promise<void> {
  // Simulates network latency. Replace with a real request later, for example:
  // await fetch('/api/newsletter', { method: 'POST', body: JSON.stringify({ email }) })
  await new Promise((resolve) => setTimeout(resolve, 800));

  if (email.endsWith("@example.com")) {
    throw new Error("This address cannot be subscribed. Try another one.");
  }
}
