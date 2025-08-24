import type { Course } from "../../../types/dashboard";

interface Props {
  courses: Course[];
}

export default function CourseProgress({ courses }: Props) {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
        Enrolled Courses
      </h2>
      <div className="space-y-4">
        {courses.map((course) => (
          <div key={course.id}>
            <p className="font-medium text-gray-800 dark:text-gray-200">{course.title}</p>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 mt-1">
              <div
                className="h-3 rounded-full bg-[#EC8C00]"
                style={{ width: `${course.progress}%` }}
              ></div>
            </div>
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {course.progress}% complete
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}