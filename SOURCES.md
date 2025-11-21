# Data Sources & Attribution

This document lists all data sources used to create the HERE AND NOW AI Leadership Team Profile Website, including successful extractions, failed attempts, and placeholder content.

## 📊 Data Source Summary

| Source Type | Status | Notes |
|-------------|--------|-------|
| Official Website | ❌ Failed | HTTP 522 error (connection timeout) |
| Web Search | ✅ Success | Retrieved company overview and team structure |
| PDF Profiles | ⚠️ Partial | PDFs available but extraction tools unavailable |
| Team Photos | ✅ Success | All team member photos available in assets |

---

## 🌐 Web Sources

### Official Website Scraping Attempts

#### hereandnowai.com (Main Site)
- **URL**: https://hereandnowai.com
- **Status**: ❌ Failed
- **Error**: HTTP 522 (Connection timed out)
- **Attempted**: 2025-11-21
- **Impact**: Could not extract company mission statement, detailed team bios, or official contact information

#### hereandnowai.com/about
- **URL**: https://hereandnowai.com/about
- **Status**: ❌ Failed
- **Error**: HTTP 522 (Connection timed out)
- **Attempted**: 2025-11-21
- **Impact**: Could not access detailed company history or values

### Web Search Results

#### Google Web Search - "HERE AND NOW AI company website about team"
- **Status**: ✅ Success
- **Date**: 2025-11-21
- **Source**: Vertex AI Search (Google)
- **Information Retrieved**:
  - Company name: HERE AND NOW AI
  - Type: Artificial Intelligence Research Institute
  - Location: Chennai, India
  - Founded: 2018
  - Leadership structure:
    - Ruthran Raghavan - CEO & Chief AI Scientist
    - Deepti Balagopal - COO
    - Balaji Kamalakkannan - CTO
  - Mission areas:
    - AI Education
    - Enterprise-grade AI applications (CRMs, ERPs, chatbots)
    - Advanced AI research and development
    - Development of autonomous "Robot Professor"
    - Agentic innovation using MCP and A2A protocols
- **Referenced URLs**:
  - hereandnowai.com (via Vertex AI redirect)
  - github.io (company GitHub pages)

---

## 📄 PDF Profile Documents

### Ruthran Raghavan

#### Profile-corporate-Ruthran-RAGHAVAN-HERE-AND-NOW-ai-v3.2.pdf
- **File Path**: `assets/profiles/Profile-corporate-Ruthran-RAGHAVAN-HERE-AND-NOW-ai-v3.2.pdf`
- **File Size**: 2,465,236 bytes (~2.4 MB)
- **Status**: ⚠️ Available but not extracted
- **Extraction Attempted**: Yes
- **Extraction Tools Tried**:
  - `pdftotext` - Not installed on system
  - `PyPDF2` (Python) - Module not found
- **Content Used**: Placeholder content based on role and web search data
- **Note**: PDF is available for download on the website

### Deepti Balagopal

#### Profile-of-Language-Educator-Innovator-Director-Deepti-BALAGOPAL-V1.3.pdf
- **File Path**: `assets/profiles/Profile-of-Language-Educator-Innovator-Director-Deepti-BALAGOPAL-V1.3.pdf`
- **File Size**: 559,091 bytes (~559 KB)
- **Status**: ⚠️ Available but not extracted
- **Extraction Attempted**: Yes
- **Extraction Tools Tried**:
  - `pdftotext` - Not installed on system
  - `PyPDF2` (Python) - Module not found
- **Content Used**: Placeholder content highlighting language education background and operational role
- **Notable**: Filename indicates "Language Educator Innovator Director" designation
- **Note**: PDF is available for download on the website

### Balaji Kamalakkannan

#### profile-of-balaji-kamalakkannan-cto-here-and-now-ai.pdf
- **File Path**: `assets/profiles/profile-of-balaji-kamalakkannan-cto-here-and-now-ai.pdf`
- **File Size**: 288,142 bytes (~288 KB)
- **Status**: ⚠️ Available but not extracted
- **Extraction Attempted**: Yes
- **Extraction Tools Tried**:
  - `pdftotext` - Not installed on system
  - `PyPDF2` (Python) - Module not found
- **Content Used**: Placeholder content based on CTO role and technical leadership
- **Note**: PDF is available for download on the website

---

## 🖼️ Image Assets

All team member photos and branding assets were successfully located and used.

### Team Member Photos

#### Ruthran Raghavan
- **File**: `Ruthran Raghavan, CEO & Chief AI Scientist.jpeg`
- **Path**: `assets/images/Ruthran Raghavan, CEO & Chief AI Scientist.jpeg`
- **Size**: 69,031 bytes (~69 KB)
- **Status**: ✅ Used
- **Usage**: Bubble button and modal profile image

