"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Home, Users, Briefcase, MessageSquare, Bell, Search, MapPin, Mail, Phone, Calendar, Edit } from "lucide-react"
import Link from "next/link"
import { PostCard } from "@/components/post-card"

const mockUserPosts = [
  {
    id: "1",
    author: {
      name: "TransLog Transportes",
      role: "Empresa de Transporte",
      avatar: "/placeholder.svg?key=5u0hl",
    },
    content:
      "Estamos contratando! Procuramos motoristas experientes para rotas escolares. Interessados, entrem em contato.",
    timestamp: "5h atrás",
    likes: 42,
    comments: 12,
  },
  {
    id: "2",
    author: {
      name: "TransLog Transportes",
      role: "Empresa de Transporte",
      avatar: "/placeholder.svg?key=5u0hl",
    },
    content:
      "Completamos 10 anos de serviços de transporte escolar com excelência! Obrigado a todos os clientes e parceiros.",
    timestamp: "2d atrás",
    likes: 156,
    comments: 34,
  },
]

export function ProfileLayout() {
  const [activeTab, setActiveTab] = useState("posts")

  return (
    <div className="min-h-screen bg-background">
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 flex-1">
            <Link href="/feed">
              <h1 className="text-xl font-bold text-primary cursor-pointer hover:opacity-80">TransportApp</h1>
            </Link>
            <div className="hidden md:flex items-center flex-1 max-w-md">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Buscar..." className="pl-10 bg-input border-border text-foreground" />
              </div>
            </div>
          </div>

          <nav className="flex items-center gap-2">
            <Link href="/feed">
              <Button variant="ghost" size="icon" className="text-foreground hover:text-primary">
                <Home className="h-5 w-5" />
              </Button>
            </Link>
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
            <Avatar className="h-8 w-8 cursor-pointer border-2 border-primary">
              <AvatarImage src="/placeholder.svg?key=jcekw" />
              <AvatarFallback className="bg-primary text-primary-foreground">T</AvatarFallback>
            </Avatar>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 py-6">
        {/* Profile Header Card */}
        <Card className="bg-card border-border mb-6">
          <div className="h-32 bg-gradient-to-r from-primary/20 to-primary/10 rounded-t-lg" />
          <CardContent className="relative pt-0 pb-6">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div className="flex flex-col md:flex-row items-center md:items-end gap-4 -mt-16 md:-mt-12">
                <Avatar className="h-32 w-32 border-4 border-card">
                  <AvatarImage src="/placeholder.svg?key=5u0hl" />
                  <AvatarFallback className="bg-primary text-primary-foreground text-4xl">T</AvatarFallback>
                </Avatar>
                <div className="text-center md:text-left mb-4 md:mb-2">
                  <h1 className="text-2xl font-bold text-foreground">TransLog Transportes</h1>
                  <p className="text-muted-foreground">Empresa de Transporte</p>
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mt-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      São Paulo, SP
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      Desde 2013
                    </span>
                  </div>
                </div>
              </div>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
                <Edit className="h-4 w-4" />
                Editar Perfil
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-border">
              <div className="text-center">
                <p className="text-2xl font-bold text-foreground">1,234</p>
                <p className="text-sm text-muted-foreground">Seguidores</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-foreground">567</p>
                <p className="text-sm text-muted-foreground">Seguindo</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-foreground">89</p>
                <p className="text-sm text-muted-foreground">Publicações</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* About Card */}
        <Card className="bg-card border-border mb-6">
          <CardHeader>
            <h2 className="text-xl font-semibold text-foreground">Sobre</h2>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-foreground leading-relaxed">
              Empresa especializada em transporte escolar com mais de 10 anos de experiência. Oferecemos serviços de
              qualidade com segurança e pontualidade.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>contato@translog.com.br</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>(11) 98765-4321</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tabs for Posts/About/Media */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="w-full bg-card border border-border">
            <TabsTrigger value="posts" className="flex-1">
              Publicações
            </TabsTrigger>
            <TabsTrigger value="about" className="flex-1">
              Sobre
            </TabsTrigger>
            <TabsTrigger value="media" className="flex-1">
              Mídia
            </TabsTrigger>
          </TabsList>

          <TabsContent value="posts" className="space-y-4 mt-4">
            {mockUserPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </TabsContent>

          <TabsContent value="about" className="mt-4">
            <Card className="bg-card border-border">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Experiência</h3>
                    <p className="text-muted-foreground">
                      Mais de 10 anos atuando no mercado de transporte escolar, atendendo escolas e famílias em toda a
                      região metropolitana.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Serviços</h3>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Transporte escolar regular</li>
                      <li>Transporte para eventos</li>
                      <li>Fretamento corporativo</li>
                      <li>Viagens e excursões</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="media" className="mt-4">
            <Card className="bg-card border-border">
              <CardContent className="pt-6">
                <div className="grid grid-cols-3 gap-4">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="aspect-square bg-muted rounded-lg" />
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
