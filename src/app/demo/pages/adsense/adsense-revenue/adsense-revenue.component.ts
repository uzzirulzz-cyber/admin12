import { Component, OnInit } from '@angular/core';
import { AdSenseConfigService, AdSenseDomain } from '../../../../theme/shared/services/adsense-config.service';
import { BusinessManagementService } from '../../../../theme/shared/services/business-management.service';

@Component({
  selector: 'app-adsense-revenue',
  templateUrl: './adsense-revenue.component.html',
  styleUrls: ['./adsense-revenue.component.scss']
})
export class AdsenseRevenueComponent implements OnInit {
  public domains: AdSenseDomain[];
  public activeDomains: AdSenseDomain[];
  public selectedPeriod = '30d';
  public revenueBreakdown: any;
  public periodComparison: any;
  public topPerformingPages: any[];
  public adUnitPerformance: any[];
  public estimatedEarnings: any;

  constructor(
    private adsenseService: AdSenseConfigService,
    private businessService: BusinessManagementService
  ) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.domains = this.adsenseService.getDomains();
    this.activeDomains = this.adsenseService.getActiveDomains();
    this.revenueBreakdown = this.adsenseService.getRevenueBreakdown();
    this.periodComparison = this.getPeriodComparison();
    this.topPerformingPages = this.getTopPerformingPages();
    this.adUnitPerformance = this.getAdUnitPerformance();
    this.estimatedEarnings = this.getEstimatedEarnings();
  }

  getPeriodComparison() {
    const current = this.activeDomains.reduce((sum, d) => sum + d.revenue, 0);
    const previous = current * (0.85 + Math.random() * 0.2); // 85-105% of current
    const growth = ((current - previous) / previous) * 100;
    
    return {
      current: current,
      previous: previous,
      growth: growth,
      currentPeriod: this.getPeriodLabel(this.selectedPeriod),
      previousPeriod: this.getPreviousPeriodLabel(this.selectedPeriod)
    };
  }

  getTopPerformingPages() {
    const pages = [
      { path: '/home', domain: 'playbeat.digital', revenue: 245.67, impressions: 45230, ctr: 1.23, cpc: 0.44 },
      { path: '/games', domain: 'playbeatdigital.world', revenue: 189.34, impressions: 38910, ctr: 1.45, cpc: 0.34 },
      { path: '/arena', domain: 'playbeatarena.asia', revenue: 156.78, impressions: 32100, ctr: 1.12, cpc: 0.44 },
      { path: '/live', domain: 'playbeat.live', revenue: 212.45, impressions: 41560, ctr: 1.67, cpc: 0.31 },
      { path: '/tv', domain: 'playbeattv.buzz', revenue: 98.23, impressions: 28900, ctr: 0.98, cpc: 0.35 },
      { path: '/blog', domain: 'playbeat.digital', revenue: 67.89, impressions: 15670, ctr: 1.34, cpc: 0.32 },
      { path: '/community', domain: 'playbeatdigital.world', revenue: 54.32, impressions: 12340, ctr: 1.56, cpc: 0.28 }
    ];
    return pages.sort((a, b) => b.revenue - a.revenue);
  }

  getAdUnitPerformance() {
    return [
      { name: 'Header Banner (728x90)', type: 'Display', domain: 'playbeat.digital', impressions: 125000, clicks: 1875, revenue: 312.50, ctr: 1.50, cpc: 0.17, rpm: 2.50 },
      { name: 'Sidebar Rectangle (300x250)', type: 'Display', domain: 'playbeatdigital.world', impressions: 98000, clicks: 1470, revenue: 245.00, ctr: 1.50, cpc: 0.17, rpm: 2.50 },
      { name: 'In-Article Native', type: 'Native', domain: 'playbeatarena.asia', impressions: 76000, clicks: 1140, revenue: 190.00, ctr: 1.50, cpc: 0.17, rpm: 2.50 },
      { name: 'In-Feed Native', type: 'Native', domain: 'playbeat.live', impressions: 89000, clicks: 1780, revenue: 267.00, ctr: 2.00, cpc: 0.15, rpm: 3.00 },
      { name: 'Anchor Mobile', type: 'Anchor', domain: 'playbeattv.buzz', impressions: 65000, clicks: 1300, revenue: 162.50, ctr: 2.00, cpc: 0.13, rpm: 2.50 },
      { name: 'Vignette', type: 'Vignette', domain: 'playbeat.digital', impressions: 45000, clicks: 900, revenue: 135.00, ctr: 2.00, cpc: 0.15, rpm: 3.00 },
      { name: 'Matched Content', type: 'Matched', domain: 'playbeatdigital.world', impressions: 34000, clicks: 510, revenue: 76.50, ctr: 1.50, cpc: 0.15, rpm: 2.25 }
    ];
  }

  getEstimatedEarnings() {
    const currentMonthRevenue = this.activeDomains.reduce((sum, d) => sum + d.revenue, 0);
    const dailyAverage = currentMonthRevenue / 30;
    const daysInMonth = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate();
    const projectedMonthly = dailyAverage * daysInMonth;
    
    return {
      todaySoFar: dailyAverage * (Math.random() * 0.5 + 0.3),
      yesterday: dailyAverage * (Math.random() * 0.4 + 0.8),
      thisMonth: currentMonthRevenue,
      lastMonth: currentMonthRevenue * (0.9 + Math.random() * 0.2),
      projectedMonth: projectedMonthly,
      dailyAverage: dailyAverage
    };
  }

  getPeriodLabel(period: string): string {
    switch (period) {
      case '7d': return 'Last 7 days';
      case '30d': return 'Last 30 days';
      case '90d': return 'Last 90 days';
      case '12m': return 'Last 12 months';
      default: return 'Last 30 days';
    }
  }

  getPreviousPeriodLabel(period: string): string {
    switch (period) {
      case '7d': return 'Previous 7 days';
      case '30d': return 'Previous 30 days';
      case '90d': return 'Previous 90 days';
      case '12m': return 'Previous 12 months';
      default: return 'Previous 30 days';
    }
  }

  onPeriodChange() {
    this.loadData();
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

  getGrowthClass(growth: number): string {
    return growth >= 0 ? 'text-success' : 'text-danger';
  }

  getGrowthIcon(growth: number): string {
    return growth >= 0 ? 'icon-trending-up' : 'icon-trending-down';
  }

  exportRevenueReport() {
    // In production, this would generate a CSV/PDF report
    console.log('Exporting revenue report...');
    alert('Revenue report export functionality would generate a CSV/PDF file with detailed analytics.');
  }
}