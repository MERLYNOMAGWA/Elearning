import { BookOpen, CheckCircle, Award } from "lucide-react";

interface Props {
  stats: {
    enrolled: number;
    completed: number;
    certificates: number;
  };
}

export default function SummaryCards({ stats }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-md text-center">
        <BookOpen className="w-8 h-8 mx-auto mb-2 text-[#EC8C00]" />
        <p className="text-lg font-semibold text-gray-900 dark:text-white">
          {stats.enrolled}
        </p>
        <p className="text-gray-600 dark:text-gray-300">Enrolled Courses</p>
      </div>

      <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-md text-center">
        <CheckCircle className="w-8 h-8 mx-auto mb-2 text-[#EC8C00]" />
        <p className="text-lg font-semibold text-gray-900 dark:text-white">
          {stats.completed}
        </p>
        <p className="text-gray-600 dark:text-gray-300">Completed Courses</p>
      </div>

      <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-md text-center">
        <Award className="w-8 h-8 mx-auto mb-2 text-[#EC8C00]" />
        <p className="text-lg font-semibold text-gray-900 dark:text-white">
          {stats.certificates}
        </p>
        <p className="text-gray-600 dark:text-gray-300">Certificates</p>
      </div>
    </div>
  );
}