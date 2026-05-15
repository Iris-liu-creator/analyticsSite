export async function submitNetlifyForm(formData: FormData) {
  const body = new URLSearchParams();

  formData.forEach((value, key) => {
    body.append(key, value.toString());
  });

  const response = await fetch("/__forms.html", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: body.toString()
  });

  if (!response.ok) {
    throw new Error("Netlify form submission failed.");
  }
}
