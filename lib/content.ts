export interface Article {
  slug: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  content: string;
  publishedAt: string;
}

export interface Guide {
  slug: string;
  title: string;
  description: string;
  readTime: string;
  content: string;
  publishedAt: string;
}

export interface GlossaryTerm {
  slug: string;
  term: string;
  shortDefinition: string;
  fullDefinition: string;
  relatedTerms: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const articles: Article[] = [
  {
    slug: 'interview-prep-checklist-24-hours',
    title: 'Interview Prep Checklist: What to Do 24 Hours Before',
    description: 'The day before your interview matters more than you think. This comprehensive checklist ensures you walk in confident, prepared, and ready to impress.',
    category: 'Interview',
    readTime: '8 min read',
    publishedAt: '2026-01-12',
    content: `
## The 24-Hour Window

The day before your interview isn't the time to cram. It's the time to prepare strategically and set yourself up for confidence. What you do in these 24 hours can make the difference between a good interview and a great one.

This checklist covers everything from logistics to mindset, ensuring nothing catches you off guard.

## Logistics and Planning (Do This First)

### Confirm the Details

- **Interview time and timezone**: Triple-check, especially for remote interviews across time zones
- **Location or video platform**: Know exactly where you're going or what link you're clicking
- **Interviewer names and titles**: You should know who you're meeting with
- **Interview format**: Phone, video, panel, one-on-one, technical assessment?
- **Expected duration**: Plan your day around the full length plus buffer time

### Plan Your Route (In-Person)

If your interview is in-person:

- **Map the route** and check traffic patterns for that time of day
- **Do a test drive** if possible, especially if it's unfamiliar
- **Locate parking** and know the cost/payment method
- **Plan to arrive 10-15 minutes early**—not more, not less
- **Have a backup transportation plan** in case something goes wrong

### Tech Check (Remote)

For virtual interviews:

- **Test your camera, microphone, and speakers**
- **Download any required software** (Zoom, Teams, etc.) and log in
- **Check your internet speed**—have a backup hotspot ready
- **Test your background** in the lighting you'll actually have
- **Silence notifications** and close unnecessary tabs/apps
- **Have the interviewer's contact info** in case of tech issues

## Research and Preparation

### Company Research

You should have done extensive research earlier, but review:

- **Recent news** about the company (last 2-3 weeks)
- **Their products/services** and how they make money
- **Key competitors** and market position
- **Company mission and values**—look for specific language they use
- **Leadership team** and any relevant executives

### Role Research

- **Re-read the job description** carefully
- **Note the key requirements** and how your experience maps to each
- **Identify likely questions** based on the role specifics
- **Prepare questions** about the role, team, and expectations

### Interviewer Research

For each person you're meeting:

- **LinkedIn profile**: Their background, tenure, and interests
- **Common connections** or shared experiences
- **Content they've published** (posts, articles, talks)
- **Their role** in the interview (hiring manager vs. team member vs. HR)

## Your Story and Answers

### Review Your Stories

You should have prepared stories using the STAR method. Review:

- **Leadership/initiative story**
- **Problem-solving story**
- **Collaboration story**
- **Failure and learning story**
- **Achievement story**
- **Role-specific technical stories**

Practice telling each one in 2-3 minutes. Not scripted, but polished.

### Rehearse Key Questions

Practice answers to these out loud:

- "Tell me about yourself" (2-minute version)
- "Why are you interested in this role?"
- "Why are you leaving your current job?"
- "What's your greatest weakness?"
- "Where do you see yourself in 5 years?"
- "Why should we hire you?"

### Prepare Your Questions

Have 5-7 thoughtful questions ready. Good categories:

- About the role and expectations
- About the team and culture
- About challenges and opportunities
- About growth and development
- About the interviewer's experience

**Don't ask**: Anything you could easily Google, or salary/benefits (save for later stages).

## Materials and Documents

### Physical Materials

- **Multiple copies of your resume** (bring 5+, even if you think you won't need them)
- **Portfolio or work samples** if relevant
- **Notepad and pen** for taking notes
- **List of references** (formatted and ready to share if asked)
- **Your questions written down** (it's okay to reference notes)

### Digital Materials

- **Resume PDF** accessible on your phone/laptop
- **Portfolio links** bookmarked
- **LinkedIn profile** updated and ready to be viewed
- **Calendar** cleared for the interview block

## What to Wear

### Choose Your Outfit the Night Before

- **Lay out everything**: Clothes, shoes, accessories
- **Check for wrinkles, stains, or missing buttons**
- **Try it on** to ensure fit and comfort
- **When in doubt, dress one level up** from the company's normal attire
- **Keep it professional** even for casual environments

### Grooming

- **Hair, nails, and personal grooming** should be polished
- **Skip strong fragrances**—you never know about allergies
- **Look put-together**, whatever that means for your style

## Mindset and Energy

### The Night Before

- **Review your prep materials** one more time (but don't cram)
- **Eat a good dinner**—nothing too heavy or experimental
- **Set multiple alarms** to avoid sleep anxiety
- **Prepare everything** so morning is stress-free
- **Get to bed at a reasonable hour**—sleep matters

### The Morning Of

- **Wake up with time to spare**—no rushing
- **Eat breakfast** (your brain needs fuel)
- **Light exercise or movement** helps with nerves
- **Do a final review** of key talking points
- **Practice power poses** or whatever helps your confidence
- **Arrive early or log in early**

### Managing Nerves

Nervousness is normal. Channel it:

- **Reframe anxiety as excitement**—the physical sensations are similar
- **Focus on the conversation**, not your performance
- **Remember**: They want you to succeed. They're not trying to trip you up.
- **Breathe deeply** before entering or logging in

## Last-Minute Checklist

### Night Before

- [ ] Interview details confirmed (time, location/link, interviewers)
- [ ] Route planned or tech tested
- [ ] Company and interviewer research reviewed
- [ ] Stories and answers practiced
- [ ] Questions prepared
- [ ] Outfit ready and checked
- [ ] Materials prepared
- [ ] Alarm set, evening relaxed

### Morning Of

- [ ] Good breakfast consumed
- [ ] Final review completed
- [ ] Outfit on and looking sharp
- [ ] Materials in bag (or files accessible)
- [ ] Phone silenced (except for interview emergencies)
- [ ] Arrived/logged in early
- [ ] Confident and ready

## What NOT to Do

### Don't Cram

You either know the material or you don't. Frantic last-minute studying just increases anxiety.

### Don't Try Anything New

This isn't the time for a new outfit, hairstyle, or morning routine. Stick with what works.

### Don't Stalk the Interviewers on Social Media

A quick LinkedIn check is fine. Reading through years of Instagram posts is not.

### Don't Forget to Eat and Sleep

Your brain needs fuel and rest to perform. Don't sacrifice either.

### Don't Psych Yourself Out

You got the interview because you're qualified. They're not doing you a favor—they genuinely want to find the right person, and it might be you.

## The Final Word

By the time you walk into that interview, the preparation is done. Your job now is simply to have a conversation—to be curious, authentic, and engaged.

Trust your preparation. You've done the work. Now go show them who you are.

---

*Land your dream job. HowToFindAJob.org has everything you need to succeed in your search.*
    `,
  },
  {
    slug: 'first-impressions-interview',
    title: 'First Impressions: How to Nail the First 5 Minutes of an Interview',
    description: 'Research shows that interviewers often make up their minds within minutes. Master the critical opening moments that shape the entire conversation.',
    category: 'Interview',
    readTime: '7 min read',
    publishedAt: '2026-01-19',
    content: `
## Why the First 5 Minutes Matter So Much

Here's an uncomfortable truth: research suggests that interviewers often make preliminary judgments within the first few minutes of meeting a candidate. The rest of the interview? Often spent confirming that initial impression.

This doesn't mean the whole interview doesn't matter. But it does mean the opening moments are disproportionately important. Nail the first five minutes, and the rest of the conversation flows downhill.

## Before You Enter the Room

### The Waiting Room Matters

Your interview starts before you think it does.

**Be kind to everyone**: The receptionist might be asked for their impression. The person in the elevator might be your interviewer's colleague.

**Put your phone away**: Sitting in the waiting room scrolling looks disengaged.

**Sit up and appear confident**: Even when you think no one's watching, they might be.

**Review your key talking points**: But don't look frantic or nervous.

### The Walk-In

When your interviewer comes to get you:

**Stand immediately**: Don't make them wait for you to gather yourself.

**Make eye contact and smile**: Before they even reach you.

**Shake hands firmly** (when appropriate): Not crushing, not limp—confident.

**Use their name**: "Nice to meet you, Sarah" personalizes the interaction.

## The Critical First 60 Seconds

### What They're Evaluating

In the first minute, interviewers are assessing:

- **Energy**: Do you seem engaged and positive?
- **Confidence**: Do you carry yourself well?
- **Professionalism**: Are you polished and appropriate?
- **Warmth**: Are you someone they'd want to work with?
- **Fit**: Do you seem like you belong here?

These judgments happen fast and largely unconsciously. Your job is to send the right signals.

### The Small Talk

Most interviews start with a few minutes of small talk. This isn't wasted time—it's data.

**Weather/traffic/building comments**: Keep these brief and positive. "The commute was smooth" is fine. A 5-minute traffic complaint is not.

**Weekend/holiday talk**: Be friendly but professional. Share something appropriate.

**Building/office comments**: Genuine compliments are good. "Your office has great natural light" beats generic praise.

**Finding common ground**: If you noticed something in your research—a shared connection, school, or interest—this is a natural time to mention it.

### Your Body Language

Body language communicates before you say a word:

**Posture**: Sit up straight, lean slightly forward to show engagement.

**Eye contact**: Maintain it comfortably—not staring, not avoiding.

**Hands**: Keep them visible and relaxed. Avoid fidgeting.

**Mirroring**: Subtly matching their energy and posture builds rapport.

**Smile**: A genuine smile projects warmth and confidence.

## The "Tell Me About Yourself" Question

This question often comes within the first 2-3 minutes. It's your chance to set the tone for the entire interview.

### The Wrong Approach

- Reciting your resume chronologically
- Starting from childhood or college
- Rambling for 10+ minutes
- Focusing on personal details unrelated to the job
- Seeming unsure of what to say

### The Right Approach

Use a Past-Present-Future structure in about 2 minutes:

**Present (30 seconds)**: Where you are now and what you're doing
"I'm currently a product manager at TechCorp, where I lead a team focused on our mobile platform."

**Past (45 seconds)**: Relevant background that led here
"Before that, I spent five years in user research, which gave me a strong foundation in understanding customer needs. That background shaped how I approach product decisions—always starting with user insights."

**Future (30 seconds)**: Why you're here and excited
"I'm now looking to take on more strategic challenges, which is why this role caught my attention. The opportunity to shape the product roadmap for an established brand in a growing market is exactly the kind of challenge I'm ready for."

**Key elements**:
- Tailored to this specific job
- Highlights relevant experience
- Shows clear motivation for the role
- Confident and conversational tone
- Ends with a natural transition for follow-up questions

## Building Rapport Quickly

### Show Genuine Interest

People like people who like them. Show interest in:

- Their role and experience at the company
- The team you'd be joining
- The challenges they're working on

This isn't fake—if you're not genuinely interested, you're probably interviewing at the wrong place.

### Find Common Ground

Rapport builds faster with shared experiences:

- Mutual connections
- Similar career paths
- Shared educational background
- Common interests (discovered through research)

Don't force it, but notice and acknowledge commonalities when they arise.

### Be Authentically Yourself

Paradoxically, trying too hard to make a good impression often backfires. Interviewers can sense when someone is performing versus being genuine.

The goal isn't to pretend to be someone you're not. It's to be the best, most confident version of who you actually are.

## Common Opening Mistakes

### Starting with Apologies

Never open with:
- "Sorry I'm a bit nervous"
- "I'm not great at interviews"
- "I hope I can answer your questions well"

Even if you're thinking these things, don't say them. You're planting seeds of doubt.

### Over-Familiarity

It's good to be warm, but:
- Don't use nicknames unless invited
- Don't get too casual too quickly
- Don't treat it like a conversation with an old friend

Match their energy, don't exceed it.

### Excessive Self-Deprecation

Humility is good. But starting with:
- "I'm probably not what you're looking for, but..."
- "I'm sure you have better candidates..."
- "I know I'm not the most experienced..."

...undercuts your candidacy before it begins.

### Negative Energy

Avoid anything negative in the opening minutes:
- Complaints about traffic, weather, or your day
- Criticism of previous employers
- Pessimistic comments about the job market
- Visible stress or frustration

Start positive and maintain that energy.

## The Virtual Interview Opening

Remote interviews have different dynamics:

**Pre-meeting**:
- Log in 3-5 minutes early
- Check your background and lighting
- Test your audio and video
- Have water nearby

**When they join**:
- Greet them warmly: "Hi Sarah, great to virtually meet you!"
- Acknowledge the format naturally: "Thanks for making time for this"
- Look at the camera when speaking (this appears as eye contact)

**Small talk adjustments**:
- "How's your day going?" works better than location-based comments
- Acknowledge remote work naturally if relevant
- Don't comment on their background unless it's a clear conversation starter

## The 5-Minute Goal

By the end of the first 5 minutes, the interviewer should be thinking:

- "This person is confident and professional"
- "They seem genuinely interested in this role"
- "I can see them fitting in here"
- "I'm curious to learn more about their experience"
- "This conversation is going to be engaging"

If those boxes are checked, you've set yourself up for success. The rest of the interview becomes about confirming and deepening that positive impression.

## The Compound Effect

First impressions don't just affect the interview—they affect everything that comes after:

- How they interpret your answers
- How much benefit of the doubt you receive
- How memorable you are compared to other candidates
- Whether they advocate for you in hiring discussions

Those first 5 minutes are an investment that pays dividends throughout the entire process.

---

*Make every impression count. HowToFindAJob.org is your guide to interview success.*
    `,
  },
  {
    slug: 'linkedin-profile-optimization-2025',
    title: 'How to Optimize Your LinkedIn Profile for Recruiters in 2025',
    description: 'LinkedIn\'s algorithm and recruiter behavior have evolved. Here\'s how to optimize your profile for maximum visibility and impact in today\'s job market.',
    category: 'LinkedIn',
    readTime: '10 min read',
    publishedAt: '2026-01-26',
    content: `
## LinkedIn in 2025: What's Changed

LinkedIn isn't what it was five years ago. The platform has evolved significantly, and so have the ways recruiters use it. A profile that worked in 2020 may be invisible in 2025.

Here's what's new and how to optimize for it.

## The 2025 LinkedIn Landscape

### Algorithm Updates

LinkedIn now prioritizes:
- **Native content** over external links
- **Engagement signals** (comments, saves, shares) over just views
- **Authentic personal content** over corporate messaging
- **Video and carousel posts** for higher visibility
- **Active users** over passive profiles

### Recruiter Behavior

How recruiters search has evolved:
- **AI-powered candidate matching** weighs keywords more heavily
- **Skills assessments** factor into search rankings
- **Activity signals** indicate engaged candidates
- **Open to Work settings** are used extensively
- **Video introductions** are increasingly common

### AI Detection

Both LinkedIn's algorithm and recruiters are getting better at spotting:
- AI-generated content without human refinement
- Fake or inflated experience
- Keyword stuffing
- Inauthentic engagement

Authenticity matters more than ever.

## Profile Optimization: Section by Section

### Profile Photo

Your photo is the first thing people see. In 2025:

**Requirements:**
- High resolution and professional quality
- Good lighting (natural light is best)
- Face takes up 60-70% of the frame
- Neutral background or contextually appropriate setting
- Recent (should look like you now)

**What works:**
- A genuine, approachable smile
- Professional but not stiff
- Consistent with your industry's norms

**What to avoid:**
- Selfies or cropped group photos
- Outdated photos (more than 2-3 years old)
- Overly casual or unprofessional settings

### Headline

Your headline is prime real estate—don't waste it on just your job title.

**The Formula:**
[What you do] + [Who you help/what you achieve] + [Proof point or specialty]

**Examples:**
- "Product Manager | Building B2B Tools That Scale | Ex-Google, AWS"
- "Sales Leader | Helping SaaS Companies 3x Pipeline | $50M+ Closed"
- "Data Scientist | ML for Healthcare | Python, TensorFlow, Clinical NLP"

**Include:**
- Keywords recruiters search for
- Your value proposition
- Credential signals (certifications, notable employers)
- Industry-specific terminology

**Character limit:** 220 characters—use them wisely.

### Open to Work Feature

This has become essential for active job seekers:

**Options:**
- **Visible to all**: Shows green banner. Use when you're openly searching or unemployed.
- **Visible to recruiters only**: Hides from your network but shows in recruiter searches. Use when employed but looking.

**Optimize your settings:**
- Select up to 5 job titles you're targeting
- Choose specific locations (or remote)
- Specify start date flexibility
- Update regularly to stay fresh in search results

### About Section

Your About section is your story. In 2025, write it in first person and make it human.

**Structure:**

**Hook (1-2 sentences):** What drives you or makes you unique
"I believe data should tell stories, not just fill spreadsheets. That's been my north star across a decade of analytics work."

**Experience snapshot (2-3 sentences):** Highlights of your background
"I've led analytics teams at Fortune 500 companies and scrappy startups, helping both turn data into decisions. At my last role, our insights team drove $30M in revenue optimization."

**What you're looking for (1-2 sentences):** Your goals
"I'm now looking to lead a data team at a company tackling meaningful problems—healthcare, climate, or education."

**Call to action:** How to connect
"Open to conversations about analytics leadership. Reach out here or at email@example.com."

**Include:**
- Keywords naturally integrated
- Specific achievements with numbers
- Personality and voice
- Clear indication of what you're looking for

### Experience Section

This is where most people lose recruiters. Make every role count.

**For each position:**

**Headline:** Company name, your title, dates (use month/year format)

**Description:** Not job duties—achievements. Use this format:
- Action verb + What you did + Measurable result
- Focus on impact, not just activity
- Include relevant keywords naturally

**Example transformation:**

Bad: "Responsible for managing marketing campaigns and coordinating with cross-functional teams."

Good: "Led a team of 4 to execute 15+ integrated marketing campaigns, generating $3.2M in pipeline and reducing customer acquisition cost by 28%."

**Add media:** Include presentations, publications, videos, or project links when relevant.

### Skills Section

LinkedIn's AI matching relies heavily on skills. Optimize carefully:

**Strategic selection:**
- List 30-50 skills maximum (more gets diluted)
- Put your top 3 most relevant skills first (these display prominently)
- Mix technical and soft skills
- Match skills to the roles you're targeting

**Get endorsements:**
- Endorse others strategically (they often reciprocate)
- Ask colleagues to endorse your key skills specifically
- Quality matters more than quantity

### Featured Section

Pin your best work:
- High-performing posts that represent your thinking
- Media appearances or podcast features
- Articles or publications
- Portfolio pieces or case studies
- Company announcements you're proud of

This section is prime real estate for differentiation.

### Recommendations

Social proof matters. Aim for 5-10 strong recommendations.

**Getting recommendations:**
- Ask people who worked closely with you
- Be specific: "Would you be willing to speak to my work on [specific project]?"
- Give recommendations first—it often prompts reciprocation
- Update periodically with fresh recommendations

**What makes a good recommendation:**
- Specific examples of your work
- Measurable results when possible
- Speaks to both hard and soft skills
- Recent (within last 2-3 years)

## Engagement and Activity

In 2025, passive profiles rank lower. Show you're active:

### Posting Content

You don't need to become an influencer, but regular activity helps:
- 1-2 posts per week is sufficient
- Share industry insights, lessons learned, or observations
- Engage with others' content through thoughtful comments
- Quality over quantity

### Commenting Strategy

Strategic commenting is high-value, low-effort:
- Comment on industry leaders' posts
- Add genuine perspective, not just "Great post!"
- Build relationships through consistent engagement
- Your comments appear in your connections' feeds

### Article Publishing

LinkedIn articles can establish expertise:
- Write about topics in your field
- Original perspective matters more than length
- Articles remain on your profile indefinitely
- Include relevant keywords for search

## Technical Optimization

### Profile Completeness

LinkedIn rewards complete profiles:
- All sections filled out
- Profile photo and banner
- At least 50 connections
- Skills added and endorsed
- Experience with descriptions

### Custom URL

Claim your vanity URL:
- linkedin.com/in/yourname
- Looks more professional
- Easier to share

### Activity Status

Show you're active:
- Update your profile periodically
- Add new skills or experiences
- Engage with content regularly
- Respond to messages promptly

## What to Avoid

### Common Mistakes

- **Keyword stuffing**: Awkward overuse of terms signals inauthenticity
- **First-person/third-person inconsistency**: Pick one voice and stick with it
- **Outdated information**: Old roles with no descriptions, expired certifications
- **Empty experience sections**: Just a title with no description is a missed opportunity
- **Overpromising**: Claims you can't back up in an interview

### Red Flags for Recruiters

- No activity in months
- Minimal or no recommendations
- Very few connections
- Incomplete profile sections
- Inconsistencies with resume

## The Optimization Checklist

**Profile Basics:**
- [ ] Professional, high-quality photo
- [ ] Keyword-rich headline (not just job title)
- [ ] Custom URL claimed
- [ ] Banner image that reinforces your brand

**Content Sections:**
- [ ] Compelling About section with personality
- [ ] Experience with achievements, not just duties
- [ ] Quantified results where possible
- [ ] Skills section optimized and endorsed
- [ ] 5+ recommendations

**Activity:**
- [ ] Open to Work settings configured
- [ ] Some posting or engagement in past 30 days
- [ ] Featured section with strong content
- [ ] Messages responded to promptly

**Targeting:**
- [ ] Keywords match desired roles
- [ ] Skills align with target positions
- [ ] Experience descriptions use industry terminology
- [ ] Headline includes target role language

Complete this checklist and you'll be in the top 10% of LinkedIn profiles recruiters see.

---

*Optimize your job search. HowToFindAJob.org is your complete guide to landing your next role.*
    `,
  },
  {
    slug: 'personal-brand-job-searching',
    title: 'Building a Personal Brand While Job Searching',
    description: 'Your personal brand shapes how employers see you before the interview even starts. Learn how to build authentic professional presence that opens doors.',
    category: 'Job Search',
    readTime: '9 min read',
    publishedAt: '2026-02-02',
    content: `
## What Personal Brand Really Means

Personal brand isn't about self-promotion or becoming an influencer. It's simpler than that: it's the impression people have of you when you're not in the room.

When a hiring manager Googles your name, what do they find? When a recruiter checks your LinkedIn, what story does your profile tell? When a contact recommends you, what words do they use?

That's your personal brand. And during a job search, it matters more than ever.

## Why Personal Brand Matters in Job Search

### Recruiters Research You

Before reaching out, recruiters typically:
- Check your LinkedIn profile
- Google your name
- Look at any public content you've created
- Ask mutual connections about you

Your brand is what they find—or don't find.

### It Differentiates You

For any competitive role, dozens of candidates might have similar qualifications. Your brand is what makes you memorable:
- Your unique perspective
- Your communication style
- Your specific expertise
- Your professional story

### It Attracts Opportunities

A strong brand doesn't just help you apply—it makes opportunities come to you:
- Recruiters reach out proactively
- Your network thinks of you for relevant roles
- Referrals come more easily

## Building Brand During a Job Search

### 1. Define Your Positioning

Before building anything, get clear on:

**What are you known for?**
List 3-5 specific skills, areas of expertise, or qualities. Be specific:
- Not "marketing" but "B2B SaaS demand generation"
- Not "leadership" but "building engineering teams from 0 to 20"
- Not "problem-solving" but "turning around underperforming products"

**Who is your audience?**
During a job search, your audience includes:
- Recruiters in your target field
- Hiring managers at target companies
- Your professional network who might refer you
- Industry peers who influence hiring decisions

**What's your unique angle?**
What makes your perspective different? Maybe:
- Your combination of experiences (engineering + MBA + startups)
- Your specific approach (data-driven design decisions)
- Your contrarian view (remote teams outperform co-located ones)

### 2. Optimize Your Online Presence

**LinkedIn** (see our detailed guide):
- Headline that positions you clearly
- About section that tells your story
- Experience that highlights achievements
- Regular engagement showing you're active

**Google yourself:**
What appears on page one when someone searches your name?
- Claim profiles on relevant platforms
- Clean up anything unprofessional
- Create positive content to outrank anything neutral or negative

**Personal website** (optional but powerful):
A simple site with:
- Your professional summary
- Work highlights or portfolio
- Contact information
- Maybe a blog or articles

You don't need fancy design—clarity and professionalism matter more.

### 3. Create Content That Demonstrates Expertise

You don't need to become a content creator, but sharing your perspective has real benefits:

**LinkedIn posts:**
- Share insights from your experience
- Comment thoughtfully on industry topics
- Celebrate wins and learnings
- Weekly posting builds momentum

**Articles or blog posts:**
- Deep dives on topics in your field
- Lessons learned from your career
- How-to guides for problems you've solved
- Opinions on industry trends

**Other formats:**
- Podcast appearances (many industry podcasts seek guests)
- Speaking at meetups or conferences
- Contributing to industry publications

### 4. Network Strategically

Your brand is reinforced through relationships:

**Reconnect with your network:**
- Reach out to former colleagues
- Update mentors on your search
- Attend industry events

**Build new connections:**
- Connect with people at target companies
- Engage with industry leaders' content
- Join relevant professional groups

**Make it easy to refer you:**
When someone asks "what are you looking for?", have a clear, memorable answer:
"I'm looking for a product management role at a B2B company where I can own a product end-to-end. Ideally a Series B to D company in fintech or healthtech."

### 5. Be Consistent Across Touchpoints

Every interaction reinforces—or undermines—your brand:

**Resume**: Should tell the same story as your LinkedIn
**Cover letters**: Should reflect your voice and positioning
**Email communication**: Professional, clear, and prompt
**Interviews**: Should match the impression from your profile
**Social media**: Should be either professional or private

Inconsistency creates doubt. Consistency builds trust.

## Common Mistakes to Avoid

### Being Too Generic

"I'm a passionate professional seeking opportunities to grow" could apply to anyone. Be specific about what you do and what makes you different.

### Inauthenticity

Trying to be someone you're not shows. Interviewers will sense the disconnect between your online presence and real-life conversation.

### Negativity

During a job search, it's tempting to vent about:
- Former employers
- The job market
- Rejection experiences

Don't do this publicly. It becomes part of your brand.

### Oversharing

Some things don't belong in your professional brand:
- Strong political opinions (usually)
- Personal drama
- Anything you wouldn't want a hiring manager to see

This doesn't mean being inauthentic—it means being appropriate.

### Disappearing

A LinkedIn profile you haven't touched in months looks like you're not engaged. Stay active even when discouraged.

## Brand Building on a Timeline

### If You're Employed (Passive Search)

You have time to build gradually:
- Optimize your LinkedIn profile completely
- Start posting or engaging 1-2 times per week
- Build relationships before you need them
- Create a piece of long-form content monthly

### If You're Actively Searching

Focus on high-impact activities:
- LinkedIn profile optimization (do this first)
- Reconnecting with network (immediate)
- Visible engagement on LinkedIn (ongoing)
- Google search cleanup (immediate)

### If You're Unemployed

Balance brand-building with active searching:
- 70% of time on applications and networking
- 30% on content and brand development
- Use the gap productively—speaking, writing, learning

## The Authenticity Principle

The best personal brands aren't manufactured—they're revealed. You already have:
- A unique combination of experiences
- Specific expertise and skills
- A natural communication style
- Genuine professional interests

Personal branding isn't about creating a persona. It's about making the real you visible and memorable to the right people.

## Measuring Success

How do you know your brand is working?

**Leading indicators:**
- Increased profile views on LinkedIn
- Inbound recruiter messages
- Engagement on your content
- Network asking to connect you with opportunities

**Lagging indicators:**
- Interview rates on applications
- Quality of opportunities presented
- Referrals from your network
- Offers and negotiations

## The Long-Term Perspective

Your job search will end, but your brand continues. The visibility you build now becomes an asset:
- Future job searches become easier
- Career opportunities find you
- Your voice has more reach
- Your network grows and strengthens

Think of brand-building during your job search as an investment that pays dividends for years.

---

*Build a brand that opens doors. HowToFindAJob.org is your complete guide to landing your next opportunity.*
    `,
  },
  {
    slug: 'resume-beats-ats',
    title: 'How to Write a Resume That Beats ATS Systems',
    description: 'Learn the exact formatting and keyword strategies that get your resume past automated screening and into the hands of hiring managers.',
    category: 'Resume',
    readTime: '8 min read',
    publishedAt: '2024-01-15',
    content: `
## What is an ATS and Why Does It Matter?

An Applicant Tracking System (ATS) is software used by companies to manage job applications. Here's the reality: **over 75% of resumes are rejected by ATS before a human ever sees them**. Understanding how these systems work is your first step to beating them.

## The Formatting Rules That Actually Matter

### Use a Clean, Simple Format

ATS systems struggle with complex formatting. Stick to these rules:

- **Use standard fonts**: Arial, Calibri, or Times New Roman
- **Avoid tables and columns**: They confuse most ATS parsers
- **Skip graphics and images**: ATS can't read them
- **Use standard section headings**: "Work Experience," "Education," "Skills"

### File Format Matters

Always submit your resume as a **.docx file** unless specifically asked for PDF. While modern ATS can read PDFs, .docx files have the highest compatibility rate.

## The Keyword Strategy That Works

### Mirror the Job Description

This is the most important tactic. ATS systems scan for keywords that match the job posting. Here's how to do it right:

1. **Read the job description carefully** and identify key skills, qualifications, and responsibilities
2. **Include exact phrases** from the posting when they genuinely apply to your experience
3. **Use both acronyms and full terms**: "Search Engine Optimization (SEO)" covers both bases
4. **Place keywords naturally** in your experience descriptions, not in a keyword dump

### Focus on Hard Skills

While soft skills matter in interviews, ATS systems primarily scan for hard skills:

- Technical tools and software
- Programming languages
- Certifications
- Industry-specific methodologies

## Quantify Your Achievements

ATS might filter for keywords, but hiring managers want to see impact. Use the **PAR method**:

- **Problem**: What challenge did you face?
- **Action**: What did you do?
- **Result**: What was the measurable outcome?

**Example**: "Reduced customer churn by 23% by implementing a new onboarding program that increased user engagement within the first 30 days."

## Section-by-Section Optimization

### Contact Information
- Full name
- Phone number
- Professional email
- LinkedIn URL
- City and state (full address isn't necessary)

### Professional Summary
Write 2-3 sentences that include:
- Your current title and years of experience
- Key areas of expertise (use keywords from the job posting)
- A notable achievement with numbers

### Work Experience
For each role:
- Company name, job title, dates (Month Year format)
- 3-5 bullet points starting with action verbs
- At least one quantified achievement per role

### Skills Section
List 8-12 relevant skills that match the job posting. Prioritize hard skills over soft skills.

## Common ATS Mistakes to Avoid

1. **Submitting as PDF** when .docx is accepted
2. **Using creative section headers** like "Where I've Made My Mark" instead of "Work Experience"
3. **Putting important info in headers/footers** (ATS often ignores these)
4. **Including references on the resume** (they take up space and add no ATS value)
5. **Using light-colored text** thinking it will "hide" keywords (it won't work and looks bad when printed)

## Test Your Resume

Before submitting, run your resume through a free ATS scanner. Services like Jobscan or Resume Worded can show you how well your resume matches a specific job posting.

## The Bottom Line

An ATS-optimized resume isn't about gaming the system—it's about clearly communicating your qualifications in a format that both machines and humans can easily understand. Focus on:

1. Clean, simple formatting
2. Strategic keyword placement
3. Quantified achievements
4. Standard section headings

Do this consistently, and you'll see more of your applications make it to the interview stage.
    `,
  },
  {
    slug: 'interview-questions',
    title: '10 Interview Questions You\'ll Definitely Be Asked',
    description: 'Prepare winning answers for the most common behavioral and technical interview questions with frameworks and examples.',
    category: 'Interview',
    readTime: '10 min read',
    publishedAt: '2024-01-20',
    content: `
## Why These Questions Keep Coming Up

Interviewers ask the same questions for a reason: they work. These questions reveal how you think, how you've handled challenges, and whether you'll fit the team. Let's break down the 10 most common questions and how to nail each one.

## 1. "Tell Me About Yourself"

This isn't an invitation to recite your resume. It's your chance to tell a compelling 2-minute story.

**The Formula:**
- Present: What you're doing now and why it's relevant
- Past: Key experiences that led you here
- Future: Why this role is the natural next step

**Example**: "I'm currently a product manager at a B2B SaaS company where I've led the launch of three major features that increased user engagement by 40%. Before that, I spent five years in user research, which gave me a strong foundation in understanding customer needs. I'm excited about this role because it combines my product experience with my research background to lead a customer-focused team."

## 2. "What's Your Greatest Weakness?"

The key is genuine self-awareness, not a humble brag.

**Bad Answer**: "I'm a perfectionist" (too cliché)

**Good Framework:**
- Acknowledge a real weakness
- Explain what you've done to address it
- Show progress

**Example**: "I used to struggle with delegation—I'd take on too much myself rather than trust others. I've worked on this by creating clearer project handoffs and regular check-ins. My last manager actually noted improvement in my performance review."

## 3. "Why Do You Want to Work Here?"

This tests whether you've done your homework.

**Research These Before the Interview:**
- Recent company news and announcements
- Company values and mission
- Products or services you find interesting
- The team you'd be joining

**Structure Your Answer:**
- What specifically attracts you to the company
- How your skills align with their needs
- What you hope to contribute and learn

## 4. "Tell Me About a Time You Failed"

They want to see how you handle setbacks and what you learn from them.

**Use the STAR Method:**
- **Situation**: Set the context
- **Task**: What you were responsible for
- **Action**: What you did (and what went wrong)
- **Result**: What you learned and how you applied it

**Important**: Choose a real failure, but not one that raises red flags about core job requirements.

## 5. "Where Do You See Yourself in 5 Years?"

They're checking for ambition and whether you'll stay long enough to justify the hiring investment.

**Good Answer Elements:**
- Shows you've thought about your career
- Aligns with growth opportunities at the company
- Demonstrates ambition without threatening your potential manager

**Example**: "In five years, I'd like to be leading a team and making strategic decisions that impact the business. I'm drawn to this role because the company invests in developing leaders, and I see a clear path from this position to increased responsibility."

## 6. "Why Are You Leaving Your Current Job?"

Stay positive—even if you're leaving because of a terrible manager.

**Rules:**
- Never badmouth your current employer
- Focus on what you're moving toward, not running from
- Keep it brief

**Example**: "I've learned a lot in my current role, but I'm ready for new challenges. This position offers the opportunity to work on larger-scale projects and develop skills in [specific area]."

## 7. "Describe a Conflict With a Coworker"

They want to see emotional intelligence and conflict resolution skills.

**Structure Your Answer:**
- Briefly describe the situation
- Focus on your actions, not the other person's faults
- Explain the resolution and what you learned
- Show you can disagree professionally

## 8. "What's Your Expected Salary?"

This is a negotiation—don't give a specific number first if you can avoid it.

**Deflection Strategies:**
- "I'd like to learn more about the role before discussing compensation. What range do you have budgeted for this position?"
- "I'm flexible based on the total compensation package. Can you share more about benefits and growth opportunities?"

**If Pressed:**
- Give a range based on market research
- Emphasize you're looking at the complete package

## 9. "Do You Have Any Questions for Us?"

Always have questions prepared. This shows genuine interest and helps you evaluate the opportunity.

**Strong Questions:**
- "What does success look like in this role in the first 90 days?"
- "How would you describe the team culture?"
- "What are the biggest challenges facing the team right now?"
- "What's the growth path for someone in this role?"

**Avoid:**
- Questions you could easily Google
- Salary/benefits questions (save for later stages)
- Questions that suggest you've already got the job

## 10. "Why Should We Hire You?"

This is your closing pitch. Summarize why you're the best candidate.

**Framework:**
- Restate the key requirements of the role
- Connect your specific experience to each requirement
- Add something unique you bring

**Example**: "Based on our conversation, you need someone who can manage complex projects, work cross-functionally, and ramp up quickly. In my current role, I've managed a $2M project portfolio and regularly collaborate with engineering, design, and marketing. Plus, my background in your industry means I already understand the regulatory landscape—I could contribute meaningfully from day one."

## Final Preparation Tips

1. **Practice out loud** but don't memorize scripts
2. **Prepare 5-7 stories** that demonstrate different skills
3. **Research the company** and your interviewers on LinkedIn
4. **Have specific examples** with quantified results
5. **Send a thank-you email** within 24 hours
    `,
  },
  {
    slug: 'salary-negotiation-script',
    title: 'The Salary Negotiation Script That Works',
    description: 'Word-for-word scripts and proven tactics to negotiate 10-20% higher compensation on your next job offer.',
    category: 'Negotiation',
    readTime: '9 min read',
    publishedAt: '2024-01-25',
    content: `
## The Reality: Most People Don't Negotiate

Here's a stat that should motivate you: **only 39% of people try to negotiate their salary**, but **84% of those who do get more money**. Negotiating isn't rude or greedy—it's expected.

## Before the Negotiation: Do Your Research

You can't negotiate effectively without market data.

### Salary Research Sources
- **Glassdoor Salary**: Company-specific salary data
- **LinkedIn Salary**: Industry and location benchmarks
- **Levels.fyi**: Particularly strong for tech roles
- **PayScale**: Good for general market rates

### Determine Your Range
Calculate three numbers:
- **Target**: The realistic outcome you'd be happy with
- **Best case**: The high end of market rate for your experience
- **Walk-away point**: The minimum you'd accept

## The Initial Offer Call

When you receive an offer, never accept or negotiate on the spot.

### Script: Receiving the Offer
> "Thank you so much for the offer—I'm genuinely excited about the opportunity. I'd like to take some time to review the full package. When do you need a decision by?"

This buys you time and shows you're thoughtful about decisions.

## The Counter-Offer Script

After reviewing the offer, schedule a call to discuss. Here's the framework:

### Step 1: Express Enthusiasm
Start positive. You want them to know you want this job.

> "I'm really excited about this opportunity and can see myself contributing to [specific project/goal]. After reviewing the offer, I'd like to discuss the compensation."

### Step 2: State Your Ask
Be specific and confident. Use research to back up your ask.

> "Based on my research and conversations with others in similar roles, I was expecting something in the range of [X to Y]. My experience with [specific skill/achievement] and the value I can bring to [specific project] makes me confident I can deliver at that level."

### Step 3: Wait
This is the hard part. After making your ask, **stop talking**. Let them respond. Silence is uncomfortable, but it's powerful.

## Handling Common Responses

### "That's outside our budget"
> "I understand budget constraints. I'm really interested in making this work. Are there other parts of the package we could adjust? I'm thinking about things like signing bonus, equity, or additional vacation time."

### "Let me check with my manager"
> "Of course. I appreciate you advocating for me. When can I expect to hear back?"

### "This is our final offer"
Probe to see if it's truly final:
> "I appreciate you being direct. Before I make a decision, can you help me understand—is there any flexibility on [specific element], or is the entire package fixed?"

### "Why do you think you deserve more?"
Be ready with your value proposition:
> "My experience with [specific skill] directly addresses [company challenge]. At my current company, I [specific achievement with numbers], and I'm confident I can bring that same impact here."

## Negotiating Beyond Salary

If salary is truly fixed, there's still room to improve your package:

### Items to Negotiate
- **Signing bonus**: Often easier to approve than salary increases
- **Equity/stock options**: Ask for more shares or better vesting terms
- **Start date**: If you need time, ask for it
- **Vacation days**: Some companies are flexible here
- **Remote work flexibility**: Hybrid arrangements or fully remote
- **Professional development**: Conference budget, training programs
- **Title**: Sometimes costs the company nothing but matters for your career

### Script for Non-Salary Items
> "I understand the salary is firm. Would the company be open to discussing a signing bonus to help bridge the gap? Or perhaps additional equity?"

## When They Match Your Ask

If they agree to your counter, confirm in writing immediately.

> "Thank you so much—I'm thrilled to accept. Could you please send an updated offer letter reflecting these terms? I'd like to have everything in writing before I give notice."

## Real Negotiation Examples

### Example 1: First Counter
**Offer**: $85,000
**Your research shows**: $90,000-100,000 is market rate

> "I'm excited about the offer and ready to move forward. However, based on my research and the scope of this role, I was expecting something closer to $95,000. Is there flexibility in the budget?"

**Outcome**: They meet you at $92,000

### Example 2: Multiple Levers
**Offer**: $120,000, 0.1% equity, 2 weeks vacation
**They say salary is fixed**

> "I understand the salary is set. Would you be able to increase the equity grant to 0.15% to reflect the market rate for this level? Additionally, given my seniority, I'd like to start with 3 weeks of vacation."

**Outcome**: 0.12% equity and 3 weeks vacation

## Critical Mistakes to Avoid

1. **Accepting too quickly**: Always take time to review
2. **Apologizing**: "I'm sorry to ask, but..." undermines your position
3. **Lying about other offers**: It can backfire badly
4. **Making it personal**: Focus on market rates and value, not personal needs
5. **Forgetting to get it in writing**: Verbal agreements aren't binding

## The Mindset Shift

Remember: **you're not asking for charity—you're discussing the fair market value of your work**. The company has already decided they want you. This conversation is about finding terms that work for both parties.

Negotiate every offer. The worst they can say is no, and you'll still have the original offer.
    `,
  },
  {
    slug: 'linkedin-profile-optimization',
    title: 'How to Optimize Your LinkedIn Profile for Recruiters',
    description: 'Transform your LinkedIn profile into a recruiter magnet with these proven optimization strategies.',
    category: 'LinkedIn',
    readTime: '7 min read',
    publishedAt: '2024-02-01',
    content: `
## Why LinkedIn Matters for Your Job Search

**87% of recruiters use LinkedIn** to find candidates. If your profile isn't optimized, you're invisible to thousands of opportunities. Let's fix that.

## Your Profile Photo: The First Impression

Your photo is the first thing people see. Here's what works:

### Photo Requirements
- **Professional quality**: Good lighting, clear resolution
- **Face takes up 60-70%**: No full-body shots
- **Friendly expression**: A slight smile increases connection requests
- **Neutral background**: Solid colors work best
- **Recent photo**: Should look like you now

### What to Avoid
- Selfies
- Group photos (even if cropped)
- Photos from 10+ years ago
- Overly casual settings

## Your Headline: Beyond Your Job Title

Your headline is prime real estate—don't waste it on just your job title.

### The Formula That Works
**[What You Do] | [Who You Help] | [Key Skill/Result]**

**Examples:**
- "Product Manager | Building Tools That Scale B2B Sales | Ex-Salesforce"
- "Data Scientist | Turning Data into Business Decisions | Python, SQL, ML"
- "Marketing Director | Growing DTC Brands from $1M to $10M ARR"

### Include Keywords
Recruiters search for specific skills. Include relevant keywords:
- Job titles you want
- Key technologies or methodologies
- Industry terminology

## The About Section: Your Professional Story

This is where you sell yourself. Write it in first person—it's more personable.

### Structure for Success

**Paragraph 1: The Hook**
Lead with what makes you unique. What's your professional superpower?

**Paragraph 2: Your Experience**
Highlight key achievements with numbers. Focus on impact, not responsibilities.

**Paragraph 3: What Drives You**
Share what you're passionate about professionally. This helps recruiters understand your fit.

**Paragraph 4: The Call to Action**
Tell people how to reach you and what you're open to.

### Sample About Section
> Building products that solve real problems is what gets me out of bed. Over the past 8 years, I've led teams at startups and Fortune 500 companies, shipping features that collectively serve 10M+ users.

> Most recently at TechCorp, I led a team of 6 engineers to rebuild our core platform, reducing page load times by 60% and increasing user retention by 25%. Before that, I cut my teeth at StartupXYZ, where I wore every hat from customer support to product strategy.

> I'm passionate about mentoring emerging PMs and believe great products come from diverse, collaborative teams.

> Open to: Product leadership roles at mission-driven companies. Reach out at yourname@email.com or connect here—I respond to everyone.

## Experience Section: Show, Don't Tell

Each role should demonstrate impact, not just list duties.

### The Formula for Each Bullet
**[Action verb] + [What you did] + [Measurable result]**

**Weak**: "Responsible for marketing campaigns"
**Strong**: "Launched 15 multi-channel campaigns that generated $2.3M in pipeline"

### Include Media
Add presentations, videos, or links to projects you've worked on. Visual evidence of your work stands out.

## Skills & Endorsements

### Strategic Skill Selection
- List skills that align with roles you want
- Put your top 3 most relevant skills first
- Aim for 30-50 skills total

### Get Endorsements
- Endorse others first (they often reciprocate)
- Ask colleagues to endorse your top skills specifically
- Focus on quality endorsements from credible connections

## The Power of Recommendations

Recommendations are social proof. Aim for 5-10 strong ones.

### How to Get Recommendations
- Request from direct managers and colleagues
- Give recommendations first—it often prompts reciprocation
- Be specific in your request: "Would you be willing to write about our work on [specific project]?"

### What Makes a Good Recommendation
- Specific examples of your work
- Measurable results when possible
- Speaks to soft skills (collaboration, leadership)

## LinkedIn's Open to Work Feature

### When to Use It
The green "Open to Work" banner signals to recruiters that you're actively looking.

**Visible to all**: Use if you're unemployed or openly searching
**Visible to recruiters only**: Use if you're employed but quietly looking

### Optimize Your Open to Work Settings
- Select specific job titles (up to 5)
- Choose target locations
- Specify start date preferences

## Posting Content: Building Visibility

Active profiles get more recruiter attention.

### What to Post
- Industry insights and opinions
- Lessons learned from your career
- Celebrating team wins
- Commenting thoughtfully on others' posts

### Posting Frequency
Start with 1-2 posts per week. Consistency matters more than frequency.

## Technical Optimization

### LinkedIn SEO
- Use keywords in your headline, about section, and experience
- Your current job title is heavily weighted in search
- Complete 100% of your profile (LinkedIn prioritizes complete profiles)

### Profile Settings to Check
- Make your profile public
- Allow your profile to be found by search engines
- Enable "Let recruiters know you're open"

## Quick Wins Checklist

- [ ] Professional photo uploaded
- [ ] Keyword-rich headline (not just job title)
- [ ] Compelling about section with call to action
- [ ] All experience entries have measurable achievements
- [ ] 30+ skills listed with endorsements
- [ ] 5+ recommendations
- [ ] Custom URL (linkedin.com/in/yourname)
- [ ] Open to work settings configured
- [ ] Posted content in the last 30 days

Complete these, and you'll be in the top 10% of LinkedIn profiles recruiters see.
    `,
  },
  {
    slug: 'job-posting-red-flags',
    title: 'Red Flags to Watch for in Job Postings',
    description: 'Learn to spot warning signs in job listings that could save you from toxic workplaces and wasted time.',
    category: 'Job Search',
    readTime: '6 min read',
    publishedAt: '2024-02-10',
    content: `
## Not All Job Postings Are Created Equal

Job postings are marketing documents. Companies present their best face, but there are patterns that reveal potential problems. Learning to spot these can save you months of frustration.

## Red Flag #1: Vague Job Descriptions

### Warning Signs
- No specific responsibilities listed
- Phrases like "and other duties as assigned" make up most of the role
- The job title doesn't match the description
- Requirements are impossibly broad

### What It Might Mean
- The role isn't well-defined
- You might be doing multiple jobs
- Management doesn't know what they need

### Example Red Flag
> "Looking for a rockstar to wear many hats and do whatever it takes to move the needle. Must be comfortable with ambiguity."

This could mean anything—and probably means you'll be stretched thin with unclear expectations.

## Red Flag #2: Unrealistic Requirements

### Warning Signs
- Entry-level salary with senior-level requirements
- 10+ years experience for a mid-level role
- Expertise in 15 different technologies
- Requirements that are mathematically impossible ("5 years experience with a 3-year-old technology")

### What It Might Mean
- They're underpaying for the role
- HR doesn't understand the job
- They want to underpay someone overqualified

## Red Flag #3: "We're a Family Here"

### Warning Signs
- Excessive emphasis on "family culture"
- "We work hard and play hard"
- "Looking for passionate people who go above and beyond"

### What It Might Mean
- Blurred boundaries between work and personal life
- Expectation of unpaid overtime
- Potential for emotional manipulation
- Difficulty taking vacation or setting limits

### What to Look for Instead
"We support work-life balance" with specific examples like flexible hours, PTO policies, or mental health support.

## Red Flag #4: Been Open for Months

### Warning Signs
- Job posted for 90+ days
- Same role reposted multiple times
- Company always seems to be hiring for this position

### What It Might Mean
- High turnover in the role
- They can't find anyone who meets their unrealistic expectations
- Compensation is below market
- Something's wrong with the team or manager

### How to Research
- Check LinkedIn for how long people stay in similar roles at the company
- Look at Glassdoor reviews for mentions of turnover

## Red Flag #5: Salary Not Listed

### Warning Signs
- "Competitive salary" with no range
- "Salary commensurate with experience"
- "DOE" (Depends on Experience) with no baseline

### What It Might Mean
- Below-market pay they don't want to advertise
- They want to lowball candidates based on their current salary
- Lack of transparency could extend to other areas

### What to Do
Ask about salary range in your first conversation. Companies that won't share basic comp information aren't respecting your time.

## Red Flag #6: Too Many Interviews

### Warning Signs
- 6+ interview rounds
- Case studies that take 10+ hours
- "We're thorough" used to justify endless process

### What It Might Mean
- Indecisive leadership
- Disorganized hiring process
- How they hire reflects how they operate

### Reasonable Expectations
Most roles should require 3-4 interviews maximum. Anything beyond that should be for very senior positions and clearly communicated upfront.

## Red Flag #7: Negative Glassdoor Reviews

### Warning Signs
- Multiple reviews mentioning the same problems
- Recent reviews are worse than older ones (deteriorating culture)
- Management responds defensively to criticism
- High percentage of 1-2 star reviews

### What to Look For
- Patterns in criticism (not just one angry person)
- How the company responds to feedback
- Recent reviews (culture can change quickly)

### Important Note
A few bad reviews are normal—no company is perfect. Look for patterns and volume.

## Red Flag #8: Urgency Pressure

### Warning Signs
- "We need someone to start immediately"
- Very short deadline to accept an offer
- High-pressure tactics during interviews
- "This opportunity won't last"

### What It Might Mean
- Previous person left abruptly (why?)
- They don't respect your decision-making process
- High-pressure culture overall

## Green Flags to Look For

Balance your skepticism with an eye for positive signs:

- Clear salary range posted
- Specific, realistic requirements
- Details about growth and development
- Information about team structure
- Mentions of concrete benefits and perks
- Recent positive Glassdoor reviews
- Reasonable interview process outlined
- Employee tenure visible on LinkedIn (people stay)

## Questions to Ask That Reveal Truth

If you do apply, ask questions that reveal potential issues:

1. "Why is this position open?"
2. "How long has the last person been in this role?"
3. "What does success look like in the first 90 days?"
4. "How would you describe the team culture?"
5. "What's the typical career path for someone in this role?"

## The Bottom Line

Trust your instincts. If something feels off during the application process, it's usually a preview of what working there would be like. A job search takes time—don't waste it on companies that show warning signs from day one.
    `,
  },
];

export const guides: Guide[] = [
  {
    slug: 'job-search-playbook',
    title: 'The Complete Job Search Playbook',
    description: 'A comprehensive guide covering everything from identifying your ideal role to accepting an offer. Your complete roadmap to landing your next job.',
    readTime: '25 min read',
    publishedAt: '2024-01-01',
    content: `
## Introduction: The Modern Job Search

The job search landscape has fundamentally changed. What worked five years ago doesn't work today. This playbook gives you a complete, step-by-step framework for landing your next role—faster and with better results.

Whether you're actively job searching or just keeping your options open, this guide will help you approach the process strategically.

---

## Phase 1: Self-Assessment and Goal Setting

Before you start applying, you need clarity on what you're looking for. Skipping this step leads to scattered applications and mediocre results.

### Define Your Ideal Role

Ask yourself these questions:

**What do you want to DO?**
- What tasks energize you vs. drain you?
- What problems do you enjoy solving?
- What skills do you want to use daily?

**What environment do you thrive in?**
- Startup or established company?
- Remote, hybrid, or in-office?
- Team size and structure?
- Industry and mission?

**What's non-negotiable?**
- Minimum salary and benefits
- Location requirements
- Work-life balance needs
- Growth opportunities

### Create Your Target List

Based on your answers, create a list of:
- 10-15 target companies you'd love to work for
- 3-5 job titles that match what you're looking for
- Industries where your skills are valued

This focused approach beats mass-applying to hundreds of random jobs.

---

## Phase 2: Building Your Personal Brand

Your personal brand is what people find when they search for you. Before you start applying, make sure it's working for you.

### LinkedIn Optimization

Your LinkedIn profile is often the first thing recruiters see. Optimize it fully:

**Profile Photo**: Professional, friendly, recent
**Headline**: Go beyond your job title—include value proposition and keywords
**About Section**: Tell your story with a hook, achievements, and call to action
**Experience**: Focus on measurable accomplishments, not just responsibilities
**Skills**: Include relevant keywords recruiters search for

### Resume Preparation

You need a master resume that you can customize for each application:

**Format**: Clean, ATS-friendly, easy to scan
**Content**: Achievement-focused with quantified results
**Length**: 1-2 pages depending on experience
**Keywords**: Include terms from your target job postings

### Online Presence Audit

Google yourself and clean up anything problematic. Consider:
- Social media privacy settings
- Personal website or portfolio
- GitHub or relevant work samples
- Thought leadership content

---

## Phase 3: The Application Strategy

Here's where most job seekers go wrong. They apply to hundreds of jobs hoping something sticks. This is ineffective and demoralizing.

### The 3-Tier Application System

**Tier 1: Dream Jobs (Focus 60% of effort)**
- Target companies you've identified
- Roles that match your skills perfectly
- Apply through warm connections when possible

**Tier 2: Good Fits (Focus 30% of effort)**
- Solid opportunities that meet your criteria
- Companies with good reputations
- Roles that use your core skills

**Tier 3: Volume Plays (Focus 10% of effort)**
- Quick-apply opportunities
- Practice interviews
- Building pipeline

### Warm Outreach Strategy

The highest-success applications come through referrals. Here's how to get them:

1. **Identify connections at target companies** via LinkedIn
2. **Reach out with a specific ask**: "I'm interested in [specific role]. Would you be open to sharing what it's like to work there?"
3. **Build relationship first**: Don't immediately ask for a referral
4. **Make it easy**: When you do ask, provide your resume and a brief summary of why you're a fit

### Application Tracking

Maintain a spreadsheet or use a tool to track:
- Company and role
- Date applied
- Application method (referral, direct, recruiter)
- Status and next steps
- Notes from any interactions

---

## Phase 4: The Interview Process

Once you start getting interviews, preparation becomes your competitive advantage.

### Research Protocol

Before every interview, know:
- **Company basics**: Products, services, recent news, competitors
- **The role**: Detailed understanding of requirements and how you meet them
- **Your interviewers**: LinkedIn profiles, their role, common ground
- **Culture indicators**: Glassdoor reviews, company values, social media

### Story Bank

Prepare 7-10 stories that demonstrate key competencies:
- Leadership and initiative
- Problem-solving
- Collaboration
- Handling conflict
- Overcoming failure
- Technical expertise (role-specific)

Use the STAR method: Situation, Task, Action, Result.

### Interview Types and How to Prepare

**Phone Screen (30-45 min)**
- High-level overview of your experience
- Confirm you meet basic requirements
- Assess mutual interest

Preparation: Have your resume and the job posting visible. Be ready for "Tell me about yourself" and salary expectations.

**Behavioral Interview (45-60 min)**
- Deep dives into past experiences
- "Tell me about a time when..."

Preparation: Review your story bank. Practice answers out loud.

**Technical/Skills Assessment**
- Case studies, coding challenges, presentations
- Practical demonstration of abilities

Preparation: Ask in advance what to expect. Practice similar problems.

**Final Round/Stakeholder Interviews**
- Often multiple sessions
- Meeting senior leaders
- Cultural fit assessment

Preparation: Prepare questions that show strategic thinking. Have your closing pitch ready.

### Questions to Ask

End every interview with thoughtful questions:
- "What does success look like in this role in the first 90 days?"
- "What are the biggest challenges facing the team right now?"
- "How would you describe the team culture and working style?"
- "What's the growth path for someone in this role?"
- "What do you enjoy most about working here?"

---

## Phase 5: Offer Evaluation and Negotiation

Congratulations—you've received an offer. Now make sure you handle it right.

### Buying Time

Never accept on the spot. Use this script:
> "Thank you so much—I'm really excited about this opportunity. I'd like to take a few days to review the full package. When do you need a decision by?"

### Evaluating the Offer

Consider the total package, not just salary:
- Base salary
- Bonus structure
- Equity and vesting terms
- Benefits (health, retirement, perks)
- PTO and flexibility
- Title and growth trajectory
- Team and manager
- Commute or remote options

### The Negotiation Conversation

If you want to negotiate (and you should):

1. **Express enthusiasm first**: Make clear you want the role
2. **State your ask**: Be specific about what you want
3. **Justify with data**: Use market research and your value proposition
4. **Wait**: Don't fill the silence after your ask
5. **Get it in writing**: Confirm any changes in an updated offer letter

---

## Phase 6: Starting Strong

The work doesn't end when you accept. Set yourself up for success.

### Before Day One
- Complete all paperwork promptly
- Research the team and key stakeholders
- Prepare your 30-60-90 day questions
- Get necessary equipment and access

### Your First 90 Days
- Listen more than you speak
- Build relationships across the organization
- Deliver small wins early
- Document processes and ask questions
- Schedule regular check-ins with your manager

---

## Conclusion: The Mindset That Wins

Job searching is a marathon, not a sprint. The people who succeed are those who:

- **Stay consistent**: Apply a little every day rather than in exhausting bursts
- **Learn from rejections**: Each "no" is feedback to improve
- **Maintain confidence**: Your worth isn't determined by interview outcomes
- **Keep networking**: Even when it feels awkward
- **Take care of themselves**: Job searching is stressful; prioritize self-care

You've got this. The right opportunity is out there—this playbook is your guide to finding it.
    `,
  },
  {
    slug: 'interview-preparation',
    title: 'Interview Preparation: From Application to Offer',
    description: 'Master every stage of the interview process with proven strategies, frameworks, and real examples. Your complete interview preparation guide.',
    readTime: '30 min read',
    publishedAt: '2024-01-05',
    content: `
## Introduction

Interviewing is a skill, and like any skill, it can be learned and improved. This guide walks you through every stage of the interview process—from the moment you submit your application to the day you accept an offer.

The difference between candidates who get offers and those who don't often comes down to preparation. Let's make sure you're in the first group.

---

## Part 1: Before the Interview

### Understanding the Hiring Process

Modern hiring typically follows this pattern:

1. **Recruiter Screen** (15-30 min phone call)
2. **Hiring Manager Interview** (45-60 min)
3. **Technical/Skills Assessment** (varies by role)
4. **Team Interviews** (often a "loop" of 3-5 sessions)
5. **Final/Executive Interview** (30-60 min)

Understanding this helps you pace your energy and preparation.

### Research Protocol

Before any interview, research:

**The Company**
- What do they sell or do?
- Who are their customers?
- Who are their competitors?
- What's their recent news (funding, launches, challenges)?
- What's their mission and values?

**The Role**
- What are the key responsibilities?
- What skills are must-haves vs. nice-to-haves?
- Where does this role sit in the organization?
- What problems is this hire meant to solve?

**Your Interviewers**
- What's their role and background?
- How long have they been at the company?
- What do they seem to care about (based on LinkedIn activity)?
- Any mutual connections or common ground?

### Building Your Story Bank

The foundation of interview success is having stories ready. Prepare 8-10 stories that cover:

**Core Competencies:**
- Taking initiative/leadership
- Solving complex problems
- Collaborating with difficult people
- Failing and recovering
- Exceeding expectations
- Making decisions with incomplete information

**Story Structure (STAR+)**
- **Situation**: Set the scene briefly
- **Task**: What was your responsibility?
- **Action**: What specifically did YOU do? (This should be 60% of your answer)
- **Result**: What was the outcome? Quantify when possible
- **Reflection**: What did you learn? (The "plus")

**Example Story:**
> "In my last role, we discovered that customer churn had spiked 15% over two quarters. As the product manager for our onboarding flow, I was responsible for figuring out why and fixing it.

> I started by segmenting the data and discovered that customers who didn't complete onboarding in their first week had 3x higher churn. I then conducted 20 user interviews to understand the friction points.

> Based on the insights, I redesigned the first-week experience to include proactive check-ins and simplified the setup process from 12 steps to 5. I worked with engineering to prioritize this over other roadmap items—which required some difficult conversations with stakeholders who wanted different features.

> Over the next quarter, first-week completion rates increased from 45% to 78%, and churn dropped back to historical levels—saving an estimated $2M in annual revenue.

> The biggest lesson was the importance of moving quickly on churn signals rather than waiting for trends to become obvious."

---

## Part 2: The Phone Screen

### What Recruiters Are Evaluating

- Do you meet the basic requirements?
- Can you communicate clearly?
- Are you genuinely interested in the role?
- What are your salary expectations?
- Are there any logistical issues (visa, location, timeline)?

### Common Phone Screen Questions

**"Tell me about yourself."**
Give a 2-minute professional summary:
- Where you are now (current role, company)
- How you got here (relevant background)
- Why you're interested in this opportunity

**"Why are you interested in this role/company?"**
Be specific. Reference something real about the company that genuinely interests you.

**"What are your salary expectations?"**
If possible, deflect:
> "I'm flexible and more focused on finding the right role. What range do you have budgeted for this position?"

If pushed, give a researched range:
> "Based on my research and experience, I'm looking for something in the range of $X to $Y, depending on the full package."

**"What's your timeline?"**
Be honest but show flexibility:
> "I'm actively interviewing and hoping to make a decision within the next few weeks, but I'm flexible for the right opportunity."

### How to End Strong

Always ask at least one question:
- "What are the next steps in the process?"
- "Is there anything about my background you'd like me to clarify?"
- "What does the team structure look like for this role?"

Send a brief thank-you email within 24 hours.

---

## Part 3: Behavioral Interviews

### The Art of Storytelling

Behavioral interviews assess past behavior to predict future performance. The key phrase you'll hear: **"Tell me about a time when..."**

**The Golden Rule**: Be specific. Vague answers like "I'm usually good at..." don't work. They want real examples with real details.

### Top 15 Behavioral Questions (with Frameworks)

**1. "Tell me about a time you had to persuade someone."**
Show influence without authority. Emphasize understanding their perspective first.

**2. "Describe a situation where you failed."**
Choose a real failure, own it, and focus 70% on what you learned and changed.

**3. "Tell me about a time you had to make a decision with incomplete information."**
Demonstrate your decision-making framework and comfort with ambiguity.

**4. "Describe a conflict with a coworker."**
Never badmouth anyone. Focus on seeking to understand and finding resolution.

**5. "Tell me about a time you went above and beyond."**
Show initiative but don't humble-brag. Be factual about the extra effort and its impact.

**6. "Describe a project you're most proud of."**
Pick something relevant to the role. Emphasize your specific contribution.

**7. "Tell me about a time you received critical feedback."**
Show growth mindset. Explain how you integrated the feedback.

**8. "Describe a situation where you had to adapt to change."**
Demonstrate flexibility and positive attitude toward ambiguity.

**9. "Tell me about a time you had to prioritize competing demands."**
Show your prioritization framework and how you communicated trade-offs.

**10. "Describe a time you demonstrated leadership."**
Leadership isn't about title. Show influence, initiative, and helping others succeed.

**11. "Tell me about a time you had to learn something quickly."**
Demonstrate your learning process and resourcefulness.

**12. "Describe a situation where you disagreed with your manager."**
Show you can disagree professionally while ultimately being a team player.

**13. "Tell me about your biggest professional achievement."**
Pick something relevant and impressive. Have numbers ready.

**14. "Describe a time you had to work with a difficult personality."**
Show empathy and professionalism. Don't villainize the other person.

**15. "Tell me about a time you improved a process."**
Show initiative and quantify the improvement.

---

## Part 4: Technical and Skills Assessments

### Types of Assessments

**Case Studies/Presentations**
- Common for strategy, consulting, and product roles
- You're given a problem and must present your analysis

**Coding Challenges**
- Common for engineering roles
- May be live (pair programming) or take-home

**Portfolio Reviews**
- Common for design and creative roles
- Walk through your best work and process

**Work Simulations**
- Perform tasks similar to the actual job
- May include writing samples, analysis exercises, etc.

### General Preparation Tips

1. **Ask about the format in advance**: "Can you tell me what to expect so I can prepare appropriately?"
2. **Practice under realistic conditions**: Time yourself, simulate the environment
3. **Prepare your setup**: Technical issues derail assessments
4. **Think out loud**: They want to see your process, not just the answer
5. **Ask clarifying questions**: It's a sign of good thinking

### Case Study Framework

For any case or business problem:

1. **Clarify the problem**: Ask questions to understand what you're solving
2. **Structure your approach**: Create a framework before diving in
3. **Analyze systematically**: Work through your framework with data
4. **Synthesize**: Bring it together with a clear recommendation
5. **Consider trade-offs**: Acknowledge limitations and alternatives

---

## Part 5: The Final Round

### What to Expect

Final rounds typically involve:
- Meeting senior leadership
- Multiple back-to-back sessions
- Deeper cultural fit assessment
- Opportunity for your questions

### How to Prepare

**Energy Management**: These are marathons. Eat well, sleep well, and bring water.

**Consistency**: Your story should be consistent across interviewers. They will compare notes.

**Senior-Level Thinking**: With executives, show strategic thinking and business acumen. Don't get lost in tactical details.

**Relationship Building**: This is where likability matters most. Be genuine and personable.

### Closing Strong

In your final interview, be ready for:

**"Do you have any questions for me?"**
Ask something that shows you've thought deeply about the role and company.

**"Why should we hire you?"**
This is your closing pitch. Summarize:
- Your understanding of what they need
- Your relevant experience and achievements
- Something unique you bring
- Your enthusiasm for the role

**"Do you have any concerns about my candidacy?"**
If appropriate, ask this. It gives you a chance to address objections.

---

## Part 6: After the Interview

### The Thank-You Note

Send a personalized email to each interviewer within 24 hours.

**Include:**
- Gratitude for their time
- Something specific you discussed
- Brief reinforcement of your interest
- Something valuable (an article, idea, or resource related to your conversation)

### Following Up

If you haven't heard back by the stated timeline, follow up:

> "Hi [Name], I wanted to check in on the status of the [Role] position. I remain very interested in the opportunity and am happy to provide any additional information that would be helpful. Looking forward to hearing from you."

### Handling Rejection

If you don't get the offer:

1. **Ask for feedback** (some will give it, some won't)
2. **Stay professional**: You never know when paths will cross again
3. **Reflect honestly**: What could you improve?
4. **Keep going**: Every interview is practice for the next

---

## Conclusion: The Meta-Skill

Beyond specific tactics, there's a meta-skill that separates great interviewers from good ones: **authentic confidence**.

This comes from:
- Genuine preparation (you've done the work)
- Self-knowledge (you know your stories and strengths)
- Perspective (this isn't life or death—it's a conversation)
- Practice (each interview makes you better)

You're not begging for a job. You're exploring whether this is a mutual fit. That mindset changes everything.

Now go prepare, practice, and land that offer.
    `,
  },
];

export const glossaryTerms: GlossaryTerm[] = [
  {
    slug: 'ats',
    term: 'ATS (Applicant Tracking System)',
    shortDefinition: 'Software used by companies to manage job applications and filter candidates.',
    fullDefinition: `
An **Applicant Tracking System (ATS)** is software that companies use to collect, sort, scan, and rank job applications. Over 98% of Fortune 500 companies use an ATS, and the technology has become standard even at smaller organizations.

## How ATS Works

When you submit a resume, the ATS:

1. **Parses your resume** - Extracts text and categorizes it into fields (name, contact info, education, experience, skills)
2. **Stores your data** - Creates a searchable candidate profile
3. **Scans for keywords** - Compares your resume against the job description
4. **Ranks candidates** - Assigns a score based on keyword matches and qualifications
5. **Filters applications** - Surfaces top candidates for human review

## Why ATS Matters for Job Seekers

The hard truth: **most resumes are rejected by ATS before a human ever sees them**. Understanding how these systems work is essential for getting your application seen.

## Popular ATS Platforms

- Workday
- Greenhouse
- Lever
- Taleo (Oracle)
- iCIMS
- Jobvite
- BrassRing

## Tips for Beating ATS

- Use standard formatting (no tables, graphics, or headers/footers)
- Include keywords from the job description naturally
- Submit as .docx unless PDF is specifically requested
- Use standard section headings
- Avoid abbreviations without also including the full term

Understanding ATS is the first step to ensuring your application reaches human eyes.
    `,
    relatedTerms: ['resume', 'keywords', 'job-description'],
  },
  {
    slug: 'cover-letter',
    term: 'Cover Letter',
    shortDefinition: 'A document accompanying your resume that explains why you\'re a great fit for a specific role.',
    fullDefinition: `
A **cover letter** is a one-page document that accompanies your resume and makes the case for why you're the right candidate for a specific job. While resumes list your qualifications, cover letters tell your story and demonstrate genuine interest.

## When Cover Letters Matter

While some hiring managers never read them, cover letters can be impactful when:

- The job posting specifically requests one
- You're making a career change and need to explain your transition
- You have a personal connection to the company or role
- You're applying to smaller companies where every detail is reviewed

## Cover Letter Structure

**Paragraph 1: The Hook**
Open with something specific about why you're excited about this role at this company. Show you've done your research.

**Paragraph 2: Your Fit**
Connect your most relevant experience to the key requirements. Use 1-2 specific examples with results.

**Paragraph 3: Why This Company**
Explain what attracts you to their mission, culture, or product. Be genuine.

**Paragraph 4: The Close**
Express enthusiasm and suggest next steps.

## Common Cover Letter Mistakes

- Generic templates that could apply to any company
- Repeating your resume word-for-word
- Focusing on what you want rather than what you offer
- Making it too long (keep it to one page)
- Typos and wrong company names

## The Modern Reality

Many applications don't require cover letters, and studies show mixed results on their impact. However, when done well, a strong cover letter can differentiate you from equally qualified candidates.

A good rule: always have a cover letter template you can customize in 15 minutes for opportunities where it could make a difference.
    `,
    relatedTerms: ['resume', 'job-application', 'hiring-manager'],
  },
  {
    slug: 'behavioral-interview',
    term: 'Behavioral Interview',
    shortDefinition: 'An interview style focused on past experiences to predict future performance.',
    fullDefinition: `
A **behavioral interview** is an interview technique where candidates are asked to describe how they handled specific situations in the past. The underlying principle: past behavior is the best predictor of future behavior.

## Recognizing Behavioral Questions

Behavioral questions typically start with phrases like:
- "Tell me about a time when..."
- "Describe a situation where..."
- "Give me an example of..."
- "Walk me through how you handled..."

## Why Companies Use Behavioral Interviews

Traditional interviews often test how well someone *says* they would handle situations. Behavioral interviews test what someone *actually did*. This approach:

- Reduces candidates' ability to give rehearsed ideal answers
- Reveals patterns of behavior across different situations
- Provides concrete evidence of competencies
- Gives insight into decision-making processes

## The STAR Method

The gold standard for answering behavioral questions:

**Situation**: Set the context briefly
**Task**: Explain your responsibility
**Action**: Describe what YOU specifically did (this should be 60% of your answer)
**Result**: Share the outcome, ideally with metrics

## Common Behavioral Interview Topics

- Leadership and taking initiative
- Problem-solving and analytical thinking
- Teamwork and collaboration
- Handling conflict and difficult people
- Adapting to change
- Failure and learning from mistakes
- Working under pressure
- Communication and influence

## Preparation Strategy

Build a "story bank" of 8-10 stories that demonstrate different competencies. Practice telling them concisely (2-3 minutes each) using the STAR format. The same stories can often be adapted to answer different questions.

Behavioral interviews reward preparation. Candidates who have reflected on their experiences and can articulate them clearly significantly outperform those who try to think of examples on the spot.
    `,
    relatedTerms: ['star-method', 'interview', 'competencies'],
  },
  {
    slug: 'star-method',
    term: 'STAR Method',
    shortDefinition: 'A framework for answering behavioral interview questions: Situation, Task, Action, Result.',
    fullDefinition: `
The **STAR Method** is a structured technique for answering behavioral interview questions. It ensures your answers are organized, complete, and focused on demonstrating your competencies.

## STAR Breakdown

**S - Situation**
Briefly set the context. Where were you working? What was happening? Keep this to 1-2 sentences.

Example: "In my role as a product manager at a fintech startup, we discovered that our mobile app had a 2-star rating due to poor user experience."

**T - Task**
Explain your specific responsibility or goal. What were you trying to achieve?

Example: "I was tasked with leading a redesign initiative to improve the app rating to 4 stars within six months."

**A - Action**
This is the core of your answer (60% of total time). Describe the specific steps YOU took. Use "I" not "we."

Example: "I first analyzed all user reviews and categorized complaints by theme. Then I conducted 15 user interviews to understand pain points. Based on insights, I prioritized three key improvements: simplified navigation, faster load times, and a redesigned checkout flow. I worked with engineering to create a phased roadmap and led weekly standups to track progress."

**R - Result**
Share the outcome with specific metrics when possible. What happened because of your actions?

Example: "Within four months, we launched the redesign. Our app rating improved from 2.1 to 4.2 stars, and daily active users increased by 35%. The project was presented at our all-hands as a company success story."

## STAR+ Variation

Some experts recommend adding a reflection:

**+ Learning**: "This experience taught me the importance of going directly to users rather than relying solely on data. I now make user research a non-negotiable part of every product decision."

## Common STAR Mistakes

- **Situation too long**: Spending 2 minutes on context instead of 30 seconds
- **Using "we" instead of "I"**: Interviewers want to know YOUR contribution
- **Vague results**: "It went well" vs. "We increased revenue by 25%"
- **Action too brief**: Rushing through the most important part

## Practice Tips

1. Write out your STAR stories fully, then practice condensing them
2. Aim for 2-3 minute responses
3. Prepare stories that can flex to answer multiple questions
4. Practice saying them out loud—writing and speaking are different

The STAR method takes practice, but it's the difference between rambling answers and memorable ones.
    `,
    relatedTerms: ['behavioral-interview', 'interview', 'competencies'],
  },
  {
    slug: 'networking',
    term: 'Networking',
    shortDefinition: 'Building professional relationships that can lead to job opportunities and career growth.',
    fullDefinition: `
**Networking** is the process of building and maintaining professional relationships that can benefit your career. In the job search context, networking is often the most effective way to find opportunities—studies consistently show that 70-80% of jobs are filled through connections.

## Why Networking Works

- Referrals get higher response rates than cold applications
- Many roles are filled before they're ever publicly posted
- Personal recommendations carry weight with hiring managers
- Networking provides insider information about companies and roles

## Types of Professional Networking

**Warm Networking**
Connecting with people you already know: former colleagues, classmates, friends, family connections.

**Cold Networking**
Reaching out to people you don't know but would like to connect with: industry leaders, employees at target companies, professionals in roles you aspire to.

**Event Networking**
Building connections at conferences, meetups, industry events, and professional gatherings.

**Online Networking**
Engaging on LinkedIn, joining professional communities, participating in relevant online discussions.

## Effective Networking Practices

**Be Genuine**
People can sense when you're only reaching out because you need something. Build relationships before you need them.

**Give Before You Ask**
Look for ways to provide value: share relevant articles, make introductions, offer help. This creates reciprocity.

**Be Specific**
Vague requests like "I'd love to pick your brain" are less effective than "I'm researching roles in product management at SaaS companies and would love 20 minutes to learn about your experience at [Company]."

**Follow Up**
After any networking interaction, send a thank-you and stay in touch periodically. A quick check-in every few months keeps relationships warm.

**Make It Easy**
When asking for help, do the work. Provide context, be specific about what you're asking, and suggest concrete next steps.

## Networking for Introverts

Networking doesn't require being extroverted. Effective strategies for introverts include:
- One-on-one coffee chats instead of large events
- Written communication through LinkedIn messages and emails
- Joining smaller, specialized professional groups
- Focusing on depth of relationships rather than breadth

## The Long Game

The best networking isn't transactional—it's about building genuine relationships over time. The connections you nurture today will pay dividends throughout your career, not just in your current job search.

Start building your network before you need it.
    `,
    relatedTerms: ['referral', 'linkedin', 'informational-interview'],
  },
];

export const faqItems: FAQItem[] = [
  {
    question: 'How long should my resume be?',
    answer: 'For most professionals, a one-page resume is ideal if you have less than 10 years of experience. With more experience, two pages is acceptable. The key is relevance—include only information that supports your candidacy for the specific role you\'re targeting. Hiring managers spend an average of 6-7 seconds on initial resume review, so conciseness matters.',
  },
  {
    question: 'Should I include a cover letter if it\'s optional?',
    answer: 'If a cover letter is optional, include one when: (1) you have a compelling story that your resume doesn\'t tell, (2) you\'re making a career change and need to explain your transition, (3) you have a personal connection to the company, or (4) the role is at a smaller company where applications get more individual attention. A strong cover letter can differentiate you; a generic one adds nothing.',
  },
  {
    question: 'How do I negotiate salary if they ask for my current compensation?',
    answer: 'Many locations have banned salary history questions, but if asked, you can deflect: "I\'d prefer to focus on the value I can bring to this role. Based on my research, positions like this typically pay $X-$Y. Is that within your range?" If pressed, focus on your target salary rather than current compensation: "I\'m targeting $X based on my skills and market research."',
  },
  {
    question: 'How many jobs should I apply to per day/week?',
    answer: 'Quality beats quantity. Aim for 5-10 thoughtful applications per week rather than 50 quick ones. Each application should include a tailored resume and, when appropriate, a customized cover letter. Track your applications carefully—you\'ll have better results and can actually prepare well for interviews when they come.',
  },
  {
    question: 'What should I do after an interview with no response?',
    answer: 'Send a thank-you email within 24 hours of your interview. If you don\'t hear back by the timeline they mentioned, wait 2-3 business days past that date, then send a polite follow-up. If another week passes with no response, one more follow-up is appropriate. After that, assume the answer is no and focus on other opportunities.',
  },
  {
    question: 'How do I explain gaps in my employment history?',
    answer: 'Be honest and confident. Whether you took time for caregiving, health, education, or couldn\'t find the right opportunity, explain it briefly and pivot to what you learned or did during that time. "I took a year to care for a family member. During that time, I also completed two certifications in [relevant skill] to stay current in my field."',
  },
  {
    question: 'Is it okay to apply to multiple positions at the same company?',
    answer: 'Yes, but be strategic. Apply to 2-3 roles maximum where you\'re genuinely qualified. If you apply to everything, you signal desperation and confusion about your career direction. When possible, reach out to a recruiter or hiring manager to express interest and ask which role they think is the best fit for your background.',
  },
  {
    question: 'How important is LinkedIn for job searching?',
    answer: 'Very important. 87% of recruiters use LinkedIn to find candidates. At minimum, keep your profile updated, use a professional photo, and craft a keyword-rich headline. Actively engaging—posting, commenting, and connecting—can significantly increase your visibility to recruiters and hiring managers.',
  },
  {
    question: 'Should I reach out to the hiring manager directly?',
    answer: 'It can help, but do it thoughtfully. A brief, professional message expressing genuine interest can put you on their radar. Don\'t be pushy or send long messages. Something like: "I recently applied for [Role] and wanted to share my enthusiasm for [specific thing about the company/role]. I\'d welcome the chance to discuss how my experience with [relevant skill] could contribute to your team."',
  },
  {
    question: 'How soon is too soon to follow up after applying?',
    answer: 'Wait at least one week after applying before following up, as it takes time for applications to be reviewed. For follow-ups after interviews, send a thank-you within 24 hours. For next-steps follow-ups, wait until 2-3 days after the timeline they mentioned. If no timeline was given, wait about a week after your last interaction.',
  },
];

// Helper function to check if content is published
function isPublished(publishedAt: string): boolean {
  const publishDate = new Date(publishedAt);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return publishDate <= today;
}

// Get only published articles (filters out future-dated content)
export function getPublishedArticles() {
  return articles.filter(article => isPublished(article.publishedAt));
}

// Get only published guides
export function getPublishedGuides() {
  return guides.filter(guide => isPublished(guide.publishedAt));
}

// Get article by slug (only if published)
export function getArticleBySlug(slug: string) {
  const article = articles.find(a => a.slug === slug);
  if (article && isPublished(article.publishedAt)) {
    return article;
  }
  return null;
}

// Get guide by slug (only if published)
export function getGuideBySlug(slug: string) {
  const guide = guides.find(g => g.slug === slug);
  if (guide && isPublished(guide.publishedAt)) {
    return guide;
  }
  return null;
}
