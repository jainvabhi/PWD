const applicationServerPublicKey =
  'BDqnY_pX3EKvWbIM1BPjCuXmfKMrm9PA9KGhgOeWcFbR6DNLQaWMAGO-NWmtRjDtQwwRV5CIab5NXPE9nxBCChg';

const pushButton = document.querySelector('.js-push-btn');

let isSubscribed = false;
let swRegistration = null;

if ('serviceWorker' in navigator && 'PushManager' in window) {
  console.log('Service Worker and Push is supported');

  navigator.serviceWorker
    .register('sw.js')
    .then(function(swReg) {
      console.log('Service Worker is registered', swReg);

      swRegistration = swReg;
      initialiseUI();
    })
    .catch(function(error) {
      console.error('Service Worker Error', error);
    });
} else {
  console.warn('Push messaging is not supported');
  pushButton.textContent = 'Push Not Supported';
}

const initialiseUI = () => {
  // pushButton.addEventListener('click', function() {
  // pushButton.disabled = true;
  if (isSubscribed) {
    unsubscribeUser();
  } else {
    subscribeUser();
  }
  // });
  // Set the initial subscription value
  swRegistration.pushManager.getSubscription().then(function(subscription) {
    isSubscribed = !(subscription === null);

    if (isSubscribed) {
      console.log('User IS subscribed.');
    } else {
      console.log('User is NOT subscribed.');
    }

    updateBtn();
  });
};

const unsubscribeUser = () => {
  swRegistration.pushManager
    .getSubscription()
    .then(function(subscription) {
      if (subscription) {
        return subscription.unsubscribe();
      }
    })
    .catch(function(error) {
      console.log('Error unsubscribing', error);
    })
    .then(function() {
      updateSubscriptionOnServer(null);

      console.log('User is unsubscribed.');
      isSubscribed = false;

      updateBtn();
    });
};

const updateBtn = () => {
  if (Notification.permission === 'denied') {
    console.log('Push Messaging Blocked.');
    // pushButton.disabled = true;
    updateSubscriptionOnServer(null);
    return;
  }

  if (isSubscribed) {
    console.log('Disable Push Messaging');
  } else {
    console.log('Enable Push Messaging');
  }

  // pushButton.disabled = false;
};

const subscribeUser = () => {
  const applicationServerKey = urlB64ToUint8Array(applicationServerPublicKey);
  swRegistration.pushManager
    .subscribe({
      userVisibleOnly: true,
      applicationServerKey: applicationServerKey,
    })
    .then(function(subscription) {
      console.log('User is subscribed.');

      updateSubscriptionOnServer(subscription);

      isSubscribed = true;

      updateBtn();
    })
    .catch(function(err) {
      console.log('Failed to subscribe the user: ', err);
      updateBtn();
    });
};

const updateSubscriptionOnServer = subscription => {
  // TODO: Send subscription to application server

  // const subscriptionJson = document.querySelector('.js-subscription-json');
  // const subscriptionDetails =
  //   document.querySelector('.js-subscription-details');

  if (subscription) {
    console.log(JSON.stringify(subscription));
    // subscriptionDetails.classList.remove('is-invisible');
  } else {
    console.log('add-is-invisible');
  }
};

const urlB64ToUint8Array = base64String => {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, '+')
    .replace(/_/g, '/');

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
};

// self.addEventListener('push', function(event) {
//   console.log('[Service Worker] Push Received.');
//   console.log(`[Service Worker] Push had this data: "${event.data.text()}"`);

//   const title = 'Push Codelab';
//   const options = {
//     body: 'event.data.text()',
//     icon: 'images/icon.png',
//     badge: 'images/badge.png',
//   };

//   const notificationPromise = self.registration.showNotification(title, options);
//   event.waitUntil(notificationPromise);
// });

// self.addEventListener('notificationclick', function(event) {
//   console.log('[Service Worker] Notification click Received.');

//   event.notification.close();

//   event.waitUntil(
//     clients.openWindow('http://127.0.0.1:8887')
//   );
// });

// {"endpoint":"https://fcm.googleapis.com/fcm/send/ffNGwBLw7zE:APA91bGXXPVzsbLvTo9k6Pt909ns1VVUsQrbPm139OIuhYZfqHJ3rmnVSqRFSiceRLc986_7MC60bDyCoNT6BH-FU5LlxHAr9Z9d7j3eiBSF0cWTjfY31JvLbx1W-kopZgBm7TzKTYLG","keys":{"p256dh":"BMwfU0fS0O0fopExikEnU2xJ_H7LZg7BX7vJte34cBEKhgCuslIm8yjyHQV_AG6zK-1hHEM8PSy2nkkgYIQCbtI=","auth":"dkMf-vAUUrbT5NM51isbEQ=="}}
