interface DocumentsProps {
  documents?: {
    name: string;
  }[]
}

export default function Documents({ documents = [] }: DocumentsProps) {
  const extractFileName = (url: string | undefined) => {
    if (!url) return 'Untitled Document';
    return url.split('/').pop() || 'Untitled Document';
  };

  const truncateFileName = (url: string | undefined) => {
    return extractFileName(url);
  };

  if (!documents || documents.length === 0) {
    return (
      <div className="p-4 border rounded-lg bg-white">
        <h3 className="text-lg font-semibold mb-3">Documents</h3>
        <hr className="border-gray-200 -mx-4 mb-3" />
        <p className="text-gray-500 text-sm">No documents available</p>
      </div>
    );
  }

  return (
    <div className="p-4 border rounded-lg bg-white">
      <h3 className="text-lg font-semibold mb-3">Documents</h3>
      <hr className="border-gray-200 -mx-4 mb-3" />
      <div className="space-y-3">
        {documents.map((doc) => (
          <div key={doc.name || Math.random()} className="flex items-center gap-2 p-4 bg-gray-50 rounded border">
            <div className="w-5 h-5 bg-[#FFFFFF] rounded-sm flex-shrink-0" />
            <span className="text-sm">{extractFileName(doc.name)} </span>
          </div>
        ))}
      </div>
    </div>
  );
}