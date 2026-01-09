export const subscribeEmail = async (email, formStartedAt) => {
  const res = await fetch("https://dwaveentertainment.co.uk/api/subscribe/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({email, formStartedAt}),
  });

  if (!res.ok){
    const err = await res.json();
    throw new Error(JSON.stringify(err) || "Subscription failed, please try again")
  }

  return res.json();
}