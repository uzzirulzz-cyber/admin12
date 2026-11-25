import { Injectable } from '@angular/core';

export interface AdSenseDomain {
  domain: string;
  clientId: string;
  slotId: string;
  status: 'active' | 'pending' | 'inactive';
  revenue: number;
  impressions: number;
  clicks: number;
  ctr: number;
  cpc: number;
}

export interface AdSenseConfig {
  publisherId: string;
  domains: AdSenseDomain[];
  globalSettings: {
    autoAds: boolean;
    pageLevelAds: boolean;
    matchedContent: boolean;
    anchorAds: boolean;
    vignetteAds: boolean;
  };
  revenueSummary: {
    totalRevenue: number;
    totalImpressions: number;
    totalClicks: number;
    averageCTR: number;
    averageCPC: number;
    lastUpdated: Date;
  };
}

@Injectable({
  providedIn: 'root'
})
export class AdSenseConfigService {
  private config: AdSenseConfig = {
    publisherId: 'pub-1234567890123456',
    domains: [
      {
        domain: 'playbeat.digital',
        clientId: 'ca-pub-1234567890123456',
        slotId: '1234567890',
        status: 'active',
        revenue: 1245.67,
        impressions: 45678,
        clicks: 567,
        ctr: 1.24,
        cpc: 2.20
      },
      {
        domain: 'playbeatdigital.world',
        clientId: 'ca-pub-1234567890123456',
        slotId: '1234567891',
        status: 'active',
        revenue: 892.34,
        impressions: 32109,
        clicks: 412,
        ctr: 1.28,
        cpc: 2.17
      },
      {
        domain: 'playbeatarena.asia',
        clientId: 'ca-pub-1234567890123456',
        slotId: '1234567892',
        status: 'active',
        revenue: 2156.89,
        impressions: 78901,
        clicks: 892,
        ctr: 1.13,
        cpc: 2.42
      },
      {
        domain: 'playbeat.live',
        clientId: 'ca-pub-1234567890123456',
        slotId: '1234567893',
        status: 'active',
        revenue: 567.23,
        impressions: 23456,
        clicks: 289,
        ctr: 1.23,
        cpc: 1.96
      },
      {
        domain: 'playbeattv.buzz',
        clientId: 'ca-pub-1234567890123456',
        slotId: '1234567894',
        status: 'pending',
        revenue: 0,
        impressions: 0,
        clicks: 0,
        ctr: 0,
        cpc: 0
      }
    ],
    globalSettings: {
      autoAds: true,
      pageLevelAds: true,
      matchedContent: true,
      anchorAds: true,
      vignetteAds: false
    },
    revenueSummary: {
      totalRevenue: 4862.13,
      totalImpressions: 180144,
      totalClicks: 2160,
      averageCTR: 1.20,
      averageCPC: 2.25,
      lastUpdated: new Date()
    }
  };

  constructor() {
    this.updateRevenueSummary();
  }

  getConfig(): AdSenseConfig {
    return { ...this.config };
  }

  getDomains(): AdSenseDomain[] {
    return [...this.config.domains];
  }

  getActiveDomains(): AdSenseDomain[] {
    return this.config.domains.filter(d => d.status === 'active');
  }

  getPendingDomains(): AdSenseDomain[] {
    return this.config.domains.filter(d => d.status === 'pending');
  }

  getInactiveDomains(): AdSenseDomain[] {
    return this.config.domains.filter(d => d.status === 'inactive');
  }

  updateDomain(domain: string, updates: Partial<AdSenseDomain>): void {
    const index = this.config.domains.findIndex(d => d.domain === domain);
    if (index !== -1) {
      this.config.domains[index] = { ...this.config.domains[index], ...updates };
      this.updateRevenueSummary();
    }
  }

  addDomain(domain: AdSenseDomain): void {
    this.config.domains.push(domain);
    this.updateRevenueSummary();
  }

  removeDomain(domain: string): void {
    this.config.domains = this.config.domains.filter(d => d.domain !== domain);
    this.updateRevenueSummary();
  }

  updateGlobalSettings(settings: Partial<AdSenseConfig['globalSettings']>): void {
    this.config.globalSettings = { ...this.config.globalSettings, ...settings };
  }

  getGlobalSettings(): AdSenseConfig['globalSettings'] {
    return { ...this.config.globalSettings };
  }

  getRevenueSummary(): AdSenseConfig['revenueSummary'] {
    return { ...this.config.revenueSummary };
  }

  private updateRevenueSummary(): void {
    const activeDomains = this.getActiveDomains();
    this.config.revenueSummary = {
      totalRevenue: activeDomains.reduce((sum, d) => sum + d.revenue, 0),
      totalImpressions: activeDomains.reduce((sum, d) => sum + d.impressions, 0),
      totalClicks: activeDomains.reduce((sum, d) => sum + d.clicks, 0),
      averageCTR: activeDomains.length > 0 
        ? activeDomains.reduce((sum, d) => sum + d.ctr, 0) / activeDomains.length 
        : 0,
      averageCPC: activeDomains.length > 0 
        ? activeDomains.reduce((sum, d) => sum + d.cpc, 0) / activeDomains.length 
        : 0,
      lastUpdated: new Date()
    };
  }

  // Simulate real-time revenue updates
  simulateRevenueUpdate(): void {
    this.config.domains.forEach(domain => {
      if (domain.status === 'active') {
        const variance = 0.1;
        const impressionsChange = Math.floor(Math.random() * 100) + 10;
        const clicksChange = Math.floor(Math.random() * 5) + 1;
        
        domain.impressions += impressionsChange;
        domain.clicks += clicksChange;
        domain.ctr = (domain.clicks / domain.impressions) * 100;
        domain.revenue += clicksChange * domain.cpc;
      }
    });
    this.updateRevenueSummary();
  }

  // Generate AdSense code snippet for a domain
  getAdSenseCode(domain: string): string {
    const domainConfig = this.config.domains.find(d => d.domain === domain);
    if (!domainConfig) return '';

    return `<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${domainConfig.clientId}"
     crossorigin="anonymous"></script>
<!-- ${domain} -->
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="${domainConfig.clientId}"
     data-ad-slot="${domainConfig.slotId}"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>`;
  }

  // Generate auto-ads code
  getAutoAdsCode(): string {
    return `<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${this.config.publisherId}"
     crossorigin="anonymous"></script>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({
          google_ad_client: "${this.config.publisherId}",
          enable_page_level_ads: ${this.config.globalSettings.pageLevelAds}
     });
</script>`;
  }

  // Get revenue breakdown by domain
  getRevenueBreakdown(): any {
    return this.config.domains.map(domain => ({
      domain: domain.domain,
      revenue: domain.revenue,
      impressions: domain.impressions,
      clicks: domain.clicks,
      ctr: domain.ctr,
      cpc: domain.cpc,
      rpm: domain.impressions > 0 ? (domain.revenue / domain.impressions) * 1000 : 0,
      status: domain.status
    }));
  }
}