#### Deepti Balagopal
- **File**: `Deepti Balagopal, COO.jpeg`
- **Path**: `assets/images/Deepti Balagopal, COO.jpeg`
- **Size**: 37,627 bytes (~37 KB)
- **Status**: ✅ Used
- **Usage**: Bubble button and modal profile image

#### Balaji Kamalakkannan
- **File**: `Balaji Kamalakkannan, CTO.jpeg`
- **Path**: `assets/images/Balaji Kamalakkannan, CTO.jpeg`
- **Size**: 122,257 bytes (~122 KB)
- **Status**: ✅ Used
- **Usage**: Bubble button and modal profile image

### Branding & Assets

#### Company Logo
- **File**: `logo-here-and-now-ai.png`
- **Path**: `assets/images/logo-here-and-now-ai.png`
- **Size**: 164,026 bytes (~164 KB)
- **Status**: ✅ Used
- **Usage**: Hero section logo

#### QR Codes
- **Website QR Code**: `qr-code-www.hereandnowai.com.png` (116,518 bytes) ✅ Used
- **Google Review QR Code**: `qr-code-google-review-hereandnowai.png` (165,157 bytes) ✅ Used
- **Usage**: Footer contact section

#### Additional Assets (Not Used)
- `gpt-2.jpeg` (8,794 bytes) - Available but not used in current design
- `IBM-Watson.png` (58,376 bytes) - Available but not used in current design
- `transformer architecture.png` (71,606 bytes) - Available but not used in current design

---

## 📝 Content Attribution

### Profile Biographies

Since the official PDFs could not be extracted due to missing PDF parsing tools (`pdftotext`, `PyPDF2`), all profile biographies were created using:

1. **Role Titles** - From filename and web search results
2. **Responsibilities** - Inferred from industry-standard C-level role expectations
3. **Company Mission** - From web search results
4. **Technical Focus** - From web search mentions of MCP, A2A protocols, Robot Professor project

#### Content Sources by Section:

- **Company Overview** (Hero section):
  - Founded date (2018): Web search results
  - Location (Chennai, India): Web search results
  - Mission statement: Synthesized from web search data about AI education, enterprise solutions, and research

- **Ruthran Raghavan Profile**:
  - Title: Web search + filename confirmation
  - Bio: Industry-standard CEO/Chief Scientist responsibilities + company mission
  - Achievements: Inferred from founding date and web search project mentions

- **Deepti Balagopal Profile**:
  - Title: Web search + filename confirmation
  - Background: PDF filename "Language-Educator-Innovator-Director"
  - Bio: Language education + operational leadership synthesis
  - Achievements: Inferred from COO role and AI education focus

- **Balaji Kamalakkannan Profile**:
  - Title: Web search + filename confirmation
  - Bio: CTO responsibilities + web search mentions of MCP/A2A protocols
  - Technical focus: Enterprise AI (CRM, ERP, chatbots) from web search
  - Achievements: Inferred from technical leadership role

### Contact Information

- **Email addresses**: Formatted as `[firstname]@hereandnowai.com` (standard pattern, not verified)
- **LinkedIn links**: Placeholder (`#`) - actual links not available from sources
- **Website**: https://hereandnowai.com (from web search)

---

## ⚠️ Known Limitations

1. **Website Inaccessible**: The official HERE AND NOW AI website was experiencing connection issues during data collection (HTTP 522). Future updates should re-scrape once the site is accessible.

2. **PDF Content Not Extracted**: Detailed biographical information, specific achievements, educational backgrounds, and career histories from the PDF profiles could not be extracted due to missing system tools. The PDFs remain available for download, and manual extraction or installation of PDF tools could enhance the content.

3. **Contact Details Unverified**: Email addresses follow a standard pattern but were not confirmed from official sources. LinkedIn profiles were not available from scraped data.

4. **Placeholder Content**: Some biographical details are synthesized from role expectations and company mission rather than extracted from official profiles.

---

## 🔄 Recommendations for Content Updates

1. **Re-scrape Website**: Once hereandnowai.com is accessible, extract:
   - Official mission statement
   - Detailed team bios
   - Verified contact information
   - Company history and achievements

2. **Extract PDF Content**: Install PDF extraction tools (`poppler-utils` for `pdftotext` or Python `PyPDF2`) and extract:
   - Full biographical content
   - Educational backgrounds
   - Career histories
   - Specific achievements and publications
   - Accurate contact details

3. **Verify Contact Information**: Confirm email addresses and social media profiles with the team

4. **Add Social Links**: Include actual LinkedIn, Twitter, or other professional profile URLs

---

## 📅 Document Version

- **Created**: 2025-11-21
- **Last Updated**: 2025-11-21
- **Maintainer**: HERE AND NOW AI Development Team

---

**Note**: This website was built with the best available data at the time of creation. As official sources become accessible, content should be updated to reflect accurate and detailed information from primary sources.
