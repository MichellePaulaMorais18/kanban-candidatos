import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import CandidateCard from './CandidateCard'

const KanbanColumn = ({ title, candidates, onMoveCandidate, onEditCandidate, onDeleteCandidate, availableStages }) => {
  const getColumnColor = (title) => {
    const colors = {
      'Inscrito': 'border-blue-200 bg-blue-50',
      'Triagem': 'border-yellow-200 bg-yellow-50',
      'Entrevista': 'border-purple-200 bg-purple-50',
      'Oferta': 'border-green-200 bg-green-50',
      'Contratado': 'border-emerald-200 bg-emerald-50',
      'Rejeitado': 'border-red-200 bg-red-50'
    }
    return colors[title] || 'border-gray-200 bg-gray-50'
  }

  const getHeaderColor = (title) => {
    const colors = {
      'Inscrito': 'text-blue-700',
      'Triagem': 'text-yellow-700',
      'Entrevista': 'text-purple-700',
      'Oferta': 'text-green-700',
      'Contratado': 'text-emerald-700',
      'Rejeitado': 'text-red-700'
    }
    return colors[title] || 'text-gray-700'
  }

  return (
    <Card className={`w-80 h-fit ${getColumnColor(title)}`}>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className={`text-lg font-semibold ${getHeaderColor(title)}`}>
            {title}
          </CardTitle>
          <Badge variant="secondary" className="text-xs">
            {candidates.length}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="space-y-3 max-h-96 overflow-y-auto">
          {candidates.length === 0 ? (
            <div className="text-center text-muted-foreground text-sm py-8">
              Nenhum candidato nesta etapa
            </div>
          ) : (
            candidates.map(candidate => (
              <CandidateCard
                key={candidate.id}
                candidate={candidate}
                onMoveCandidate={onMoveCandidate}
                onEditCandidate={onEditCandidate}
                onDeleteCandidate={onDeleteCandidate}
                availableStages={availableStages}
              />
            ))
          )}
        </div>
      </CardContent>
    </Card>
  )
}

export default KanbanColumn

