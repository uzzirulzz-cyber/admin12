import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SocialLoginConfigService, SocialLoginProvider, BusinessManagementConfig } from '../../../../theme/shared/services/social-login-config.service';

@Component({
  selector: 'app-social-login-config',
  templateUrl: './social-login-config.component.html',
  styleUrls: ['./social-login-config.component.scss']
})
export class SocialLoginConfigComponent implements OnInit {
  public providers: SocialLoginProvider[];
  public globalSettingsForm: FormGroup;
  public businessManagementForm: FormGroup;
  public editingProvider: SocialLoginProvider | null = null;
  public showEditProvider = false;
  public activeTab = 'providers';

  constructor(
    private fb: FormBuilder,
    private socialLoginService: SocialLoginConfigService
  ) {}

  ngOnInit() {
    this.initializeForms();
    this.loadData();
  }

  initializeForms() {
    this.globalSettingsForm = this.fb.group({
      allowSignup: [true],
      allowLogin: [true],
      autoLinkAccounts: [true],
      requireEmailVerification: [true],
      defaultRedirectUrl: ['/dashboard/analytics']
    });

    this.businessManagementForm = this.fb.group({
      enabled: [true],
      defaultBusinessId: ['1234567890123456'],
      syncInterval: [60],
      webhookUrl: ['https://playbeat.digital/api/webhooks/social']
    });
  }

  loadData() {
    this.providers = this.socialLoginService.getProviders();
    
    const globalSettings = this.socialLoginService.getGlobalSettings();
    this.globalSettingsForm.patchValue(globalSettings);
    
    const businessConfig = this.socialLoginService.getBusinessManagementConfig();
    this.businessManagementForm.patchValue(businessConfig);
  }

  editProvider(provider: SocialLoginProvider) {
    this.editingProvider = provider;
    this.showEditProvider = true;
    this.activeTab = 'providers';
    // Scroll to form
    setTimeout(() => {
      const element = document.getElementById('provider-form');
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  }

  saveProvider() {
    if (this.editingProvider) {
      const updates = {
        enabled: this.editingProvider.enabled,
        clientId: this.editingProvider.clientId,
        clientSecret: this.editingProvider.clientSecret,
        redirectUri: this.editingProvider.redirectUri,
        scopes: this.editingProvider.scopes,
        buttonText: this.editingProvider.buttonText,
        buttonColor: this.editingProvider.buttonColor
      };
      this.socialLoginService.updateProvider(this.editingProvider.id, updates);
      
      // Update business config if exists
      if (this.editingProvider.businessConfig) {
        this.socialLoginService.updateBusinessConfig(this.editingProvider.id, this.editingProvider.businessConfig);
      }
      
      this.cancelEdit();
      this.loadData();
    }
  }

  cancelEdit() {
    this.showEditProvider = false;
    this.editingProvider = null;
  }

  testProviderConnection(providerId: string) {
    const provider = this.socialLoginService.getProvider(providerId);
    if (provider) {
      const oauthUrl = this.socialLoginService.getOAuthUrl(providerId);
      console.log('OAuth URL for', providerId, ':', oauthUrl);
      window.open(oauthUrl, '_blank', 'width=600,height=700');
    }
  }

  refreshProviderToken(providerId: string) {
    this.socialLoginService.refreshToken(providerId).then(success => {
      if (success) {
        alert(`Token refreshed successfully for ${providerId}`);
        this.loadData();
      } else {
        alert(`Failed to refresh token for ${providerId}`);
      }
    });
  }

  syncBusinessData() {
    this.socialLoginService.syncBusinessData().then(() => {
      alert('Business data synced successfully from all providers');
      this.loadData();
    });
  }

  saveGlobalSettings() {
    if (this.globalSettingsForm.valid) {
      this.socialLoginService.updateGlobalSettings(this.globalSettingsForm.value);
      alert('Global settings saved successfully');
    }
  }

  saveBusinessManagementSettings() {
    if (this.businessManagementForm.valid) {
      this.socialLoginService.updateBusinessManagementConfig(this.businessManagementForm.value);
      alert('Business management settings saved successfully');
    }
  }

  getProviderStatusClass(enabled: boolean): string {
    return enabled ? 'badge-success' : 'badge-secondary';
  }

  getProviderStatusText(enabled: boolean): string {
    return enabled ? 'Enabled' : 'Disabled';
  }

  getBusinessConfigStatus(provider: SocialLoginProvider): string {
    if (!provider.businessConfig) return 'Not Configured';
    if (!provider.businessConfig.enabled) return 'Disabled';
    
    const now = new Date();
    if (provider.businessConfig.tokenExpiry < now) return 'Token Expired';
    
    return 'Connected';
  }

  getBusinessConfigStatusClass(provider: SocialLoginProvider): string {
    const status = this.getBusinessConfigStatus(provider);
    switch (status) {
      case 'Connected': return 'badge-success';
      case 'Token Expired': return 'badge-warning';
      case 'Disabled': return 'badge-secondary';
      default: return 'badge-danger';
    }
  }

  copyToClipboard(text: string) {
    navigator.clipboard.writeText(text).then(() => {
      console.log('Copied to clipboard');
    });
  }
}