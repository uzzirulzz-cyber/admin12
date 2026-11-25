import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdSenseConfigService, AdSenseDomain } from '../../../../theme/shared/services/adsense-config.service';

@Component({
  selector: 'app-adsense-config',
  templateUrl: './adsense-config.component.html',
  styleUrls: ['./adsense-config.component.scss']
})
export class AdsenseConfigComponent implements OnInit {
  public publisherIdForm: FormGroup;
  public domainForm: FormGroup;
  public globalSettingsForm: FormGroup;
  public domains: AdSenseDomain[];
  public editingDomain: AdSenseDomain | null = null;
  public showAddDomain = false;
  public showEditDomain = false;
  public publisherId: string;

  constructor(
    private fb: FormBuilder,
    private adsenseService: AdSenseConfigService
  ) {}

  ngOnInit() {
    this.initializeForms();
    this.loadData();
  }

  initializeForms() {
    this.publisherIdForm = this.fb.group({
      publisherId: ['', [Validators.required, Validators.pattern(/^pub-\d{16}$/)]]
    });

    this.domainForm = this.fb.group({
      domain: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]\.[a-zA-Z]{2,}$/)]],
      clientId: ['', [Validators.required, Validators.pattern(/^ca-pub-\d{16}$/)]],
      slotId: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      status: ['active', Validators.required]
    });

    this.globalSettingsForm = this.fb.group({
      autoAds: [true],
      pageLevelAds: [true],
      matchedContent: [true],
      anchorAds: [true],
      vignetteAds: [false]
    });
  }

  loadData() {
    const config = this.adsenseService.getConfig();
    this.publisherId = config.publisherId;
    this.publisherIdForm.patchValue({ publisherId: this.publisherId });
    this.domains = this.adsenseService.getDomains();
    
    const globalSettings = this.adsenseService.getGlobalSettings();
    this.globalSettingsForm.patchValue(globalSettings);
  }

  savePublisherId() {
    if (this.publisherIdForm.valid) {
      // In real app, this would update the service/backend
      console.log('Saving publisher ID:', this.publisherIdForm.value.publisherId);
    }
  }

  addDomain() {
    this.showAddDomain = true;
    this.editingDomain = null;
    this.domainForm.reset({
      domain: '',
      clientId: '',
      slotId: '',
      status: 'active'
    });
  }

  editDomain(domain: AdSenseDomain) {
    this.showEditDomain = true;
    this.editingDomain = domain;
    this.domainForm.patchValue({
      domain: domain.domain,
      clientId: domain.clientId,
      slotId: domain.slotId,
      status: domain.status
    });
  }

  saveDomain() {
    if (this.domainForm.valid) {
      const domainData = this.domainForm.value;
      
      if (this.editingDomain) {
        this.adsenseService.updateDomain(this.editingDomain.domain, domainData);
      } else {
        this.adsenseService.addDomain(domainData);
      }
      
      this.cancelEdit();
      this.loadData();
    }
  }

  removeDomain(domain: string) {
    if (confirm(`Are you sure you want to remove ${domain}?`)) {
      this.adsenseService.removeDomain(domain);
      this.loadData();
    }
  }

  cancelEdit() {
    this.showAddDomain = false;
    this.showEditDomain = false;
    this.editingDomain = null;
    this.domainForm.reset();
  }

  saveGlobalSettings() {
    if (this.globalSettingsForm.valid) {
      this.adsenseService.updateGlobalSettings(this.globalSettingsForm.value);
      console.log('Global settings saved:', this.globalSettingsForm.value);
    }
  }

  testDomainConnection(domain: string) {
    // Simulate connection test
    console.log('Testing connection for:', domain);
    alert(`Connection test for ${domain} - In production, this would verify AdSense API connectivity.`);
  }

  generateAdCode(domain: string) {
    return this.adsenseService.getAdSenseCode(domain);
  }

  getDomainStatusClass(status: string): string {
    switch (status) {
      case 'active': return 'badge-success';
      case 'pending': return 'badge-warning';
      case 'inactive': return 'badge-danger';
      default: return 'badge-secondary';
    }
  }
}