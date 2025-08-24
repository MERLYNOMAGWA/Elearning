import type { Activity } from "../../../types/dashboard";

interface Props {
  activities: Activity[];
}

export default function RecentActivity({ activities }: Props) {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
        Recent Activity
      </h2>
      <ul className="space-y-3">
        {activities.map((activity) => (
          <li key={activity.id} className="flex items-start gap-3">
            <span className="w-2 h-2 bg-[#EC8C00] rounded-full mt-2"></span>
            <div>
              <p className="text-gray-800 dark:text-gray-200">{activity.description}</p>
              <span className="text-sm text-gray-500 dark:text-gray-400">{activity.date}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}