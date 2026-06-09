import { personalInfo, about, skillCategories, projects, experiences, education } from '../data/portfolio';

// Generate a rich, structured system prompt for Grok based on the portfolio data
const generateSystemPrompt = (): string => {
  const skillsList = skillCategories
    .map((cat) => `${cat.category}: ${cat.skills.map((s) => s.name).join(', ')}`)
    .join('\n');

  const projectsList = projects
    .map(
      (proj) => `
- **${proj.title}**
  - Description: ${proj.description}
  - Tech Stack: ${proj.tech.join(', ')}
  - Features: ${proj.features ? proj.features.map((f) => `\n    * ${f}`).join('') : 'None'}
  - GitHub: ${proj.github || 'N/A'}
  - Live Demo: ${proj.demo || 'N/A'}
`
    )
    .join('\n');

  const expList = experiences
    .map(
      (exp) => `
- **${exp.role}** at **${exp.company}** (${exp.duration})
  - Responsibilities: ${exp.responsibilities.map((r) => `\n    * ${r}`).join('')}
`
    )
    .join('\n');

  const eduList = education
    .map(
      (edu) => `
- **${edu.degree}** from ${edu.institution} (${edu.year})${
        edu.description ? ` - ${edu.description}` : ''
      }`
    )
    .join('\n');

  return `You are "Sowrav's AI Assistant", a highly helpful, friendly, and professional virtual assistant representing Sowravu Suresh (Sowrav), a Full Stack Developer.
Your goal is to answer the user's questions about Sowrav's professional background, portfolio projects, skills, education, and contact details using only the verified information below.

---
SOWRAV'S BACKGROUND:
- Name: ${personalInfo.name}
- Current Title: ${personalInfo.title}
- Location: ${personalInfo.location || 'India, Kerala'}
- Tagline: ${personalInfo.tagline}
- Contact Email: ${personalInfo.email}
- GitHub Profile: ${personalInfo.github}
- LinkedIn: ${personalInfo.linkedin}
- Twitter/X: ${personalInfo.twitter || 'N/A'}
- Phone: ${personalInfo.phone || 'N/A'}
- Resume Link: ${personalInfo.resume}

INTRODUCTION:
${about.introduction}

CURRENT FOCUS:
${about.focus}

KEY STRENGTHS:
${about.strengths.map((s) => `- ${s}`).join('\n')}

TECHNICAL SKILLS:
${skillsList}

PORTFOLIO PROJECTS:
${projectsList}

WORK HISTORY:
${expList}

EDUCATION HISTORY:
${eduList}
---

CRITICAL INSTRUCTIONS:
1. **Tone**: Be professional, conversational, encouraging, and clear. Format responses using Markdown (bold text, bullet points) so they are easy to scan in a compact chat window.
2. **Context boundaries**: If asked about topics completely unrelated to Sowrav (e.g. general trivia, unrelated code tutorials, math, writing stories), reply briefly and politely steer the conversation back to Sowrav's experience. For example: "I am Sowrav's AI assistant, here to talk about his projects and engineering background. While I can answer that, let me know if you'd like to learn about his dry-fruits e-commerce project, DryDelicious, or his Node.js expertise!"
3. **Contacting Sowrav**: If the user asks how to hire or reach out to Sowrav, provide his email (${personalInfo.email}), phone (${personalInfo.phone}), or encourage them to scroll down and use the Contact Form on the page.
4. **Third-Person Perspective**: Answer from the perspective of an assistant representing Sowrav (e.g., use "Sowrav built...", "Sowrav is based in...", "His skills include...").
5. **Conciseness**: Keep replies to 1-3 short paragraphs max to fit the floating chat window nicely. Never make up facts.
`;
};

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

const GROK_API_KEY = import.meta.env.VITE_GROK_API_KEY;
const GROK_MODEL = import.meta.env.VITE_GROK_MODEL || 'grok-beta';
const AI_BASE_URL = import.meta.env.VITE_AI_BASE_URL || 'https://api.x.ai/v1';
const CHAT_API_URL = import.meta.env.VITE_CHAT_API_URL || '/api/chat';

/**
 * Sends chat history to the Grok AI model (either via local client direct call or serverless proxy)
 */
export async function sendMessageToGrok(chatHistory: ChatMessage[]): Promise<string> {
  const systemMessage = {
    role: 'system',
    content: generateSystemPrompt(),
  };

  // Prepend system prompt to the user history
  const messages = [
    systemMessage,
    ...chatHistory,
  ];

  try {
    // 1. Local / Dev mode: Call AI API directly if VITE_GROK_API_KEY is defined in environment variables
    if (GROK_API_KEY && GROK_API_KEY.trim() !== '') {
      const response = await fetch(`${AI_BASE_URL}/chat/completions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${GROK_API_KEY.trim()}`,
        },
        body: JSON.stringify({
          model: GROK_MODEL,
          messages,
          temperature: 0.7,
        }),
      });

      if (!response.ok) {
        const errorText = await response.text().catch(() => '');
        console.error('xAI API Error Raw Response:', errorText);
        
        let errorMessage = `xAI API response error: ${response.status} ${response.statusText}`;
        try {
          const errorJson = JSON.parse(errorText);
          if (errorJson.error?.message) {
            errorMessage = errorJson.error.message;
          }
        } catch {
          // Fallback if parsing fails
        }
        throw new Error(errorMessage);
      }

      const data = await response.json();
      return data.choices[0].message.content || '';
    }

    // 2. Production mode: Call backend proxy serverless endpoint to shield API key from user browser
    const response = await fetch(CHAT_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messages,
      }),
    });

    if (!response.ok) {
      const errText = await response.text().catch(() => '');
      throw new Error(`Chat API Proxy error (${response.status}): ${errText || response.statusText}`);
    }

    const data = await response.json();
    
    // Support standard OpenAI API response schema
    if (data.choices && data.choices[0]?.message?.content) {
      return data.choices[0].message.content;
    }
    
    // Support custom simplified response format if backend returns it directly
    return data.content || data.message || '';
  } catch (error) {
    console.error('Error in sendMessageToGrok:', error);
    throw error;
  }
}
