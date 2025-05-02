# Automating Blog Posts with n8n for Minecore Group

## Overview

This document provides a step-by-step guide for automating blog post creation, optimization, and publishing on the Minecore Group website using n8n. This automation workflow helps maintain a consistent content schedule while minimizing manual work, aligning with our "Work Less, Make More Money" philosophy.

## Prerequisites

1. **n8n Instance**: Access to your n8n installation (self-hosted or cloud-based)
2. **API Access**: Administrator credentials for the Minecore Group admin dashboard
3. **OpenAI API Key**: For content generation and enhancement (configured in your n8n instance)
4. **Minecore Blog API Endpoints**: `/api/blog` and `/api/blog-categories` endpoints

## Authentication Setup

Before creating workflows, you need to set up authentication for accessing the Minecore Group API:

1. In n8n, navigate to **Credentials** > **New Credentials** > **HTTP Request Authentication**
2. Name it "Minecore Admin Auth"
3. Authentication Type: "Basic Auth"
4. Username: Your admin username
5. Password: Your admin password
6. Save credentials

## Workflow 1: Scheduled Blog Post Generation

This workflow automatically generates blog posts on a predefined schedule using AI-powered content creation.

### Step 1: Trigger - Schedule

1. Add a **Schedule Trigger** node
2. Configure schedule settings:
   * Mode: "Basic"
   * Interval: Weekly (or your preferred posting frequency)
   * Day: Monday (or your preferred posting day)
   * Time: 06:00 (posts will be created early, allowing for review before publishing)

### Step 2: HTTP Request - Get Categories

1. Add an **HTTP Request** node
2. Connect it to the Schedule Trigger
3. Configure:
   * Authentication: Select "Minecore Admin Auth"
   * Request Method: GET
   * URL: `https://minecoregroup.com/api/blog-categories`
   * Response Format: "JSON"

### Step 3: Function - Select Random Category

1. Add a **Function** node
2. Connect it to the HTTP Request node
3. Use this code:

```javascript
const categories = $input.all()[0].json;
// Select a random category from the available ones
const randomIndex = Math.floor(Math.random() * categories.length);
const selectedCategory = categories[randomIndex];

// Generate topic ideas based on category
let topicKeywords = [];
switch(selectedCategory.slug) {
  case "ai-automation":
    topicKeywords = ["AI sales automation", "small business automation tools", "reducing admin work", "automation ROI", "Montreal AI solutions"];
    break;
  case "sales-strategy":
    topicKeywords = ["sales efficiency", "lead qualification", "sales follow-up automation", "sales productivity", "Montreal sales strategies"];
    break;
  case "marketing-tips":
    topicKeywords = ["small business marketing", "automated lead generation", "content marketing automation", "social media scheduling", "Montreal marketing tips"];
    break;
  default:
    topicKeywords = ["business efficiency", "work less make more", "small business productivity", "automation benefits", "Montreal business growth"];
}

// Select random topic keyword
const randomTopic = topicKeywords[Math.floor(Math.random() * topicKeywords.length)];

return {
  category: selectedCategory,
  topicKeyword: randomTopic,
  language: "en" // Default to English - can be expanded to support French as well
};
```

### Step 4: OpenAI - Generate Blog Post

1. Add an **OpenAI** node
2. Connect it to the Function node
3. Configure:
   * Operation: "Chat Completion"
   * Model: "gpt-4o" (newest OpenAI model as of May 2024)
   * Messages: Formula mode with:

```json
[
  {
    "role": "system",
    "content": "You are a business automation expert specializing in AI solutions for small businesses in Montreal. Your writing style is informative, practical, and accessible to non-technical business owners. Focus on the benefits of automation: saving time, generating more leads, and increasing revenue while reducing stress and workload."
  },
  {
    "role": "user",
    "content": "Create a comprehensive blog post about {{$node[\"Function\"].json[\"topicKeyword\"]}} for small business owners in Montreal. The post should be 800-1000 words, include an engaging title, 4-5 subheadings, practical advice, and a clear call-to-action to learn more about Minecore Group services. The post should emphasize our core value of 'Make More Money, Work Less' and how automation achieves this goal. Include one question in each section that businesses should ask themselves. Format the response in Markdown."
  }
]
```

### Step 5: Function - Format Content for API

1. Add a **Function** node
2. Connect it to the OpenAI node
3. Use this code:

```javascript
const blogContent = $input.all()[0].json.choices[0].message.content;

// Extract title from markdown (first line, remove # and trim)
const titleMatch = blogContent.match(/^#\s+(.*)/);
const title = titleMatch ? titleMatch[1] : "New Blog Post";

// Generate URL-friendly slug
const slug = title
  .toLowerCase()
  .replace(/[^\w\s]/gi, '')
  .replace(/\s+/g, '-');

// Current date for publication
const now = new Date();
const formattedDate = now.toISOString();

return {
  title: title,
  slug: slug,
  content: blogContent,
  excerpt: blogContent.split('\n\n')[1].substring(0, 150) + "...",
  featuredImage: "https://minecoregroup.com/images/blog/automation-benefits.jpg",
  categoryId: $input.all()[1].json.category.id,
  status: "draft", // Set as draft for review before publishing
  publishedAt: formattedDate,
  author: "Minecore Team",
  language: $input.all()[1].json.language
};
```

