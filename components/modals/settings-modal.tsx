"use client";

import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { useSettingsModal } from "@/hooks/use-settings-modal";
import ThemeToggle from "../theme-toggle";

function SettingsModal() {
  const settings = useSettingsModal();

  return (
    <Dialog open={settings.isOpen} onOpenChange={settings.onClose}>
      <DialogContent>
        <DialogHeader className="border-b pb-3">
          <h2 className="text-lg font-medium">My settings</h2>
        </DialogHeader>
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-y-1">
            <Label>Appearance</Label>
            <span className="text-[0.8rem] text-muted-foreground">Customize how Jotion looks on your device</span>
          </div>
          <ThemeToggle />
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default SettingsModal;
