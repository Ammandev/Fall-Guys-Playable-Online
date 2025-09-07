import './App.css';
import { Unity, useUnityContext } from "react-unity-webgl";
import { useEffect, useState } from "react";

function App() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "/Fall-Guys-Playable-Online/build/Webgl.loader.js",
    dataUrl: "/Fall-Guys-Playable-Online/build/Webgl.data",
    frameworkUrl: "/Fall-Guys-Playable-Online/build/Webgl.framework.js",
    codeUrl: "/Fall-Guys-Playable-Online/build/Webgl.wasm",
  });

  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    function handleResize() {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="App">
      <Unity
        style={{
          width: `${windowDimensions.width}px`,
          height: `${windowDimensions.height}px`,
        }}
        unityProvider={unityProvider}
      />
    </div>
  );
}

export default App;
