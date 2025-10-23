"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ImageIcon, VideoIcon, FileTextIcon } from "lucide-react"

interface CreatePostModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function CreatePostModal({ open, onOpenChange }: CreatePostModalProps) {
  const [content, setContent] = useState("")

  const handlePost = () => {
    console.log("Posting:", content)
    setContent("")
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-card border-border max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-foreground">Criar publicação</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Avatar className="h-12 w-12">
              <AvatarImage src="/diverse-user-avatars.png" />
              <AvatarFallback className="bg-primary text-primary-foreground">U</AvatarFallback>
            </Avatar>
            <div>
              <h4 className="font-semibold text-foreground">Seu Nome</h4>
              <p className="text-sm text-muted-foreground">Público</p>
            </div>
          </div>

          <Textarea
            placeholder="Sobre o que você quer falar?"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="min-h-32 bg-input border-border text-foreground placeholder:text-muted-foreground resize-none"
          />

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-primary">
              <ImageIcon className="h-4 w-4" />
              Foto
            </Button>
            <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-primary">
              <VideoIcon className="h-4 w-4" />
              Vídeo
            </Button>
            <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-primary">
              <FileTextIcon className="h-4 w-4" />
              Documento
            </Button>
          </div>

          <Button
            onClick={handlePost}
            disabled={!content.trim()}
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
          >
            Publicar
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
