export const subscribeEmail = async (email) => {
  const res = await fetch("http://localhost:5000/api/subscribers", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({email}),
  });

  if (!res.ok){
    const err = await res.json();
    throw new Error(err.message || "Subscription failed")
  }

  return res.json();
}