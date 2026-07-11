# PLATIN Hizmet Paketi — GEO Tam Dönüşüm

> **Fiyat:** 11.000₺  
> **Süre:** 5-7 iş günü  
> **Garanti:** AI'da çıkmazsan ödeme yok

---

## Kullanım

Kullanıcı bir firma ismi verip "platin hizmeti yap" dediğinde, aşağıdaki adımlar sırasıyla uygulanır.

**Not:** Platin paket, Gold paketteki tüm hizmetleri içerir. Önce `gold.md`deki adımları uygula, ardından aşağıdaki ek hizmetleri ekle.

---

## PLATIN'E ÖZGÜ EK HİZMETLER

---

## Ek 1: Blog/Makale Oluşturma (3 Adet)

Firma için 3 adet SEO-optimized blog/makale oluştur.

### Makale 1: Sektör Tanıtıcı
- **Hedef:** Sektördeki temel bilgi boşluğunu doldur
- **Uzunluk:** 1500-2000 kelime
- **Yapı:** H1, H2, H3 hiyerarşisi, FAQ section, structured data
- **Citable passages:** AI'ın alıntılayabileceği kısa, net tanımlar

### Makale 2: Hizmet Odaklı
- **Hedef:** Firmanın sunduğu hizmetleri detaylı anlat
- **Uzunluk:** 1200-1500 kelime
- **Yapı:** Problem → Çözüm → Sonuç formatı
- **Entity-rich:** Sektör terimleri, uzmanlık alanları

### Makale 3: Rehber/Liste İçeriği
- **Hedef:** "How-to" veya "Best practices" formatında rehber
- **Uzunluk:** 1000-1500 kelime
- **Yapı:** Adım adım liste, tablolar, özet kutucukları

### Her Makale İçin
- Meta title ve description
- Schema markup (Article, FAQPage)
- Internal linking önerileri
- Görsel önerileri (alt text dahil)

---

## Ek 2: İçerik Stratejisi

Firma için kapsamlı içerik stratejisi dokümanı oluştur.

### İçerik Stratejisi Bileşenleri

| Bileşen | Açıklama |
|---|---|
| **Hedef Kitle** | Persona tanımları, demografi, davranış |
| **Keyword Araştırma** | Primary, secondary, long-tail keyword listesi |
| **İçerik Haritası** | Her sayfa için hedef keyword ve içerik tipi |
| **Rakip Analizi** | Rakiplerin içerik stratejisi |
| **İçerik Takvimi** | 3 aylık yayın planı |
| **KPI Metrikleri** | Ölçülebilir hedefler |

---

## Ek 3: Sitemap.xml Oluştur

Firma için `sitemap.xml` dosyası oluştur.

### Sitemap Yapısı

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://{FIRMA_DOMAIN}/</loc>
    <lastmod>{TARIH}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://{FIRMA_DOMAIN}/hizmetler</loc>
    <lastmod>{TARIH}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <!-- Tüm sayfalar dahil -->
</urlset>
```

### Sitemap Kuralları
- Tüm indexlenebilir sayfalar dahil
- `lastmod` tarihleri güncel
- `changefreq` ve `priority` değerleri doğru atanmış
- 50.000 URL'yi aşmayacak şekilde böl (gerekirse)

---

## Ek 4: Yapılandırılmış Veri Entegrasyonu

Gold pakette önerilen şemaları şimdi **uygula**.

### Uygulanacak Şemalar

1. **Organization**
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "{FIRMA_ADI}",
  "url": "https://{FIRMA_DOMAIN}",
  "logo": "https://{FIRMA_DOMAIN}/logo.png",
  "description": "{AÇIKLAMA}",
  "address": { ... },
  "contactPoint": { ... },
  "sameAs": [ ... ]
}
```

2. **WebSite** (SearchAction dahil)
3. **LocalBusiness** (varsa fiziksel lokasyon)
4. **Service** (her hizmet için ayrı)
5. **FAQPage** (SSS sayfası için)
6. **BreadcrumbList** (tüm sayfalar için)
7. **Article** (blog yazıları için)

### Entegrasyon Notları
- Her JSON-LD `<head>` veya `<body>` içine yerleştirilecek
- Google Rich Results Test ile doğrulanacak
- Hatalı veya eksik şema bırakılmayacak

---

## Ek 5: Teknik SEO Altyapı Optimizasyonu

### 5.1 Hız Optimizasyonu
- Image optimization (WebP formatı, lazy loading)
- CSS/JS minification
- Browser caching ayarları
- CDN önerisi

### 5.2 Mobil Uyumluluk
- Responsive tasarım kontrolü
- Touch-friendly elementler
- Viewport meta etiketi

### 5.3 Güvenlik
- HTTPS zorunluluğu
- Security headers (CSP, X-Frame-Options)
- SSL sertifikası kontrolü

### 5.4 Teknik Dosyalar
- `robots.txt` güncellemesi
- `sitemap.xml` oluşturma
- `llms.txt` oluşturma
- Canonical URL'ler
- Hreflang etiketleri (çok dilli ise)

---

## Ek 6: Detaylı GEO Raporu

Kapsamlı bir GEO raporu oluştur.

### Rapor Bölümleri

1. **Executive Summary**
   - GEO skoru (0-100)
   - Öncelikli aksiyonlar
   - Tahmini etki

2. **AI Visibility Analysis**
   - ChatGPT görünürlük testi
   - Perplexity görünürlük testi
   - Google AI Overviews kontrolü
   - Brand mention taraması

