<script>
  import { getContext } from "svelte";

  import { dataActions } from "./redux/dataSlice";
  import testSharedWorkerUrl from "./TestSharedWorker?url";
  import testWebWorkerUrl from "./TestWebWorker?url";

  let stateObject = $state({ a: "b" });

  let letObject = { b: "c" };

  const reduxStore = getContext("store");
  const webWorker = new Worker(testWebWorkerUrl);
  const sharedWorker = new SharedWorker(testSharedWorkerUrl);

  function ipcRendererSend(messageData) {
    const { ipcRenderer } = window.require("electron");

    try {
      ipcRenderer.send("ping", messageData);

      console.log("Success (Electron IPC)");
    } catch (err) {
      console.error(err);
    }
  }

  function dispatchReduxAction(payload) {
    try {
      reduxStore.dispatch(dataActions.updateSomeObject(payload));

      console.log("Success (Redux dispatch)");
    } catch (err) {
      console.error(err);
    }
  }

  function postMessageToWebWorker(eventData) {
    webWorker.addEventListener("message", (event) => {
      console.log("Main Thread", event.data);
    });

    try {
      webWorker.postMessage(eventData);

      console.log("Success (Worker.postMessage)");
    } catch (err) {
      console.error(err);
    }
  }

  function postMessageToSharedWorker(eventData) {
    try {
      sharedWorker.port.postMessage(eventData);

      console.log("Success (SharedWorker.postMessage)");
    } catch (err) {
      console.error(err);
    }
  }
</script>

<style>
  :global(body) {
    font-family: sans-serif;
  }

  button {
    width: fit-content;
    font-size: 1rem;
    padding: 4px 8px;
  }

  div {
    display: flex;
    gap: 16px;
  }
</style>

<header>
  <h1>Svelte State Issues</h1>
</header>

<main>
  <h2>Instructions</h2>
  <p>
    Ensure DevTools is open to the Console tab and click the buttons below to
    see errors.
  </p>

  <section>
    <h3>
      With <code>$state</code>
      Rune
    </h3>

    <button onclick={() => ipcRendererSend(stateObject)}>
      Electron IPC Send
    </button>

    <button onclick={() => dispatchReduxAction(stateObject)}>
      Redux Dispatch
    </button>

    <button onclick={() => postMessageToWebWorker(stateObject)}>
      Worker postMessage
    </button>

    <button onclick={() => postMessageToSharedWorker(stateObject)}>
      SharedWorker postMessage
    </button>
  </section>

  <section>
    <h3>
      With <code>let</code>
      Assignment
    </h3>

    <button onclick={() => ipcRendererSend(letObject)}>
      Electron IPC Send
    </button>

    <button onclick={() => dispatchReduxAction(letObject)}>
      Redux Dispatch
    </button>

    <button onclick={() => postMessageToWebWorker(letObject)}>
      Worker postMessage
    </button>

    <button onclick={() => postMessageToSharedWorker(letObject)}>
      SharedWorker postMessage
    </button>
  </section>
</main>
