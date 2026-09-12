# Shree Air Conditioner --- Client Requirement Flowchart

> **Project:** Shree Air Conditioner\
> **Year:** 2026--27\
> **Purpose:** Website requirement and user-flow documentation based on
> the client meeting.

------------------------------------------------------------------------

## 1. Website Structure

``` text
Shree Air Conditioner
│
├── Home
│   ├── Main Logo / Brand
│   ├── Spotlight / Hero Section
│   ├── Top Ratings
│   ├── Rate Us
│   ├── Join as Technician
│   │   └── Contact Us
│   └── More
│
├── Services
│   ├── AC Services
│   ├── Refrigerator Services
│   └── Washing Machine Services
│
├── About Us
│   ├── About SAC / Brand
│   ├── Founder Details
│   ├── Employee Details
│   ├── Office Details
│   └── Location
│
└── Contact Us
    ├── Gmail
    ├── Phone Number
    └── Contact Form
```

------------------------------------------------------------------------

## 2. Navigation

The website should have a responsive navigation system.

### Desktop

Use a **horizontal navbar** containing:

-   Brand / SAC logo
-   Home
-   Services
-   About Us
-   Contact Us

### Mobile / Tablet

Use a **responsive mobile-style navigation**, with a menu button and
vertically accessible navigation items.

### Navigation Flow

``` text
Navbar
│
├── Home
├── Services
├── About Us
└── Contact Us
```

All major pages should be accessible from the navigation.

------------------------------------------------------------------------

## 3. Home Page

The Home page should contain the main introduction and important
actions.

### Required Content

-   Main logo / branding
-   Spotlight / hero section
-   Top ratings
-   Rate Us option
-   Join as Technician option
-   Additional relevant content

### Join Our Team

The **Join as Technician** option should redirect the user toward
**Contact Us** so interested technicians can get in touch.

``` text
Home
│
├── Spotlight
├── Top Ratings
├── Rate Us
│   └── Rating Data
│
└── Join as Technician
    └── Contact Us
```

------------------------------------------------------------------------

## 4. Services

The Services page should display the available appliance services and
their pricing.

``` text
Services
│
├── AC Services
│   ├── AC Installation — ₹1199
│   ├── Re-installation — ₹1770
│   ├── AC Gas Refill — ₹2499
│   │   └── 90 Days Warranty
│   └── AC Not Working Visit — ₹472
│
├── Refrigerator Services
│   ├── Refrigerator Gas Refill — ₹2499
│   │   └── 90 Days Warranty
│   └── Refrigerator Not Working Visit — ₹472
│
└── Washing Machine Services
    ├── Washing Machine Repair
    │   └── Charges depend on the issue
    └── Washing Machine Not Working Visit — ₹472
```

> **Note:** Pricing should remain easy to update in the future because
> service charges may change.

------------------------------------------------------------------------

## 5. AC Services

  Service                  Price Notes
  ---------------------- ------- ------------------
  AC Installation          ₹1199 ---
  Re-installation          ₹1770 ---
  AC Gas Refill            ₹2499 90 Days Warranty
  AC Not Working Visit      ₹472 ---

------------------------------------------------------------------------

## 6. Refrigerator Services

  Service                            Price Notes
  -------------------------------- ------- ------------------
  Refrigerator Gas Refill            ₹2499 90 Days Warranty
  Refrigerator Not Working Visit      ₹472 ---

------------------------------------------------------------------------

## 7. Washing Machine Services

  ------------------------------------------------------------------------
  Service                                      Price Notes
  --------------------- ---------------------------- ---------------------
  Washing Machine                   Depends on issue Final charges depend
  Repair                                             on the problem

  Washing Machine Not                           ₹472 ---
  Working Visit                                      
  ------------------------------------------------------------------------

------------------------------------------------------------------------

## 8. About Us

The About Us page should provide information about the company and its
team.

### Required Information

-   SAC / Shree Air Conditioner introduction
-   Founder information
-   Employee information
-   Office details
-   Office/location information

``` text
About Us
│
├── Company Introduction
├── Founder
├── Employees
├── Office
└── Location
```

------------------------------------------------------------------------

## 9. Contact Us

The Contact Us page should provide direct contact information as well as
a form.

### Required Information

-   Gmail / Email
-   Phone number
-   Contact form

``` text
Contact Us
│
├── Gmail
├── Phone Number
└── Contact Form
    └── Submit Contact Data
```

------------------------------------------------------------------------

## 10. Ratings / Rate Us

The website should allow users to submit ratings.

