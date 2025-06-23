# Analytics Implementation for Aavkar Mukhwas

## Overview
This document describes the comprehensive analytics tracking system implemented for the Aavkar Mukhwas e-commerce application. The system tracks user interactions, page views, product engagement, and WhatsApp conversions to help measure business value.

## What's Being Tracked

### 1. Page Views
- **Home page views** - When users visit the main landing page
- **Category/Collection page views** - When users browse specific mukhwas categories
- **Product detail page views** - When users view individual product pages
- **Enhanced data** - Page category, collection name, product name, and current URL

### 2. Product Engagement
- **Product views** - When users view product details with pricing information
- **Category views** - When users browse category collections
- **Product interactions** - Variant selections, pricing displays

### 3. WhatsApp Conversions
- **Floating WhatsApp button** - The fixed button on all pages
- **Category card WhatsApp buttons** - Buttons on category product cards
- **Product detail WhatsApp buttons** - Inquiry buttons on product pages
- **Enhanced context** - Product name, category, price, current page

## Implementation Details

### Files Modified/Created

1. **`src/utils/analytics.ts`** - Core analytics utilities
2. **`src/components/WhatsAppButton.tsx`** - Updated with tracking
3. **`src/app/[categories]/CategoryClientPage.tsx`** - Added category and product tracking
4. **`src/app/[categories]/[subcategory]/ProductDetailClientPage.tsx`** - Added product tracking
5. **`src/app/layout.tsx`** - Enhanced Google Analytics initialization
6. **`src/hooks/useAnalytics.ts`** - Custom hooks for easy tracking

### Google Analytics Events

#### Page Views
```javascript
gtag('event', 'page_view', {
  page_title: document.title,
  page_location: window.location.href,
  page_category: 'home|category|product|other',
  collection_name: 'category-slug',
  product_name: 'product-slug'
});
```

#### Category Views
```javascript
gtag('event', 'view_item_list', {
  event_category: 'engagement',
  event_label: 'Category View',
  item_list_name: 'Category Name',
  item_list_id: 'category-slug',
  items: [{ item_id: 'category-slug', item_name: 'Category Name', item_category: 'mukhwas_category' }]
});
```

#### Product Views
```javascript
gtag('event', 'view_item', {
  event_category: 'engagement',
  event_label: 'Product View',
  currency: 'INR',
  value: productPrice,
  items: [{ 
    item_id: 'product-slug', 
    item_name: 'Product Name', 
    item_category: 'mukhwas',
    item_category2: 'parent-category',
    price: productPrice,
    currency: 'INR'
  }]
});
```

#### WhatsApp Conversions
```javascript
gtag('event', 'whatsapp_chat_started', {
  event_category: 'conversion',
  event_label: 'WhatsApp floating|category_card|product_card',
  method: 'floating|category_card|product_card',
  page_location: window.location.href,
  page_title: document.title,
  current_page: window.location.pathname,
  user_agent: navigator.userAgent,
  product_name: 'Product Name',
  category_name: 'Category Name',
  product_price: 150
});
```

## How to Use

### 1. Automatic Tracking
Most tracking is automatic and doesn't require additional code:
- Page views are tracked automatically on route changes
- Category views are tracked when category pages load
- Product views are tracked when product pages load

### 2. Manual Tracking
For custom tracking, use the utility functions:

```javascript
import { 
  trackFloatingWhatsAppClick,
  trackCategoryCardWhatsAppClick,
  trackProductCardWhatsAppClick 
} from '@/utils/analytics';

// Track WhatsApp clicks
const handleWhatsAppClick = () => {
  trackFloatingWhatsAppClick();
  // Open WhatsApp...
};
```

### 3. Using Custom Hooks
For component-level tracking:

```javascript
import { useCategoryTracking, useProductTracking } from '@/hooks/useAnalytics';

function CategoryPage({ category }) {
  useCategoryTracking(category.name, category.category);
  // ...
}

function ProductPage({ product, category }) {
  useProductTracking(product, category?.name);
  // ...
}
```

## Google Analytics Reports

### Key Metrics to Monitor

1. **Page Performance**
   - Most viewed categories and products
   - Bounce rate by page type
   - Time on page by category

2. **WhatsApp Conversion Rate**
   - Clicks per page view
   - Conversion rate by button type
   - Most effective pages for conversions

3. **Product Performance**
   - Most inquired products
   - Category engagement rates
   - Product view to inquiry conversion

4. **User Journey**
   - Entry points to WhatsApp conversions
   - Most common paths to inquiry
   - Drop-off points in the funnel

### Setting Up Custom Reports

1. **WhatsApp Conversion Funnel**
   - Page View → Product View → WhatsApp Click
   - Track conversion rates at each step

2. **Product Inquiry Heatmap**
   - Which products generate most inquiries
   - Category performance comparison

3. **Button Performance**
   - Floating vs card button effectiveness
   - A/B test different button placements

## Configuration

### Google Analytics Setup
The app uses Google Analytics 4 (GA4) with the measurement ID: `G-SWFHK3JPQK`

### Custom Dimensions (Optional)
You can set up custom dimensions in GA4 for:
- `page_category` - Type of page (home, category, product)
- `collection_name` - Category slug
- `product_name` - Product slug
- `method` - WhatsApp button type

## Maintenance

### Adding New Tracking
1. Add new tracking functions to `src/utils/analytics.ts`
2. Update TypeScript types if needed
3. Add custom hooks to `src/hooks/useAnalytics.ts` if appropriate
4. Update this documentation

### Testing
- Use Google Analytics Debugger extension
- Check GA4 Real-time reports
- Verify events in GA4 DebugView

### Monitoring
- Set up alerts for significant drops in conversion rates
- Monitor WhatsApp conversion trends weekly
- Track seasonal patterns in product inquiries

## Business Value Tracking

### Key Performance Indicators (KPIs)
1. **WhatsApp Conversion Rate** - Percentage of visitors who click WhatsApp
2. **Product Inquiry Rate** - Inquiries per product view
3. **Category Engagement** - Time spent and interactions per category
4. **Return Visitor Rate** - Percentage of repeat visitors

### Success Metrics
- Increased WhatsApp inquiries
- Higher engagement on product pages
- Better understanding of popular products
- Improved conversion funnel optimization

## Troubleshooting

### Common Issues
1. **Events not firing** - Check if `window.gtag` is available
2. **Missing data** - Verify Google Analytics is properly loaded
3. **Type errors** - Ensure proper TypeScript types are used

### Debug Steps
1. Check browser console for errors
2. Verify GA4 Real-time reports
3. Use GA4 DebugView for detailed event tracking
4. Test with Google Analytics Debugger extension

## Future Enhancements

### Potential Additions
1. **E-commerce tracking** - If online ordering is added
2. **User behavior tracking** - Scroll depth, time on page
3. **A/B testing** - Different WhatsApp button placements
4. **Advanced funnel analysis** - Multi-step conversion tracking
5. **Customer feedback tracking** - Reviews and ratings

### Integration Opportunities
1. **WhatsApp Business API** - Direct integration for better tracking
2. **CRM integration** - Link analytics to customer data
3. **Email marketing** - Track email campaign effectiveness
4. **Social media** - Track social media referral conversions 