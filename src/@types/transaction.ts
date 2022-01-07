export interface Transaction {
  id: string;
  date: string;
  value: number;
  createBy: string;
  type: "income" | "outcome";
}
