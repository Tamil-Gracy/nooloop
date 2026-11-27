import { useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  CheckCircle2,
  Factory,
  Layers3,
  Mail,
  MapPin,
  PackageCheck,
  Recycle,
  Scissors,
  Send,
} from 'lucide-react';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { materials, steps } from './data/content';

function App() {
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    interest: 'I want to supply textile waste',
    message: '',
  });

  const [sent, setSent] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All materials');

  const filters = [
    'All materials',
    'Natural fibre',
    'Fabric offcuts',
    'Yarn & thread',
  ];

  const visibleMaterials =
    activeFilter === 'All materials'
      ? materials
      : materials.filter((item) => item.type === activeFilter);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((previousForm) => ({
      ...previousForm,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSent(true);
  }

  function resetForm() {
    setForm({
      name: '',
      company: '',
      email: '',
      interest: 'I want to supply textile waste',
      message: '',
    });
    setSent(false);
  }

  const stepIcons = [Factory, Scissors, PackageCheck, Recycle];

  return (
    <div className="overflow-hidden bg-white text-slate-800">
      <Navbar />

      <main>
        {/* Hero banner */}
        <section
          id="home"
          className="relative isolate min-h-[680px] overflow-hidden bg-[#0b1e50] text-white sm:min-h-[760px]"
        >
          <img
            src="../images/main-banner.jpeg"
            alt="Colourful sorted textile waste inside a textile recycling warehouse"
            className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
          />

          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#071638]/95 via-[#071638]/75 to-[#071638]/30" />

          <div className="container-wide flex min-h-[680px] items-center py-24 sm:min-h-[760px] sm:py-28">
            <div className="max-w-3xl">
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-bold tracking-wide text-white backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-[#72cf45]" />
                TEXTILE WASTE. NEW POSSIBILITIES.
              </div>

              <h1 className="font-display text-5xl font-extrabold leading-[1.06] tracking-[-.04em] text-white sm:text-6xl md:text-7xl lg:text-[82px]">
                Give textile waste
                <br />
                <span className="bg-gradient-to-r from-[#ff4b9a] via-[#ff914d] to-[#b64bdf] bg-clip-text text-transparent">
                  a second life.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-white/90 sm:text-xl sm:leading-9">
                We collect textile waste from garment factories, sort it by
                material, colour and quality, and connect reusable resources
                with the right buyers.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#ed1685] to-[#ff783e] px-8 py-4 text-sm font-bold text-white shadow-lg transition hover:-translate-y-1"
                >
                  Partner with Nooloop
                  <ArrowUpRight size={18} />
                </a>

                <a
                  href="#approach"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/50 bg-white/10 px-8 py-4 text-sm font-bold text-white backdrop-blur transition hover:bg-white/20"
                >
                  Explore our process
                  <ArrowRight size={17} />
                </a>
              </div>

              <p className="mt-8 text-sm font-semibold tracking-wide text-white/75">
                Collect <span className="mx-2 text-[#ff914d]">•</span> Sort
                <span className="mx-2 text-[#ff914d]">•</span> Resell
                <span className="mx-2 text-[#ff914d]">•</span> Reuse
              </p>
            </div>
          </div>

          <div className="gradient-line absolute bottom-0 left-0 h-1.5 w-full" />
        </section>

        {/* Introduction */}
        <section className="bg-[#fbfcff] py-16 sm:py-20">
          <div className="container-wide">
            <div className="grid gap-8 md:grid-cols-3 md:gap-12">
              <div className="md:col-span-1">
                <p className="section-kicker text-xs font-extrabold uppercase text-pink">
                  THE NOOLOOP IDEA
                </p>
                <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-ink">
                  Keep good materials in motion.
                </h2>
              </div>

              <p className="text-base leading-8 text-slate-500 md:col-span-2">
                Textile production creates many leftover materials. When these
                are mixed or overlooked, their value can be lost. Nooloop
                brings structure to the process — collecting, identifying and
                sorting textile waste so the right materials can find the right
                buyers.
              </p>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="approach" className="py-20 sm:py-28">
          <div className="container-wide">
            <div className="max-w-2xl">
              <p className="section-kicker text-xs font-extrabold uppercase text-pink">
                HOW IT WORKS
              </p>
              <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-ink sm:text-4xl md:text-[46px]">
                A thoughtful process.
                <br />
                <span className="gradient-text">A better next chapter.</span>
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-500">
                We make textile waste easier to manage and more useful to the
                businesses that can put it back to work.
              </p>
            </div>

            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((step, index) => {
                const Icon = stepIcons[index];

                return (
                  <article
                    key={step.number}
                    className="group relative rounded-3xl border border-slate-100 bg-white p-7 transition duration-300 hover:-translate-y-2 hover:border-pink/20 hover:shadow-soft"
                  >
                    <div className="flex items-start justify-between">
                      <span className="font-display text-sm font-extrabold text-slate-300">
                        {step.number}
                      </span>
                      <span className="grid h-12 w-12 place-items-center rounded-2xl bg-pink/10 text-pink transition group-hover:bg-ink group-hover:text-white">
                        <Icon size={22} />
                      </span>
                    </div>

                    <h3 className="mt-10 font-display text-xl font-extrabold text-ink">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-500">
                      {step.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Materials */}
        <section id="materials" className="bg-mist py-20 sm:py-28">
          <div className="container-wide">
            <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
              <div className="max-w-2xl">
                <p className="section-kicker text-xs font-extrabold uppercase text-pink">
                  WHAT WE HANDLE
                </p>
                <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-ink sm:text-4xl md:text-[46px]">
                  Every material has potential.
                </h2>
                <p className="mt-5 text-base leading-8 text-slate-500">
                  We work with different kinds of textile leftovers and organise
                  them into clearer material categories.
                </p>
              </div>

              <a
                href="#contact"
                className="mb-1 inline-flex shrink-0 items-center gap-2 text-sm font-extrabold text-ink hover:text-pink"
              >
                Discuss your material
                <ArrowUpRight size={17} />
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`rounded-full px-5 py-2.5 text-xs font-bold transition ${
                    activeFilter === filter
                      ? 'bg-ink text-white shadow-md'
                      : 'border border-slate-200 bg-white text-slate-500 hover:border-ink hover:text-ink'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            <div className="mt-7 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {visibleMaterials.map((item) => (
                <article
                  key={item.name}
                  className="group overflow-hidden rounded-3xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
                >
                  <div className="relative h-60 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wider text-ink">
                      {item.type}
                    </span>
                  </div>

                  <div className="p-6">
                    <h3 className="font-display text-xl font-extrabold text-ink">
                      {item.name}
                    </h3>
                    <p className="mt-2 min-h-[72px] text-sm leading-6 text-slate-500">
                      {item.detail}
                    </p>
                    <a
                      href="#contact"
                      className="mt-4 inline-flex items-center gap-2 text-xs font-extrabold text-pink"
                    >
                      Enquire about this
                      <ArrowRight size={14} />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Business partners */}
        <section id="businesses" className="py-20 sm:py-28">
          <div className="container-wide grid items-center gap-12 lg:grid-cols-2">
            <div className="relative">
              <img
                       src="../../images/banner2.jpeg"
                alt="Textile waste recycling and material sorting workspace"
                loading="lazy"
                className="h-[420px] w-full rounded-[32px] object-cover sm:h-[500px]"
              />

              <div className="absolute -bottom-6 right-5 max-w-[260px] rounded-2xl bg-white p-5 shadow-soft sm:-right-5">
                <div className="mb-2 flex items-center gap-2 text-leaf">
                  <BadgeCheck size={19} />
                  <span className="text-xs font-extrabold uppercase tracking-wider">
                    Built on connections
                  </span>
                </div>
                <p className="font-display text-lg font-extrabold leading-snug text-ink">
                  Better sorting. Better material matches.
                </p>
              </div>
            </div>

            <div className="pt-5 lg:pl-8">
              <p className="section-kicker text-xs font-extrabold uppercase text-pink">
                WHO WE WORK WITH
              </p>
              <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-ink sm:text-4xl md:text-[46px]">
                One loop.
                <br />
                <span className="gradient-text">Many possibilities.</span>
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-500">
                Nooloop creates a practical link between businesses with textile
                leftovers and businesses looking for reusable or recyclable
                materials.
              </p>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-100 p-5">
                  <span className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-orange/10 text-orange">
                    <Factory size={21} />
                  </span>
                  <h3 className="font-display font-extrabold text-ink">
                    Garment manufacturers
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Have textile waste to clear? Let's discuss collection and
                    sorting.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-100 p-5">
                  <span className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-purple/10 text-purple">
                    <Layers3 size={21} />
                  </span>
                  <h3 className="font-display font-extrabold text-ink">
                    Recyclers & manufacturers
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Looking for sorted textile materials? Tell us what you need.
                  </p>
                </div>
              </div>

              <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-ink px-7 py-4 text-sm font-bold text-white transition hover:bg-pink"
              >
                Let's work together
                <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </section>

        {/* About Nooloop */}
        <section
          id="about"
          className="relative overflow-hidden bg-[#0b1e50] py-20 text-white sm:py-24"
        >
          <div className="absolute -right-28 -top-32 h-96 w-96 rounded-full border-[60px] border-pink/10" />
          <div className="absolute -bottom-44 -left-20 h-96 w-96 rounded-full border-[55px] border-purple/15" />

          <div className="container-wide relative grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
            <div>
              <p className="section-kicker text-xs font-extrabold uppercase text-orange">
                WHY NOOLOOP
              </p>
              <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight sm:text-5xl">
                Not the end
                <br />
                of the fabric story.
              </h2>
            </div>

            <div>
              <p className="text-lg leading-9 text-blue-100/80">
                We believe textile leftovers deserve more than being forgotten.
                By bringing collection, sorting and resale together, Nooloop
                aims to make material recovery more organised, more accessible
                and more valuable for every partner in the chain.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {['Collect with purpose', 'Sort with clarity', 'Connect with value'].map(
                  (value, index) => (
                    <span
                      key={value}
                      className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-xs font-semibold text-white"
                    >
                      <CheckCircle2
                        size={15}
                        className={['text-pink', 'text-orange', 'text-leaf'][index]}
                      />
                      {value}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="bg-pale py-20 sm:py-28">
          <div className="container-wide grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <p className="section-kicker text-xs font-extrabold uppercase text-pink">
                LET'S CONNECT
              </p>
              <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-ink sm:text-4xl md:text-[46px]">
                Have textile waste?
                <br />
                <span className="gradient-text">Let's put it to use.</span>
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-500">
                Whether you want to supply textile waste or source sorted
                materials, we'd love to hear from you.
              </p>

              <div className="mt-9 space-y-5">
                <div className="flex items-start gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white text-pink shadow-sm">
                    <Mail size={20} />
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Email
                    </p>
                    <a
                      href="mailto:hello@nooloop.in"
                      className="mt-1 block font-bold text-ink"
                    >
                      hello@nooloop.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white text-orange shadow-sm">
                    <MapPin size={20} />
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Based in
                    </p>
                    <p className="mt-1 font-bold text-ink">
                      Tiruppur, Tamil Nadu, India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[30px] bg-white p-6 shadow-soft sm:p-9">
              {sent ? (
                <div className="py-12 text-center">
                  <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-leaf/10 text-leaf">
                    <CheckCircle2 size={32} />
                  </span>
                  <h3 className="mt-5 font-display text-2xl font-extrabold text-ink">
                    Thanks for reaching out!
                  </h3>
                  <p className="mx-auto mt-3 max-w-sm text-sm leading-7 text-slate-500">
                    Your message has been prepared in this demo. Connect the form
                    to your backend or email service to receive enquiries.
                  </p>
                  <button
                    type="button"
                    onClick={resetForm}
                    className="mt-6 rounded-full bg-ink px-6 py-3 text-sm font-bold text-white"
                  >
                    Send another enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <h3 className="font-display text-2xl font-extrabold text-ink">
                      Tell us what you need
                    </h3>
                    <p className="mt-1 text-sm text-slate-400">
                      A few details will help us get the conversation started.
                    </p>
                  </div>

                  <label className="grid gap-2 text-xs font-bold text-slate-600">
                    Your name
                    <input
                      required
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm font-normal outline-none transition placeholder:text-slate-300 focus:border-pink focus:bg-white"
                    />
                  </label>

                  <label className="grid gap-2 text-xs font-bold text-slate-600">
                    Company name
                    <input
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Your company"
                      className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm font-normal outline-none transition placeholder:text-slate-300 focus:border-pink focus:bg-white"
                    />
                  </label>

                  <label className="grid gap-2 text-xs font-bold text-slate-600 sm:col-span-2">
                    Email address
                    <input
                      required
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm font-normal outline-none transition placeholder:text-slate-300 focus:border-pink focus:bg-white"
                    />
                  </label>

                  <label className="grid gap-2 text-xs font-bold text-slate-600 sm:col-span-2">
                    I'm interested in
                    <select
                      name="interest"
                      value={form.interest}
                      onChange={handleChange}
                      className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm font-normal outline-none focus:border-pink focus:bg-white"
                    >
                      <option>I want to supply textile waste</option>
                      <option>I want to buy sorted materials</option>
                      <option>Business partnership</option>
                      <option>Something else</option>
                    </select>
                  </label>

                  <label className="grid gap-2 text-xs font-bold text-slate-600 sm:col-span-2">
                    Your message
                    <textarea
                      required
                      rows="4"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us a little about your materials or requirements..."
                      className="resize-y rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm font-normal outline-none transition placeholder:text-slate-300 focus:border-pink focus:bg-white"
                    />
                  </label>

                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-7 py-4 text-sm font-bold text-white transition hover:bg-pink sm:w-auto"
                    >
                      Send enquiry
                      <Send size={16} />
                    </button>
                    <p className="mt-3 text-[11px] leading-5 text-slate-400">
                      Demo form only — connect an API or email service before
                      publishing to receive submissions.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
