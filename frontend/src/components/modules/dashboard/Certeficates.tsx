import type { Certificate } from "../../../types/dashboard";
import { Download } from "lucide-react";

interface Props {
  certificates: Certificate[];
}

export default function Certificates({ certificates }: Props) {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
        Certificates
      </h2>
      <ul className="space-y-3">
        {certificates.map((cert) => (
          <li key={cert.id} className="flex justify-between items-center">
            <span className="text-gray-800 dark:text-gray-200">{cert.title}</span>
            <a
              href={cert.fileUrl}
              download
              className="flex items-center gap-1 text-[#EC8C00] hover:underline"
            >
              <Download className="w-4 h-4" /> Download
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}