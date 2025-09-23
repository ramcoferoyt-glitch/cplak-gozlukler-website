# Çıplak Gösteren Gözlükler - Deployment Rehberi

## Proje Yapısı

```
cplak_gozlukler_website/          # Frontend (Next.js)
├── src/
│   ├── app/                      # Next.js App Router
│   ├── components/               # React bileşenleri
│   ├── lib/                      # Yardımcı fonksiyonlar
│   └── data/                     # Statik veriler
├── public/                       # Statik dosyalar
└── package.json

cplak_gozlukler_api/              # Backend (Flask)
├── src/
│   ├── models/                   # Veritabanı modelleri
│   ├── routes/                   # API endpoints
│   └── main.py                   # Ana Flask uygulaması
└── requirements.txt
```

## Deployment Seçenekleri

### 1. Vercel (Önerilen - Frontend)

#### Avantajlar
- Next.js için optimize edilmiş
- Otomatik SSL sertifikası
- Global CDN
- Serverless functions desteği
- Git entegrasyonu

#### Deployment Adımları
```bash
# 1. Vercel CLI kurulumu
npm install -g vercel

# 2. Proje dizininde
cd cplak_gozlukler_website
vercel

# 3. Ayarları yapılandır
# - Framework: Next.js
# - Build Command: npm run build
# - Output Directory: .next
```

### 2. Netlify (Alternatif - Frontend)

#### Deployment Adımları
```bash
# 1. Build komutu
npm run build

# 2. Netlify'da yeni site oluştur
# 3. Build settings:
# - Build command: npm run build
# - Publish directory: .next
```

### 3. Railway (Backend API)

#### Avantajlar
- Flask için optimize edilmiş
- PostgreSQL veritabanı desteği
- Otomatik deployment
- Environment variables

#### Deployment Adımları
```bash
# 1. Railway CLI kurulumu
npm install -g @railway/cli

# 2. Proje dizininde
cd cplak_gozlukler_api
railway login
railway init
railway up
```

### 4. Heroku (Alternatif - Backend)

#### Deployment Adımları
```bash
# 1. Heroku CLI kurulumu
# 2. Proje dizininde
cd cplak_gozlukler_api
heroku create cplak-gozlukler-api
git push heroku main
```

## Environment Variables

### Frontend (.env.local)
```env
NEXT_PUBLIC_API_URL=https://your-api-domain.com
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...
NEXT_PUBLIC_GUMROAD_SELLER_ID=your_seller_id
NEXT_PUBLIC_ANALYTICS_ID=G-XXXXXXXXXX
```

### Backend (.env)
```env
DATABASE_URL=postgresql://user:pass@host:port/db
STRIPE_SECRET_KEY=sk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...
GUMROAD_ACCESS_TOKEN=your_access_token
EMAIL_API_KEY=your_email_api_key
SECRET_KEY=your_secret_key
```

## Veritabanı Kurulumu

### PostgreSQL (Production)
```sql
-- Veritabanı oluşturma
CREATE DATABASE cplak_gozlukler;

-- Kullanıcı oluşturma
CREATE USER app_user WITH PASSWORD 'secure_password';
GRANT ALL PRIVILEGES ON DATABASE cplak_gozlukler TO app_user;
```

### Migration
```bash
# Flask uygulamasında
python -c "from src.main import app; app.app_context().push(); from src.models.user import db; db.create_all()"
```

## SSL ve Domain Kurulumu

### Domain Bağlama
1. DNS ayarlarında A record ekle
2. Vercel/Netlify'da custom domain ekle
3. SSL sertifikası otomatik oluşturulur

### Cloudflare (Önerilen)
- DNS yönetimi
- DDoS koruması
- Caching
- Analytics

## Monitoring ve Analytics

### Google Analytics 4
```javascript
// gtag.js entegrasyonu
gtag('config', 'G-XXXXXXXXXX');
```

### Sentry (Hata Takibi)
```bash
npm install @sentry/nextjs
```

### Uptime Monitoring
- UptimeRobot
- Pingdom
- StatusCake

## Backup Stratejisi

### Veritabanı Backup
```bash
# Günlük otomatik backup
pg_dump $DATABASE_URL > backup_$(date +%Y%m%d).sql
```

### Kod Backup
- Git repository (GitHub/GitLab)
- Otomatik deployment pipeline

## Güvenlik Checklist

### Frontend
- [ ] HTTPS zorunlu
- [ ] CSP headers
- [ ] XSS koruması
- [ ] Input validation

### Backend
- [ ] Rate limiting
- [ ] SQL injection koruması
- [ ] Authentication tokens
- [ ] CORS yapılandırması

## Performance Optimization

### Frontend
- [ ] Image optimization
- [ ] Code splitting
- [ ] Lazy loading
- [ ] CDN kullanımı

### Backend
- [ ] Database indexing
- [ ] Caching (Redis)
- [ ] API rate limiting
- [ ] Connection pooling

## SEO Kurulumu

### Google Search Console
1. Site ownership doğrulama
2. Sitemap gönderimi
3. URL inspection

### Sitemap Oluşturma
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://ciplakgosterengozlukler.com/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <!-- Diğer sayfalar -->
</urlset>
```

## Maintenance

### Günlük Görevler
- [ ] Backup kontrolü
- [ ] Error log kontrolü
- [ ] Performance monitoring

### Haftalık Görevler
- [ ] Security updates
- [ ] Dependency updates
- [ ] Analytics review

### Aylık Görevler
- [ ] Full backup test
- [ ] Security audit
- [ ] Performance optimization

## Support ve Documentation

### Teknik Dokümantasyon
- API documentation
- Component library
- Deployment procedures

### Kullanıcı Desteği
- FAQ sayfası
- İletişim formu
- Canlı destek entegrasyonu

## Maliyet Tahmini

### Hosting (Aylık)
- Vercel Pro: $20
- Railway: $5-20
- Domain: $10-15/yıl
- SSL: Ücretsiz

### Toplam: ~$30-50/ay

Bu rehber, web sitesinin production ortamına başarılı bir şekilde deploy edilmesi için gerekli tüm adımları içermektedir.



## GitHub Entegrasyonu

### Frontend (Vercel)

Vercel, GitHub ile sorunsuz bir entegrasyon sunar. Repository'nizi Vercel'e bağladığınızda, her `git push` işleminde otomatik olarak yeni bir deployment tetiklenir.

1. Vercel hesabınıza giriş yapın.
2. Yeni bir proje oluşturun veya mevcut bir projeyi içe aktarın.
3. GitHub repository'nizi seçin (`ramcoferoyt-glitch/cplak-gozlukler-website`).
4. Proje ayarlarını (framework preset: Next.js, build command: `npm run build`, output directory: `.next`) doğrulayın.
5. Ortam değişkenlerini Vercel proje ayarlarından ekleyin.
6. Deployment'ı başlatın.

### Backend (Railway)

Railway de GitHub entegrasyonunu destekler. Repository'nizi Railway'e bağlayarak otomatik deployment'lar ayarlayabilirsiniz.

1. Railway hesabınıza giriş yapın.
2. Yeni bir proje oluşturun ve 'Deploy from GitHub Repo' seçeneğini seçin.
3. GitHub repository'nizi seçin (`ramcoferoyt-glitch/cplak-gozlukler-api`).
4. Railway, `requirements.txt` dosyanızı algılayarak otomatik olarak bir Python ortamı kuracaktır.
5. Ortam değişkenlerini Railway proje ayarlarından ekleyin.
6. Deployment'ı başlatın.


