interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className }: CardProps) {
  return (
    <div className={`bg-gray-900 p-4 rounded-lg shadow ${className}`}>
      {children}
    </div>
  );
}
