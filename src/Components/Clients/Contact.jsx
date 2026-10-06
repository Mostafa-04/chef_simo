// src/pages/Contact.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Handshake,
  Calendar,
  Tv,
  Utensils,
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  ArrowRight,
  MessageSquare,
  Clock,
} from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import Reveal from "../Reveal";
import ImagePlaceholder from "../ImagePlaceholder";

/* ─────────────────────────────────────────────
   DONNÉES — Types de collaboration
   ───────────────────────────────────────────── */
const collaborationTypes = [
  {
    icon: Handshake,
    title: "Brand Partnerships",
    text: "For companies and food brands.",
    caption: "Brand Partnerships",
    src: "Brand_Partnerships.jpg",
  },
  {
    icon: Calendar,
    title: "Events",
    text: "Culinary and professional events.",
    caption: "Events",
    src: "EVENTS.jpg",
  },
  {
    icon: Tv,
    title: "Media",
    text: "TV, interviews, campaigns and content.",
    caption: "Media",
    src: "MEDIA.jpg",
  },
  {
    icon: Utensils,
    title: "Culinary Projects",
    text: "Consulting and gastronomic projects.",
    caption: "Culinary Projects",
    src: "CULINARY_PROJECTS.jpg",
  },
];

/* Options du select */
const selectOptions = [
  "Brand Partnership",
  "Event",
  "Media",
  "Culinary Project",
  "Other",
];

/* ─────────────────────────────────────────────
   1. HERO
   ───────────────────────────────────────────── */
const ContactHero = () => {
  return (
    <section
      className="relative bg-[#111111] text-[#F7F3EC] pt-[170px] pb-20 sm:pb-24 overflow-hidden"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Cg fill='none' stroke='%23CC1822' stroke-opacity='.28'%3E%3Cpath d='M40 4l36 36-36 36L4 40z'/%3E%3Cpath d='M40 22l18 18-18 18-18-18z'/%3E%3Ccircle cx='40' cy='40' r='6'/%3E%3C/g%3E%3C/svg%3E")`,
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(204,24,34,0.18),transparent_55%)] pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#CC1822]/60 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <Reveal>
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#CC1822]/40 bg-[#CC1822]/10 text-[11px] tracking-[0.2em] uppercase text-[#E5303B] mb-6">
            <MessageSquare className="w-3.5 h-3.5" strokeWidth={2} />
            Get in touch
          </span>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="font-serif font-semibold leading-[1] text-[clamp(2.8rem,8vw,6.5rem)] mb-4">
            WORK WITH{" "}
            <span className="text-[#E5303B]">CHEF SIMO</span>
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="font-serif italic text-xl sm:text-2xl text-[#F7F3EC]/70 max-w-2xl">
            For brands, events, media and culinary projects.
          </p>
        </Reveal>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────
   2. TYPES DE COLLABORATION
   ───────────────────────────────────────────── */
