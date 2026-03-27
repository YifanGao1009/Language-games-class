async function sendMessage() {
  const input = document.getElementById("input").value;
  const output = document.getElementById("output");

  const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": "Bearer YOUR_KEY",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "openai/gpt-4.1-mini",
      messages: [
        { role: "user", content: input }
      ]
    })
  });

  const data = await response.json();

  output.innerText = data.choices[0].message.content;
}