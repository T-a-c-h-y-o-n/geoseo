# GOLD Hizmet Paketi — GEO Strateji Paketi

> **Fiyat:** 8.000₺  
> **Süre:** 48 saat  
> **Garanti:** AI'da çıkmazsan ödeme yok

---

## Kullanım

Kullanıcı bir firma ismi verip "gold hizmeti yap" dediğinde, aşağıdaki adımlar sırasıyla uygulanır.

---

## Adım 1: Firma Klasörü Oluştur

```
Geo-Seo Job/{FIRMA_ADI}/
```

Firma adı ile bir klasör aç. İçine şu dosyaları oluştur:
- `GEO-AUDIT-REPORT.md` — Ana denetim raporu
- `llms.txt` — AI crawler rehber dosyası
- `robots.txt` — Robots güncelleme önerisi

---

## Adım 2: Kapsamlı GEO-SEO Denetimi

Firma web sitesini tara ve aşağıdaki analizleri yap:

### 2.1 AI Citability Skoru (0-100)
- Sitedeki içeriğin AI modelleri tarafından alıntılanabilirliğini ölç
- Her sayfa için ayrı skor ver
- Ortalama citability skoru hesapla

### 2.2 AI Erişim Analizi
- Mevcut `robots.txt` dosyasını kontrol et
- AI crawler'ların (GPTBot, Google-Extended, CCBot, anthropic-ai, PerplexityBot) siteye erişip erişemediğini tespit et
- Erişim engeli varsa nedenlerini belirt

### 2.3 Şema İşaretlemesi Analizi
- Mevcut JSON-LD yapılandırılmış veri var mı?
- Organization, WebSite, Service, FAQPage, LocalBusiness şemaları kontrol edilmeli
- Eksik şemaları listele

### 2.4 İçerik Yapısı Analizi
- Başlık hiyerarşisi (H1, H2, H3) kontrolü
- Meta description ve title etiketleri
- Entity-based content varlığı
- Citable passage'lar var mı?

---

## Adım 3: Büyüme Sızıntısı Tespiti

Aşağıdaki büyüme sızıntılarını tespit et ve raporla:

| Sızıntı Tipi | Kontrol Edilecek |
|---|---|
| AI erişim engeli | robots.txt, meta robots, HTTP headers |
| Eksik şema işaretlemesi | JSON-LD, Microdata |
| Zayıf citability | Alıntılanabilir pasaj eksikliği |
| Eksik llms.txt | AI rehber dosyası yokluğu |
| Duplicate content | Tekrarlanan içerik sorunları |
| Yavaş yükleme | Core Web Vitals |
| Mobil uyumsuzluk | Responsive tasarım |

---

## Adım 4: llms.txt Oluştur

Firma için `llms.txt` dosyası oluştur:

```markdown
# {FIRMA_ADI} — {SEKTÖR}

> {Firma açıklaması — 1-2 cümle}

## About
{Firma hakkında detaylı bilgi}

## Services
{Hizmetlerin listesi}

## Key Information
{Önemli bilgiler — fiyat, lokasyon, iletişim}

## Contact
{İletişim bilgileri}
```

---

## Adım 5: Şema İşaretlemesi Önerileri

Firma için gerekli JSON-LD şemaları öner:

### Zorunlu Şemalar
1. **Organization** — Firma bilgileri
2. **WebSite** — Site bilgileri ve arama aksiyonu
3. **LocalBusiness** — Yerel işletme bilgileri (varsa)

### Önerilen Şemalar
4. **Service** — Sunulan hizmetler
5. **FAQPage** — SSS sayfası (varsa)
6. **BreadcrumbList** — Navigasyon yapısı
7. **Article** — Blog/makale içerikleri

Her şema için JSON-LD kod bloğu hazır olarak ver.

---

## Adım 6: robots.txt Önerisi

AI crawler erişimi için robots.txt güncelleme önerisi:

```
# AI Search Engine Crawlers
User-agent: GPTBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: CCBot
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: *
Allow: /

Sitemap: https://{FIRMA_DOMAIN}/sitemap.xml
```

---

## Adım 7: İçerik Optimizasyon Önerileri

Her sayfa için:
- **Başlık optimizasyonu** — Entity-focused başlıklar
- **Citable passage'lar** — AI'ın alıntılayabileceği kısa, net paragraflar
- **FAQ bölümleri** — Soru-cevap formatında yapılandırılmış içerik
- **Yapılandırılmış veri** — Tablolar, listeler, madde işaretleri

---

## Adım 8: 30 Günlük İçerik Planı

Firma için 30 günlük içerik planı oluştur:

| Hafta | İçerik Tipi | Konu |
|---|---|---|
| 1 | Blog yazısı | Sektör ile ilgili temel bilgilendirici içerik |
| 2 | FAQ güncellemesi | Sık sorulan soruları yapılandır |
| 3 | Servis sayfası | Hizmet detaylarını optimize et |
| 4 | Blog yazısı | Long-tail keyword odaklı içerik |

---

## Teslim Edilecek Dosyalar

```
Geo-Seo Job/{FIRMA_ADI}/
├── GEO-AUDIT-REPORT.md      # Ana denetim raporu
├── llms.txt                  # AI rehber dosyası
├── robots.txt                # Robots güncelleme önerisi
├── schema-recommendations.md # Şema önerileri
└── content-plan.md           # 30 günlük içerik planı
```

---

## Rapor Formatı

`GEO-AUDIT-REPORT.md` dosyası şu bölümleri içermeli:

1. **Executive Summary** — Genel özet ve skor
2. **AI Citability Score** — Alıntılanabilirlik skoru
3. **AI Crawler Access** — AI erişim durumu
4. **Schema Markup Analysis** — Şema işaretlemesi analizi
5. **Growth Leaks** — Büyüme sızıntıları
6. **Content Optimization** — İçerik önerileri
7. **30-Day Content Plan** — İçerik planı
8. **Technical Recommendations** — Teknik öneriler

---

## Adım 9: AI Görünürlük Test Soruları

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