### Step 6: HTTP Request - Create Blog Post

1. Add an **HTTP Request** node
2. Connect it to the Function (Format Content) node
3. Configure:
   * Authentication: Select "Minecore Admin Auth"
   * Request Method: POST
   * URL: `https://minecoregroup.com/api/blog`
   * Body Content Type: "JSON"
   * Request Body: "Expression" with value `{{$json}}`

### Step 7: Send Email - Notification

1. Add a **Send Email** node
2. Connect it to the HTTP Request node
3. Configure:
   * From Email: `noreply@minecoregroup.com`
   * To Email: Your content manager's email
   * Subject: "New Blog Post Draft: {{$node["Function"].json.title}}"
   * Email Format: "HTML"
   * Email Body: 
   ```html
   <p>A new blog post draft has been created:</p>
   <p><strong>Title:</strong> {{$node["Function"].json.title}}</p>
   <p><strong>Category:</strong> {{$node["Function1"].json.category.name}}</p>
   <p>Please review and publish the draft at:</p>
   <p><a href="https://minecoregroup.com/admin/blog">Admin Dashboard</a></p>
   ```

## Workflow 2: Automated Content Enhancement

This workflow helps improve existing blog posts by adding relevant keywords, fixing grammar issues, and optimizing for SEO.

### Step 1: Webhook Trigger

1. Add a **Webhook** node
2. Configure:
   * Authentication: "Basic Auth" with your admin credentials
   * HTTP Method: POST
   * Path: `/enhance-blog`
   * Response Mode: "Last Node"

### Step 2: HTTP Request - Get Blog Post

1. Add an **HTTP Request** node
2. Connect it to the Webhook
3. Configure:
   * Authentication: Select "Minecore Admin Auth"
   * Request Method: GET
   * URL: `https://minecoregroup.com/api/blog/{{$json.body.postId}}`
   * Response Format: "JSON"

### Step 3: OpenAI - Enhance Content

1. Add an **OpenAI** node
2. Connect it to the HTTP Request node
3. Configure:
   * Operation: "Chat Completion"
   * Model: "gpt-4o"
   * Messages: Formula mode with:

```json
[
  {
    "role": "system",
    "content": "You are an SEO and content optimization expert for a business automation company focused on helping Montreal small businesses make more money while working less. Your task is to enhance blog content to improve readability, add relevant keywords, fix grammar issues, and ensure the content aligns with search intent while maintaining the original message and structure."
  },
  {
    "role": "user",
    "content": "Enhance the following blog post for SEO and readability without changing its core message or structure. Target keywords: 'Montreal small business automation', 'save time with AI', 'increase revenue with automation', and 'reduce work hours'.\n\n{{$node[\"HTTP Request\"].json[\"content\"]}}"
  }
]
```

### Step 4: Function - Prepare Updated Content

1. Add a **Function** node
2. Connect it to the OpenAI node
3. Use this code:

```javascript
const enhancedContent = $input.all()[0].json.choices[0].message.content;
const originalPost = $input.all()[1].json;

return {
  id: originalPost.id,
  title: originalPost.title,
  slug: originalPost.slug,
  content: enhancedContent,
  excerpt: originalPost.excerpt,
  featuredImage: originalPost.featuredImage,
  categoryId: originalPost.categoryId,
  status: originalPost.status,
  publishedAt: originalPost.publishedAt,
  author: originalPost.author,
  language: originalPost.language,
  lastUpdated: new Date().toISOString()
};
```

### Step 5: HTTP Request - Update Blog Post

1. Add an **HTTP Request** node
2. Connect it to the Function node
3. Configure:
   * Authentication: Select "Minecore Admin Auth"
   * Request Method: PUT
   * URL: `https://minecoregroup.com/api/blog/{{$json.id}}`
   * Body Content Type: "JSON"
   * Request Body: "Expression" with value `{{$json}}`

## Workflow 3: Bi-directional Content Translation (English ↔ French)

This workflow automatically translates blog posts between English and French, ensuring bilingual content availability.

### Step 1: Webhook Trigger

1. Add a **Webhook** node
2. Configure:
   * Authentication: "Basic Auth" with your admin credentials
   * HTTP Method: POST
   * Path: `/translate-blog`
   * Response Mode: "Last Node"

### Step 2: HTTP Request - Get Blog Post

1. Add an **HTTP Request** node
2. Connect it to the Webhook
3. Configure:
   * Authentication: Select "Minecore Admin Auth"
   * Request Method: GET
   * URL: `https://minecoregroup.com/api/blog/{{$json.body.postId}}`
   * Response Format: "JSON"

### Step 3: Function - Detect Language and Prepare Translation Request

