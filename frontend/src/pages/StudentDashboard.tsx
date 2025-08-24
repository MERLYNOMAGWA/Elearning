import CourseProgress from "../components/modules/dashboard/CourseProgress";
import RecentActivity from "../components/modules/dashboard/RecentActivity";
import Certificates from "../components/modules/dashboard/Certeficates";
import SummaryCards from "../components/modules/dashboard/SummaryCards";

import type { Course, Activity, Certificate } from "../types/dashboard";

export default function StudentDashboard() {
  // Mock Data
  const courses: Course[] = [
    { id: "1", title: "Web Development", progress: 70 },
    { id: "2", title: "UI/UX Design", progress: 40 },
  ];

  const activities: Activity[] = [
    { id: "1", description: "Completed Module 3 in Web Development", date: "Aug 20, 2025" },
    { id: "2", description: "Enrolled in UI/UX Design", date: "Aug 18, 2025" },
  ];

  const certificates: Certificate[] = [
    { id: "1", title: "React Basics", fileUrl: "/certificates/react-basics.pdf" },
  ];

  const stats = {
    enrolled: courses.length,
    completed: 1,
    certificates: certificates.length,
  };

  return (
    <div className="p-6 bg-[#FFF0C5] min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Student Dashboard</h1>
      <SummaryCards stats={stats} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        <div className="lg:col-span-2 space-y-6">
          <CourseProgress courses={courses} />
          <RecentActivity activities={activities} />
        </div>
        <Certificates certificates={certificates} />
      </div>
    </div>
  );
}