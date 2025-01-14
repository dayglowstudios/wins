import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"

interface WinEntryModalProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (win: { title: string; description: string; category: string }) => void
}

export function WinEntryModal({ isOpen, onClose, onSubmit }: WinEntryModalProps) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit({ title, description, category })
    setTitle('')
    setDescription('')
    setCategory('')
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] bg-black/30 backdrop-blur-xl border border-white/10 text-[#C6C6C6] rounded-3xl">
        <DialogHeader>
          <DialogTitle className="text-[#E0FF4F] text-2xl font-bold">Add New Win</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            placeholder="Win Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="bg-zinc-800/50 border-zinc-700/50 text-[#C6C6C6] placeholder-[#C6C6C6]/50 rounded-xl"
            required
          />
          <Textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="bg-zinc-800/50 border-zinc-700/50 text-[#C6C6C6] placeholder-[#C6C6C6]/50 rounded-xl"
            required
          />
          <Select value={category} onValueChange={setCategory} required>
            <SelectTrigger className="bg-zinc-800/50 border-zinc-700/50 text-[#C6C6C6] rounded-xl">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent className="bg-zinc-800/90 border-zinc-700/50 text-[#C6C6C6]">
              <SelectItem value="work">Work</SelectItem>
              <SelectItem value="personal">Personal</SelectItem>
              <SelectItem value="fitness">Fitness</SelectItem>
            </SelectContent>
          </Select>
          <DialogFooter>
            <Button type="submit" className="bg-[#E0FF4F] text-black hover:bg-[#002FFF] hover:text-white transition-colors rounded-xl w-full">
              Save Win
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

