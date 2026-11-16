/**
 * Brighto Paints Shop - Offline Mobile Application Engine
 * High-performance, offline-first IndexedDB transactional architecture
 * Supporting full POS, Inventory, Brighto Purchases, Customer Khata & Daybook
 */

// =============================================================================
// 1. Master Catalog: Official Brighto Paints Products & Seed Data
// =============================================================================
const DEFAULT_BRIGHTO_PRODUCTS = [
  // Interior Emulsions
  { code: 'BPE-AW-GAL', name: 'Brighto Plastic Emulsion', category: 'Interior Emulsions', shade: 'Ash White', pack: '3.64 L (Gallon)', cost: 3600, price: 4200, stock: 24, reorder: 5 },
  { code: 'BPE-OW-GAL', name: 'Brighto Plastic Emulsion', category: 'Interior Emulsions', shade: 'Off White', pack: '3.64 L (Gallon)', cost: 3600, price: 4200, stock: 30, reorder: 5 },
  { code: 'BPE-BW-GAL', name: 'Brighto Plastic Emulsion', category: 'Interior Emulsions', shade: 'Brilliant White', pack: '3.64 L (Gallon)', cost: 3600, price: 4200, stock: 18, reorder: 5 },
  { code: 'BPE-AW-DRM', name: 'Brighto Plastic Emulsion', category: 'Interior Emulsions', shade: 'Ash White', pack: '14.56 L (Drum)', cost: 13500, price: 15800, stock: 8, reorder: 2 },
  { code: 'BPE-OW-DRM', name: 'Brighto Plastic Emulsion', category: 'Interior Emulsions', shade: 'Off White', pack: '14.56 L (Drum)', cost: 13500, price: 15800, stock: 10, reorder: 2 },
  { code: 'BPE-CR-GAL', name: 'Brighto Plastic Emulsion', category: 'Interior Emulsions', shade: 'Cream', pack: '3.64 L (Gallon)', cost: 3600, price: 4200, stock: 12, reorder: 4 },
  { code: 'BPE-RW-GAL', name: 'Brighto Plastic Emulsion', category: 'Interior Emulsions', shade: 'Rose White', pack: '3.64 L (Gallon)', cost: 3600, price: 4200, stock: 15, reorder: 4 },
  { code: 'BPE-AW-QTR', name: 'Brighto Plastic Emulsion', category: 'Interior Emulsions', shade: 'Ash White', pack: '0.91 L (Quarter)', cost: 1050, price: 1250, stock: 20, reorder: 6 },

  { code: 'BSF-BW-GAL', name: 'Brighto Stain Free Emulsion', category: 'Interior Emulsions', shade: 'Brilliant White', pack: '3.64 L (Gallon)', cost: 4800, price: 5600, stock: 14, reorder: 4 },
  { code: 'BSF-OW-GAL', name: 'Brighto Stain Free Emulsion', category: 'Interior Emulsions', shade: 'Off White', pack: '3.64 L (Gallon)', cost: 4800, price: 5600, stock: 16, reorder: 4 },
  { code: 'BSF-DG-GAL', name: 'Brighto Stain Free Emulsion', category: 'Interior Emulsions', shade: 'Dove Grey', pack: '3.64 L (Gallon)', cost: 4800, price: 5600, stock: 9, reorder: 3 },
  { code: 'BSF-BW-DRM', name: 'Brighto Stain Free Emulsion', category: 'Interior Emulsions', shade: 'Brilliant White', pack: '14.56 L (Drum)', cost: 18000, price: 21000, stock: 5, reorder: 2 },

  { code: 'BSE-SW-GAL', name: 'Brighto Super Emulsion', category: 'Interior Emulsions', shade: 'Standard White', pack: '3.64 L (Gallon)', cost: 2600, price: 3100, stock: 25, reorder: 5 },
  { code: 'BSE-SW-DRM', name: 'Brighto Super Emulsion', category: 'Interior Emulsions', shade: 'Standard White', pack: '14.56 L (Drum)', cost: 9800, price: 11500, stock: 12, reorder: 3 },
  { code: 'BQW-WH-GAL', name: 'Brighto Quick Wash Emulsion', category: 'Interior Emulsions', shade: 'White', pack: '3.64 L (Gallon)', cost: 2900, price: 3450, stock: 10, reorder: 3 },

  // Exterior Finishes
  { code: 'BAW-OW-GAL', name: 'Brighto All Weather', category: 'Exterior Coatings', shade: 'Off White', pack: '3.64 L (Gallon)', cost: 4400, price: 5150, stock: 18, reorder: 5 },
  { code: 'BAW-SG-GAL', name: 'Brighto All Weather', category: 'Exterior Coatings', shade: 'Slate Grey', pack: '3.64 L (Gallon)', cost: 4400, price: 5150, stock: 12, reorder: 4 },
  { code: 'BAW-SS-GAL', name: 'Brighto All Weather', category: 'Exterior Coatings', shade: 'Sandstone', pack: '3.64 L (Gallon)', cost: 4400, price: 5150, stock: 14, reorder: 4 },
  { code: 'BAW-OW-DRM', name: 'Brighto All Weather', category: 'Exterior Coatings', shade: 'Off White', pack: '14.56 L (Drum)', cost: 16500, price: 19200, stock: 6, reorder: 2 },
  { code: 'BAW-SG-DRM', name: 'Brighto All Weather', category: 'Exterior Coatings', shade: 'Slate Grey', pack: '14.56 L (Drum)', cost: 16500, price: 19200, stock: 4, reorder: 2 },
  { code: 'BAW-OB-GAL', name: 'Brighto All Weather', category: 'Exterior Coatings', shade: 'Oxford Blue', pack: '3.64 L (Gallon)', cost: 4700, price: 5500, stock: 8, reorder: 2 },

  { code: 'BWS-WH-GAL', name: 'Brighto Wall Shield', category: 'Exterior Coatings', shade: 'Pure White', pack: '3.64 L (Gallon)', cost: 5200, price: 6100, stock: 10, reorder: 3 },
  { code: 'BWS-WH-DRM', name: 'Brighto Wall Shield', category: 'Exterior Coatings', shade: 'Pure White', pack: '14.56 L (Drum)', cost: 19500, price: 22800, stock: 5, reorder: 2 },
  { code: 'BFR-WH-GAL', name: 'Brighto Flexi Roof Topcoat', category: 'Exterior Coatings', shade: 'White', pack: '4 L (Gallon)', cost: 5800, price: 6800, stock: 6, reorder: 2 },
  { code: 'BFR-GR-DRM', name: 'Brighto Flexi Roof Topcoat', category: 'Exterior Coatings', shade: 'Grey', pack: '16 L (Drum)', cost: 22000, price: 25500, stock: 3, reorder: 1 },

  // Enamels & Metal Finishes
  { code: 'BSE-WHT-GAL', name: 'Brighto Synthetic Enamel', category: 'Enamels & Gloss', shade: 'Super White', pack: '3.64 L (Gallon)', cost: 4100, price: 4800, stock: 16, reorder: 4 },
  { code: 'BSE-WHT-QTR', name: 'Brighto Synthetic Enamel', category: 'Enamels & Gloss', shade: 'Super White', pack: '0.91 L (Quarter)', cost: 1150, price: 1380, stock: 25, reorder: 6 },
  { code: 'BSE-WHT-SM',  name: 'Brighto Synthetic Enamel', category: 'Enamels & Gloss', shade: 'Super White', pack: '0.25 L', cost: 350, price: 450, stock: 30, reorder: 8 },
  { code: 'BSE-BLK-GAL', name: 'Brighto Synthetic Enamel', category: 'Enamels & Gloss', shade: 'Jet Black', pack: '3.64 L (Gallon)', cost: 4100, price: 4800, stock: 12, reorder: 3 },
  { code: 'BSE-BLK-QTR', name: 'Brighto Synthetic Enamel', category: 'Enamels & Gloss', shade: 'Jet Black', pack: '0.91 L (Quarter)', cost: 1150, price: 1380, stock: 22, reorder: 5 },
  { code: 'BSE-RED-QTR', name: 'Brighto Synthetic Enamel', category: 'Enamels & Gloss', shade: 'Signal Red', pack: '0.91 L (Quarter)', cost: 1250, price: 1490, stock: 14, reorder: 4 },
  { code: 'BSE-BLU-QTR', name: 'Brighto Synthetic Enamel', category: 'Enamels & Gloss', shade: 'Oxford Blue', pack: '0.91 L (Quarter)', cost: 1250, price: 1490, stock: 12, reorder: 4 },
  { code: 'BSE-GRN-QTR', name: 'Brighto Synthetic Enamel', category: 'Enamels & Gloss', shade: 'Emerald Green', pack: '0.91 L (Quarter)', cost: 1250, price: 1490, stock: 10, reorder: 4 },
  { code: 'BAL-SLV-GAL', name: 'Brighto Aluminium Finish', category: 'Enamels & Gloss', shade: 'Bright Silver', pack: '3.64 L (Gallon)', cost: 4500, price: 5300, stock: 8, reorder: 2 },
  { code: 'BAL-SLV-QTR', name: 'Brighto Aluminium Finish', category: 'Enamels & Gloss', shade: 'Bright Silver', pack: '0.91 L (Quarter)', cost: 1300, price: 1550, stock: 15, reorder: 4 },

  // Primers & Undercoats
  { code: 'BRO-RED-GAL', name: 'Brighto Red Oxide Primer', category: 'Surface Prep & Primers', shade: 'Red Oxide', pack: '3.64 L (Gallon)', cost: 2800, price: 3350, stock: 20, reorder: 5 },
  { code: 'BRO-RED-QTR', name: 'Brighto Red Oxide Primer', category: 'Surface Prep & Primers', shade: 'Red Oxide', pack: '0.91 L (Quarter)', cost: 850, price: 1050, stock: 28, reorder: 6 },
  { code: 'BWS-CLR-GAL', name: 'Brighto Wall Sealer', category: 'Surface Prep & Primers', shade: 'Clear / White', pack: '3.64 L (Gallon)', cost: 2200, price: 2650, stock: 22, reorder: 5 },
  { code: 'BWS-CLR-DRM', name: 'Brighto Wall Sealer', category: 'Surface Prep & Primers', shade: 'Clear / White', pack: '14.56 L (Drum)', cost: 8200, price: 9800, stock: 14, reorder: 3 },
  { code: 'BEP-WH-DRM',  name: 'Brighto Exterior Primer', category: 'Surface Prep & Primers', shade: 'White', pack: '14.56 L (Drum)', cost: 9500, price: 11200, stock: 8, reorder: 2 },
  { code: 'BSU-WHT-GAL', name: 'Brighto Synthetic Undercoat', category: 'Surface Prep & Primers', shade: 'Off White', pack: '3.64 L (Gallon)', cost: 2900, price: 3450, stock: 12, reorder: 3 },

  // Fillers & Putty
  { code: 'BSF-PUT-5KG', name: 'Brighto Super Filler', category: 'Putty & Fillers', shade: 'White', pack: '5 Kg (Bag)', cost: 550, price: 720, stock: 35, reorder: 10 },
  { code: 'BSF-PUT-20K', name: 'Brighto Super Filler', category: 'Putty & Fillers', shade: 'White', pack: '20 Kg (Drum)', cost: 1950, price: 2450, stock: 25, reorder: 6 },
  { code: 'BEP-PUT-20K', name: 'Brighto Exterior Putty', category: 'Putty & Fillers', shade: 'White', pack: '20 Kg (Drum)', cost: 2600, price: 3200, stock: 16, reorder: 4 },

  // Solvents & Thinners
  { code: 'BST-THN-1LT', name: 'Brighto Synthetic Thinner', category: 'Thinners & Solvents', shade: 'Clear', pack: '1 Liter', cost: 450, price: 580, stock: 40, reorder: 12 },
  { code: 'BST-THN-3LT', name: 'Brighto Synthetic Thinner', category: 'Thinners & Solvents', shade: 'Clear', pack: '3 Liter (Gallon)', cost: 1250, price: 1550, stock: 24, reorder: 6 },
  { code: 'BPU-THN-1LT', name: 'Brighto PU Thinner', category: 'Thinners & Solvents', shade: 'Clear', pack: '1 Liter', cost: 650, price: 820, stock: 18, reorder: 5 },

  // Universal Stainers
  { code: 'BUS-YEL-200', name: 'Brighto Universal Stainer', category: 'Colorants & Stainers', shade: 'Fast Yellow', pack: '200 ml', cost: 220, price: 300, stock: 25, reorder: 6 },
  { code: 'BUS-RED-200', name: 'Brighto Universal Stainer', category: 'Colorants & Stainers', shade: 'Fast Red', pack: '200 ml', cost: 220, price: 300, stock: 20, reorder: 6 },
  { code: 'BUS-BLU-200', name: 'Brighto Universal Stainer', category: 'Colorants & Stainers', shade: 'Fast Blue', pack: '200 ml', cost: 220, price: 300, stock: 20, reorder: 6 },
  { code: 'BUS-BLK-200', name: 'Brighto Universal Stainer', category: 'Colorants & Stainers', shade: 'Fast Black', pack: '200 ml', cost: 220, price: 300, stock: 25, reorder: 6 }
];

