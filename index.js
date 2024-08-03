document.addEventListener('DOMContentLoaded', () => {
    fetch('users.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {

            document.getElementById('inputFieldt').textContent = Donation.billAmount;
            document.getElementById('inputFieldt1').textContent = Donation.percentageTip;
            document.getElementById('inputFieldt2').textContent = Donation.tipAmount;
            document.getElementById('inputFieldt3').textContent = Donation.totalAmount;

            const itemsList = document.getElementById('users');
            itemsList.innerHTML = ''; 
            data.items.forEach(users => {
                const listItem = document.createElement('li');
                listItem.textContent = users;
                itemsList.appendChild(listItem);
            });
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
});
