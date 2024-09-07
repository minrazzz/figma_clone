import CursorSVG from "@/public/assets/CursorSVG";
import { CursorProps } from "@/types/type";

const Cursor: React.FC<CursorProps> = ({ color, message, x, y }) => {
  return (
    <div
      className="pointer-events-none absolute top-0 left-0"
      style={{
        transform: `translateX(${x}px) translateY(${y}px)`,
      }}
    >
      <CursorSVG color={color} />
      {/* Message todo */}
    </div>
  );
};

export default Cursor;
