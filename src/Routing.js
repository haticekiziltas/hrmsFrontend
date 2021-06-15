import CvList from "./pages/CvList";
import JobAdvertisementList from "./pages/JobAdvertisementList";
import JobAdvertisementAdd from "./pages/JobAdvertisementAdd";


export const routes = [
  {
    path: "/",
    exact: true,
   
    title: "Ana Sayfa",
    isHeaderElement: true,
  },
  {
    path: "/cvList",
    exact: true,
    component: <CvList />,
    title: "Cv Listesi",
    isHeaderElement: true,
  },
  {
    path: "/jobAdvertisementList",
    exact: true,
    component: <JobAdvertisementList/>,
    title: "İş İlanları",
    isHeaderElement: true,
  },

  {
    path: "/jobAdvertisementAdd",
    exact: true,
    component: <JobAdvertisementAdd/>,
    title: "İlan Ekle",
    isHeaderElement: true,
  },
  
 

];