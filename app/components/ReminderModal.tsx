import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface ReminderModalProps {
  isOpen: boolean
  onClose: () => void
  message: string
  title?: string
}

export function ReminderModal({ isOpen, onClose, message, title = "Reminder" }: ReminderModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] bg-black/30 backdrop-blur-xl border border-white/10 text-[#C6C6C6] rounded-3xl">
        <DialogHeader>
          <DialogTitle className="text-[#E0FF4F] text-2xl font-bold">{title}</DialogTitle>
        </DialogHeader>
        <div className="py-4">
          <p className="text-[#C6C6C6] text-lg">{message}</p>
        </div>
        <DialogFooter>
          <Button 
            onClick={onClose}
            className="bg-[#E0FF4F] text-black hover:bg-[#002FFF] hover:text-white transition-colors rounded-xl w-full"
          >
            Got it
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

