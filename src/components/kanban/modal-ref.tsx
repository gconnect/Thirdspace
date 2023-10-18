import React, { useCallback, useRef } from "react";

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
}

const ModalRef: React.FC<ModalProps> = ({ onClose, children }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = useCallback((event: Event) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      onClose();
    }
  },[onClose]);

  React.useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, );

  return (
    <div className="modal-outer">
      <div ref={modalRef} className="modal-inner">
        {children}
      </div>
    </div>
  );
};

export default ModalRef;
