type Props = {
    input: string
}

const token = process.env.OPENAI_TOKEN;

const fetchData = async (input: Props) => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        prompt: `Complete this sentence: "${input}"`,
        model: "text-davinci-002",
        max_tokens: 50,
        n: 1,
        stop: ".",
      }),
    };

    const response = await fetch(
      "https://api.openai.com/v1/completions",
      requestOptions
    );
    const data = await response.json();

    return data.choices[0].text;
  };

export default fetchData

// Methode using Axios :
// const fetchData = async (input: string) => {
//     const response = await axios.post(
//       "https://api.openai.com/v1/completions",
//       {
//         prompt: `"${input}"`,
//         model: 'text-davinci-002',
//         max_tokens: 50,
//         n: 1,
//         stop: ".",
//       },
//       {
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );
//   console.log(response.data.choices[0].text)
//     return response.data.choices[0].text;
//   };