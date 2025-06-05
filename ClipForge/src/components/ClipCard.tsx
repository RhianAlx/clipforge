export function ClipCard({ title }: { title: string }) {
  return (
    <div className="bg-gray-900 p-4 rounded-lg shadow-md">
      <h2 className="text-purple-400 font-semibold">{title}</h2>
      <div className="mt-2 h-48 bg-gray-700 rounded-md" />
    </div>
  );
}
