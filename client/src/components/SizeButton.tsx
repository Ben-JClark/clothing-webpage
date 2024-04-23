import type { Size } from "../types/types";
import "../styling/SizeButton.css";

interface Props {
  selected: boolean; // IF true apply a selected style to the button
  size: Size;
  setSize: React.Dispatch<React.SetStateAction<Size | undefined>>; // Hook to set the selected size if this button is clicked
}

/**
 * Display a button for a particular size
 */
function SizeButton({ selected, size, setSize }: Props) {
  return (
    <div
      onClick={() => {
        setSize(size);
      }}
      // Display a different style depending if the button is selected
      className={`size-btn ${selected ? "btn-selected" : ""}`}
    >
      {size.label}
    </div>
  );
}

export default SizeButton;
