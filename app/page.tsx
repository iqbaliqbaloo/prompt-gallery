/* SEO-first homepage shell: render the interactive Home client component directly so its headings, category links, and prompt content are present in server HTML. */
import Home from "../client/src/pages/Home";

export default function Page() {
  return <Home />;
}
