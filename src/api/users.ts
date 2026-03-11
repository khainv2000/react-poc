import { http } from "@/api/http";

export type User = {
  id: string | number;
  name: string;
};

export async function getUsers(): Promise<User[]> {
  const res = await http.get("/users");
  return res.data as User[];
}
