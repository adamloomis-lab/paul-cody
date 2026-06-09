import { Route, Switch } from "wouter";
import ScrollToTop from "@/components/ScrollToTop";
import Home from "@/pages/Home";
import Band from "@/pages/Band";
import Live from "@/pages/Live";
import Music from "@/pages/Music";
import Gallery from "@/pages/Gallery";
import Video from "@/pages/Video";
import Merch from "@/pages/Merch";
import Contact from "@/pages/Contact";
import { Privacy, Terms, Accessibility } from "@/pages/Legal";
import NotFound from "@/pages/NotFound";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/band" component={Band} />
        <Route path="/bio" component={Band} />
        <Route path="/live" component={Live} />
        <Route path="/music" component={Music} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/video" component={Video} />
        <Route path="/merch" component={Merch} />
        <Route path="/contact" component={Contact} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/terms" component={Terms} />
        <Route path="/accessibility" component={Accessibility} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}
