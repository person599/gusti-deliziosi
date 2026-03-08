import {
  ContainerAnimated,
  ContainerInset,
  ContainerScroll as HeroScroll,
  ContainerSticky,
  HeroImage,
  HeroButton,
} from "@/components/ui/animated-video-on-scroll";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { Phone, Mail, MapPin, Clock, IceCreamCone, Leaf, ChevronDown, Star, Facebook, MessageCircle } from "lucide-react";
import { motion } from "motion/react";

const classicFlavours = [
  "Nocciola Piemonte IGP",
  "Cioccolato fondente",
  "Crema",
  "Pistacchio di Bronte",
  "Stracciatella",
  "Fiordilatte",
  "Caffè",
  "Gianduia",
  "Amarena",
  "Bacio",
];

const veganFlavours = [
  "Cioccolato fondente",
  "Sorbetto al limone",
  "Sorbetto al mango",
  "Fragola",
  "Frutta di stagione",
  "Pistacchio vegano",
];

const specialities = [
  { icon: "🧇", name: "Waffle", desc: "Croccanti e golosi" },
  { icon: "🥞", name: "Crêpes", desc: "Dolci e salate" },
  { icon: "☕", name: "Cioccolata Calda", desc: "Cremosa e avvolgente" },
  { icon: "🍨", name: "Semifreddi Vegani", desc: "Senza latte, tutto gusto" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
          <a href="#home" className="font-bold text-lg text-primary" style={{ fontFamily: "'Playfair Display', serif" }}>
            Ice Scream 🍦
          </a>
          <div className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#home" className="text-foreground/70 hover:text-primary transition-colors">Home</a>
            <a href="#chi-siamo" className="text-foreground/70 hover:text-primary transition-colors">Chi siamo</a>
            <a href="#gusti" className="text-foreground/70 hover:text-primary transition-colors">Gusti</a>
            <a href="#orari" className="text-foreground/70 hover:text-primary transition-colors">Orari</a>
            <a href="#contatti" className="text-foreground/70 hover:text-primary transition-colors">Contatti</a>
          </div>
          <a
            href="https://www.facebook.com/IceScream.gelatodaurlo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/60 hover:text-primary transition-colors"
          >
            <Facebook className="w-5 h-5" />
          </a>
        </div>
      </nav>

      {/* Hero Section with Animated Scroll */}
      <section id="home">
        <HeroScroll className="h-[200vh]">
          <ContainerSticky className="h-screen">
            <ContainerInset roundednessRange={[60, 16]}>
              <HeroImage
                src="https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=1920&q=80"
                alt="Gelato artigianale Ice Scream Torino"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            </ContainerInset>

            <ContainerAnimated
              className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4"
              outputRange={[60, 0]}
            >
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-white/80 text-sm md:text-base tracking-[0.3em] uppercase mb-4"
              >
                Gelateria Artigianale · Torino
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-5xl md:text-8xl font-bold text-white mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Ice Scream
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-white/70 text-lg md:text-xl font-light max-w-xl"
              >
                #gelatodaurlo
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="absolute bottom-12"
              >
                <ChevronDown className="w-8 h-8 text-white/50 animate-bounce" />
              </motion.div>
            </ContainerAnimated>
          </ContainerSticky>
        </HeroScroll>
      </section>

      {/* Reviews Badge */}
      <section className="py-12 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-card rounded-2xl p-6 md:p-8 shadow-lg border border-border text-center">
            <div className="flex items-center justify-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-accent fill-accent" />
              ))}
            </div>
            <p className="text-3xl font-bold text-foreground mb-1">98%</p>
            <p className="text-muted-foreground text-sm">valutazioni positive · 67 recensioni</p>
            <a
              href="https://www.facebook.com/IceScream.gelatodaurlo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-primary hover:underline text-sm font-medium"
            >
              <Facebook className="w-4 h-4" />
              Seguici su Facebook
            </a>
          </div>
        </motion.div>
      </section>

      {/* Chi Siamo */}
      <section id="chi-siamo" className="py-24 md:py-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-primary text-sm tracking-[0.2em] uppercase mb-4">La nostra storia</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              Chi Siamo
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-10 rounded-full" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid md:grid-cols-2 gap-12 items-center text-left"
          >
            <div>
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                <strong className="text-foreground">Tanta passione per le cose buone e naturali.</strong>{" "}
                Da noi puoi trovare i classici gusti, ma anche sapori nuovi, gelati e semifreddi vegani,
                waffle, crêpes e cioccolata calda.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                <strong className="text-foreground">Ice Scream #gelatodaurlo</strong> è una gelateria artigianale
                situata nel cuore del quartiere Parella a Torino. Siamo conosciuti per i nostri gelati creativi
                e per un'atmosfera accogliente, apprezzata dai clienti della zona.
              </p>
              <p className="text-primary italic text-lg mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                "Il denaro non può dare la felicità ma può comprare un gelato… che è praticamente la stessa cosa!"
              </p>
              <p className="text-foreground font-semibold text-lg">
                Non farti mancare nulla, vieni a trovarci! 🍦
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?w=600&q=80"
                alt="Gelato artigianale"
                className="w-full h-80 object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Specialità - Container Scroll Animation */}
      <section className="bg-muted/30 overflow-hidden">
        <ContainerScroll
          titleComponent={
            <>
              <p className="text-primary text-sm tracking-[0.2em] uppercase mb-4">Non solo gelato</p>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Le Nostre{" "}
                <span className="text-primary">Specialità</span>
              </h2>
              <div className="w-16 h-1 bg-primary mx-auto mb-6 rounded-full" />
            </>
          }
        >
          <div className="h-full w-full grid grid-cols-2 gap-4 p-4 md:p-8">
            {specialities.map((item) => (
              <div
                key={item.name}
                className="bg-background/80 backdrop-blur rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:scale-105 transition-transform"
              >
                <span className="text-4xl md:text-5xl mb-3">{item.icon}</span>
                <h3 className="text-lg md:text-xl font-bold text-foreground mb-1">{item.name}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </ContainerScroll>
      </section>

      {/* Gusti */}
      <section id="gusti" className="py-24 md:py-32 px-4 bg-muted/50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-primary text-sm tracking-[0.2em] uppercase mb-4">Le nostre specialità</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              I Nostri Gusti
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Classici */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card rounded-2xl p-8 shadow-lg border border-border"
            >
              <div className="flex items-center gap-3 mb-6">
                <IceCreamCone className="w-7 h-7 text-primary" />
                <h3 className="text-2xl font-bold text-foreground">Gusti Classici</h3>
              </div>
              <div className="space-y-3">
                {classicFlavours.map((f) => (
                  <div key={f} className="flex items-center gap-3 py-2 border-b border-border/50 last:border-0">
                    <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-foreground/80">{f}</span>
                  </div>
                ))}
              </div>
              <p className="text-muted-foreground text-sm mt-4 italic">
                ...e molti altri gusti a rotazione stagionale!
              </p>
            </motion.div>

            {/* Vegani */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card rounded-2xl p-8 shadow-lg border border-border"
            >
              <div className="flex items-center gap-3 mb-6">
                <Leaf className="w-7 h-7 text-secondary" />
                <h3 className="text-2xl font-bold text-foreground">Gusti Vegani</h3>
              </div>
              <div className="space-y-3">
                {veganFlavours.map((f) => (
                  <div key={f} className="flex items-center gap-3 py-2 border-b border-border/50 last:border-0">
                    <span className="w-2 h-2 rounded-full bg-secondary flex-shrink-0" />
                    <span className="text-foreground/80">{f}</span>
                  </div>
                ))}
              </div>
              <p className="text-muted-foreground text-sm mt-4 italic">
                Senza latte, senza compromessi sul gusto!
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Orari */}
      <section id="orari" className="py-24 md:py-32 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-primary text-sm tracking-[0.2em] uppercase mb-4">Quando trovarci</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Orari di Apertura
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-12 rounded-full" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card rounded-2xl p-8 md:p-12 shadow-lg border border-border max-w-lg mx-auto"
          >
            <Clock className="w-10 h-10 text-primary mx-auto mb-6" />
            <div className="space-y-4 text-lg">
              <div className="flex justify-between items-center py-3 border-b border-border/50">
                <span className="text-foreground font-medium">Domenica</span>
                <span className="text-muted-foreground">11:00 – 20:30</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-border/50">
                <span className="text-foreground font-medium">Lunedì</span>
                <span className="text-muted-foreground">15:00 – 20:30</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-border/50">
                <span className="text-foreground font-medium">Martedì</span>
                <span className="text-muted-foreground">15:00 – 20:30</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-border/50">
                <span className="text-foreground font-medium">Mercoledì</span>
                <span className="text-muted-foreground">15:00 – 20:30</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-border/50">
                <span className="text-foreground font-medium">Giovedì</span>
                <span className="text-muted-foreground">15:00 – 20:30</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-border/50">
                <span className="text-foreground font-medium">Venerdì</span>
                <span className="text-muted-foreground">15:00 – 20:30</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="text-foreground font-medium">Sabato</span>
                <span className="text-muted-foreground">15:00 – 20:30</span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm mt-6 italic">
              Gli orari potrebbero variare in base alla stagione. Seguici sui social per aggiornamenti!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contatti */}
      <section id="contatti" className="py-24 md:py-32 px-4 bg-muted/50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-primary text-sm tracking-[0.2em] uppercase mb-4">Vieni a trovarci</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Contatti
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg mb-1">Indirizzo</h3>
                  <p className="text-muted-foreground">Via Anastasio Germonio 28/b</p>
                  <p className="text-muted-foreground">10142 Torino (TO)</p>
                  <p className="text-muted-foreground text-sm mt-1">Quartiere Parella</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg mb-1">Telefono</h3>
                  <a href="tel:0112638682" className="text-primary hover:underline text-lg">
                    011 263 8682
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg mb-1">Email</h3>
                  <a href="mailto:sojong11@yahoo.fr" className="text-primary hover:underline">
                    sojong11@yahoo.fr
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Facebook className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg mb-1">Facebook</h3>
                  <a
                    href="https://www.facebook.com/IceScream.gelatodaurlo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Ice Scream #gelatodaurlo
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg mb-1">Messenger</h3>
                  <a
                    href="https://m.me/IceScream.gelatodaurlo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Scrivici su Messenger
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl overflow-hidden shadow-lg border border-border h-80 md:h-full min-h-[320px]"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2817.5!2d7.6286!3d45.0735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDA0JzI0LjYiTiA3wrAzNyc0My4wIkU!5e0!3m2!1sit!2sit!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mappa Ice Scream Torino"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-10 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-2xl font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
            Ice Scream 🍦
          </p>
          <p className="text-background/60 text-sm mb-4">#gelatodaurlo</p>
          <div className="flex items-center justify-center gap-6 mb-6">
            <a
              href="https://www.facebook.com/IceScream.gelatodaurlo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-background/50 hover:text-background transition-colors"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://m.me/IceScream.gelatodaurlo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-background/50 hover:text-background transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <a
              href="mailto:sojong11@yahoo.fr"
              className="text-background/50 hover:text-background transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="tel:0112638682"
              className="text-background/50 hover:text-background transition-colors"
            >
              <Phone className="w-5 h-5" />
            </a>
          </div>
          <p className="text-background/40 text-xs">
            © {new Date().getFullYear()} Ice Scream — Gelateria Artigianale, Torino
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
