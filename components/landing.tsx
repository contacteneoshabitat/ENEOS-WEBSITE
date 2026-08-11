'use client'

import { useEffect, useMemo, useState } from 'react'
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Bot,
  Check,
  ChevronLeft,
  ChevronRight,
  CircleHelp,
  Euro,
  FileText,
  House,
  Leaf,
  Menu,
  MessageCircle,
  Minus,
  MoveHorizontal,
  Phone,
  Ruler,
  Send,
  ShieldCheck,
  Sparkles,
  Star,
  X,
} from 'lucide-react'

const projects = [
  { title: 'Maison de ville', meta: 'Rénovation globale · Lyon', image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85' },
  { title: 'Appartement traversant', meta: 'Cuisine & lumière · Paris', image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85' },
  { title: 'Longère contemporaine', meta: 'Énergie & enveloppe · Nantes', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85' },
  { title: 'Maison familiale', meta: 'Extension · Bordeaux', image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1200&q=85' },
  { title: 'T2 haussmannien', meta: 'Rénovation intérieure · Paris', image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85' },
]

const questionLabels = ['Votre projet', 'Votre logement', 'Votre situation', 'Vos coordonnées']

const projectOptions = [
  { title: 'Rénover mon intérieur', note: 'Cuisine, séjour, suite parentale', image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=85' },
  { title: 'Améliorer mon énergie', note: 'Confort, isolation, économies', image: 'https://images.unsplash.com/photo-1600566753051-f0b89df2dd90?auto=format&fit=crop&w=800&q=85' },
  { title: 'Agrandir mon logement', note: 'Extension, surélévation, volume', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=85' },
  { title: 'Acheter et rénover', note: 'Se projeter avant de signer', image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=85' },
  { title: 'Être accompagné', note: 'Un regard expert à vos côtés', image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=85' },
  { title: 'Je ne sais pas encore', note: 'Commençons par en parler', image: 'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=800&q=85' },
]

const reviews = [
  { quote: 'On a enfin compris où allait notre budget. Chaque choix était expliqué, jamais imposé.', name: 'Claire & Thomas', city: 'Lyon · rénovation complète', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=180&q=85' },
  { quote: 'Le chantier est resté humain du début à la fin. Et le résultat ressemble vraiment à notre famille.', name: 'Marion D.', city: 'Nantes · extension bois', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=180&q=85' },
  { quote: 'Une équipe précise, disponible, et une maison beaucoup plus agréable à vivre au quotidien.', name: 'Sophie & Julien', city: 'Bordeaux · rénovation énergétique', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=180&q=85' },
]

export default function Page() {
  const [hero, setHero] = useState(0)
  const [menu, setMenu] = useState(false)
  const [quizOpen, setQuizOpen] = useState(false)
  const [quizStep, setQuizStep] = useState(0)
  const [quizDone, setQuizDone] = useState(false)
  const [selectedWork, setSelectedWork] = useState<string[]>([])
  const [chatOpen, setChatOpen] = useState(false)
  const [chatMessages, setChatMessages] = useState([{ from: 'bot', text: 'Bonjour, je suis l’assistant projet. Que souhaitez-vous préparer ?' }])
  const [chatInput, setChatInput] = useState('')
  const [projectIndex, setProjectIndex] = useState(0)
  const [reviewIndex, setReviewIndex] = useState(0)
  const [after, setAfter] = useState(54)
  const [cookies, setCookies] = useState(true)
  const [preferences, setPreferences] = useState(false)
  const [aidOpen, setAidOpen] = useState(false)
  const [aidEstimate, setAidEstimate] = useState<number | null>(null)
  const [aidForm, setAidForm] = useState({ type: 'Maison', surface: '80', income: 'Intermédiaire', work: 'Isolation' })
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '33600000000'
  const whatsappLink = (message: string) => `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
  const calculateAid = () => { const base = Number(aidForm.surface) * (aidForm.work === 'Isolation' ? 32 : aidForm.work === 'Chauffage' ? 45 : 24); const multiplier = aidForm.income === 'Modeste' ? 1.35 : aidForm.income === 'Très modeste' ? 1.65 : 0.72; setAidEstimate(Math.round(base * multiplier)) }

  useEffect(() => {
    const timer = window.setInterval(() => setHero((value) => (value + 1) % 3), 5200)
    const reviewTimer = window.setInterval(() => setReviewIndex((value) => (value + 1) % reviews.length), 6200)
    return () => {
      window.clearInterval(timer)
      window.clearInterval(reviewTimer)
    }
  }, [])

  const heroImages = [
    'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1800&q=90',
    'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1800&q=90',
    'https://images.unsplash.com/photo-1600566753051-f0b89df2dd90?auto=format&fit=crop&w=1800&q=90',
  ]

  const openQuiz = (work?: string) => {
    if (work) setSelectedWork([work])
    setQuizDone(false); setQuizStep(0); setQuizOpen(true)
  }

  const nextQuiz = () => setQuizStep((step) => Math.min(step + 1, 3))
  const previousQuiz = () => setQuizStep((step) => Math.max(step - 1, 0))
  const sendChat = (text = chatInput) => {
    if (!text.trim()) return
    setChatMessages((messages) => [...messages, { from: 'user', text }, { from: 'bot', text: 'Je peux vous aider à cadrer votre projet. Pour une étude personnalisée, commencez par notre estimation guidée.' }])
    setChatInput('')
  }

  return (
    <main className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Atelier Serein, accueil"><span className="brand-mark">AS</span><span>ATELIER<br /><i>SEREIN</i></span></a>
        <nav className={`main-nav ${menu ? 'is-open' : ''}`} aria-label="Navigation principale">
          <a href="#projet" onClick={() => setMenu(false)}>Votre projet</a><a href="#realisations" onClick={() => setMenu(false)}>Réalisations</a><a href="#aides" onClick={() => setMenu(false)}>Aides & énergie</a><a href="#methode" onClick={() => setMenu(false)}>Notre méthode</a>
          <button className="nav-cta" onClick={() => { openQuiz(); setMenu(false) }}>Parler de mon projet <ArrowUpRight aria-hidden="true" /></button>
        </nav>
        <button className="menu-button" aria-label={menu ? 'Fermer le menu' : 'Ouvrir le menu'} onClick={() => setMenu(!menu)}>{menu ? <X /> : <Menu />}</button>
      </header>

      <section id="top" className="hero section-pad">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Rénovation pensée autrement</p>
          <h1>Votre intérieur,<br /><em>en mieux.</em></h1>
          <p className="hero-lede">Un accompagnement clair et sensible pour transformer votre logement, de la première idée aux dernières finitions.</p>
          <div className="hero-actions"><button className="button button-dark" onClick={() => openQuiz()}>Estimer mon projet <ArrowRight /></button><a className="text-link" href="#realisations">Découvrir nos réalisations <ArrowDownIcon /></a></div>
          <div className="hero-trust"><ShieldCheck /><span>Étude personnalisée<br /><strong>sans engagement</strong></span></div>
        </div>
        <div className="hero-visual">
          {heroImages.map((image, index) => <img key={image} className={hero === index ? 'hero-image active' : 'hero-image'} src={image} alt="Intérieur rénové lumineux" />)}
          <div className="hero-caption"><span>Projet démo</span><strong>La lumière comme matière</strong><small>Appartement · Paris 11e</small></div>
          <div className="hero-controls"><button onClick={() => setHero((hero + 2) % 3)} aria-label="Image précédente"><ChevronLeft /></button><div className="hero-dots">{heroImages.map((_, index) => <button key={index} aria-label={`Image ${index + 1}`} className={hero === index ? 'active' : ''} onClick={() => setHero(index)} />)}</div><button onClick={() => setHero((hero + 1) % 3)} aria-label="Image suivante"><ChevronRight /></button></div>
        </div>
      </section>

      <section className="proof-strip"><div><span className="proof-icon"><Ruler /></span><strong>Un projet bien cadré</strong><small>Budget, délais, choix — tout est lisible.</small></div><div><span className="proof-icon"><Leaf /></span><strong>Des choix durables</strong><small>Des solutions adaptées à votre quotidien.</small></div><div><span className="proof-icon"><MessageCircle /></span><strong>Un interlocuteur unique</strong><small>Une équipe qui vous répond vraiment.</small></div></section>

      <section id="projet" className="section-pad project-section"><div className="section-heading"><p className="eyebrow"><span /> Commencer par l’essentiel</p><h2>Quel est votre <em>projet&nbsp;?</em></h2><p>Pas de cases froides ni de jargon : choisissez l’image qui ressemble le plus à votre envie.</p></div><div className="project-grid">{projectOptions.map((project, index) => <button key={project.title} className="project-card" onClick={() => openQuiz(project.title)}><img src={project.image} alt="" /><span className="project-card-shade" /><span className="project-number">0{index + 1}</span><span className="project-card-copy"><strong>{project.title}</strong><small>{project.note}</small></span><span className="project-card-arrow"><ArrowUpRight /></span></button>)}</div></section>

<section className="video-section section-pad"><div className="video-intro"><p className="eyebrow"><span /> Carnet de chantier · film 01</p><h2>Une idée devient <em>un lieu.</em></h2><p>Regardez notre film de chantier : les matières, les gestes et les décisions qui donnent son caractère à une rénovation.</p><div className="video-note"><span>01</span><p>Du premier relevé<br />aux dernières finitions.</p></div><a className="text-link" href="#realisations">Continuer vers les réalisations <ArrowRight /></a></div><div className="video-frame"><video controls autoPlay muted loop playsInline preload="auto" poster={projects[0].image} aria-label="Vidéo de présentation d'un projet de rénovation"><source src="/Video-Slider.mp4" type="video/mp4" />Votre navigateur ne prend pas en charge la vidéo.</video><span className="video-stamp">ATELIER SEREIN<br /><i>film 01</i></span></div></section>

      <section className="estimator-band"><div><p className="eyebrow light"><span /> L’estimation guidée</p><h2>Donnez forme à votre idée.</h2><p>Un parcours en 4 étapes, conçu pour clarifier le projet avant même le premier rendez-vous.</p></div><div className="band-actions"><button className="button button-light" onClick={() => openQuiz()}>Démarrer l’estimation <ArrowRight /></button><button className="button button-outline-light" onClick={() => setAidOpen(true)}>Simuler mes aides <Euro /></button></div></section>

      <section id="realisations" className="section-pad"><div className="section-heading heading-row"><div><p className="eyebrow"><span /> Quelques inspirations</p><h2>Des lieux qui <em>racontent.</em></h2></div><div className="carousel-actions"><button onClick={() => setProjectIndex(Math.max(0, projectIndex - 1))} aria-label="Projet précédent"><ChevronLeft /></button><button onClick={() => setProjectIndex(Math.min(projects.length - 1, projectIndex + 1))} aria-label="Projet suivant"><ChevronRight /></button></div></div><div className="realizations" style={{ transform: `translateX(-${projectIndex * 25}%)` }}>{projects.map((project) => <article className="realization" key={project.title}><img src={project.image} alt={project.title} /><div><span>Projet démo</span><h3>{project.title}</h3><p>{project.meta}</p></div></article>)}</div></section>

      <section className="reviews-section section-pad"><div className="section-heading heading-row"><div><p className="eyebrow"><span /> Paroles de projets</p><h2>Ce que l’on <em>retient.</em></h2></div><div className="carousel-actions"><button onClick={() => setReviewIndex((reviewIndex + reviews.length - 1) % reviews.length)} aria-label="Avis précédent"><ChevronLeft /></button><button onClick={() => setReviewIndex((reviewIndex + 1) % reviews.length)} aria-label="Avis suivant"><ChevronRight /></button></div></div><div className="review-layout"><div className="review-quote"><div className="review-stars" aria-label="5 étoiles"><Star /><Star /><Star /><Star /><Star /></div><blockquote>“{reviews[reviewIndex].quote}”</blockquote><div className="review-author"><img src={reviews[reviewIndex].image} alt="" /><span><strong>{reviews[reviewIndex].name}</strong><small>{reviews[reviewIndex].city}</small></span></div></div><div className="review-gallery">{reviews.map((review, index) => <button key={review.name} className={index === reviewIndex ? 'review-photo active' : 'review-photo'} onClick={() => setReviewIndex(index)} aria-label={`Afficher l’avis de ${review.name}`}><img src={review.image} alt="" /></button>)}</div></div></section>

      <section className="section-pad split-section"><div className="section-heading"><p className="eyebrow"><span /> Voir la différence</p><h2>Avant l’idée.<br /><em>Après le projet.</em></h2><p>Une rénovation réussie ne se résume pas à une belle image. Elle change la façon dont vous habitez.</p><button className="text-link" onClick={() => openQuiz()}>Parler de mon projet <ArrowRight /></button></div><div className="before-after" style={{ '--after-position': `${after}%` } as React.CSSProperties}><img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85" alt="Après rénovation, intérieur contemporain" /><div className="before-image" style={{ width: `${after}%` }}><img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85" alt="Avant rénovation, pièce à transformer" /></div><input type="range" min="10" max="90" value={after} onChange={(event) => setAfter(Number(event.target.value))} aria-label="Comparer avant et après" /><div className="before-label">AVANT</div><div className="after-label">APRÈS</div><span className="handle"><MoveHorizontal /></span></div></section>

      <section id="aides" className="aid-section"><div className="aid-image-panel"><img src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1800&q=85" alt="Intérieur rénové avec une lumière naturelle" /><div className="aid-image-caption"><span>Énergie · clarté · confort</span><strong>Rénover mieux,<br />décider sereinement.</strong></div></div><div className="aid-content section-pad"><div className="section-heading"><p className="eyebrow"><span /> Comprendre avant d’agir</p><h2>Les aides, sans <em>le flou.</em></h2><p>On sépare ce qui est certain de ce qui doit être vérifié. Les règles évoluent : voici les bons points de départ, avec les liens officiels.</p></div><div className="aid-grid"><a href="https://www.service-public.fr/particuliers/vosdroits/F35083" target="_blank" rel="noreferrer" className="aid-card"><span><Euro /></span><h3>MaPrimeRénov’</h3><p>Le dispositif public pour certains travaux de rénovation énergétique.</p><small>Source officielle · Service-Public.fr</small><ArrowUpRight /></a><a href="https://france-renov.gouv.fr" target="_blank" rel="noreferrer" className="aid-card"><span><FileText /></span><h3>France Rénov’</h3><p>Le service public pour s’informer et vérifier son éligibilité.</p><small>Source officielle · france-renov.gouv.fr</small><ArrowUpRight /></a><div className="aid-card dark-card"><span><ShieldCheck /></span><h3>Le bon réflexe</h3><p>Ne signez rien avant d’avoir vérifié les conditions, les entreprises et les montants auprès des organismes publics.</p><small>À confirmer au cas par cas</small></div></div></div></section>

<section className="parallax-band"><div className="parallax-copy"><p className="eyebrow light"><span /> Une maison se ressent</p><h2>Plus de lumière.<br /><em>Moins de bruit.</em></h2><p>Des choix justes, pensés pour votre façon d’habiter.</p></div></section>

      <section id="methode" className="method-section section-pad"><div className="section-heading"><p className="eyebrow"><span /> Une méthode lisible</p><h2>Avancer avec <em>sérénité.</em></h2></div><div className="method-grid">{[['01', 'Écouter', 'Vos usages, vos envies, vos contraintes.'], ['02', 'Éclairer', 'Des options compréhensibles, un budget réaliste.'], ['03', 'Concevoir', 'Un projet cohérent jusque dans les détails.'], ['04', 'Réaliser', 'Un suivi attentif, du premier jour à la réception.']].map(([number, title, text]) => <div className="method-card" key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></div>)}</div></section>

      <section className="final-cta section-pad"><div><p className="eyebrow light"><span /> Le premier pas</p><h2>Et si on en parlait&nbsp;?</h2><p>Décrivez-nous votre idée. Nous vous répondrons avec clarté.</p></div><button className="button button-light" onClick={() => openQuiz()}>Commencer mon projet <ArrowRight /></button></section>

      <footer className="site-footer"><a className="brand" href="#top"><span className="brand-mark">AS</span><span>ATELIER<br /><i>SEREIN</i></span></a><p>Rénovation intérieure & énergétique<br />Site de démonstration — contenu à personnaliser.</p><div><a href="#aides">Mentions légales</a><a href="#top" onClick={(event) => { event.preventDefault(); setCookies(true); setPreferences(true) }}>Gérer mes cookies</a></div></footer>

      <button className="chat-launcher" onClick={() => setChatOpen(!chatOpen)} aria-label={chatOpen ? 'Fermer l’assistant' : 'Ouvrir l’assistant'}>{chatOpen ? <X /> : <><Bot /><span>Une question&nbsp;?</span></>}</button>
      {chatOpen && <aside className="chat-panel" aria-label="Assistant projet"><div className="chat-head"><span className="avatar"><Bot /></span><div><strong>Assistant projet</strong><small>Réponses indicatives · démo</small></div><button onClick={() => setChatOpen(false)} aria-label="Fermer"><X /></button></div><div className="chat-body">{chatMessages.map((message, index) => <p className={`chat-message ${message.from}`} key={`${message.text}-${index}`}>{message.text}</p>)}<div className="suggestions"><button onClick={() => sendChat('Je veux rénover ma cuisine')}>Rénover ma cuisine</button><button onClick={() => sendChat('Comment commencer ?')}>Comment commencer ?</button></div></div><form className="chat-form" onSubmit={(event) => { event.preventDefault(); sendChat() }}><input value={chatInput} onChange={(event) => setChatInput(event.target.value)} placeholder="Écrivez votre question…" aria-label="Votre question" /><button aria-label="Envoyer"><Send /></button></form></aside>}

      {quizOpen && <div className="quiz-overlay" role="dialog" aria-modal="true" aria-labelledby="quiz-title"><div className="quiz-card"><button className="quiz-close" onClick={() => setQuizOpen(false)} aria-label="Fermer"><X /></button>{quizDone ? <div className="quiz-success"><span className="success-icon"><Check /></span><p className="eyebrow"><span /> C’est noté</p><h2>Votre projet prend forme.</h2><p>Merci pour ces premières informations. Cette démonstration ne transmet aucune donnée et ne constitue pas une promesse de travaux ou d’aides.</p><div className="success-actions"><a className="button button-dark" href={whatsappLink(`Bonjour Atelier Serein, je souhaite parler de mon projet. Besoin identifié : ${selectedWork.join(', ') || 'à préciser'}.`)} target="_blank" rel="noreferrer">Envoyer sur WhatsApp <MessageCircle /></a><button className="text-link" onClick={() => setQuizOpen(false)}>Fermer <X /></button></div></div> : <><div className="quiz-top"><span>Étape {quizStep + 1} sur 4</span><div className="quiz-progress"><i style={{ width: `${((quizStep + 1) / 4) * 100}%` }} /></div></div><h2 id="quiz-title">{quizStep === 0 ? 'Parlez-nous du projet.' : quizStep === 1 ? 'Quelques repères.' : quizStep === 2 ? 'Votre horizon.' : 'Comment vous retrouver ?'}</h2><p className="quiz-subtitle">{quizStep === 0 ? 'Plusieurs réponses possibles.' : 'Ces informations restent indicatives dans cette démo.'}</p>{quizStep === 0 && <div className="choice-grid">{['Rénovation intérieure', 'Rénovation énergétique', 'Extension / agrandissement', 'Achat avec travaux', 'Aménagement sur mesure', 'Je cherche encore'].map((choice) => <button className={selectedWork.includes(choice) ? 'choice selected' : 'choice'} onClick={() => setSelectedWork(selectedWork.includes(choice) ? selectedWork.filter((item) => item !== choice) : [...selectedWork, choice])} key={choice}>{selectedWork.includes(choice) && <Check />} {choice}</button>)}</div>}{quizStep === 1 && <div className="form-grid"><label>Type de logement<select defaultValue="Maison"><option>Maison</option><option>Appartement</option><option>Autre</option></select></label><label>Surface approximative<input type="text" placeholder="Ex. 85 m²" /></label><label>Localisation<input type="text" placeholder="Ville ou code postal" /></label></div>}{quizStep === 2 && <div className="choice-grid"><button className="choice selected">Dans les 3 à 6 mois</button><button className="choice">Dans l’année</button><button className="choice">Je me renseigne</button><label className="wide-field">Budget indicatif<input type="text" placeholder="Ex. 60 000 €" /></label></div>}{quizStep === 3 && <div className="form-grid"><label>Prénom<input type="text" placeholder="Votre prénom" /></label><label>Email<input type="email" placeholder="vous@exemple.fr" /></label><label className="wide-field">Décrivez votre idée<textarea rows={3} placeholder="Ce qui compte le plus pour vous…" /></label><label className="wide-field consent"><input type="checkbox" /> J’accepte d’être recontacté dans le cadre de cette démo.</label></div>}<div className="quiz-actions">{quizStep > 0 && <button className="text-link" onClick={previousQuiz}><ChevronLeft /> Retour</button>}<button className="button button-dark" disabled={quizStep === 0 && selectedWork.length === 0} onClick={() => quizStep === 3 ? setQuizDone(true) : nextQuiz()}>{quizStep === 3 ? 'Voir le récapitulatif' : 'Continuer'} <ArrowRight /></button></div></>}</div></div>}

      {aidOpen && <div className="quiz-overlay" role="dialog" aria-modal="true" aria-labelledby="aid-title"><div className="quiz-card aid-simulator"><button className="quiz-close" onClick={() => setAidOpen(false)} aria-label="Fermer"><X /></button><p className="eyebrow"><span /> Simulateur indicatif</p><h2 id="aid-title">À quelles aides<br /><em>pourrais-je prétendre&nbsp;?</em></h2>{aidEstimate === null ? <><p className="quiz-subtitle">Une première estimation, jamais une promesse. Les conditions officielles doivent être vérifiées avant tout engagement.</p><div className="form-grid"><label>Votre logement<select value={aidForm.type} onChange={(e) => setAidForm({ ...aidForm, type: e.target.value })}><option>Maison</option><option>Appartement</option></select></label><label>Surface approximative<input type="number" min="1" value={aidForm.surface} onChange={(e) => setAidForm({ ...aidForm, surface: e.target.value })} /></label><label>Votre niveau de revenus<select value={aidForm.income} onChange={(e) => setAidForm({ ...aidForm, income: e.target.value })}><option>Très modeste</option><option>Modeste</option><option>Intermédiaire</option><option>Supérieur</option></select></label><label>Travaux envisagés<select value={aidForm.work} onChange={(e) => setAidForm({ ...aidForm, work: e.target.value })}><option>Isolation</option><option>Chauffage</option><option>Rénovation globale</option></select></label></div><div className="quiz-actions"><button className="button button-dark" onClick={calculateAid}>Voir mon estimation <ArrowRight /></button></div></> : <div className="aid-result"><span className="success-icon"><Euro /></span><p className="eyebrow"><span /> Première estimation</p><strong>{aidEstimate.toLocaleString('fr-FR')} €</strong><p>Montant indicatif calculé selon les réponses saisies. L’éligibilité et le montant final dépendent de votre dossier et des règles en vigueur.</p><a className="button button-dark" href={whatsappLink(`Bonjour Atelier Serein, je viens de simuler mes aides. Estimation indicative : ${aidEstimate} €. Je souhaite vérifier mon projet.`)} target="_blank" rel="noreferrer">Vérifier avec un conseiller <MessageCircle /></a></div>}</div></div>}

      {cookies && <div className="cookie-banner"><div><strong>Votre vie privée compte.</strong><p>Ce site de démonstration utilise uniquement le nécessaire pour fonctionner.</p></div><div className="cookie-actions"><button className="text-link" onClick={() => setPreferences(true)}>Personnaliser</button><button className="button button-dark" onClick={() => setCookies(false)}>J’accepte</button></div></div>}{preferences && <div className="cookie-preferences"><div><div><strong>Préférences cookies</strong><button onClick={() => setPreferences(false)} aria-label="Fermer"><X /></button></div><p>Les cookies nécessaires sont toujours actifs. Les autres catégories sont désactivées dans cette démo.</p><button className="button button-dark" onClick={() => { setPreferences(false); setCookies(false) }}>Enregistrer</button></div></div>}
    </main>
  )
}

function ArrowDownIcon() { return <svg aria-hidden="true" viewBox="0 0 16 16"><path d="M8 2v11M3.5 9.5 8 14l4.5-4.5" fill="none" stroke="currentColor" strokeWidth="1.4" /></svg> }