3. **Citability Assessment**
   - Sayfa bazlı citability skorları
   - Alıntılanabilir pasaj analizi
   - İyileştirme önerileri

4. **Competitor Benchmarking**
   - Rakiplerin GEO durumu
   - Fırsat analizi
   - Boşluk tespiti

5. **Technical Health**
   - AI erişim durumu
   - Şema işaretlemesi sağlık raporu
   - Core Web Vitals

6. **Content Gap Analysis**
   - Eksik konular
   - Keyword fırsatları
   - İçerik önerileri

7. **90-Day Roadmap**
   - Haftalık aksiyon planı
   - Sorumluluklar
   - KPI hedefleri

---

## Ek 7: Aylık Takip ve Optimizasyon

### Aylık Takip Çerçevesi

| Metrik | Takip Sıklığı | Araç |
|---|---|---|
| AI Visibility Score | Haftalık | Manuel test + rapor |
| Brand Mentions | Haftalık | Google Alerts + AI test |
| Citability Score | Aylık | GEO audit tool |
| Schema Health | Aylık | Google Rich Results Test |
| Content Performance | Aylık | Analytics |

### Aylık Rapor İçeriği
- Önceki ay ile karşılaştırma
- Yeni tespit edilen sorunlar
- Uygulanan düzeltmeler
- Sonraki ay aksiyonları

---

## Teslim Edilecek Dosyalar

```
Geo-Seo Job/{FIRMA_ADI}/
├── GEO-AUDIT-REPORT.md          # Ana denetim raporu
├── llms.txt                      # AI rehber dosyası
├── robots.txt                    # Robots güncelleme önerisi
├── schema-recommendations.md     # Şema önerileri
├── content-plan.md               # 30 günlük içerik planı
├── sitemap.xml                   # Site haritası
├── schema-implementation.md      # Uygulanan şemalar
├── content-strategy.md           # İçerik stratejisi
├── blog/
│   ├── 01-sektor-tanitim.md      # Blog 1
│   ├── 02-hizmet-odakli.md       # Blog 2
│   └── 03-rehber-liste.md        # Blog 3
├── GEO-DETAILED-REPORT.md       # Detaylı GEO raporu
└── monthly-tracking-template.md  # Aylık takip şablonu
```

---

## Uygulama Sırası

1. Gold paketteki tüm adımları uygula (denetim, tespit, llms.txt, şema önerileri, robots.txt, içerik optimizasyonu, 30 günlük plan)
2. 3 adet blog/makale oluştur
3. İçerik stratejisi dokümanı hazırla
4. sitemap.xml oluştur
5. Şema işaretlemelerini uygula (JSON-LD kodlarını yaz)
6. Teknik SEO optimizasyonlarını uygula
7. Detaylı GEO raporu oluştur
8. Aylık takip şablonu hazırla

---

## Ek 8: AI Görünürlük Test Soruları

Firma için 15 soruluk test seti hazırla. Bu sorular ChatGPT, Perplexity ve Gemini'de çalışmadan ÖNCE ve SONRA test edilir.

### Genel Marka Bilinirliği (5 soru)
1. "{FIRMA_ADI} hakkında ne biliyorsun?"
2. "{FIRMA_ADI} güvenilir bir firma mı?"
3. "{FIRMA_ADI} hangi hizmetleri sunuyor?"
4. "{FIRMA_ADI} müşteri yorumları nasıl?"
5. "{FIRMA_ADI} ile çalışmalı mıyım?"

### Sektör ve Hizmet Odaklı (5 soru)
6. "{SEKTÖR} firmaları öner"
7. "{ŞEHİR}'de {HİZMET} veren en iyi firmalar hangileri?"
8. "{HİZMET} için güvenilir firma tavsiyesi"
9. "{SEKTÖR} alanında uzman firmalar"
10. "{HİZMET} fiyatları ne kadar?"

### Rekabet ve Karşılaştırma (3 soru)
11. "{FIRMA_ADI} ve {RAKIP_ADI} karşılaştırması"
12. "{SEKTÖR}'de en iyi 5 firma"
13. "{HİZMET} için en uygun fiyatlı firmalar"

### Uzun Kuyruk / Lokal (2 soru)
14. "{ŞEHİR}'de {SEKTÖR} firması arıyorum"
15. "{HİZMET} için {BÖLGE} bölgesinde firma önerisi"

### Test Prosedürü
1. **Ölçüm öncesi:** Her 3 AI motorunda (ChatGPT, Perplexity, Gemini) 15 soruyu sor
2. **Sonuçları kaydet:** Hangi soruda marka çıkıyor, alıntı yapılıyor mu?
3. **İşlem:** GEO-SEO çalışmalarını uygula
4. **Ölçüm sonrası:** Aynı 15 soruyu tekrar sor
5. **Karşılaştır:** Önceki ve sonraki sonuçları karşılaştır

### Skor Hesaplama
- **Başlangıç skoru:** 15 sorudan kaçında marka çıktı (X/15)
- **Bitiş skoru:** 15 sorudan kaçında marka çıktı (Y/15)
- **Gelişim:** ((Y - X) / X) × 100 = % artış
- **AI Visibility Score:** (Y / 15) × 100 = 0-100 arası skor

### Rapor Formatı
```
| # | Soru | ChatGPT | Perplexity | Gemini | Alıntı? |
|---|------|---------|------------|--------|---------|
| 1 | ...  | ✓/✗     | ✓/✗        | ✓/✗    | ✓/✗     |
```

**Not:** Test yaparken aynı hesabı ve aynı dili kullan. Farklı oturumlar farklı sonuçlar verebilir.
