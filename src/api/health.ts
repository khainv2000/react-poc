import { http } from "@/api/http";

export async function getHealth(): Promise<unknown> {
  const res = await http.get("/health");
  return res.data;
}
