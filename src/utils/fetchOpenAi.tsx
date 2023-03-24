import { Configuration, OpenAIApi } from 'openai'
// import * as dotenv from 'dotenv'

type Props = {
  
}

// dotenv.config()
const TOKEN = process.env.NEXT_PUBLIC_OPENAI_TOKEN;

 const fetchData = async (input: Props) => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TOKEN}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
          messages: [
            // {role: "system", content: "You are the chatbot of a website called moleculARweb, which provides educational material for chemistry using commodity augmented reality. You answer questions about the website, about chemistry, science, etc."},
            {role: "system", content: "You are a helpful assistant that translates English to French."},
            {role: "user", content: input}
          ],
          temperature: 0.3,
          max_tokens: 2000
        }),
    };

    const response = await fetch(
      "https://api.openai.com/v1/chat/completions",
      requestOptions
    );
    const data = await response.json();
      // console.log(data);
    return data.choices[0].message.content;
  };
  
export default fetchData


// const fetchData = async (input: string) => {
//   await fetch( `https://api.openai.com/v1/chat/completions`,
//   {
//     body: JSON.stringify({
//       "model": "gpt-3.5-turbo",
//         "messages": [
//           // {role: "system", content: "You are the chatbot of a website called moleculARweb, which provides educational material for chemistry using commodity augmented reality. You answer questions about the website, about chemistry, science, etc."},
//           {role: "system", content: "You are a helpful assistant that translates English to French."},
//           {role: "user", content: input}
//         ],
//         "temperature": 0.3,
//         "max_tokens": 2000
//       }), 
//       method: "POST",
//       headers: {
//       "content-type": "application/json",
//       Authorization: "Bearer " + TOKEN,
//     }
//   }).then((response) => {
//     // console.log(response) 
//     if (response.ok) {
//       response.json().then((json) => {
//         console.log(json);  
//         return json.choices[0].message.content
//       });
//     }
//   });
//  }
//  export default fetchData


// const configOpenAI = new Configuration({
//   apiKey: TOKEN
// })
// const openAI = new OpenAIApi(configOpenAI)

// const fetchData = async (input: string) => {
//   console.log(input)
  
//   const res = await openAI.createChatCompletion({
//     model: "gpt-3.5-turbo",
//     messages: [{ role: "user", content: input }]
//   })
//   return res.data.choices[0].message.content
// }
// export default fetchData

// async function fetchData(params = {}) {
//   const DEFAULT_PARAMS = {
//       model: "gpt-3.5-turbo",
//       messages: [{ role: "user", content: "Hello World" }],
//       // max_tokens: 4096,
//       temperature: 0,
//       // frequency_penalty: 1.0,
//       // stream: true,
//   };
//   const params_ = { ...DEFAULT_PARAMS, ...params };
//   const result = await fetch('https://api.openai.com/v1/chat/completions', {
//       method: 'POST',
//       headers: {
//           'Content-Type': 'application/json',
//           'Authorization': 'Bearer ' + String(TOKEN)
//       },
//       body: JSON.stringify(params_)
//   });
//   const stream = result.body
//   console.log(stream);
//   // const output = await fetchStream(stream);
//   // return output.choices[0].message;
// }
// export default fetchData




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