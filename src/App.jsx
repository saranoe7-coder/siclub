import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import { AuthProvider, useAuth } from '@/lib/AuthContext'
import UserNotRegisteredError from '@/components/UserNotRegisteredError'

import Home from './pages/Home'
import Rezervacia from './pages/Rezervacia'
import GithubSync from './pages/GithubSync'

function AuthenticatedApp() {
  const {
    isLoadingAuth,
    isLoadingPublicSettings,
    authError
  } = useAuth()

  if (isLoadingPublicSettings || isLoadingAuth) {
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin"></div>
      </div>
    )
  }

  if (authError?.type === 'user_not_registered') {
    return <UserNotRegisteredError />
  }

  if (authError?.type === 'auth_required') {
    return <Navigate to="/" replace />
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/rezervacia" element={<Rezervacia />} />
      <Route path="/github-sync" element={<GithubSync />} />

      {/* fallback route */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

function App() {
  return (
    <QueryClientProvider client={queryClientInstance}>
      <AuthProvider>
        <Router>
          <AuthenticatedApp />
        </Router>
        <Toaster />
      </AuthProvider>
    </QueryClientProvider>
  )
}

export default App
