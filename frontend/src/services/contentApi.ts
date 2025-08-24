import API from "../api/axios";

export interface ContentItem {
  id: string;
  title: string;
  description?: string;
  url: string;
  uploadDate: string;
  contentType: string;
}

export interface UploadResponse {
  message: string;
  content: {
    id: string;
    title: string;
    url: string;
    uploadDate: string;
  };
}

// Upload a document/file
export const uploadDocument = async (
  file: File,
  title?: string,
  description?: string
): Promise<UploadResponse> => {
  const formData = new FormData();
  formData.append("document", file);
  if (title) formData.append("title", title);
  if (description) formData.append("description", description);

  const { data } = await API.post<UploadResponse>("/content/upload/document", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return data;
};

// Get content by ID
export const getContent = async (id: string): Promise<ContentItem> => {
  const { data } = await API.get<ContentItem>(`/content/${id}`);
  return data;
};

// Delete content by ID
export const deleteContent = async (id: string): Promise<{ message: string }> => {
  const { data } = await API.delete<{ message: string }>(`/content/${id}`);
  return data;
};

// Get all content (if you want to add this endpoint)
export const getAllContent = async (): Promise<ContentItem[]> => {
  const { data } = await API.get<ContentItem[]>("/content");
  return data;
};
