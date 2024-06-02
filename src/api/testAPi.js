import axiosFetch from "./config";

export async function getUsers() {
  return axiosFetch({
    method: "GET",
    url: ``,
  });
}
