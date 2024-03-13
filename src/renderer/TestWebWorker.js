self.addEventListener("message", (event) => {
  console.log("WebWorker Thread", event.data);

  self.postMessage(event.data);
});
