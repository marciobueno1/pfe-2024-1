export async function getContacts(query) {
  const response = await fetch('https://parseapi.back4app.com/classes/Contact', {
    method: "GET",
    headers: {
        'X-Parse-Application-Id': 'IWUd0IFatPNUQq9Mb1qnFxVFzrqWATAvQl7OPbnR',
        'X-Parse-REST-API-Key': 'e13dZgND1g2bizlNv8yJBPEuxZDY9Bgfw4X7cJ7q',
        'Content-Type': 'application/x-www-form-urlencoded'
    },
  });
  const data = await response.json();
  return data.results;
}

export async function createContact() {
  const response = await fetch("https://parseapi.back4app.com/classes/Contact", {
    method: "POST",
	  headers: {
		  "X-Parse-Application-Id": "IWUd0IFatPNUQq9Mb1qnFxVFzrqWATAvQl7OPbnR",
		  "X-Parse-REST-API-Key": "e13dZgND1g2bizlNv8yJBPEuxZDY9Bgfw4X7cJ7q",
		  "Content-Type": "application/json",
	  },
	  body: JSON.stringify({}),
  });
  const contact = await response.json();
  return contact;
}

export async function getContact(id) {
  const whereClause = JSON.stringify({ objectId: id });
  const url = encodeURI(`https://parseapi.back4app.com/classes/Contact/?where=${whereClause}`);
  const response = await fetch(url, {
    method: "GET",
    headers: {
      'X-Parse-Application-Id': 'IWUd0IFatPNUQq9Mb1qnFxVFzrqWATAvQl7OPbnR',
      'X-Parse-REST-API-Key': 'e13dZgND1g2bizlNv8yJBPEuxZDY9Bgfw4X7cJ7q'
    }
  });
  const data = await response.json();
  const contact = data.results[0];
  console.log('contact', contact);
  return contact ?? null;
}

export async function updateContact(id, updates) {
  console.log('updates', updates);
  updates.favorite = updates.favorite === "true";

  const response = await fetch(`https://parseapi.back4app.com/classes/Contact/${id}`, {
    method: 'PUT',
    headers: {
      'X-Parse-Application-Id': 'IWUd0IFatPNUQq9Mb1qnFxVFzrqWATAvQl7OPbnR',
      'X-Parse-REST-API-Key': 'e13dZgND1g2bizlNv8yJBPEuxZDY9Bgfw4X7cJ7q',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(updates)
  });

  let contact = await response.json();
  contact = { ...contact, ...updates};
  console.log('backend return + merge updates: ', contact);
  return contact;
}

export async function deleteContact(id) {
  const response = await fetch(`https://parseapi.back4app.com/classes/Contact/${id}`, {
    method: 'DELETE',
    headers: {
      'X-Parse-Application-Id': 'IWUd0IFatPNUQq9Mb1qnFxVFzrqWATAvQl7OPbnR',
      'X-Parse-REST-API-Key': 'e13dZgND1g2bizlNv8yJBPEuxZDY9Bgfw4X7cJ7q',
    },
  });
  return response.ok;
}
