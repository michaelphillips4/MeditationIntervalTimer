// Request permission to use the wake lock API
// This is used to stop the screen from sleeping
let wakeLock: WakeLockSentinel | null = null;

const setWakeLock = () => {
  if ("wakeLock" in navigator) {
    navigator.wakeLock.request("screen").then((lock: WakeLockSentinel) => {
      wakeLock = lock;
      console.log("Wake Lock is active");
    });
  }
}

// Release the wake lock when the session is stopped
// This is used to stop the screen from sleeping
// and to stop the timer
const releaseWakeLock = () => {
  wakeLock?.release().then(() => {
    console.log("Wake Lock is released");
    wakeLock = null;
  })
}

export { setWakeLock, releaseWakeLock };
