// API base URL - production'da gerçek API URL'si kullanılacak
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

// Newsletter subscription
export async function subscribeToNewsletter(email: string) {
  try {
    const response = await fetch(`${API_BASE_URL}/newsletter/subscribe`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    if (!response.ok) {
      throw new Error('Newsletter subscription failed');
    }

    return await response.json();
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    throw error;
  }
}

// Contact form submission
export async function submitContactForm(formData: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  try {
    const response = await fetch(`${API_BASE_URL}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error('Contact form submission failed');
    }

    return await response.json();
  } catch (error) {
    console.error('Contact form error:', error);
    throw error;
  }
}

// Get weekly excerpts
export async function getWeeklyExcerpts(page = 1, limit = 10, category = 'all') {
  try {
    const params = new URLSearchParams({
      page: page.toString(),
      limit: limit.toString(),
      category,
    });

    const response = await fetch(`${API_BASE_URL}/excerpts?${params}`);

    if (!response.ok) {
      throw new Error('Failed to fetch excerpts');
    }

    return await response.json();
  } catch (error) {
    console.error('Excerpts fetch error:', error);
    throw error;
  }
}

// Get blog posts
export async function getBlogPosts(page = 1, limit = 10, category = 'all') {
  try {
    const params = new URLSearchParams({
      page: page.toString(),
      limit: limit.toString(),
      category,
    });

    const response = await fetch(`${API_BASE_URL}/blog?${params}`);

    if (!response.ok) {
      throw new Error('Failed to fetch blog posts');
    }

    return await response.json();
  } catch (error) {
    console.error('Blog posts fetch error:', error);
    throw error;
  }
}

// Text-to-Speech for excerpts
export async function generateTTS(text: string, excerptId: string) {
  try {
    const response = await fetch(`${API_BASE_URL}/tts/generate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, excerptId }),
    });

    if (!response.ok) {
      throw new Error('TTS generation failed');
    }

    return await response.json();
  } catch (error) {
    console.error('TTS generation error:', error);
    throw error;
  }
}

// Book purchase (redirect to payment provider)
export async function initiatePurchase(format: string, price: string) {
  try {
    const response = await fetch(`${API_BASE_URL}/purchase/initiate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ format, price }),
    });

    if (!response.ok) {
      throw new Error('Purchase initiation failed');
    }

    return await response.json();
  } catch (error) {
    console.error('Purchase initiation error:', error);
    throw error;
  }
}

// Analytics tracking
export async function trackEvent(eventName: string, properties: Record<string, unknown> = {}) {
  try {
    const response = await fetch(`${API_BASE_URL}/analytics/track`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ event: eventName, properties }),
    });

    // Analytics tracking shouldn't block the UI
    if (!response.ok) {
      console.warn('Analytics tracking failed');
    }
  } catch (error) {
    console.warn('Analytics tracking error:', error);
  }
}

