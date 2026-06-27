interface InputProps {
  label?: string;
  type?: string;
  value?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
  label,
  type = "text",
  value,
  placeholder,
  onChange,
}: InputProps) {
  return (
    <div className="flex flex-col gap-1">
      {label && <label className="text-sm text-gray-300">{label}</label>}
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className="px-3 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:border-red-500 outline-none"
      />
    </div>
  );
}
