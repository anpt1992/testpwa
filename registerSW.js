if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/testpwa/sw.js', { scope: '/testpwa/' })})}