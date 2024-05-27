const baseURL = "https://parseapi.back4app.com/classes/Contact";

const headers = {
  "X-Parse-Application-Id": "IWUd0IFatPNUQq9Mb1qnFxVFzrqWATAvQl7OPbnR",
  "X-Parse-REST-API-Key": "e13dZgND1g2bizlNv8yJBPEuxZDY9Bgfw4X7cJ7q",
  "Content-Type": "application/x-www-form-urlencoded",
};

const headersJson = {
  ...headers,
  "Content-Type": "application/x-www-form-urlencoded",
};

export async function getContacts(query) {
  const response = await fetch(baseURL, {
    method: "GET",
    headers: headersJson,
  });
  const data = await response.json();
  return data.results;
}

export async function createContact() {
  const response = await fetch(baseURL, {
    method: "POST",
    headers: headersJson,
    body: JSON.stringify({}),
  });
  const contact = await response.json();
  return contact;
}

export async function getContact(id) {
  const whereClause = JSON.stringify({ objectId: id });
  const url = encodeURI(`${baseURL}/?where=${whereClause}`);
  const response = await fetch(url, {
    method: "GET",
    headers: headers,
  });
  const data = await response.json();
  const contact = data.results[0];
  console.log("contact", contact);
  return contact ?? null;
}

export async function updateContact(id, updates) {
  console.log("updates", updates);
  updates.favorite = updates.favorite === "true";

  const response = await fetch(`${baseURL}/${id}`, {
    method: "PUT",
    headers: headersJson,
    body: JSON.stringify(updates),
  });

  let contact = await response.json();
  contact = { ...contact, ...updates };
  console.log("backend return + merge updates: ", contact);
  return contact;
}

export async function deleteContact(id) {
  const response = await fetch(`${baseURL}/${id}`, {
    method: "DELETE",
    headers: headers,
  });
  return response.ok;
}
