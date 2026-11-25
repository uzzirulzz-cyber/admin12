export class NextConfig {
  public static config = {
    layout: 'vertical', // vertical, horizontal
    subLayout: '', // horizontal-2
    collapseMenu: false,
    layoutType: 'menu-dark', // menu-dark, menu-light, dark
    headerBackColor: 'header-blue', // header-default, header-blue, header-red, header-purple, header-info, header-dark
    navBrandColor: 'brand-default', // brand-default, brand-blue, brand-red, brand-purple, brand-info, brand-dark
    rtlLayout: false,
    navFixedLayout: true,
    headerFixedLayout: true,
    boxLayout: false,
  };

  // AdSense Configuration for 5 PlayBeat domains
  public static adsenseConfig = {
    publisherId: 'ca-pub-1234567890123456',
    domains: [
      {
        id: 'playbeat.digital',
        domain: 'playbeat.digital',
        status: 'active',
        clientId: 'ca-pub-1234567890123456',
        slotId: '1234567890',
        adFormat: 'auto',
        pageUrl: 'https://playbeat.digital',
        verified: true,
        dateAdded: new Date('2024-01-15')
      },
      {
        id: 'playbeatdigital.world',
        domain: 'playbeatdigital.world',
        status: 'active',
        clientId: 'ca-pub-1234567890123456',
        slotId: '1234567891',
        adFormat: 'auto',
        pageUrl: 'https://playbeatdigital.world',
        verified: true,
        dateAdded: new Date('2024-02-20')
      },
      {
        id: 'playbeatarena.asia',
        domain: 'playbeatarena.asia',
        status: 'active',
        clientId: 'ca-pub-1234567890123456',
        slotId: '1234567892',
        adFormat: 'auto',
        pageUrl: 'https://playbeatarena.asia',
        verified: true,
        dateAdded: new Date('2024-03-10')
      },
      {
        id: 'playbeat.live',
        domain: 'playbeat.live',
        status: 'active',
        clientId: 'ca-pub-1234567890123456',
        slotId: '1234567893',
        adFormat: 'auto',
        pageUrl: 'https://playbeat.live',
        verified: true,
        dateAdded: new Date('2024-04-05')
      },
      {
        id: 'playbeattv.buzz',
        domain: 'playbeattv.buzz',
        status: 'pending',
        clientId: 'ca-pub-1234567890123456',
        slotId: '1234567894',
        adFormat: 'auto',
        pageUrl: 'https://playbeattv.buzz',
        verified: false,
        dateAdded: new Date('2024-05-01')
      }
    ],
    globalSettings: {
      autoAds: true,
      pageLevelAds: true,
      matchedContent: true,
      anchorAds: true,
      vignetteAds: true
    }
  };

  // Social Login Configuration for 7 providers
  public static socialLoginConfig = {
    providers: {
      google: {
        enabled: true,
        clientId: '123456789012-abc123.apps.googleusercontent.com',
        clientSecret: 'GOCSPX-abcdefghijklmnopqrstuvwxyz',
        redirectUri: 'https://playbeat.digital/auth/callback/google',
        scopes: ['openid', 'email', 'profile', 'https://www.googleapis.com/auth/adsense'],
        buttonText: 'Continue with Google',
        buttonColor: '#4285F4',
        buttonIcon: 'fab fa-google',
        businessIntegration: {
          enabled: true,
          businessId: '1234567890123456',
          pages: ['PlayBeat Digital', 'PlayBeat Arena'],
          adAccounts: ['act_1234567890', 'act_0987654321'],
          pixels: ['1234567890123456', '0987654321098765'],
          tokenExpiry: new Date('2025-12-31')
        }
      },
      facebook: {
        enabled: true,
        clientId: '1234567890123456',
        clientSecret: 'abcdefghijklmnopqrstuvwxyz123456',
        redirectUri: 'https://playbeat.digital/auth/callback/facebook',
        scopes: ['email', 'public_profile', 'pages_show_list', 'ads_management', 'business_management'],
        buttonText: 'Continue with Facebook',
        buttonColor: '#1877F2',
        buttonIcon: 'fab fa-facebook-f',
        businessIntegration: {
          enabled: true,
          businessId: '1234567890123456',
          pages: ['PlayBeat Digital', 'PlayBeat Arena', 'PlayBeat TV'],
          adAccounts: ['act_1234567890', 'act_0987654321'],
          pixels: ['1234567890123456', '0987654321098765'],
          tokenExpiry: new Date('2025-12-31')
        }
      },
      twitter: {
        enabled: true,
        clientId: 'abc123def456ghi789jkl012',
        clientSecret: 'abcdefghijklmnopqrstuvwxyz1234567890abcdef',
        redirectUri: 'https://playbeat.digital/auth/callback/twitter',
        scopes: ['tweet.read', 'users.read', 'offline.access'],
        buttonText: 'Continue with Twitter',
        buttonColor: '#1DA1F2',
        buttonIcon: 'fab fa-twitter',
        businessIntegration: {
          enabled: true,
          businessId: '1234567890123456',
          pages: ['@PlayBeatDigital', '@PlayBeatArena'],
          adAccounts: ['1234567890'],
          pixels: [],
          tokenExpiry: new Date('2025-12-31')
        }
      },
      linkedin: {
        enabled: true,
        clientId: '12abcdef34ghij56',
        clientSecret: 'abcdefghijklmnop',
        redirectUri: 'https://playbeat.digital/auth/callback/linkedin',
        scopes: ['r_liteprofile', 'r_emailaddress', 'w_member_social', 'rw_organization_admin'],
        buttonText: 'Continue with LinkedIn',
        buttonColor: '#0077B5',
        buttonIcon: 'fab fa-linkedin-in',
        businessIntegration: {
          enabled: true,
          businessId: '1234567890123456',
          pages: ['PlayBeat Digital Company Page'],
          adAccounts: ['123456789'],
          pixels: [],
          tokenExpiry: new Date('2025-12-31')
        }
      },
      instagram: {
        enabled: true,
        clientId: '1234567890123456',
        clientSecret: 'abcdefghijklmnopqrstuvwxyz123456',
        redirectUri: 'https://playbeat.digital/auth/callback/instagram',
        scopes: ['user_profile', 'user_media', 'instagram_graph_user_profile', 'instagram_graph_user_media'],
        buttonText: 'Continue with Instagram',
        buttonColor: '#E1306C',
        buttonIcon: 'fab fa-instagram',
        businessIntegration: {
          enabled: true,
          businessId: '1234567890123456',
          pages: ['@playbeat.digital', '@playbeat.arena'],
          adAccounts: ['act_1234567890', 'act_0987654321'],
          pixels: ['1234567890123456'],
          tokenExpiry: new Date('2025-12-31')
        }
      },
      youtube: {
        enabled: true,
        clientId: '123456789012-abc123.apps.googleusercontent.com',
        clientSecret: 'GOCSPX-abcdefghijklmnopqrstuvwxyz',
        redirectUri: 'https://playbeat.digital/auth/callback/youtube',
        scopes: ['openid', 'email', 'profile', 'https://www.googleapis.com/auth/youtube.readonly', 'https://www.googleapis.com/auth/yt-analytics.readonly'],
        buttonText: 'Continue with YouTube',
        buttonColor: '#FF0000',
        buttonIcon: 'fab fa-youtube',
        businessIntegration: {
          enabled: true,
          businessId: '1234567890123456',
          pages: ['PlayBeat Digital Channel', 'PlayBeat Arena Channel'],
          adAccounts: ['act_1234567890'],
          pixels: [],
          tokenExpiry: new Date('2025-12-31')
        }
      },
      tiktok: {
        enabled: true,
        clientId: 'abc123def456ghi789',
        clientSecret: 'abcdefghijklmnopqrstuvwxyz1234567890',
        redirectUri: 'https://playbeat.digital/auth/callback/tiktok',
        scopes: ['user.info.basic', 'video.list', 'video.upload'],
        buttonText: 'Continue with TikTok',
        buttonColor: '#000000',
        buttonIcon: 'fab fa-tiktok',
        businessIntegration: {
          enabled: true,
          businessId: '1234567890123456',
          pages: ['@playbeat.digital', '@playbeat.arena'],
          adAccounts: ['1234567890'],
          pixels: ['1234567890123456'],
          tokenExpiry: new Date('2025-12-31')
        }
      }
    },
    globalSettings: {
      allowSignup: true,
      allowLogin: true,
      autoLinkAccounts: true,
      requireEmailVerification: true,
      defaultRedirectUrl: '/dashboard/analytics'
    },
    businessManagement: {
      enabled: true,
      defaultBusinessId: '1234567890123456',
      syncInterval: 60,
      webhookUrl: 'https://playbeat.digital/api/webhooks/social'
    }
  };

  // Business Management Solutions Configuration
  public static businessManagementConfig = {
    categories: ['ads', 'analytics', 'crm', 'marketing', 'commerce', 'automation'],
    solutions: [
      {
        id: 'google-adsense',
        name: 'Google AdSense',
        category: 'ads',
        provider: 'google',
        description: 'Monetize websites with contextual ads across 5 PlayBeat domains',
        icon: 'fas fa-ad',
        status: 'active',
        enabled: true,
        configured: true,
        pricing: { model: 'revenue_share', price: 0, billingCycle: 'monthly' },
        features: ['Auto Ads', 'Matched Content', 'Anchor Ads', 'Vignette Ads', 'Custom Channels'],
        config: { publisherId: 'ca-pub-1234567890123456', domains: 5 },
        metrics: { revenue: 125430.75, impressions: 12500000, clicks: 45230, ctr: 0.36, cpc: 2.77 },
        lastSync: new Date()
      },
      {
        id: 'google-ads',
        name: 'Google Ads',
        category: 'ads',
        provider: 'google',
        description: 'Search, display, and video advertising campaigns',
        icon: 'fas fa-bullseye',
        status: 'active',
        enabled: true,
        configured: true,
        pricing: { model: 'pay_per_click', price: 0, billingCycle: 'per_click' },
        features: ['Search Ads', 'Display Network', 'YouTube Ads', 'Shopping Ads', 'Smart Campaigns'],
        config: { customerId: '123-456-7890', accounts: 3 },
        metrics: { spend: 85230.50, impressions: 8500000, clicks: 42150, ctr: 0.50, cpc: 2.02, conversions: 1245, roas: 4.2 },
        lastSync: new Date()
      },
      {
        id: 'facebook-ads',
        name: 'Meta Ads (Facebook/Instagram)',
        category: 'ads',
        provider: 'facebook',
        description: 'Advertising across Facebook, Instagram, Messenger, and Audience Network',
        icon: 'fab fa-facebook',
        status: 'active',
        enabled: true,
        configured: true,
        pricing: { model: 'pay_per_click', price: 0, billingCycle: 'per_click' },
        features: ['Campaign Budget Optimization', 'Lookalike Audiences', 'Dynamic Ads', 'Lead Forms', 'Pixel Tracking'],
        config: { businessId: '1234567890123456', accounts: 2, pixels: 2 },
        metrics: { spend: 45600.75, impressions: 12400000, clicks: 68300, ctr: 0.55, cpc: 0.67, conversions: 2100, roas: 3.8 },
        lastSync: new Date()
      },
      {
        id: 'twitter-ads',
        name: 'X (Twitter) Ads',
        category: 'ads',
        provider: 'twitter',
        description: 'Promoted tweets, accounts, and trends on X platform',
        icon: 'fab fa-twitter',
        status: 'active',
        enabled: true,
        configured: true,
        pricing: { model: 'pay_per_engagement', price: 0, billingCycle: 'per_engagement' },
        features: ['Promoted Tweets', 'Follower Campaigns', 'Trend Takeover', 'Video Ads', 'Conversation Ads'],
        config: { accountId: '1234567890', campaigns: 5 },
        metrics: { spend: 12300.00, impressions: 3200000, clicks: 15400, ctr: 0.48, cpc: 0.80, conversions: 320, roas: 2.5 },
        lastSync: new Date()
      },
      {
        id: 'linkedin-ads',
        name: 'LinkedIn Ads',
        category: 'ads',
        provider: 'linkedin',
        description: 'B2B advertising on LinkedIn professional network',
        icon: 'fab fa-linkedin',
        status: 'inactive',
        enabled: false,
        configured: true,
        pricing: { model: 'pay_per_click', price: 0, billingCycle: 'per_click' },
        features: ['Sponsored Content', 'Message Ads', 'Dynamic Ads', 'Text Ads', 'Lead Gen Forms'],
        config: { accountId: '123456789', campaigns: 2 },
        metrics: { spend: 8900.00, impressions: 850000, clicks: 4250, ctr: 0.50, cpc: 2.09, conversions: 85, roas: 3.1 },
        lastSync: new Date()
      },
      {
        id: 'instagram-ads',
        name: 'Instagram Ads',
        category: 'ads',
        provider: 'instagram',
        description: 'Visual advertising on Instagram feed, stories, and reels',
        icon: 'fab fa-instagram',
        status: 'active',
        enabled: true,
        configured: true,
        pricing: { model: 'pay_per_click', price: 0, billingCycle: 'per_click' },
        features: ['Feed Ads', 'Stories Ads', 'Reels Ads', 'Explore Ads', 'Shopping Tags'],
        config: { businessId: '1234567890123456', accounts: 2, pixels: 1 },
        metrics: { spend: 23400.50, impressions: 8900000, clicks: 54200, ctr: 0.61, cpc: 0.43, conversions: 1890, roas: 4.5 },
        lastSync: new Date()
      },
      {
        id: 'youtube-ads',
        name: 'YouTube Ads',
        category: 'ads',
        provider: 'youtube',
        description: 'Video advertising on YouTube and Google video partners',
        icon: 'fab fa-youtube',
        status: 'active',
        enabled: true,
        configured: true,
        pricing: { model: 'pay_per_view', price: 0, billingCycle: 'per_view' },
        features: ['Skippable In-Stream', 'Non-Skippable In-Stream', 'Bumper Ads', 'Video Discovery', 'Masthead Ads'],
        config: { channelId: 'UC1234567890', campaigns: 4 },
        metrics: { spend: 34500.00, impressions: 15600000, views: 890000, viewRate: 5.7, cpc: 0.04, conversions: 560, roas: 3.2 },
        lastSync: new Date()
      },
      {
        id: 'tiktok-ads',
        name: 'TikTok Ads',
        category: 'ads',
        provider: 'tiktok',
        description: 'Short-form video advertising on TikTok platform',
        icon: 'fab fa-tiktok',
        status: 'active',
        enabled: true,
        configured: true,
        pricing: { model: 'pay_per_click', price: 0, billingCycle: 'per_click' },
        features: ['In-Feed Ads', 'TopView', 'Brand Takeover', 'Hashtag Challenge', 'Spark Ads'],
        config: { accountId: '1234567890', campaigns: 3 },
        metrics: { spend: 18900.00, impressions: 6700000, clicks: 45200, ctr: 0.67, cpc: 0.42, conversions: 1240, roas: 4.8 },
        lastSync: new Date()
      },
      {
        id: 'google-analytics',
        name: 'Google Analytics 4',
        category: 'analytics',
        provider: 'google',
        description: 'Web and app analytics with event-based tracking',
        icon: 'fas fa-chart-line',
        status: 'active',
        enabled: true,
        configured: true,
        pricing: { model: 'free', price: 0, billingCycle: 'monthly' },
        features: ['Event Tracking', 'E-commerce', 'Audiences', 'Predictive Metrics', 'BigQuery Export'],
        config: { measurementId: 'G-1234567890', properties: 5 },
        metrics: { users: 245000, sessions: 385000, pageViews: 1250000, bounceRate: 42.5, avgSessionDuration: 185 },
        lastSync: new Date()
      },
      {
        id: 'facebook-analytics',
        name: 'Meta Business Suite',
        category: 'analytics',
        provider: 'facebook',
        description: 'Cross-platform analytics for Facebook and Instagram',
        icon: 'fab fa-facebook',
        status: 'active',
        enabled: true,
        configured: true,
        pricing: { model: 'free', price: 0, billingCycle: 'monthly' },
        features: ['Audience Insights', 'Content Performance', 'Ad Analytics', 'Competitor Analysis', 'Journey Mapping'],
        config: { businessId: '1234567890123456', pages: 3 },
        metrics: { users: 185000, reach: 420000, engagement: 85000, videoViews: 245000 },
        lastSync: new Date()
      },
      {
        id: 'hubspot',
        name: 'HubSpot CRM',
        category: 'crm',
        provider: 'hubspot',
        description: 'Complete CRM platform for marketing, sales, and service',
        icon: 'fas fa-handshake',
        status: 'active',
        enabled: true,
        configured: true,
        pricing: { model: 'freemium', price: 50, billingCycle: 'monthly' },
        features: ['Contact Management', 'Deal Pipeline', 'Email Tracking', 'Meeting Scheduler', 'Live Chat'],
        config: { portalId: '12345678', users: 5 },
        metrics: { contacts: 12500, deals: 340, revenue: 425000, conversionRate: 12.5 },
        lastSync: new Date()
      },
      {
        id: 'mailchimp',
        name: 'Mailchimp',
        category: 'marketing',
        provider: 'mailchimp',
        description: 'Email marketing and automation platform',
        icon: 'fas fa-envelope',
        status: 'active',
        enabled: true,
        configured: true,
        pricing: { model: 'freemium', price: 29, billingCycle: 'monthly' },
        features: ['Email Campaigns', 'Automation', 'Audience Segmentation', 'A/B Testing', 'Landing Pages'],
        config: { accountId: '123456789', audiences: 3, subscribers: 45000 },
        metrics: { campaigns: 156, openRate: 24.5, clickRate: 3.2, revenue: 85000 },
        lastSync: new Date()
      },
      {
        id: 'stripe',
        name: 'Stripe Payments',
        category: 'commerce',
        provider: 'stripe',
        description: 'Online payment processing for internet businesses',
        icon: 'fas fa-credit-card',
        status: 'active',
        enabled: true,
        configured: true,
        pricing: { model: 'per_transaction', price: 2.9, billingCycle: 'per_transaction' },
        features: ['Payment Links', 'Subscriptions', 'Marketplace', 'Radar Fraud', 'Invoicing'],
        config: { accountId: 'acct_1234567890', webhooks: 5 },
        metrics: { volume: 1250000, transactions: 8500, successRate: 98.5, disputes: 12 },
        lastSync: new Date()
      },
      {
        id: 'zapier',
        name: 'Zapier Automation',
        category: 'automation',
        provider: 'zapier',
        description: 'Workflow automation connecting 5000+ apps',
        icon: 'fas fa-bolt',
        status: 'active',
        enabled: true,
        configured: true,
        pricing: { model: 'freemium', price: 19.99, billingCycle: 'monthly' },
        features: ['Multi-step Zaps', 'Filters', 'Paths', 'Webhooks', 'Schedule'],
        config: { accountId: '123456789', zaps: 24, tasksPerMonth: 15000 },
        metrics: { zaps: 24, tasksRun: 15000, successRate: 99.2, timeSaved: 240 },
        lastSync: new Date()
      }
    ]
  };
}
