import { useState } from "react";
import { Modal } from "./Modal";
import { SignInForm } from "./SignInForm";
// import { SignInForm } from "./SignInForm";

export const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 40,
        color: "#010101",
      }}
    >
      <button type="button" onClick={() => setIsOpen(true)}>
        Open modal
      </button>
      <Modal isOpen={isOpen} onClose={setIsOpen}>
        <SignInForm />
      </Modal>
    </div>
  );
};
