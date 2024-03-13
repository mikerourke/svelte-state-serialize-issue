self.addEventListener("connect", (event) => {
  const port = event.ports[0];

  port.addEventListener("message", (e) => {
    port.postMessage(e.data);
  });
});
