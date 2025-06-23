import { useState } from 'react'
import KanbanColumn from './KanbanColumn'
import AddCandidateModal from './AddCandidateModal'
import EditCandidateModal from './EditCandidateModal'
import { Users } from 'lucide-react'

const KanbanBoard = () => {
  const stages = ['Inscrito', 'Triagem', 'Entrevista', 'Oferta', 'Contratado', 'Rejeitado']
  
  // Dados mock de candidatos
  const [candidates, setCandidates] = useState([
    {
      id: 1,
      nome: 'Ana Silva',
      email: 'ana.silva@email.com',
      telefone: '(11) 99999-1111',
      etapa: 'Inscrito',
      observacoes: 'Formanda em Engenharia de Software'
    },
    {
      id: 2,
      nome: 'Carlos Santos',
      email: 'carlos.santos@email.com',
      telefone: '(11) 99999-2222',
      etapa: 'Triagem',
      observacoes: 'Experiência prévia em React'
    },
    {
      id: 3,
      nome: 'Maria Oliveira',
      email: 'maria.oliveira@email.com',
      telefone: '(11) 99999-3333',
      etapa: 'Entrevista',
      observacoes: 'Muito proativa durante a triagem'
    },
    {
      id: 4,
      nome: 'João Pereira',
      email: 'joao.pereira@email.com',
      telefone: '(11) 99999-4444',
      etapa: 'Oferta',
      observacoes: 'Excelente performance na entrevista técnica'
    },
    {
      id: 5,
      nome: 'Fernanda Costa',
      email: 'fernanda.costa@email.com',
      telefone: '(11) 99999-5555',
      etapa: 'Contratado',
      observacoes: 'Aceita a oferta! Início em 15/01'
    },
    {
      id: 6,
      nome: 'Pedro Lima',
      email: 'pedro.lima@email.com',
      telefone: '(11) 99999-6666',
      etapa: 'Rejeitado',
      observacoes: 'Não atendeu aos requisitos técnicos'
    },
    {
      id: 7,
      nome: 'Juliana Rocha',
      email: 'juliana.rocha@email.com',
      telefone: '(11) 99999-7777',
      etapa: 'Inscrito',
      observacoes: 'Estudante de Ciência da Computação - 7º semestre'
    },
    {
      id: 8,
      nome: 'Rafael Mendes',
      email: 'rafael.mendes@email.com',
      telefone: '(11) 99999-8888',
      etapa: 'Triagem',
      observacoes: 'Portfolio impressionante'
    }
  ])

  // Estado para o modal de edição
  const [editingCandidate, setEditingCandidate] = useState(null)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)

  const handleMoveCandidate = (candidateId, newStage) => {
    setCandidates(prevCandidates =>
      prevCandidates.map(candidate =>
        candidate.id === candidateId
          ? { ...candidate, etapa: newStage }
          : candidate
      )
    )
  }

  const handleAddCandidate = (newCandidate) => {
    setCandidates(prevCandidates => [...prevCandidates, newCandidate])
  }

  const handleEditCandidate = (candidate) => {
    setEditingCandidate(candidate)
    setIsEditModalOpen(true)
  }

  const handleUpdateCandidate = (updatedCandidate) => {
    setCandidates(prevCandidates =>
      prevCandidates.map(candidate =>
        candidate.id === updatedCandidate.id ? updatedCandidate : candidate
      )
    )
  }

  const handleDeleteCandidate = (candidateId) => {
    setCandidates(prevCandidates =>
      prevCandidates.filter(candidate => candidate.id !== candidateId)
    )
  }

  const handleCloseEditModal = () => {
    setIsEditModalOpen(false)
    setEditingCandidate(null)
  }

  const getCandidatesByStage = (stage) => {
    return candidates.filter(candidate => candidate.etapa === stage)
  }

  const getTotalCandidates = () => {
    return candidates.length
  }

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground flex items-center gap-3">
                <Users className="w-8 h-8" />
                Dashboard de Candidatos
              </h1>
              <p className="text-muted-foreground mt-2">
                Gerencie o processo seletivo de estágio de forma visual e eficiente
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-sm text-muted-foreground">Total de candidatos</p>
                <p className="text-2xl font-bold text-foreground">{getTotalCandidates()}</p>
              </div>
              <AddCandidateModal onAddCandidate={handleAddCandidate} stages={stages} />
            </div>
          </div>
        </div>

        {/* Kanban Board */}
        <div className="flex gap-6 overflow-x-auto pb-6">
          {stages.map(stage => (
            <KanbanColumn
              key={stage}
              title={stage}
              candidates={getCandidatesByStage(stage)}
              onMoveCandidate={handleMoveCandidate}
              onEditCandidate={handleEditCandidate}
              onDeleteCandidate={handleDeleteCandidate}
              availableStages={stages}
            />
          ))}
        </div>

        {/* Footer Stats */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-6 gap-4">
          {stages.map(stage => {
            const count = getCandidatesByStage(stage).length
            return (
              <div key={stage} className="bg-card p-4 rounded-lg border text-center">
                <p className="text-sm text-muted-foreground">{stage}</p>
                <p className="text-2xl font-bold text-foreground">{count}</p>
              </div>
            )
          })}
        </div>

        {/* Edit Modal */}
        <EditCandidateModal
          candidate={editingCandidate}
          open={isEditModalOpen}
          onClose={handleCloseEditModal}
          onUpdateCandidate={handleUpdateCandidate}
          stages={stages}
        />
      </div>
    </div>
  )
}

export default KanbanBoard

