import { cn } from "../../lib/utils"
export function Checkbox({ checked, onChange }) {
    return (
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
      />
    );
  }
  