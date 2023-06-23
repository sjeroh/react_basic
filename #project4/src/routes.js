import HomePage from "./pages/HomePage";
import ListPage from "./pages/ListPage";
import EditPage from "./pages/EditPage";
import CreatePage from "./pages/CreatePage";

const routes = [
  { path: "/", component: <HomePage /> },
  { path: "/blogs", component: <ListPage /> },
  { path: "/blogs/create", component: <CreatePage /> },
  { path: "/blogs/edit", component: <EditPage /> },
];

export default routes;