``` text
User
 │
 ▼
Rate Us
 │
 ▼
Rating Form
 │
 ▼
Rating Data
 │
 ▼
Google Spreadsheet
```

Rating data should be stored separately from contact-form submissions.

------------------------------------------------------------------------

## 11. Contact Form Data

Contact-form submissions should be stored in a separate Google
Spreadsheet.

``` text
User
 │
 ▼
Contact Form
 │
 ▼
Submit
 │
 ▼
Google Spreadsheet
(Contact Data)
```

### Data Separation

``` text
Contact Form
     │
     └──► Google Sheet A
          Contact Data


Rate Us
     │
     └──► Google Sheet B
          Rating Data
```

------------------------------------------------------------------------

## 12. Global UI Requirements

### Icons

Use **Lucide Icons** throughout the website where appropriate.

Examples:

-   Home
-   Services
-   About Us
-   Contact
-   Phone
-   Mail
-   Menu
-   Star / Rating
-   Location
-   User / Team

### Branding

-   Brand name: **Shree Air Conditioner**
-   SAC should be used as the brand abbreviation where appropriate.
-   Main logo should be clearly visible.
-   Maintain consistent branding across all pages.

------------------------------------------------------------------------

## 13. Responsiveness

The entire website must be fully responsive.

### Target Devices

``` text
Desktop
   │
   ├── Large Screens
   └── Standard PC Screens

Tablet
   │
   └── Responsive Layout

Mobile
   │
   └── Mobile Layout + Responsive Navbar
```

The layout, typography, cards, navigation, forms, pricing sections and
other UI components should adapt properly to different screen sizes.

------------------------------------------------------------------------

## 14. Complete User Flow

``` text
                         SHREE AIR CONDITIONER
                                  │
                     ┌────────────┴────────────┐
                     │         NAVBAR          │
                     └────────────┬────────────┘
                                  │
          ┌───────────────────────┼────────────────────────┐
          │                       │                        │
          ▼                       ▼                        ▼
        HOME                  SERVICES                 ABOUT US
          │                       │                        │
          │               ┌───────┼────────┐              │
          │               │       │        │              │
          │               ▼       ▼        ▼              │
          │              AC    REFRIG.   WASHING          │
          │               │       │        │              │
          │               └───────┴────────┘              │
          │                                               │
          │                                               │
          └───────────────┐                       ┌───────┘
                          │                       │
                          ▼                       ▼
                    RATE US /              COMPANY INFO
                    TOP RATINGS            FOUNDER / TEAM
                          │                 OFFICE / LOCATION
                          │
                          ▼
                    GOOGLE SHEET
                    (Rating Data)

                              CONTACT US
                                  │
                         ┌────────┼────────┐
                         │        │        │
                         ▼        ▼        ▼
                       Gmail    Phone   Contact Form
                                           │
                                           ▼
                                     GOOGLE SHEET
                                     (Contact Data)
```

------------------------------------------------------------------------

## 15. Technical Requirements Summary

  Requirement              Specification
  ------------------------ --------------------------------------
  Branding                 Shree Air Conditioner
  Navigation               Home, Services, About Us, Contact Us
  Responsiveness           Mobile, Tablet and Desktop
  Desktop Navbar           Horizontal
  Mobile/Tablet Navbar     Responsive mobile-style menu
  Icons                    Lucide Icons
  Service Categories       AC, Refrigerator, Washing Machine
  Ratings                  Rate Us + Top Ratings
  Contact                  Gmail, Phone, Contact Form
  Data Storage             Google Sheets
  Rating Storage           Separate spreadsheet
  Contact Storage          Separate spreadsheet
  Technician Recruitment   Join as Technician → Contact Us

------------------------------------------------------------------------

## 16. Important Development Notes

1.  Keep service pricing data structured so it can be updated easily.
2.  Keep **rating data** and **contact data** in separate Google Sheets.
3.  Make all pages fully responsive.
4.  Use consistent Lucide icons throughout the UI.
5.  Keep the navigation accessible from every major page.
6.  The **Join as Technician** CTA should connect to the Contact Us
    flow.
7.  Service cards should clearly communicate the service name, price and
    warranty/condition where applicable.
8.  The final UI should maintain a professional and trustworthy
    service-business feel.

------------------------------------------------------------------------

## 17. Page Sitemap

``` text
/
├── /                  → Home
├── /services           → Services
│   ├── AC Services
│   ├── Refrigerator Services
│   └── Washing Machine Services
├── /about              → About Us
└── /contact            → Contact Us
```

------------------------------------------------------------------------

**© Shree Air Conditioner 2026--27**
