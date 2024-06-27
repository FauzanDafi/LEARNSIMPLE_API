const endpoint = "https://reqres.in/api/users/";

async function hitAPI() {
  const result = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "Application/JSON",
    },
    body: JSON.stringify({
      email: "dafi@gmail.com",
      first_name: "dafi",
    }),
  });
  const data = await result.json();
  console.log(data);
}

hitAPI();
