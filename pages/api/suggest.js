export default async function handler(req, res) {
    if (req.method !== "POST") {
      return res.status(405).json({ message: "Method not allowed" });
    }
  
    const { tasks } = req.body;
  
    try {
      const response = await fetch(process.env.NEXT_PUBLIC_AIML_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ tasks }),
      });
  
      if (!response.ok) {
        throw new Error(`API Error: ${response.statusText}`);
      }
  
      const data = await response.json();
  
      res.status(200).json({ suggestion: data.suggestion });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Failed to get AI suggestion" });
    }
  }
  