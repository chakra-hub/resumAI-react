import { useEffect, useState } from "react"

const API_KEY = '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'

export const usePrompt = (prompt) => {
    const [sectionResult, setSectionResult] = useState();

    
  const fetchData = async (prompt) => {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.7,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
        max_tokens: 200,
        stream: false,
        n: 1,
      }),
    });

    const data = await response.json();
    setSectionResult(data.choices[0].message.content)
  }

  useEffect(()=>{
    fetchData(prompt);
  },[prompt])

  return sectionResult;

}