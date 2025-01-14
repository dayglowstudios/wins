import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

interface Notification {
  id: string
  message: string
  timestamp: string
}

interface NotificationsModalProps {
  isOpen: boolean
  onClose: () => void
  notifications: Notification[]
}

export function NotificationsModal({ isOpen, onClose, notifications }: NotificationsModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] bg-black/30 backdrop-blur-xl border border-white/10 text-[#C6C6C6] rounded-3xl">
        <DialogHeader>
          <DialogTitle className="text-[#E0FF4F] text-2xl font-bold">Notifications</DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[300px] pr-4">
          {notifications.length === 0 ? (
            <p className="text-center text-[#C6C6C6] py-4">All caught up! No new updates for now.</p>
          ) : (
            notifications.map((notification) => (
              <div key={notification.id} className="mb-4 p-3 bg-zinc-800/50 rounded-xl">
                <p className="text-[#C6C6C6]">{notification.message}</p>
                <p className="text-xs text-[#C6C6C6]/70 mt-1">{notification.timestamp}</p>
              </div>
            ))
          )}
        </ScrollArea>
        <Button 
          onClick={onClose}
          className="bg-[#E0FF4F] text-black hover:bg-[#002FFF] hover:text-white transition-colors rounded-xl w-full mt-4"
        >
          Close
        </Button>
      </DialogContent>
    </Dialog>
  )
}

