import { Component, OnInit } from '@angular/core';
import { BusinessManagementService, BusinessSolution, BusinessIntegration } from '../../../../theme/shared/services/business-management.service';
import { SocialLoginConfigService } from '../../../../theme/shared/services/social-login-config.service';

@Component({
  selector: 'app-business-management',
  templateUrl: './business-management.component.html',
  styleUrls: ['./business-management.component.scss']
})
export class BusinessManagementComponent implements OnInit {
  public solutions: BusinessSolution[];
  public integrations: BusinessIntegration[];
  public aggregatedMetrics: Record<string, number>;
  public revenueByDomain: any[];
  public adSpendByPlatform: any[];
  public activeTab = 'solutions';
  public selectedSolution: BusinessSolution | null = null;
  public showSolutionDetail = false;
  public filterCategory = 'all';

  constructor(
    private businessService: BusinessManagementService,
    private socialLoginService: SocialLoginConfigService
  ) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.solutions = this.businessService.getAllSolutions();
    this.integrations = this.businessService.getAllIntegrations();
    this.aggregatedMetrics = this.businessService.getAggregatedMetrics();
    this.revenueByDomain = this.businessService.getRevenueByDomain();
    this.adSpendByPlatform = this.businessService.getAdSpendByPlatform();
  }

  getFilteredSolutions(): BusinessSolution[] {
    if (this.filterCategory === 'all') {
      return this.solutions;
    }
    return this.solutions.filter(s => s.category === this.filterCategory);
  }

  getCategories(): string[] {
    return ['ads', 'analytics', 'crm', 'marketing', 'commerce', 'automation'];
  }

  getCategoryLabel(category: string): string {
    const labels: Record<string, string> = {
      ads: 'Advertising',
      analytics: 'Analytics',
      crm: 'CRM',
      marketing: 'Marketing',
      commerce: 'Commerce',
      automation: 'Automation'
    };
    return labels[category] || category;
  }

  getCategoryIcon(category: string): string {
    const icons: Record<string, string> = {
      ads: 'fas fa-ad',
      analytics: 'fas fa-chart-line',
      crm: 'fas fa-handshake',
      marketing: 'fas fa-bullhorn',
      commerce: 'fas fa-shopping-cart',
      automation: 'fas fa-bolt'
    };
    return icons[category] || 'fas fa-cube';
  }

  viewSolutionDetail(solution: BusinessSolution) {
    this.selectedSolution = solution;
    this.showSolutionDetail = true;
    this.activeTab = 'solutions';
    setTimeout(() => {
      const element = document.getElementById('solution-detail');
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  }

  closeSolutionDetail() {
    this.showSolutionDetail = false;
    this.selectedSolution = null;
  }

  toggleSolution(solution: BusinessSolution) {
    if (solution.enabled) {
      this.businessService.disableSolution(solution.id);
    } else {
      this.businessService.enableSolution(solution.id);
    }
    this.loadData();
  }

  async syncSolution(solution: BusinessSolution) {
    await this.businessService.syncSolution(solution.id);
    this.loadData();
    alert(`Synced ${solution.name} successfully`);
  }

  async syncAllSolutions() {
    await this.businessService.syncAllSolutions();
    this.loadData();
    alert('All active solutions synced successfully');
  }

  getSolutionStatusClass(status: string): string {
    switch (status) {
      case 'active': return 'badge-success';
      case 'inactive': return 'badge-secondary';
      case 'pending': return 'badge-warning';
      case 'error': return 'badge-danger';
      default: return 'badge-secondary';
    }
  }

  getIntegrationStatusClass(status: string): string {
    switch (status) {
      case 'connected': return 'badge-success';
      case 'disconnected': return 'badge-secondary';
      case 'error': return 'badge-danger';
      case 'pending': return 'badge-warning';
      default: return 'badge-secondary';
    }
  }

  getIntegrationTypeClass(type: string): string {
    switch (type) {
      case 'webhook': return 'badge-info';
      case 'pixel': return 'badge-warning';
      case 'sdk': return 'badge-primary';
      default: return 'badge-secondary';
    }
  }

  getProviderIconClass(provider: string): string {
    const icons: Record<string, string> = {
      google: 'fa-google',
      facebook: 'fa-facebook',
      twitter: 'fa-twitter',
      linkedin: 'fa-linkedin',
      instagram: 'fa-instagram',
      youtube: 'fa-youtube',
      tiktok: 'fa-tiktok'
    };
    return icons[provider] || 'fa-globe';
  }

  getPricingLabel(solution: BusinessSolution): string {
    const p = solution.pricing;
    if (p.model === 'free') return 'Free';
    if (p.model === 'freemium') return `Freemium (from $${p.price}/${p.billingCycle})`;
    if (p.model === 'paid') return `Paid ($${p.price}/${p.billingCycle})`;
    if (p.model === 'custom') return 'Custom Pricing';
    if (p.model === 'per_transaction') return 'Per Transaction';
    return 'Contact Sales';
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

  formatMetricValue(value: any): string {
    if (typeof value === 'number') {
      if (value > 1000000) return (value / 1000000).toFixed(1) + 'M';
      if (value > 1000) return (value / 1000).toFixed(1) + 'K';
      if (value < 1) return value.toFixed(2);
      return value.toLocaleString();
    }
    return String(value);
  }

  getMetricKeys(solution: BusinessSolution): string[] {
    if (!solution.metrics) return [];
    return Object.keys(solution.metrics);
  }

  formatKey(key: string): string {
    return key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
  }

  isArray(value: any): boolean {
    return Array.isArray(value);
  }

  objectKeys(obj: any): string[] {
    return obj ? Object.keys(obj) : [];
  }

  getSolutionIdByProvider(providerId: string): string {
    const mapping: Record<string, string> = {
      google: 'google-ads',
      facebook: 'facebook-ads',
      twitter: 'twitter-ads',
      linkedin: 'linkedin-ads',
      instagram: 'instagram-ads',
      youtube: 'youtube-ads',
      tiktok: 'tiktok-ads'
    };
    return mapping[providerId] || '';
  }
}