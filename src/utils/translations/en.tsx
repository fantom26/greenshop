import { DeepPartial, ITranslation } from "@declarations";

export const en: DeepPartial<ITranslation> = {
  common: {},
  pages: {
    home: {
      hero: {
        supTitle: "Welcome to GreenShop",
        title: "Let’s Make a Better Planet",
        description:
          "We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!",
      },
    },
  },
  navigation: {
    home: "Home",
    shop: "Shop",
    care: "Plant Care",
    blogs: "Blogs",
  },
  btn: {
    apply: "Apply",
    login: "Login",
    register: "Register",
    googleContinue: "Continue with Google",
    facebookContinue: "Continue with Facebook",
    address: "Save Address",
  },
  alts: {
    closeModal: "Close modal window",
    instagram: "Go to Instagram",
    goToMain: "Go to the main page",
    openMenu: "Open navigation menu",
    closeMenu: "Close navigation menu",
  },
  ariaLabels: {
    drawerOpen: "Open mobile menu",
    drawerClose: "Close mobile menu",
  },
  socials: {
    instagram: "Instagram",
    linkedin: "Linkedin",
    twitter: "Twitter",
    youtube: "YouTube",
    facebook: "Facebook",
  },
  footer: {
    account: "My Account",
    help: "Help & Guide",
    categories: "Help & Guide",
    social: "Social Media",
    accept: "We accept",
    copyright: "© 2023 GreenShop. All Rights Reserved.",
  },
  forms: {
    username: {
      placeholder: "Username",
    },
    password: {
      placeholder: "Password",
    },
    confirmPassword: {
      placeholder: "Confirm Password",
    },
    email: {
      placeholder: "Enter your email address",
    },
    coupon: {
      placeholder: "Enter coupon code here...",
    },
  },
  validation: {
    required: "Required field",
    email: "Invalid email",
    phone: "Invalid phone",
  },
};
