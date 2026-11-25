const { chromium } = require('playwright');

async function testAdminPanel() {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  
  // Navigate to the admin panel - use localhost instead of 0.0.0.0
  console.log('Navigating to http://localhost:4200...');
  await page.goto('http://localhost:4200', { waitUntil: 'networkidle', timeout: 60000 });
  
  // Take initial screenshot
  await page.screenshot({ path: 'screenshots/01_initial_load.png', fullPage: true });
  console.log('Initial page loaded');
  
  // Wait for page to fully load and navigation to appear
  await page.waitForTimeout(5000);
  
  // Take screenshot of main page
  await page.screenshot({ path: 'screenshots/02_main_page.png', fullPage: true });
  
  // Look for navigation items related to new features
  const navItems = await page.$$eval('a, button, [role="menuitem"]', elements => 
    elements.map(el => el.textContent?.trim()).filter(Boolean)
  );
  console.log('Navigation items found:', navItems);
  
  // Test AdSense Dashboard route
  console.log('\n--- Testing /adsense/dashboard ---');
  await page.goto('http://localhost:4200/adsense/dashboard', { waitUntil: 'networkidle', timeout: 60000 });
  await page.waitForTimeout(3000);
  await page.screenshot({ path: 'screenshots/03_adsense_dashboard.png', fullPage: true });
  
  // Check for dashboard elements
  const dashboardContent = await page.textContent('body');
  console.log('Dashboard content preview:', dashboardContent?.substring(0, 500));
  
  // Test AdSense Config route
  console.log('\n--- Testing /adsense/config ---');
  await page.goto('http://localhost:4200/adsense/config', { waitUntil: 'networkidle', timeout: 60000 });
  await page.waitForTimeout(3000);
  await page.screenshot({ path: 'screenshots/04_adsense_config.png', fullPage: true });
  
  // Test AdSense Revenue route
  console.log('\n--- Testing /adsense/revenue ---');
  await page.goto('http://localhost:4200/adsense/revenue', { waitUntil: 'networkidle', timeout: 60000 });
  await page.waitForTimeout(3000);
  await page.screenshot({ path: 'screenshots/05_adsense_revenue.png', fullPage: true });
  
  // Test Social Login Config route
  console.log('\n--- Testing /social-login/config ---');
  await page.goto('http://localhost:4200/social-login/config', { waitUntil: 'networkidle', timeout: 60000 });
  await page.waitForTimeout(3000);
  await page.screenshot({ path: 'screenshots/06_social_login_config.png', fullPage: true });
  
  // Test Business Management route
  console.log('\n--- Testing /business-management/solutions ---');
  await page.goto('http://localhost:4200/business-management/solutions', { waitUntil: 'networkidle', timeout: 60000 });
  await page.waitForTimeout(3000);
  await page.screenshot({ path: 'screenshots/07_business_management.png', fullPage: true });
  
  await browser.close();
  console.log('\nAll tests completed!');
}

testAdminPanel().catch(console.error);
