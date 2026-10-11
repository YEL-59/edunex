import { NavItem } from "@/types";

export const navigationData: NavItem[] = [
  {
    title: "Home",
    href: "/",
    hasDropdown: true,
    subItems: [
      { title: "Course marketplace", href: "/" },
      { title: "Coaching platform", href: "/home-2" },
      { title: "Career academy", href: "/home-3" },
      { title: "Creative skill hub", href: "/home-4" },
    ],
  },
  {
    title: "Pages",
    href: "#",
    hasDropdown: true,
    subItems: [
      { title: "About us", href: "/about" },
      { title: "Instructor", href: "/instructor" },
      { title: "Instructor details", href: "/instructor-details" },
      { title: "Event", href: "/event" },
      { title: "Event details", href: "/event-details" },
      {
        title: "Shop",
        href: "/shop",
        subItems: [
          { title: "Shop", href: "/shop" },
          { title: "Shop details", href: "/shop-details" },
          { title: "Cart", href: "/cart" },
          { title: "Wishlist", href: "/wishlist" },
          { title: "Checkout", href: "/checkout" },
        ],
      },
      {
        title: "My account",
        href: "/login",
        subItems: [
          { title: "Login", href: "/login" },
          { title: "Sign in", href: "/sign-in" },
          { title: "Forgot password", href: "/forgot-password" },
        ],
      },
      { title: "FAQ", href: "/faq" },
      { title: "Pricing", href: "/pricing" },
      { title: "Privacy policy", href: "/privacy-policy" },
      { title: "Error 404", href: "/error-404" },
      { title: "Coming soon", href: "/coming-soon" },
    ],
  },
  {
    title: "Courses",
    href: "#",
    hasDropdown: true,
    subItems: [
      { title: "Courses with topbar", href: "/courses" },
      { title: "Courses with sidebar", href: "/courses-sidebar" },
      { title: "Course details", href: "/courses-details" },
      { title: "Course details 2", href: "/courses-details-2" },
    ],
  },
  {
    title: "Blog",
    href: "#",
    hasDropdown: true,
    subItems: [
      { title: "Blog grid", href: "/blog" },
      { title: "Blog standard", href: "/blog-standard" },
      { title: "Blog details", href: "/blog-details" },
    ],
  },
  {
    title: "Contact",
    href: "/contact",
  },
];
