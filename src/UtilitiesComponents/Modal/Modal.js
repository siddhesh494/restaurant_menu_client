import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./helper";
import Button from "../Button";


const Modal = ({ isOpen, onClose, title, description, children, onConfirm }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md p-6 rounded-lg bg-white shadow-xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">{title}</DialogTitle>
          {description && <DialogDescription className="text-sm text-gray-500">{description}</DialogDescription>}
        </DialogHeader>
        <div className="mt-4">{children}</div>
        <div className="mt-6 flex justify-end gap-3">
          <Button variant="outline" onClick={onClose}>Cancel</Button>
          <Button onClick={onConfirm}>Confirm</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
