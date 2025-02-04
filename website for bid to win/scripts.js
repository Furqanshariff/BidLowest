document.addEventListener('DOMContentLoaded', () => {
  const auctionItems = [
    {
      id: 1,
      name: 'iPhone 15 Pro',
      currentBid: 799.99,
      timeLeft: '2h 15m',
      bids: 100022,
      image: '/api/placeholder/300/200',
      endDate: '2024-08-11',
    },
    {
      id: 2,
      name: 'Vintage Watch Collection',
      currentBid: 1299.99,
      timeLeft: '4h 30m',
      bids: 7622,
      image: '/api/placeholder/300/200',
      endDate: '2024-08-11',
    },
    {
      id: 3,
      name: 'Gaming Laptop',
      currentBid: 899.99,
      timeLeft: '1h 45m',
      bids: 3000,
      image: '/api/placeholder/300/200',
      endDate: '2024-08-11',
    },
    {
      id: 4,
      name: 'JBL-SPEAKERS',
      currentBid: 2499.99,
      timeLeft: '5h 20m',
      bids: 2000,
      image: '/api/placeholder/300/200',
      endDate: '2024-08-11',
    },
  ];

  const auctionItemsContainer = document.getElementById('auctionItems');
  if (auctionItemsContainer) {
    auctionItems.forEach((item) => {
      const itemElement = document.createElement('div');
      itemElement.classList.add('glass-auction-item');
      itemElement.innerHTML = `
        <img src="${item.image}" alt="${item.name}" class="item-image">
        <div class="item-details">
          <h3 class="item-title">${item.name}</h3>
          <div class="current-bid">₹${item.currentBid.toLocaleString()}</div>
          <div class="item-info">
            <div class="time-left">
              <span>⏰</span>
              ${item.timeLeft}
            </div>
            <div class="total-bids">
              <span>👥</span>
              ${item.bids.toLocaleString()} bids
            </div>
          </div>
          <button class="bid-button">Place Bid</button>
        </div>
      `;
      auctionItemsContainer.appendChild(itemElement);
    });
  }

  const loginBtn = document.getElementById('loginBtn');
  const userDropdown = document.querySelector('.user-dropdown');
  const userIcon = document.getElementById('userIcon');
  const dropdownContent = document.querySelector('.dropdown-content');
  const logoutBtn = document.getElementById('logoutBtn');

  if (loginBtn) {
    loginBtn.addEventListener('click', () => {
      loginBtn.style.display = 'none';
      userDropdown.style.display = 'flex';
    });
  }

  if (userIcon && dropdownContent) {
    userIcon.addEventListener('click', () => {
      dropdownContent.style.display = dropdownContent.style.display === 'none' ? 'block' : 'none';
    });

    document.addEventListener('click', (event) => {
      if (!userIcon.contains(event.target) && !dropdownContent.contains(event.target)) {
        dropdownContent.style.display = 'none';
      }
    });
  }

  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      loginBtn.style.display = 'block';
      userDropdown.style.display = 'none';
    });
  }
});
