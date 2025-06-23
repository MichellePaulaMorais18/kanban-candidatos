import { useState, useEffect } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

const EditCandidateModal = ({ candidate, open, onClose, onUpdateCandidate, stages }) => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    etapa: '',
    observacoes: ''
  })

  useEffect(() => {
    if (candidate) {
      setFormData({
        nome: candidate.nome || '',
        email: candidate.email || '',
        telefone: candidate.telefone || '',
        etapa: candidate.etapa || '',
        observacoes: candidate.observacoes || ''
      })
    }
  }, [candidate])

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Validações básicas
    if (!formData.nome.trim() || !formData.email.trim() || !formData.telefone.trim()) {
      alert('Por favor, preencha todos os campos obrigatórios.')
      return
    }

    // Validação de email básica
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      alert('Por favor, insira um email válido.')
      return
    }

    // Atualizar candidato
    const updatedCandidate = {
      ...candidate,
      ...formData
    }

    onUpdateCandidate(updatedCandidate)
    onClose()
  }

  if (!candidate) return null

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Editar Candidato</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="edit-nome">Nome *</Label>
            <Input
              id="edit-nome"
              value={formData.nome}
              onChange={(e) => handleInputChange('nome', e.target.value)}
              placeholder="Nome completo do candidato"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="edit-email">Email *</Label>
            <Input
              id="edit-email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              placeholder="email@exemplo.com"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="edit-telefone">Telefone *</Label>
            <Input
              id="edit-telefone"
              value={formData.telefone}
              onChange={(e) => handleInputChange('telefone', e.target.value)}
              placeholder="(11) 99999-9999"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="edit-etapa">Etapa</Label>
            <Select value={formData.etapa} onValueChange={(value) => handleInputChange('etapa', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione a etapa" />
              </SelectTrigger>
              <SelectContent>
                {stages.map(stage => (
                  <SelectItem key={stage} value={stage}>
                    {stage}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="edit-observacoes">Observações</Label>
            <Textarea
              id="edit-observacoes"
              value={formData.observacoes}
              onChange={(e) => handleInputChange('observacoes', e.target.value)}
              placeholder="Informações adicionais sobre o candidato..."
              rows={3}
            />
          </div>
          
          <div className="flex justify-end gap-2 pt-4">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancelar
            </Button>
            <Button type="submit">
              Salvar Alterações
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default EditCandidateModal

