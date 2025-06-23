import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Mail, Phone, User, ChevronRight, ChevronLeft, Edit, Trash2 } from 'lucide-react'

const CandidateCard = ({ candidate, onMoveCandidate, onEditCandidate, onDeleteCandidate, availableStages }) => {
  const currentStageIndex = availableStages.indexOf(candidate.etapa)
  const canMoveForward = currentStageIndex < availableStages.length - 1
  const canMoveBackward = currentStageIndex > 0

  const handleMoveForward = () => {
    if (canMoveForward) {
      const nextStage = availableStages[currentStageIndex + 1]
      onMoveCandidate(candidate.id, nextStage)
    }
  }

  const handleMoveBackward = () => {
    if (canMoveBackward) {
      const prevStage = availableStages[currentStageIndex - 1]
      onMoveCandidate(candidate.id, prevStage)
    }
  }

  const handleDelete = () => {
    if (window.confirm(`Tem certeza que deseja excluir o candidato ${candidate.nome}?`)) {
      onDeleteCandidate(candidate.id)
    }
  }

  const getStageColor = (stage) => {
    const colors = {
      'Inscrito': 'bg-blue-100 text-blue-800',
      'Triagem': 'bg-yellow-100 text-yellow-800',
      'Entrevista': 'bg-purple-100 text-purple-800',
      'Oferta': 'bg-green-100 text-green-800',
      'Contratado': 'bg-emerald-100 text-emerald-800',
      'Rejeitado': 'bg-red-100 text-red-800'
    }
    return colors[stage] || 'bg-gray-100 text-gray-800'
  }

  return (
    <Card className="mb-3 shadow-sm hover:shadow-md transition-shadow">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm font-medium flex items-center gap-2">
            <User className="w-4 h-4" />
            {candidate.nome}
          </CardTitle>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onEditCandidate(candidate)}
              className="h-6 w-6 p-0"
            >
              <Edit className="w-3 h-3" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleDelete}
              className="h-6 w-6 p-0 text-red-600 hover:text-red-800"
            >
              <Trash2 className="w-3 h-3" />
            </Button>
          </div>
        </div>
        <Badge className={getStageColor(candidate.etapa)}>
          {candidate.etapa}
        </Badge>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="space-y-2 text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <Mail className="w-3 h-3" />
            <span className="truncate">{candidate.email}</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-3 h-3" />
            <span>{candidate.telefone}</span>
          </div>
          {candidate.observacoes && (
            <div className="mt-2 p-2 bg-muted rounded text-xs">
              {candidate.observacoes}
            </div>
          )}
        </div>
        
        <div className="flex justify-between mt-3 gap-1">
          <Button
            variant="outline"
            size="sm"
            onClick={handleMoveBackward}
            disabled={!canMoveBackward}
            className="flex-1 text-xs"
          >
            <ChevronLeft className="w-3 h-3 mr-1" />
            Voltar
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={handleMoveForward}
            disabled={!canMoveForward}
            className="flex-1 text-xs"
          >
            Avançar
            <ChevronRight className="w-3 h-3 ml-1" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default CandidateCard

