/* eslint-disable no-throw-literal */

// function sleep(ms) {
//   return new Promise((resolve) => setTimeout(() => resolve(), ms));
// }

export async function getVans(url) {
  // await sleep(1000);
  const res = await fetch(url);
  if (!res.ok) {
    throw {
      message: "Failed to fetch vans",
      statusText: res.statusText,
      status: res.status,
    };
  }
  const data = await res.json();
  return data.vans;
}

export async function loginUser(creds) {
  const res = await fetch("/api/login", {
    method: "post",
    body: JSON.stringify(creds),
  });
  const data = await res.json();
  if (!res.ok) {
    throw {
      message: data.message,
      status: res.status,
      statusText: res.statusText,
    };
  }
  return data;
}
