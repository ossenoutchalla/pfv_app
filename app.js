// PFV App - Main JavaScript

class PFVApp {
    constructor() {
        this.affiliates = [];
        this.currentUser = {
            id: 'root',
            name: 'Vous',
            parent: null,
            directCount: 0
        };
        this.GAIN_PER_AFFILIATE = 80;
        this.MAX_DIRECT = 2;
        this.MAX_NETWORK = 16384;
        
        this.init();
    }

    init() {
        this.loadData();
        this.setupEventListeners();
        this.updateDashboard();
        this.populateParentSelect();
    }

    // Local Storage
    loadData() {
        const saved = localStorage.getItem('pfv_affiliates');
        if (saved) {
            this.affiliates = JSON.parse(saved);
        }
    }

    saveData() {
        localStorage.setItem('pfv_affiliates', JSON.stringify(this.affiliates));
    }

    // Event Listeners
    setupEventListeners() {
        // Menu
        document.getElementById('menuBtn').addEventListener('click', () => {
            document.getElementById('sidebar').classList.add('active');
        });

        document.getElementById('closeBtn').addEventListener('click', () => {
            document.getElementById('sidebar').classList.remove('active');
        });

        // Navigation
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const view = link.dataset.view;
                this.switchView(view);
                
                // Close sidebar on mobile
                document.getElementById('sidebar').classList.remove('active');
            });
        });

        // Add Affiliate Form
        document.getElementById('addAffiliateForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.addAffiliate();
        });

        // Search
        document.getElementById('searchInput').addEventListener('input', (e) => {
            this.searchAffiliates(e.target.value);
        });

        // Export Buttons
        document.getElementById('exportCsvBtn').addEventListener('click', () => {
            this.exportCSV();
        });

        document.getElementById('exportTxtBtn').addEventListener('click', () => {
            this.exportRules();
        });

        document.getElementById('exportReportBtn').addEventListener('click', () => {
            this.exportReport();
        });
    }

    // View Management
    switchView(viewName) {
        // Update views
        document.querySelectorAll('.view').forEach(view => {
            view.classList.remove('active');
        });
        document.getElementById(`view-${viewName}`).classList.add('active');

        // Update nav
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });
        document.querySelector(`[data-view="${viewName}"]`).classList.add('active');

        // Refresh data if needed
        if (viewName === 'dashboard') {
            this.updateDashboard();
        } else if (viewName === 'affilies') {
            this.displayAffiliates();
        } else if (viewName === 'ajouter') {
            this.populateParentSelect();
        }
    }

    // Affiliate Management
    addAffiliate() {
        const name = document.getElementById('affiliateName').value.trim();
        const contact = document.getElementById('affiliateContact').value.trim();
        const parentId = document.getElementById('affiliateParent').value;

        // Validation
        if (!name || !contact || !parentId) {
            this.showToast('Veuillez remplir tous les champs', 'error');
            return;
        }

        // Check parent's direct count
        const parent = this.findAffiliate(parentId);
        if (parent && parent.directCount >= this.MAX_DIRECT) {
            this.showToast(`${parent.name} a déjà atteint la limite de ${this.MAX_DIRECT} affiliés directs`, 'error');
            return;
        }

        // Check network limit
        if (this.affiliates.length >= this.MAX_NETWORK) {
            this.showToast(`Limite du réseau atteinte (${this.MAX_NETWORK} affiliés)`, 'error');
            return;
        }

        // Create new affiliate
        const newAffiliate = {
            id: this.generateId(),
            name: name,
            contact: contact,
            parent: parentId,
            directCount: 0,
            joinedAt: new Date().toISOString()
        };

        this.affiliates.push(newAffiliate);

        // Update parent's direct count
        if (parent) {
            parent.directCount++;
        } else if (parentId === 'root') {
            this.currentUser.directCount++;
        }

        this.saveData();
        this.showToast(`${name} a été ajouté avec succès!`, 'success');
        
        // Reset form
        document.getElementById('addAffiliateForm').reset();
        
        // Update dashboard
        this.updateDashboard();
        this.populateParentSelect();
    }

    findAffiliate(id) {
        if (id === 'root') return this.currentUser;
        return this.affiliates.find(a => a.id === id);
    }

    generateId() {
        return 'aff_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    }

    // Dashboard
    updateDashboard() {
        const totalAffiliates = this.affiliates.length;
        const totalGains = totalAffiliates * this.GAIN_PER_AFFILIATE;
        const directAffiliates = this.currentUser.directCount;
        const level = this.calculateNetworkLevel();

        document.getElementById('totalAffiliates').textContent = totalAffiliates;
        document.getElementById('totalGains').textContent = totalGains.toLocaleString() + ' FCFA';
        document.getElementById('directAffiliates').textContent = `${directAffiliates}/${this.MAX_DIRECT}`;
        document.getElementById('networkLevel').textContent = `Niveau ${level}`;

        this.renderNetworkTree();
    }

    calculateNetworkLevel() {
        const total = this.affiliates.length;
        if (total === 0) return 0;
        if (total <= 2) return 1;
        if (total <= 6) return 2;
        if (total <= 14) return 3;
        if (total <= 30) return 4;
        if (total <= 62) return 5;
        return Math.min(Math.floor(Math.log2(total + 1)), 14);
    }

    renderNetworkTree() {
        const tree = document.getElementById('networkTree');
        tree.innerHTML = '';

        // Level 0 - Root (You)
        const level0 = document.createElement('div');
        level0.className = 'tree-level';
        level0.innerHTML = `
            <div class="tree-node root">
                <div class="node-content">Vous</div>
                <div style="font-size: 0.75rem; color: var(--color-text-muted); margin-top: 4px;">
                    ${this.currentUser.directCount}/2
                </div>
            </div>
        `;
        tree.appendChild(level0);

        // Level 1 - Direct affiliates
        const directAffiliates = this.affiliates.filter(a => a.parent === 'root');
        if (directAffiliates.length > 0) {
            const level1 = document.createElement('div');
            level1.className = 'tree-level';
            
            directAffiliates.forEach(affiliate => {
                const node = document.createElement('div');
                node.className = 'tree-node';
                node.innerHTML = `
                    <div class="node-content">${affiliate.name}</div>
                    <div style="font-size: 0.75rem; color: var(--color-text-muted); margin-top: 4px;">
                        ${affiliate.directCount}/2
                    </div>
                `;
                level1.appendChild(node);
            });
            
            tree.appendChild(level1);
        }

        // Level 2 - Show count only
        const level2Count = this.affiliates.filter(a => {
            const parent = this.affiliates.find(p => p.id === a.parent);
            return parent && parent.parent === 'root';
        }).length;

        if (level2Count > 0) {
            const level2 = document.createElement('div');
            level2.className = 'tree-level';
            level2.innerHTML = `
                <div class="tree-node">
                    <div class="node-content">+${level2Count} affiliés</div>
                    <div style="font-size: 0.75rem; color: var(--color-text-muted); margin-top: 4px;">
                        Niveau 2
                    </div>
                </div>
            `;
            tree.appendChild(level2);
        }
    }

    // Affiliates Display
    displayAffiliates(filter = '') {
        const container = document.getElementById('affiliatesList');
        
        if (this.affiliates.length === 0) {
            container.innerHTML = `
                <div class="empty-state">
                    <div class="empty-icon">📭</div>
                    <p>Aucun affilié pour le moment</p>
                    <p class="empty-subtitle">Commencez par ajouter votre premier affilié</p>
                </div>
            `;
            return;
        }

        const filtered = this.affiliates.filter(a => 
            a.name.toLowerCase().includes(filter.toLowerCase()) ||
            a.contact.toLowerCase().includes(filter.toLowerCase())
        );

        if (filtered.length === 0) {
            container.innerHTML = `
                <div class="empty-state">
                    <div class="empty-icon">🔍</div>
                    <p>Aucun résultat trouvé</p>
                </div>
            `;
            return;
        }

        container.innerHTML = filtered.map(affiliate => `
            <div class="affiliate-item">
                <div class="affiliate-info">
                    <h3>${affiliate.name}</h3>
                    <p>📞 ${affiliate.contact}</p>
                    <p style="font-size: 0.75rem; color: var(--color-text-muted);">
                        Affilié à: ${this.getParentName(affiliate.parent)} | 
                        Sous-réseau: ${affiliate.directCount}/2
                    </p>
                </div>
                <div class="affiliate-gain">
                    ${this.calculateAffiliateGain(affiliate.id)} FCFA
                </div>
            </div>
        `).join('');
    }

    getParentName(parentId) {
        if (parentId === 'root') return 'Vous';
        const parent = this.affiliates.find(a => a.id === parentId);
        return parent ? parent.name : 'Inconnu';
    }

    calculateAffiliateGain(affiliateId) {
        // Calculate total affiliates under this person
        let count = 0;
        const countChildren = (id) => {
            const children = this.affiliates.filter(a => a.parent === id);
            count += children.length;
            children.forEach(child => countChildren(child.id));
        };
        countChildren(affiliateId);
        return count * this.GAIN_PER_AFFILIATE;
    }

    searchAffiliates(query) {
        this.displayAffiliates(query);
    }

    // Parent Select Population
    populateParentSelect() {
        const select = document.getElementById('affiliateParent');
        select.innerHTML = '<option value="">-- Sélectionner --</option>';

        // Add root if has space
        if (this.currentUser.directCount < this.MAX_DIRECT) {
            select.innerHTML += `<option value="root">Vous (${this.currentUser.directCount}/${this.MAX_DIRECT})</option>`;
        }

        // Add affiliates with space
        this.affiliates.forEach(affiliate => {
            if (affiliate.directCount < this.MAX_DIRECT) {
                select.innerHTML += `
                    <option value="${affiliate.id}">
                        ${affiliate.name} (${affiliate.directCount}/${this.MAX_DIRECT})
                    </option>
                `;
            }
        });
    }

    // Export Functions
    exportCSV() {
        if (this.affiliates.length === 0) {
            this.showToast('Aucune donnée à exporter', 'warning');
            return;
        }

        let csv = 'ID,Nom,Contact,Affilié à,Affiliés directs,Date d\'inscription,Gains\n';
        
        this.affiliates.forEach(affiliate => {
            const gain = this.calculateAffiliateGain(affiliate.id);
            csv += `"${affiliate.id}","${affiliate.name}","${affiliate.contact}","${this.getParentName(affiliate.parent)}",${affiliate.directCount},"${new Date(affiliate.joinedAt).toLocaleDateString()}",${gain}\n`;
        });

        this.downloadFile(csv, 'pfv_affilies.csv', 'text/csv');
        this.showToast('Export CSV réussi!', 'success');
    }

    exportRules() {
        const rules = `REGLES OFFICIELLES PFV (Plan Financier de Vie)

1. STRUCTURE
- Chaque membre peut avoir au maximum 2 affiliés directs.
- La croissance suit une logique binaire : 1, 2, 4, 8, 16, ... jusqu'à 16384 affiliés.

2. CALCUL DES GAINS
- Gain de base par affilié : 80 FCFA.
- Gain total = nombre_affiliés x 80 FCFA.
- Les gains sont calculés automatiquement par le système.

3. INSCRIPTION
- Un affilié doit fournir un nom et un contact valide.
- Aucun compte fictif n'est autorisé.

4. LIMITES
- Le système est plafonné à 16384 affiliés par réseau.
- Aucun affilié ne peut dépasser 2 directs.

5. EXPORT
- Les données peuvent être exportées en CSV.
- Les règles peuvent être exportées en TXT.

6. GOUVERNANCE
- Un administrateur valide les règles.
- Toute modification de la logique PFV invalide le système officiel.

VERSION: 1.0
STATUT: VERROUILLÉ
DATE: ${new Date().toLocaleDateString()}

FIN DES REGLES.`;

        this.downloadFile(rules, 'pfv_regles.txt', 'text/plain');
        this.showToast('Export TXT réussi!', 'success');
    }

    exportReport() {
        const totalAffiliates = this.affiliates.length;
        const totalGains = totalAffiliates * this.GAIN_PER_AFFILIATE;
        const level = this.calculateNetworkLevel();

        const report = `╔═══════════════════════════════════════════════╗
║         RAPPORT PFV - PLAN FINANCIER DE VIE         ║
╚═══════════════════════════════════════════════╝

DATE DU RAPPORT: ${new Date().toLocaleString()}

═══════════════════════════════════════════════

📊 STATISTIQUES GLOBALES
───────────────────────────────────────────────
Total affiliés:          ${totalAffiliates}
Gains totaux:            ${totalGains.toLocaleString()} FCFA
Affiliés directs:        ${this.currentUser.directCount}/2
Niveau du réseau:        ${level}

═══════════════════════════════════════════════

👥 DÉTAIL DES AFFILIÉS
───────────────────────────────────────────────
${this.affiliates.map((a, i) => `
${i + 1}. ${a.name}
   📞 ${a.contact}
   Affilié à: ${this.getParentName(a.parent)}
   Sous-réseau: ${a.directCount}/2
   Gains: ${this.calculateAffiliateGain(a.id)} FCFA
   Inscription: ${new Date(a.joinedAt).toLocaleDateString()}
`).join('\n')}

═══════════════════════════════════════════════

📋 RÈGLES SYSTÈME
───────────────────────────────────────────────
✓ Maximum 2 affiliés directs par membre
✓ Gain: 80 FCFA par affilié
✓ Plafond réseau: 16,384 affiliés
✓ Structure binaire stricte

═══════════════════════════════════════════════

PFV Version 1.0 - SYSTÈME VERROUILLÉ
Généré automatiquement par PFV App
`;

        this.downloadFile(report, 'pfv_rapport.txt', 'text/plain');
        this.showToast('Rapport généré avec succès!', 'success');
    }

    downloadFile(content, filename, type) {
        const blob = new Blob([content], { type: type });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    // Toast Notifications
    showToast(message, type = 'success') {
        const container = document.getElementById('toastContainer');
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.textContent = message;
        
        container.appendChild(toast);
        
        setTimeout(() => {
            toast.style.opacity = '0';
            setTimeout(() => {
                container.removeChild(toast);
            }, 300);
        }, 3000);
    }
}

// Initialize App
const app = new PFVApp();
