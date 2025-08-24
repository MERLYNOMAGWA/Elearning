export interface Course {
  id: string;
  title: string;
  progress: number; // percentage
}

export interface Activity {
  id: string;
  description: string;
  date: string;
}

export interface Certificate {
  id: string;
  title: string;
  fileUrl: string;
}