const DEFAULT_CUSTOMERS = [
  { id: 1, name: 'Walk-in Cash Customer', phone: '-', type: 'RETAIL', balance: 0, creditLimit: 0 },
  { id: 2, name: 'Master Tariq Painter', phone: '0300-1234567', type: 'PAINTER', balance: 14500, creditLimit: 50000 },
  { id: 3, name: 'Haji Aslam Contractor', phone: '0321-9876543', type: 'CONTRACTOR', balance: 48000, creditLimit: 150000 },
  { id: 4, name: 'Rashid Builder (Bahria Site)', phone: '0333-5551234', type: 'CONTRACTOR', balance: 92000, creditLimit: 200000 }
];

const DEFAULT_COMPANY = {
  name: 'Brighto Paints Ltd (Regional Depot)',
  repName: 'Mr. Salman (Brighto Territory Manager)',
  phone: '042-111-000-000 / 0300-8889999',
  bankInfo: 'Habib Bank Limited (HBL) - A/C: 00427900123456',
  currentBalancePayable: 185000 // Initial balance payable to Brighto
};

// =============================================================================
// 2. Offline Database Engine (IndexedDB)
// =============================================================================
const DB_NAME = 'BrightoPaintsDB';
const DB_VERSION = 1;
let db = null;

// Cart State in Memory
let cart = [];
let activeCustomer = DEFAULT_CUSTOMERS[0];
let currentCategoryFilter = 'ALL';

function openDatabase() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = (e) => {
      const database = e.target.result;

      // 1. Products Store
      if (!database.objectStoreNames.contains('products')) {
        const prodStore = database.createObjectStore('products', { keyPath: 'id', autoIncrement: true });
        prodStore.createIndex('category', 'category', { unique: false });
        prodStore.createIndex('code', 'code', { unique: true });
        prodStore.createIndex('name', 'name', { unique: false });
      }

      // 2. Customers Store (Khata)
      if (!database.objectStoreNames.contains('customers')) {
        const custStore = database.createObjectStore('customers', { keyPath: 'id', autoIncrement: true });
        custStore.createIndex('name', 'name', { unique: false });
        custStore.createIndex('phone', 'phone', { unique: false });
      }

      // 3. Invoices Store (POS Sales)
      if (!database.objectStoreNames.contains('invoices')) {
        const invStore = database.createObjectStore('invoices', { keyPath: 'id', autoIncrement: true });
        invStore.createIndex('invoiceNo', 'invoiceNo', { unique: true });
        invStore.createIndex('date', 'date', { unique: false });
        invStore.createIndex('customerId', 'customerId', { unique: false });
      }

      // 4. Purchase Orders Store (Bought from Brighto)
      if (!database.objectStoreNames.contains('purchase_orders')) {
        const poStore = database.createObjectStore('purchase_orders', { keyPath: 'id', autoIncrement: true });
        poStore.createIndex('poNo', 'poNo', { unique: true });
        poStore.createIndex('date', 'date', { unique: false });
        poStore.createIndex('status', 'status', { unique: false });
      }

      // 5. Company Payments Store (Paid to Brighto)
      if (!database.objectStoreNames.contains('company_payments')) {
        const payStore = database.createObjectStore('company_payments', { keyPath: 'id', autoIncrement: true });
        payStore.createIndex('date', 'date', { unique: false });
      }

      // 6. Customer Payments Store (Khata Collections)
      if (!database.objectStoreNames.contains('customer_payments')) {
        const cpStore = database.createObjectStore('customer_payments', { keyPath: 'id', autoIncrement: true });
        cpStore.createIndex('customerId', 'customerId', { unique: false });
      }

      // 7. Daybook / Cash Register
      if (!database.objectStoreNames.contains('daybook')) {
        const dayStore = database.createObjectStore('daybook', { keyPath: 'id', autoIncrement: true });
        dayStore.createIndex('date', 'date', { unique: false });
      }

      // 8. Settings & Metadata
      if (!database.objectStoreNames.contains('settings')) {
        database.createObjectStore('settings', { keyPath: 'key' });
      }
    };

    request.onsuccess = (e) => {
      db = e.target.result;
      resolve(db);
    };

    request.onerror = (e) => {
      console.error('IndexedDB open error:', e.target.error);
      reject(e.target.error);
    };
  });
}

// Generic Promise Helpers for IndexedDB
function dbGetAll(storeName) {
  return new Promise((resolve, reject) => {
    const tx = db.transaction(storeName, 'readonly');
    const store = tx.objectStore(storeName);
    const req = store.getAll();
    req.onsuccess = () => resolve(req.result || []);
    req.onerror = () => reject(req.error);
  });
}

