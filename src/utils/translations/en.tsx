import { DeepPartial, ITranslation } from "@declarations";

export const en: DeepPartial<ITranslation> = {
  common: {},
  pages: {
    home: {
      hero: {
        supTitle: "Welcome to GreenShop",
        title: "Let’s Make a Better Planet",
        description:
          "We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!"
      }
    }
  },
  navigation: {
    "": "Home",
    shop: "Shop",
    care: "Plant Care",
    blogs: "Blogs"
  },
  btn: {
    apply: "Apply",
    login: "Login",
    register: "Register",
    googleContinue: "Continue with Google",
    facebookContinue: "Continue with Facebook",
    address: "Save Address"
  },
  alts: {
    closeModal: "Close modal window",
    instagram: "Go to Instagram",
    goToMain: "Go to the main page",
    openMenu: "Open navigation menu",
    closeMenu: "Close navigation menu"
  },
  ariaLabels: {
    drawerOpen: "Open mobile menu",
    drawerClose: "Close mobile menu"
  },
  socials: {
    instagram: "Instagram",
    linkedin: "Linkedin",
    twitter: "Twitter",
    youtube: "YouTube",
    facebook: "Facebook"
  },
  footer: {
    account: "My Account",
    help: "Help & Guide",
    categories: "Help & Guide",
    newsLetters: "Would you like to join newsletters?",
    newsLettersDesc:
      "We usually post offers and challenges in newsletter. We’re your online houseplant destination. We offer a wide range of houseplants and accessories shipped directly from our (green)house to yours!",
    social: "Social Media",
    accept: "We accept",
    copyright: "© 2023 GreenShop. All Rights Reserved.",
    pros: {
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
  }
};
