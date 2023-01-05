import { SubMenuItemProps } from "../types";

export const orders = [
  {
    id: "Basic",
    name: "Basic App",
    description: "In this pack, we'll do Simple\nfrontend app with some logic",
    price: "€3,397.90",
    deliverTime: "5 Days",
    revisions: "5",
  },
  {
    id: "Standard",
    name: "Standard App",
    description:
      "In this pack, we'll do your simple frontend, login/signup\n(Firebase auth)",
    price: "€6,897.90",
    deliverTime: "5 Days",
    revisions: "6",
  },
  {
    id: "Premium",
    name: "Premium App",
    description:
      "We'll develop complete applications with testing and will upload it\non play/google store.",
    price: "€24,997.90",
    deliverTime: "60 Days",
    revisions: "8",
  },
];

export const subMenu: SubMenuItemProps[] = [
  {
    id: "app",
    icon: "phone-iphone",
    name: "React App",
    page: "reactApp"
  },
  {
    id: "website",
    icon: "devices",
    name: "Website",
    page: "website"
  },
  {
    id: "socialMedia",
    icon: "groups",
    name: "Social Media",
    page: "socialMedia"
  },
  {
    id: "virtualReality",
    icon: "view-in-ar",
    name: "Virtual Reality",
    page: "virtualReality"
  },
  {
    id: "artificialIntelligence",
    icon: "psychology",
    name: "Artificial Intelligence",
    page: "artificialIntelligence"
  },
];

export const appTypesDescription = [
  {
    id: "Basic",
    name: "Basic App",
    description: "In this pack, we'll do Simple\nfrontend app with some logic",
    price: "€3,397.90",
    functionalApp: "Functional App",
    appIcon: "App Icon",
    splashScreen: "Splash Screen",
    sourceCode: "",
    uploadContent: "",
    mobileOperatingSystems: "iOS / Android",
    deliverTime: "5 Days",
    revisions: "5",
  },
  {
    id: "Standard",
    name: "Standard App",
    description:
      "In this pack, we'll do your simple frontend, login/signup (Firebase auth)",
    price: "€6,897.90",
    functionalApp: "Functional App",
    appIcon: "App Icon",
    splashScreen: "Splash Screen",
    sourceCode: "Source Code",
    uploadContent: "Upload / Insert User Content",
    mobileOperatingSystems: "iOS / Android",
    deliverTime: "5 Days",
    revisions: "6",
  },
  {
    id: "Premium",
    name: "Premium App",
    description:
      "We'll develop complete applications with testing and will upload it on play/google store.",
    price: "€24,997.90",
    functionalApp: "Functional App",
    appIcon: "App Icon",
    splashScreen: "Splash Screen",
    sourceCode: "Source Code",
    uploadContent: "Upload / Insert User Content",
    mobileOperatingSystems: "iOS / Android",
    deliverTime: "60 Days",
    revisions: "8",
  },
];
