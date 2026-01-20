interface ProgressBarProps {
  current: number;
  total: number;
  title?: string;
}

export default function ProgressBar({ current, total, title }: ProgressBarProps) {
  const percentage = (current / total) * 100;

  return (
    <div className="mb-8">
      {title && (
        <div className="flex justify-between items-center mb-2">
          <span className="font-poppins font-semibold text-gray-900 text-sm">
            {title}
          </span>
          <span className="text-xs text-gray-600">
            {current} / {total}
          </span>
        </div>
      )}
      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
        <div
          className="bg-emerald-600 h-full rounded-full transition-all duration-300 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