const CollaborationTypes = () => {
  return (
    <section className="py-20 sm:py-28 lg:py-36 bg-[#EFE8DC] text-[#111111]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <Reveal className="mb-14 max-w-3xl">
          <h2 className="font-serif font-semibold leading-[1.05] text-[clamp(2rem,4.5vw,3.6rem)] mb-3">
            WAYS TO COLLABORATE
          </h2>
          <p className="font-serif italic text-xl opacity-75">
            Four main areas of collaboration pick the one that fits your
            project.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          {collaborationTypes.map(({ icon: Icon, title, text, caption, src }, i) => (
            <Reveal key={title} delay={i * 100}>
              <article className="group cursor-pointer">
                <div className="mb-4 overflow-hidden">
                  <ImagePlaceholder
                    src={src}
                    alt={title}
                    caption={caption}
                    ratio="4/3"
                    className="group-hover:scale-105"
                  />
                </div>

                <div className="flex items-center gap-2 mb-1">
                  <span className="p-1.5 rounded-full bg-[#CC1822]/10 border border-[#CC1822]/30 group-hover:bg-[#CC1822] transition-colors">
                    <Icon
                      className="w-3.5 h-3.5 text-[#E5303B] group-hover:text-white transition-colors"
                      strokeWidth={1.8}
                    />
                  </span>
                  <h3 className="font-serif font-semibold text-lg sm:text-xl uppercase tracking-wide transition-colors group-hover:text-[#CC1822]">
                    {title}
                  </h3>
                </div>

                <p className="text-[15px] text-[#111111]/70">{text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────
   3. CHAMP DE FORMULAIRE (composant réutilisable)
   ───────────────────────────────────────────── */
const FormField = ({
  label,
  name,
  type = "text",
  required = false,
  error,
  children,
  ...rest
}) => {
  return (
    <label className="flex flex-col gap-2 text-sm">
      <span className="flex items-center gap-1 text-[#111111]/80 tracking-wide">
        {label}
        {required && <span className="text-[#CC1822]">*</span>}
      </span>

      {children ? (
        children
      ) : (
        <input
          type={type}
          name={name}
          required={required}
          {...rest}
          className={`w-full px-4 py-3 bg-white/60 border transition-colors duration-200 outline-none
            focus:border-[#CC1822] focus:bg-white
            ${
              error
                ? "border-[#CC1822] bg-[#CC1822]/5"
                : "border-[#111111]/20"
            }`}
        />
      )}

      {error && (
        <span className="flex items-center gap-1.5 text-xs text-[#CC1822]">
          <AlertCircle className="w-3.5 h-3.5" strokeWidth={2} />
          {error}
        </span>
      )}
    </label>
  );
};

/* ─────────────────────────────────────────────
   4. FORMULAIRE DE CONTACT
   ───────────────────────────────────────────── */
const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    type: "Brand Partnership",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const update = (field) => (e) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Full name is required.";
    if (!form.email.trim()) errs.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = "Please enter a valid email.";
    if (!form.message.trim()) errs.message = "Message is required.";
    return errs;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setStatus("loading");
    // Simulation d'envoi — remplacer par ton API / EmailJS / Formspree
    try {
      await new Promise((r) => setTimeout(r, 1500));
      setStatus("success");
      setForm({
        name: "",
        company: "",
        email: "",
        phone: "",
        type: "Brand Partnership",
        message: "",
      });
    } catch (err) {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <Reveal>
        <div className="flex flex-col items-center text-center py-16 px-6 bg-white border border-[#CC1822]/30">
          <span className="p-4 rounded-full bg-[#CC1822]/10 border border-[#CC1822]/40 mb-5">
            <CheckCircle2
              className="w-10 h-10 text-[#E5303B]"
              strokeWidth={1.5}
            />
          </span>
          <h3 className="font-serif font-semibold text-3xl mb-3">
            Message sent!
          </h3>
          <p className="text-[#111111]/70 max-w-md mb-8">
            Thank you for reaching out. Chef Simo's team will get back to you
            within 48 hours.
          </p>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="inline-flex items-center gap-2 px-6 py-3 border border-[#111111] text-[#111111] text-[12px] tracking-[0.15em] uppercase transition-all duration-300 hover:bg-[#111111] hover:text-white"
          >
            Send another message
            <ArrowRight className="w-4 h-4" strokeWidth={1.8} />
          </button>
        </div>
      </Reveal>
    );
  }

  return (
    <Reveal>
      <form
        onSubmit={onSubmit}
        noValidate
        className="grid gap-5 p-6 sm:p-8 bg-white/70 backdrop-blur-sm border border-[#111111]/10"
      >
        {/* Ligne 1 : Nom + Company */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <FormField
            label="Full name"
            name="n"
            value={form.name}
            onChange={update("name")}
            required
            error={errors.name}
            placeholder="Your full name"
          />
          <FormField
            label="Company"
            name="c"
            value={form.company}
            onChange={update("company")}
            placeholder="Company (optional)"
          />
        </div>

        {/* Ligne 2 : Email + Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <FormField
            label="Email"
            name="e"
            type="email"
            value={form.email}
            onChange={update("email")}
            required
            error={errors.email}
            placeholder="your@email.com"
          />
          <FormField
            label="Phone"
            name="p"
            type="tel"
            value={form.phone}
            onChange={update("phone")}
            placeholder="+212 6 00 00 00 00"
          />
        </div>

        {/* Collaboration type */}
        <FormField label="Collaboration type" name="t">
          <select
            name="t"
            value={form.type}
            onChange={update("type")}
            className="w-full px-4 py-3 bg-white/60 border border-[#111111]/20 outline-none focus:border-[#CC1822] focus:bg-white transition-colors duration-200"
          >
            {selectOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </FormField>

        {/* Message */}
        <FormField
          label="Message"
          name="m"
          required
          error={errors.message}
        >
          <textarea
            name="m"
            rows={5}
            value={form.message}
            onChange={update("message")}
            placeholder="Tell us about your project..."
            className={`w-full px-4 py-3 bg-white/60 border transition-colors duration-200 outline-none resize-y
              focus:border-[#CC1822] focus:bg-white
              ${
                errors.message
                  ? "border-[#CC1822] bg-[#CC1822]/5"
                  : "border-[#111111]/20"
              }`}
          />
        </FormField>

        {/* Bouton submit */}
        <button
          type="submit"
          disabled={status === "loading"}
          className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#CC1822] text-white text-[13px] tracking-[0.15em] uppercase transition-all duration-300 hover:bg-[#111111] hover:-translate-y-0.5 hover:shadow-xl disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
        >
          {status === "loading" ? (
            <>
              <Loader2
                className="w-4 h-4 animate-spin"
                strokeWidth={2}
              />
              Sending...
            </>
          ) : (
            <>
              Send request
              <Send
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                strokeWidth={1.8}
              />
            </>
          )}
        </button>

        {/* Message d'erreur global */}
        {status === "error" && (
          <p
            role="alert"
            className="flex items-center gap-2 text-sm text-[#CC1822]"
          >
            <AlertCircle className="w-4 h-4" strokeWidth={2} />
            Something went wrong. Please try again or email directly.
          </p>
        )}
      </form>
    </Reveal>
  );
};

/* ─────────────────────────────────────────────
   5. SECTION FORMULAIRE + CONTACT DIRECT
   ───────────────────────────────────────────── */
const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "simomasterchefmaroc2018@gmail.com",
      href: "mailto:simomasterchefmaroc2018@gmail.com",
    },
    {
      icon: FaInstagram,
      label: "Instagram",
      value: "@chef_simo_officiel",
      href: "https://www.instagram.com/chef_simo_officiel",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+212 6 00 00 00 00",
      href: "tel:+212600000000",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Maroc",
      href: null,
    },
  ];

  return (
    <section className="py-20 sm:py-28 lg:py-36 bg-[#F7F3EC] text-[#111111]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <Reveal className="mb-14 max-w-3xl">
          <h2 className="font-serif font-semibold leading-[1.05] text-[clamp(2rem,4.5vw,3.6rem)] mb-3">
            SEND A REQUEST
          </h2>
          <p className="font-serif italic text-xl opacity-75">
            Fill the form or contact us directly we usually reply within 48
            hours.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Formulaire */}
          <ContactForm />

          {/* Contact direct */}
          <Reveal delay={150}>
            <div className="sticky top-32">
              <h3 className="font-serif font-semibold text-2xl sm:text-3xl mb-6">
                DIRECT CONTACT
              </h3>

              <ul className="space-y-4 mb-8">
                {contactInfo.map(({ icon: Icon, label, value, href }) => {
                  const Content = (
                    <div className="group flex items-center gap-4 p-4 border border-[#111111]/10 hover:border-[#CC1822]/40 hover:bg-[#CC1822]/5 transition-all duration-300">
                      <span className="p-3 rounded-full bg-[#CC1822]/10 border border-[#CC1822]/30 group-hover:bg-[#CC1822] transition-colors">
                        <Icon
                          className="w-4 h-4 text-[#E5303B] group-hover:text-white transition-colors"
                          strokeWidth={1.8}
                        />
                      </span>
                      <div className="flex-1 min-w-0">
                        <p className="text-[10px] tracking-[0.2em] uppercase text-[#111111]/50 mb-0.5">
                          {label}
                        </p>
                        <p className="font-medium text-[#111111] break-all">
                          {value}
                        </p>
                      </div>
                    </div>
                  );

                  return (
                    <li key={label}>
                      {href ? (
                        <a
                          href={href}
                          target={href.startsWith("http") ? "_blank" : undefined}
                          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                        >
                          {Content}
                        </a>
                      ) : (
                        Content
                      )}
                    </li>
                  );
                })}
              </ul>

              {/* Note disponibilité */}
              <div className="flex items-start gap-3 p-4 bg-[#EFE8DC] border-l-4 border-[#CC1822]">
                <Clock
                  className="w-5 h-5 text-[#CC1822] flex-shrink-0 mt-0.5"
                  strokeWidth={1.8}
                />
                <div>
                  <p className="font-medium text-sm mb-1">
                    Response time
                  </p>
                  <p className="text-sm text-[#111111]/70">
                    We reply to all professional inquiries within 48 hours.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────
   6. CTA FINALE
   ───────────────────────────────────────────── */
const ContactCTA = () => {
  return (
    <section
      className="relative py-20 sm:py-28 bg-[#111111] text-[#F7F3EC] text-center overflow-hidden"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Cg fill='none' stroke='%23CC1822' stroke-opacity='.28'%3E%3Cpath d='M40 4l36 36-36 36L4 40z'/%3E%3Cpath d='M40 22l18 18-18 18-18-18z'/%3E%3Ccircle cx='40' cy='40' r='6'/%3E%3C/g%3E%3C/svg%3E")`,
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(204,24,34,0.15),transparent_60%)] pointer-events-none" />

      <div className="relative max-w-3xl mx-auto px-5 sm:px-8">
        <Reveal>
          <Utensils
            className="w-10 h-10 text-[#E5303B] mx-auto mb-6"
            strokeWidth={1.5}
          />
          <h2 className="font-serif font-semibold leading-[1.05] text-[clamp(2rem,4.5vw,3.6rem)] mb-4">
            READY TO CREATE SOMETHING?
          </h2>
          <p className="font-serif italic text-xl text-[#F7F3EC]/70 mb-8">
            Let's build a culinary experience that tells your story.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-[#CC1822] text-white text-[13px] tracking-[0.15em] uppercase transition-all duration-300 hover:bg-white hover:text-[#111111] hover:-translate-y-1 hover:shadow-xl hover:shadow-[#CC1822]/30"
            >
              See projects
              <ArrowRight
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                strokeWidth={1.8}
              />
            </Link>
            <Link
              to="/media"
              className="inline-flex items-center gap-2 px-8 py-4 border border-[#F7F3EC] text-[#F7F3EC] text-[13px] tracking-[0.15em] uppercase transition-all duration-300 hover:bg-[#F7F3EC] hover:text-[#111111] hover:-translate-y-1"
            >
              See media
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────
   PAGE EXPORT
   ───────────────────────────────────────────── */
const Contact = () => {
  return (
    <>
      <ContactHero />
      <CollaborationTypes />
      <ContactSection />
      <ContactCTA />
    </>
  );
};

export default Contact;