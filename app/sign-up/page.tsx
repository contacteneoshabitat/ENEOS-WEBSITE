import Link from 'next/link'
import { AuthForm } from '@/components/auth-form'

export default function SignUpPage() { return <main className="auth-page"><div className="auth-panel"><Link className="brand" href="/"><span className="brand-mark">AS</span><span>ATELIER<br /><i>SEREIN</i></span></Link><p className="eyebrow"><span /> Votre espace projet</p><h1>Commençons par <em>vous.</em></h1><p className="auth-intro">Créez votre accès pour découvrir nos réalisations et recevoir une première lecture de vos besoins.</p><AuthForm mode="sign-up" /><p className="auth-switch">Déjà un compte ? <Link href="/sign-in">Se connecter</Link></p></div><div className="auth-image" /></main> }
