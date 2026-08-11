'use client'

import { FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation'
import { authClient } from '@/lib/auth-client'

export function AuthForm({ mode }: { mode: 'sign-in' | 'sign-up' }) {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [error, setError] = useState('')
  const [pending, setPending] = useState(false)

  async function submit(event: FormEvent) {
    event.preventDefault(); setError(''); setPending(true)
    const result = mode === 'sign-up'
      ? await authClient.signUp.email({ email, password, name })
      : await authClient.signIn.email({ email, password })
    setPending(false)
    if (result.error) { setError(result.error.message || 'Une erreur est survenue.'); return }
    router.push('/'); router.refresh()
  }

  return <form className="auth-form" onSubmit={submit}>
    {mode === 'sign-up' && <label>Votre nom<input required value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" /></label>}
    <label>Adresse e-mail<input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" /></label>
    <label>Mot de passe<input required minLength={8} type="password" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete={mode === 'sign-up' ? 'new-password' : 'current-password'} /></label>
    {error && <p className="auth-error" role="alert">{error}</p>}
    <button className="button button-dark" disabled={pending}>{pending ? 'Connexion…' : mode === 'sign-up' ? 'Créer mon accès' : 'Se connecter'}</button>
  </form>
}
