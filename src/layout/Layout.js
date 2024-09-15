import { Fragment, useEffect } from "react";
import niceSelect from "react-nice-select";
import ImageView from "../components/ImageView";
import VideoPopup from "../components/VideoPopup";
import { animation } from "../utils";
import Footer from "./Footer";
import Header from "./header/Index";

import { useDispatch, useSelector } from "react-redux";
import { fetchProfile } from "@/redux/actions/profile";
import { fetchCategory } from "@/redux/actions/category";
import { fetchGallery } from "@/redux/actions/gallery";

const Layout = ({ header, children, footerBG, noFooter, extraClass }) => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile);
  const gallery = useSelector((state) => state.gallery);
  const category = useSelector((state) => state.category);

  useEffect(() => {
    niceSelect();
  }, []);
  useEffect(() => {
    animation();
  }, []);

  useEffect(() => {
    if (category.status === "idle") {
      dispatch(fetchCategory());
    }
  }, [category.status, dispatch]);

  useEffect(() => {
    if (gallery.status === "idle") {
      dispatch(fetchGallery());
    }
  }, [gallery.status, dispatch]);

  useEffect(() => {
    if (profile.status === "idle") {
      dispatch(fetchProfile());
    }
  }, [profile.status, dispatch]);
  return (
    <Fragment>
      <VideoPopup />
      <ImageView />
      <Header header={header} />
      {children}
      {!noFooter && <Footer bg={footerBG} extraClass={extraClass} />}
    </Fragment>
  );
};
export default Layout;
