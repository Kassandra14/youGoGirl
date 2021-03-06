const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#location-name').value.trim();
  const needed_funding = document.querySelector('#project-funding').value.trim();
  const description = document.querySelector('#project-desc').value.trim();

  if (name && needed_funding && description) {
    const response = await fetch(`/api/locations`, {
      method: 'POST',
      body: JSON.stringify({ name, needed_funding, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to find locations');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/locations/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete location');
    }
  }
};

document
  .querySelector('.new-location-form')
  .addEventListener('submit', newFormHandler);


const locationList = document.querySelector('.location-list');

if(locationList){
  locationList.addEventListener('click', delButtonHandler);
}
