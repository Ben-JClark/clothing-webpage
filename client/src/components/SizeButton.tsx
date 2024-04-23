import type { Size } from "../types/types";
import "../styling/SizeButton.css";

interface Props {
  selected: boolean;
  size: Size;
  setSize: React.Dispatch<React.SetStateAction<Size | undefined>>;
}

function SizeButton({ selected, size, setSize }: Props) {
  return (
    <div
      onClick={() => {
        setSize(size);
      }}
      className={`size-btn ${selected ? "btn-selected" : ""}`}
    >
      {size.label}
    </div>
  );
}

export default SizeButton;
