/**
 * FEED CONFIGURATION - How To Find A Job
 *
 * Add your top LinkedIn posts here. Each post needs:
 * - linkedInUrl: Direct link to the LinkedIn post
 * - content: The post text (copy from LinkedIn)
 * - likes, comments, reposts: Current engagement numbers
 * - date: When it was posted (YYYY-MM-DD)
 *
 * Tips:
 * - Feature your 5-10 best performing posts
 * - Update engagement numbers periodically
 * - Put newest/best posts first
 */

export interface FeedPost {
  id: string
  linkedInUrl: string
  content: string
  likes: number
  comments: number
  reposts?: number
  date: string
}

export const feedConfig = {
  pageName: "How To Find A Job",
  linkedInUrl: "https://www.linkedin.com/company/how-to-find-a-job",
  followers: "50,000+",
  description: "Career tips and job search strategies from our LinkedIn community.",
}

// Add your top posts below - update URLs and engagement numbers as needed
export const feedPosts: FeedPost[] = [
  // EXAMPLE POST - Replace with your actual posts
  {
    id: "1",
    linkedInUrl: "https://www.linkedin.com/company/how-to-find-a-job/posts/", // Replace with actual post URL
    content: `The hidden job market is real.

70% of jobs are never posted publicly.

How to access them:
• Network before you need to
• Tell people what you're looking for
• Ask for introductions, not job leads
• Engage with company employees on LinkedIn

Your next job might come from a conversation, not an application.`,
    likes: 3800,
    comments: 245,
    reposts: 310,
    date: "2024-01-15",
  },
  {
    id: "2",
    linkedInUrl: "https://www.linkedin.com/company/how-to-find-a-job/posts/",
    content: `Resume tip that gets callbacks:

Lead with impact, not responsibilities.

❌ "Responsible for managing social media accounts"

✅ "Grew Instagram following from 5K to 50K in 6 months, generating $200K in attributed revenue"

Numbers tell stories. Stories get interviews.`,
    likes: 5200,
    comments: 389,
    reposts: 445,
    date: "2024-01-10",
  },
  {
    id: "3",
    linkedInUrl: "https://www.linkedin.com/company/how-to-find-a-job/posts/",
    content: `The salary negotiation script that works:

"Thank you for the offer. I'm excited about the role.

Based on my research and the value I'll bring, I was hoping for [X amount].

Is there flexibility in the compensation package?"

Then stay silent. Let them respond.

Most people leave money on the table because they don't ask.`,
    likes: 4600,
    comments: 312,
    reposts: 378,
    date: "2024-01-05",
  },
  // --- Scraped 2026-03-24 ---
  {
    id: "4",
    linkedInUrl: "https://www.linkedin.com/company/how-to-find-a-job/posts/",
    content: `1 in 3 newly hired executives fail within 18 months.

Not because of skills. Because of culture fit and unclear expectations.

Hiring isn't just about finding the most qualified candidate.
It's about finding the right fit — and setting them up to succeed.`,
    likes: 44,
    comments: 8,
    date: "2026-03-24",
  },
  {
    id: "5",
    linkedInUrl: "https://www.linkedin.com/company/how-to-find-a-job/posts/",
    content: `LinkedIn salary negotiation in a nutshell:

Recruiter: "What are your salary expectations?"
You: "What's the budget for this role?"
Recruiter: "We need a number from you first."
You: "Based on my research and the scope of this role, I'm targeting [X]."

Know your worth. Say it out loud. Then stop talking.`,
    likes: 0,
    comments: 0,
    date: "2026-03-24",
  },
  // Add more posts here...
]
