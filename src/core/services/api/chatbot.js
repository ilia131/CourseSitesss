import axios from 'axios';

const API_KEY = "4jx0bmaWX4csR7zrGZ5et6VK0ORmzBRM8yUf63f7"; 

const fetchTextGeneration = async (prompt) => {
  try {
    const response = await axios.post(
      'https://api.cohere.ai/v1/generate',
      {
        model: 'command-xlarge-2021-11-22', 
        prompt: prompt,
        max_tokens: 150,
        temperature: 0.7, 
      },
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );
    console.log(response.data);
  } catch (error) {
    console.error('Error generating text:', error);
  }
};

export default fetchTextGeneration