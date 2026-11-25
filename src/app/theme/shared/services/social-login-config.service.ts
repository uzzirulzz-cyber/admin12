import { Injectable } from '@angular/core';

export interface SocialLoginProvider {
  id: string;
  name: string;
  icon: string;
  enabled: boolean;
  clientId: string;
  clientSecret: string;
  redirectUri: string;
  scopes: string[];
  buttonText: string;
  buttonColor: string;
  businessConfig?: BusinessManagementConfig;
}

export interface BusinessManagementConfig {
  enabled: boolean;
  businessAccountId: string;
  accessToken: string;
  refreshToken: string;
  tokenExpiry: Date;
  permissions: string[];
  pages?: BusinessPage[];
  adAccounts?: AdAccount[];
  pixels?: Pixel[];
}

export interface BusinessPage {
  id: string;
  name: string;
  category: string;
  accessToken: string;
  tasks: string[];
}

export interface AdAccount {
  id: string;
  name: string;
  currency: string;
  timezone: string;
  businessId: string;
  permissions: string[];
}

export interface Pixel {
  id: string;
  name: string;
  status: 'active' | 'inactive' | 'pending';
  events: string[];
}

export interface SocialLoginConfig {
  providers: SocialLoginProvider[];
  globalSettings: {
    allowSignup: boolean;
    allowLogin: boolean;
    autoLinkAccounts: boolean;
    requireEmailVerification: boolean;
    defaultRedirectUrl: string;
  };
  businessManagement: {
    enabled: boolean;
    defaultBusinessId: string;
    syncInterval: number; // in minutes
    webhookUrl: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class SocialLoginConfigService {
  private config: SocialLoginConfig = {
    providers: [
      {
        id: 'google',
        name: 'Google',
        icon: 'fab fa-google',
        enabled: true,
        clientId: '123456789-abcdefghijklmnop.apps.googleusercontent.com',
        clientSecret: 'GOCSPX-abcdefghijklmnopqrstuvwxyz',
        redirectUri: 'https://playbeat.digital/auth/callback/google',
        scopes: ['email', 'profile', 'openid', 'https://www.googleapis.com/auth/adsense.readonly', 'https://www.googleapis.com/auth/analytics.readonly'],
        buttonText: 'Continue with Google',
        buttonColor: '#4285F4',
        businessConfig: {
          enabled: true,
          businessAccountId: '1234567890123456',
          accessToken: 'ya29.a0AfH6SMC...',
          refreshToken: '1//0g...',
          tokenExpiry: new Date(Date.now() + 3600000),
          permissions: ['adsense.readonly', 'analytics.readonly', 'mybusiness.manage'],
          pages: [],
          adAccounts: [
            {
              id: 'pub-1234567890123456',
              name: 'PlayBeat AdSense',
              currency: 'USD',
              timezone: 'America/Los_Angeles',
              businessId: '1234567890123456',
              permissions: ['READ_ONLY', 'STANDARD']
            }
          ],
          pixels: []
        }
      },
      {
        id: 'facebook',
        name: 'Facebook',
        icon: 'fab fa-facebook-f',
        enabled: true,
        clientId: '1234567890123456',
        clientSecret: 'abcdefghijklmnopqrstuvwxyz123456',
        redirectUri: 'https://playbeat.digital/auth/callback/facebook',
        scopes: ['email', 'public_profile', 'pages_show_list', 'pages_read_engagement', 'ads_read', 'ads_management', 'business_management'],
        buttonText: 'Continue with Facebook',
        buttonColor: '#1877F2',
        businessConfig: {
          enabled: true,
          businessAccountId: '1234567890123456',
          accessToken: 'EAAJZ...',
          refreshToken: 'EAAJZ...',
          tokenExpiry: new Date(Date.now() + 5184000000),
          permissions: ['pages_show_list', 'pages_read_engagement', 'ads_read', 'ads_management', 'business_management'],
          pages: [
            {
              id: '123456789012345',
              name: 'PlayBeat Digital',
              category: 'Media/News Company',
              accessToken: 'EAAJZ...',
              tasks: ['MANAGE', 'CREATE_CONTENT', 'MODERATE', 'ANALYZE', 'ADVERTISE']
            },
            {
              id: '123456789012346',
              name: 'PlayBeat TV',
              category: 'TV Channel',
              accessToken: 'EAAJZ...',
              tasks: ['MANAGE', 'CREATE_CONTENT', 'MODERATE', 'ANALYZE', 'ADVERTISE']
            }
          ],
          adAccounts: [
            {
              id: 'act_123456789012345',
              name: 'PlayBeat Ads',
              currency: 'USD',
              timezone: 'America/Los_Angeles',
              businessId: '1234567890123456',
              permissions: ['ADMIN', 'ADVERTISER', 'ANALYST']
            }
          ],
          pixels: [
            {
              id: '1234567890123456',
              name: 'PlayBeat Main Pixel',
              status: 'active',
              events: ['PageView', 'Purchase', 'Lead', 'CompleteRegistration', 'AddToCart', 'InitiateCheckout']
            }
          ]
        }
      },
      {
        id: 'twitter',
        name: 'Twitter/X',
        icon: 'fab fa-twitter',
        enabled: true,
        clientId: 'abcdefghijklmnopqrstuv',
        clientSecret: 'abcdefghijklmnopqrstuvwxyz1234567890',
        redirectUri: 'https://playbeat.digital/auth/callback/twitter',
        scopes: ['tweet.read', 'users.read', 'offline.access', 'ads.read', 'media.write'],
        buttonText: 'Continue with Twitter',
        buttonColor: '#1DA1F2',
        businessConfig: {
          enabled: true,
          businessAccountId: '1234567890',
          accessToken: 'abc123...',
          refreshToken: 'def456...',
          tokenExpiry: new Date(Date.now() + 7200000),
          permissions: ['tweet.read', 'users.read', 'ads.read', 'media.write'],
          pages: [],
          adAccounts: [
            {
              id: '1234567890',
              name: 'PlayBeat Twitter Ads',
              currency: 'USD',
              timezone: 'America/Los_Angeles',
              businessId: '1234567890',
              permissions: ['READ_ONLY', 'ADVERTISER']
            }
          ],
          pixels: []
        }
      },
      {
        id: 'linkedin',
        name: 'LinkedIn',
        icon: 'fab fa-linkedin-in',
        enabled: true,
        clientId: 'abcdefghijklmn',
        clientSecret: 'abcdefghijklmnop',
        redirectUri: 'https://playbeat.digital/auth/callback/linkedin',
        scopes: ['r_liteprofile', 'r_emailaddress', 'w_member_social', 'rw_organization_admin', 'r_organization_social', 'r_ads', 'rw_ads'],
        buttonText: 'Continue with LinkedIn',
        buttonColor: '#0077B5',
        businessConfig: {
          enabled: true,
          businessAccountId: '12345678',
          accessToken: 'AQUV...',
          refreshToken: 'AQUV...',
          tokenExpiry: new Date(Date.now() + 5184000000),
          permissions: ['r_liteprofile', 'r_emailaddress', 'w_member_social', 'rw_organization_admin', 'r_organization_social', 'r_ads', 'rw_ads'],
          pages: [
            {
              id: '12345678',
              name: 'PlayBeat Digital Inc.',
              category: 'Marketing & Advertising',
              accessToken: 'AQUV...',
              tasks: ['ADMINISTRATOR', 'CONTENT_CREATOR', 'ANALYST']
            }
          ],
          adAccounts: [
            {
              id: '500123456',
              name: 'PlayBeat LinkedIn Ads',
              currency: 'USD',
              timezone: 'America/Los_Angeles',
              businessId: '12345678',
              permissions: ['ACCOUNT_ADMIN', 'CREATIVE_MANAGER', 'CAMPAIGN_MANAGER', 'VIEWER']
            }
          ],
          pixels: [
            {
              id: '1234567',
              name: 'PlayBeat LinkedIn Insight Tag',
              status: 'active',
              events: ['PageView', 'Conversion', 'Lead', 'Download', 'SignUp']
            }
          ]
        }
      },
      {
        id: 'instagram',
        name: 'Instagram',
        icon: 'fab fa-instagram',
        enabled: true,
        clientId: '1234567890123456',
        clientSecret: 'abcdefghijklmnopqrstuvwxyz123456',
        redirectUri: 'https://playbeat.digital/auth/callback/instagram',
        scopes: ['user_profile', 'user_media', 'instagram_graph_user_profile', 'instagram_graph_user_media', 'instagram_manage_insights', 'instagram_manage_comments', 'business_management'],
        buttonText: 'Continue with Instagram',
        buttonColor: '#E4405F',
        businessConfig: {
          enabled: true,
          businessAccountId: '1234567890123456',
          accessToken: 'EAAJZ...',
          refreshToken: 'EAAJZ...',
          tokenExpiry: new Date(Date.now() + 5184000000),
          permissions: ['user_profile', 'user_media', 'instagram_graph_user_profile', 'instagram_graph_user_media', 'instagram_manage_insights', 'instagram_manage_comments', 'business_management'],
          pages: [
            {
              id: '17841400000000000',
              name: 'playbeat.digital',
              category: 'Digital Creator',
              accessToken: 'EAAJZ...',
              tasks: ['MANAGE', 'CREATE_CONTENT', 'MODERATE', 'ANALYZE']
            },
            {
              id: '17841400000000001',
              name: 'playbeattv',
              category: 'TV Channel',
              accessToken: 'EAAJZ...',
              tasks: ['MANAGE', 'CREATE_CONTENT', 'MODERATE', 'ANALYZE']
            }
          ],
          adAccounts: [
            {
              id: 'act_123456789012345',
              name: 'PlayBeat Instagram Ads',
              currency: 'USD',
              timezone: 'America/Los_Angeles',
              businessId: '1234567890123456',
              permissions: ['ADMIN', 'ADVERTISER', 'ANALYST']
            }
          ],
          pixels: []
        }
      },
      {
        id: 'youtube',
        name: 'YouTube',
        icon: 'fab fa-youtube',
        enabled: true,
        clientId: '123456789-abcdefghijklmnop.apps.googleusercontent.com',
        clientSecret: 'GOCSPX-abcdefghijklmnopqrstuvwxyz',
        redirectUri: 'https://playbeat.digital/auth/callback/youtube',
        scopes: ['email', 'profile', 'openid', 'https://www.googleapis.com/auth/youtube.readonly', 'https://www.googleapis.com/auth/youtube.force-ssl', 'https://www.googleapis.com/auth/yt-analytics.readonly', 'https://www.googleapis.com/auth/adsense.readonly'],
        buttonText: 'Continue with YouTube',
        buttonColor: '#FF0000',
        businessConfig: {
          enabled: true,
          businessAccountId: '1234567890123456',
          accessToken: 'ya29.a0AfH6SMC...',
          refreshToken: '1//0g...',
          tokenExpiry: new Date(Date.now() + 3600000),
          permissions: ['youtube.readonly', 'youtube.force-ssl', 'yt-analytics.readonly', 'adsense.readonly'],
          pages: [],
          adAccounts: [
            {
              id: 'pub-1234567890123456',
              name: 'PlayBeat YouTube AdSense',
              currency: 'USD',
              timezone: 'America/Los_Angeles',
              businessId: '1234567890123456',
              permissions: ['READ_ONLY', 'STANDARD']
            }
          ],
          pixels: []
        }
      },
      {
        id: 'tiktok',
        name: 'TikTok',
        icon: 'fab fa-tiktok',
        enabled: true,
        clientId: 'abcdefghijklmnop',
        clientSecret: 'abcdefghijklmnopqrstuvwxyz1234567890',
        redirectUri: 'https://playbeat.digital/auth/callback/tiktok',
        scopes: ['user.info.basic', 'video.list', 'video.upload', 'ads.read', 'ads.write', 'business.management'],
        buttonText: 'Continue with TikTok',
        buttonColor: '#000000',
        businessConfig: {
          enabled: true,
          businessAccountId: '1234567890123456789',
          accessToken: 'act.abc123...',
          refreshToken: 'rft.def456...',
          tokenExpiry: new Date(Date.now() + 86400000),
          permissions: ['user.info.basic', 'video.list', 'video.upload', 'ads.read', 'ads.write', 'business.management'],
          pages: [],
          adAccounts: [
            {
              id: '1234567890123456789',
              name: 'PlayBeat TikTok Ads',
              currency: 'USD',
              timezone: 'America/Los_Angeles',
              businessId: '1234567890123456789',
              permissions: ['ADMIN', 'ADVERTISER', 'ANALYST', 'CREATIVE']
            }
          ],
          pixels: [
            {
              id: '1234567890123456789',
              name: 'PlayBeat TikTok Pixel',
              status: 'active',
              events: ['PageView', 'CompleteRegistration', 'Contact', 'Download', 'PlaceAnOrder', 'AddToCart', 'InitiateCheckout']
            }
          ]
        }
      }
    ],
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

  constructor() {}

  getConfig(): SocialLoginConfig {
    return { ...this.config };
  }

  getProviders(): SocialLoginProvider[] {
    return [...this.config.providers];
  }

  getEnabledProviders(): SocialLoginProvider[] {
    return this.config.providers.filter(p => p.enabled);
  }

  getProvider(id: string): SocialLoginProvider | undefined {
    return this.config.providers.find(p => p.id === id);
  }

  updateProvider(id: string, updates: Partial<SocialLoginProvider>): void {
    const index = this.config.providers.findIndex(p => p.id === id);
    if (index !== -1) {
      this.config.providers[index] = { ...this.config.providers[index], ...updates };
    }
  }

  updateBusinessConfig(providerId: string, businessConfig: Partial<BusinessManagementConfig>): void {
    const provider = this.config.providers.find(p => p.id === providerId);
    if (provider && provider.businessConfig) {
      provider.businessConfig = { ...provider.businessConfig, ...businessConfig };
    }
  }

  getGlobalSettings(): SocialLoginConfig['globalSettings'] {
    return { ...this.config.globalSettings };
  }

  updateGlobalSettings(settings: Partial<SocialLoginConfig['globalSettings']>): void {
    this.config.globalSettings = { ...this.config.globalSettings, ...settings };
  }

  getBusinessManagementConfig(): SocialLoginConfig['businessManagement'] {
    return { ...this.config.businessManagement };
  }

  updateBusinessManagementConfig(config: Partial<SocialLoginConfig['businessManagement']>): void {
    this.config.businessManagement = { ...this.config.businessManagement, ...config };
  }

  // Generate OAuth URL for a provider
  getOAuthUrl(providerId: string, state?: string): string {
    const provider = this.getProvider(providerId);
    if (!provider) return '';

    const baseUrls: Record<string, string> = {
      google: 'https://accounts.google.com/o/oauth2/v2/auth',
      facebook: 'https://www.facebook.com/v18.0/dialog/oauth',
      twitter: 'https://twitter.com/i/oauth2/authorize',
      linkedin: 'https://www.linkedin.com/oauth/v2/authorization',
      instagram: 'https://api.instagram.com/oauth/authorize',
      youtube: 'https://accounts.google.com/o/oauth2/v2/auth',
      tiktok: 'https://www.tiktok.com/v2/auth/authorize'
    };

    const params = new URLSearchParams({
      client_id: provider.clientId,
      redirect_uri: provider.redirectUri,
      scope: provider.scopes.join(' '),
      response_type: 'code',
      state: state || this.generateState(),
      access_type: 'offline',
      prompt: 'consent'
    });

    return `${baseUrls[providerId]}?${params.toString()}`;
  }

  private generateState(): string {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }

  // Simulate token refresh
  async refreshToken(providerId: string): Promise<boolean> {
    const provider = this.getProvider(providerId);
    if (!provider || !provider.businessConfig) return false;

    // In real implementation, this would make an API call to refresh the token
    provider.businessConfig.accessToken = 'new_access_token_' + Date.now();
    provider.businessConfig.refreshToken = 'new_refresh_token_' + Date.now();
    provider.businessConfig.tokenExpiry = new Date(Date.now() + 3600000);
    
    return true;
  }

  // Sync business data from all providers
  async syncBusinessData(): Promise<void> {
    const enabledProviders = this.getEnabledProviders();
    for (const provider of enabledProviders) {
      if (provider.businessConfig && provider.businessConfig.enabled) {
        await this.syncProviderData(provider.id);
      }
    }
  }

  private async syncProviderData(providerId: string): Promise<void> {
    // Simulate API calls to sync pages, ad accounts, pixels
    console.log(`Syncing data for ${providerId}...`);
  }
}