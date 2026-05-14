"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import AboutMetric from '@/components/sections/about/AboutMetric';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroBillboardTestimonial from '@/components/sections/hero/HeroBillboardTestimonial';
import MetricCardFourteen from '@/components/sections/metrics/MetricCardFourteen';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';
import { Award, Users, Utensils } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="expand-hover"
        defaultTextAnimation="reveal-blur"
        borderRadius="soft"
        contentWidth="mediumSmall"
        sizing="largeSmall"
        background="floatingGradient"
        cardStyle="glass-elevated"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="layered"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Menu",
          id: "products",
        },
        {
          name: "Reviews",
          id: "testimonials",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Anandha Veg"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardTestimonial
      background={{
        variant: "gradient-bars",
      }}
      title="Authentic Vegetarian Flavors in Viluppuram"
      description="Experience the traditional taste of pure vegetarian delicacies, served with love at Anandha Veg Restaurant near the historic Gandhi Statue."
      testimonials={[
        {
          name: "Ravi Kumar",
          handle: "@ravik",
          testimonial: "The best authentic south indian breakfast in Viluppuram. Simply incredible.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/adults-enjoying-mexican-food_23-2149663829.jpg?_wi=1",
          imageAlt: "authentic south indian vegetarian restaurant interior",
        },
        {
          name: "Anjali S.",
          handle: "@anjalis",
          testimonial: "Very clean, fresh food and quick service. Always my first choice.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/classic-luxury-restaurant-with-tables-chairs_140725-9388.jpg?_wi=1",
          imageAlt: "authentic south indian vegetarian restaurant interior",
        },
        {
          name: "Vikram V.",
          handle: "@vikramv",
          testimonial: "The masala dosa is perfect and coffee is just like homemade.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/collection-homegrown-vegetables-flowers-after-harvest-fro_181624-58049.jpg?_wi=1",
          imageAlt: "authentic south indian vegetarian restaurant interior",
        },
        {
          name: "Meera P.",
          handle: "@meerap",
          testimonial: "Great staff and wonderful ambience for family dinners.",
          rating: 4,
          imageSrc: "http://img.b2bpic.net/free-photo/waiter-serving-coffee-customers-while-wearing-face-mask-due-covid19-epidemic_637285-7874.jpg?_wi=1",
          imageAlt: "authentic south indian vegetarian restaurant interior",
        },
        {
          name: "Karthik D.",
          handle: "@karthikd",
          testimonial: "Best value for money. Love the hygiene standards.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-dining-tables-without-food_23-2150157792.jpg?_wi=1",
          imageAlt: "authentic south indian vegetarian restaurant interior",
        },
      ]}
      buttons={[
        {
          text: "View Menu",
          href: "#products",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/adults-enjoying-mexican-food_23-2149663829.jpg?_wi=2"
      mediaAnimation="slide-up"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/closeup-shot-indian-tasty-food-called-marwari-veg-thali-wooden-table_181624-58043.jpg",
          alt: "Diner portrait 1",
        },
        {
          src: "http://img.b2bpic.net/free-photo/interior-decoration-inspired-by-mexican-folklore_23-2150711299.jpg",
          alt: "Diner portrait 2",
        },
        {
          src: "http://img.b2bpic.net/free-photo/indian-tasty-roti-composition_23-2149073363.jpg",
          alt: "Diner portrait 3",
        },
        {
          src: "http://img.b2bpic.net/free-photo/outdoor-restaurant-with-wooden-chairs-tables_181624-57563.jpg",
          alt: "Diner portrait 4",
        },
        {
          src: "http://img.b2bpic.net/free-photo/chicken-sticks-bowl-tomato-soup_114579-2018.jpg",
          alt: "Diner portrait 5",
        },
      ]}
      avatarText="Join 10,000+ happy guests"
      marqueeItems={[
        {
          type: "text",
          text: "Pure Vegetarian",
        },
        {
          type: "text",
          text: "Traditional Recipes",
        },
        {
          type: "text",
          text: "Locally Sourced",
        },
        {
          type: "text",
          text: "Family Friendly",
        },
        {
          type: "text",
          text: "Daily Fresh",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <AboutMetric
      useInvertedBackground={false}
      title="Our Culinary Heritage"
      metrics={[
        {
          label: "Years Served",
          value: "20+",
          icon: Award,
        },
        {
          label: "Daily Happy Guests",
          value: "500+",
          icon: Users,
        },
        {
          label: "Menu Items",
          value: "100+",
          icon: Utensils,
        },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardThree
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      features={[
        {
          title: "Farm Fresh Ingredients",
          description: "Sourced locally to ensure maximum freshness and nutritional value in every bite.",
          imageSrc: "http://img.b2bpic.net/free-photo/collection-homegrown-vegetables-flowers-after-harvest-fro_181624-58049.jpg?_wi=2",
        },
        {
          title: "Traditional Hospitality",
          description: "Our service staff is trained to treat every guest with traditional Indian warmth.",
          imageSrc: "http://img.b2bpic.net/free-photo/waiter-serving-coffee-customers-while-wearing-face-mask-due-covid19-epidemic_637285-7874.jpg?_wi=2",
        },
        {
          title: "Strict Hygiene Standards",
          description: "Cleanliness is our top priority, from our kitchen prep area to your dining table.",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-dining-tables-without-food_23-2150157792.jpg?_wi=2",
        },
      ]}
      title="Why Choose Anandha"
      description="We blend tradition with quality for a complete dining experience."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "1",
          name: "Classic South Indian Thali",
          price: "₹150",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-sliced-shaurma-tasty-meat-salad-sandwich-grey-surface-burger-sandwich-bread-pita-meat-salad_140725-102086.jpg",
        },
        {
          id: "2",
          name: "Crispy Masala Dosa",
          price: "₹90",
          imageSrc: "http://img.b2bpic.net/free-photo/delicious-indian-dosa-assortment_23-2149086042.jpg",
        },
        {
          id: "3",
          name: "Special Vegetable Curry",
          price: "₹120",
          imageSrc: "http://img.b2bpic.net/free-photo/delicious-thai-food-still-life_23-2149508957.jpg",
        },
        {
          id: "4",
          name: "Authentic Filter Coffee",
          price: "₹30",
          imageSrc: "http://img.b2bpic.net/free-photo/arabic-tea-glasses-with-green-mint-tray_23-2148088402.jpg",
        },
        {
          id: "5",
          name: "Sweet Gulab Jamun",
          price: "₹50",
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-delicious-indian-dessert-plate_23-2149312393.jpg",
        },
        {
          id: "6",
          name: "Spicy Veg Biryani",
          price: "₹140",
          imageSrc: "http://img.b2bpic.net/free-photo/pan-with-rice-near-spices_23-2147894755.jpg",
        },
      ]}
      title="Our Signature Dishes"
      description="Explore our wide variety of authentic vegetarian delights."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFive
      textboxLayout="split"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Ravi Kumar",
          date: "Oct 2023",
          title: "Great Food",
          quote: "Fantastic flavors!",
          tag: "Breakfast",
          avatarSrc: "http://img.b2bpic.net/free-photo/outdoor-shot-delighted-happy-dark-skinned-young-female-wears-red-blouse-listens-audio-song-headphones_273609-3479.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/adults-enjoying-mexican-food_23-2149663829.jpg?_wi=3",
          imageAlt: "happy diner portrait restaurant",
        },
        {
          id: "2",
          name: "Anjali S",
          date: "Sept 2023",
          title: "Authentic",
          quote: "Feels like home.",
          tag: "Dinner",
          avatarSrc: "http://img.b2bpic.net/free-photo/happy-woman-holding-toast-while-enjoying-lunch-with-her-friends-home_637285-5886.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/classic-luxury-restaurant-with-tables-chairs_140725-9388.jpg?_wi=2",
          imageAlt: "happy diner portrait restaurant",
        },
        {
          id: "3",
          name: "Meera P",
          date: "Aug 2023",
          title: "Healthy",
          quote: "Fresh ingredients.",
          tag: "Lunch",
          avatarSrc: "http://img.b2bpic.net/free-photo/beautiful-african-american-woman-cafe_273609-5052.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/collection-homegrown-vegetables-flowers-after-harvest-fro_181624-58049.jpg?_wi=3",
          imageAlt: "happy diner portrait restaurant",
        },
        {
          id: "4",
          name: "Vikram V",
          date: "July 2023",
          title: "Excellent",
          quote: "Perfect service.",
          tag: "Snacks",
          avatarSrc: "http://img.b2bpic.net/free-photo/medium-shot-people-with-delicious-food_23-2149019179.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/waiter-serving-coffee-customers-while-wearing-face-mask-due-covid19-epidemic_637285-7874.jpg?_wi=3",
          imageAlt: "happy diner portrait restaurant",
        },
        {
          id: "5",
          name: "Karthik D",
          date: "June 2023",
          title: "Top-notch",
          quote: "Best in town.",
          tag: "Lunch",
          avatarSrc: "http://img.b2bpic.net/free-photo/fashionable-male-with-beard-appeasing-hunger-while-dining-alone-modern-restaurant-sunny-day-eating-meal-with-knife-fork_273609-1966.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-dining-tables-without-food_23-2150157792.jpg?_wi=3",
          imageAlt: "happy diner portrait restaurant",
        },
      ]}
      title="Customer Stories"
      description="What our guests have to say about their experience."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardFourteen
      useInvertedBackground={false}
      title="Impact at a Glance"
      tag="Our Achievements"
      metrics={[
        {
          id: "m1",
          value: "10k+",
          description: "Satisfied Guests",
        },
        {
          id: "m2",
          value: "24/7",
          description: "Customer Support",
        },
        {
          id: "m3",
          value: "100%",
          description: "Organic Ingredients",
        },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="split"
      useInvertedBackground={false}
      faqs={[
        {
          id: "q1",
          title: "Is parking available?",
          content: "Yes, we have a dedicated parking area for guests.",
        },
        {
          id: "q2",
          title: "Do you accept advance orders?",
          content: "Yes, we accept advance booking for parties.",
        },
        {
          id: "q3",
          title: "Are there vegan options?",
          content: "We offer several vegan-friendly dishes on our menu.",
        },
      ]}
      title="Common Questions"
      description="Everything you need to know about our services."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      tag="Visit Us"
      title="Find Us Easily"
      description="676, Nehruji Rd, Near Gandhi Statue, Mandhakarai, Viluppuram, Tamil Nadu 605602"
      imageSrc="http://img.b2bpic.net/free-photo/front-view-vintage-shop-window_141667-3.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoText="Anandha Veg"
      leftLink={{
        text: "Privacy Policy",
        href: "#",
      }}
      rightLink={{
        text: "Contact Us",
        href: "#contact",
      }}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
