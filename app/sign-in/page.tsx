import Link from 'next/link'
import { AuthForm } from '@/components/auth-form'

export default function SignInPage() { return <main className="auth-page"><div className="auth-panel"><Link className="brand" href="/"><span className="brand-mark">AS</span><span>ATELIER<br /><i>SEREIN</i></span></Link><p className="eyebrow"><span /> Votre espace projet</p><h1>Ravi de vous <em>retrouver.</em></h1><p className="auth-intro">Connectez-vous pour parcourir l’univers Atelier Serein et préparer votre projet.</p><AuthForm mode="sign-in" /><p className="auth-switch">Pas encore de compte ? <Link href="/sign-up">Créer mon accès</Link></p></div><div className="auth-image" /></main> }
