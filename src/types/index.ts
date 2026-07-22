export interface NasaApodItem {
  date: string;
  explanation: string;
  hdurl?: string;
  url: string;
  media_type: 'image' | 'video';
  title: string;
  copyright?: string;
  service_version?: string;
}

export interface ApodSearchQueryParams {
  date?: string;
  startDate?: string;
  endDate?: string;
  count?: number;
}

export interface SearchMessage {
  text: string;
  type: 'error' | 'warning' | 'info';
}
