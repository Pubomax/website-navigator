// This is a mock database implementation for development purposes
// It returns sample data instead of connecting to a real database

export const mockStorage = {
  // Blog Categories
  getBlogCategories: async () => [],
  getBlogCategoryById: async () => undefined,
  getBlogCategoryBySlug: async () => undefined,
  createBlogCategory: async () => ({}),

  // Blog Posts
  getBlogPosts: async () => [],
  getBlogPostById: async () => undefined,
  getBlogPostsByCategory: async () => [],
  createBlogPost: async () => ({}),

  // Case Studies
  getCaseStudies: async () => [],
  getCaseStudyById: async () => undefined,
  createCaseStudy: async () => ({}),

  // Contact Messages
  createContactMessage: async (message: any) => message,

  // Newsletter Subscriptions
  getNewsletterSubscription: async () => undefined,
  createNewsletterSubscription: async (subscription: any) => subscription,
  updateNewsletterSubscriptionStatus: async () => ({}),

  // Admin User Methods
  getAdminUserByUsername: async () => undefined,
  getAdminUserByEmail: async () => undefined,
  createAdminUser: async () => ({}),
  updateAdminUserLastLogin: async () => ({}),
};