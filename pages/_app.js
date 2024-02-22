import "@/styles/globals.css";
import '../styles/transition.css';
import Transition from "@/components/Transition";

export default function App({ Component, pageProps }) {
  return (
    <Transition>
      <Component {...pageProps} />
    </Transition>
  );
}