1. Add a **Function** node
2. Connect it to the HTTP Request node
3. Use this code:

```javascript
const blogPost = $input.all()[0].json;

// Determine source and target languages
const sourceLanguage = blogPost.language === "fr" ? "French" : "English";
const targetLanguage = blogPost.language === "fr" ? "English" : "French";
const targetLangCode = blogPost.language === "fr" ? "en" : "fr";

// Prepare the slug for the translated version
let translatedSlug = blogPost.slug;
if (targetLangCode === "fr" && !translatedSlug.startsWith("fr-")) {
  translatedSlug = "fr-" + translatedSlug;
} else if (targetLangCode === "en" && translatedSlug.startsWith("fr-")) {
  translatedSlug = translatedSlug.substring(3);
}

return {
  original: blogPost,
  sourceLanguage,
  targetLanguage,
  targetLangCode,
  translatedSlug
};
```

### Step 4: OpenAI - Translate Content

1. Add an **OpenAI** node
2. Connect it to the Function node
3. Configure:
   * Operation: "Chat Completion"
   * Model: "gpt-4o"
   * Messages: Formula mode with:

```json
[
  {
    "role": "system",
    "content": "You are a professional translator specializing in business and technology content between English and French. You are translating for a Montreal-based company that helps small businesses automate their operations to make more money while working less. Ensure translations are culturally appropriate for Quebec businesses."
  },
  {
    "role": "user",
    "content": "Translate the following blog post from {{$node[\"Function\"].json[\"sourceLanguage\"]}} to {{$node[\"Function\"].json[\"targetLanguage\"]}}. Maintain the Markdown formatting, but translate all text content including the title, headings, and body. Ensure the translation sounds natural and maintains the professional tone of the original.\n\n{{$node[\"Function\"].json[\"original\"].content}}"
  }
]
```

### Step 5: Function - Create Translated Post Object

1. Add a **Function** node
2. Connect it to the OpenAI node
3. Use this code:

```javascript
const translatedContent = $input.all()[0].json.choices[0].message.content;
const original = $input.all()[1].json.original;

// Extract title from markdown (first line, remove # and trim)
const titleMatch = translatedContent.match(/^#\s+(.*)/);
const translatedTitle = titleMatch ? titleMatch[1] : original.title;

// Prepare excerpt
const paragraphs = translatedContent.split('\n\n');
const translatedExcerpt = paragraphs.length > 1 ? 
  paragraphs[1].substring(0, 150) + "..." : 
  original.excerpt;

return {
  title: translatedTitle,
  slug: $input.all()[1].json.translatedSlug,
  content: translatedContent,
  excerpt: translatedExcerpt,
  featuredImage: original.featuredImage,
  categoryId: original.categoryId,
  status: original.status,
  publishedAt: original.publishedAt,
  author: original.author,
  language: $input.all()[1].json.targetLangCode,
  originalPostId: original.id
};
```

### Step 6: HTTP Request - Create Translated Post

1. Add an **HTTP Request** node
2. Connect it to the Function node
3. Configure:
   * Authentication: Select "Minecore Admin Auth"
   * Request Method: POST
   * URL: `https://minecoregroup.com/api/blog`
   * Body Content Type: "JSON"
   * Request Body: "Expression" with value `{{$json}}`

## Implementation Notes

1. **API Endpoints**: The workflows assume the following REST API endpoints are available:
   * `GET /api/blog-categories` - Lists all blog categories
   * `GET /api/blog/:id` - Gets a specific blog post
   * `POST /api/blog` - Creates a new blog post
   * `PUT /api/blog/:id` - Updates an existing blog post

2. **Authentication**: All requests to the Minecore API must be authenticated using admin credentials.

3. **CORS Configuration**: Ensure the Minecore Group API allows requests from the n8n instance by configuring CORS appropriately in the server's routes.ts file.

4. **Error Handling**: Add Error Handling nodes after each HTTP Request to manage potential API issues.

5. **Monitoring**: Set up email notifications for workflow failures to ensure immediate attention to any issues.

## Security Best Practices

1. Use environment variables in n8n for storing sensitive information (API keys, credentials).
2. Implement IP restrictions on your n8n webhook endpoints.
3. Regularly rotate API credentials.
4. Use HTTPS for all connections between n8n and your website.
5. Implement rate limiting on your API endpoints to prevent abuse.

## Maintenance and Monitoring

1. **Regular Testing**: Test the workflows monthly by triggering them manually.
2. **Logs Review**: Check n8n execution logs weekly for any failures or warnings.
3. **Content Review**: Always have a human review automatically generated or translated content before final publication.
4. **Performance Monitoring**: Monitor response times for API calls and adjust timeout settings as needed.

## Conclusion

This automation system will significantly reduce the time required to maintain a consistent blog publishing schedule in both English and French, aligning with Minecore Group's mission to help businesses "Make More Money, Work Less" through intelligent automation.

For questions or assistance with implementing these workflows, please contact the technical team at support@minecoregroup.com.