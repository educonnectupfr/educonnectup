export type SchoolItem = {
  name: string;
  logo: string;
  phoneNumber: string;
  address: string;
};
export interface TraningItemType {
  id: string;
  duration: number;
  startDate: string;
  limitDate: string;
  createdAt: string;
  title: string;
  school: SchoolItem;
  level: string;
  type: string;
}
