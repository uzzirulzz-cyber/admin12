import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AdSenseConfigService, AdSenseDomain, AdSenseConfig } from '../../../../theme/shared/services/adsense-config.service';
import { BusinessManagementService } from '../../../../theme/shared/services/business-management.service';

@Component({
  selector: 'app-adsense-dashboard',
  templateUrl: './adsense-dashboard.component.html',
  styleUrls: ['./adsense-dashboard.component.scss']
})
export class AdsenseDashboardComponent implements OnInit {
  public config: AdSenseConfig;
  public domains: AdSenseDomain[];
  public activeDomains: AdSenseDomain[];
  public pendingDomains: AdSenseDomain[];
  public revenueSummary: any;
  public globalSettings: any;
  public revenueChartData: any[];
  public domainComparisonData: any[];
  public dailyRevenueData: any[];
  public deviceData: any[];
  public geoData: any[];
  public isLoading = false;
  public selectedPeriod = '30d';
  public autoRefresh = true;

  @ViewChild('revenueChart', { static: false }) revenueChart!: ElementRef;
  @ViewChild('domainChart', { static: false }) domainChart!: ElementRef;

  constructor(
    private adsenseService: AdSenseConfigService,
    private businessService: BusinessManagementService
  ) {}

  ngOnInit() {
    this.loadData();
    this.initializeCharts();
    this.startAutoRefresh();
  }

  loadData() {
    this.config = this.adsenseService.getConfig();
    this.domains = this.adsenseService.getDomains();
    this.activeDomains = this.adsenseService.getActiveDomains();
    this.pendingDomains = this.adsenseService.getPendingDomains();
    this.revenueSummary = this.adsenseService.getRevenueSummary();
    this.globalSettings = this.adsenseService.getGlobalSettings();
    
    this.prepareChartData();
  }

  prepareChartData() {
    // Revenue by domain
    this.domainComparisonData = this.activeDomains.map(domain => ({
      name: domain.domain,
      value: domain.revenue,
      impressions: domain.impressions,
      clicks: domain.clicks,
      ctr: domain.ctr,
      cpc: domain.cpc
    }));

    // Daily revenue for the last 30 days (simulated)
    this.dailyRevenueData = [];
    const today = new Date();
    let cumulativeRevenue = 0;
    for (let i = 29; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      const dailyRevenue = Math.random() * 50 + 20;
      cumulativeRevenue += dailyRevenue;
      this.dailyRevenueData.push({
        date: date.toISOString().split('T')[0],
        revenue: Number(dailyRevenue.toFixed(2)),
        cumulative: Number(cumulativeRevenue.toFixed(2))
      });
    }

    // Device breakdown
    this.deviceData = [
      { name: 'Desktop', value: 66, revenue: this.revenueSummary.totalRevenue * 0.66 },
      { name: 'Mobile', value: 26, revenue: this.revenueSummary.totalRevenue * 0.26 },
      { name: 'Tablet', value: 8, revenue: this.revenueSummary.totalRevenue * 0.08 }
    ];

    // Geographic data (top countries)
    this.geoData = [
      { name: 'United States', value: 35, revenue: this.revenueSummary.totalRevenue * 0.35 },
      { name: 'India', value: 24, revenue: this.revenueSummary.totalRevenue * 0.24 },
      { name: 'United Kingdom', value: 12, revenue: this.revenueSummary.totalRevenue * 0.12 },
      { name: 'France', value: 10, revenue: this.revenueSummary.totalRevenue * 0.10 },
      { name: 'Other', value: 19, revenue: this.revenueSummary.totalRevenue * 0.19 }
    ];
  }

  initializeCharts() {
    // Charts will be initialized via template
  }

  startAutoRefresh() {
    if (this.autoRefresh) {
      setInterval(() => {
        this.refreshData();
      }, 60000); // Refresh every minute
    }
  }

  refreshData() {
    this.isLoading = true;
    this.adsenseService.simulateRevenueUpdate();
    this.loadData();
    this.isLoading = false;
  }

  toggleAutoRefresh() {
    this.autoRefresh = !this.autoRefresh;
    if (this.autoRefresh) {
      this.startAutoRefresh();
    }
  }

  getDomainStatusClass(status: string): string {
    switch (status) {
      case 'active': return 'badge-success';
      case 'pending': return 'badge-warning';
      case 'inactive': return 'badge-danger';
      default: return 'badge-secondary';
    }
  }

  formatCurrency(value: number): string {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    }).format(value);
  }

  formatNumber(value: number): string {
    return new Intl.NumberFormat('en-US').format(value);
  }

  getTotalRevenue(): number {
    return this.activeDomains.reduce((sum, d) => sum + d.revenue, 0);
  }

  getTotalImpressions(): number {
    return this.activeDomains.reduce((sum, d) => sum + d.impressions, 0);
  }

  getTotalClicks(): number {
    return this.activeDomains.reduce((sum, d) => sum + d.clicks, 0);
  }

  getAverageCTR(): number {
    return this.activeDomains.length > 0 
      ? this.activeDomains.reduce((sum, d) => sum + d.ctr, 0) / this.activeDomains.length 
      : 0;
  }

  getAverageCPC(): number {
    return this.activeDomains.length > 0 
      ? this.activeDomains.reduce((sum, d) => sum + d.cpc, 0) / this.activeDomains.length 
      : 0;
  }

  getRevenueGrowth(): number {
    // Simulated growth calculation
    return Math.random() * 20 - 5; // -5% to +15%
  }

  copyAdCode(domain: string) {
    const code = this.adsenseService.getAdSenseCode(domain);
    navigator.clipboard.writeText(code).then(() => {
      // Show toast notification
      console.log('Ad code copied for', domain);
    });
  }

  copyAutoAdsCode() {
    const code = this.adsenseService.getAutoAdsCode();
    navigator.clipboard.writeText(code).then(() => {
      console.log('Auto ads code copied');
    });
  }
}