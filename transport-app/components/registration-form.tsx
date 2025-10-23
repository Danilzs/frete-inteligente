"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useRouter } from "next/navigation"

type UserType = "autonomo" | "empresa" | "cliente"

export function RegistrationForm() {
  const router = useRouter()
  const [step, setStep] = useState<1 | 2>(1)
  const [userType, setUserType] = useState<UserType>("cliente")
  const [formData, setFormData] = useState({
    email: "",
    cpf: "",
    dataNascimento: "",
    endereco: "",
  })

  const handleUserTypeSelect = (type: UserType) => {
    setUserType(type)
    setStep(2)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Cadastro:", { userType, ...formData })
    router.push("/feed")
  }

  return (
    <Card className="w-full max-w-md bg-card border-border">
      <CardHeader className="space-y-2">
        <CardTitle className="text-2xl font-bold text-foreground">Cadastro</CardTitle>
        <CardDescription className="text-muted-foreground">
          {step === 1 ? "Selecione seu tipo de perfil" : "Complete suas informações"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {step === 1 ? (
          <div className="space-y-3">
            <Button
              onClick={() => handleUserTypeSelect("autonomo")}
              variant="outline"
              className="w-full h-14 text-base border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
            >
              Autônomo
            </Button>
            <Button
              onClick={() => handleUserTypeSelect("empresa")}
              variant="outline"
              className="w-full h-14 text-base border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
            >
              Empresa
            </Button>
            <Button
              onClick={() => handleUserTypeSelect("cliente")}
              variant="outline"
              className="w-full h-14 text-base border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
            >
              Cliente/Aluno
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="seu@email.com"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                required
                className="bg-input border-border text-foreground placeholder:text-muted-foreground focus:ring-primary"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="cpf" className="text-foreground">
                CPF
              </Label>
              <Input
                id="cpf"
                type="text"
                placeholder="000.000.000-00"
                value={formData.cpf}
                onChange={(e) => handleInputChange("cpf", e.target.value)}
                required
                className="bg-input border-border text-foreground placeholder:text-muted-foreground focus:ring-primary"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="dataNascimento" className="text-foreground">
                Data de Nascimento
              </Label>
              <Input
                id="dataNascimento"
                type="date"
                value={formData.dataNascimento}
                onChange={(e) => handleInputChange("dataNascimento", e.target.value)}
                required
                className="bg-input border-border text-foreground placeholder:text-muted-foreground focus:ring-primary"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="endereco" className="text-foreground">
                Endereço
              </Label>
              <Input
                id="endereco"
                type="text"
                placeholder="Rua, número, bairro"
                value={formData.endereco}
                onChange={(e) => handleInputChange("endereco", e.target.value)}
                required
                className="bg-input border-border text-foreground placeholder:text-muted-foreground focus:ring-primary"
              />
            </div>

            <div className="flex gap-3 pt-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => setStep(1)}
                className="flex-1 border-border hover:bg-secondary"
              >
                Voltar
              </Button>
              <Button type="submit" className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90">
                Cadastrar
              </Button>
            </div>
          </form>
        )}
      </CardContent>
    </Card>
  )
}
