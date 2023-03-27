import { DeepPartial, ITranslation } from "@declarations";

export const en: DeepPartial<ITranslation> = {
  common: {},
  pages: {
    home: {
      hero: [
        {
          supTitle: "Welcome to GreenShop",
          title: "Let’s Make a Better <span>Planet</span></>",
          description:
            "We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!",
          poster: {
            _id: "1",
            url: "/images/banner/1/img@1x.png",
            meta: {
              name: "Beach Spider Lily",
              type: "image",
              alt: "Beach Spider Lily",
              title: "Beach Spider Lily"
            }
          }
        },
        {
          supTitle: "Welcome to GreenShop",
          title: "Let’s Make a Better <span>Planet</span></>",
          description:
            "We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!",
          poster: {
            _id: "1",
            url: "/images/banner/1/img@1x.png",
            meta: {
              name: "Beach Spider Lily",
              type: "image",
              alt: "Beach Spider Lily",
              title: "Beach Spider Lily"
            }
          }
        },
        {
          supTitle: "Welcome to GreenShop",
          title: "Let’s Make a Better <span>Planet</span></>",
          description:
            "We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!",
          poster: {
            _id: "1",
            url: "/images/banner/1/img@1x.png",
            meta: {
              name: "Beach Spider Lily",
              type: "image",
              alt: "Beach Spider Lily",
              title: "Beach Spider Lily"
            }
          }
        }
      ],
      blog: {
        title: "Our Blog Posts",
        description: "We are an online plant shop offering a wide range of cheap and trendy plants. "
      },
      products: {
        categoryTitle: "Categories",
        priceTitle: "Price Range",
        sizeTitle: "Size",
        resetAll: "Reset all",
        sortBy: "Sort by:",
        all: "All Plants",
        new: "New Arrivals",
        sale: "Sale",
        empty: "Unfortunately, we don't have products with that filter"
      }
    },
    cart: {
      headers: ["Products", "Price", "Quantity", "Total"]
    }
  },
  navigation: {
    "": "Home",
    shop: "Shop",
    care: "Plant Care",
    blogs: "Blogs"
  },
  btn: {
    join: "Join",
    apply: "Apply",
    filter: "Filter",
    login: "Login",
    readMore: "Read More",
    shopNow: "Shop now",
    register: "Register",
    googleContinue: "Continue with Google",
    facebookContinue: "Continue with Facebook",
    address: "Save Address"
  },
  alts: {
    closeModal: "Close modal window",
    instagram: "Go to Instagram",
    youtube: "Go to Youtube",
    linkedin: "Go to Linkedin",
    twitter: "Go to Twitter",
    facebook: "Go to Facebook",
    goToMain: "Go to the main page",
    openMenu: "Open navigation menu",
    closeMenu: "Close navigation menu"
  },
  ariaLabels: {
    drawerOpen: "Open mobile menu",
    drawerClose: "Close mobile menu"
  },
  socials: {
    instagram: { label: "Instagram", link: "https://www.instagram.com/" },
    linkedin: { label: "Linkedin", link: "https://www.linkedin.com/" },
    twitter: { label: "Twitter", link: "https://twitter.com/?lang=en" },
    youtube: { label: "Youtube", link: "https://www.youtube.com/" },
    facebook: { label: "Facebook", link: "https://www.facebook.com/" }
  },
  footer: {
    newsLetters: "Would you like to join newsletters?",
    newsLettersDesc:
      "We usually post offers and challenges in newsletter. We’re your online houseplant destination. We offer a wide range of houseplants and accessories shipped directly from our (green)house to yours!",
    social: "Social Media",
    accept: "We accept",
    copyright: "© 2023 GreenShop. All Rights Reserved.",
    advantages: {
      garden: {
        title: "Garden Care",
        desc: "We are an online plant shop offering a wide range of cheap and trendy plants."
      },
      plant: {
        title: "Plant Renovation",
        desc: "We are an online plant shop offering a wide range of cheap and trendy plants."
      },
      watering: {
        title: "Watering Graden",
        desc: "We are an online plant shop offering a wide range of cheap and trendy plants."
      }
    }
  },
  footerLinks: [
    {
      title: "My Account",
      list: [
        { label: "My Account", link: "/account" },
        { label: "Our stories", link: "/stories" },
        { label: "Contact us", link: "/contact" },
        { label: "Career", link: "/career" },
        { label: "Specials", link: "/specials" }
      ]
    },
    {
      title: "Help & Guide",
      list: [
        { label: "Help Center", link: "/help-center" },
        { label: "How to Buy", link: "/how-to-buy" },
        { label: "Shipping & Delivery", link: "/shipping" },
        { label: "Product Policy", link: "/policy" },
        { label: "How to Return", link: "/how-to-return" }
      ]
    },
    {
      title: "Categories",
      list: [
        { label: "House Plants", link: "/products/house-plants" },
        { label: "Potter Plants", link: "/products/potter-plants" },
        { label: "Seeds", link: "/products/seeds" },
        { label: "Small Plants", link: "/products/small-plants" },
        { label: "Accessories", link: "/products/accessories" }
      ]
    }
  ],
  contacts: {
    site: "70 West Buckingham Ave. Farmingdale, NY 11735",
    email: "contact@greenshop.com",
    phone: "+88 01911 717 490"
  },
  forms: {
    username: {
      placeholder: "Username"
    },
    password: {
      placeholder: "Password"
    },
    confirmPassword: {
      placeholder: "Confirm Password"
    },
    email: {
      placeholder: "Enter your email address"
    },
    coupon: {
      placeholder: "Enter coupon code here..."
    }
  },
  validation: {
    required: "Required field",
    email: "Invalid email",
    phone: "Invalid phone"
  },
  sort: {
    default: "Default sorting",
    priceDesc: "From expensive",
    priceAsc: "From cheapest"
  }
};
