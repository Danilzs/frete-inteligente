"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Home, Users, Briefcase, MessageSquare, Bell, Search, Plus, LogOut } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { PostCard } from "@/components/post-card"
import { CreatePostModal } from "@/components/create-post-modal"
import { useAuth } from "@/contexts/AuthContext"
import { postagemService } from "@/services/postagem.service"
import type { Postagem } from "@/types"

export function FeedLayout() {
  const [isCreatePostOpen, setIsCreatePostOpen] = useState(false)
  const [postagens, setPostagens] = useState<Postagem[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const { usuario, logout } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!usuario) {
      router.push("/login")
      return
    }

    carregarPostagens()
  }, [usuario, router])

  const carregarPostagens = async () => {
    try {
      setIsLoading(true)
      const data = await postagemService.listar()
      setPostagens(data)
    } catch (error) {
      console.error("Erro ao carregar postagens:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleLogout = () => {
    logout()
    router.push("/login")
  }

  const getTipoUsuario = (tipo: string) => {
    switch (tipo) {
      case "EMPRESA":
        return "Empresa de Transporte"
      case "AUTONOMO":
        return "Motorista Autônomo"
      case "CLIENTE":
        return "Cliente/Estudante"
      default:
        return tipo
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 flex-1">
            <h1 className="text-xl font-bold text-primary">TransportApp</h1>
            <div className="hidden md:flex items-center flex-1 max-w-md">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Buscar..." className="pl-10 bg-input border-border text-foreground" />
              </div>
            </div>
          </div>

          <nav className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="text-foreground hover:text-primary">
              <Home className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-foreground hover:text-primary">
              <Users className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-foreground hover:text-primary">
              <Briefcase className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-foreground hover:text-primary">
              <MessageSquare className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-foreground hover:text-primary">
              <Bell className="h-5 w-5" />
            </Button>
            <Link href="/profile">
              <Avatar className="h-8 w-8 cursor-pointer border-2 border-transparent hover:border-primary transition-colors">
                <AvatarImage src="/diverse-user-avatars.png" />
                <AvatarFallback className="bg-primary text-primary-foreground">
                  {usuario?.nome.charAt(0).toUpperCase() || "U"}
                </AvatarFallback>
              </Avatar>
            </Link>
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-foreground hover:text-primary"
              onClick={handleLogout}
              title="Sair"
            >
              <LogOut className="h-5 w-5" />
            </Button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Sidebar */}
          <aside className="hidden lg:block lg:col-span-3">
            <Card className="bg-card border-border">
              <CardHeader className="text-center pb-0">
                <Avatar className="h-20 w-20 mx-auto mb-3">
                  <AvatarImage src="/user-profile-illustration.png" />
                  <AvatarFallback className="bg-primary text-primary-foreground text-2xl">
                    {usuario?.nome.charAt(0).toUpperCase() || "U"}
                  </AvatarFallback>
                </Avatar>
                <h3 className="font-semibold text-foreground">{usuario?.nome || "Usuário"}</h3>
                <p className="text-sm text-muted-foreground">{getTipoUsuario(usuario?.tipo || "")}</p>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Conexões</span>
                    <span className="font-semibold text-primary">245</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Visualizações</span>
                    <span className="font-semibold text-primary">1,234</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </aside>

          {/* Center Feed */}
          <div className="lg:col-span-6 space-y-4">
            {/* Create Post Card */}
            <Card className="bg-card border-border">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="/diverse-user-avatars.png" />
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {usuario?.nome.charAt(0).toUpperCase() || "U"}
                    </AvatarFallback>
                  </Avatar>
                  <Button
                    variant="outline"
                    className="flex-1 justify-start text-muted-foreground hover:bg-input bg-transparent"
                    onClick={() => setIsCreatePostOpen(true)}
                  >
                    Compartilhe uma nova oferta de transporte...
                  </Button>
                  <Button
                    size="icon"
                    className="bg-primary text-primary-foreground hover:bg-primary/90"
                    onClick={() => setIsCreatePostOpen(true)}
                  >
                    <Plus className="h-5 w-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Posts */}
            {isLoading ? (
              <Card className="bg-card border-border">
                <CardContent className="pt-6 text-center text-muted-foreground">
                  Carregando postagens...
                </CardContent>
              </Card>
            ) : postagens.length === 0 ? (
              <Card className="bg-card border-border">
                <CardContent className="pt-6 text-center text-muted-foreground">
                  Nenhuma postagem disponível. Seja o primeiro a compartilhar!
                </CardContent>
              </Card>
            ) : (
              postagens.map((postagem) => (
                <Card key={postagem.id} className="bg-card border-border">
                  <CardHeader>
                    <div className="flex items-start gap-3">
                      <Avatar className="h-12 w-12">
                        <AvatarFallback className="bg-primary text-primary-foreground">
                          {typeof postagem.autor === 'object' && 'nome' in postagem.autor 
                            ? postagem.autor.nome.charAt(0).toUpperCase()
                            : "U"}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground">
                          {typeof postagem.autor === 'object' && 'nome' in postagem.autor 
                            ? postagem.autor.nome
                            : "Usuário"}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {typeof postagem.autor === 'object' && 'tipo' in postagem.autor 
                            ? getTipoUsuario(postagem.autor.tipo)
                            : ""}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <h3 className="text-lg font-bold text-foreground">{postagem.titulo}</h3>
                    <p className="text-sm text-muted-foreground">📍 {postagem.regiao}</p>
                    <p className="text-foreground">{postagem.descricao}</p>
                    <p className="text-lg font-bold text-primary">R$ {postagem.preco.toFixed(2)}</p>
                  </CardContent>
                </Card>
              ))
            )}
          </div>

          {/* Right Sidebar */}
          <aside className="hidden lg:block lg:col-span-3">
            <Card className="bg-card border-border">
              <CardHeader>
                <h3 className="font-semibold text-foreground">Sugestões para você</h3>
              </CardHeader>
              <CardContent className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={`/user-.jpg?height=40&width=40&query=user+${i}`} />
                      <AvatarFallback className="bg-muted text-muted-foreground">U{i}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-foreground truncate">Usuário {i}</p>
                      <p className="text-xs text-muted-foreground truncate">Motorista Profissional</p>
                    </div>
                    <Button size="sm" variant="outline" className="text-xs bg-transparent">
                      Seguir
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </aside>
        </div>
      </main>

      {/* Create Post Modal */}
      <CreatePostModal 
        open={isCreatePostOpen} 
        onOpenChange={setIsCreatePostOpen}
        onPostCreated={carregarPostagens}
      />
    </div>
  )
}
