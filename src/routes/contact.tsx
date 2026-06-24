import { useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle2 } from "lucide-react";
import { Layout } from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "./services";
import { site } from "@/lib/site";
import { usePageMeta } from "@/lib/usePageMeta";

function Contact() {
  usePageMeta("Contact — Free Estimate | High-Class Paving", "Get a free paving or sealcoating estimate in Westminster, MD. Call 443-617-4992 or send a message.");
  const [sent, setSent] = useState(false);

  return (
    <Layout>
      <PageHero
        eyebrow="Get In Touch"
        title={<>Get your <span className="text-gradient-orange">free estimate</span> today.</>}
        sub="Tell us about your project and we'll get back within one business day."
        img={site.images.crackRepair}
      />

      <section className="pb-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-[1fr_1.3fr] md:px-8">
          <Reveal>
            <div className="space-y-4">
              <a href={site.phoneHref} className="group flex items-center gap-4 rounded-3xl border border-white/10 bg-card p-6 transition hover:border-primary/40 hover:shadow-glow">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-primary shadow-glow">
                  <Phone className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Phone</p>
                  <p className="font-display text-lg font-bold">{site.phone}</p>
                </div>
              </a>
              <div className="flex items-center gap-4 rounded-3xl border border-white/10 bg-card p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-blue shadow-blue-glow">
                  <MapPin className="h-5 w-5 text-secondary-foreground" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Service Area</p>
                  <p className="font-display text-lg font-bold">{site.area} & surrounding</p>
                </div>
              </div>
              <div className="flex items-center gap-4 rounded-3xl border border-white/10 bg-card p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-primary shadow-glow">
                  <Mail className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Response</p>
                  <p className="font-display text-lg font-bold">Within 24 hours</p>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-card p-6">
                <div className="absolute inset-0 asphalt-texture opacity-50" />
                <div className="relative">
                  <p className="font-display text-lg font-bold">Why us?</p>
                  <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> 1-Year Workmanship Warranty</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Oil-based premium sealcoating</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Fast, honest estimates</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Local Westminster business</li>
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="rounded-3xl border border-white/10 bg-card p-8 shadow-elegant"
            >
              {sent ? (
                <div className="flex flex-col items-center py-10 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-primary shadow-glow">
                    <CheckCircle2 className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-bold">Thanks — we got it!</h3>
                  <p className="mt-2 text-muted-foreground">
                    We'll be in touch within one business day. For faster service, call{" "}
                    <a href={site.phoneHref} className="font-semibold text-primary">{site.phone}</a>.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="font-display text-2xl font-bold">Request your free estimate</h3>
                  <p className="mt-1 text-sm text-muted-foreground">All fields required. We never share your information.</p>
                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <Field label="Name" name="name" />
                    <Field label="Phone" name="phone" type="tel" />
                    <Field label="Email" name="email" type="email" />
                    <Field label="Property Address" name="address" />
                  </div>
                  <div className="mt-4">
                    <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Service Needed</label>
                    <select required className="mt-2 w-full rounded-xl border border-white/10 bg-background px-4 py-3 text-sm outline-none focus:border-primary/50">
                      <option>Sealcoating</option>
                      <option>Asphalt Replacement</option>
                      <option>Asphalt Resurfacing</option>
                      <option>Tar &amp; Chip</option>
                      <option>Not sure — recommend</option>
                    </select>
                  </div>
                  <div className="mt-4">
                    <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Project Details</label>
                    <textarea rows={4} required placeholder="Tell us about your driveway, size, condition, timeline…" className="mt-2 w-full rounded-xl border border-white/10 bg-background px-4 py-3 text-sm outline-none focus:border-primary/50" />
                  </div>
                  <button type="submit" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-primary px-7 py-4 text-base font-semibold text-primary-foreground shadow-glow btn-shine">
                    Send Request <Send className="h-4 w-4" />
                  </button>
                </>
              )}
            </form>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{label}</label>
      <input
        name={name}
        type={type}
        required
        className="mt-2 w-full rounded-xl border border-white/10 bg-background px-4 py-3 text-sm outline-none focus:border-primary/50"
      />
    </div>
  );
}

export default Contact;
