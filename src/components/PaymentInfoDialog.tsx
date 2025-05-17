
import * as React from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { CreditCard, Banknote, Wallet, Info } from "lucide-react";

interface PaymentInfoDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  price: string;
  packageName: string;
}

export function PaymentInfoDialog({
  open,
  onOpenChange,
  price,
  packageName,
}: PaymentInfoDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md w-full">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <CreditCard className="w-5 h-5 text-primary" />
            Payment Information
          </DialogTitle>
          <DialogDescription>
            Please use one of the following methods to pay for your <span className="font-semibold">{packageName}</span> package (<span className="text-primary font-medium">{price} ZAR</span>).
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          {/* Bank Payment */}
          <div>
            <div className="flex items-center gap-2 mb-1 font-semibold text-black dark:text-white">
              <Banknote className="w-4 h-4 text-primary" /> Bank Deposit
            </div>
            <div className="pl-2 text-sm">
              <div>
                <span className="font-medium">Account Number:</span> 62745450578
              </div>
              <div>
                <span className="font-medium">E-wallet Number:</span> 63732917
              </div>
              <div>
                <span className="font-medium">Account Name:</span> Tsepang L Nkisi
              </div>
              <div>
                <span className="font-medium">Branch Name:</span> FNB Lesotho
              </div>
            </div>
          </div>
          {/* EFT */}
          <div>
            <div className="flex items-center gap-2 mb-1 font-semibold text-black dark:text-white">
              <Wallet className="w-4 h-4 text-primary" /> EFT / Mobile Payments
            </div>
            <div className="pl-2 text-sm">
              <div>
                <span className="font-medium">Mpesa Number:</span> +266 5965 5719
              </div>
              <div>
                <span className="font-medium">EcoCash Number:</span> +266 6373 2917
              </div>
              <div>
                <span className="font-medium">Names:</span> Tsepang Nkisi
              </div>
            </div>
          </div>
          <div className="flex items-start gap-2 text-xs text-muted-foreground mt-2">
            <Info className="w-4 h-4 mt-0.5" />
            Send proof of payment to our contact email/WhatsApp for verification. Balance is due on final delivery.
          </div>
        </div>
        <DialogClose asChild>
          <button className="w-full mt-4 rounded-xl px-5 py-2 font-bold bg-primary text-white hover:bg-primary/90 transition">
            Close
          </button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}
