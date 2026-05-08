"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureBento from '@/components/sections/feature/FeatureBento';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import { Home, MapPin, Shield, TrendingUp } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-stagger"
        defaultTextAnimation="entrance-slide"
        borderRadius="soft"
        contentWidth="mediumSmall"
        sizing="mediumLarge"
        background="grid"
        cardStyle="glass-elevated"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="glass"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "الرئيسية",
          id: "hero",
        },
        {
          name: "المميزات",
          id: "features",
        },
        {
          name: "الوحدات",
          id: "units",
        },
        {
          name: "آراء العملاء",
          id: "testimonials",
        },
        {
          name: "تواصل معنا",
          id: "contact",
        },
      ]}
      brandName="CitiPoint"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroLogo
      logoText="B115 CitiPoint Zayed Heights"
      description="عيش الهدوء والفخامة في قلب الشيخ زايد. شقق واسعة، أمان كامل، وأسعار مميزة في مجتمع سكني واعد."
      buttons={[
        {
          text: "احجز الآن",
          href: "#contact",
        },
        {
          text: "تواصل واتساب",
          href: "https://wa.me/01020844778",
        },
      ]}
      buttonAnimation="slide-up"
      imageSrc="http://img.b2bpic.net/free-photo/skyscrapers-sunset_1112-1870.jpg?_wi=1"
      imageAlt="CitiPoint Zayed Heights Hero"
      showDimOverlay={true}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureBento
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          title: "أمن وحراسة 24/7",
          description: "نظام حماية متطور على مدار الساعة.",
          bentoComponent: "reveal-icon",
          icon: Shield,
          imageSrc: "http://img.b2bpic.net/free-vector/check-mark-shield-outline-flat_78370-4906.jpg",
          imageAlt: "24/7 security icon",
        },
        {
          title: "شقق واسعة وحديثة",
          description: "تصميمات عصرية تتناسب مع كافة الأذواق.",
          bentoComponent: "reveal-icon",
          icon: Home,
          imageSrc: "http://img.b2bpic.net/free-photo/skyscrapers-sunset_1112-1870.jpg?_wi=2",
          imageAlt: "24/7 security icon",
        },
        {
          title: "موقع استراتيجي",
          description: "في قلب الشيخ زايد الصحراوي.",
          bentoComponent: "reveal-icon",
          icon: MapPin,
          imageSrc: "http://img.b2bpic.net/free-photo/man-holding-little-house_1368-875.jpg",
          imageAlt: "24/7 security icon",
        },
        {
          title: "مستقبل استثماري",
          description: "استثمر في عقار يضمن لك عوائد مجزية.",
          bentoComponent: "reveal-icon",
          icon: TrendingUp,
          imageSrc: "http://img.b2bpic.net/free-photo/chart-statistics-sign-right-side-with-white-background_187299-39805.jpg",
          imageAlt: "24/7 security icon",
        },
      ]}
      title="مميزات CitiPoint"
      description="نقدم لك تجربة سكنية استثنائية متكاملة الخدمات."
    />
  </div>

  <div id="units" data-section="units">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={true}
      products={[
        {
          id: "1",
          brand: "CitiPoint",
          name: "شقة مساحة 120م",
          price: "2,500,000 ج.م",
          rating: 5,
          reviewCount: "10",
          imageSrc: "http://img.b2bpic.net/free-photo/modern-living-room-with-large-tv-led-lights_9975-33190.jpg",
        },
        {
          id: "2",
          brand: "CitiPoint",
          name: "شقة مساحة 150م",
          price: "3,200,000 ج.م",
          rating: 5,
          reviewCount: "8",
          imageSrc: "http://img.b2bpic.net/free-photo/spa-like-bathroom-with-tropical-ambiance_23-2152008218.jpg",
        },
        {
          id: "3",
          brand: "CitiPoint",
          name: "دوبلكس مساحة 220م",
          price: "4,800,000 ج.م",
          rating: 4,
          reviewCount: "5",
          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-with-albinism-spending-time-home_23-2150321723.jpg",
        },
        {
          id: "4",
          brand: "CitiPoint",
          name: "شقة مساحة 180م",
          price: "3,900,000 ج.م",
          rating: 5,
          reviewCount: "12",
          imageSrc: "http://img.b2bpic.net/free-photo/modern-bedroom-interior-design-with-blue-accent-wall_23-2151995362.jpg",
        },
        {
          id: "5",
          brand: "CitiPoint",
          name: "بنتهاوس مساحة 250م",
          price: "5,500,000 ج.م",
          rating: 5,
          reviewCount: "3",
          imageSrc: "http://img.b2bpic.net/free-photo/rendering-elegant-neoclassical-interior_23-2151059653.jpg",
        },
        {
          id: "6",
          brand: "CitiPoint",
          name: "شقة مساحة 140م",
          price: "2,900,000 ج.م",
          rating: 5,
          reviewCount: "6",
          imageSrc: "http://img.b2bpic.net/free-photo/sunny-morning-big-city-terrace-young-brunette-fashionable-woman-talking-phone-smiling-attractive-model-woman-chilling-relaxing-time-happiness_197531-1901.jpg",
        },
      ]}
      title="وحداتنا السكنية"
      description="اختر مسكنك من بين خياراتنا المتنوعة."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardSeven
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",
          value: "4.8",
          title: "التقييم",
          items: [
            "مبني على 20 مراجعة",
          ],
        },
        {
          id: "m2",
          value: "100%",
          title: "أمان",
          items: [
            "حراسة على مدار 24 ساعة",
          ],
        },
        {
          id: "m3",
          value: "95%",
          title: "رضا عملاء",
          items: [
            "من العملاء الذين تم استطلاع رأيهم",
          ],
        },
      ]}
      title="أرقام تعكس الثقة"
      description="مشروعنا يتحدث عن نفسه."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwo
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "t1",
          name: "عاشق الوطن",
          role: "مستثمر",
          testimonial: "المكان هادئ وآمن جداً والشقق واسعة ونظيفة.",
          imageSrc: "http://img.b2bpic.net/free-photo/african-american-caucasian-couple-hugging-happily-indoors-newly-purchased-home-joyful-moment_482257-134711.jpg",
        },
        {
          id: "t2",
          name: "Amr Torkey",
          role: "عميل",
          testimonial: "مكان له مستقبل واعد جداً.",
          imageSrc: "http://img.b2bpic.net/free-photo/waist-up-confident-businessman-office_329181-19349.jpg",
        },
        {
          id: "t3",
          name: "سارة أحمد",
          role: "مقيمة",
          testimonial: "خدمات ممتازة وموقع استراتيجي.",
          imageSrc: "http://img.b2bpic.net/free-photo/stylish-shopaholic-with-bags-phone_23-2147962171.jpg",
        },
        {
          id: "t4",
          name: "خالد محمود",
          role: "عميل",
          testimonial: "تعامل راقٍ وتصاميم حديثة.",
          imageSrc: "http://img.b2bpic.net/free-photo/smiley-couple-seeing-new-house-with-female-realtor_23-2148895439.jpg",
        },
        {
          id: "t5",
          name: "ليلى سمير",
          role: "مقيمة",
          testimonial: "أفضل استثمار في الشيخ زايد.",
          imageSrc: "http://img.b2bpic.net/free-photo/parents-welcoming-son-kitchen_23-2148414950.jpg",
        },
      ]}
      title="ماذا يقول عملاؤنا"
      description="نسعد دائماً برضا عملائنا عن تجربتهم في CitiPoint."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="split"
      useInvertedBackground={false}
      faqs={[
        {
          id: "f1",
          title: "هل يتوفر نظام تقسيط؟",
          content: "نعم، نوفر أنظمة تقسيط مرنة تصل لعدة سنوات.",
        },
        {
          id: "f2",
          title: "أين يقع المشروع بالضبط؟",
          content: "الشيخ زايد الصحراوي – الظهير الصحراوي لمحافظة الجيزة.",
        },
        {
          id: "f3",
          title: "كيف يمكن حجز وحدة؟",
          content: "يمكنك التواصل معنا عبر رقم الهاتف أو الواتساب لحجز زيارة ميدانية.",
        },
      ]}
      title="الأسئلة الشائعة"
      description="كل ما تود معرفته عن مشروع CitiPoint."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={true}
      background={{
        variant: "gradient-bars",
      }}
      tag="تواصل معنا"
      title="احجز وحدتك الآن"
      description="فريق المبيعات لدينا جاهز للرد على استفساراتكم."
      inputPlaceholder="أدخل بريدك الإلكتروني"
      buttonText="تواصل عبر واتساب"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoText="B115 CitiPoint"
      leftLink={{
        text: "سياسة الخصوصية",
        href: "#",
      }}
      rightLink={{
        text: "جميع الحقوق محفوظة 2024",
        href: "#",
      }}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