function dbGet(storeName, key) {
  return new Promise((resolve, reject) => {
    const tx = db.transaction(storeName, 'readonly');
    const store = tx.objectStore(storeName);
    const req = store.get(key);
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

function dbPut(storeName, item) {
  return new Promise((resolve, reject) => {
    const tx = db.transaction(storeName, 'readwrite');
    const store = tx.objectStore(storeName);
    const req = store.put(item);
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

function dbAdd(storeName, item) {
  return new Promise((resolve, reject) => {
    const tx = db.transaction(storeName, 'readwrite');
    const store = tx.objectStore(storeName);
    const req = store.add(item);
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

function dbDelete(storeName, key) {
  return new Promise((resolve, reject) => {
    const tx = db.transaction(storeName, 'readwrite');
    const store = tx.objectStore(storeName);
    const req = store.delete(key);
    req.onsuccess = () => resolve(true);
    req.onerror = () => reject(req.error);
  });
}

// Seed Initial Data if empty
async function seedInitialData() {
  const products = await dbGetAll('products');
  if (products.length === 0) {
    console.log('Seeding official Brighto Paints products catalog...');
    const tx = db.transaction('products', 'readwrite');
    const store = tx.objectStore('products');
    DEFAULT_BRIGHTO_PRODUCTS.forEach(p => store.add(p));
  }

  const customers = await dbGetAll('customers');
  if (customers.length === 0) {
    console.log('Seeding initial customers list...');
    const tx = db.transaction('customers', 'readwrite');
    const store = tx.objectStore('customers');
    DEFAULT_CUSTOMERS.forEach(c => store.add(c));
  }

  const companySetting = await dbGet('settings', 'company_profile');
  if (!companySetting) {
    await dbPut('settings', { key: 'company_profile', value: DEFAULT_COMPANY });
  }

  const shopSetting = await dbGet('settings', 'shop_profile');
  if (!shopSetting) {
    await dbPut('settings', {
      key: 'shop_profile',
      value: {
        name: 'Brighto Paint Palace & Hardware',
        dealerNo: 'BRIGHTO-DL-5421',
        address: 'Main Commercial Market, GT Road',
        phone: '0300-7654321 / 042-35889900',
        thankYouNote: 'Authorized Dealer of Brighto Paints. Colors for Life!'
      }
    });
  }
}

// =============================================================================
// 3. UI Navigation & Theme Switcher
// =============================================================================
function initTheme() {
  const savedTheme = localStorage.getItem('brighto_theme') || 'light';
  applyTheme(savedTheme);

  document.getElementById('themeToggleBtn').addEventListener('click', () => {
    const current = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    applyTheme(next);
  });
}

function applyTheme(theme) {
  if (theme === 'dark') {
    document.body.classList.add('dark-theme');
    document.getElementById('themeToggleBtn').innerHTML = '☀️';
    document.getElementById('themeToggleBtn').title = 'Switch to Light Theme';
    localStorage.setItem('brighto_theme', 'dark');
  } else {
    document.body.classList.remove('dark-theme');
    document.getElementById('themeToggleBtn').innerHTML = '🌙';
    document.getElementById('themeToggleBtn').title = 'Switch to Dark Theme';
    localStorage.setItem('brighto_theme', 'light');
  }
}

function initNavigation() {
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const targetScreen = item.getAttribute('data-target');
      switchScreen(targetScreen);
    });
  });
}

function switchScreen(screenId) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));

  const activeScreen = document.getElementById(screenId);
  const activeNav = document.querySelector(`.nav-item[data-target="${screenId}"]`);

  if (activeScreen) activeScreen.classList.add('active');
  if (activeNav) activeNav.classList.add('active');

  // Trigger screen-specific refresh
  if (screenId === 'screen-pos') renderPosProducts();
  if (screenId === 'screen-inventory') renderInventoryList();
  if (screenId === 'screen-company') renderCompanyScreen();
  if (screenId === 'screen-khata') renderKhataScreen();
  if (screenId === 'screen-reports') renderReportsScreen();
  if (screenId === 'screen-settings') renderSettingsScreen();
}

// =============================================================================
// 4. POS Billing & Cart Management
// =============================================================================
async function renderPosProducts() {
  const container = document.getElementById('posProductGrid');
  const searchVal = (document.getElementById('posSearchInput').value || '').trim().toLowerCase();
  
  const allProducts = await dbGetAll('products');
  
  // Filter by category and search query
  const filtered = allProducts.filter(p => {
    const matchCategory = (currentCategoryFilter === 'ALL' || p.category === currentCategoryFilter);
    const matchSearch = (!searchVal || 
      p.name.toLowerCase().includes(searchVal) || 
      p.shade.toLowerCase().includes(searchVal) || 
      p.code.toLowerCase().includes(searchVal) ||
      p.pack.toLowerCase().includes(searchVal)
    );
    return matchCategory && matchSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 30px; color: var(--text-muted);">
        <p>No Brighto paints found matching your search.</p>
      </div>`;
    return;
  }

  container.innerHTML = filtered.map(p => {
    let stockClass = 'stock-badge';
    let stockText = `${p.stock} in stock`;
    if (p.stock <= 0) {
      stockClass += ' out';
      stockText = 'Out of stock';
    } else if (p.stock <= p.reorder) {
      stockClass += ' low';
      stockText = `Low: ${p.stock} left`;
    }

    return `
      <div class="product-card" onclick="addToCart(${p.id})">
        <div>
          <span class="category-tag">${p.category}</span>
          <div class="product-name">${p.name}</div>
          <div class="variant-info">🎨 ${p.shade} • 📦 ${p.pack}</div>
        </div>
        <div>
          <span class="${stockClass}">${stockText}</span>
          <div class="price-tag">Rs. ${p.price.toLocaleString()}</div>
        </div>
      </div>
    `;
  }).join('');
}

async function addToCart(productId) {
  const product = await dbGet('products', productId);
  if (!product) return;

  const existing = cart.find(item => item.productId === productId);
  if (existing) {
    if (existing.qty + 1 > product.stock) {
      const confirmExceed = confirm(`Stock alert: Only ${product.stock} units available in store.\nDo you want to proceed anyway with backorder/negative stock?`);
      if (!confirmExceed) return;
    }
    existing.qty += 1;
  } else {
    if (product.stock <= 0) {
      const confirmSellZero = confirm(`"${product.name} (${product.shade})" is currently OUT OF STOCK.\nDo you want to add it to cart as negative/pending stock?`);
      if (!confirmSellZero) return;
    }
    cart.push({
      productId: product.id,
      code: product.code,
      name: product.name,
      shade: product.shade,
      pack: product.pack,
      price: product.price,
      cost: product.cost,
      qty: 1
    });
  }

  updateCartUI();
}

function updateCartQty(productId, delta) {
  const item = cart.find(i => i.productId === productId);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    cart = cart.filter(i => i.productId !== productId);
  }
  updateCartUI();
}

function removeCartItem(productId) {
  cart = cart.filter(i => i.productId !== productId);
  updateCartUI();
}

function clearCart() {
  if (cart.length === 0) return;
  if (confirm('Are you sure you want to clear all items in the cart?')) {
    cart = [];
    updateCartUI();
  }
}

function updateCartUI() {
  const container = document.getElementById('cartItemsList');
  const countBadge = document.getElementById('cartItemCount');
  
  countBadge.innerText = cart.reduce((sum, item) => sum + item.qty, 0);

  if (cart.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 25px 10px; color: var(--text-muted); font-size: 13px;">
        🛒 Cart is empty.<br>Tap products from the catalog to add.
      </div>`;
    document.getElementById('cartSubtotal').innerText = 'Rs. 0';
    document.getElementById('cartGrandTotal').innerText = 'Rs. 0';
    return;
  }

  container.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-details">
        <div class="cart-item-title">${item.name}</div>
        <div class="cart-item-meta">${item.shade} (${item.pack}) @ Rs. ${item.price.toLocaleString()}</div>
      </div>
      <div class="cart-qty-controls">
        <button class="qty-btn" onclick="updateCartQty(${item.productId}, -1)">-</button>
        <span class="qty-value">${item.qty}</span>
        <button class="qty-btn" onclick="updateCartQty(${item.productId}, 1)">+</button>
      </div>
      <div class="cart-item-total">Rs. ${(item.price * item.qty).toLocaleString()}</div>
      <button class="icon-btn" style="width:24px; height:24px; margin-left:6px; color:var(--danger);" onclick="removeCartItem(${item.productId})">✕</button>
    </div>
  `).join('');

  calculateTotals();
}

function calculateTotals() {
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const discountInput = parseFloat(document.getElementById('cartDiscountInput').value) || 0;
  
  // Guard negative or over-discount
  let finalDiscount = Math.max(0, discountInput);
  if (finalDiscount > subtotal) {
    finalDiscount = subtotal;
    document.getElementById('cartDiscountInput').value = subtotal;
  }

  const grandTotal = Math.max(0, subtotal - finalDiscount);

  document.getElementById('cartSubtotal').innerText = `Rs. ${subtotal.toLocaleString()}`;
  document.getElementById('cartGrandTotal').innerText = `Rs. ${grandTotal.toLocaleString()}`;

  return { subtotal, discount: finalDiscount, grandTotal };
}

// Checkout Modal & Processing
function openCheckoutModal() {
  if (cart.length === 0) {
    alert('Please add at least one product to the cart before checkout.');
    return;
  }

  const { grandTotal } = calculateTotals();
  document.getElementById('checkoutGrandTotalDisplay').innerText = `Rs. ${grandTotal.toLocaleString()}`;
  document.getElementById('checkoutPaidInput').value = grandTotal;
  updateCheckoutBalance();

  populateCustomerDropdown();

  document.getElementById('checkoutModal').classList.add('active');
}

function closeCheckoutModal() {
  document.getElementById('checkoutModal').classList.remove('active');
}

async function populateCustomerDropdown() {
  const select = document.getElementById('checkoutCustomerSelect');
  const customers = await dbGetAll('customers');
  select.innerHTML = customers.map(c => `
    <option value="${c.id}" ${c.id === activeCustomer.id ? 'selected' : ''}>
      ${c.name} (${c.type}) - ${c.balance > 0 ? 'Khata Due: Rs. ' + c.balance.toLocaleString() : 'No Dues'}
    </option>
  `).join('');
}

function updateCheckoutBalance() {
  const { grandTotal } = calculateTotals();
  const paid = parseFloat(document.getElementById('checkoutPaidInput').value) || 0;
  const balanceEl = document.getElementById('checkoutBalanceDisplay');
  const labelEl = document.getElementById('checkoutBalanceLabel');

  if (paid >= grandTotal) {
    const change = paid - grandTotal;
    labelEl.innerText = 'Return Change to Customer:';
    balanceEl.innerText = `Rs. ${change.toLocaleString()}`;
    balanceEl.style.color = 'var(--success)';
  } else {
    const due = grandTotal - paid;
    labelEl.innerText = 'Due on Credit (Khata):';
    balanceEl.innerText = `Rs. ${due.toLocaleString()}`;
    balanceEl.style.color = 'var(--warning)';
  }
}

async function finalizeSale() {
  const { subtotal, discount, grandTotal } = calculateTotals();
  const customerId = parseInt(document.getElementById('checkoutCustomerSelect').value);
  const paidAmount = parseFloat(document.getElementById('checkoutPaidInput').value) || 0;
  const paymentMode = document.getElementById('checkoutPaymentModeSelect').value;
  const customer = await dbGet('customers', customerId);

  // Negative Scenario Check: Credit sale with anonymous Walk-in customer
  const balanceDue = Math.max(0, grandTotal - paidAmount);
  if (balanceDue > 0 && customer.id === 1) {
    alert('Khata Error: Unpaid balance / credit sales cannot be assigned to "Walk-in Cash Customer".\nPlease select a registered contractor/painter or add a new customer.');
    return;
  }

  // Generate Unique Invoice Number (INV-YYYYMMDD-HHMMSS)
  const now = new Date();
  const dateStr = now.toISOString().slice(0, 10);
  const invoiceNo = 'INV-' + now.getFullYear() +
    String(now.getMonth() + 1).padStart(2, '0') +
    String(now.getDate()).padStart(2, '0') + '-' +
    String(now.getHours()).padStart(2, '0') +
    String(now.getMinutes()).padStart(2, '0') +
    String(now.getSeconds()).padStart(2, '0');

  // Prepare Invoice Object
  const invoice = {
    invoiceNo,
    date: dateStr,
    timestamp: now.getTime(),
    customerId: customer.id,
    customerName: customer.name,
    customerPhone: customer.phone,
    items: [...cart],
    subtotal,
    discount,
    grandTotal,
    paidAmount,
    balanceDue,
    paymentMode,
    status: balanceDue === 0 ? 'PAID' : (paidAmount > 0 ? 'PARTIAL' : 'CREDIT')
  };

  // Atomic Update: Deduct stock, save invoice, update customer khata, update daybook
  const tx = db.transaction(['products', 'invoices', 'customers', 'daybook'], 'readwrite');
  const prodStore = tx.objectStore('products');
  const invStore = tx.objectStore('invoices');
  const custStore = tx.objectStore('customers');
  const dayStore = tx.objectStore('daybook');

  // 1. Deduct Stock
  for (const item of cart) {
    const prodReq = prodStore.get(item.productId);
    prodReq.onsuccess = () => {
      const prod = prodReq.result;
      if (prod) {
        prod.stock = prod.stock - item.qty;
        prodStore.put(prod);
      }
    };
  }

  // 2. Save Invoice
  invStore.add(invoice);

  // 3. Update Customer Khata if credit balance remains
  if (balanceDue > 0) {
    customer.balance = (customer.balance || 0) + balanceDue;
    custStore.put(customer);
  }

  // 4. Update Cash Daybook if cash received
  if (paidAmount > 0) {
    dayStore.add({
      type: 'IN',
      category: 'SALE',
      amount: paidAmount,
      invoiceNo: invoice.invoiceNo,
      note: `Sale to ${customer.name} (${paymentMode})`,
      date: dateStr,
      timestamp: now.getTime()
    });
  }

  tx.oncomplete = () => {
    closeCheckoutModal();
    const completedCart = [...cart];
    cart = [];
    updateCartUI();
    renderPosProducts();
    showReceiptModal(invoice, completedCart);
  };

  tx.onerror = (e) => {
    console.error('Sale finalization error:', e);
    alert('Critical error processing transaction: ' + e.target.error);
  };
}

// Receipt Presentation & Sharing
function showReceiptModal(invoice, items) {
  const container = document.getElementById('receiptPreviewContainer');
  
  const itemsHtml = items.map(i => `
    <tr>
      <td>${i.name}<br><small style="color:#666;">${i.shade} (${i.pack})</small></td>
      <td class="qty">${i.qty}</td>
      <td class="amt">${i.price.toLocaleString()}</td>
      <td class="amt">${(i.price * i.qty).toLocaleString()}</td>
    </tr>
  `).join('');

  container.innerHTML = `
    <div class="receipt-container" id="printableThermalReceipt">
      <div class="receipt-header">
        <h2>BRIGHTO PAINT PALACE</h2>
        <p>Colors for Life • Authorized Dealership</p>
        <p>Main Commercial Market, GT Road</p>
        <p>Ph: 0300-7654321 / 042-35889900</p>
        <div style="margin-top:6px; font-weight:bold;">
          INVOICE: ${invoice.invoiceNo}
        </div>
        <div>Date: ${invoice.date} | Customer: ${invoice.customerName}</div>
      </div>

      <table class="receipt-table">
        <thead>
          <tr>
            <th>Item & Shade</th>
            <th class="qty">Qty</th>
            <th class="amt">Rate</th>
            <th class="amt">Total</th>
          </tr>
        </thead>
        <tbody>
          ${itemsHtml}
        </tbody>
      </table>

      <div class="receipt-footer">
        <div style="display:flex; justify-content:space-between;">
          <span>Subtotal:</span>
          <span>Rs. ${invoice.subtotal.toLocaleString()}</span>
        </div>
        ${invoice.discount > 0 ? `
        <div style="display:flex; justify-content:space-between; color:#d32f2f;">
          <span>Discount:</span>
          <span>- Rs. ${invoice.discount.toLocaleString()}</span>
        </div>` : ''}
        <div style="display:flex; justify-content:space-between; font-weight:bold; font-size:14px; margin-top:4px;">
          <span>GRAND TOTAL:</span>
          <span>Rs. ${invoice.grandTotal.toLocaleString()}</span>
        </div>
        <div style="display:flex; justify-content:space-between; margin-top:4px;">
          <span>Amount Paid (${invoice.paymentMode}):</span>
          <span>Rs. ${invoice.paidAmount.toLocaleString()}</span>
        </div>
        ${invoice.balanceDue > 0 ? `
        <div style="display:flex; justify-content:space-between; font-weight:bold; color:#d32f2f; margin-top:2px;">
          <span>Khata Remaining Balance:</span>
          <span>Rs. ${invoice.balanceDue.toLocaleString()}</span>
        </div>` : ''}
      </div>

      <div style="text-align:center; margin-top:12px; font-size:10px;">
        *** Thank you for choosing Brighto Paints! ***<br>
        Goods once sold cannot be returned without original receipt.
      </div>
    </div>
  `;

  // Attach WhatsApp and Print handler
  document.getElementById('whatsappReceiptBtn').onclick = () => shareInvoiceWhatsApp(invoice, items);
  document.getElementById('printReceiptBtn').onclick = () => window.print();

  document.getElementById('receiptModal').classList.add('active');
}

function closeReceiptModal() {
  document.getElementById('receiptModal').classList.remove('active');
}

function shareInvoiceWhatsApp(invoice, items) {
  let msg = `*BRIGHTO PAINT PALACE - INVOICE*\n`;
  msg += `Invoice #: ${invoice.invoiceNo}\n`;
  msg += `Date: ${invoice.date}\n`;
  msg += `Customer: ${invoice.customerName}\n`;
  msg += `--------------------------------\n`;
  items.forEach(i => {
    msg += `• ${i.name} (${i.shade}, ${i.pack}) x ${i.qty} = Rs. ${(i.price * i.qty).toLocaleString()}\n`;
  });
  msg += `--------------------------------\n`;
  msg += `*Total Amount:* Rs. ${invoice.grandTotal.toLocaleString()}\n`;
  msg += `*Paid Amount:* Rs. ${invoice.paidAmount.toLocaleString()}\n`;
  if (invoice.balanceDue > 0) {
    msg += `*Khata Balance Due:* Rs. ${invoice.balanceDue.toLocaleString()}\n`;
  }
  msg += `--------------------------------\n`;
  msg += `Thank you for your business! Brighto Paints - Colors for Life!`;

  const phone = (invoice.customerPhone && invoice.customerPhone !== '-') ? invoice.customerPhone.replace(/[^0-9]/g, '') : '';
  const url = `https://api.whatsapp.com/send?${phone ? 'phone=' + phone + '&' : ''}text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');
}

// =============================================================================
// 5. Inventory Management Screen
// =============================================================================
async function renderInventoryList() {
  const container = document.getElementById('inventoryTableBody');
  const search = (document.getElementById('invSearchInput').value || '').trim().toLowerCase();
  const filter = document.getElementById('invFilterSelect').value;

  const products = await dbGetAll('products');
  
  let totalCostVal = 0;
  let totalRetailVal = 0;
  let lowCount = 0;

  products.forEach(p => {
    totalCostVal += (p.cost * p.stock);
    totalRetailVal += (p.price * p.stock);
    if (p.stock <= p.reorder) lowCount++;
  });

  document.getElementById('invTotalItemsCount').innerText = products.length;
  document.getElementById('invTotalCostVal').innerText = `Rs. ${totalCostVal.toLocaleString()}`;
  document.getElementById('invTotalRetailVal').innerText = `Rs. ${totalRetailVal.toLocaleString()}`;
  document.getElementById('invLowStockCount').innerText = lowCount;

  const filtered = products.filter(p => {
    const matchSearch = (!search || 
      p.name.toLowerCase().includes(search) || 
      p.shade.toLowerCase().includes(search) || 
      p.code.toLowerCase().includes(search)
    );
    let matchFilter = true;
    if (filter === 'LOW') matchFilter = (p.stock > 0 && p.stock <= p.reorder);
    if (filter === 'OUT') matchFilter = (p.stock <= 0);
    return matchSearch && matchFilter;
  });

  if (filtered.length === 0) {
    container.innerHTML = `<tr><td colspan="7" style="text-align:center; padding:20px; color:var(--text-muted);">No products found matching filters.</td></tr>`;
    return;
  }

  container.innerHTML = filtered.map(p => {
    let badgeClass = 'badge-success';
    let badgeText = `${p.stock} Units`;
    if (p.stock <= 0) {
      badgeClass = 'badge-danger';
      badgeText = 'Out of Stock';
    } else if (p.stock <= p.reorder) {
      badgeClass = 'badge-warning';
      badgeText = `Low (${p.stock})`;
    }

    return `
      <tr>
        <td>
          <strong>${p.name}</strong><br>
          <small style="color:var(--text-muted);">${p.code} • ${p.category}</small>
        </td>
        <td>🎨 ${p.shade}</td>
        <td>📦 ${p.pack}</td>
        <td>Rs. ${p.cost.toLocaleString()}</td>
        <td><strong>Rs. ${p.price.toLocaleString()}</strong></td>
        <td><span class="badge ${badgeClass}">${badgeText}</span></td>
        <td>
          <button class="btn btn-sm btn-outline" onclick="openStockAdjustModal(${p.id})">Adjust</button>
          <button class="btn btn-sm btn-primary" onclick="openEditProductModal(${p.id})">Edit</button>
        </td>
      </tr>
    `;
  }).join('');
}

// Add New Custom Product Modal
function openAddProductModal() {
  document.getElementById('newProdCode').value = 'BP-' + Math.floor(1000 + Math.random() * 9000);
  document.getElementById('newProdName').value = '';
  document.getElementById('newProdShade').value = '';
  document.getElementById('newProdCost').value = '';
  document.getElementById('newProdPrice').value = '';
  document.getElementById('newProdStock').value = '10';
  document.getElementById('newProdReorder').value = '5';
  document.getElementById('addProductModal').classList.add('active');
}

function closeAddProductModal() {
  document.getElementById('addProductModal').classList.remove('active');
}

async function saveNewProduct() {
  const code = document.getElementById('newProdCode').value.trim();
  const name = document.getElementById('newProdName').value.trim();
  const category = document.getElementById('newProdCategory').value;
  const shade = document.getElementById('newProdShade').value.trim();
  const pack = document.getElementById('newProdPack').value;
  const cost = parseFloat(document.getElementById('newProdCost').value) || 0;
  const price = parseFloat(document.getElementById('newProdPrice').value) || 0;
  const stock = parseFloat(document.getElementById('newProdStock').value) || 0;
  const reorder = parseFloat(document.getElementById('newProdReorder').value) || 5;

  if (!name || !shade || price <= 0) {
    alert('Please fill in Product Name, Shade Name, and valid Retail Price.');
    return;
  }

  await dbAdd('products', { code, name, category, shade, pack, cost, price, stock, reorder });
  closeAddProductModal();
  renderInventoryList();
  renderPosProducts();
}

// Stock Adjustment (Damage, Spill, Audit sync)
let currentAdjustProductId = null;
async function openStockAdjustModal(productId) {
  const product = await dbGet('products', productId);
  if (!product) return;
  currentAdjustProductId = productId;

  document.getElementById('adjustProdTitle').innerText = `${product.name} - ${product.shade} (${product.pack})`;
  document.getElementById('adjustCurrentStockDisplay').innerText = product.stock;
  document.getElementById('adjustQtyInput').value = '1';
  document.getElementById('adjustReasonInput').value = 'Damage / Leakage in store';
  document.getElementById('stockAdjustModal').classList.add('active');
}

function closeStockAdjustModal() {
  document.getElementById('stockAdjustModal').classList.remove('active');
}

async function finalizeStockAdjust() {
  if (!currentAdjustProductId) return;
  const product = await dbGet('products', currentAdjustProductId);
  if (!product) return;

  const action = document.getElementById('adjustActionSelect').value; // 'SUBTRACT' or 'ADD'
  const qty = parseFloat(document.getElementById('adjustQtyInput').value) || 0;
  const reason = document.getElementById('adjustReasonInput').value.trim();

  if (qty <= 0) {
    alert('Please enter a valid quantity.');
    return;
  }

  if (action === 'SUBTRACT') {
    product.stock = Math.max(0, product.stock - qty);
  } else {
    product.stock += qty;
  }

  await dbPut('products', product);
  
  // Record in Daybook as adjustment/expense if damage
  if (action === 'SUBTRACT') {
    const today = new Date().toISOString().slice(0, 10);
    await dbAdd('daybook', {
      type: 'OUT',
      category: 'EXPENSE',
      amount: product.cost * qty,
      note: `Stock Loss (${reason}): ${product.name} x ${qty}`,
      date: today,
      timestamp: Date.now()
    });
  }

  closeStockAdjustModal();
  renderInventoryList();
  renderPosProducts();
}

// Edit Existing Product Modal
let currentEditProductId = null;
async function openEditProductModal(productId) {
  const product = await dbGet('products', productId);
  if (!product) return;
  currentEditProductId = productId;

  document.getElementById('editProdName').value = product.name;
  document.getElementById('editProdShade').value = product.shade;
  document.getElementById('editProdPack').value = product.pack;
  document.getElementById('editProdCost').value = product.cost;
  document.getElementById('editProdPrice').value = product.price;
  document.getElementById('editProdReorder').value = product.reorder;
  document.getElementById('editProductModal').classList.add('active');
}

function closeEditProductModal() {
  document.getElementById('editProductModal').classList.remove('active');
}

async function saveEditProduct() {
  if (!currentEditProductId) return;
  const product = await dbGet('products', currentEditProductId);
  if (!product) return;

  product.name = document.getElementById('editProdName').value.trim();
  product.shade = document.getElementById('editProdShade').value.trim();
  product.pack = document.getElementById('editProdPack').value.trim();
  product.cost = parseFloat(document.getElementById('editProdCost').value) || 0;
  product.price = parseFloat(document.getElementById('editProdPrice').value) || 0;
  product.reorder = parseFloat(document.getElementById('editProdReorder').value) || 5;

  await dbPut('products', product);
  closeEditProductModal();
  renderInventoryList();
  renderPosProducts();
}

// =============================================================================
// 6. Brighto Paints Company Orders & Payables Screen
// =============================================================================
async function renderCompanyScreen() {
  const companyProfile = (await dbGet('settings', 'company_profile'))?.value || DEFAULT_COMPANY;
  const orders = await dbGetAll('purchase_orders');
  const payments = await dbGetAll('company_payments');

  // Compute Outstanding Payable to Brighto
  let totalInvoiced = orders.reduce((sum, o) => o.status === 'RECEIVED' ? sum + o.totalCost : sum, 0);
  let totalPaid = payments.reduce((sum, p) => sum + p.amount, 0);
  let netPayable = companyProfile.currentBalancePayable + totalInvoiced - totalPaid;

  document.getElementById('companyNameDisplay').innerText = companyProfile.name;
  document.getElementById('companyRepDisplay').innerText = companyProfile.repName;
  document.getElementById('companyPhoneDisplay').innerText = companyProfile.phone;
  document.getElementById('companyBankDisplay').innerText = companyProfile.bankInfo;
  document.getElementById('companyNetPayableDisplay').innerText = `Rs. ${netPayable.toLocaleString()}`;
  document.getElementById('companyTotalPurchasesDisplay').innerText = `Rs. ${totalInvoiced.toLocaleString()}`;
  document.getElementById('companyTotalPaidDisplay').innerText = `Rs. ${totalPaid.toLocaleString()}`;

  // Orders Table
  const ordersTbody = document.getElementById('companyOrdersTableBody');
  if (orders.length === 0) {
    ordersTbody.innerHTML = `<tr><td colspan="6" style="text-align:center; padding:15px; color:var(--text-muted);">No company purchase orders recorded yet.</td></tr>`;
  } else {
    ordersTbody.innerHTML = orders.slice().reverse().map(o => `
      <tr>
        <td><strong>${o.poNo}</strong></td>
        <td>${o.date}</td>
        <td>${o.items.length} items (${o.items.reduce((s, i) => s + i.qty, 0)} units)</td>
        <td><strong>Rs. ${o.totalCost.toLocaleString()}</strong></td>
        <td>
          <span class="badge ${o.status === 'RECEIVED' ? 'badge-success' : 'badge-warning'}">
            ${o.status}
          </span>
        </td>
        <td>
          ${o.status !== 'RECEIVED' ? `
            <button class="btn btn-sm btn-success" onclick="receiveCompanyOrder(${o.id})">Mark Received</button>
          ` : '<span style="color:var(--success); font-weight:bold;">Stock Added</span>'}
        </td>
      </tr>
    `).join('');
  }

  // Payments History Table
  const paymentsTbody = document.getElementById('companyPaymentsTableBody');
  if (payments.length === 0) {
    paymentsTbody.innerHTML = `<tr><td colspan="5" style="text-align:center; padding:15px; color:var(--text-muted);">No payment records logged to company yet.</td></tr>`;
  } else {
    paymentsTbody.innerHTML = payments.slice().reverse().map(p => `
      <tr>
        <td>${p.date}</td>
        <td><strong>Rs. ${p.amount.toLocaleString()}</strong></td>
        <td>${p.method}</td>
        <td>${p.refNo || '-'}</td>
        <td>${p.notes || '-'}</td>
      </tr>
    `).join('');
  }
}

// Create New Purchase Order to Brighto
let poDraftItems = [];
async function openCreatePOModal() {
  poDraftItems = [];
  document.getElementById('poOrderNo').value = 'PO-BRIGHTO-' + Math.floor(1000 + Math.random() * 9000);
  await populatePOProductDropdown();
  updatePODraftUI();
  document.getElementById('createPOModal').classList.add('active');
}

function closeCreatePOModal() {
  document.getElementById('createPOModal').classList.remove('active');
}

async function populatePOProductDropdown() {
  const select = document.getElementById('poProductSelect');
  const products = await dbGetAll('products');
  select.innerHTML = products.map(p => `
    <option value="${p.id}">
      ${p.name} - ${p.shade} (${p.pack}) - Cost: Rs. ${p.cost.toLocaleString()}
    </option>
  `).join('');
}

async function addProductToPODraft() {
  const prodId = parseInt(document.getElementById('poProductSelect').value);
  const qty = parseFloat(document.getElementById('poItemQtyInput').value) || 0;
  if (qty <= 0) {
    alert('Please enter a valid quantity.');
    return;
  }

  const product = await dbGet('products', prodId);
  if (!product) return;

  const existing = poDraftItems.find(i => i.productId === prodId);
  if (existing) {
    existing.qty += qty;
  } else {
    poDraftItems.push({
      productId: product.id,
      name: product.name,
      shade: product.shade,
      pack: product.pack,
      cost: product.cost,
      qty: qty
    });
  }

  document.getElementById('poItemQtyInput').value = '10';
  updatePODraftUI();
}

function updatePODraftUI() {
  const container = document.getElementById('poDraftItemsList');
  if (poDraftItems.length === 0) {
    container.innerHTML = `<div style="text-align:center; padding:15px; color:var(--text-muted);">No products added to order yet.</div>`;
    document.getElementById('poDraftTotalDisplay').innerText = 'Rs. 0';
    return;
  }

  let total = 0;
  container.innerHTML = poDraftItems.map((item, idx) => {
    const itemTotal = item.cost * item.qty;
    total += itemTotal;
    return `
      <div style="display:flex; justify-content:space-between; align-items:center; padding:6px 0; border-bottom:1px solid var(--border-color);">
        <div>
          <strong>${item.name}</strong> (${item.shade}, ${item.pack})<br>
          <small>${item.qty} units @ Rs. ${item.cost.toLocaleString()}</small>
        </div>
        <div style="display:flex; align-items:center; gap:8px;">
          <strong>Rs. ${itemTotal.toLocaleString()}</strong>
          <button class="icon-btn" style="width:22px; height:22px; color:var(--danger);" onclick="removePODraftItem(${idx})">✕</button>
        </div>
      </div>
    `;
  }).join('');

  document.getElementById('poDraftTotalDisplay').innerText = `Rs. ${total.toLocaleString()}`;
}

function removePODraftItem(idx) {
  poDraftItems.splice(idx, 1);
  updatePODraftUI();
}

async function saveCompanyPO() {
  if (poDraftItems.length === 0) {
    alert('Please add at least one product to the purchase order.');
    return;
  }

  const poNo = document.getElementById('poOrderNo').value.trim();
  const date = new Date().toISOString().slice(0, 10);
  const totalCost = poDraftItems.reduce((s, i) => s + (i.cost * i.qty), 0);

  const po = {
    poNo,
    date,
    timestamp: Date.now(),
    supplier: 'Brighto Paints Ltd',
    items: [...poDraftItems],
    totalCost,
    status: 'ORDERED'
  };

  await dbAdd('purchase_orders', po);
  closeCreatePOModal();
  renderCompanyScreen();
}

// Receive Stock (Stock Inward)
async function receiveCompanyOrder(orderId) {
  const order = await dbGet('purchase_orders', orderId);
  if (!order || order.status === 'RECEIVED') return;

  const confirmReceive = confirm(`Confirm receipt of Order ${order.poNo}?\nThis will automatically increment inventory counts for all ${order.items.length} items in the store.`);
  if (!confirmReceive) return;

  const tx = db.transaction(['products', 'purchase_orders', 'daybook'], 'readwrite');
  const prodStore = tx.objectStore('products');
  const poStore = tx.objectStore('purchase_orders');

  for (const item of order.items) {
    const req = prodStore.get(item.productId);
    req.onsuccess = () => {
      const p = req.result;
      if (p) {
        p.stock += item.qty;
        prodStore.put(p);
      }
    };
  }

  order.status = 'RECEIVED';
  order.receivedDate = new Date().toISOString().slice(0, 10);
  poStore.put(order);

  tx.oncomplete = () => {
    alert(`Success: Order ${order.poNo} received and stock successfully added to inventory!`);
    renderCompanyScreen();
    renderInventoryList();
    renderPosProducts();
  };
}

// Record Payment Made to Brighto Paints
function openCompanyPaymentModal() {
  document.getElementById('compPayAmount').value = '';
  document.getElementById('compPayRef').value = '';
  document.getElementById('compPayNotes').value = 'Payment for Depot Delivery';
  document.getElementById('companyPaymentModal').classList.add('active');
}

function closeCompanyPaymentModal() {
  document.getElementById('companyPaymentModal').classList.remove('active');
}

async function saveCompanyPayment() {
  const amount = parseFloat(document.getElementById('compPayAmount').value) || 0;
  const method = document.getElementById('compPayMethod').value;
  const refNo = document.getElementById('compPayRef').value.trim();
  const notes = document.getElementById('compPayNotes').value.trim();
  const date = new Date().toISOString().slice(0, 10);

  if (amount <= 0) {
    alert('Please enter a valid payment amount.');
    return;
  }

  // Atomic Write: Log payment and Daybook outflow
  const tx = db.transaction(['company_payments', 'daybook'], 'readwrite');
  tx.objectStore('company_payments').add({
    amount,
    method,
    refNo,
    notes,
    date,
    timestamp: Date.now()
  });

  tx.objectStore('daybook').add({
    type: 'OUT',
    category: 'COMPANY_PAYMENT',
    amount,
    note: `Paid to Brighto Paints (${method}) - Ref: ${refNo || 'N/A'}`,
    date,
    timestamp: Date.now()
  });

  tx.oncomplete = () => {
    closeCompanyPaymentModal();
    renderCompanyScreen();
  };
}

// =============================================================================
// 7. Customer Khata Ledger (Receivables & Collections)
// =============================================================================
async function renderKhataScreen() {
  const container = document.getElementById('khataTableBody');
  const search = (document.getElementById('khataSearchInput').value || '').trim().toLowerCase();
  
  const customers = await dbGetAll('customers');
  
  let totalReceivable = 0;
  let activeDebtors = 0;

  customers.forEach(c => {
    if (c.balance > 0) {
      totalReceivable += c.balance;
      activeDebtors++;
    }
  });

  document.getElementById('khataTotalReceivableDisplay').innerText = `Rs. ${totalReceivable.toLocaleString()}`;
  document.getElementById('khataTotalDebtorsDisplay').innerText = activeDebtors;

  const filtered = customers.filter(c => {
    return (!search || c.name.toLowerCase().includes(search) || (c.phone && c.phone.includes(search)));
  });

  container.innerHTML = filtered.map(c => `
    <tr>
      <td>
        <strong>${c.name}</strong><br>
        <small style="color:var(--text-muted);">${c.type} • 📞 ${c.phone || '-'}</small>
      </td>
      <td>
        <strong style="color:${c.balance > 0 ? 'var(--warning)' : 'var(--success)'}; font-size:14px;">
          Rs. ${c.balance.toLocaleString()}
        </strong>
      </td>
      <td>Rs. ${(c.creditLimit || 50000).toLocaleString()}</td>
      <td>
        <button class="btn btn-sm btn-primary" onclick="openCollectPaymentModal(${c.id})">Collect Cash</button>
        <button class="btn btn-sm btn-outline" onclick="openCustomerStatementModal(${c.id})">Statement</button>
        ${c.balance > 0 && c.phone !== '-' ? `
          <button class="btn btn-sm btn-success" onclick="sendKhataWhatsAppReminder(${c.id})">📱 WhatsApp</button>
        ` : ''}
      </td>
    </tr>
  `).join('');
}

// Add New Customer Modal
function openAddCustomerModal() {
  document.getElementById('newCustName').value = '';
  document.getElementById('newCustPhone').value = '';
  document.getElementById('newCustType').value = 'PAINTER';
  document.getElementById('newCustLimit').value = '50000';
  document.getElementById('addCustomerModal').classList.add('active');
}

function closeAddCustomerModal() {
  document.getElementById('addCustomerModal').classList.remove('active');
}

async function saveNewCustomer() {
  const name = document.getElementById('newCustName').value.trim();
  const phone = document.getElementById('newCustPhone').value.trim();
  const type = document.getElementById('newCustType').value;
  const creditLimit = parseFloat(document.getElementById('newCustLimit').value) || 50000;

  if (!name) {
    alert('Please enter customer/painter name.');
    return;
  }

  await dbAdd('customers', {
    name,
    phone: phone || '-',
    type,
    balance: 0,
    creditLimit
  });

  closeAddCustomerModal();
  renderKhataScreen();
}

// Collect Debt Payment Modal
let currentKhataCustomerId = null;
async function openCollectPaymentModal(customerId) {
  const customer = await dbGet('customers', customerId);
  if (!customer) return;
  currentKhataCustomerId = customerId;

  document.getElementById('collectCustName').innerText = customer.name;
  document.getElementById('collectCustBalance').innerText = `Rs. ${customer.balance.toLocaleString()}`;
  document.getElementById('collectAmountInput').value = customer.balance > 0 ? customer.balance : '';
  document.getElementById('collectPaymentModal').classList.add('active');
}

function closeCollectPaymentModal() {
  document.getElementById('collectPaymentModal').classList.remove('active');
}

async function finalizeKhataPayment() {
  if (!currentKhataCustomerId) return;
  const customer = await dbGet('customers', currentKhataCustomerId);
  if (!customer) return;

  const amount = parseFloat(document.getElementById('collectAmountInput').value) || 0;
  const mode = document.getElementById('collectModeSelect').value;
  const note = document.getElementById('collectNoteInput').value.trim();
  const date = new Date().toISOString().slice(0, 10);

  if (amount <= 0) {
    alert('Please enter a valid amount.');
    return;
  }

  // Atomic Update: Deduct balance, record customer payment, add to daybook
  const tx = db.transaction(['customers', 'customer_payments', 'daybook'], 'readwrite');
  customer.balance = Math.max(0, customer.balance - amount);
  tx.objectStore('customers').put(customer);

  tx.objectStore('customer_payments').add({
    customerId: customer.id,
    customerName: customer.name,
    amount,
    mode,
    note,
    date,
    timestamp: Date.now()
  });

  tx.objectStore('daybook').add({
    type: 'IN',
    category: 'DEBT_COLLECTION',
    amount,
    note: `Debt recovered from ${customer.name} (${mode})`,
    date,
    timestamp: Date.now()
  });

  tx.oncomplete = () => {
    alert(`Success: Collected Rs. ${amount.toLocaleString()} from ${customer.name}.\nRemaining balance: Rs. ${customer.balance.toLocaleString()}`);
    closeCollectPaymentModal();
    renderKhataScreen();
  };
}

// WhatsApp Khata Reminder
async function sendKhataWhatsAppReminder(customerId) {
  const customer = await dbGet('customers', customerId);
  if (!customer || !customer.phone || customer.phone === '-') {
    alert('Customer has no phone number on record.');
    return;
  }

  const msg = `*BRIGHTO PAINT PALACE - KHATA REMINDER*\n` +
    `Dear ${customer.name},\n` +
    `This is a gentle reminder that your current outstanding balance is *Rs. ${customer.balance.toLocaleString()}*.\n` +
    `Please arrange payment at your earliest convenience.\n` +
    `Thank you for your business! Colors for Life!`;

  const cleanPhone = customer.phone.replace(/[^0-9]/g, '');
  const url = `https://api.whatsapp.com/send?phone=${cleanPhone}&text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');
}

// Statement Modal
async function openCustomerStatementModal(customerId) {
  const customer = await dbGet('customers', customerId);
  if (!customer) return;

  const invoices = await dbGetAll('invoices');
  const payments = await dbGetAll('customer_payments');

  const customerInvoices = invoices.filter(inv => inv.customerId === customerId);
  const customerPayments = payments.filter(pay => pay.customerId === customerId);

  let statementHtml = `
    <div style="margin-bottom:12px; padding:10px; background:var(--bg-input); border-radius:var(--radius-md);">
      <h4>${customer.name} (${customer.type})</h4>
      <div>Phone: ${customer.phone} | Credit Limit: Rs. ${(customer.creditLimit || 50000).toLocaleString()}</div>
      <div style="font-size:16px; font-weight:bold; color:var(--warning); margin-top:4px;">
        Current Net Outstanding Balance: Rs. ${customer.balance.toLocaleString()}
      </div>
    </div>

    <h5 style="margin:10px 0 6px 0;">Invoices Billed</h5>
    <table class="data-table" style="font-size:11px; margin-bottom:14px;">
      <thead><tr><th>Invoice #</th><th>Date</th><th>Grand Total</th><th>Paid</th><th>Due</th></tr></thead>
      <tbody>
        ${customerInvoices.length === 0 ? '<tr><td colspan="5" style="text-align:center;">No invoices yet</td></tr>' : 
          customerInvoices.map(inv => `
            <tr>
              <td>${inv.invoiceNo}</td>
              <td>${inv.date}</td>
              <td>Rs. ${inv.grandTotal.toLocaleString()}</td>
              <td>Rs. ${inv.paidAmount.toLocaleString()}</td>
              <td style="color:${inv.balanceDue > 0 ? 'var(--danger)' : 'var(--success)'};">Rs. ${inv.balanceDue.toLocaleString()}</td>
            </tr>
          `).join('')}
      </tbody>
    </table>

    <h5 style="margin:10px 0 6px 0;">Payments Received</h5>
    <table class="data-table" style="font-size:11px;">
      <thead><tr><th>Date</th><th>Amount</th><th>Mode</th><th>Note</th></tr></thead>
      <tbody>
        ${customerPayments.length === 0 ? '<tr><td colspan="4" style="text-align:center;">No payment records logged yet</td></tr>' :
          customerPayments.map(p => `
            <tr>
              <td>${p.date}</td>
              <td><strong>Rs. ${p.amount.toLocaleString()}</strong></td>
              <td>${p.mode}</td>
              <td>${p.note || '-'}</td>
            </tr>
          `).join('')}
      </tbody>
    </table>
  `;

  document.getElementById('statementContainer').innerHTML = statementHtml;
  document.getElementById('customerStatementModal').classList.add('active');
}

function closeCustomerStatementModal() {
  document.getElementById('customerStatementModal').classList.remove('active');
}

// =============================================================================
// 8. Daybook & Financial Reports Screen
// =============================================================================
async function renderReportsScreen() {
  const todayStr = new Date().toISOString().slice(0, 10);
  const daybookEntries = await dbGetAll('daybook');
  const invoices = await dbGetAll('invoices');

  const todayEntries = daybookEntries.filter(e => e.date === todayStr);

  let cashIn = 0;
  let cashOut = 0;

  todayEntries.forEach(e => {
    if (e.type === 'IN') cashIn += e.amount;
    if (e.type === 'OUT') cashOut += e.amount;
  });

  const netCashToday = cashIn - cashOut;

  // Profit Calculation (Revenue - COGS)
  let totalRevenue = 0;
  let totalCost = 0;

  invoices.forEach(inv => {
    inv.items.forEach(item => {
      totalRevenue += (item.price * item.qty);
      totalCost += ((item.cost || 0) * item.qty);
    });
    totalRevenue -= (inv.discount || 0);
  });

  const grossProfit = Math.max(0, totalRevenue - totalCost);
  const profitMargin = totalRevenue > 0 ? ((grossProfit / totalRevenue) * 100).toFixed(1) : 0;

  document.getElementById('reportTodayCashIn').innerText = `Rs. ${cashIn.toLocaleString()}`;
  document.getElementById('reportTodayCashOut').innerText = `Rs. ${cashOut.toLocaleString()}`;
  document.getElementById('reportTodayNetCash').innerText = `Rs. ${netCashToday.toLocaleString()}`;
  document.getElementById('reportGrossProfit').innerText = `Rs. ${grossProfit.toLocaleString()}`;
  document.getElementById('reportProfitMargin').innerText = `${profitMargin}%`;

  // Render Daybook Log
  const tbody = document.getElementById('daybookTableBody');
  if (todayEntries.length === 0) {
    tbody.innerHTML = `<tr><td colspan="5" style="text-align:center; padding:15px; color:var(--text-muted);">No cash transactions recorded today yet.</td></tr>`;
  } else {
    tbody.innerHTML = todayEntries.slice().reverse().map(e => `
      <tr>
        <td>${new Date(e.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</td>
        <td>
          <span class="badge ${e.type === 'IN' ? 'badge-success' : 'badge-danger'}">
            ${e.type === 'IN' ? 'Cash IN' : 'Cash OUT'}
          </span>
        </td>
        <td>${e.category}</td>
        <td><strong>Rs. ${e.amount.toLocaleString()}</strong></td>
        <td>${e.note || '-'}</td>
      </tr>
    `).join('');
  }
}

// Add Manual Expense Entry
function openAddExpenseModal() {
  document.getElementById('expenseAmount').value = '';
  document.getElementById('expenseCategory').value = 'TEA_SNACKS';
  document.getElementById('expenseNotes').value = '';
  document.getElementById('addExpenseModal').classList.add('active');
}

function closeAddExpenseModal() {
  document.getElementById('addExpenseModal').classList.remove('active');
}

async function saveManualExpense() {
  const amount = parseFloat(document.getElementById('expenseAmount').value) || 0;
  const category = document.getElementById('expenseCategory').value;
  const notes = document.getElementById('expenseNotes').value.trim();
  const date = new Date().toISOString().slice(0, 10);

  if (amount <= 0) {
    alert('Please enter a valid expense amount.');
    return;
  }

  await dbAdd('daybook', {
    type: 'OUT',
    category,
    amount,
    note: notes || category,
    date,
    timestamp: Date.now()
  });

  closeAddExpenseModal();
  renderReportsScreen();
}

// =============================================================================
// 9. Settings, Backup & Restore Engine
// =============================================================================
async function renderSettingsScreen() {
  const shop = (await dbGet('settings', 'shop_profile'))?.value || {};
  document.getElementById('settingShopName').value = shop.name || '';
  document.getElementById('settingDealerNo').value = shop.dealerNo || '';
  document.getElementById('settingShopPhone').value = shop.phone || '';
  document.getElementById('settingShopAddress').value = shop.address || '';
}

async function saveShopProfile() {
  const name = document.getElementById('settingShopName').value.trim();
  const dealerNo = document.getElementById('settingDealerNo').value.trim();
  const phone = document.getElementById('settingShopPhone').value.trim();
  const address = document.getElementById('settingShopAddress').value.trim();

  await dbPut('settings', {
    key: 'shop_profile',
    value: { name, dealerNo, phone, address }
  });

  alert('Shop settings saved successfully!');
}

// Export Full Database to JSON Backup File
async function exportFullBackup() {
  try {
    const products = await dbGetAll('products');
    const customers = await dbGetAll('customers');
    const invoices = await dbGetAll('invoices');
    const purchaseOrders = await dbGetAll('purchase_orders');
    const companyPayments = await dbGetAll('company_payments');
    const customerPayments = await dbGetAll('customer_payments');
    const daybook = await dbGetAll('daybook');
    const settings = await dbGetAll('settings');

    const backupData = {
      app: 'BrightoPaintShop',
      version: '1.0',
      exportedAt: new Date().toISOString(),
      data: {
        products,
        customers,
        invoices,
        purchaseOrders,
        companyPayments,
        customerPayments,
        daybook,
        settings
      }
    };

    const jsonStr = JSON.stringify(backupData, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    const dateStr = new Date().toISOString().slice(0, 10);
    a.download = `BrightoPaint_Backup_${dateStr}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    alert('Backup exported successfully! Check your phone Downloads folder.');
  } catch (err) {
    console.error('Backup export failed:', err);
    alert('Failed to export backup: ' + err.message);
  }
}

// Restore Database from JSON Backup File
function triggerRestoreFileInput() {
  document.getElementById('restoreFileInput').click();
}

async function handleRestoreFile(e) {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = async (event) => {
    try {
      const backup = JSON.parse(event.target.result);
      if (!backup.app || backup.app !== 'BrightoPaintShop' || !backup.data) {
        throw new Error('Invalid backup file format.');
      }

      const confirmRestore = confirm('WARNING: Restoring will merge/replace existing data with the backup file.\nDo you want to continue?');
      if (!confirmRestore) return;

      const { products, customers, invoices, purchaseOrders, companyPayments, customerPayments, daybook } = backup.data;

      // Restore products
      if (products && products.length > 0) {
        const tx = db.transaction('products', 'readwrite');
        const store = tx.objectStore('products');
        for (const p of products) {
          store.put(p);
        }
      }

      // Restore customers
      if (customers && customers.length > 0) {
        const tx = db.transaction('customers', 'readwrite');
        const store = tx.objectStore('customers');
        for (const c of customers) {
          store.put(c);
        }
      }

      // Restore invoices
      if (invoices && invoices.length > 0) {
        const tx = db.transaction('invoices', 'readwrite');
        const store = tx.objectStore('invoices');
        for (const inv of invoices) {
          store.put(inv);
        }
      }

      alert('Database restored successfully!');
      location.reload();
    } catch (err) {
      alert('Restore failed: ' + err.message);
    }
  };
  reader.readAsText(file);
}

// =============================================================================
// 10. Initialization Entry Point
// =============================================================================
window.addEventListener('DOMContentLoaded', async () => {
  try {
    initTheme();
    initNavigation();

    // Register Service Worker for 100% offline functionality
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('./sw.js')
        .then(() => console.log('[PWA] Service Worker registered successfully.'))
        .catch(err => console.warn('[PWA] Service Worker registration failed:', err));
    }

    // Initialize Database & Seeds
    await openDatabase();
    await seedInitialData();

    // Setup Category Chips Event Listeners
    document.querySelectorAll('.chip').forEach(chip => {
      chip.addEventListener('click', () => {
        document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        currentCategoryFilter = chip.getAttribute('data-cat');
        renderPosProducts();
      });
    });

    // POS Search and Filter inputs
    document.getElementById('posSearchInput').addEventListener('input', renderPosProducts);
    document.getElementById('cartDiscountInput').addEventListener('input', calculateTotals);
    document.getElementById('checkoutPaidInput').addEventListener('input', updateCheckoutBalance);
    document.getElementById('invSearchInput').addEventListener('input', renderInventoryList);
    document.getElementById('invFilterSelect').addEventListener('change', renderInventoryList);
    document.getElementById('khataSearchInput').addEventListener('input', renderKhataScreen);

    // Initial Screen
    renderPosProducts();
    updateCartUI();
  } catch (err) {
    console.error('App initialization error:', err);
  }
});
