export async function fetchAiSuggestion(task: string): Promise<string | null> {
    const apiKey = process.env.NEXT_PUBLIC_AI_API_KEY;
    const apiUrl = process.env.NEXT_PUBLIC_AI_API_URL;
  
    if (!apiKey || !apiUrl) {
      console.error('API Key or URL is missing');
      return null;
    }
  
    try {
      const response = await fetch(`${apiUrl}/generate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          prompt: `Suggest task improvement for: ${task}`,
          max_tokens: 100,
        }),
      });
  
      if (!response.ok) {
        console.error('AI/ML API error:', response.statusText);
        return null;
      }
  
      const data = await response.json();
      return data?.result || null;
    } catch (error) {
      console.error('Fetch AI error:', error);
      return null;
    }
  }
  